import os
import sys

class Post:

    template = '{{{{ site.baseurl }}}}{{% link {0} %}}'
    
    def __init__(self, path):
        self.path = path
        meta_dict = read_post(path, ('title', 'categories'))
        self.title = meta_dict['title']
        self.categories = meta_dict['categories']
    
    def link(self):
        return f"[{self.title}]({self.template.format(self.path)})"
    
def read_post(filepath, keys):
    '''
    Parameters
    - filepath(str): path of file
    - keys(iterable): name of metadata to extract. (e.g. title)

    Output
    - a dictionary containing metadata for each key.
    - if the metadata does not exist, the value is ! in the place of that key.
    - for keys 'categories' and 'tags', the metadata will be returned in the form of a list.
    '''

    with open(filepath, 'r', encoding='utf-8') as file:
        data = file.read()

    meta_dict = {}
    metadata = data.replace('\n\n', '\n').replace(':  ', ':').replace('\n  -', '-').replace('"', '').split('---\n')[1].rstrip('\n')

    for line in metadata.split('\n'):

        key, value = line.split(':', 1)
        if key in ('categories', 'tags') and '-' in value:
            value = value.split('- ')[1:]

        meta_dict[key] = value

    return {key:value for key, value in meta_dict.items() if key in keys}

class Node:
    
    def __init__(self, depth, content, final=False):
        self.depth = depth
        self.content = content
        self.final = final
    
    def search_childnode(self, posts):
        depth = self.depth

        childnodes = []
        for p in posts:
            if self.content == 'root' or self.content in p.categories:

                if depth == len(p.categories) - 1:
                    childnodes.append(Node(depth+1, p.link(), final=True))

                elif p.categories[depth+1] not in [i.content for i in childnodes]:
                    subnode = Node(depth+1 , content=p.categories[depth+1])
                    subnode.search_childnode(posts)
                    childnodes.append(subnode)

                else:
                    pass

        self.childnodes = childnodes

    def visualize(self):
        if self.final == True:
            print(self.content, end='  \n')
        else:
            print('**' + self.content + '**', end='  \n')

        if hasattr(self, 'childnodes'):
            subnodes = [subnode for subnode in self.childnodes]
            subnodes.sort(key=lambda x: not x.final)

            for subnode in subnodes:
                print('    '*(self.depth+1), end='')
                print('**|---**')
                subnode.visualize()

# read posts
dirpath = '_posts'
posts = [Post(dirpath + '/' + filename) for filename in os.listdir(dirpath)]

# create tree
root = Node(-1, content='root')
root.search_childnode(posts)

# visualize
tree_explain = '''---
title: "블로그 구조"
permalink: /tree/
layout: single
---
블로그의 모든 글을 정리해 놓은 트리이다. 
'''

original_stdout = sys.stdout
with open('_pages/tree.md', 'w', encoding='utf-8') as file:
    sys.stdout = file
    print(tree_explain)
    root.visualize()
    sys.stdout = original_stdout


#!/usr/bin/env python
 
# from pandocfilters import toJSONFilter, Str

def myfilter(key, value, format_, meta):
    if key == 'Str':
        #print(u'xxx')
        #value[1][0] = "prefix/" + value[1][0]
        #return Str(str(value))
        #return Str('xx');
        return Str((u'ああ').encode('utf-8'))

if __name__ == "__main__":
    toJSONFilter(myfilter)
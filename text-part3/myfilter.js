#!/usr/bin/env node

//var pattern = /^\$code\{(.*?)\}/g;

// console.log('$(xxx)'.match(pattern))
// console.log('$(xxx)'.match(pattern))
// console.log('ss  $(xxxs  '.match(pattern))
// console.log('ss  $(xxxs)  '.match(pattern))

// // Pandoc filter to convert all text to uppercase

var pandoc = require("pandoc-filter");
var Str = pandoc.Str;
var RawBlock = pandoc.RawBlock;

function action({ t: type, c: value }, format, meta) {
    if (type === "Div") {
        if (value[0][2][0][0] === 'code') {
            var name = value[0][2][1][1];
            var filename = 'src/' + name + '.html';
            var codevalue = [['lst:' + name, ['numberLines', 'javascript'],
            [['include', filename], ['caption', '']]], ''];
            var codeblock = { t: 'CodeBlock', c: codevalue }
            var div1 = RawBlock('html', '<div width="100%">');
            var rb1 = RawBlock('html', '<iframe src="' + filename + '" style="margin: auto; width:80%; height:300px;">');
            var rb2 = RawBlock('html', '</iframe>');
            var div2 = RawBlock('html', '</div>');
            return [codeblock, div1, rb1, rb2, div2];
        }
    }

    if (type === 'CodeBlock') {
        //console.error(JSON.stringify(value));
    }

    if (type === "Str") {
        //失敗　１）テキストは返せない，２）インライン要素からブロック要素は返せない
        // var matchs = value.match(pattern);
        // if (matchs) {
        //     var name = matchs[0].split(/\{|\}/g)[1];
        //     var filename = name + '.html';
        //     var text = '```{#lst:' + name + ' include=src/' + filename +
        //         ' .numberLines .javascript caption=""}' +
        //         '\r\n```' +
        //         '<iframe src="' + filename + '"></iframe>';        
    }
}

pandoc.stdio(action);
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
        if (value[0] && value[0][2] && value[0][2][0] && value[0][2][0][0] === 'code') {
            var name = value[0][2][1][1];
            var filename = 'src/' + name + '.html';
            var codevalue = [['lst:' + name, ['numberLines', 'html'],
            [['include', filename], ['caption', '']]], ''];
            var codeblock = { t: 'CodeBlock', c: codevalue }

            var blocks = [];
            blocks.push(RawBlock('html', '<div class="mytable">'));
            blocks.push(RawBlock('html', '<p class="mytdhl">source <span class="CopyButton" onclick="copycode(\'lst:' + name + '\')">c</span></p>'));
            blocks.push(RawBlock('html', '<p class="mytdhr">result</p>'));
            blocks.push(RawBlock('html', '</div>'));
            blocks.push(RawBlock('html', '<div class="mytable">'));
            blocks.push(RawBlock('html', '<div class="mytdl">'));
            blocks.push(codeblock);
            blocks.push(RawBlock('html', '</div>'));
            blocks.push(RawBlock('html', '<iframe class="mytdr" src="' + filename + '" class="myiframe"></iframe>'));
            blocks.push(RawBlock('html', '</div>'));
            return blocks;

            // var blocks = [];
            // blocks[0] = RawBlock('html', '<table width="100%">');
            // blocks[1] = RawBlock('html', '<tr><td width="50%"></td><td width="50%"></td></tr>');
            // blocks[2] = RawBlock('html', '<tr><td valign="top">');
            // blocks[3] = codeblock;
            // blocks[4] = RawBlock('html', '</td><td valign="top">');
            // blocks[5] = RawBlock('html', '<iframe src="' + filename + '" style="margin: auto; width:80%; height:300px;"></iframe>');
            // blocks[6] = RawBlock('html', '</td></tr>');
            // blocks[7] = RawBlock('html', '</table>');
            // return blocks;

            //     var div0open = RawBlock('html', '<table width="100%"><tr><td>');
            //     var div1open = RawBlock('html', '<div style="float:left;" width="50%">');
            //     var div2open = RawBlock('html', '<div style="float:left;" width="50%">');
            //     var rb1 = RawBlock('html', '<iframe src="' + filename + '" style="margin: auto; width:80%; height:300px;">');
            //     var rb2 = RawBlock('html', '</iframe>');
            //     var divclose = RawBlock('html', '</div>');
            //     var div3 = RawBlock('html', '<div style="clear:both;"></div>');
            //     return [div0open, div1open, codeblock, div2open, rb1, rb2, divclose, divclose, divclose, div3];
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
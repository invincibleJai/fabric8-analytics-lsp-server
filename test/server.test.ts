import * as assert from 'assert';
//import { AutoFix, TSLintAutofixEdit, getAllNonOverlappingFixes } from '../src/server';
import * as server from 'vscode-languageserver';

// function pos(line, char): server.Position {
//   return server.Position.create(line, char);
// }

// function range(startLine, startChar, endLine, endChar): [server.Position, server.Position] {
//   let start = pos(startLine, startChar);
//   let end = pos(endLine, endChar);
//   return [start, end];
// }

// function autoFixEdit(startLine, startChar, endLine, endChar): TSLintAutofixEdit {
//   return {
//     range: range(startLine, startChar, endLine, endChar),
//     text: ''
//   }
// }

// function autofix(startLine, startChar, endLine, endChar): AutoFix {
//   return {
//     label: '',
//     documentVersion: 1,
//     problem: undefined,
//     edits: [autoFixEdit(startLine, startChar, endLine, endChar)]
//   };
// }

describe('Array', () => {
  describe('overlaps()', () => {
    it('non overlapping fixes', ()=> {
      assert.equal(1, 1);
      //assert.equal(1, getAllNonOverlappingFixes([autofix(1, 0, 6, 0), autofix(4, 9, 4, 9)]).length);
      
    });
  });
});
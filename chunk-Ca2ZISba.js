import{h as Cn,m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,ki as V_,li as Qc,lt as Ss,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&vu(0,`po-code-editor`)},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-code-editor-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Code Editor Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-code-editor></po-code-editor>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-code-editor-basic`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Se,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let g=YO();Qc(0,`div`,1)(1,`po-code-editor`,2),z0(),Kb(`ngModelChange`,function(c){return B_(g),Tk(a.codeEditor,c)||(a.codeEditor=c),U_(c)}),Kg()(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),z0(),Kb(`ngModelChange`,function(c){return B_(g),Tk(a.language,c)||(a.language=c),U_(c)}),Kg(),Qc(7,`po-select`,4),z0(),Kb(`ngModelChange`,function(c){return B_(g),Tk(a.theme,c)||(a.theme=c),U_(c)}),Kg()(),Qc(8,`div`,1)(9,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(c){return B_(g),Tk(a.properties,c)||(a.properties=c),U_(c)}),Kg()(),Qc(10,`div`,1)(11,`po-button`,6),vt(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(wg(),Yb(`ngModel`,a.codeEditor),Rb(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),W0(),wg(5),Yb(`ngModel`,a.language),Rb(`p-options`,a.languageOptions),W0(),wg(),Yb(`ngModel`,a.theme),Rb(`p-options`,a.themeOptions),W0(),wg(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,Koe,Cn],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-code-editor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Code Editor Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-code-editor
    class="po-md-12"
    [(ngModel)]="codeEditor"
    p-height="300"
    [p-language]="language"
    [p-readonly]="properties.includes('readonly')"
    [p-theme]="theme"
  >
  </po-code-editor>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="language" [(ngModel)]="language" p-label="Language" [p-options]="languageOptions">
    </po-select>

    <po-select class="po-md-6" name="theme" [(ngModel)]="theme" p-label="Theme" [p-options]="themeOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-code-editor-labs',
  templateUrl: './sample-po-code-editor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorLabsComponent implements OnInit {
  codeEditor: string;
  language: string;
  properties: Array<string>;
  theme: string;

  public readonly languageOptions: Array<PoSelectOption> = [
    { label: 'java', value: 'java' },
    { label: 'yaml', value: 'yaml' },
    { label: 'typescript', value: 'typescript' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'readonly', label: 'Read Only' }];

  public readonly themeOptions: Array<PoSelectOption> = [
    { label: 'vs', value: 'vs' },
    { label: 'vs-dark', value: 'vs-dark' },
    { label: 'hc-black', value: 'hc-black' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.language = '';
    this.theme = '';
    this.properties = [];
    this.codeEditor = '';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-code-editor-labs`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{code=[`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}`,`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`po-code-editor`,1),z0(),Kb(`ngModelChange`,function(y){return Tk(a.code,y)||(a.code=y),y}),Kg()()),i&2&&(wg(),Yb(`ngModel`,a.code),W0())},dependencies:[MZ,QL,Cn],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-code-editor-diff`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Code Editor - Diff`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-diff',
  templateUrl: './sample-po-code-editor-diff.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorDiffComponent {
  code = [
    \`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}\`,
    \`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
\`
  ];
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-code-editor-diff`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(Qc(0,`div`,0),vu(1,`po-code-editor`,1),Kg())},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var ke=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-code-editor-terraform`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Code Editor - Terraform`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
import { PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';

declare const monaco: any;

/** Defini\xE7\xE3o da lista de sugest\xF5es para o autocomplete.
 *
 * > A fun\xE7\xE3o \`provideCompletionItems\` precisa ser exportada para ser compat\xEDvel com AOT.
 *
 * Documenta\xE7\xE3o: https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
 */
export function provideCompletionItems() {
  const suggestions: Array<PoCodeEditorRegisterableSuggestion> = [
    {
      label: 'terraform',
      insertText: '#terraform language'
    },
    {
      label: 'server',
      insertText: 'server \${1:ip}'
    }
  ];

  return { suggestions };
}

/** Definindo propriedades de uma nova sintaxe. */
export const customRegister: PoCodeEditorRegisterable = {
  language: 'terraform',
  options: {
    ignoreCase: false,
    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
    symbols: new RegExp('[=><!~?:&|+\\\\-*\\\\/\\\\^%]+'),
    escapes: new RegExp(\`\\\\\\\\(?:[abfnrtv\\\\\\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})\`),
    tokenizer: {
      root: [
        [\`[a-z_$][\\\\w$]*\`, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
        { include: '@whitespace' },
        [\`\\\\d*\\\\.\\\\d+([eE][\\\\-+]?\\\\d+)?\`, 'number.float'],
        [\`0[x][0-9a-fA-F]+\`, 'number.hex'],
        [\`\\\\d+\`, 'number'],
        [\`[;,.]\`, 'delimiter'],
        [\`\\"([^\\"\\\\\\\\]|\\\\\\\\.)*$\`, 'string.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@open', next: '@string' }],
        [\`'[^\\\\\\\\']'\`, 'string'],
        [\`'\`, 'string.invalid']
      ],
      comment: [
        [\`[^\\\\/*]+\`, 'comment'],
        [\`[\\\\/*]\`, 'comment'],
        [\`[\\\\#.*]\`, 'comment']
      ],
      string: [
        [\`[^\\\\\\\\\\"\\\\$]+\`, 'string'],
        [\`\\\\$\`, 'string.interpolated', '@interpolated'],
        [\`\\\\\\\\.\`, 'string.escape.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@close', next: '@pop' }]
      ],
      whitespace: [
        [\`[ \\\\t\\\\r\\\\n]+\`, 'white'],
        [\`\\\\/\\\\/.*$\`, 'comment'],
        [\`\\\\#.*$\`, 'comment']
      ],
      interpolated: [
        [\`[{]\`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
        ['', '', '@pop']
      ]
    }
  },
  suggestions: { provideCompletionItems: provideCompletionItems }
};
`),Kg(),Qc(25,`label`,6),Sk(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),Kg(),Qc(27,`pre`,9),Sk(28,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com forRegister.
 */

// import { NgModule } from '@angular/core';
// import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
//
//
// @NgModule({
//   imports: [
//     PoModule,
//     PoCodeEditorModule.forRegister(customRegister)
//   ],
//   declarations: [
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoCodeEditorRegisterModule { }
`),Kg()()()()(),Qc(29,`div`,10),vu(30,`sample-po-code-editor-terraform`),Kg(),vu(31,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&vu(0,`po-code-editor`,0),i&2&&Rb(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-code-editor-suggestion`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Code Editor Suggestion`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-suggestion',
  templateUrl: './sample-po-code-editor-suggestion.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorSuggestionComponent {
  language = 'html';
  suggestions = [
    { label: 'po', insertText: 'PO UI' },
    { label: 'ng', insertText: 'Angular' },
    { label: 'po-btn', insertText: '<po-button p-label="\${1:label}"></po-button>' },
    { label: 'po-inp', insertText: '<po-input name="\${1:name}" [(ngModel)]="\${2:model}"></po-input>' }
  ];
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-code-editor-suggestion`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:301,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Code Editor Register`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-code-editor-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-language`,1,`docs-api-properties-row`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-show-diff`,1,`docs-api-properties-row`],[`id`,`prop-p-suggestions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[`id`,`prop-p-theme`,1,`docs-api-properties-row`],[`id`,`interface-po-code-editor-registerable-suggestion`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-code-editor-registerable-suggestion-documentation`,1,`docs-api-properties-row`],[`id`,`interface-po-code-editor-registerable-suggestion-insert-text`,1,`docs-api-properties-row`],[`id`,`interface-po-code-editor-registerable-suggestion-label`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-code-editor.`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Subcomponentes:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return a.openDoc(`po-code-editor-register`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoCodeEditorComponent`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`O `),Qc(19,`code`),Sk(20,`po-code-editor`),Kg(),Sk(21,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),Kg(),Qc(22,`p`),Sk(23,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),Kg(),Qc(24,`p`),Sk(25,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),Kg(),Qc(26,`p`),Sk(27,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),Kg(),Qc(28,`h4`),Sk(29,`Adicionando o pacote @po-ui/ng-code-editor`),Kg(),Qc(30,`p`),Sk(31,`Para instalar o pacote `),Qc(32,`code`),Sk(33,`po-code-editor`),Kg(),Sk(34,` em sua aplicação execute:`),Kg(),Qc(35,`pre`)(36,`code`,8),Sk(37,"`ng add @po-ui/ng-code-editor`\n"),Kg()(),Qc(38,`p`),Sk(39,`O comando `),Qc(40,`code`),Sk(41,`ng add`),Kg(),Sk(42,` do `),Qc(43,`code`),Sk(44,`Angular CLI`),Kg(),Sk(45,`:`),Kg(),Qc(46,`ul`)(47,`li`),Sk(48,`inclui o `),Qc(49,`code`),Sk(50,`po-code-editor`),Kg(),Sk(51,` no seu projeto;`),Kg(),Qc(52,`li`),Sk(53,`adiciona o módulo `),Qc(54,`code`),Sk(55,`PoCodeEditorModule`),Kg(),Sk(56,`:;`),Kg()(),Qc(57,`pre`)(58,`code`),Sk(59,`// app.module.ts
...
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
...
@NgModule({
  imports: [
    ...
    PoModule,
    PoCodeEditorModule
  ],
  ...
})
export class AppModule { }
`),Kg()(),Qc(60,`ul`)(61,`li`),Sk(62,`adiciona o tema PO UI e também o `),Qc(63,`em`),Sk(64,`asset`),Kg(),Sk(65,` do Monaco no arquivo `),Qc(66,`code`),Sk(67,`angular.json`),Kg(),Sk(68,`, conforme abaixo:`),Kg()(),Qc(69,`pre`),j_(),Sk(70,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),V_(),Kg()(),Qc(71,`div`,9)(72,`h4`,10),Sk(73,`Seletor`),Kg(),Qc(74,`pre`,11),Sk(75,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),Kg()(),Qc(76,`h4`,12),Sk(77,`Propriedades`),Kg(),Qc(78,`table`,13)(79,`tr`,14)(80,`th`,15),Sk(81,`Nome`),Kg(),Qc(82,`th`,15),Sk(83,`Tipo`),Kg(),Qc(84,`th`,15),Sk(85,`Padrão`),Kg(),Qc(86,`th`,15),Sk(87,`Descrição`),Kg()(),Qc(88,`tr`,16)(89,`td`,17)(90,`div`,18)(91,`span`,19),Sk(92,` p-height`),vu(93,`br`),Kg()()(),Qc(94,`td`,20)(95,`code`,21),Sk(96,`string`),Kg()(),Qc(97,`td`,22),Sk(98,`-`),Kg(),Qc(99,`td`,23)(100,`em`)(101,`strong`),Sk(102,`(opcional)`),Kg()(),Qc(103,`p`),Sk(104,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),Kg()()(),Qc(105,`tr`,24)(106,`td`,17)(107,`div`,18)(108,`span`,19),Sk(109,` p-language`),vu(110,`br`),Kg()()(),Qc(111,`td`,20)(112,`code`,21),Sk(113,`string`),Kg()(),Qc(114,`td`,22)(115,`p`)(116,`code`),Sk(117,`plainText`),Kg()()(),Qc(118,`td`,23)(119,`em`)(120,`strong`),Sk(121,`(opcional)`),Kg()(),Qc(122,`p`),Sk(123,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Qc(124,`a`,25)(125,`strong`),Sk(126,`Monaco Editor`),Kg()(),Sk(127,`.`),Kg(),Qc(128,`p`),Sk(129,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Qc(130,`a`,26)(131,`strong`),Sk(132,`po-code-editor-register`),Kg()(),Sk(133,`.`),Kg()()(),Qc(134,`tr`,27)(135,`td`,17)(136,`div`,18)(137,`span`,19),Sk(138,` p-readonly`),vu(139,`br`),Kg()()(),Qc(140,`td`,20)(141,`code`,28),Sk(142,`boolean`),Kg()(),Qc(143,`td`,22)(144,`p`)(145,`code`),Sk(146,`false`),Kg()()(),Qc(147,`td`,23)(148,`em`)(149,`strong`),Sk(150,`(opcional)`),Kg()(),Qc(151,`p`),Sk(152,`Indica se o editor será aberto em modo de leitura.`),Kg(),Qc(153,`p`),Sk(154,`Neste caso, não é possível editar o código inserido.`),Kg(),Qc(155,`p`),Sk(156,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),Kg()()(),Qc(157,`tr`,29)(158,`td`,17)(159,`div`,18)(160,`span`,19),Sk(161,` p-show-diff`),vu(162,`br`),Kg()()(),Qc(163,`td`,20)(164,`code`,28),Sk(165,`boolean`),Kg()(),Qc(166,`td`,22)(167,`p`)(168,`code`),Sk(169,`false`),Kg()()(),Qc(170,`td`,23)(171,`em`)(172,`strong`),Sk(173,`(opcional)`),Kg()(),Qc(174,`p`),Sk(175,`Indica se o editor será aberto em modo de comparação.`),Kg(),Qc(176,`p`),Sk(177,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),Kg(),Qc(178,`p`),Sk(179,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),Kg()()(),Qc(180,`tr`,30)(181,`td`,17)(182,`div`,18)(183,`span`,19),Sk(184,` p-suggestions`),vu(185,`br`),Kg()()(),Qc(186,`td`,20)(187,`code`,31),Sk(188,`Array<PoCodeEditorRegisterableSuggestion>`),Kg()(),Qc(189,`td`,22),Sk(190,`-`),Kg(),Qc(191,`td`,23)(192,`em`)(193,`strong`),Sk(194,`(opcional)`),Kg()(),Qc(195,`p`),Sk(196,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),Kg(),Qc(197,`p`),Sk(198,`Para visualizar a lista de sugestões use o comando `),Qc(199,`code`),Sk(200,`CTRL + SPACE`),Kg(),Sk(201,`.`),Kg(),Qc(202,`p`),Sk(203,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),Kg(),Qc(204,`p`),Sk(205,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),Kg(),Qc(206,`pre`)(207,`code`),Sk(208,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),Kg()(),Qc(209,`p`),Sk(210,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),Kg()()(),Qc(211,`tr`,32)(212,`td`,17)(213,`div`,18)(214,`span`,19),Sk(215,` p-theme`),vu(216,`br`),Kg()()(),Qc(217,`td`,20)(218,`code`,21),Sk(219,`string`),Kg()(),Qc(220,`td`,22)(221,`p`)(222,`code`),Sk(223,`vs`),Kg()()(),Qc(224,`td`,23)(225,`em`)(226,`strong`),Sk(227,`(opcional)`),Kg()(),Qc(228,`p`),Sk(229,`Define um tema para o editor.`),Kg(),Qc(230,`p`),Sk(231,`Temas válidos:`),Kg(),Qc(232,`ul`)(233,`li`)(234,`code`),Sk(235,`vs-dark`),Kg()(),Qc(236,`li`)(237,`code`),Sk(238,`vs`),Kg()(),Qc(239,`li`)(240,`code`),Sk(241,`hc-black`),Kg()()(),Qc(242,`p`),Sk(243,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),Kg()()()(),Qc(244,`h3`),Sk(245,`Interfaces`),Kg(),Qc(246,`h4`,33)(247,`code`,7),Sk(248,`PoCodeEditorRegisterableSuggestion`),Kg()(),Qc(249,`div`,2)(250,`p`),Sk(251,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),Kg()(),Qc(252,`h4`,12),Sk(253,`Propriedades`),Kg(),Qc(254,`table`,13)(255,`tr`,14)(256,`th`,15),Sk(257,`Nome`),Kg(),Qc(258,`th`,15),Sk(259,`Tipo`),Kg(),Qc(260,`th`,15),Sk(261,`Descrição`),Kg()(),Qc(262,`tr`,34)(263,`td`,17)(264,`div`,18)(265,`span`,19),Sk(266,` documentation`),vu(267,`br`),Kg()()(),Qc(268,`td`,20)(269,`code`,21),Sk(270,`string`),Kg()(),Qc(271,`td`,23)(272,`em`)(273,`strong`),Sk(274,`(opcional)`),Kg()(),Qc(275,`p`),Sk(276,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),Kg()()(),Qc(277,`tr`,35)(278,`td`,17)(279,`div`,18)(280,`span`,19),Sk(281,` insertText`),vu(282,`br`),Kg()()(),Qc(283,`td`,20)(284,`code`,21),Sk(285,`string`),Kg()(),Qc(286,`td`,23)(287,`p`),Sk(288,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),Kg()()(),Qc(289,`tr`,36)(290,`td`,17)(291,`div`,18)(292,`span`,19),Sk(293,` label`),vu(294,`br`),Kg()()(),Qc(295,`td`,20)(296,`code`,21),Sk(297,`string`),Kg()(),Qc(298,`td`,23)(299,`p`),Sk(300,`Texto que será exibido na lista de sugestões.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function Ie(n,Ae){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-code-editor-basic-view`)(2,`sample-po-code-editor-labs-view`)(3,`sample-po-code-editor-diff-view`)(4,`sample-po-code-editor-terraform-view`)(5,`sample-po-code-editor-suggestion-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var qe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ie,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-code-editor-doc`),Kg()()()),i&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,le,pe,me,ue,Ce,fe],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[GV.forChild(qe),GV]})}return n})();var St=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,he]})}return n})();export{St as DocPoCodeEditorModule};
import{n as P,r as Cn,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,cr as Bk,ea as ge$1,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,no as yk,nr as An,or as B_,qa as vt,qi as de$1,tr as Ak,va as nk,vn as oi,xi as VO,ya as nm,yi as U_}from"./chunk-BJubg121.js";var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&_u(0,`po-code-editor`)},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Code Editor Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-code-editor></po-code-editor>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-code-editor-basic`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,he,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ie],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:`java`,value:`java`},{label:`yaml`,value:`yaml`},{label:`typescript`,value:`typescript`}];propertiesOptions=[{value:`readonly`,label:`Read Only`}];themeOptions=[{label:`vs`,value:`vs`},{label:`vs-dark`,value:`vs-dark`},{label:`hc-black`,value:`hc-black`}];ngOnInit(){this.restore()}restore(){this.language=``,this.theme=``,this.properties=[],this.codeEditor=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-labs`]],standalone:!1,decls:12,vars:10,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-height`,`300`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-language`,`p-readonly`,`p-theme`],[`name`,`language`,`p-label`,`Language`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let E=ZO();Jc(0,`div`,1)(1,`po-code-editor`,2),W0(),Zb(`ngModelChange`,function(m){return H_(E),Ak(a.codeEditor,m)||(a.codeEditor=m),$_(m)}),Zg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-select`,3),W0(),Zb(`ngModelChange`,function(m){return H_(E),Ak(a.language,m)||(a.language=m),$_(m)}),Zg(),Jc(7,`po-select`,4),W0(),Zb(`ngModelChange`,function(m){return H_(E),Ak(a.theme,m)||(a.theme=m),$_(m)}),Zg()(),Jc(8,`div`,1)(9,`po-checkbox-group`,5),W0(),Zb(`ngModelChange`,function(m){return H_(E),Ak(a.properties,m)||(a.properties=m),$_(m)}),Zg()(),Jc(10,`div`,1)(11,`po-button`,6),vt(`p-click`,function(){return a.restore()}),Zg()()()}i&2&&(Ig(),Kb(`ngModel`,a.codeEditor),Ab(`p-language`,a.language)(`p-readonly`,a.properties.includes(`readonly`))(`p-theme`,a.theme),Y0(),Ig(5),Kb(`ngModel`,a.language),Ab(`p-options`,a.languageOptions),Y0(),Ig(),Kb(`ngModel`,a.theme),Ab(`p-options`,a.themeOptions),Y0(),Ig(2),Kb(`ngModel`,a.properties),Ab(`p-options`,a.propertiesOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,Koe,Cn],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Code Editor Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-code-editor-labs`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,xe,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{code=[`class Calc {
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
`];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-diff`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`typescript`,`p-show-diff`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`po-code-editor`,1),W0(),Zb(`ngModelChange`,function(y){return Ak(a.code,y)||(a.code=y),y}),Zg()()),i&2&&(Ig(),Kb(`ngModel`,a.code),Y0())},dependencies:[TZ,JL,Cn],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-diff-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Code Editor - Diff`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-code-editor-diff`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Te,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-terraform`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-height`,`300`,`p-language`,`terraform`,1,`po-md-12`]],template:function(i,a){i&1&&(Jc(0,`div`,0),_u(1,`po-code-editor`,1),Zg())},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-terraform-view`]],standalone:!1,decls:32,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Code Editor - Terraform`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
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
`),Zg(),Jc(25,`label`,6),Tk(26,`sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts`),Zg(),Jc(27,`pre`,9),Tk(28,`/**
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
`),Zg()()()()(),Jc(29,`div`,10),_u(30,`sample-po-code-editor-terraform`),Zg(),_u(31,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Me,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{language=`html`;suggestions=[{label:`po`,insertText:`PO UI`},{label:`ng`,insertText:`Angular`},{label:`po-btn`,insertText:'<po-button p-label="${1:label}"></po-button>'},{label:`po-inp`,insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-suggestion`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-suggestions`,`p-language`]],template:function(i,a){i&1&&_u(0,`po-code-editor`,0),i&2&&Ab(`p-suggestions`,a.suggestions)(`p-language`,a.language)},dependencies:[Cn],encapsulation:2,changeDetection:1})}return n})();var Ve=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-suggestion-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Code Editor Suggestion`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-code-editor-suggestion`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ve,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-code-editor-doc`]],standalone:!1,decls:297,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-shell`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://microsoft.github.io/monaco-editor/`],[`href`,`https://po-ui.io/documentation/po-code-editor-register?view=doc`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCodeEditorRegisterableSuggestion>`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoCodeEditorModule } from '@po-ui/ng-code-editor';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-code-editor.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoCodeEditorComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O `),Jc(15,`code`),Tk(16,`po-code-editor`),Zg(),Tk(17,` é um componente para edição de código fonte baseado no Monaco Editor da Microsoft.`),Zg(),Jc(18,`p`),Tk(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),Zg(),Jc(20,`p`),Tk(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),Zg(),Jc(22,`p`),Tk(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),Zg(),Jc(24,`h4`),Tk(25,`Adicionando o pacote @po-ui/ng-code-editor`),Zg(),Jc(26,`p`),Tk(27,`Para instalar o pacote `),Jc(28,`code`),Tk(29,`po-code-editor`),Zg(),Tk(30,` em sua aplicação execute:`),Zg(),Jc(31,`pre`)(32,`code`,6),Tk(33,"`ng add @po-ui/ng-code-editor`\n"),Zg()(),Jc(34,`p`),Tk(35,`O comando `),Jc(36,`code`),Tk(37,`ng add`),Zg(),Tk(38,` do `),Jc(39,`code`),Tk(40,`Angular CLI`),Zg(),Tk(41,`:`),Zg(),Jc(42,`ul`)(43,`li`),Tk(44,`inclui o `),Jc(45,`code`),Tk(46,`po-code-editor`),Zg(),Tk(47,` no seu projeto;`),Zg(),Jc(48,`li`),Tk(49,`adiciona o módulo `),Jc(50,`code`),Tk(51,`PoCodeEditorModule`),Zg(),Tk(52,`:;`),Zg()(),Jc(53,`pre`)(54,`code`),Tk(55,`// app.module.ts
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
`),Zg()(),Jc(56,`ul`)(57,`li`),Tk(58,`adiciona o tema PO UI e também o `),Jc(59,`em`),Tk(60,`asset`),Zg(),Tk(61,` do Monaco no arquivo `),Jc(62,`code`),Tk(63,`angular.json`),Zg(),Tk(64,`, conforme abaixo:`),Zg()(),Jc(65,`pre`),U_(),Tk(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),B_(),Zg()(),Jc(67,`div`,7)(68,`h4`,8),Tk(69,`Seletor`),Zg(),Jc(70,`pre`,9),Tk(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),Zg()(),Jc(72,`h4`,10),Tk(73,`Propriedades`),Zg(),Jc(74,`table`,11)(75,`tr`,12)(76,`th`,13),Tk(77,`Nome`),Zg(),Jc(78,`th`,13),Tk(79,`Tipo`),Zg(),Jc(80,`th`,13),Tk(81,`Padrão`),Zg(),Jc(82,`th`,13),Tk(83,`Descrição`),Zg()(),Jc(84,`tr`,14)(85,`td`,15)(86,`div`,16)(87,`span`,17),Tk(88,` p-height`),_u(89,`br`),Zg()()(),Jc(90,`td`,18)(91,`code`,19),Tk(92,`string`),Zg()(),Jc(93,`td`,20),Tk(94,`-`),Zg(),Jc(95,`td`,21)(96,`em`)(97,`strong`),Tk(98,`(opcional)`),Zg()(),Jc(99,`p`),Tk(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),Zg()()(),Jc(101,`tr`,14)(102,`td`,15)(103,`div`,16)(104,`span`,17),Tk(105,` p-language`),_u(106,`br`),Zg()()(),Jc(107,`td`,18)(108,`code`,19),Tk(109,`string`),Zg()(),Jc(110,`td`,20)(111,`p`)(112,`code`),Tk(113,`plainText`),Zg()()(),Jc(114,`td`,21)(115,`em`)(116,`strong`),Tk(117,`(opcional)`),Zg()(),Jc(118,`p`),Tk(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Jc(120,`a`,22)(121,`strong`),Tk(122,`Monaco Editor`),Zg()(),Tk(123,`.`),Zg(),Jc(124,`p`),Tk(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Jc(126,`a`,23)(127,`strong`),Tk(128,`po-code-editor-register`),Zg()(),Tk(129,`.`),Zg()()(),Jc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),Tk(134,` p-readonly`),_u(135,`br`),Zg()()(),Jc(136,`td`,18)(137,`code`,24),Tk(138,`boolean`),Zg()(),Jc(139,`td`,20)(140,`p`)(141,`code`),Tk(142,`false`),Zg()()(),Jc(143,`td`,21)(144,`em`)(145,`strong`),Tk(146,`(opcional)`),Zg()(),Jc(147,`p`),Tk(148,`Indica se o editor será aberto em modo de leitura.`),Zg(),Jc(149,`p`),Tk(150,`Neste caso, não é possível editar o código inserido.`),Zg(),Jc(151,`p`),Tk(152,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),Zg()()(),Jc(153,`tr`,14)(154,`td`,15)(155,`div`,16)(156,`span`,17),Tk(157,` p-show-diff`),_u(158,`br`),Zg()()(),Jc(159,`td`,18)(160,`code`,24),Tk(161,`boolean`),Zg()(),Jc(162,`td`,20)(163,`p`)(164,`code`),Tk(165,`false`),Zg()()(),Jc(166,`td`,21)(167,`em`)(168,`strong`),Tk(169,`(opcional)`),Zg()(),Jc(170,`p`),Tk(171,`Indica se o editor será aberto em modo de comparação.`),Zg(),Jc(172,`p`),Tk(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),Zg(),Jc(174,`p`),Tk(175,`Obs: Esta propriedade não refletirá efeito se alterada após o carregamento do componente.`),Zg()()(),Jc(176,`tr`,14)(177,`td`,15)(178,`div`,16)(179,`span`,17),Tk(180,` p-suggestions`),_u(181,`br`),Zg()()(),Jc(182,`td`,18)(183,`code`,25),Tk(184,`Array<PoCodeEditorRegisterableSuggestion>`),Zg()(),Jc(185,`td`,20),Tk(186,`-`),Zg(),Jc(187,`td`,21)(188,`em`)(189,`strong`),Tk(190,`(opcional)`),Zg()(),Jc(191,`p`),Tk(192,`Lista de sugestões usadas pelo autocomplete dentro do editor.`),Zg(),Jc(193,`p`),Tk(194,`Para visualizar a lista de sugestões use o comando `),Jc(195,`code`),Tk(196,`CTRL + SPACE`),Zg(),Tk(197,`.`),Zg(),Jc(198,`p`),Tk(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),Zg(),Jc(200,`p`),Tk(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),Zg(),Jc(202,`pre`)(203,`code`),Tk(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),Zg()(),Jc(205,`p`),Tk(206,`Ao fornecer uma lista de sugestões é possível acelerar a escrita de scripts pelos usuários.`),Zg()()(),Jc(207,`tr`,14)(208,`td`,15)(209,`div`,16)(210,`span`,17),Tk(211,` p-theme`),_u(212,`br`),Zg()()(),Jc(213,`td`,18)(214,`code`,19),Tk(215,`string`),Zg()(),Jc(216,`td`,20)(217,`p`)(218,`code`),Tk(219,`vs`),Zg()()(),Jc(220,`td`,21)(221,`em`)(222,`strong`),Tk(223,`(opcional)`),Zg()(),Jc(224,`p`),Tk(225,`Define um tema para o editor.`),Zg(),Jc(226,`p`),Tk(227,`Temas válidos:`),Zg(),Jc(228,`ul`)(229,`li`)(230,`code`),Tk(231,`vs-dark`),Zg()(),Jc(232,`li`)(233,`code`),Tk(234,`vs`),Zg()(),Jc(235,`li`)(236,`code`),Tk(237,`hc-black`),Zg()()(),Jc(238,`p`),Tk(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),Zg()()()(),Jc(240,`h3`),Tk(241,`Interfaces`),Zg(),Jc(242,`h4`,26)(243,`code`,5),Tk(244,`PoCodeEditorRegisterableSuggestion`),Zg()(),Jc(245,`div`,2)(246,`p`),Tk(247,`Interface para configuração da lista de sugestão do autocomplete do code editor.`),Zg()(),Jc(248,`h4`,10),Tk(249,`Propriedades`),Zg(),Jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),Tk(253,`Nome`),Zg(),Jc(254,`th`,13),Tk(255,`Tipo`),Zg(),Jc(256,`th`,13),Tk(257,`Descrição`),Zg()(),Jc(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),Tk(262,` documentation`),_u(263,`br`),Zg()()(),Jc(264,`td`,18)(265,`code`,19),Tk(266,`string`),Zg()(),Jc(267,`td`,21)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Texto de ajuda que será exibido caso o usuário deseje ver mais informações sobre a sugestão.`),Zg()()(),Jc(273,`tr`,14)(274,`td`,15)(275,`div`,16)(276,`span`,17),Tk(277,` insertText`),_u(278,`br`),Zg()()(),Jc(279,`td`,18)(280,`code`,19),Tk(281,`string`),Zg()(),Jc(282,`td`,21)(283,`p`),Tk(284,`Texto que será inserido no editor ao selecionar a sugestão exibida pelo autocomplete.`),Zg()()(),Jc(285,`tr`,14)(286,`td`,15)(287,`div`,16)(288,`span`,17),Tk(289,` label`),_u(290,`br`),Zg()()(),Jc(291,`td`,18)(292,`code`,19),Tk(293,`string`),Zg()(),Jc(294,`td`,21)(295,`p`),Tk(296,`Texto que será exibido na lista de sugestões.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Le(n,Ie){if(n&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(l);let a=nk();return $_(a.changeTab(`web`))}),_u(1,`sample-po-code-editor-basic-view`)(2,`sample-po-code-editor-labs-view`)(3,`sample-po-code-editor-diff-view`)(4,`sample-po-code-editor-terraform-view`)(5,`sample-po-code-editor-suggestion-view`),Zg()}if(n&2){let l=nk();Ab(`p-active`,l.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Code Editor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Le,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-code-editor-doc`),Zg()()()),i&2&&(Ab(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ae,le,se,me,ue,ge],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[WV.forChild(Oe),WV]})}return n})();var gt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,fe]})}return n})();export{gt as DocPoCodeEditorModule};
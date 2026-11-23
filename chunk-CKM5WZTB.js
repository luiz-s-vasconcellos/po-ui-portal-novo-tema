import{m as P,p as M}from"./main-RBGX2DMP.js";import{$a as tm,Ar as I,At as Zte,Ca as j_,Ci as UO,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Rn as voe,Ti as U_,Tr as Gb,Ut as cae,W as Mze,Wi as YO,Wr as MZ,Zr as No,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,io as vt$1,j as I4,k as Goe,ki as V_,li as Qc,ra as de,rn as i5,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,sr as BO,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var Se=(()=>{class a{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&vu(0,`po-search-ai`,0)},dependencies:[i5],encapsulation:2})}return a})();var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-search-ai-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO AI Search Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-search-ai-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component } from '@angular/core';

import { PoSearchAiColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-basic',
  templateUrl: './sample-po-search-ai-basic.component.html',
  standalone: false
})
export class SamplePoSearchAiBasicComponent {
  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();function qe(a,R){if(a&1&&(Qc(0,`po-container`,4)(1,`p`)(2,`strong`),Sk(3,`Query:`),Kg(),Sk(4),Kg(),Qc(5,`p`)(6,`strong`),Sk(7,`Filtro:`),Kg(),Sk(8),Kg(),Qc(9,`p`)(10,`strong`),Sk(11,`Descrição:`),Kg(),Sk(12),Kg(),Qc(13,`p`)(14,`strong`),Sk(15,`Confiança:`),Kg(),Sk(16),Kg()()),a&2){let o=ek();wg(4),tm(` `,o.result.query),wg(4),tm(` `,o.result.filter),wg(4),tm(` `,o.result.description),wg(4),tm(` `,o.result.confidence)}}var ge=(()=>{class a{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(o){this.event=o}onResult(o){this.result=o,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let u=YO();Qc(0,`po-search-ai`,1),vt$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(p){return i.onResult(p)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Kg(),FO(4,qe,17,4,`po-container`,4),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.label,p)||(i.label=p),U_(p)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.help,p)||(i.help=p),U_(p)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.helperText,p)||(i.helperText=p),U_(p)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.placeholder,p)||(i.placeholder=p),U_(p)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.errorPattern,p)||(i.errorPattern=p),U_(p)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.url,p)||(i.url=p),U_(p)}),Kg(),Qc(14,`po-number`,11),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.timeout,p)||(i.timeout=p),U_(p)}),Kg(),Qc(15,`po-decimal`,12),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.minConfidence,p)||(i.minConfidence=p),U_(p)}),Kg(),Qc(16,`po-checkbox-group`,13),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.properties,p)||(i.properties=p),U_(p)}),Kg(),Qc(17,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(p){return B_(u),Tk(i.size,p)||(i.size=p),U_(p)}),Kg(),Qc(18,`div`,2)(19,`po-button`,15),vt$1(`p-click`,function(){return B_(u),ik(7).reset(),U_(i.restore())}),Kg()()()}l&2&&(Rb(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),wg(3),Rb(`p-value`,i.event),wg(),VO(i.result?4:-1),wg(4),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.help),W0(),wg(),Yb(`ngModel`,i.helperText),W0(),wg(),Yb(`ngModel`,i.placeholder),W0(),wg(),Yb(`ngModel`,i.errorPattern),W0(),wg(),Yb(`ngModel`,i.url),W0(),wg(),Yb(`ngModel`,i.timeout),W0(),wg(),Yb(`ngModel`,i.minConfidence),Rb(`p-decimals-length`,2),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Fc,Nf,I4,voe,j4,i5,Goe,Zte,Joe],encapsulation:2})}return a})();var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO AI Search Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-search-ai-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-search-ai
  name="searchAi"
  [p-columns]="columns"
  [p-clean]="properties?.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties?.includes('loading')"
  [p-min-confidence]="minConfidence"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties?.includes('readonly')"
  [p-required]="properties?.includes('required')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-size]="size"
  [p-timeout]="timeout"
  [p-url]="url"
  (p-blur)="changeEvent('p-blur')"
  (p-clear)="onClear()"
  (p-enter)="changeEvent('p-enter')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-low-confidence)="changeEvent('p-low-confidence')"
  (p-result)="onResult($event)"
>
</po-search-ai>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` result.query `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
    <p><strong>Filtro:</strong> `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` result.filter `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` result.description `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</p>
    <p><strong>Confian\xE7a:</strong> `),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,` result.confidence `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`</p>
  </po-container>
}

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-label="URL"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="timeout" [(ngModel)]="timeout" p-clean p-label="Timeout (ms)"> </po-number>

  <po-decimal
    class="po-md-6 po-lg-3"
    name="minConfidence"
    [(ngModel)]="minConfidence"
    p-clean
    p-label="Min Confidence"
    [p-decimals-length]="2"
    p-help="Valor entre 0 e 1"
  >
  </po-decimal>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Sk(43,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),Kg(),Qc(44,`div`,10)(45,`pre`,11),Sk(46,`import { Component, OnInit } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-labs',
  templateUrl: './sample-po-search-ai-labs.component.html',
  standalone: false
})
export class SamplePoSearchAiLabsComponent implements OnInit {
  compactLabel: boolean;
  errorPattern: string;
  event: string;
  result: PoSearchAiResult;
  help: string;
  helperText: string;
  label: string;
  labelTextWrap: boolean;
  loading: boolean;
  minConfidence: number;
  noAutocomplete: boolean;
  placeholder: string;
  properties: Array<string>;
  size: string;
  timeout: number;
  url: string;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  onResult(result: PoSearchAiResult) {
    this.result = result;
    this.event = 'p-result';
  }

  onClear() {
    this.result = undefined;
    this.event = 'p-clear';
  }

  restore() {
    this.errorPattern = undefined;
    this.event = undefined;
    this.result = undefined;
    this.help = undefined;
    this.helperText = undefined;
    this.label = 'Busca inteligente';
    this.minConfidence = 0.5;
    this.placeholder = 'Descreva o que procura em linguagem natural';
    this.properties = ['clean'];
    this.size = 'medium';
    this.timeout = 10000;
    this.url = 'https://po-sample-api.onrender.com/v1/ai/filter';
  }
}
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();function Ie(a,R){if(a&1&&(Qc(0,`po-container`,1)(1,`p`)(2,`strong`),Sk(3,`Query:`),Kg(),Sk(4),Kg(),Qc(5,`p`)(6,`strong`),Sk(7,`Filtro:`),Kg(),Sk(8),Kg(),Qc(9,`p`)(10,`strong`),Sk(11,`Descrição:`),Kg(),Sk(12),Kg(),Qc(13,`p`)(14,`strong`),Sk(15,`Confiança:`),Kg(),Sk(16),Kg()()),a&2){let o=ek();wg(4),tm(` `,o.result.query),wg(4),tm(` `,o.result.filter),wg(4),tm(` `,o.result.description),wg(4),tm(` `,o.result.confidence)}}var be=(()=>{class a{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(o){this.result=o}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Qc(0,`po-search-ai`,0),vt$1(`p-result`,function(m){return i.onResult(m)})(`p-clear`,function(){return i.onClear()}),Kg(),FO(1,Ie,17,4,`po-container`,1)),l&2&&(Rb(`p-columns`,i.columns),wg(),VO(i.result?1:-1))},dependencies:[Fc,i5],encapsulation:2})}return a})();var ve=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-result`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO AI Search - Result`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-search-ai-result`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-search-ai
  name="searchAi"
  p-label="Busca inteligente"
  p-help="Descreva o que procura em linguagem natural e pressione Enter"
  p-placeholder="Ex: clientes de SP com idade acima de 30"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

@if (result) {
  <po-container class="po-mt-2" p-no-padding>
    <p><strong>Query:</strong> `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` result.query `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
    <p><strong>Filtro:</strong> `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` result.filter `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` result.description `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</p>
    <p><strong>Confian\xE7a:</strong> `),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,` result.confidence `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`</p>
  </po-container>
}
`),Kg()()()(),Qc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Sk(43,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),Kg(),Qc(44,`div`,10)(45,`pre`,11),Sk(46,`import { Component } from '@angular/core';

import { PoSearchAiColumn, PoSearchAiResult } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-result',
  templateUrl: './sample-po-search-ai-result.component.html',
  standalone: false
})
export class SamplePoSearchAiResultComponent {
  result: PoSearchAiResult;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' }
  ];

  onResult(result: PoSearchAiResult) {
    this.result = result;
  }

  onClear() {
    this.result = undefined;
  }
}
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();function Re(a,R){if(a&1){let o=YO();Qc(0,`po-filter-chip`,10),vt$1(`p-selected-change`,function(i){let u=B_(o).$implicit,m=ek();return U_(m.onSuggestionChange(u,i))}),Kg()}if(a&2){let o=R.$implicit,l=ek();Rb(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}function Be(a,R){if(a&1&&(Qc(0,`po-container`,9)(1,`p`,11),Sk(2,`Filtro OData gerado`),Kg(),Qc(3,`p`)(4,`strong`),Sk(5,`Consulta:`),Kg(),Sk(6),Kg(),Qc(7,`p`)(8,`strong`),Sk(9,`Descrição:`),Kg(),Sk(10),Kg(),Qc(11,`p`)(12,`strong`),Sk(13,`Confiança:`),Kg(),Sk(14),Kg(),Qc(15,`pre`,12),Sk(16),Kg()()),a&2){let o=ek();wg(6),tm(` `,o.query),wg(4),tm(` `,o.description),wg(4),tm(` `,o.confidence),wg(2),Gb(o.filter)}}var Ce=(()=>{class a{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(o){this.poNotification=o}applySuggestion(o){this.searchAi&&(this.searchAi.writeValueModel(o),this.searchAi.search())}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onResult(o){this.query=o.query,this.filter=o.filter,this.description=o.description,this.confidence=o.confidence}onLowConfidence(o){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${o.query}". Tente reformular a busca.`)}onError(o){this.poNotification.error(`Erro ao consultar a IA: ${o.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Du(i5,5),l&2){let u;No(u=xo())&&(i.searchAi=u.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Qc(0,`po-container`,0)(1,`p`,1),Sk(2,`Gere um filtro com IA`),Kg(),Qc(3,`p`,2),Sk(4,` Este exemplo usa o `),Qc(5,`code`),Sk(6,`po-search-ai`),Kg(),Sk(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),Kg(),Qc(8,`p`,3),Sk(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Qc(10,`a`,4),Sk(11,`po-table`),Kg(),Sk(12,` já integra o `),Qc(13,`code`),Sk(14,`po-search-ai`),Kg(),Sk(15,` de forma inteligente através da propriedade `),Qc(16,`code`),Sk(17,`p-search-ai-field`),Kg(),Sk(18,`, experimente também! `),Kg()(),Qc(19,`po-search-ai`,5),vt$1(`p-result`,function(m){return i.onResult(m)})(`p-low-confidence`,function(m){return i.onLowConfidence(m)})(`p-error`,function(m){return i.onError(m)})(`p-clear`,function(){return i.onClear()}),Kg(),Qc(20,`p`,6),Sk(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Kg(),Qc(22,`div`,7),UO(23,Re,1,3,`po-filter-chip`,8,BO),Kg(),FO(25,Be,17,4,`po-container`,9)),l&2&&(wg(19),Rb(`p-columns`,i.columns),wg(4),HO(i.examples),wg(2),VO(i.filter?25:-1))},dependencies:[Fc,i5,cae],encapsulation:2})}return a})();var ye=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-filter`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO AI Search - Filter`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-search-ai-filter`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container class="po-mb-2" p-no-border>
  <p class="po-font-text-large-bold po-mb-1">Gere um filtro com IA</p>
  <p class="po-font-text" style="color: var(--color-neutral-dark-70)">
    Este exemplo usa o <code>po-search-ai</code> de forma isolada para transformar uma frase em linguagem natural em um
    filtro OData reutiliz\xE1vel, que voc\xEA pode aplicar em qualquer fonte de dados.
  </p>
  <p class="po-font-text po-mt-1" style="color: var(--color-neutral-dark-70)">
    Quer aplicar o filtro automaticamente em uma tabela? O
    <a href="https://po-ui.io/documentation/po-table" target="_blank">po-table</a>
    j\xE1 integra o <code>po-search-ai</code> de forma inteligente atrav\xE9s da propriedade <code>p-search-ai-field</code>,
    experimente tamb\xE9m!
  </p>
</po-container>

<po-search-ai
  name="searchAi"
  p-label="Gerar filtro com IA"
  p-help="Descreva o que procura e pressione Enter para gerar um filtro OData"
  p-placeholder="Ex: funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000"
  p-url="https://po-sample-api.onrender.com/v1/ai/filter"
  p-clean
  [p-columns]="columns"
  (p-result)="onResult($event)"
  (p-low-confidence)="onLowConfidence($event)"
  (p-error)="onError($event)"
  (p-clear)="onClear()"
>
</po-search-ai>

<p class="po-font-text-small po-mt-2 po-mb-1" style="color: var(--color-neutral-mid-tone)">
  Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
</p>
<div class="po-mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  @for (ex of examples; track ex) {
    <po-filter-chip
      [p-label]="ex"
      [p-selected]="selectedSuggestion === ex"
      [p-disabled]="suggestionsLocked && selectedSuggestion !== ex"
      (p-selected-change)="onSuggestionChange(ex, $event)"
    ></po-filter-chip>
  }
</div>

@if (filter) {
  <po-container class="po-mt-2" p-no-padding>
    <p class="po-font-text-large-bold">Filtro OData gerado</p>
    <p><strong>Consulta:</strong> `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` query `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` description `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</p>
    <p><strong>Confian\xE7a:</strong> `),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` confidence `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</p>
    <pre class="po-font-text" style="background: var(--color-neutral-light-10); padding: 8px; border-radius: 4px">`),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,`
      filter
    `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`</pre>
  </po-container>
}
`),Kg()()()(),Qc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Sk(43,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),Kg(),Qc(44,`div`,10)(45,`pre`,11),Sk(46,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiColumn,
  PoSearchAiComponent,
  PoSearchAiError,
  PoSearchAiResult
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-ai-filter',
  templateUrl: './sample-po-search-ai-filter.component.html',
  standalone: false
})
export class SamplePoSearchAiFilterComponent {
  @ViewChild(PoSearchAiComponent) searchAi: PoSearchAiComponent;

  confidence: number;
  description: string;
  filter: string;
  query: string;

  selectedSuggestion: string;
  suggestionsLocked = false;

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  readonly columns: Array<PoSearchAiColumn> = [
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade', type: 'string' },
    { property: 'department', label: 'Departamento', type: 'string' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'number' }
  ];

  readonly examples: Array<string> = [
    'funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 10000',
    'departamento Engenharia',
    'com menos de 30 anos',
    'sal\xE1rio entre 8000 e 12000',
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design'
  ];

  constructor(private readonly poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    if (!this.searchAi) {
      return;
    }

    this.searchAi.writeValueModel(query);
    this.searchAi.search();
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    // Considera apenas o evento de sele\xE7\xE3o; emiss\xF5es de desele\xE7\xE3o vindas da
    // sincroniza\xE7\xE3o do input \`p-selected\` (single-select) s\xE3o ignoradas.
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onResult(result: PoSearchAiResult) {
    this.query = result.query;
    this.filter = result.filter;
    this.description = result.description;
    this.confidence = result.confidence;
  }

  onLowConfidence(result: PoSearchAiResult) {
    this.poNotification.warning(
      \`N\xE3o tenho certeza do que voc\xEA quis dizer com "\${result.query}". Tente reformular a busca.\`
    );
  }

  onError(error: PoSearchAiError) {
    this.poNotification.error(\`Erro ao consultar a IA: \${error.message}\`);
  }

  onClear() {
    this.confidence = undefined;
    this.description = undefined;
    this.filter = undefined;
    this.query = undefined;
    this.selectedSuggestion = undefined;
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-search-ai-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-clear`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`event-p-low-confidence`,1,`docs-api-properties-row`],[`id`,`prop-p-min-confidence`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`event-p-result`,1,`docs-api-properties-row`],[`id`,`prop-p-timeout`,1,`docs-api-properties-row`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`method-search`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-clearSearch`,1,`docs-api-method-table`],[`id`,`method-onSearchKeydown`,1,`docs-api-method-table`],[`id`,`interface-po-search-ai-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-literals-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-request`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-request-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-request-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-response-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`id`,`interface-po-search-ai-response-description`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`],[`id`,`interface-po-search-ai-result`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-result-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-data`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-description`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-type`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error-status-code`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type`,1,`docs-api-class-name`],[`id`,`enum-po-search-ai-response-type-filter`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type-chat`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type-custom`,1,`docs-api-properties-row`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoSearchAiComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O `),Qc(24,`code`),Sk(25,`po-search-ai`),Kg(),Sk(26,` é um componente de `),Qc(27,`strong`),Sk(28,`busca em linguagem natural`),Kg(),Sk(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Qc(30,`em`),Sk(31,`"clientes de SP com saldo acima de R$ 500"`),Kg(),Sk(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Qc(33,`a`,6)(34,`code`),Sk(35,`po-table`),Kg()(),Sk(36,`.`),Kg(),Qc(37,`p`),Sk(38,`O componente é `),Qc(39,`strong`),Sk(40,`agnóstico ao provedor de IA`),Kg(),Sk(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Qc(42,`code`),Sk(43,`p-url`),Kg(),Sk(44,`, que recebe `),Qc(45,`code`),Sk(46,`{ query, columns }`),Kg(),Sk(47,` e deve retornar
`),Qc(48,`code`),Sk(49,`{ filter, description, confidence }`),Kg(),Sk(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),Kg(),Qc(51,`p`),Sk(52,`Por herdar de `),Qc(53,`code`),Sk(54,`po-input`),Kg(),Sk(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Qc(56,`code`),Sk(57,`template-driven`),Kg(),Sk(58,` e `),Qc(59,`code`),Sk(60,`reactive`),Kg(),Sk(61,`.`),Kg(),Qc(62,`h4`),Sk(63,`Endpoint de IA (backend)`),Kg(),Qc(64,`p`),Sk(65,`O componente `),Qc(66,`strong`),Sk(67,`não conversa diretamente com a LLM`),Kg(),Sk(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Qc(69,`code`),Sk(70,`p-url`),Kg(),Sk(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),Kg(),Qc(72,`p`),Sk(73,`O contrato é simples. O componente faz um `),Qc(74,`code`),Sk(75,`POST`),Kg(),Sk(76,` enviando:`),Kg(),Qc(77,`pre`)(78,`code`,7),Sk(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),Kg()(),Qc(80,`p`),Sk(81,`E o endpoint deve responder com:`),Kg(),Qc(82,`pre`)(83,`code`,7),Sk(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),Kg()(),Qc(85,`p`),Sk(86,`Onde `),Qc(87,`code`),Sk(88,`filter`),Kg(),Sk(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),Qc(90,`code`),Sk(91,`description`),Kg(),Sk(92,` \xE9 um
resumo leg\xEDvel e `),Qc(93,`code`),Sk(94,`confidence`),Kg(),Sk(95,` (`),Qc(96,`code`),Sk(97,`0.0`),Kg(),Sk(98,` a `),Qc(99,`code`),Sk(100,`1.0`),Kg(),Sk(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Qc(102,`code`),Sk(103,`p-min-confidence`),Kg(),Sk(104,` para decidir entre os eventos `),Qc(105,`code`),Sk(106,`p-result`),Kg(),Sk(107,` e `),Qc(108,`code`),Sk(109,`p-low-confidence`),Kg(),Sk(110,`.`),Kg(),Qc(111,`blockquote`)(112,`p`)(113,`strong`),Sk(114,`Exemplo de implementação:`),Kg(),Sk(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),Kg(),Qc(116,`ul`)(117,`li`),Sk(118,`Endpoint público: `),Qc(119,`a`,8)(120,`code`),Sk(121,`/v1/ai/filter`),Kg()()(),Qc(122,`li`),Sk(123,`Código-fonte: `),Qc(124,`a`,9),Sk(125,`po-sample-api/src/ai/ai.service.ts`),Kg()()()(),Qc(126,`h4`),Sk(127,`Estados de comportamento`),Kg(),Qc(128,`ul`)(129,`li`)(130,`strong`),Sk(131,`Idle:`),Kg(),Sk(132,` aguardando a digitação da consulta.`),Kg(),Qc(133,`li`)(134,`strong`),Sk(135,`Loading:`),Kg(),Sk(136,` consulta em andamento (ícone de carregamento ativo).`),Kg(),Qc(137,`li`)(138,`strong`),Sk(139,`Aplicado:`),Kg(),Sk(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),Kg(),Qc(141,`li`)(142,`strong`),Sk(143,`Baixa confiança:`),Kg(),Sk(144,` quando `),Qc(145,`code`),Sk(146,`confidence`),Kg(),Sk(147,` for menor que `),Qc(148,`code`),Sk(149,`p-min-confidence`),Kg(),Sk(150,`, emite
`),Qc(151,`code`),Sk(152,`p-low-confidence`),Kg(),Sk(153,` e não aplica o filtro automaticamente.`),Kg(),Qc(154,`li`)(155,`strong`),Sk(156,`Erro:`),Kg(),Sk(157,` quando a chamada falha, emite `),Qc(158,`code`),Sk(159,`p-error`),Kg(),Sk(160,`.`),Kg()(),Qc(161,`h4`),Sk(162,`Tokens customizáveis`),Kg(),Qc(163,`p`),Sk(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(165,`blockquote`)(166,`p`),Sk(167,`Para maiores informações, acesse o guia `),Qc(168,`a`,10),Sk(169,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(170,`.`),Kg()(),Qc(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),Sk(175,`Propriedade`),Kg(),Qc(176,`th`),Sk(177,`Descrição`),Kg(),Qc(178,`th`),Sk(179,`Valor Padrão`),Kg()()(),Qc(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),Sk(184,`Default`),Kg()(),vu(185,`td`)(186,`td`),Kg(),Qc(187,`tr`)(188,`td`)(189,`code`),Sk(190,`--font-family`),Kg()(),Qc(191,`td`),Sk(192,`Família tipográfica do campo`),Kg(),Qc(193,`td`)(194,`code`),Sk(195,`var(--font-family-theme)`),Kg()()(),Qc(196,`tr`)(197,`td`)(198,`code`),Sk(199,`--font-size`),Kg()(),Qc(200,`td`),Sk(201,`Tamanho da fonte do campo`),Kg(),Qc(202,`td`)(203,`code`),Sk(204,`var(--font-size)`),Kg()()(),Qc(205,`tr`)(206,`td`)(207,`code`),Sk(208,`--text-color`),Kg()(),Qc(209,`td`),Sk(210,`Cor do texto digitado`),Kg(),Qc(211,`td`)(212,`code`),Sk(213,`var(--color-neutral-dark-90)`),Kg()()(),Qc(214,`tr`)(215,`td`)(216,`code`),Sk(217,`--text-color-placeholder`),Kg()(),Qc(218,`td`),Sk(219,`Cor do texto do placeholder`),Kg(),Qc(220,`td`)(221,`code`),Sk(222,`var(--color-neutral-light-30)`),Kg()()(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--color`),Kg()(),Qc(227,`td`),Sk(228,`Cor da borda do campo`),Kg(),Qc(229,`td`)(230,`code`),Sk(231,`var(--color-neutral-dark-70)`),Kg()()(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--background`),Kg()(),Qc(236,`td`),Sk(237,`Cor de fundo do campo`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-neutral-light-05)`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--border-radius`),Kg()(),Qc(245,`td`),Sk(246,`Raio da borda do campo`),Kg(),Qc(247,`td`)(248,`code`),Sk(249,`var(--border-radius-md)`),Kg()()(),Qc(250,`tr`)(251,`td`)(252,`strong`),Sk(253,`Ícones e divisória`),Kg()(),vu(254,`td`)(255,`td`),Kg(),Qc(256,`tr`)(257,`td`)(258,`code`),Sk(259,`--color-icon-read`),Kg()(),Qc(260,`td`),Sk(261,`Cor do ícone de busca por IA`),Kg(),Qc(262,`td`)(263,`code`),Sk(264,`var(--color-neutral-dark-70)`),Kg()()(),Qc(265,`tr`)(266,`td`)(267,`code`),Sk(268,`--color-divider`),Kg()(),Qc(269,`td`),Sk(270,`Cor da divisória vertical entre o campo e o botão de busca`),Kg(),Qc(271,`td`)(272,`code`),Sk(273,`var(--color-neutral-mid-40)`),Kg()()(),Qc(274,`tr`)(275,`td`)(276,`code`),Sk(277,`--color-icon-processing`),Kg()(),Qc(278,`td`),Sk(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),Kg(),Qc(280,`td`)(281,`code`),Sk(282,`var(--color-action-default)`),Kg()()(),Qc(283,`tr`)(284,`td`)(285,`strong`),Sk(286,`Hover`),Kg()(),vu(287,`td`)(288,`td`),Kg(),Qc(289,`tr`)(290,`td`)(291,`code`),Sk(292,`--color-hover`),Kg()(),Qc(293,`td`),Sk(294,`Cor da borda no estado hover`),Kg(),Qc(295,`td`)(296,`code`),Sk(297,`var(--color-brand-01-dark)`),Kg()()(),Qc(298,`tr`)(299,`td`)(300,`code`),Sk(301,`--background-hover`),Kg()(),Qc(302,`td`),Sk(303,`Cor de fundo no estado hover`),Kg(),Qc(304,`td`)(305,`code`),Sk(306,`var(--color-brand-01-lightest)`),Kg()()(),Qc(307,`tr`)(308,`td`)(309,`strong`),Sk(310,`Focused`),Kg()(),vu(311,`td`)(312,`td`),Kg(),Qc(313,`tr`)(314,`td`)(315,`code`),Sk(316,`--color-focused`),Kg()(),Qc(317,`td`),Sk(318,`Cor da borda no estado de foco`),Kg(),Qc(319,`td`)(320,`code`),Sk(321,`var(--color-action-default)`),Kg()()(),Qc(322,`tr`)(323,`td`)(324,`code`),Sk(325,`--outline-color-focused`),Kg()(),Qc(326,`td`),Sk(327,`Cor do outline no estado de foco`),Kg(),Qc(328,`td`)(329,`code`),Sk(330,`var(--color-action-focus)`),Kg()()(),Qc(331,`tr`)(332,`td`)(333,`strong`),Sk(334,`Disabled`),Kg()(),vu(335,`td`)(336,`td`),Kg(),Qc(337,`tr`)(338,`td`)(339,`code`),Sk(340,`--color-disabled`),Kg()(),Qc(341,`td`),Sk(342,`Cor da borda no estado desabilitado`),Kg(),Qc(343,`td`)(344,`code`),Sk(345,`var(--color-neutral-light-30)`),Kg()()(),Qc(346,`tr`)(347,`td`)(348,`code`),Sk(349,`--background-disabled`),Kg()(),Qc(350,`td`),Sk(351,`Cor de fundo no estado desabilitado`),Kg(),Qc(352,`td`)(353,`code`),Sk(354,`var(--color-neutral-light-20)`),Kg()()()()()(),Qc(355,`div`,11)(356,`h4`,12),Sk(357,`Seletor`),Kg(),Qc(358,`pre`,13),Sk(359,`<po-search-ai
    (p-clear)="EventEmitter"
    p-columns="Array<PoSearchAiColumn>"
    (p-error)="EventEmitter"
    p-literals="PoSearchAiLiterals"
    (p-low-confidence)="EventEmitter"
    p-min-confidence="number"
    (p-result)="EventEmitter"
    p-timeout="number"
    p-url="string" >
</po-search-ai>
`),Kg()(),Qc(360,`h4`,14),Sk(361,`Propriedades`),Kg(),Qc(362,`table`,15)(363,`tr`,16)(364,`th`,17),Sk(365,`Nome`),Kg(),Qc(366,`th`,17),Sk(367,`Tipo`),Kg(),Qc(368,`th`,17),Sk(369,`Padrão`),Kg(),Qc(370,`th`,17),Sk(371,`Descrição`),Kg()(),Qc(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),Sk(376,` (p-clear)`),vu(377,`br`),Kg()()(),Qc(378,`td`,22)(379,`code`,23),Sk(380,`EventEmitter`),Kg()(),Qc(381,`td`,24),Sk(382,`-`),Kg(),Qc(383,`td`,25)(384,`em`)(385,`strong`),Sk(386,`(opcional)`),Kg()(),Qc(387,`p`),Sk(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),Kg()()(),Qc(389,`tr`,26)(390,`td`,19)(391,`div`,27)(392,`span`,28),Sk(393,` p-columns`),vu(394,`br`),Kg()()(),Qc(395,`td`,22)(396,`code`,29),Sk(397,`Array<PoSearchAiColumn>`),Kg()(),Qc(398,`td`,24)(399,`p`)(400,`code`),Sk(401,`[]`),Kg()()(),Qc(402,`td`,25)(403,`em`)(404,`strong`),Sk(405,`(opcional)`),Kg()(),Qc(406,`p`),Sk(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Qc(408,`code`),Sk(409,`p-url`),Kg(),Sk(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),Kg()()(),Qc(411,`tr`,30)(412,`td`,19)(413,`div`,20)(414,`span`,21),Sk(415,` (p-error)`),vu(416,`br`),Kg()()(),Qc(417,`td`,22)(418,`code`,23),Sk(419,`EventEmitter`),Kg()(),Qc(420,`td`,24),Sk(421,`-`),Kg(),Qc(422,`td`,25)(423,`em`)(424,`strong`),Sk(425,`(opcional)`),Kg()(),Qc(426,`p`),Sk(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Qc(428,`code`),Sk(429,`PoSearchAiError`),Kg(),Sk(430,`.`),Kg()()(),Qc(431,`tr`,31)(432,`td`,19)(433,`div`,27)(434,`span`,28),Sk(435,` p-literals`),vu(436,`br`),Kg()()(),Qc(437,`td`,22)(438,`code`,32),Sk(439,`PoSearchAiLiterals`),Kg()(),Qc(440,`td`,24),Sk(441,`-`),Kg(),Qc(442,`td`,25)(443,`em`)(444,`strong`),Sk(445,`(opcional)`),Kg()(),Qc(446,`p`),Sk(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Kg()()(),Qc(448,`tr`,33)(449,`td`,19)(450,`div`,20)(451,`span`,21),Sk(452,` (p-low-confidence)`),vu(453,`br`),Kg()()(),Qc(454,`td`,22)(455,`code`,23),Sk(456,`EventEmitter`),Kg()(),Qc(457,`td`,24),Sk(458,`-`),Kg(),Qc(459,`td`,25)(460,`em`)(461,`strong`),Sk(462,`(opcional)`),Kg()(),Qc(463,`p`),Sk(464,`Evento disparado quando a confiança da resposta da IA é menor que `),Qc(465,`code`),Sk(466,`p-min-confidence`),Kg(),Sk(467,`.
Emite um objeto `),Qc(468,`code`),Sk(469,`PoSearchAiResult`),Kg(),Sk(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),Kg()()(),Qc(471,`tr`,34)(472,`td`,19)(473,`div`,27)(474,`span`,28),Sk(475,` p-min-confidence`),vu(476,`br`),Kg()()(),Qc(477,`td`,22)(478,`code`,35),Sk(479,`number`),Kg()(),Qc(480,`td`,24)(481,`p`)(482,`code`),Sk(483,`0.5`),Kg()()(),Qc(484,`td`,25)(485,`em`)(486,`strong`),Sk(487,`(opcional)`),Kg()(),Qc(488,`p`),Sk(489,`Nível mínimo de confiança (`),Qc(490,`code`),Sk(491,`0.0`),Kg(),Sk(492,` a `),Qc(493,`code`),Sk(494,`1.0`),Kg(),Sk(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Qc(496,`code`),Sk(497,`p-low-confidence`),Kg(),Sk(498,` \xE9
emitido em vez de `),Qc(499,`code`),Sk(500,`p-result`),Kg(),Sk(501,`.`),Kg()()(),Qc(502,`tr`,36)(503,`td`,19)(504,`div`,20)(505,`span`,21),Sk(506,` (p-result)`),vu(507,`br`),Kg()()(),Qc(508,`td`,22)(509,`code`,23),Sk(510,`EventEmitter`),Kg()(),Qc(511,`td`,24),Sk(512,`-`),Kg(),Qc(513,`td`,25)(514,`em`)(515,`strong`),Sk(516,`(opcional)`),Kg()(),Qc(517,`p`),Sk(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Qc(519,`code`),Sk(520,`p-min-confidence`),Kg(),Sk(521,`. Emite um objeto `),Qc(522,`code`),Sk(523,`PoSearchAiResult`),Kg(),Sk(524,`.`),Kg(),Qc(525,`p`),Sk(526,`O campo `),Qc(527,`code`),Sk(528,`type`),Kg(),Sk(529,` do resultado indica como o consumidor deve interpretar a resposta:`),Kg(),Qc(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),Sk(535,`filter`),Kg()(),Qc(536,`em`),Sk(537,`(padrão)`),Kg(),Sk(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),Qc(539,`code`),Sk(540,`result.filter`),Kg(),Sk(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Qc(542,`code`),Sk(543,`po-table`),Kg(),Sk(544,` via `),Qc(545,`code`),Sk(546,`p-filter`),Kg(),Sk(547,`.`),Kg()(),Qc(548,`li`)(549,`p`)(550,`strong`)(551,`code`),Sk(552,`chat`),Kg()(),Sk(553,`: a IA retornou uma resposta conversacional. Use `),Qc(554,`code`),Sk(555,`result.data`),Kg(),Sk(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),Kg()(),Qc(557,`li`)(558,`p`)(559,`strong`)(560,`code`),Sk(561,`custom`),Kg()(),Sk(562,`: a IA retornou um payload genérico definido pelo backend. Use `),Qc(563,`code`),Sk(564,`result.data`),Kg(),Sk(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),Kg()()()()(),Qc(566,`tr`,37)(567,`td`,19)(568,`div`,27)(569,`span`,28),Sk(570,` p-timeout`),vu(571,`br`),Kg()()(),Qc(572,`td`,22)(573,`code`,35),Sk(574,`number`),Kg()(),Qc(575,`td`,24)(576,`p`)(577,`code`),Sk(578,`10000`),Kg()()(),Qc(579,`td`,25)(580,`em`)(581,`strong`),Sk(582,`(opcional)`),Kg()(),Qc(583,`p`),Sk(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Qc(585,`code`),Sk(586,`p-error`),Kg(),Sk(587,` com `),Qc(588,`code`),Sk(589,`statusCode 408`),Kg(),Sk(590,`.`),Kg()()(),Qc(591,`tr`,38)(592,`td`,19)(593,`div`,27)(594,`span`,28),Sk(595,` p-url`),vu(596,`br`),Kg()()(),Qc(597,`td`,22)(598,`code`,39),Sk(599,`string`),Kg()(),Qc(600,`td`,24),Sk(601,`-`),Kg(),Qc(602,`td`,25)(603,`em`)(604,`strong`),Sk(605,`(opcional)`),Kg()(),Qc(606,`p`),Sk(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Qc(608,`code`),Sk(609,`{ query, columns }`),Kg(),Sk(610,` via `),Qc(611,`code`),Sk(612,`POST`),Kg(),Sk(613,` e deve retornar `),Qc(614,`code`),Sk(615,`{ filter, description, confidence }`),Kg(),Sk(616,`.`),Kg(),Qc(617,`blockquote`)(618,`p`),Sk(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),Qc(620,`strong`),Sk(621,`no backend`),Kg(),Sk(622,`, nunca no client-side.`),Kg()()()()(),Qc(623,`h3`,14),Sk(624,`Métodos`),Kg(),Qc(625,`table`,40)(626,`tr`,41)(627,`th`,42)(628,`div`,27)(629,`h4`)(630,`span`,28),Sk(631,` search `),Kg()()()()(),Qc(632,`tr`,25)(633,`td`,25)(634,`p`),Sk(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Qc(636,`code`),Sk(637,`p-url`),Kg(),Sk(638,`.`),Kg(),Qc(639,`p`),Sk(640,`Caso a consulta esteja vazia ou `),Qc(641,`code`),Sk(642,`p-url`),Kg(),Sk(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Qc(644,`code`),Sk(645,`p-result`),Kg(),Sk(646,` (ou `),Qc(647,`code`),Sk(648,`p-low-confidence`),Kg(),Sk(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Qc(650,`code`),Sk(651,`p-error`),Kg(),Sk(652,`.`),Kg()()()(),vu(653,`br`),Qc(654,`table`,43)(655,`tr`,41)(656,`th`,42)(657,`div`,27)(658,`h4`)(659,`span`,28),Sk(660,` clearSearch `),Kg()()()()(),Qc(661,`tr`,25)(662,`td`,25)(663,`p`),Sk(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Qc(665,`code`),Sk(666,`p-clear`),Kg(),Sk(667,`.`),Kg()()()(),vu(668,`br`),Qc(669,`table`,44)(670,`tr`,41)(671,`th`,42)(672,`div`,27)(673,`h4`)(674,`span`,28),Sk(675,` onSearchKeydown `),Kg()()()()(),Qc(676,`tr`,25)(677,`td`,25)(678,`p`),Sk(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Qc(680,`code`),Sk(681,`Enter`),Kg(),Sk(682,`.`),Kg()()()(),Qc(683,`h5`)(684,`b`),Sk(685,`Parâmetros`),Kg()(),Qc(686,`table`,15)(687,`tr`,16)(688,`th`,17),Sk(689,`Nome`),Kg(),Qc(690,`th`,17),Sk(691,`Tipo`),Kg(),Qc(692,`th`,17),Sk(693,`Descrição`),Kg()(),Qc(694,`tr`,41)(695,`td`,19),Sk(696,` event`),Kg(),vu(697,`td`,22),Qc(698,`td`,25)(699,`p`),Sk(700,`Evento de teclado.`),Kg()()()(),vu(701,`br`),Qc(702,`h3`),Sk(703,`Interfaces`),Kg(),Qc(704,`h4`,45)(705,`code`,5),Sk(706,`PoSearchAiColumn`),Kg()(),Qc(707,`div`,2)(708,`p`),Sk(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),Kg(),Qc(710,`p`),Sk(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),Kg()(),Qc(712,`h4`,14),Sk(713,`Propriedades`),Kg(),Qc(714,`table`,15)(715,`tr`,16)(716,`th`,17),Sk(717,`Nome`),Kg(),Qc(718,`th`,17),Sk(719,`Tipo`),Kg(),Qc(720,`th`,17),Sk(721,`Descrição`),Kg()(),Qc(722,`tr`,46)(723,`td`,19)(724,`div`,27)(725,`span`,28),Sk(726,` label`),vu(727,`br`),Kg()()(),Qc(728,`td`,22)(729,`code`,39),Sk(730,`string`),Kg()(),Qc(731,`td`,25)(732,`p`),Sk(733,`Rótulo legível exibido ao usuário (ex: `),Qc(734,`code`),Sk(735,`Nome`),Kg(),Sk(736,`, `),Qc(737,`code`),Sk(738,`Idade`),Kg(),Sk(739,`, `),Qc(740,`code`),Sk(741,`Cidade`),Kg(),Sk(742,`).`),Kg()()(),Qc(743,`tr`,47)(744,`td`,19)(745,`div`,27)(746,`span`,28),Sk(747,` property`),vu(748,`br`),Kg()()(),Qc(749,`td`,22)(750,`code`,39),Sk(751,`string`),Kg()(),Qc(752,`td`,25)(753,`p`),Sk(754,`Nome da propriedade do campo (ex: `),Qc(755,`code`),Sk(756,`name`),Kg(),Sk(757,`, `),Qc(758,`code`),Sk(759,`age`),Kg(),Sk(760,`, `),Qc(761,`code`),Sk(762,`city`),Kg(),Sk(763,`).`),Kg()()(),Qc(764,`tr`,48)(765,`td`,19)(766,`div`,27)(767,`span`,28),Sk(768,` type`),vu(769,`br`),Kg()()(),Qc(770,`td`,22)(771,`code`,39),Sk(772,`string`),Kg()(),Qc(773,`td`,25)(774,`em`)(775,`strong`),Sk(776,`(opcional)`),Kg()(),Qc(777,`p`),Sk(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),Kg(),Qc(779,`p`),Sk(780,`Valores comuns: `),Qc(781,`code`),Sk(782,`string`),Kg(),Sk(783,`, `),Qc(784,`code`),Sk(785,`number`),Kg(),Sk(786,`, `),Qc(787,`code`),Sk(788,`date`),Kg(),Sk(789,`, `),Qc(790,`code`),Sk(791,`currency`),Kg(),Sk(792,`, `),Qc(793,`code`),Sk(794,`boolean`),Kg(),Sk(795,`.`),Kg()()()(),Qc(796,`h4`,49)(797,`code`,5),Sk(798,`PoSearchAiLiterals`),Kg()(),Qc(799,`div`,2)(800,`p`),Sk(801,`Interface para definição das literais usadas no `),Qc(802,`code`),Sk(803,`po-search-ai`),Kg(),Sk(804,`.`),Kg()(),Qc(805,`h4`,14),Sk(806,`Propriedades`),Kg(),Qc(807,`table`,15)(808,`tr`,16)(809,`th`,17),Sk(810,`Nome`),Kg(),Qc(811,`th`,17),Sk(812,`Tipo`),Kg(),Qc(813,`th`,17),Sk(814,`Descrição`),Kg()(),Qc(815,`tr`,50)(816,`td`,19)(817,`div`,27)(818,`span`,28),Sk(819,` clean`),vu(820,`br`),Kg()()(),Qc(821,`td`,22)(822,`code`,39),Sk(823,`string`),Kg()(),Qc(824,`td`,25)(825,`em`)(826,`strong`),Sk(827,`(opcional)`),Kg()(),Qc(828,`p`),Sk(829,`Texto de acessibilidade do botão de limpar o campo.`),Kg()()(),Qc(830,`tr`,51)(831,`td`,19)(832,`div`,27)(833,`span`,28),Sk(834,` errorMessage`),vu(835,`br`),Kg()()(),Qc(836,`td`,22)(837,`code`,39),Sk(838,`string`),Kg()(),Qc(839,`td`,25)(840,`em`)(841,`strong`),Sk(842,`(opcional)`),Kg()(),Qc(843,`p`),Sk(844,`Mensagem exibida quando a busca com IA falha.`),Kg()()()(),Qc(845,`h4`,52)(846,`code`,5),Sk(847,`PoSearchAiRequest`),Kg()(),Qc(848,`div`,2)(849,`p`),Sk(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),Qc(851,`code`),Sk(852,`p-url`),Kg(),Sk(853,`.`),Kg(),Qc(854,`p`),Sk(855,`O componente é `),Qc(856,`strong`),Sk(857,`agnóstico ao provedor de IA`),Kg(),Sk(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Qc(859,`code`),Sk(860,`PoSearchAiResponse`),Kg(),Sk(861,`.`),Kg()(),Qc(862,`h4`,14),Sk(863,`Propriedades`),Kg(),Qc(864,`table`,15)(865,`tr`,16)(866,`th`,17),Sk(867,`Nome`),Kg(),Qc(868,`th`,17),Sk(869,`Tipo`),Kg(),Qc(870,`th`,17),Sk(871,`Descrição`),Kg()(),Qc(872,`tr`,53)(873,`td`,19)(874,`div`,27)(875,`span`,28),Sk(876,` columns`),vu(877,`br`),Kg()()(),Qc(878,`td`,22)(879,`code`,29),Sk(880,`Array<PoSearchAiColumn>`),Kg()(),Qc(881,`td`,25)(882,`p`),Sk(883,`Metadados dos campos disponíveis para a busca (ver `),Qc(884,`code`),Sk(885,`PoSearchAiColumn`),Kg(),Sk(886,`).`),Kg()()(),Qc(887,`tr`,54)(888,`td`,19)(889,`div`,27)(890,`span`,28),Sk(891,` query`),vu(892,`br`),Kg()()(),Qc(893,`td`,22)(894,`code`,39),Sk(895,`string`),Kg()(),Qc(896,`td`,25)(897,`p`),Sk(898,`Texto em linguagem natural digitado pelo usuário.`),Kg()()()(),Qc(899,`h4`,55)(900,`code`,5),Sk(901,`PoSearchAiResponse`),Kg()(),Qc(902,`div`,2)(903,`p`),Sk(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),Qc(905,`code`),Sk(906,`p-url`),Kg(),Sk(907,`.`),Kg()(),Qc(908,`h4`,14),Sk(909,`Propriedades`),Kg(),Qc(910,`table`,15)(911,`tr`,16)(912,`th`,17),Sk(913,`Nome`),Kg(),Qc(914,`th`,17),Sk(915,`Tipo`),Kg(),Qc(916,`th`,17),Sk(917,`Descrição`),Kg()(),Qc(918,`tr`,56)(919,`td`,19)(920,`div`,27)(921,`span`,28),Sk(922,` confidence`),vu(923,`br`),Kg()()(),Qc(924,`td`,22)(925,`code`,35),Sk(926,`number`),Kg()(),Qc(927,`td`,25)(928,`em`)(929,`strong`),Sk(930,`(opcional)`),Kg()(),Qc(931,`p`),Sk(932,`Nível de confiança da interpretação da IA, em um intervalo de `),Qc(933,`code`),Sk(934,`0.0`),Kg(),Sk(935,` a `),Qc(936,`code`),Sk(937,`1.0`),Kg(),Sk(938,`.`),Kg(),Qc(939,`p`),Sk(940,`Utilizado em conjunto com `),Qc(941,`code`),Sk(942,`p-min-confidence`),Kg(),Sk(943,` para decidir se o resultado é confiável.`),Kg()()(),Qc(944,`tr`,57)(945,`td`,19)(946,`div`,27)(947,`span`,28),Sk(948,` data`),vu(949,`br`),Kg()()(),Qc(950,`td`,22)(951,`code`,58),Sk(952,`Record<string, any>`),Kg()(),Qc(953,`td`,25)(954,`em`)(955,`strong`),Sk(956,`(opcional)`),Kg()(),Qc(957,`p`),Sk(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),Kg(),Qc(959,`p`),Sk(960,`Utilizado quando `),Qc(961,`code`),Sk(962,`type`),Kg(),Sk(963,` é `),Qc(964,`code`),Sk(965,`'chat'`),Kg(),Sk(966,` ou `),Qc(967,`code`),Sk(968,`'custom'`),Kg(),Sk(969,`.`),Kg()()(),Qc(970,`tr`,59)(971,`td`,19)(972,`div`,27)(973,`span`,28),Sk(974,` description`),vu(975,`br`),Kg()()(),Qc(976,`td`,22)(977,`code`,39),Sk(978,`string`),Kg()(),Qc(979,`td`,25)(980,`em`)(981,`strong`),Sk(982,`(opcional)`),Kg()(),Qc(983,`p`),Sk(984,`Descrição legível, em linguagem natural, da resposta.`),Kg()()(),Qc(985,`tr`,60)(986,`td`,19)(987,`div`,27)(988,`span`,28),Sk(989,` filter`),vu(990,`br`),Kg()()(),Qc(991,`td`,22)(992,`code`,39),Sk(993,`string`),Kg()(),Qc(994,`td`,25)(995,`em`)(996,`strong`),Sk(997,`(opcional)`),Kg()(),Qc(998,`p`),Sk(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Qc(1e3,`code`),Sk(1001,`age gt 30 and city eq 'São Paulo'`),Kg(),Sk(1002,`).`),Kg(),Qc(1003,`p`),Sk(1004,`Utilizado quando `),Qc(1005,`code`),Sk(1006,`type`),Kg(),Sk(1007,` é `),Qc(1008,`code`),Sk(1009,`'filter'`),Kg(),Sk(1010,`.`),Kg()()(),Qc(1011,`tr`,61)(1012,`td`,19)(1013,`div`,27)(1014,`span`,28),Sk(1015,` type`),vu(1016,`br`),Kg()()(),Qc(1017,`td`,22)(1018,`code`,62),Sk(1019,`PoSearchAiResponseType`),Kg()(),Qc(1020,`td`,25)(1021,`em`)(1022,`strong`),Sk(1023,`(opcional)`),Kg()(),Qc(1024,`p`),Sk(1025,`Tipo da resposta retornada pela IA.`),Kg(),Qc(1026,`p`),Sk(1027,`Quando omitido, o componente infere `),Qc(1028,`code`),Sk(1029,`'filter'`),Kg(),Sk(1030,` se `),Qc(1031,`code`),Sk(1032,`filter`),Kg(),Sk(1033,` estiver presente,
caso contr\xE1rio assume `),Qc(1034,`code`),Sk(1035,`'custom'`),Kg(),Sk(1036,`.`),Kg()()()(),Qc(1037,`h4`,63)(1038,`code`,5),Sk(1039,`PoSearchAiResult`),Kg()(),Qc(1040,`div`,2)(1041,`p`),Sk(1042,`Interface que define o objeto emitido pelos eventos `),Qc(1043,`code`),Sk(1044,`p-result`),Kg(),Sk(1045,` e `),Qc(1046,`code`),Sk(1047,`p-low-confidence`),Kg(),Sk(1048,`.`),Kg()(),Qc(1049,`h4`,14),Sk(1050,`Propriedades`),Kg(),Qc(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),Sk(1054,`Nome`),Kg(),Qc(1055,`th`,17),Sk(1056,`Tipo`),Kg(),Qc(1057,`th`,17),Sk(1058,`Descrição`),Kg()(),Qc(1059,`tr`,64)(1060,`td`,19)(1061,`div`,27)(1062,`span`,28),Sk(1063,` confidence`),vu(1064,`br`),Kg()()(),Qc(1065,`td`,22)(1066,`code`,35),Sk(1067,`number`),Kg()(),Qc(1068,`td`,25)(1069,`em`)(1070,`strong`),Sk(1071,`(opcional)`),Kg()(),Qc(1072,`p`),Sk(1073,`Nível de confiança da interpretação (`),Qc(1074,`code`),Sk(1075,`0.0`),Kg(),Sk(1076,` a `),Qc(1077,`code`),Sk(1078,`1.0`),Kg(),Sk(1079,`).`),Kg()()(),Qc(1080,`tr`,65)(1081,`td`,19)(1082,`div`,27)(1083,`span`,28),Sk(1084,` data`),vu(1085,`br`),Kg()()(),Qc(1086,`td`,22)(1087,`code`,58),Sk(1088,`Record<string, any>`),Kg()(),Qc(1089,`td`,25)(1090,`em`)(1091,`strong`),Sk(1092,`(opcional)`),Kg()(),Qc(1093,`p`),Sk(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),Kg()()(),Qc(1095,`tr`,66)(1096,`td`,19)(1097,`div`,27)(1098,`span`,28),Sk(1099,` description`),vu(1100,`br`),Kg()()(),Qc(1101,`td`,22)(1102,`code`,39),Sk(1103,`string`),Kg()(),Qc(1104,`td`,25)(1105,`em`)(1106,`strong`),Sk(1107,`(opcional)`),Kg()(),Qc(1108,`p`),Sk(1109,`Descrição legível da resposta.`),Kg()()(),Qc(1110,`tr`,67)(1111,`td`,19)(1112,`div`,27)(1113,`span`,28),Sk(1114,` filter`),vu(1115,`br`),Kg()()(),Qc(1116,`td`,22)(1117,`code`,39),Sk(1118,`string`),Kg()(),Qc(1119,`td`,25)(1120,`em`)(1121,`strong`),Sk(1122,`(opcional)`),Kg()(),Qc(1123,`p`),Sk(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Qc(1125,`code`),Sk(1126,`type`),Kg(),Sk(1127,` é `),Qc(1128,`code`),Sk(1129,`'filter'`),Kg(),Sk(1130,`.`),Kg()()(),Qc(1131,`tr`,68)(1132,`td`,19)(1133,`div`,27)(1134,`span`,28),Sk(1135,` query`),vu(1136,`br`),Kg()()(),Qc(1137,`td`,22)(1138,`code`,39),Sk(1139,`string`),Kg()(),Qc(1140,`td`,25)(1141,`p`),Sk(1142,`Texto original digitado pelo usuário.`),Kg()()(),Qc(1143,`tr`,69)(1144,`td`,19)(1145,`div`,27)(1146,`span`,28),Sk(1147,` type`),vu(1148,`br`),Kg()()(),Qc(1149,`td`,22)(1150,`code`,62),Sk(1151,`PoSearchAiResponseType`),Kg()(),Qc(1152,`td`,25)(1153,`p`),Sk(1154,`Tipo da resposta retornada pela IA.`),Kg()()()(),Qc(1155,`h4`,70)(1156,`code`,5),Sk(1157,`PoSearchAiError`),Kg()(),Qc(1158,`div`,2)(1159,`p`),Sk(1160,`Interface que define o objeto emitido pelo evento `),Qc(1161,`code`),Sk(1162,`p-error`),Kg(),Sk(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),Kg()(),Qc(1164,`h4`,14),Sk(1165,`Propriedades`),Kg(),Qc(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),Sk(1169,`Nome`),Kg(),Qc(1170,`th`,17),Sk(1171,`Tipo`),Kg(),Qc(1172,`th`,17),Sk(1173,`Descrição`),Kg()(),Qc(1174,`tr`,71)(1175,`td`,19)(1176,`div`,27)(1177,`span`,28),Sk(1178,` message`),vu(1179,`br`),Kg()()(),Qc(1180,`td`,22)(1181,`code`,39),Sk(1182,`string`),Kg()(),Qc(1183,`td`,25)(1184,`p`),Sk(1185,`Mensagem de erro.`),Kg()()(),Qc(1186,`tr`,72)(1187,`td`,19)(1188,`div`,27)(1189,`span`,28),Sk(1190,` query`),vu(1191,`br`),Kg()()(),Qc(1192,`td`,22)(1193,`code`,39),Sk(1194,`string`),Kg()(),Qc(1195,`td`,25)(1196,`p`),Sk(1197,`Texto original digitado pelo usuário.`),Kg()()(),Qc(1198,`tr`,73)(1199,`td`,19)(1200,`div`,27)(1201,`span`,28),Sk(1202,` statusCode`),vu(1203,`br`),Kg()()(),Qc(1204,`td`,22)(1205,`code`,35),Sk(1206,`number`),Kg()(),Qc(1207,`td`,25)(1208,`p`),Sk(1209,`Código HTTP do erro (ex: `),Qc(1210,`code`),Sk(1211,`500`),Kg(),Sk(1212,`, `),Qc(1213,`code`),Sk(1214,`408`),Kg(),Sk(1215,` para timeout).`),Kg()()()(),Qc(1216,`h3`),Sk(1217,`Enums`),Kg(),Qc(1218,`h4`,74)(1219,`code`,5),Sk(1220,`PoSearchAiResponseType`),Kg()(),Qc(1221,`div`,2)(1222,`p`),Sk(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),Kg()(),Qc(1224,`h4`,14),Sk(1225,`Propriedades`),Kg(),Qc(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),Sk(1229,`Nome`),Kg(),Qc(1230,`th`,17),Sk(1231,`Descrição`),Kg()(),Qc(1232,`tr`,75)(1233,`td`,19)(1234,`div`,27)(1235,`span`,28),Sk(1236,` filter`),vu(1237,`br`),Kg()()(),Qc(1238,`td`,25)(1239,`p`),Sk(1240,`Resposta contendo um filtro estruturado (ex: OData).`),Kg()()(),Qc(1241,`tr`,76)(1242,`td`,19)(1243,`div`,27)(1244,`span`,28),Sk(1245,` chat`),vu(1246,`br`),Kg()()(),Qc(1247,`td`,25)(1248,`p`),Sk(1249,`Resposta conversacional em linguagem natural.`),Kg()()(),Qc(1250,`tr`,77)(1251,`td`,19)(1252,`div`,27)(1253,`span`,28),Sk(1254,` custom`),vu(1255,`br`),Kg()()(),Qc(1256,`td`,25)(1257,`p`),Sk(1258,`Payload genérico definido pelo consumidor.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ze(a,R){if(a&1&&(Qc(0,`div`,1),vu(1,`sample-po-search-ai-basic-view`)(2,`sample-po-search-ai-labs-view`)(3,`sample-po-search-ai-result-view`)(4,`sample-po-search-ai-filter-view`),Kg()),a&2){let o=ek();Rb(`hidden`,o.activeTab!==`web`)}}var Ne=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Search Ai`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Search Ai · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,i){l&1&&(Qc(0,`po-page-default`,0),FO(1,ze,5,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-search-ai-doc`),Kg()()),l&2&&(Rb(`p-title`,i.title)(`p-actions`,i.actions),wg(),VO(i.hidePoWebSample?-1:1),wg(),Rb(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,xe,fe,ve,ye,Pe],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ne),GV]})}return a})();var vt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,_e]})}return a})();export{vt as DocPoSearchAiModule};
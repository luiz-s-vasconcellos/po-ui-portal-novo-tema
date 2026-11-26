import{m as P,p as M}from"./main-KBK5JSBU.js";import{$r as No,A as Goe,An as voe,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Ni as Wb,Pr as I,Qn as AZ,Si as UO,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,Zt as i5,_a as jO,_i as RZ,ar as B_,ca as ge$1,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,it as Ru,ja as nm,jr as H_,kr as HO,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,w as Fc,zr as KO,zt as cae}from"./chunk-CTJH0VS3.js";var Se=(()=>{class a{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&_u(0,`po-search-ai`,0)},dependencies:[i5],encapsulation:2})}return a})();var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-search-ai-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO AI Search Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-ai-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();function qe(a,R){if(a&1&&(Jc(0,`po-container`,4)(1,`p`)(2,`strong`),Mk(3,`Query:`),Kg(),Mk(4),Kg(),Jc(5,`p`)(6,`strong`),Mk(7,`Filtro:`),Kg(),Mk(8),Kg(),Jc(9,`p`)(10,`strong`),Mk(11,`Descrição:`),Kg(),Mk(12),Kg(),Jc(13,`p`)(14,`strong`),Mk(15,`Confiança:`),Kg(),Mk(16),Kg()()),a&2){let o=tk();wg(4),nm(` `,o.result.query),wg(4),nm(` `,o.result.filter),wg(4),nm(` `,o.result.description),wg(4),nm(` `,o.result.confidence)}}var ge=(()=>{class a{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(o){this.event=o}onResult(o){this.result=o,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let u=KO();Jc(0,`po-search-ai`,1),_t(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(d){return i.onResult(d)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Kg(),LO(4,qe,17,4,`po-container`,4),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.label,d)||(i.label=d),H_(d)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.help,d)||(i.help=d),H_(d)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.helperText,d)||(i.helperText=d),H_(d)}),Kg(),Jc(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.placeholder,d)||(i.placeholder=d),H_(d)}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.errorPattern,d)||(i.errorPattern=d),H_(d)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.url,d)||(i.url=d),H_(d)}),Kg(),Jc(14,`po-number`,11),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.timeout,d)||(i.timeout=d),H_(d)}),Kg(),Jc(15,`po-decimal`,12),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.minConfidence,d)||(i.minConfidence=d),H_(d)}),Kg(),Jc(16,`po-checkbox-group`,13),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.properties,d)||(i.properties=d),H_(d)}),Kg(),Jc(17,`po-radio-group`,14),G0(),Zb(`ngModelChange`,function(d){return U_(u),Rk(i.size,d)||(i.size=d),H_(d)}),Kg(),Jc(18,`div`,2)(19,`po-button`,15),_t(`p-click`,function(){return U_(u),ok(7).reset(),H_(i.restore())}),Kg()()()}l&2&&(Ab(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),wg(3),Ab(`p-value`,i.event),wg(),jO(i.result?4:-1),wg(4),Kb(`ngModel`,i.label),q0(),wg(),Kb(`ngModel`,i.help),q0(),wg(),Kb(`ngModel`,i.helperText),q0(),wg(),Kb(`ngModel`,i.placeholder),q0(),wg(),Kb(`ngModel`,i.errorPattern),q0(),wg(),Kb(`ngModel`,i.url),q0(),wg(),Kb(`ngModel`,i.timeout),q0(),wg(),Kb(`ngModel`,i.minConfidence),Ab(`p-decimals-length`,2),q0(),wg(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Fc,Nf,I4,voe,j4,i5,Goe,Zte,Joe],encapsulation:2})}return a})();var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO AI Search Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-ai-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-search-ai
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
    <p><strong>Query:</strong> `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` result.query `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
    <p><strong>Filtro:</strong> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` result.filter `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` result.description `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</p>
    <p><strong>Confian\xE7a:</strong> `),Jc(34,`span`),B_(),Mk(35,`{{`),j_(),Kg(),Mk(36,` result.confidence `),Jc(37,`span`),B_(),Mk(38,`}}`),j_(),Kg(),Mk(39,`</p>
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
`),Kg()()()(),Jc(40,`po-tab`,10)(41,`div`)(42,`label`,7),Mk(43,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),Kg(),Jc(44,`div`,11)(45,`pre`,12),Mk(46,`import { Component, OnInit } from '@angular/core';

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
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();function Ie(a,R){if(a&1&&(Jc(0,`po-container`,1)(1,`p`)(2,`strong`),Mk(3,`Query:`),Kg(),Mk(4),Kg(),Jc(5,`p`)(6,`strong`),Mk(7,`Filtro:`),Kg(),Mk(8),Kg(),Jc(9,`p`)(10,`strong`),Mk(11,`Descrição:`),Kg(),Mk(12),Kg(),Jc(13,`p`)(14,`strong`),Mk(15,`Confiança:`),Kg(),Mk(16),Kg()()),a&2){let o=tk();wg(4),nm(` `,o.result.query),wg(4),nm(` `,o.result.filter),wg(4),nm(` `,o.result.description),wg(4),nm(` `,o.result.confidence)}}var be=(()=>{class a{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(o){this.result=o}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Jc(0,`po-search-ai`,0),_t(`p-result`,function(m){return i.onResult(m)})(`p-clear`,function(){return i.onClear()}),Kg(),LO(1,Ie,17,4,`po-container`,1)),l&2&&(Ab(`p-columns`,i.columns),wg(),jO(i.result?1:-1))},dependencies:[Fc,i5],encapsulation:2})}return a})();var ve=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-result`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO AI Search - Result`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-ai-result`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-search-ai
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
    <p><strong>Query:</strong> `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` result.query `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
    <p><strong>Filtro:</strong> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` result.filter `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` result.description `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</p>
    <p><strong>Confian\xE7a:</strong> `),Jc(34,`span`),B_(),Mk(35,`{{`),j_(),Kg(),Mk(36,` result.confidence `),Jc(37,`span`),B_(),Mk(38,`}}`),j_(),Kg(),Mk(39,`</p>
  </po-container>
}
`),Kg()()()(),Jc(40,`po-tab`,10)(41,`div`)(42,`label`,7),Mk(43,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),Kg(),Jc(44,`div`,11)(45,`pre`,12),Mk(46,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();function Re(a,R){if(a&1){let o=KO();Jc(0,`po-filter-chip`,10),_t(`p-selected-change`,function(i){let u=U_(o).$implicit,m=tk();return H_(m.onSuggestionChange(u,i))}),Kg()}if(a&2){let o=R.$implicit,l=tk();Ab(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}function Be(a,R){if(a&1&&(Jc(0,`po-container`,9)(1,`p`,11),Mk(2,`Filtro OData gerado`),Kg(),Jc(3,`p`)(4,`strong`),Mk(5,`Consulta:`),Kg(),Mk(6),Kg(),Jc(7,`p`)(8,`strong`),Mk(9,`Descrição:`),Kg(),Mk(10),Kg(),Jc(11,`p`)(12,`strong`),Mk(13,`Confiança:`),Kg(),Mk(14),Kg(),Jc(15,`pre`,12),Mk(16),Kg()()),a&2){let o=tk();wg(6),nm(` `,o.query),wg(4),nm(` `,o.description),wg(4),nm(` `,o.confidence),wg(2),Wb(o.filter)}}var Ce=(()=>{class a{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(o){this.poNotification=o}applySuggestion(o){this.searchAi&&(this.searchAi.writeValueModel(o),this.searchAi.search())}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onResult(o){this.query=o.query,this.filter=o.filter,this.description=o.description,this.confidence=o.confidence}onLowConfidence(o){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${o.query}". Tente reformular a busca.`)}onError(o){this.poNotification.error(`Erro ao consultar a IA: ${o.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Cu(i5,5),l&2){let u;No(u=xo())&&(i.searchAi=u.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Jc(0,`po-container`,0)(1,`p`,1),Mk(2,`Gere um filtro com IA`),Kg(),Jc(3,`p`,2),Mk(4,` Este exemplo usa o `),Jc(5,`code`),Mk(6,`po-search-ai`),Kg(),Mk(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),Kg(),Jc(8,`p`,3),Mk(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Jc(10,`a`,4),Mk(11,`po-table`),Kg(),Mk(12,` já integra o `),Jc(13,`code`),Mk(14,`po-search-ai`),Kg(),Mk(15,` de forma inteligente através da propriedade `),Jc(16,`code`),Mk(17,`p-search-ai-field`),Kg(),Mk(18,`, experimente também! `),Kg()(),Jc(19,`po-search-ai`,5),_t(`p-result`,function(m){return i.onResult(m)})(`p-low-confidence`,function(m){return i.onLowConfidence(m)})(`p-error`,function(m){return i.onError(m)})(`p-clear`,function(){return i.onClear()}),Kg(),Jc(20,`p`,6),Mk(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Kg(),Jc(22,`div`,7),HO(23,Re,1,3,`po-filter-chip`,8,UO),Kg(),LO(25,Be,17,4,`po-container`,9)),l&2&&(wg(19),Ab(`p-columns`,i.columns),wg(4),$O(i.examples),wg(2),jO(i.filter?25:-1))},dependencies:[Fc,i5,cae],encapsulation:2})}return a})();var ye=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-ai-filter`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO AI Search - Filter`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-ai-filter`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container class="po-mb-2" p-no-border>
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
    <p><strong>Consulta:</strong> `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` query `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
    <p><strong>Descri\xE7\xE3o:</strong> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` description `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</p>
    <p><strong>Confian\xE7a:</strong> `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` confidence `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</p>
    <pre class="po-font-text" style="background: var(--color-neutral-light-10); padding: 8px; border-radius: 4px">`),Jc(34,`span`),B_(),Mk(35,`{{`),j_(),Kg(),Mk(36,`
      filter
    `),Jc(37,`span`),B_(),Mk(38,`}}`),j_(),Kg(),Mk(39,`</pre>
  </po-container>
}
`),Kg()()()(),Jc(40,`po-tab`,10)(41,`div`)(42,`label`,7),Mk(43,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),Kg(),Jc(44,`div`,11)(45,`pre`,12),Mk(46,`import { Component, ViewChild } from '@angular/core';

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
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-search-ai-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-clear`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`event-p-low-confidence`,1,`docs-api-properties-row`],[`id`,`prop-p-min-confidence`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`event-p-result`,1,`docs-api-properties-row`],[`id`,`prop-p-timeout`,1,`docs-api-properties-row`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`method-search`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-clearSearch`,1,`docs-api-method-table`],[`id`,`method-onSearchKeydown`,1,`docs-api-method-table`],[`id`,`interface-po-search-ai-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-literals-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-request`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-request-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-request-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-response-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`id`,`interface-po-search-ai-response-description`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-response-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`],[`id`,`interface-po-search-ai-result`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-result-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-data`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-description`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-result-type`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-ai-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error-query`,1,`docs-api-properties-row`],[`id`,`interface-po-search-ai-error-status-code`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type`,1,`docs-api-class-name`],[`id`,`enum-po-search-ai-response-type-filter`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type-chat`,1,`docs-api-properties-row`],[`id`,`enum-po-search-ai-response-type-custom`,1,`docs-api-properties-row`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoSearchAiComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`O `),Jc(24,`code`),Mk(25,`po-search-ai`),Kg(),Mk(26,` é um componente de `),Jc(27,`strong`),Mk(28,`busca em linguagem natural`),Kg(),Mk(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Jc(30,`em`),Mk(31,`"clientes de SP com saldo acima de R$ 500"`),Kg(),Mk(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Jc(33,`a`,6)(34,`code`),Mk(35,`po-table`),Kg()(),Mk(36,`.`),Kg(),Jc(37,`p`),Mk(38,`O componente é `),Jc(39,`strong`),Mk(40,`agnóstico ao provedor de IA`),Kg(),Mk(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Jc(42,`code`),Mk(43,`p-url`),Kg(),Mk(44,`, que recebe `),Jc(45,`code`),Mk(46,`{ query, columns }`),Kg(),Mk(47,` e deve retornar
`),Jc(48,`code`),Mk(49,`{ filter, description, confidence }`),Kg(),Mk(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),Kg(),Jc(51,`p`),Mk(52,`Por herdar de `),Jc(53,`code`),Mk(54,`po-input`),Kg(),Mk(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Jc(56,`code`),Mk(57,`template-driven`),Kg(),Mk(58,` e `),Jc(59,`code`),Mk(60,`reactive`),Kg(),Mk(61,`.`),Kg(),Jc(62,`h4`),Mk(63,`Endpoint de IA (backend)`),Kg(),Jc(64,`p`),Mk(65,`O componente `),Jc(66,`strong`),Mk(67,`não conversa diretamente com a LLM`),Kg(),Mk(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Jc(69,`code`),Mk(70,`p-url`),Kg(),Mk(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),Kg(),Jc(72,`p`),Mk(73,`O contrato é simples. O componente faz um `),Jc(74,`code`),Mk(75,`POST`),Kg(),Mk(76,` enviando:`),Kg(),Jc(77,`pre`)(78,`code`,7),Mk(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),Kg()(),Jc(80,`p`),Mk(81,`E o endpoint deve responder com:`),Kg(),Jc(82,`pre`)(83,`code`,7),Mk(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),Kg()(),Jc(85,`p`),Mk(86,`Onde `),Jc(87,`code`),Mk(88,`filter`),Kg(),Mk(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),Jc(90,`code`),Mk(91,`description`),Kg(),Mk(92,` \xE9 um
resumo leg\xEDvel e `),Jc(93,`code`),Mk(94,`confidence`),Kg(),Mk(95,` (`),Jc(96,`code`),Mk(97,`0.0`),Kg(),Mk(98,` a `),Jc(99,`code`),Mk(100,`1.0`),Kg(),Mk(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Jc(102,`code`),Mk(103,`p-min-confidence`),Kg(),Mk(104,` para decidir entre os eventos `),Jc(105,`code`),Mk(106,`p-result`),Kg(),Mk(107,` e `),Jc(108,`code`),Mk(109,`p-low-confidence`),Kg(),Mk(110,`.`),Kg(),Jc(111,`blockquote`)(112,`p`)(113,`strong`),Mk(114,`Exemplo de implementação:`),Kg(),Mk(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),Kg(),Jc(116,`ul`)(117,`li`),Mk(118,`Endpoint público: `),Jc(119,`a`,8)(120,`code`),Mk(121,`/v1/ai/filter`),Kg()()(),Jc(122,`li`),Mk(123,`Código-fonte: `),Jc(124,`a`,9),Mk(125,`po-sample-api/src/ai/ai.service.ts`),Kg()()()(),Jc(126,`h4`),Mk(127,`Estados de comportamento`),Kg(),Jc(128,`ul`)(129,`li`)(130,`strong`),Mk(131,`Idle:`),Kg(),Mk(132,` aguardando a digitação da consulta.`),Kg(),Jc(133,`li`)(134,`strong`),Mk(135,`Loading:`),Kg(),Mk(136,` consulta em andamento (ícone de carregamento ativo).`),Kg(),Jc(137,`li`)(138,`strong`),Mk(139,`Aplicado:`),Kg(),Mk(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),Kg(),Jc(141,`li`)(142,`strong`),Mk(143,`Baixa confiança:`),Kg(),Mk(144,` quando `),Jc(145,`code`),Mk(146,`confidence`),Kg(),Mk(147,` for menor que `),Jc(148,`code`),Mk(149,`p-min-confidence`),Kg(),Mk(150,`, emite
`),Jc(151,`code`),Mk(152,`p-low-confidence`),Kg(),Mk(153,` e não aplica o filtro automaticamente.`),Kg(),Jc(154,`li`)(155,`strong`),Mk(156,`Erro:`),Kg(),Mk(157,` quando a chamada falha, emite `),Jc(158,`code`),Mk(159,`p-error`),Kg(),Mk(160,`.`),Kg()(),Jc(161,`h4`),Mk(162,`Tokens customizáveis`),Kg(),Jc(163,`p`),Mk(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(165,`blockquote`)(166,`p`),Mk(167,`Para maiores informações, acesse o guia `),Jc(168,`a`,10),Mk(169,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(170,`.`),Kg()(),Jc(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),Mk(175,`Propriedade`),Kg(),Jc(176,`th`),Mk(177,`Descrição`),Kg(),Jc(178,`th`),Mk(179,`Valor Padrão`),Kg()()(),Jc(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),Mk(184,`Default`),Kg()(),_u(185,`td`)(186,`td`),Kg(),Jc(187,`tr`)(188,`td`)(189,`code`),Mk(190,`--font-family`),Kg()(),Jc(191,`td`),Mk(192,`Família tipográfica do campo`),Kg(),Jc(193,`td`)(194,`code`),Mk(195,`var(--font-family-theme)`),Kg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Mk(199,`--font-size`),Kg()(),Jc(200,`td`),Mk(201,`Tamanho da fonte do campo`),Kg(),Jc(202,`td`)(203,`code`),Mk(204,`var(--font-size)`),Kg()()(),Jc(205,`tr`)(206,`td`)(207,`code`),Mk(208,`--text-color`),Kg()(),Jc(209,`td`),Mk(210,`Cor do texto digitado`),Kg(),Jc(211,`td`)(212,`code`),Mk(213,`var(--color-neutral-dark-90)`),Kg()()(),Jc(214,`tr`)(215,`td`)(216,`code`),Mk(217,`--text-color-placeholder`),Kg()(),Jc(218,`td`),Mk(219,`Cor do texto do placeholder`),Kg(),Jc(220,`td`)(221,`code`),Mk(222,`var(--color-neutral-light-30)`),Kg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Mk(226,`--color`),Kg()(),Jc(227,`td`),Mk(228,`Cor da borda do campo`),Kg(),Jc(229,`td`)(230,`code`),Mk(231,`var(--color-neutral-dark-70)`),Kg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Mk(235,`--background`),Kg()(),Jc(236,`td`),Mk(237,`Cor de fundo do campo`),Kg(),Jc(238,`td`)(239,`code`),Mk(240,`var(--color-neutral-light-05)`),Kg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Mk(244,`--border-radius`),Kg()(),Jc(245,`td`),Mk(246,`Raio da borda do campo`),Kg(),Jc(247,`td`)(248,`code`),Mk(249,`var(--border-radius-md)`),Kg()()(),Jc(250,`tr`)(251,`td`)(252,`strong`),Mk(253,`Ícones e divisória`),Kg()(),_u(254,`td`)(255,`td`),Kg(),Jc(256,`tr`)(257,`td`)(258,`code`),Mk(259,`--color-icon-read`),Kg()(),Jc(260,`td`),Mk(261,`Cor do ícone de busca por IA`),Kg(),Jc(262,`td`)(263,`code`),Mk(264,`var(--color-neutral-dark-70)`),Kg()()(),Jc(265,`tr`)(266,`td`)(267,`code`),Mk(268,`--color-divider`),Kg()(),Jc(269,`td`),Mk(270,`Cor da divisória vertical entre o campo e o botão de busca`),Kg(),Jc(271,`td`)(272,`code`),Mk(273,`var(--color-neutral-mid-40)`),Kg()()(),Jc(274,`tr`)(275,`td`)(276,`code`),Mk(277,`--color-icon-processing`),Kg()(),Jc(278,`td`),Mk(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),Kg(),Jc(280,`td`)(281,`code`),Mk(282,`var(--color-action-default)`),Kg()()(),Jc(283,`tr`)(284,`td`)(285,`strong`),Mk(286,`Hover`),Kg()(),_u(287,`td`)(288,`td`),Kg(),Jc(289,`tr`)(290,`td`)(291,`code`),Mk(292,`--color-hover`),Kg()(),Jc(293,`td`),Mk(294,`Cor da borda no estado hover`),Kg(),Jc(295,`td`)(296,`code`),Mk(297,`var(--color-brand-01-dark)`),Kg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Mk(301,`--background-hover`),Kg()(),Jc(302,`td`),Mk(303,`Cor de fundo no estado hover`),Kg(),Jc(304,`td`)(305,`code`),Mk(306,`var(--color-brand-01-lightest)`),Kg()()(),Jc(307,`tr`)(308,`td`)(309,`strong`),Mk(310,`Focused`),Kg()(),_u(311,`td`)(312,`td`),Kg(),Jc(313,`tr`)(314,`td`)(315,`code`),Mk(316,`--color-focused`),Kg()(),Jc(317,`td`),Mk(318,`Cor da borda no estado de foco`),Kg(),Jc(319,`td`)(320,`code`),Mk(321,`var(--color-action-default)`),Kg()()(),Jc(322,`tr`)(323,`td`)(324,`code`),Mk(325,`--outline-color-focused`),Kg()(),Jc(326,`td`),Mk(327,`Cor do outline no estado de foco`),Kg(),Jc(328,`td`)(329,`code`),Mk(330,`var(--color-action-focus)`),Kg()()(),Jc(331,`tr`)(332,`td`)(333,`strong`),Mk(334,`Disabled`),Kg()(),_u(335,`td`)(336,`td`),Kg(),Jc(337,`tr`)(338,`td`)(339,`code`),Mk(340,`--color-disabled`),Kg()(),Jc(341,`td`),Mk(342,`Cor da borda no estado desabilitado`),Kg(),Jc(343,`td`)(344,`code`),Mk(345,`var(--color-neutral-light-30)`),Kg()()(),Jc(346,`tr`)(347,`td`)(348,`code`),Mk(349,`--background-disabled`),Kg()(),Jc(350,`td`),Mk(351,`Cor de fundo no estado desabilitado`),Kg(),Jc(352,`td`)(353,`code`),Mk(354,`var(--color-neutral-light-20)`),Kg()()()()()(),Jc(355,`div`,11)(356,`h4`,12),Mk(357,`Seletor`),Kg(),Jc(358,`pre`,13),Mk(359,`<po-search-ai
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
`),Kg()(),Jc(360,`h4`,14),Mk(361,`Propriedades`),Kg(),Jc(362,`table`,15)(363,`tr`,16)(364,`th`,17),Mk(365,`Nome`),Kg(),Jc(366,`th`,17),Mk(367,`Tipo`),Kg(),Jc(368,`th`,17),Mk(369,`Padrão`),Kg(),Jc(370,`th`,17),Mk(371,`Descrição`),Kg()(),Jc(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),Mk(376,` (p-clear)`),_u(377,`br`),Kg()()(),Jc(378,`td`,22)(379,`code`,23),Mk(380,`EventEmitter`),Kg()(),Jc(381,`td`,24),Mk(382,`-`),Kg(),Jc(383,`td`,25)(384,`em`)(385,`strong`),Mk(386,`(opcional)`),Kg()(),Jc(387,`p`),Mk(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),Kg()()(),Jc(389,`tr`,26)(390,`td`,19)(391,`div`,27)(392,`span`,28),Mk(393,` p-columns`),_u(394,`br`),Kg()()(),Jc(395,`td`,22)(396,`code`,29),Mk(397,`Array<PoSearchAiColumn>`),Kg()(),Jc(398,`td`,24)(399,`p`)(400,`code`),Mk(401,`[]`),Kg()()(),Jc(402,`td`,25)(403,`em`)(404,`strong`),Mk(405,`(opcional)`),Kg()(),Jc(406,`p`),Mk(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Jc(408,`code`),Mk(409,`p-url`),Kg(),Mk(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),Kg()()(),Jc(411,`tr`,30)(412,`td`,19)(413,`div`,20)(414,`span`,21),Mk(415,` (p-error)`),_u(416,`br`),Kg()()(),Jc(417,`td`,22)(418,`code`,23),Mk(419,`EventEmitter`),Kg()(),Jc(420,`td`,24),Mk(421,`-`),Kg(),Jc(422,`td`,25)(423,`em`)(424,`strong`),Mk(425,`(opcional)`),Kg()(),Jc(426,`p`),Mk(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Jc(428,`code`),Mk(429,`PoSearchAiError`),Kg(),Mk(430,`.`),Kg()()(),Jc(431,`tr`,31)(432,`td`,19)(433,`div`,27)(434,`span`,28),Mk(435,` p-literals`),_u(436,`br`),Kg()()(),Jc(437,`td`,22)(438,`code`,32),Mk(439,`PoSearchAiLiterals`),Kg()(),Jc(440,`td`,24),Mk(441,`-`),Kg(),Jc(442,`td`,25)(443,`em`)(444,`strong`),Mk(445,`(opcional)`),Kg()(),Jc(446,`p`),Mk(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Kg()()(),Jc(448,`tr`,33)(449,`td`,19)(450,`div`,20)(451,`span`,21),Mk(452,` (p-low-confidence)`),_u(453,`br`),Kg()()(),Jc(454,`td`,22)(455,`code`,23),Mk(456,`EventEmitter`),Kg()(),Jc(457,`td`,24),Mk(458,`-`),Kg(),Jc(459,`td`,25)(460,`em`)(461,`strong`),Mk(462,`(opcional)`),Kg()(),Jc(463,`p`),Mk(464,`Evento disparado quando a confiança da resposta da IA é menor que `),Jc(465,`code`),Mk(466,`p-min-confidence`),Kg(),Mk(467,`.
Emite um objeto `),Jc(468,`code`),Mk(469,`PoSearchAiResult`),Kg(),Mk(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),Kg()()(),Jc(471,`tr`,34)(472,`td`,19)(473,`div`,27)(474,`span`,28),Mk(475,` p-min-confidence`),_u(476,`br`),Kg()()(),Jc(477,`td`,22)(478,`code`,35),Mk(479,`number`),Kg()(),Jc(480,`td`,24)(481,`p`)(482,`code`),Mk(483,`0.5`),Kg()()(),Jc(484,`td`,25)(485,`em`)(486,`strong`),Mk(487,`(opcional)`),Kg()(),Jc(488,`p`),Mk(489,`Nível mínimo de confiança (`),Jc(490,`code`),Mk(491,`0.0`),Kg(),Mk(492,` a `),Jc(493,`code`),Mk(494,`1.0`),Kg(),Mk(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Jc(496,`code`),Mk(497,`p-low-confidence`),Kg(),Mk(498,` \xE9
emitido em vez de `),Jc(499,`code`),Mk(500,`p-result`),Kg(),Mk(501,`.`),Kg()()(),Jc(502,`tr`,36)(503,`td`,19)(504,`div`,20)(505,`span`,21),Mk(506,` (p-result)`),_u(507,`br`),Kg()()(),Jc(508,`td`,22)(509,`code`,23),Mk(510,`EventEmitter`),Kg()(),Jc(511,`td`,24),Mk(512,`-`),Kg(),Jc(513,`td`,25)(514,`em`)(515,`strong`),Mk(516,`(opcional)`),Kg()(),Jc(517,`p`),Mk(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Jc(519,`code`),Mk(520,`p-min-confidence`),Kg(),Mk(521,`. Emite um objeto `),Jc(522,`code`),Mk(523,`PoSearchAiResult`),Kg(),Mk(524,`.`),Kg(),Jc(525,`p`),Mk(526,`O campo `),Jc(527,`code`),Mk(528,`type`),Kg(),Mk(529,` do resultado indica como o consumidor deve interpretar a resposta:`),Kg(),Jc(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),Mk(535,`filter`),Kg()(),Jc(536,`em`),Mk(537,`(padrão)`),Kg(),Mk(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),Jc(539,`code`),Mk(540,`result.filter`),Kg(),Mk(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Jc(542,`code`),Mk(543,`po-table`),Kg(),Mk(544,` via `),Jc(545,`code`),Mk(546,`p-filter`),Kg(),Mk(547,`.`),Kg()(),Jc(548,`li`)(549,`p`)(550,`strong`)(551,`code`),Mk(552,`chat`),Kg()(),Mk(553,`: a IA retornou uma resposta conversacional. Use `),Jc(554,`code`),Mk(555,`result.data`),Kg(),Mk(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),Kg()(),Jc(557,`li`)(558,`p`)(559,`strong`)(560,`code`),Mk(561,`custom`),Kg()(),Mk(562,`: a IA retornou um payload genérico definido pelo backend. Use `),Jc(563,`code`),Mk(564,`result.data`),Kg(),Mk(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),Kg()()()()(),Jc(566,`tr`,37)(567,`td`,19)(568,`div`,27)(569,`span`,28),Mk(570,` p-timeout`),_u(571,`br`),Kg()()(),Jc(572,`td`,22)(573,`code`,35),Mk(574,`number`),Kg()(),Jc(575,`td`,24)(576,`p`)(577,`code`),Mk(578,`10000`),Kg()()(),Jc(579,`td`,25)(580,`em`)(581,`strong`),Mk(582,`(opcional)`),Kg()(),Jc(583,`p`),Mk(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Jc(585,`code`),Mk(586,`p-error`),Kg(),Mk(587,` com `),Jc(588,`code`),Mk(589,`statusCode 408`),Kg(),Mk(590,`.`),Kg()()(),Jc(591,`tr`,38)(592,`td`,19)(593,`div`,27)(594,`span`,28),Mk(595,` p-url`),_u(596,`br`),Kg()()(),Jc(597,`td`,22)(598,`code`,39),Mk(599,`string`),Kg()(),Jc(600,`td`,24),Mk(601,`-`),Kg(),Jc(602,`td`,25)(603,`em`)(604,`strong`),Mk(605,`(opcional)`),Kg()(),Jc(606,`p`),Mk(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Jc(608,`code`),Mk(609,`{ query, columns }`),Kg(),Mk(610,` via `),Jc(611,`code`),Mk(612,`POST`),Kg(),Mk(613,` e deve retornar `),Jc(614,`code`),Mk(615,`{ filter, description, confidence }`),Kg(),Mk(616,`.`),Kg(),Jc(617,`blockquote`)(618,`p`),Mk(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),Jc(620,`strong`),Mk(621,`no backend`),Kg(),Mk(622,`, nunca no client-side.`),Kg()()()()(),Jc(623,`h3`,14),Mk(624,`Métodos`),Kg(),Jc(625,`table`,40)(626,`tr`,41)(627,`th`,42)(628,`div`,27)(629,`h4`)(630,`span`,28),Mk(631,` search `),Kg()()()()(),Jc(632,`tr`,25)(633,`td`,25)(634,`p`),Mk(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Jc(636,`code`),Mk(637,`p-url`),Kg(),Mk(638,`.`),Kg(),Jc(639,`p`),Mk(640,`Caso a consulta esteja vazia ou `),Jc(641,`code`),Mk(642,`p-url`),Kg(),Mk(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Jc(644,`code`),Mk(645,`p-result`),Kg(),Mk(646,` (ou `),Jc(647,`code`),Mk(648,`p-low-confidence`),Kg(),Mk(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Jc(650,`code`),Mk(651,`p-error`),Kg(),Mk(652,`.`),Kg()()()(),_u(653,`br`),Jc(654,`table`,43)(655,`tr`,41)(656,`th`,42)(657,`div`,27)(658,`h4`)(659,`span`,28),Mk(660,` clearSearch `),Kg()()()()(),Jc(661,`tr`,25)(662,`td`,25)(663,`p`),Mk(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Jc(665,`code`),Mk(666,`p-clear`),Kg(),Mk(667,`.`),Kg()()()(),_u(668,`br`),Jc(669,`table`,44)(670,`tr`,41)(671,`th`,42)(672,`div`,27)(673,`h4`)(674,`span`,28),Mk(675,` onSearchKeydown `),Kg()()()()(),Jc(676,`tr`,25)(677,`td`,25)(678,`p`),Mk(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Jc(680,`code`),Mk(681,`Enter`),Kg(),Mk(682,`.`),Kg()()()(),Jc(683,`h5`)(684,`b`),Mk(685,`Parâmetros`),Kg()(),Jc(686,`table`,15)(687,`tr`,16)(688,`th`,17),Mk(689,`Nome`),Kg(),Jc(690,`th`,17),Mk(691,`Tipo`),Kg(),Jc(692,`th`,17),Mk(693,`Descrição`),Kg()(),Jc(694,`tr`,41)(695,`td`,19),Mk(696,` event`),Kg(),_u(697,`td`,22),Jc(698,`td`,25)(699,`p`),Mk(700,`Evento de teclado.`),Kg()()()(),_u(701,`br`),Jc(702,`h3`),Mk(703,`Interfaces`),Kg(),Jc(704,`h4`,45)(705,`code`,5),Mk(706,`PoSearchAiColumn`),Kg()(),Jc(707,`div`,2)(708,`p`),Mk(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),Kg(),Jc(710,`p`),Mk(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),Kg()(),Jc(712,`h4`,14),Mk(713,`Propriedades`),Kg(),Jc(714,`table`,15)(715,`tr`,16)(716,`th`,17),Mk(717,`Nome`),Kg(),Jc(718,`th`,17),Mk(719,`Tipo`),Kg(),Jc(720,`th`,17),Mk(721,`Descrição`),Kg()(),Jc(722,`tr`,46)(723,`td`,19)(724,`div`,27)(725,`span`,28),Mk(726,` label`),_u(727,`br`),Kg()()(),Jc(728,`td`,22)(729,`code`,39),Mk(730,`string`),Kg()(),Jc(731,`td`,25)(732,`p`),Mk(733,`Rótulo legível exibido ao usuário (ex: `),Jc(734,`code`),Mk(735,`Nome`),Kg(),Mk(736,`, `),Jc(737,`code`),Mk(738,`Idade`),Kg(),Mk(739,`, `),Jc(740,`code`),Mk(741,`Cidade`),Kg(),Mk(742,`).`),Kg()()(),Jc(743,`tr`,47)(744,`td`,19)(745,`div`,27)(746,`span`,28),Mk(747,` property`),_u(748,`br`),Kg()()(),Jc(749,`td`,22)(750,`code`,39),Mk(751,`string`),Kg()(),Jc(752,`td`,25)(753,`p`),Mk(754,`Nome da propriedade do campo (ex: `),Jc(755,`code`),Mk(756,`name`),Kg(),Mk(757,`, `),Jc(758,`code`),Mk(759,`age`),Kg(),Mk(760,`, `),Jc(761,`code`),Mk(762,`city`),Kg(),Mk(763,`).`),Kg()()(),Jc(764,`tr`,48)(765,`td`,19)(766,`div`,27)(767,`span`,28),Mk(768,` type`),_u(769,`br`),Kg()()(),Jc(770,`td`,22)(771,`code`,39),Mk(772,`string`),Kg()(),Jc(773,`td`,25)(774,`em`)(775,`strong`),Mk(776,`(opcional)`),Kg()(),Jc(777,`p`),Mk(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),Kg(),Jc(779,`p`),Mk(780,`Valores comuns: `),Jc(781,`code`),Mk(782,`string`),Kg(),Mk(783,`, `),Jc(784,`code`),Mk(785,`number`),Kg(),Mk(786,`, `),Jc(787,`code`),Mk(788,`date`),Kg(),Mk(789,`, `),Jc(790,`code`),Mk(791,`currency`),Kg(),Mk(792,`, `),Jc(793,`code`),Mk(794,`boolean`),Kg(),Mk(795,`.`),Kg()()()(),Jc(796,`h4`,49)(797,`code`,5),Mk(798,`PoSearchAiLiterals`),Kg()(),Jc(799,`div`,2)(800,`p`),Mk(801,`Interface para definição das literais usadas no `),Jc(802,`code`),Mk(803,`po-search-ai`),Kg(),Mk(804,`.`),Kg()(),Jc(805,`h4`,14),Mk(806,`Propriedades`),Kg(),Jc(807,`table`,15)(808,`tr`,16)(809,`th`,17),Mk(810,`Nome`),Kg(),Jc(811,`th`,17),Mk(812,`Tipo`),Kg(),Jc(813,`th`,17),Mk(814,`Descrição`),Kg()(),Jc(815,`tr`,50)(816,`td`,19)(817,`div`,27)(818,`span`,28),Mk(819,` clean`),_u(820,`br`),Kg()()(),Jc(821,`td`,22)(822,`code`,39),Mk(823,`string`),Kg()(),Jc(824,`td`,25)(825,`em`)(826,`strong`),Mk(827,`(opcional)`),Kg()(),Jc(828,`p`),Mk(829,`Texto de acessibilidade do botão de limpar o campo.`),Kg()()(),Jc(830,`tr`,51)(831,`td`,19)(832,`div`,27)(833,`span`,28),Mk(834,` errorMessage`),_u(835,`br`),Kg()()(),Jc(836,`td`,22)(837,`code`,39),Mk(838,`string`),Kg()(),Jc(839,`td`,25)(840,`em`)(841,`strong`),Mk(842,`(opcional)`),Kg()(),Jc(843,`p`),Mk(844,`Mensagem exibida quando a busca com IA falha.`),Kg()()()(),Jc(845,`h4`,52)(846,`code`,5),Mk(847,`PoSearchAiRequest`),Kg()(),Jc(848,`div`,2)(849,`p`),Mk(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),Jc(851,`code`),Mk(852,`p-url`),Kg(),Mk(853,`.`),Kg(),Jc(854,`p`),Mk(855,`O componente é `),Jc(856,`strong`),Mk(857,`agnóstico ao provedor de IA`),Kg(),Mk(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Jc(859,`code`),Mk(860,`PoSearchAiResponse`),Kg(),Mk(861,`.`),Kg()(),Jc(862,`h4`,14),Mk(863,`Propriedades`),Kg(),Jc(864,`table`,15)(865,`tr`,16)(866,`th`,17),Mk(867,`Nome`),Kg(),Jc(868,`th`,17),Mk(869,`Tipo`),Kg(),Jc(870,`th`,17),Mk(871,`Descrição`),Kg()(),Jc(872,`tr`,53)(873,`td`,19)(874,`div`,27)(875,`span`,28),Mk(876,` columns`),_u(877,`br`),Kg()()(),Jc(878,`td`,22)(879,`code`,29),Mk(880,`Array<PoSearchAiColumn>`),Kg()(),Jc(881,`td`,25)(882,`p`),Mk(883,`Metadados dos campos disponíveis para a busca (ver `),Jc(884,`code`),Mk(885,`PoSearchAiColumn`),Kg(),Mk(886,`).`),Kg()()(),Jc(887,`tr`,54)(888,`td`,19)(889,`div`,27)(890,`span`,28),Mk(891,` query`),_u(892,`br`),Kg()()(),Jc(893,`td`,22)(894,`code`,39),Mk(895,`string`),Kg()(),Jc(896,`td`,25)(897,`p`),Mk(898,`Texto em linguagem natural digitado pelo usuário.`),Kg()()()(),Jc(899,`h4`,55)(900,`code`,5),Mk(901,`PoSearchAiResponse`),Kg()(),Jc(902,`div`,2)(903,`p`),Mk(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),Jc(905,`code`),Mk(906,`p-url`),Kg(),Mk(907,`.`),Kg()(),Jc(908,`h4`,14),Mk(909,`Propriedades`),Kg(),Jc(910,`table`,15)(911,`tr`,16)(912,`th`,17),Mk(913,`Nome`),Kg(),Jc(914,`th`,17),Mk(915,`Tipo`),Kg(),Jc(916,`th`,17),Mk(917,`Descrição`),Kg()(),Jc(918,`tr`,56)(919,`td`,19)(920,`div`,27)(921,`span`,28),Mk(922,` confidence`),_u(923,`br`),Kg()()(),Jc(924,`td`,22)(925,`code`,35),Mk(926,`number`),Kg()(),Jc(927,`td`,25)(928,`em`)(929,`strong`),Mk(930,`(opcional)`),Kg()(),Jc(931,`p`),Mk(932,`Nível de confiança da interpretação da IA, em um intervalo de `),Jc(933,`code`),Mk(934,`0.0`),Kg(),Mk(935,` a `),Jc(936,`code`),Mk(937,`1.0`),Kg(),Mk(938,`.`),Kg(),Jc(939,`p`),Mk(940,`Utilizado em conjunto com `),Jc(941,`code`),Mk(942,`p-min-confidence`),Kg(),Mk(943,` para decidir se o resultado é confiável.`),Kg()()(),Jc(944,`tr`,57)(945,`td`,19)(946,`div`,27)(947,`span`,28),Mk(948,` data`),_u(949,`br`),Kg()()(),Jc(950,`td`,22)(951,`code`,58),Mk(952,`Record<string, any>`),Kg()(),Jc(953,`td`,25)(954,`em`)(955,`strong`),Mk(956,`(opcional)`),Kg()(),Jc(957,`p`),Mk(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),Kg(),Jc(959,`p`),Mk(960,`Utilizado quando `),Jc(961,`code`),Mk(962,`type`),Kg(),Mk(963,` é `),Jc(964,`code`),Mk(965,`'chat'`),Kg(),Mk(966,` ou `),Jc(967,`code`),Mk(968,`'custom'`),Kg(),Mk(969,`.`),Kg()()(),Jc(970,`tr`,59)(971,`td`,19)(972,`div`,27)(973,`span`,28),Mk(974,` description`),_u(975,`br`),Kg()()(),Jc(976,`td`,22)(977,`code`,39),Mk(978,`string`),Kg()(),Jc(979,`td`,25)(980,`em`)(981,`strong`),Mk(982,`(opcional)`),Kg()(),Jc(983,`p`),Mk(984,`Descrição legível, em linguagem natural, da resposta.`),Kg()()(),Jc(985,`tr`,60)(986,`td`,19)(987,`div`,27)(988,`span`,28),Mk(989,` filter`),_u(990,`br`),Kg()()(),Jc(991,`td`,22)(992,`code`,39),Mk(993,`string`),Kg()(),Jc(994,`td`,25)(995,`em`)(996,`strong`),Mk(997,`(opcional)`),Kg()(),Jc(998,`p`),Mk(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Jc(1e3,`code`),Mk(1001,`age gt 30 and city eq 'São Paulo'`),Kg(),Mk(1002,`).`),Kg(),Jc(1003,`p`),Mk(1004,`Utilizado quando `),Jc(1005,`code`),Mk(1006,`type`),Kg(),Mk(1007,` é `),Jc(1008,`code`),Mk(1009,`'filter'`),Kg(),Mk(1010,`.`),Kg()()(),Jc(1011,`tr`,61)(1012,`td`,19)(1013,`div`,27)(1014,`span`,28),Mk(1015,` type`),_u(1016,`br`),Kg()()(),Jc(1017,`td`,22)(1018,`code`,62),Mk(1019,`PoSearchAiResponseType`),Kg()(),Jc(1020,`td`,25)(1021,`em`)(1022,`strong`),Mk(1023,`(opcional)`),Kg()(),Jc(1024,`p`),Mk(1025,`Tipo da resposta retornada pela IA.`),Kg(),Jc(1026,`p`),Mk(1027,`Quando omitido, o componente infere `),Jc(1028,`code`),Mk(1029,`'filter'`),Kg(),Mk(1030,` se `),Jc(1031,`code`),Mk(1032,`filter`),Kg(),Mk(1033,` estiver presente,
caso contr\xE1rio assume `),Jc(1034,`code`),Mk(1035,`'custom'`),Kg(),Mk(1036,`.`),Kg()()()(),Jc(1037,`h4`,63)(1038,`code`,5),Mk(1039,`PoSearchAiResult`),Kg()(),Jc(1040,`div`,2)(1041,`p`),Mk(1042,`Interface que define o objeto emitido pelos eventos `),Jc(1043,`code`),Mk(1044,`p-result`),Kg(),Mk(1045,` e `),Jc(1046,`code`),Mk(1047,`p-low-confidence`),Kg(),Mk(1048,`.`),Kg()(),Jc(1049,`h4`,14),Mk(1050,`Propriedades`),Kg(),Jc(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),Mk(1054,`Nome`),Kg(),Jc(1055,`th`,17),Mk(1056,`Tipo`),Kg(),Jc(1057,`th`,17),Mk(1058,`Descrição`),Kg()(),Jc(1059,`tr`,64)(1060,`td`,19)(1061,`div`,27)(1062,`span`,28),Mk(1063,` confidence`),_u(1064,`br`),Kg()()(),Jc(1065,`td`,22)(1066,`code`,35),Mk(1067,`number`),Kg()(),Jc(1068,`td`,25)(1069,`em`)(1070,`strong`),Mk(1071,`(opcional)`),Kg()(),Jc(1072,`p`),Mk(1073,`Nível de confiança da interpretação (`),Jc(1074,`code`),Mk(1075,`0.0`),Kg(),Mk(1076,` a `),Jc(1077,`code`),Mk(1078,`1.0`),Kg(),Mk(1079,`).`),Kg()()(),Jc(1080,`tr`,65)(1081,`td`,19)(1082,`div`,27)(1083,`span`,28),Mk(1084,` data`),_u(1085,`br`),Kg()()(),Jc(1086,`td`,22)(1087,`code`,58),Mk(1088,`Record<string, any>`),Kg()(),Jc(1089,`td`,25)(1090,`em`)(1091,`strong`),Mk(1092,`(opcional)`),Kg()(),Jc(1093,`p`),Mk(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),Kg()()(),Jc(1095,`tr`,66)(1096,`td`,19)(1097,`div`,27)(1098,`span`,28),Mk(1099,` description`),_u(1100,`br`),Kg()()(),Jc(1101,`td`,22)(1102,`code`,39),Mk(1103,`string`),Kg()(),Jc(1104,`td`,25)(1105,`em`)(1106,`strong`),Mk(1107,`(opcional)`),Kg()(),Jc(1108,`p`),Mk(1109,`Descrição legível da resposta.`),Kg()()(),Jc(1110,`tr`,67)(1111,`td`,19)(1112,`div`,27)(1113,`span`,28),Mk(1114,` filter`),_u(1115,`br`),Kg()()(),Jc(1116,`td`,22)(1117,`code`,39),Mk(1118,`string`),Kg()(),Jc(1119,`td`,25)(1120,`em`)(1121,`strong`),Mk(1122,`(opcional)`),Kg()(),Jc(1123,`p`),Mk(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Jc(1125,`code`),Mk(1126,`type`),Kg(),Mk(1127,` é `),Jc(1128,`code`),Mk(1129,`'filter'`),Kg(),Mk(1130,`.`),Kg()()(),Jc(1131,`tr`,68)(1132,`td`,19)(1133,`div`,27)(1134,`span`,28),Mk(1135,` query`),_u(1136,`br`),Kg()()(),Jc(1137,`td`,22)(1138,`code`,39),Mk(1139,`string`),Kg()(),Jc(1140,`td`,25)(1141,`p`),Mk(1142,`Texto original digitado pelo usuário.`),Kg()()(),Jc(1143,`tr`,69)(1144,`td`,19)(1145,`div`,27)(1146,`span`,28),Mk(1147,` type`),_u(1148,`br`),Kg()()(),Jc(1149,`td`,22)(1150,`code`,62),Mk(1151,`PoSearchAiResponseType`),Kg()(),Jc(1152,`td`,25)(1153,`p`),Mk(1154,`Tipo da resposta retornada pela IA.`),Kg()()()(),Jc(1155,`h4`,70)(1156,`code`,5),Mk(1157,`PoSearchAiError`),Kg()(),Jc(1158,`div`,2)(1159,`p`),Mk(1160,`Interface que define o objeto emitido pelo evento `),Jc(1161,`code`),Mk(1162,`p-error`),Kg(),Mk(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),Kg()(),Jc(1164,`h4`,14),Mk(1165,`Propriedades`),Kg(),Jc(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),Mk(1169,`Nome`),Kg(),Jc(1170,`th`,17),Mk(1171,`Tipo`),Kg(),Jc(1172,`th`,17),Mk(1173,`Descrição`),Kg()(),Jc(1174,`tr`,71)(1175,`td`,19)(1176,`div`,27)(1177,`span`,28),Mk(1178,` message`),_u(1179,`br`),Kg()()(),Jc(1180,`td`,22)(1181,`code`,39),Mk(1182,`string`),Kg()(),Jc(1183,`td`,25)(1184,`p`),Mk(1185,`Mensagem de erro.`),Kg()()(),Jc(1186,`tr`,72)(1187,`td`,19)(1188,`div`,27)(1189,`span`,28),Mk(1190,` query`),_u(1191,`br`),Kg()()(),Jc(1192,`td`,22)(1193,`code`,39),Mk(1194,`string`),Kg()(),Jc(1195,`td`,25)(1196,`p`),Mk(1197,`Texto original digitado pelo usuário.`),Kg()()(),Jc(1198,`tr`,73)(1199,`td`,19)(1200,`div`,27)(1201,`span`,28),Mk(1202,` statusCode`),_u(1203,`br`),Kg()()(),Jc(1204,`td`,22)(1205,`code`,35),Mk(1206,`number`),Kg()(),Jc(1207,`td`,25)(1208,`p`),Mk(1209,`Código HTTP do erro (ex: `),Jc(1210,`code`),Mk(1211,`500`),Kg(),Mk(1212,`, `),Jc(1213,`code`),Mk(1214,`408`),Kg(),Mk(1215,` para timeout).`),Kg()()()(),Jc(1216,`h3`),Mk(1217,`Enums`),Kg(),Jc(1218,`h4`,74)(1219,`code`,5),Mk(1220,`PoSearchAiResponseType`),Kg()(),Jc(1221,`div`,2)(1222,`p`),Mk(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),Kg()(),Jc(1224,`h4`,14),Mk(1225,`Propriedades`),Kg(),Jc(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),Mk(1229,`Nome`),Kg(),Jc(1230,`th`,17),Mk(1231,`Descrição`),Kg()(),Jc(1232,`tr`,75)(1233,`td`,19)(1234,`div`,27)(1235,`span`,28),Mk(1236,` filter`),_u(1237,`br`),Kg()()(),Jc(1238,`td`,25)(1239,`p`),Mk(1240,`Resposta contendo um filtro estruturado (ex: OData).`),Kg()()(),Jc(1241,`tr`,76)(1242,`td`,19)(1243,`div`,27)(1244,`span`,28),Mk(1245,` chat`),_u(1246,`br`),Kg()()(),Jc(1247,`td`,25)(1248,`p`),Mk(1249,`Resposta conversacional em linguagem natural.`),Kg()()(),Jc(1250,`tr`,77)(1251,`td`,19)(1252,`div`,27)(1253,`span`,28),Mk(1254,` custom`),_u(1255,`br`),Kg()()(),Jc(1256,`td`,25)(1257,`p`),Mk(1258,`Payload genérico definido pelo consumidor.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ze(a,R){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-search-ai-basic-view`)(2,`sample-po-search-ai-labs-view`)(3,`sample-po-search-ai-result-view`)(4,`sample-po-search-ai-filter-view`),Kg()),a&2){let o=tk();Ab(`hidden`,o.activeTab!==`web`)}}var Ne=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Search Ai`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Search Ai · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0),LO(1,ze,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-search-ai-doc`),Kg()()),l&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,xe,fe,ve,ye,Pe],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ne),GV]})}return a})();var vt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,_e]})}return a})();export{vt as DocPoSearchAiModule};
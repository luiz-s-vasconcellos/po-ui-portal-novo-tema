import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fn as voe,Fr as Jn,H as Mze,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Vt as cae,Xn as $O,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,oo as zO,or as Bk,qi as de,qr as NZ,tn as i5,tt as Ru,va as nk,vn as oi,w as Fc,wr as HO,xi as VO,xr as Gb,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var xe=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&_u(0,`po-search-ai`,0)},dependencies:[i5],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO AI Search Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-ai-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return o})();function qe(o,O){if(o&1&&(Jc(0,`po-container`,4)(1,`p`)(2,`strong`),Tk(3,`Query:`),Zg(),Tk(4),Zg(),Jc(5,`p`)(6,`strong`),Tk(7,`Filtro:`),Zg(),Tk(8),Zg(),Jc(9,`p`)(10,`strong`),Tk(11,`Descrição:`),Zg(),Tk(12),Zg(),Jc(13,`p`)(14,`strong`),Tk(15,`Confiança:`),Zg(),Tk(16),Zg()()),o&2){let a=nk();Ig(4),nm(` `,a.result.query),Ig(4),nm(` `,a.result.filter),Ig(4),nm(` `,a.result.description),Ig(4),nm(` `,a.result.confidence)}}var be=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=ZO();Jc(0,`po-search-ai`,1),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(m){return i.onResult(m)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Zg(),VO(4,qe,17,4,`po-container`,4),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.label,m)||(i.label=m),H_(m)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.help,m)||(i.help=m),H_(m)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.helperText,m)||(i.helperText=m),H_(m)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.placeholder,m)||(i.placeholder=m),H_(m)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.errorPattern,m)||(i.errorPattern=m),H_(m)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.url,m)||(i.url=m),H_(m)}),Zg(),Jc(14,`po-number`,11),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.timeout,m)||(i.timeout=m),H_(m)}),Zg(),Jc(15,`po-decimal`,12),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.minConfidence,m)||(i.minConfidence=m),H_(m)}),Zg(),Jc(16,`po-checkbox-group`,13),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.properties,m)||(i.properties=m),H_(m)}),Zg(),Jc(17,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(m){return U_(d),Ak(i.size,m)||(i.size=m),H_(m)}),Zg(),Jc(18,`div`,2)(19,`po-button`,15),vt(`p-click`,function(){return U_(d),sk(7).reset(),H_(i.restore())}),Zg()()()}l&2&&(Rb(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),Ig(3),Rb(`p-value`,i.event),Ig(),BO(i.result?4:-1),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.url),Y0(),Ig(),Yb(`ngModel`,i.timeout),Y0(),Ig(),Yb(`ngModel`,i.minConfidence),Rb(`p-decimals-length`,2),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Fc,Nf,I4,voe,j4,i5,Goe,Zte,Joe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO AI Search Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-search-ai
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
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-ai-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return o})();function Re(o,O){if(o&1&&(Jc(0,`po-container`,1)(1,`p`)(2,`strong`),Tk(3,`Query:`),Zg(),Tk(4),Zg(),Jc(5,`p`)(6,`strong`),Tk(7,`Filtro:`),Zg(),Tk(8),Zg(),Jc(9,`p`)(10,`strong`),Tk(11,`Descrição:`),Zg(),Tk(12),Zg(),Jc(13,`p`)(14,`strong`),Tk(15,`Confiança:`),Zg(),Tk(16),Zg()()),o&2){let a=nk();Ig(4),nm(` `,a.result.query),Ig(4),nm(` `,a.result.filter),Ig(4),nm(` `,a.result.description),Ig(4),nm(` `,a.result.confidence)}}var ve=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(Jc(0,`po-search-ai`,0),vt(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),Zg(),VO(1,Re,17,4,`po-container`,1)),l&2&&(Rb(`p-columns`,i.columns),Ig(),BO(i.result?1:-1))},dependencies:[Fc,i5],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO AI Search - Result`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-search-ai
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
    <p><strong>Query:</strong> { { result.query }}</p>
    <p><strong>Filtro:</strong> { { result.filter }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { result.description }}</p>
    <p><strong>Confian\xE7a:</strong> { { result.confidence }}</p>
  </po-container>
}
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-ai-result`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Oe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ve],encapsulation:2,changeDetection:1})}return o})();function Ne(o,O){if(o&1){let a=ZO();Jc(0,`po-filter-chip`,10),vt(`p-selected-change`,function(i){let d=U_(a).$implicit,s=nk();return H_(s.onSuggestionChange(d,i))}),Zg()}if(o&2){let a=O.$implicit,l=nk();Rb(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(Jc(0,`po-container`,9)(1,`p`,11),Tk(2,`Filtro OData gerado`),Zg(),Jc(3,`p`)(4,`strong`),Tk(5,`Consulta:`),Zg(),Tk(6),Zg(),Jc(7,`p`)(8,`strong`),Tk(9,`Descrição:`),Zg(),Tk(10),Zg(),Jc(11,`p`)(12,`strong`),Tk(13,`Confiança:`),Zg(),Tk(14),Zg(),Jc(15,`pre`,12),Tk(16),Zg()()),o&2){let a=nk();Ig(6),nm(` `,a.query),Ig(4),nm(` `,a.description),Ig(4),nm(` `,a.confidence),Ig(2),Gb(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(I(Ru))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&Cu(i5,5),l&2){let d;No(d=xo())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(Jc(0,`po-container`,0)(1,`p`,1),Tk(2,`Gere um filtro com IA`),Zg(),Jc(3,`p`,2),Tk(4,` Este exemplo usa o `),Jc(5,`code`),Tk(6,`po-search-ai`),Zg(),Tk(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),Zg(),Jc(8,`p`,3),Tk(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),Jc(10,`a`,4),Tk(11,`po-table`),Zg(),Tk(12,` já integra o `),Jc(13,`code`),Tk(14,`po-search-ai`),Zg(),Tk(15,` de forma inteligente através da propriedade `),Jc(16,`code`),Tk(17,`p-search-ai-field`),Zg(),Tk(18,`, experimente também! `),Zg()(),Jc(19,`po-search-ai`,5),vt(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),Zg(),Jc(20,`p`,6),Tk(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Zg(),Jc(22,`div`,7),$O(23,Ne,1,3,`po-filter-chip`,8,HO),Zg(),VO(25,ze,17,4,`po-container`,9)),l&2&&(Ig(19),Rb(`p-columns`,i.columns),Ig(4),zO(i.examples),Ig(2),BO(i.filter?25:-1))},dependencies:[Fc,i5,cae],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO AI Search - Filter`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container class="po-mb-2" p-no-border>
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
    <p><strong>Consulta:</strong> { { query }}</p>
    <p><strong>Descri\xE7\xE3o:</strong> { { description }}</p>
    <p><strong>Confian\xE7a:</strong> { { confidence }}</p>
    <pre class="po-font-text" style="background: var(--color-neutral-light-10); padding: 8px; border-radius: 4px">{ {
      filter
    }}</pre>
  </po-container>
}
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-ai-filter`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,We,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoSearchAiComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-search-ai`),Zg(),Tk(26,` é um componente de `),Jc(27,`strong`),Tk(28,`busca em linguagem natural`),Zg(),Tk(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),Jc(30,`em`),Tk(31,`"clientes de SP com saldo acima de R$ 500"`),Zg(),Tk(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),Jc(33,`a`,6)(34,`code`),Tk(35,`po-table`),Zg()(),Tk(36,`.`),Zg(),Jc(37,`p`),Tk(38,`O componente é `),Jc(39,`strong`),Tk(40,`agnóstico ao provedor de IA`),Zg(),Tk(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),Jc(42,`code`),Tk(43,`p-url`),Zg(),Tk(44,`, que recebe `),Jc(45,`code`),Tk(46,`{ query, columns }`),Zg(),Tk(47,` e deve retornar
`),Jc(48,`code`),Tk(49,`{ filter, description, confidence }`),Zg(),Tk(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),Zg(),Jc(51,`p`),Tk(52,`Por herdar de `),Jc(53,`code`),Tk(54,`po-input`),Zg(),Tk(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),Jc(56,`code`),Tk(57,`template-driven`),Zg(),Tk(58,` e `),Jc(59,`code`),Tk(60,`reactive`),Zg(),Tk(61,`.`),Zg(),Jc(62,`h4`),Tk(63,`Endpoint de IA (backend)`),Zg(),Jc(64,`p`),Tk(65,`O componente `),Jc(66,`strong`),Tk(67,`não conversa diretamente com a LLM`),Zg(),Tk(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),Jc(69,`code`),Tk(70,`p-url`),Zg(),Tk(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),Zg(),Jc(72,`p`),Tk(73,`O contrato é simples. O componente faz um `),Jc(74,`code`),Tk(75,`POST`),Zg(),Tk(76,` enviando:`),Zg(),Jc(77,`pre`)(78,`code`,7),Tk(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),Zg()(),Jc(80,`p`),Tk(81,`E o endpoint deve responder com:`),Zg(),Jc(82,`pre`)(83,`code`,7),Tk(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),Zg()(),Jc(85,`p`),Tk(86,`Onde `),Jc(87,`code`),Tk(88,`filter`),Zg(),Tk(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),Jc(90,`code`),Tk(91,`description`),Zg(),Tk(92,` \xE9 um
resumo leg\xEDvel e `),Jc(93,`code`),Tk(94,`confidence`),Zg(),Tk(95,` (`),Jc(96,`code`),Tk(97,`0.0`),Zg(),Tk(98,` a `),Jc(99,`code`),Tk(100,`1.0`),Zg(),Tk(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),Jc(102,`code`),Tk(103,`p-min-confidence`),Zg(),Tk(104,` para decidir entre os eventos `),Jc(105,`code`),Tk(106,`p-result`),Zg(),Tk(107,` e `),Jc(108,`code`),Tk(109,`p-low-confidence`),Zg(),Tk(110,`.`),Zg(),Jc(111,`blockquote`)(112,`p`)(113,`strong`),Tk(114,`Exemplo de implementação:`),Zg(),Tk(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),Zg(),Jc(116,`ul`)(117,`li`),Tk(118,`Endpoint público: `),Jc(119,`a`,8)(120,`code`),Tk(121,`/v1/ai/filter`),Zg()()(),Jc(122,`li`),Tk(123,`Código-fonte: `),Jc(124,`a`,9),Tk(125,`po-sample-api/src/ai/ai.service.ts`),Zg()()()(),Jc(126,`h4`),Tk(127,`Estados de comportamento`),Zg(),Jc(128,`ul`)(129,`li`)(130,`strong`),Tk(131,`Idle:`),Zg(),Tk(132,` aguardando a digitação da consulta.`),Zg(),Jc(133,`li`)(134,`strong`),Tk(135,`Loading:`),Zg(),Tk(136,` consulta em andamento (ícone de carregamento ativo).`),Zg(),Jc(137,`li`)(138,`strong`),Tk(139,`Aplicado:`),Zg(),Tk(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),Zg(),Jc(141,`li`)(142,`strong`),Tk(143,`Baixa confiança:`),Zg(),Tk(144,` quando `),Jc(145,`code`),Tk(146,`confidence`),Zg(),Tk(147,` for menor que `),Jc(148,`code`),Tk(149,`p-min-confidence`),Zg(),Tk(150,`, emite
`),Jc(151,`code`),Tk(152,`p-low-confidence`),Zg(),Tk(153,` e não aplica o filtro automaticamente.`),Zg(),Jc(154,`li`)(155,`strong`),Tk(156,`Erro:`),Zg(),Tk(157,` quando a chamada falha, emite `),Jc(158,`code`),Tk(159,`p-error`),Zg(),Tk(160,`.`),Zg()(),Jc(161,`h4`),Tk(162,`Tokens customizáveis`),Zg(),Jc(163,`p`),Tk(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(165,`blockquote`)(166,`p`),Tk(167,`Para maiores informações, acesse o guia `),Jc(168,`a`,10),Tk(169,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(170,`.`),Zg()(),Jc(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),Tk(175,`Propriedade`),Zg(),Jc(176,`th`),Tk(177,`Descrição`),Zg(),Jc(178,`th`),Tk(179,`Valor Padrão`),Zg()()(),Jc(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),Tk(184,`Default`),Zg()(),_u(185,`td`)(186,`td`),Zg(),Jc(187,`tr`)(188,`td`)(189,`code`),Tk(190,`--font-family`),Zg()(),Jc(191,`td`),Tk(192,`Família tipográfica do campo`),Zg(),Jc(193,`td`)(194,`code`),Tk(195,`var(--font-family-theme)`),Zg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--font-size`),Zg()(),Jc(200,`td`),Tk(201,`Tamanho da fonte do campo`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`var(--font-size)`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`code`),Tk(208,`--text-color`),Zg()(),Jc(209,`td`),Tk(210,`Cor do texto digitado`),Zg(),Jc(211,`td`)(212,`code`),Tk(213,`var(--color-neutral-dark-90)`),Zg()()(),Jc(214,`tr`)(215,`td`)(216,`code`),Tk(217,`--text-color-placeholder`),Zg()(),Jc(218,`td`),Tk(219,`Cor do texto do placeholder`),Zg(),Jc(220,`td`)(221,`code`),Tk(222,`var(--color-neutral-light-30)`),Zg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Tk(226,`--color`),Zg()(),Jc(227,`td`),Tk(228,`Cor da borda do campo`),Zg(),Jc(229,`td`)(230,`code`),Tk(231,`var(--color-neutral-dark-70)`),Zg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Tk(235,`--background`),Zg()(),Jc(236,`td`),Tk(237,`Cor de fundo do campo`),Zg(),Jc(238,`td`)(239,`code`),Tk(240,`var(--color-neutral-light-05)`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Tk(244,`--border-radius`),Zg()(),Jc(245,`td`),Tk(246,`Raio da borda do campo`),Zg(),Jc(247,`td`)(248,`code`),Tk(249,`var(--border-radius-md)`),Zg()()(),Jc(250,`tr`)(251,`td`)(252,`strong`),Tk(253,`Ícones e divisória`),Zg()(),_u(254,`td`)(255,`td`),Zg(),Jc(256,`tr`)(257,`td`)(258,`code`),Tk(259,`--color-icon-read`),Zg()(),Jc(260,`td`),Tk(261,`Cor do ícone de busca por IA`),Zg(),Jc(262,`td`)(263,`code`),Tk(264,`var(--color-neutral-dark-70)`),Zg()()(),Jc(265,`tr`)(266,`td`)(267,`code`),Tk(268,`--color-divider`),Zg()(),Jc(269,`td`),Tk(270,`Cor da divisória vertical entre o campo e o botão de busca`),Zg(),Jc(271,`td`)(272,`code`),Tk(273,`var(--color-neutral-mid-40)`),Zg()()(),Jc(274,`tr`)(275,`td`)(276,`code`),Tk(277,`--color-icon-processing`),Zg()(),Jc(278,`td`),Tk(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),Zg(),Jc(280,`td`)(281,`code`),Tk(282,`var(--color-action-default)`),Zg()()(),Jc(283,`tr`)(284,`td`)(285,`strong`),Tk(286,`Hover`),Zg()(),_u(287,`td`)(288,`td`),Zg(),Jc(289,`tr`)(290,`td`)(291,`code`),Tk(292,`--color-hover`),Zg()(),Jc(293,`td`),Tk(294,`Cor da borda no estado hover`),Zg(),Jc(295,`td`)(296,`code`),Tk(297,`var(--color-brand-01-dark)`),Zg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Tk(301,`--background-hover`),Zg()(),Jc(302,`td`),Tk(303,`Cor de fundo no estado hover`),Zg(),Jc(304,`td`)(305,`code`),Tk(306,`var(--color-brand-01-lightest)`),Zg()()(),Jc(307,`tr`)(308,`td`)(309,`strong`),Tk(310,`Focused`),Zg()(),_u(311,`td`)(312,`td`),Zg(),Jc(313,`tr`)(314,`td`)(315,`code`),Tk(316,`--color-focused`),Zg()(),Jc(317,`td`),Tk(318,`Cor da borda no estado de foco`),Zg(),Jc(319,`td`)(320,`code`),Tk(321,`var(--color-action-default)`),Zg()()(),Jc(322,`tr`)(323,`td`)(324,`code`),Tk(325,`--outline-color-focused`),Zg()(),Jc(326,`td`),Tk(327,`Cor do outline no estado de foco`),Zg(),Jc(328,`td`)(329,`code`),Tk(330,`var(--color-action-focus)`),Zg()()(),Jc(331,`tr`)(332,`td`)(333,`strong`),Tk(334,`Disabled`),Zg()(),_u(335,`td`)(336,`td`),Zg(),Jc(337,`tr`)(338,`td`)(339,`code`),Tk(340,`--color-disabled`),Zg()(),Jc(341,`td`),Tk(342,`Cor da borda no estado desabilitado`),Zg(),Jc(343,`td`)(344,`code`),Tk(345,`var(--color-neutral-light-30)`),Zg()()(),Jc(346,`tr`)(347,`td`)(348,`code`),Tk(349,`--background-disabled`),Zg()(),Jc(350,`td`),Tk(351,`Cor de fundo no estado desabilitado`),Zg(),Jc(352,`td`)(353,`code`),Tk(354,`var(--color-neutral-light-20)`),Zg()()()()()(),Jc(355,`div`,11)(356,`h4`,12),Tk(357,`Seletor`),Zg(),Jc(358,`pre`,13),Tk(359,`<po-search-ai
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
`),Zg()(),Jc(360,`h4`,14),Tk(361,`Propriedades`),Zg(),Jc(362,`table`,15)(363,`tr`,16)(364,`th`,17),Tk(365,`Nome`),Zg(),Jc(366,`th`,17),Tk(367,`Tipo`),Zg(),Jc(368,`th`,17),Tk(369,`Padrão`),Zg(),Jc(370,`th`,17),Tk(371,`Descrição`),Zg()(),Jc(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),Tk(376,` (p-clear)`),_u(377,`br`),Zg()()(),Jc(378,`td`,22)(379,`code`,23),Tk(380,`EventEmitter`),Zg()(),Jc(381,`td`,24),Tk(382,`-`),Zg(),Jc(383,`td`,25)(384,`em`)(385,`strong`),Tk(386,`(opcional)`),Zg()(),Jc(387,`p`),Tk(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),Zg()()(),Jc(389,`tr`,18)(390,`td`,19)(391,`div`,26)(392,`span`,27),Tk(393,` p-columns`),_u(394,`br`),Zg()()(),Jc(395,`td`,22)(396,`code`,28),Tk(397,`Array<PoSearchAiColumn>`),Zg()(),Jc(398,`td`,24)(399,`p`)(400,`code`),Tk(401,`[]`),Zg()()(),Jc(402,`td`,25)(403,`em`)(404,`strong`),Tk(405,`(opcional)`),Zg()(),Jc(406,`p`),Tk(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),Jc(408,`code`),Tk(409,`p-url`),Zg(),Tk(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),Zg()()(),Jc(411,`tr`,18)(412,`td`,19)(413,`div`,20)(414,`span`,21),Tk(415,` (p-error)`),_u(416,`br`),Zg()()(),Jc(417,`td`,22)(418,`code`,23),Tk(419,`EventEmitter`),Zg()(),Jc(420,`td`,24),Tk(421,`-`),Zg(),Jc(422,`td`,25)(423,`em`)(424,`strong`),Tk(425,`(opcional)`),Zg()(),Jc(426,`p`),Tk(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),Jc(428,`code`),Tk(429,`PoSearchAiError`),Zg(),Tk(430,`.`),Zg()()(),Jc(431,`tr`,18)(432,`td`,19)(433,`div`,26)(434,`span`,27),Tk(435,` p-literals`),_u(436,`br`),Zg()()(),Jc(437,`td`,22)(438,`code`,29),Tk(439,`PoSearchAiLiterals`),Zg()(),Jc(440,`td`,24),Tk(441,`-`),Zg(),Jc(442,`td`,25)(443,`em`)(444,`strong`),Tk(445,`(opcional)`),Zg()(),Jc(446,`p`),Tk(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Zg()()(),Jc(448,`tr`,18)(449,`td`,19)(450,`div`,20)(451,`span`,21),Tk(452,` (p-low-confidence)`),_u(453,`br`),Zg()()(),Jc(454,`td`,22)(455,`code`,23),Tk(456,`EventEmitter`),Zg()(),Jc(457,`td`,24),Tk(458,`-`),Zg(),Jc(459,`td`,25)(460,`em`)(461,`strong`),Tk(462,`(opcional)`),Zg()(),Jc(463,`p`),Tk(464,`Evento disparado quando a confiança da resposta da IA é menor que `),Jc(465,`code`),Tk(466,`p-min-confidence`),Zg(),Tk(467,`.
Emite um objeto `),Jc(468,`code`),Tk(469,`PoSearchAiResult`),Zg(),Tk(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),Zg()()(),Jc(471,`tr`,18)(472,`td`,19)(473,`div`,26)(474,`span`,27),Tk(475,` p-min-confidence`),_u(476,`br`),Zg()()(),Jc(477,`td`,22)(478,`code`,30),Tk(479,`number`),Zg()(),Jc(480,`td`,24)(481,`p`)(482,`code`),Tk(483,`0.5`),Zg()()(),Jc(484,`td`,25)(485,`em`)(486,`strong`),Tk(487,`(opcional)`),Zg()(),Jc(488,`p`),Tk(489,`Nível mínimo de confiança (`),Jc(490,`code`),Tk(491,`0.0`),Zg(),Tk(492,` a `),Jc(493,`code`),Tk(494,`1.0`),Zg(),Tk(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),Jc(496,`code`),Tk(497,`p-low-confidence`),Zg(),Tk(498,` \xE9
emitido em vez de `),Jc(499,`code`),Tk(500,`p-result`),Zg(),Tk(501,`.`),Zg()()(),Jc(502,`tr`,18)(503,`td`,19)(504,`div`,20)(505,`span`,21),Tk(506,` (p-result)`),_u(507,`br`),Zg()()(),Jc(508,`td`,22)(509,`code`,23),Tk(510,`EventEmitter`),Zg()(),Jc(511,`td`,24),Tk(512,`-`),Zg(),Jc(513,`td`,25)(514,`em`)(515,`strong`),Tk(516,`(opcional)`),Zg()(),Jc(517,`p`),Tk(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),Jc(519,`code`),Tk(520,`p-min-confidence`),Zg(),Tk(521,`. Emite um objeto `),Jc(522,`code`),Tk(523,`PoSearchAiResult`),Zg(),Tk(524,`.`),Zg(),Jc(525,`p`),Tk(526,`O campo `),Jc(527,`code`),Tk(528,`type`),Zg(),Tk(529,` do resultado indica como o consumidor deve interpretar a resposta:`),Zg(),Jc(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),Tk(535,`filter`),Zg()(),Jc(536,`em`),Tk(537,`(padrão)`),Zg(),Tk(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),Jc(539,`code`),Tk(540,`result.filter`),Zg(),Tk(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),Jc(542,`code`),Tk(543,`po-table`),Zg(),Tk(544,` via `),Jc(545,`code`),Tk(546,`p-filter`),Zg(),Tk(547,`.`),Zg()(),Jc(548,`li`)(549,`p`)(550,`strong`)(551,`code`),Tk(552,`chat`),Zg()(),Tk(553,`: a IA retornou uma resposta conversacional. Use `),Jc(554,`code`),Tk(555,`result.data`),Zg(),Tk(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),Zg()(),Jc(557,`li`)(558,`p`)(559,`strong`)(560,`code`),Tk(561,`custom`),Zg()(),Tk(562,`: a IA retornou um payload genérico definido pelo backend. Use `),Jc(563,`code`),Tk(564,`result.data`),Zg(),Tk(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),Zg()()()()(),Jc(566,`tr`,18)(567,`td`,19)(568,`div`,26)(569,`span`,27),Tk(570,` p-timeout`),_u(571,`br`),Zg()()(),Jc(572,`td`,22)(573,`code`,30),Tk(574,`number`),Zg()(),Jc(575,`td`,24)(576,`p`)(577,`code`),Tk(578,`10000`),Zg()()(),Jc(579,`td`,25)(580,`em`)(581,`strong`),Tk(582,`(opcional)`),Zg()(),Jc(583,`p`),Tk(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),Jc(585,`code`),Tk(586,`p-error`),Zg(),Tk(587,` com `),Jc(588,`code`),Tk(589,`statusCode 408`),Zg(),Tk(590,`.`),Zg()()(),Jc(591,`tr`,18)(592,`td`,19)(593,`div`,26)(594,`span`,27),Tk(595,` p-url`),_u(596,`br`),Zg()()(),Jc(597,`td`,22)(598,`code`,31),Tk(599,`string`),Zg()(),Jc(600,`td`,24),Tk(601,`-`),Zg(),Jc(602,`td`,25)(603,`em`)(604,`strong`),Tk(605,`(opcional)`),Zg()(),Jc(606,`p`),Tk(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),Jc(608,`code`),Tk(609,`{ query, columns }`),Zg(),Tk(610,` via `),Jc(611,`code`),Tk(612,`POST`),Zg(),Tk(613,` e deve retornar `),Jc(614,`code`),Tk(615,`{ filter, description, confidence }`),Zg(),Tk(616,`.`),Zg(),Jc(617,`blockquote`)(618,`p`),Tk(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),Jc(620,`strong`),Tk(621,`no backend`),Zg(),Tk(622,`, nunca no client-side.`),Zg()()()()(),Jc(623,`h3`,14),Tk(624,`Métodos`),Zg(),Jc(625,`table`,32)(626,`tr`,18)(627,`th`,33)(628,`div`,26)(629,`h4`)(630,`span`,27),Tk(631,` search `),Zg()()()()(),Jc(632,`tr`,25)(633,`td`,25)(634,`p`),Tk(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),Jc(636,`code`),Tk(637,`p-url`),Zg(),Tk(638,`.`),Zg(),Jc(639,`p`),Tk(640,`Caso a consulta esteja vazia ou `),Jc(641,`code`),Tk(642,`p-url`),Zg(),Tk(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),Jc(644,`code`),Tk(645,`p-result`),Zg(),Tk(646,` (ou `),Jc(647,`code`),Tk(648,`p-low-confidence`),Zg(),Tk(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),Jc(650,`code`),Tk(651,`p-error`),Zg(),Tk(652,`.`),Zg()()()(),_u(653,`br`),Jc(654,`table`,32)(655,`tr`,18)(656,`th`,33)(657,`div`,26)(658,`h4`)(659,`span`,27),Tk(660,` clearSearch `),Zg()()()()(),Jc(661,`tr`,25)(662,`td`,25)(663,`p`),Tk(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),Jc(665,`code`),Tk(666,`p-clear`),Zg(),Tk(667,`.`),Zg()()()(),_u(668,`br`),Jc(669,`table`,32)(670,`tr`,18)(671,`th`,33)(672,`div`,26)(673,`h4`)(674,`span`,27),Tk(675,` onSearchKeydown `),Zg()()()()(),Jc(676,`tr`,25)(677,`td`,25)(678,`p`),Tk(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),Jc(680,`code`),Tk(681,`Enter`),Zg(),Tk(682,`.`),Zg()()()(),Jc(683,`h5`)(684,`b`),Tk(685,`Parâmetros`),Zg()(),Jc(686,`table`,15)(687,`tr`,16)(688,`th`,17),Tk(689,`Nome`),Zg(),Jc(690,`th`,17),Tk(691,`Tipo`),Zg(),Jc(692,`th`,17),Tk(693,`Descrição`),Zg()(),Jc(694,`tr`,18)(695,`td`,19),Tk(696,` event`),Zg(),_u(697,`td`,22),Jc(698,`td`,25)(699,`p`),Tk(700,`Evento de teclado.`),Zg()()()(),_u(701,`br`),Jc(702,`h3`),Tk(703,`Interfaces`),Zg(),Jc(704,`h4`,34)(705,`code`,5),Tk(706,`PoSearchAiColumn`),Zg()(),Jc(707,`div`,2)(708,`p`),Tk(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),Zg(),Jc(710,`p`),Tk(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),Zg()(),Jc(712,`h4`,14),Tk(713,`Propriedades`),Zg(),Jc(714,`table`,15)(715,`tr`,16)(716,`th`,17),Tk(717,`Nome`),Zg(),Jc(718,`th`,17),Tk(719,`Tipo`),Zg(),Jc(720,`th`,17),Tk(721,`Descrição`),Zg()(),Jc(722,`tr`,18)(723,`td`,19)(724,`div`,26)(725,`span`,27),Tk(726,` label`),_u(727,`br`),Zg()()(),Jc(728,`td`,22)(729,`code`,31),Tk(730,`string`),Zg()(),Jc(731,`td`,25)(732,`p`),Tk(733,`Rótulo legível exibido ao usuário (ex: `),Jc(734,`code`),Tk(735,`Nome`),Zg(),Tk(736,`, `),Jc(737,`code`),Tk(738,`Idade`),Zg(),Tk(739,`, `),Jc(740,`code`),Tk(741,`Cidade`),Zg(),Tk(742,`).`),Zg()()(),Jc(743,`tr`,18)(744,`td`,19)(745,`div`,26)(746,`span`,27),Tk(747,` property`),_u(748,`br`),Zg()()(),Jc(749,`td`,22)(750,`code`,31),Tk(751,`string`),Zg()(),Jc(752,`td`,25)(753,`p`),Tk(754,`Nome da propriedade do campo (ex: `),Jc(755,`code`),Tk(756,`name`),Zg(),Tk(757,`, `),Jc(758,`code`),Tk(759,`age`),Zg(),Tk(760,`, `),Jc(761,`code`),Tk(762,`city`),Zg(),Tk(763,`).`),Zg()()(),Jc(764,`tr`,18)(765,`td`,19)(766,`div`,26)(767,`span`,27),Tk(768,` type`),_u(769,`br`),Zg()()(),Jc(770,`td`,22)(771,`code`,31),Tk(772,`string`),Zg()(),Jc(773,`td`,25)(774,`em`)(775,`strong`),Tk(776,`(opcional)`),Zg()(),Jc(777,`p`),Tk(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),Zg(),Jc(779,`p`),Tk(780,`Valores comuns: `),Jc(781,`code`),Tk(782,`string`),Zg(),Tk(783,`, `),Jc(784,`code`),Tk(785,`number`),Zg(),Tk(786,`, `),Jc(787,`code`),Tk(788,`date`),Zg(),Tk(789,`, `),Jc(790,`code`),Tk(791,`currency`),Zg(),Tk(792,`, `),Jc(793,`code`),Tk(794,`boolean`),Zg(),Tk(795,`.`),Zg()()()(),Jc(796,`h4`,34)(797,`code`,5),Tk(798,`PoSearchAiLiterals`),Zg()(),Jc(799,`div`,2)(800,`p`),Tk(801,`Interface para definição das literais usadas no `),Jc(802,`code`),Tk(803,`po-search-ai`),Zg(),Tk(804,`.`),Zg()(),Jc(805,`h4`,14),Tk(806,`Propriedades`),Zg(),Jc(807,`table`,15)(808,`tr`,16)(809,`th`,17),Tk(810,`Nome`),Zg(),Jc(811,`th`,17),Tk(812,`Tipo`),Zg(),Jc(813,`th`,17),Tk(814,`Descrição`),Zg()(),Jc(815,`tr`,18)(816,`td`,19)(817,`div`,26)(818,`span`,27),Tk(819,` clean`),_u(820,`br`),Zg()()(),Jc(821,`td`,22)(822,`code`,31),Tk(823,`string`),Zg()(),Jc(824,`td`,25)(825,`em`)(826,`strong`),Tk(827,`(opcional)`),Zg()(),Jc(828,`p`),Tk(829,`Texto de acessibilidade do botão de limpar o campo.`),Zg()()(),Jc(830,`tr`,18)(831,`td`,19)(832,`div`,26)(833,`span`,27),Tk(834,` errorMessage`),_u(835,`br`),Zg()()(),Jc(836,`td`,22)(837,`code`,31),Tk(838,`string`),Zg()(),Jc(839,`td`,25)(840,`em`)(841,`strong`),Tk(842,`(opcional)`),Zg()(),Jc(843,`p`),Tk(844,`Mensagem exibida quando a busca com IA falha.`),Zg()()()(),Jc(845,`h4`,34)(846,`code`,5),Tk(847,`PoSearchAiRequest`),Zg()(),Jc(848,`div`,2)(849,`p`),Tk(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),Jc(851,`code`),Tk(852,`p-url`),Zg(),Tk(853,`.`),Zg(),Jc(854,`p`),Tk(855,`O componente é `),Jc(856,`strong`),Tk(857,`agnóstico ao provedor de IA`),Zg(),Tk(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),Jc(859,`code`),Tk(860,`PoSearchAiResponse`),Zg(),Tk(861,`.`),Zg()(),Jc(862,`h4`,14),Tk(863,`Propriedades`),Zg(),Jc(864,`table`,15)(865,`tr`,16)(866,`th`,17),Tk(867,`Nome`),Zg(),Jc(868,`th`,17),Tk(869,`Tipo`),Zg(),Jc(870,`th`,17),Tk(871,`Descrição`),Zg()(),Jc(872,`tr`,18)(873,`td`,19)(874,`div`,26)(875,`span`,27),Tk(876,` columns`),_u(877,`br`),Zg()()(),Jc(878,`td`,22)(879,`code`,28),Tk(880,`Array<PoSearchAiColumn>`),Zg()(),Jc(881,`td`,25)(882,`p`),Tk(883,`Metadados dos campos disponíveis para a busca (ver `),Jc(884,`code`),Tk(885,`PoSearchAiColumn`),Zg(),Tk(886,`).`),Zg()()(),Jc(887,`tr`,18)(888,`td`,19)(889,`div`,26)(890,`span`,27),Tk(891,` query`),_u(892,`br`),Zg()()(),Jc(893,`td`,22)(894,`code`,31),Tk(895,`string`),Zg()(),Jc(896,`td`,25)(897,`p`),Tk(898,`Texto em linguagem natural digitado pelo usuário.`),Zg()()()(),Jc(899,`h4`,34)(900,`code`,5),Tk(901,`PoSearchAiResponse`),Zg()(),Jc(902,`div`,2)(903,`p`),Tk(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),Jc(905,`code`),Tk(906,`p-url`),Zg(),Tk(907,`.`),Zg()(),Jc(908,`h4`,14),Tk(909,`Propriedades`),Zg(),Jc(910,`table`,15)(911,`tr`,16)(912,`th`,17),Tk(913,`Nome`),Zg(),Jc(914,`th`,17),Tk(915,`Tipo`),Zg(),Jc(916,`th`,17),Tk(917,`Descrição`),Zg()(),Jc(918,`tr`,18)(919,`td`,19)(920,`div`,26)(921,`span`,27),Tk(922,` confidence`),_u(923,`br`),Zg()()(),Jc(924,`td`,22)(925,`code`,30),Tk(926,`number`),Zg()(),Jc(927,`td`,25)(928,`em`)(929,`strong`),Tk(930,`(opcional)`),Zg()(),Jc(931,`p`),Tk(932,`Nível de confiança da interpretação da IA, em um intervalo de `),Jc(933,`code`),Tk(934,`0.0`),Zg(),Tk(935,` a `),Jc(936,`code`),Tk(937,`1.0`),Zg(),Tk(938,`.`),Zg(),Jc(939,`p`),Tk(940,`Utilizado em conjunto com `),Jc(941,`code`),Tk(942,`p-min-confidence`),Zg(),Tk(943,` para decidir se o resultado é confiável.`),Zg()()(),Jc(944,`tr`,18)(945,`td`,19)(946,`div`,26)(947,`span`,27),Tk(948,` data`),_u(949,`br`),Zg()()(),Jc(950,`td`,22)(951,`code`,35),Tk(952,`Record<string, any>`),Zg()(),Jc(953,`td`,25)(954,`em`)(955,`strong`),Tk(956,`(opcional)`),Zg()(),Jc(957,`p`),Tk(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),Zg(),Jc(959,`p`),Tk(960,`Utilizado quando `),Jc(961,`code`),Tk(962,`type`),Zg(),Tk(963,` é `),Jc(964,`code`),Tk(965,`'chat'`),Zg(),Tk(966,` ou `),Jc(967,`code`),Tk(968,`'custom'`),Zg(),Tk(969,`.`),Zg()()(),Jc(970,`tr`,18)(971,`td`,19)(972,`div`,26)(973,`span`,27),Tk(974,` description`),_u(975,`br`),Zg()()(),Jc(976,`td`,22)(977,`code`,31),Tk(978,`string`),Zg()(),Jc(979,`td`,25)(980,`em`)(981,`strong`),Tk(982,`(opcional)`),Zg()(),Jc(983,`p`),Tk(984,`Descrição legível, em linguagem natural, da resposta.`),Zg()()(),Jc(985,`tr`,18)(986,`td`,19)(987,`div`,26)(988,`span`,27),Tk(989,` filter`),_u(990,`br`),Zg()()(),Jc(991,`td`,22)(992,`code`,31),Tk(993,`string`),Zg()(),Jc(994,`td`,25)(995,`em`)(996,`strong`),Tk(997,`(opcional)`),Zg()(),Jc(998,`p`),Tk(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),Jc(1e3,`code`),Tk(1001,`age gt 30 and city eq 'São Paulo'`),Zg(),Tk(1002,`).`),Zg(),Jc(1003,`p`),Tk(1004,`Utilizado quando `),Jc(1005,`code`),Tk(1006,`type`),Zg(),Tk(1007,` é `),Jc(1008,`code`),Tk(1009,`'filter'`),Zg(),Tk(1010,`.`),Zg()()(),Jc(1011,`tr`,18)(1012,`td`,19)(1013,`div`,26)(1014,`span`,27),Tk(1015,` type`),_u(1016,`br`),Zg()()(),Jc(1017,`td`,22)(1018,`code`,36),Tk(1019,`PoSearchAiResponseType`),Zg()(),Jc(1020,`td`,25)(1021,`em`)(1022,`strong`),Tk(1023,`(opcional)`),Zg()(),Jc(1024,`p`),Tk(1025,`Tipo da resposta retornada pela IA.`),Zg(),Jc(1026,`p`),Tk(1027,`Quando omitido, o componente infere `),Jc(1028,`code`),Tk(1029,`'filter'`),Zg(),Tk(1030,` se `),Jc(1031,`code`),Tk(1032,`filter`),Zg(),Tk(1033,` estiver presente,
caso contr\xE1rio assume `),Jc(1034,`code`),Tk(1035,`'custom'`),Zg(),Tk(1036,`.`),Zg()()()(),Jc(1037,`h4`,34)(1038,`code`,5),Tk(1039,`PoSearchAiResult`),Zg()(),Jc(1040,`div`,2)(1041,`p`),Tk(1042,`Interface que define o objeto emitido pelos eventos `),Jc(1043,`code`),Tk(1044,`p-result`),Zg(),Tk(1045,` e `),Jc(1046,`code`),Tk(1047,`p-low-confidence`),Zg(),Tk(1048,`.`),Zg()(),Jc(1049,`h4`,14),Tk(1050,`Propriedades`),Zg(),Jc(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),Tk(1054,`Nome`),Zg(),Jc(1055,`th`,17),Tk(1056,`Tipo`),Zg(),Jc(1057,`th`,17),Tk(1058,`Descrição`),Zg()(),Jc(1059,`tr`,18)(1060,`td`,19)(1061,`div`,26)(1062,`span`,27),Tk(1063,` confidence`),_u(1064,`br`),Zg()()(),Jc(1065,`td`,22)(1066,`code`,30),Tk(1067,`number`),Zg()(),Jc(1068,`td`,25)(1069,`em`)(1070,`strong`),Tk(1071,`(opcional)`),Zg()(),Jc(1072,`p`),Tk(1073,`Nível de confiança da interpretação (`),Jc(1074,`code`),Tk(1075,`0.0`),Zg(),Tk(1076,` a `),Jc(1077,`code`),Tk(1078,`1.0`),Zg(),Tk(1079,`).`),Zg()()(),Jc(1080,`tr`,18)(1081,`td`,19)(1082,`div`,26)(1083,`span`,27),Tk(1084,` data`),_u(1085,`br`),Zg()()(),Jc(1086,`td`,22)(1087,`code`,35),Tk(1088,`Record<string, any>`),Zg()(),Jc(1089,`td`,25)(1090,`em`)(1091,`strong`),Tk(1092,`(opcional)`),Zg()(),Jc(1093,`p`),Tk(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),Zg()()(),Jc(1095,`tr`,18)(1096,`td`,19)(1097,`div`,26)(1098,`span`,27),Tk(1099,` description`),_u(1100,`br`),Zg()()(),Jc(1101,`td`,22)(1102,`code`,31),Tk(1103,`string`),Zg()(),Jc(1104,`td`,25)(1105,`em`)(1106,`strong`),Tk(1107,`(opcional)`),Zg()(),Jc(1108,`p`),Tk(1109,`Descrição legível da resposta.`),Zg()()(),Jc(1110,`tr`,18)(1111,`td`,19)(1112,`div`,26)(1113,`span`,27),Tk(1114,` filter`),_u(1115,`br`),Zg()()(),Jc(1116,`td`,22)(1117,`code`,31),Tk(1118,`string`),Zg()(),Jc(1119,`td`,25)(1120,`em`)(1121,`strong`),Tk(1122,`(opcional)`),Zg()(),Jc(1123,`p`),Tk(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),Jc(1125,`code`),Tk(1126,`type`),Zg(),Tk(1127,` é `),Jc(1128,`code`),Tk(1129,`'filter'`),Zg(),Tk(1130,`.`),Zg()()(),Jc(1131,`tr`,18)(1132,`td`,19)(1133,`div`,26)(1134,`span`,27),Tk(1135,` query`),_u(1136,`br`),Zg()()(),Jc(1137,`td`,22)(1138,`code`,31),Tk(1139,`string`),Zg()(),Jc(1140,`td`,25)(1141,`p`),Tk(1142,`Texto original digitado pelo usuário.`),Zg()()(),Jc(1143,`tr`,18)(1144,`td`,19)(1145,`div`,26)(1146,`span`,27),Tk(1147,` type`),_u(1148,`br`),Zg()()(),Jc(1149,`td`,22)(1150,`code`,36),Tk(1151,`PoSearchAiResponseType`),Zg()(),Jc(1152,`td`,25)(1153,`p`),Tk(1154,`Tipo da resposta retornada pela IA.`),Zg()()()(),Jc(1155,`h4`,34)(1156,`code`,5),Tk(1157,`PoSearchAiError`),Zg()(),Jc(1158,`div`,2)(1159,`p`),Tk(1160,`Interface que define o objeto emitido pelo evento `),Jc(1161,`code`),Tk(1162,`p-error`),Zg(),Tk(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),Zg()(),Jc(1164,`h4`,14),Tk(1165,`Propriedades`),Zg(),Jc(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),Tk(1169,`Nome`),Zg(),Jc(1170,`th`,17),Tk(1171,`Tipo`),Zg(),Jc(1172,`th`,17),Tk(1173,`Descrição`),Zg()(),Jc(1174,`tr`,18)(1175,`td`,19)(1176,`div`,26)(1177,`span`,27),Tk(1178,` message`),_u(1179,`br`),Zg()()(),Jc(1180,`td`,22)(1181,`code`,31),Tk(1182,`string`),Zg()(),Jc(1183,`td`,25)(1184,`p`),Tk(1185,`Mensagem de erro.`),Zg()()(),Jc(1186,`tr`,18)(1187,`td`,19)(1188,`div`,26)(1189,`span`,27),Tk(1190,` query`),_u(1191,`br`),Zg()()(),Jc(1192,`td`,22)(1193,`code`,31),Tk(1194,`string`),Zg()(),Jc(1195,`td`,25)(1196,`p`),Tk(1197,`Texto original digitado pelo usuário.`),Zg()()(),Jc(1198,`tr`,18)(1199,`td`,19)(1200,`div`,26)(1201,`span`,27),Tk(1202,` statusCode`),_u(1203,`br`),Zg()()(),Jc(1204,`td`,22)(1205,`code`,30),Tk(1206,`number`),Zg()(),Jc(1207,`td`,25)(1208,`p`),Tk(1209,`Código HTTP do erro (ex: `),Jc(1210,`code`),Tk(1211,`500`),Zg(),Tk(1212,`, `),Jc(1213,`code`),Tk(1214,`408`),Zg(),Tk(1215,` para timeout).`),Zg()()()(),Jc(1216,`h3`),Tk(1217,`Enums`),Zg(),Jc(1218,`h4`,4)(1219,`code`,5),Tk(1220,`PoSearchAiResponseType`),Zg()(),Jc(1221,`div`,2)(1222,`p`),Tk(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),Zg()(),Jc(1224,`h4`,14),Tk(1225,`Propriedades`),Zg(),Jc(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),Tk(1229,`Nome`),Zg(),Jc(1230,`th`,17),Tk(1231,`Descrição`),Zg()(),Jc(1232,`tr`,18)(1233,`td`,19)(1234,`div`,26)(1235,`span`,27),Tk(1236,` filter`),_u(1237,`br`),Zg()()(),Jc(1238,`td`,25)(1239,`p`),Tk(1240,`Resposta contendo um filtro estruturado (ex: OData).`),Zg()()(),Jc(1241,`tr`,18)(1242,`td`,19)(1243,`div`,26)(1244,`span`,27),Tk(1245,` chat`),_u(1246,`br`),Zg()()(),Jc(1247,`td`,25)(1248,`p`),Tk(1249,`Resposta conversacional em linguagem natural.`),Zg()()(),Jc(1250,`tr`,18)(1251,`td`,19)(1252,`div`,26)(1253,`span`,27),Tk(1254,` custom`),_u(1255,`br`),Zg()()(),Jc(1256,`td`,25)(1257,`p`),Tk(1258,`Payload genérico definido pelo consumidor.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ge(o,O){if(o&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-search-ai-basic-view`)(2,`sample-po-search-ai-labs-view`)(3,`sample-po-search-ai-result-view`)(4,`sample-po-search-ai-filter-view`),Zg()}if(o&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var Ue=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ge,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-search-ai-doc`),Zg()()()),l&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,fe,Ce,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Ue),WV]})}return o})();var Ct=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Te]})}return o})();export{Ct as DocPoSearchAiModule};
import{A as Hoe,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Lt as aae,Mn as uoe,Mr as I1,Na as r0,Pa as rb,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Tt as ZH,Vi as bx,Wa as vo,Xa as wx,Xt as ere,Ya as wg,Za as xF,aa as iu,ai as Sn,b as Fu,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,yr as Ex,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var xe=(()=>{class o{columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`searchAi`,`p-label`,`PO Search A.I.`]],template:function(l,i){l&1&&nu(0,`po-search-ai`,0)},dependencies:[ZH],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO AI Search Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-search-ai name="searchAi" p-label="PO Search A.I."> </po-search-ai>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-search-ai-basic/sample-po-search-ai-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-search-ai-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,De,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,xe],encapsulation:2,changeDetection:1})}return o})();function qe(o,O){if(o&1&&(jc(0,`po-container`,4)(1,`p`)(2,`strong`),lO(3,`Query:`),wg(),lO(4),wg(),jc(5,`p`)(6,`strong`),lO(7,`Filtro:`),wg(),lO(8),wg(),jc(9,`p`)(10,`strong`),lO(11,`Descrição:`),wg(),lO(12),wg(),jc(13,`p`)(14,`strong`),lO(15,`Confiança:`),wg(),lO(16),wg()()),o&2){let a=Fx();rg(4),Ag(` `,a.result.query),rg(4),Ag(` `,a.result.filter),rg(4),Ag(` `,a.result.description),rg(4),Ag(` `,a.result.confidence)}}var be=(()=>{class o{compactLabel;errorPattern;event;result;help;helperText;label;labelTextWrap;loading;minConfidence;noAutocomplete;placeholder;properties;size;timeout;url;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`compactLabel`,label:`Compact Label`},{value:`disabled`,label:`Disabled`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(a){this.event=a}onResult(a){this.result=a,this.event=`p-result`}onClear(){this.result=void 0,this.event=`p-clear`}restore(){this.errorPattern=void 0,this.event=void 0,this.result=void 0,this.help=void 0,this.helperText=void 0,this.label=`Busca inteligente`,this.minConfidence=.5,this.placeholder=`Descreva o que procura em linguagem natural`,this.properties=[`clean`],this.size=`medium`,this.timeout=1e4,this.url=`https://po-sample-api.onrender.com/v1/ai/filter`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-labs`]],standalone:!1,decls:20,vars:35,consts:[[`f`,`ngForm`],[`name`,`searchAi`,3,`p-blur`,`p-clear`,`p-enter`,`p-error`,`p-keydown`,`p-low-confidence`,`p-result`,`p-columns`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-pattern`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-min-confidence`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-show-required`,`p-size`,`p-timeout`,`p-url`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-no-padding`,``,1,`po-mt-2`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`timeout`,`p-clean`,``,`p-label`,`Timeout (ms)`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minConfidence`,`p-clean`,``,`p-label`,`Min Confidence`,`p-help`,`Valor entre 0 e 1`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-decimals-length`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Ax();jc(0,`po-search-ai`,1),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-clear`,function(){return i.onClear()})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-low-confidence`,function(){return i.changeEvent(`p-low-confidence`)})(`p-result`,function(m){return i.onResult(m)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),wg(),vx(4,qe,17,4,`po-container`,4),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.label,m)||(i.label=m),__(m)}),wg(),jc(9,`po-input`,6),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.help,m)||(i.help=m),__(m)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.helperText,m)||(i.helperText=m),__(m)}),wg(),jc(11,`po-input`,8),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.placeholder,m)||(i.placeholder=m),__(m)}),wg(),jc(12,`po-input`,9),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.errorPattern,m)||(i.errorPattern=m),__(m)}),wg(),jc(13,`po-input`,10),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.url,m)||(i.url=m),__(m)}),wg(),jc(14,`po-number`,11),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.timeout,m)||(i.timeout=m),__(m)}),wg(),jc(15,`po-decimal`,12),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.minConfidence,m)||(i.minConfidence=m),__(m)}),wg(),jc(16,`po-checkbox-group`,13),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.properties,m)||(i.properties=m),__(m)}),wg(),jc(17,`po-radio-group`,14),r0(),ab(`ngModelChange`,function(m){return v_(d),uO(i.size,m)||(i.size=m),__(m)}),wg(),jc(18,`div`,2)(19,`po-button`,15),mt(`p-click`,function(){return v_(d),Bx(7).reset(),__(i.restore())}),wg()()()}l&2&&(UE(`p-columns`,i.columns)(`p-clean`,i.properties?.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties?.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties?.includes(`loading`))(`p-min-confidence`,i.minConfidence)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties?.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties?.includes(`readonly`))(`p-required`,i.properties?.includes(`required`))(`p-show-required`,i.properties?.includes(`showRequired`))(`p-size`,i.size)(`p-timeout`,i.timeout)(`p-url`,i.url),rg(3),UE(`p-value`,i.event),rg(),Dx(i.result?4:-1),rg(4),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.helperText),o0(),rg(),sb(`ngModel`,i.placeholder),o0(),rg(),sb(`ngModel`,i.errorPattern),o0(),rg(),sb(`ngModel`,i.url),o0(),rg(),sb(`ngModel`,i.timeout),o0(),rg(),sb(`ngModel`,i.minConfidence),UE(`p-decimals-length`,2),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Ac,Lf,w4,uoe,U4,ZH,Hoe,Gte,Yoe],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO AI Search Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-search-ai
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-search-ai-labs/sample-po-search-ai-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-search-ai-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,be],encapsulation:2,changeDetection:1})}return o})();function Re(o,O){if(o&1&&(jc(0,`po-container`,1)(1,`p`)(2,`strong`),lO(3,`Query:`),wg(),lO(4),wg(),jc(5,`p`)(6,`strong`),lO(7,`Filtro:`),wg(),lO(8),wg(),jc(9,`p`)(10,`strong`),lO(11,`Descrição:`),wg(),lO(12),wg(),jc(13,`p`)(14,`strong`),lO(15,`Confiança:`),wg(),lO(16),wg()()),o&2){let a=Fx();rg(4),Ag(` `,a.result.query),rg(4),Ag(` `,a.result.filter),rg(4),Ag(` `,a.result.description),rg(4),Ag(` `,a.result.confidence)}}var Ce=(()=>{class o{result;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`}];onResult(a){this.result=a}onClear(){this.result=void 0}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-result`]],standalone:!1,decls:2,vars:2,consts:[[`name`,`searchAi`,`p-label`,`Busca inteligente`,`p-help`,`Descreva o que procura em linguagem natural e pressione Enter`,`p-placeholder`,`Ex: clientes de SP com idade acima de 30`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-clear`,`p-columns`],[`p-no-padding`,``,1,`po-mt-2`]],template:function(l,i){l&1&&(jc(0,`po-search-ai`,0),mt(`p-result`,function(s){return i.onResult(s)})(`p-clear`,function(){return i.onClear()}),wg(),vx(1,Re,17,4,`po-container`,1)),l&2&&(UE(`p-columns`,i.columns),rg(),Dx(i.result?1:-1))},dependencies:[Ac,ZH],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-result-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO AI Search - Result`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-search-ai-result/sample-po-search-ai-result.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-search-ai
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-search-ai-result/sample-po-search-ai-result.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-search-ai-result`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return o})();function Ne(o,O){if(o&1){let a=Ax();jc(0,`po-filter-chip`,10),mt(`p-selected-change`,function(i){let d=v_(a).$implicit,s=Fx();return __(s.onSuggestionChange(d,i))}),wg()}if(o&2){let a=O.$implicit,l=Fx();UE(`p-label`,a)(`p-selected`,l.selectedSuggestion===a)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==a)}}function ze(o,O){if(o&1&&(jc(0,`po-container`,9)(1,`p`,11),lO(2,`Filtro OData gerado`),wg(),jc(3,`p`)(4,`strong`),lO(5,`Consulta:`),wg(),lO(6),wg(),jc(7,`p`)(8,`strong`),lO(9,`Descrição:`),wg(),lO(10),wg(),jc(11,`p`)(12,`strong`),lO(13,`Confiança:`),wg(),lO(14),wg(),jc(15,`pre`,12),lO(16),wg()()),o&2){let a=Fx();rg(6),Ag(` `,a.query),rg(4),Ag(` `,a.description),rg(4),Ag(` `,a.confidence),rg(2),rb(a.filter)}}var ye=(()=>{class o{poNotification;searchAi;confidence;description;filter;query;selectedSuggestion;suggestionsLocked=!1;SUGGESTION_LOCK_TIME=3e3;lockTimeout;columns=[{property:`name`,label:`Nome`,type:`string`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`,type:`string`},{property:`department`,label:`Departamento`,type:`string`},{property:`salary`,label:`Salário`,type:`number`}];examples=[`funcionários de São Paulo com salário acima de 10000`,`departamento Engenharia`,`com menos de 30 anos`,`salário entre 8000 e 12000`,`salário acima de 15000`,`funcionários de Curitiba`,`de São Paulo com salário abaixo de 15000`,`departamento Design`];constructor(a){this.poNotification=a}applySuggestion(a){this.searchAi&&(this.searchAi.writeValueModel(a),this.searchAi.search())}onSuggestionChange(a,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=a,this.applySuggestion(a),this.lockSuggestions())}onResult(a){this.query=a.query,this.filter=a.filter,this.description=a.description,this.confidence=a.confidence}onLowConfidence(a){this.poNotification.warning(`N\xE3o tenho certeza do que voc\xEA quis dizer com "${a.query}". Tente reformular a busca.`)}onError(a){this.poNotification.error(`Erro ao consultar a IA: ${a.message}`)}onClear(){this.confidence=void 0,this.description=void 0,this.filter=void 0,this.query=void 0,this.selectedSuggestion=void 0}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||o)(b(Fu))};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-filter`]],viewQuery:function(l,i){if(l&1&&iu(ZH,5),l&2){let d;yo(d=vo())&&(i.searchAi=d.first)}},standalone:!1,decls:26,vars:2,consts:[[`p-no-border`,``,1,`po-mb-2`],[1,`po-font-text-large-bold`,`po-mb-1`],[1,`po-font-text`,2,`color`,`var(--color-neutral-dark-70)`],[1,`po-font-text`,`po-mt-1`,2,`color`,`var(--color-neutral-dark-70)`],[`href`,`https://po-ui.io/documentation/po-table`,`target`,`_blank`],[`name`,`searchAi`,`p-label`,`Gerar filtro com IA`,`p-help`,`Descreva o que procura e pressione Enter para gerar um filtro OData`,`p-placeholder`,`Ex: funcionários de São Paulo com salário acima de 10000`,`p-url`,`https://po-sample-api.onrender.com/v1/ai/filter`,`p-clean`,``,3,`p-result`,`p-low-confidence`,`p-error`,`p-clear`,`p-columns`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[`p-no-padding`,``,1,`po-mt-2`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[1,`po-font-text-large-bold`],[1,`po-font-text`,2,`background`,`var(--color-neutral-light-10)`,`padding`,`8px`,`border-radius`,`4px`]],template:function(l,i){l&1&&(jc(0,`po-container`,0)(1,`p`,1),lO(2,`Gere um filtro com IA`),wg(),jc(3,`p`,2),lO(4,` Este exemplo usa o `),jc(5,`code`),lO(6,`po-search-ai`),wg(),lO(7,` de forma isolada para transformar uma frase em linguagem natural em um filtro OData reutilizável, que você pode aplicar em qualquer fonte de dados. `),wg(),jc(8,`p`,3),lO(9,` Quer aplicar o filtro automaticamente em uma tabela? O `),jc(10,`a`,4),lO(11,`po-table`),wg(),lO(12,` já integra o `),jc(13,`code`),lO(14,`po-search-ai`),wg(),lO(15,` de forma inteligente através da propriedade `),jc(16,`code`),lO(17,`p-search-ai-field`),wg(),lO(18,`, experimente também! `),wg()(),jc(19,`po-search-ai`,5),mt(`p-result`,function(s){return i.onResult(s)})(`p-low-confidence`,function(s){return i.onLowConfidence(s)})(`p-error`,function(s){return i.onError(s)})(`p-clear`,function(){return i.onClear()}),wg(),jc(20,`p`,6),lO(21,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),wg(),jc(22,`div`,7),bx(23,Ne,1,3,`po-filter-chip`,8,Ex),wg(),vx(25,ze,17,4,`po-container`,9)),l&2&&(rg(19),UE(`p-columns`,i.columns),rg(4),wx(i.examples),rg(2),Dx(i.filter?25:-1))},dependencies:[Ac,ZH,aae],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-filter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO AI Search - Filter`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container class="po-mb-2" p-no-border>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-search-ai-filter/sample-po-search-ai-filter.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-search-ai-filter`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,We,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ye],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-search-ai-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table`],[1,`language-json`],[`href`,`https://po-sample-api.onrender.com/api#/ai`],[`href`,`https://github.com/po-ui/po-sample-api/blob/main/src/ai/ai.service.ts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Record<string,`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiResponseType`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoSearchAiComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`O `),jc(24,`code`),lO(25,`po-search-ai`),wg(),lO(26,` é um componente de `),jc(27,`strong`),lO(28,`busca em linguagem natural`),wg(),lO(29,` baseado em input.
Ele permite que o usu\xE1rio digite uma consulta em texto livre (por exemplo,
`),jc(30,`em`),lO(31,`"clientes de SP com saldo acima de R$ 500"`),wg(),lO(32,`) e a converte, atrav\xE9s de um provedor de IA,
em um filtro estruturado (normalmente OData) que pode ser aplicado por outro componente,
como o `),jc(33,`a`,6)(34,`code`),lO(35,`po-table`),wg()(),lO(36,`.`),wg(),jc(37,`p`),lO(38,`O componente é `),jc(39,`strong`),lO(40,`agnóstico ao provedor de IA`),wg(),lO(41,`. Toda a comunica\xE7\xE3o ocorre atrav\xE9s do
endpoint informado em `),jc(42,`code`),lO(43,`p-url`),wg(),lO(44,`, que recebe `),jc(45,`code`),lO(46,`{ query, columns }`),wg(),lO(47,` e deve retornar
`),jc(48,`code`),lO(49,`{ filter, description, confidence }`),wg(),lO(50,`. Isso garante que nenhuma chave de IA seja
exposta no client-side \u2014 a integra\xE7\xE3o com a LLM \xE9 responsabilidade do backend (proxy).`),wg(),jc(51,`p`),lO(52,`Por herdar de `),jc(53,`code`),lO(54,`po-input`),wg(),lO(55,`, o componente suporta as propriedades comuns de formul\xE1rio
(label, help, helper, required, disabled, readonly, size, clean, loading, etc.) e
integra-se a formul\xE1rios `),jc(56,`code`),lO(57,`template-driven`),wg(),lO(58,` e `),jc(59,`code`),lO(60,`reactive`),wg(),lO(61,`.`),wg(),jc(62,`h4`),lO(63,`Endpoint de IA (backend)`),wg(),jc(64,`p`),lO(65,`O componente `),jc(66,`strong`),lO(67,`não conversa diretamente com a LLM`),wg(),lO(68,`. Voc\xEA deve disponibilizar um endpoint
pr\xF3prio (proxy) e inform\xE1-lo em `),jc(69,`code`),lO(70,`p-url`),wg(),lO(71,`.
\xC9 nesse backend que devem ficar a chave de acesso da IA e as regras usadas para montar
o prompt. Essas informa\xE7\xF5es nunca devem ficar expostas no client-side`),wg(),jc(72,`p`),lO(73,`O contrato é simples. O componente faz um `),jc(74,`code`),lO(75,`POST`),wg(),lO(76,` enviando:`),wg(),jc(77,`pre`)(78,`code`,7),lO(79,`{
  "query": "funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "columns": [
    { "property": "name", "label": "Nome", "type": "string" },
    { "property": "city", "label": "Cidade", "type": "string" },
    { "property": "salary", "label": "Sal\xE1rio", "type": "number" }
  ]
}
`),wg()(),jc(80,`p`),lO(81,`E o endpoint deve responder com:`),wg(),jc(82,`pre`)(83,`code`,7),lO(84,`{
  "filter": "city eq 'S\xE3o Paulo' and salary gt 5000",
  "description": "Funcion\xE1rios de S\xE3o Paulo com sal\xE1rio acima de 5000",
  "confidence": 0.92
}
`),wg()(),jc(85,`p`),lO(86,`Onde `),jc(87,`code`),lO(88,`filter`),wg(),lO(89,` é o filtro estruturado gerado pela IA (normalmente OData), `),jc(90,`code`),lO(91,`description`),wg(),lO(92,` \xE9 um
resumo leg\xEDvel e `),jc(93,`code`),lO(94,`confidence`),wg(),lO(95,` (`),jc(96,`code`),lO(97,`0.0`),wg(),lO(98,` a `),jc(99,`code`),lO(100,`1.0`),wg(),lO(101,`) indica o qu\xE3o confi\xE1vel foi a interpreta\xE7\xE3o \u2014
comparado com `),jc(102,`code`),lO(103,`p-min-confidence`),wg(),lO(104,` para decidir entre os eventos `),jc(105,`code`),lO(106,`p-result`),wg(),lO(107,` e `),jc(108,`code`),lO(109,`p-low-confidence`),wg(),lO(110,`.`),wg(),jc(111,`blockquote`)(112,`p`)(113,`strong`),lO(114,`Exemplo de implementação:`),wg(),lO(115,` o PO UI mant\xE9m um backend de refer\xEAncia, open source, que recebe
esse contrato e o encaminha para um provedor de IA (Groq/Gemini).`),wg(),jc(116,`ul`)(117,`li`),lO(118,`Endpoint público: `),jc(119,`a`,8)(120,`code`),lO(121,`/v1/ai/filter`),wg()()(),jc(122,`li`),lO(123,`Código-fonte: `),jc(124,`a`,9),lO(125,`po-sample-api/src/ai/ai.service.ts`),wg()()()(),jc(126,`h4`),lO(127,`Estados de comportamento`),wg(),jc(128,`ul`)(129,`li`)(130,`strong`),lO(131,`Idle:`),wg(),lO(132,` aguardando a digitação da consulta.`),wg(),jc(133,`li`)(134,`strong`),lO(135,`Loading:`),wg(),lO(136,` consulta em andamento (ícone de carregamento ativo).`),wg(),jc(137,`li`)(138,`strong`),lO(139,`Aplicado:`),wg(),lO(140,` ap\xF3s uma resposta bem-sucedida, exibe um feedback persistente de
"filtro aplicado via IA" enquanto a consulta estiver ativa, com op\xE7\xE3o de limpeza r\xE1pida.`),wg(),jc(141,`li`)(142,`strong`),lO(143,`Baixa confiança:`),wg(),lO(144,` quando `),jc(145,`code`),lO(146,`confidence`),wg(),lO(147,` for menor que `),jc(148,`code`),lO(149,`p-min-confidence`),wg(),lO(150,`, emite
`),jc(151,`code`),lO(152,`p-low-confidence`),wg(),lO(153,` e não aplica o filtro automaticamente.`),wg(),jc(154,`li`)(155,`strong`),lO(156,`Erro:`),wg(),lO(157,` quando a chamada falha, emite `),jc(158,`code`),lO(159,`p-error`),wg(),lO(160,`.`),wg()(),jc(161,`h4`),lO(162,`Tokens customizáveis`),wg(),jc(163,`p`),lO(164,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(165,`blockquote`)(166,`p`),lO(167,`Para maiores informações, acesse o guia `),jc(168,`a`,10),lO(169,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(170,`.`),wg()(),jc(171,`table`)(172,`thead`)(173,`tr`)(174,`th`),lO(175,`Propriedade`),wg(),jc(176,`th`),lO(177,`Descrição`),wg(),jc(178,`th`),lO(179,`Valor Padrão`),wg()()(),jc(180,`tbody`)(181,`tr`)(182,`td`)(183,`strong`),lO(184,`Default`),wg()(),nu(185,`td`)(186,`td`),wg(),jc(187,`tr`)(188,`td`)(189,`code`),lO(190,`--font-family`),wg()(),jc(191,`td`),lO(192,`Família tipográfica do campo`),wg(),jc(193,`td`)(194,`code`),lO(195,`var(--font-family-theme)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),lO(199,`--font-size`),wg()(),jc(200,`td`),lO(201,`Tamanho da fonte do campo`),wg(),jc(202,`td`)(203,`code`),lO(204,`var(--font-size)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),lO(208,`--text-color`),wg()(),jc(209,`td`),lO(210,`Cor do texto digitado`),wg(),jc(211,`td`)(212,`code`),lO(213,`var(--color-neutral-dark-90)`),wg()()(),jc(214,`tr`)(215,`td`)(216,`code`),lO(217,`--text-color-placeholder`),wg()(),jc(218,`td`),lO(219,`Cor do texto do placeholder`),wg(),jc(220,`td`)(221,`code`),lO(222,`var(--color-neutral-light-30)`),wg()()(),jc(223,`tr`)(224,`td`)(225,`code`),lO(226,`--color`),wg()(),jc(227,`td`),lO(228,`Cor da borda do campo`),wg(),jc(229,`td`)(230,`code`),lO(231,`var(--color-neutral-dark-70)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),lO(235,`--background`),wg()(),jc(236,`td`),lO(237,`Cor de fundo do campo`),wg(),jc(238,`td`)(239,`code`),lO(240,`var(--color-neutral-light-05)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),lO(244,`--border-radius`),wg()(),jc(245,`td`),lO(246,`Raio da borda do campo`),wg(),jc(247,`td`)(248,`code`),lO(249,`var(--border-radius-md)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`strong`),lO(253,`Ícones e divisória`),wg()(),nu(254,`td`)(255,`td`),wg(),jc(256,`tr`)(257,`td`)(258,`code`),lO(259,`--color-icon-read`),wg()(),jc(260,`td`),lO(261,`Cor do ícone de busca por IA`),wg(),jc(262,`td`)(263,`code`),lO(264,`var(--color-neutral-dark-70)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),lO(268,`--color-divider`),wg()(),jc(269,`td`),lO(270,`Cor da divisória vertical entre o campo e o botão de busca`),wg(),jc(271,`td`)(272,`code`),lO(273,`var(--color-neutral-mid-40)`),wg()()(),jc(274,`tr`)(275,`td`)(276,`code`),lO(277,`--color-icon-processing`),wg()(),jc(278,`td`),lO(279,`Cor do ícone exibido enquanto a consulta está sendo processada`),wg(),jc(280,`td`)(281,`code`),lO(282,`var(--color-action-default)`),wg()()(),jc(283,`tr`)(284,`td`)(285,`strong`),lO(286,`Hover`),wg()(),nu(287,`td`)(288,`td`),wg(),jc(289,`tr`)(290,`td`)(291,`code`),lO(292,`--color-hover`),wg()(),jc(293,`td`),lO(294,`Cor da borda no estado hover`),wg(),jc(295,`td`)(296,`code`),lO(297,`var(--color-brand-01-dark)`),wg()()(),jc(298,`tr`)(299,`td`)(300,`code`),lO(301,`--background-hover`),wg()(),jc(302,`td`),lO(303,`Cor de fundo no estado hover`),wg(),jc(304,`td`)(305,`code`),lO(306,`var(--color-brand-01-lightest)`),wg()()(),jc(307,`tr`)(308,`td`)(309,`strong`),lO(310,`Focused`),wg()(),nu(311,`td`)(312,`td`),wg(),jc(313,`tr`)(314,`td`)(315,`code`),lO(316,`--color-focused`),wg()(),jc(317,`td`),lO(318,`Cor da borda no estado de foco`),wg(),jc(319,`td`)(320,`code`),lO(321,`var(--color-action-default)`),wg()()(),jc(322,`tr`)(323,`td`)(324,`code`),lO(325,`--outline-color-focused`),wg()(),jc(326,`td`),lO(327,`Cor do outline no estado de foco`),wg(),jc(328,`td`)(329,`code`),lO(330,`var(--color-action-focus)`),wg()()(),jc(331,`tr`)(332,`td`)(333,`strong`),lO(334,`Disabled`),wg()(),nu(335,`td`)(336,`td`),wg(),jc(337,`tr`)(338,`td`)(339,`code`),lO(340,`--color-disabled`),wg()(),jc(341,`td`),lO(342,`Cor da borda no estado desabilitado`),wg(),jc(343,`td`)(344,`code`),lO(345,`var(--color-neutral-light-30)`),wg()()(),jc(346,`tr`)(347,`td`)(348,`code`),lO(349,`--background-disabled`),wg()(),jc(350,`td`),lO(351,`Cor de fundo no estado desabilitado`),wg(),jc(352,`td`)(353,`code`),lO(354,`var(--color-neutral-light-20)`),wg()()()()()(),jc(355,`div`,11)(356,`h4`,12),lO(357,`Seletor`),wg(),jc(358,`pre`,13),lO(359,`<po-search-ai
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
`),wg()(),jc(360,`h4`,14),lO(361,`Propriedades`),wg(),jc(362,`table`,15)(363,`tr`,16)(364,`th`,17),lO(365,`Nome`),wg(),jc(366,`th`,17),lO(367,`Tipo`),wg(),jc(368,`th`,17),lO(369,`Padrão`),wg(),jc(370,`th`,17),lO(371,`Descrição`),wg()(),jc(372,`tr`,18)(373,`td`,19)(374,`div`,20)(375,`span`,21),lO(376,` (p-clear)`),nu(377,`br`),wg()()(),jc(378,`td`,22)(379,`code`,23),lO(380,`EventEmitter`),wg()(),jc(381,`td`,24),lO(382,`-`),wg(),jc(383,`td`,25)(384,`em`)(385,`strong`),lO(386,`(opcional)`),wg()(),jc(387,`p`),lO(388,`Evento disparado quando o filtro aplicado via IA \xE9 limpo, seja pela a\xE7\xE3o do usu\xE1rio
ou programaticamente. N\xE3o emite valor.`),wg()()(),jc(389,`tr`,18)(390,`td`,19)(391,`div`,26)(392,`span`,27),lO(393,` p-columns`),nu(394,`br`),wg()()(),jc(395,`td`,22)(396,`code`,28),lO(397,`Array<PoSearchAiColumn>`),wg()(),jc(398,`td`,24)(399,`p`)(400,`code`),lO(401,`[]`),wg()()(),jc(402,`td`,25)(403,`em`)(404,`strong`),lO(405,`(opcional)`),wg()(),jc(406,`p`),lO(407,`Metadados das colunas/campos dispon\xEDveis para a busca por IA. Essas informa\xE7\xF5es s\xE3o
enviadas ao endpoint configurado em `),jc(408,`code`),lO(409,`p-url`),wg(),lO(410,` para que a IA mapeie os termos digitados
para as propriedades reais dos dados.`),wg()()(),jc(411,`tr`,18)(412,`td`,19)(413,`div`,20)(414,`span`,21),lO(415,` (p-error)`),nu(416,`br`),wg()()(),jc(417,`td`,22)(418,`code`,23),lO(419,`EventEmitter`),wg()(),jc(420,`td`,24),lO(421,`-`),wg(),jc(422,`td`,25)(423,`em`)(424,`strong`),lO(425,`(opcional)`),wg()(),jc(426,`p`),lO(427,`Evento disparado quando a chamada \xE0 API de IA falha (erro HTTP, timeout, etc.).
Emite um objeto `),jc(428,`code`),lO(429,`PoSearchAiError`),wg(),lO(430,`.`),wg()()(),jc(431,`tr`,18)(432,`td`,19)(433,`div`,26)(434,`span`,27),lO(435,` p-literals`),nu(436,`br`),wg()()(),jc(437,`td`,22)(438,`code`,29),lO(439,`PoSearchAiLiterals`),wg()(),jc(440,`td`,24),lO(441,`-`),wg(),jc(442,`td`,25)(443,`em`)(444,`strong`),lO(445,`(opcional)`),wg()(),jc(446,`p`),lO(447,`Objeto com os literais usados no componente. Permite sobrescrever as mensagens padr\xE3o
para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),wg()()(),jc(448,`tr`,18)(449,`td`,19)(450,`div`,20)(451,`span`,21),lO(452,` (p-low-confidence)`),nu(453,`br`),wg()()(),jc(454,`td`,22)(455,`code`,23),lO(456,`EventEmitter`),wg()(),jc(457,`td`,24),lO(458,`-`),wg(),jc(459,`td`,25)(460,`em`)(461,`strong`),lO(462,`(opcional)`),wg()(),jc(463,`p`),lO(464,`Evento disparado quando a confiança da resposta da IA é menor que `),jc(465,`code`),lO(466,`p-min-confidence`),wg(),lO(467,`.
Emite um objeto `),jc(468,`code`),lO(469,`PoSearchAiResult`),wg(),lO(470,`, permitindo ao desenvolvedor decidir o que fazer
(ex: confirmar com o usu\xE1rio antes de aplicar o filtro).`),wg()()(),jc(471,`tr`,18)(472,`td`,19)(473,`div`,26)(474,`span`,27),lO(475,` p-min-confidence`),nu(476,`br`),wg()()(),jc(477,`td`,22)(478,`code`,30),lO(479,`number`),wg()(),jc(480,`td`,24)(481,`p`)(482,`code`),lO(483,`0.5`),wg()()(),jc(484,`td`,25)(485,`em`)(486,`strong`),lO(487,`(opcional)`),wg()(),jc(488,`p`),lO(489,`Nível mínimo de confiança (`),jc(490,`code`),lO(491,`0.0`),wg(),lO(492,` a `),jc(493,`code`),lO(494,`1.0`),wg(),lO(495,`) para que o resultado da IA seja considerado
confi\xE1vel. Quando a confian\xE7a retornada for menor, o evento `),jc(496,`code`),lO(497,`p-low-confidence`),wg(),lO(498,` \xE9
emitido em vez de `),jc(499,`code`),lO(500,`p-result`),wg(),lO(501,`.`),wg()()(),jc(502,`tr`,18)(503,`td`,19)(504,`div`,20)(505,`span`,21),lO(506,` (p-result)`),nu(507,`br`),wg()()(),jc(508,`td`,22)(509,`code`,23),lO(510,`EventEmitter`),wg()(),jc(511,`td`,24),lO(512,`-`),wg(),jc(513,`td`,25)(514,`em`)(515,`strong`),lO(516,`(opcional)`),wg()(),jc(517,`p`),lO(518,`Evento disparado quando a IA retorna um resultado com confian\xE7a maior ou igual a
`),jc(519,`code`),lO(520,`p-min-confidence`),wg(),lO(521,`. Emite um objeto `),jc(522,`code`),lO(523,`PoSearchAiResult`),wg(),lO(524,`.`),wg(),jc(525,`p`),lO(526,`O campo `),jc(527,`code`),lO(528,`type`),wg(),lO(529,` do resultado indica como o consumidor deve interpretar a resposta:`),wg(),jc(530,`ul`)(531,`li`)(532,`p`)(533,`strong`)(534,`code`),lO(535,`filter`),wg()(),jc(536,`em`),lO(537,`(padrão)`),wg(),lO(538,`: a IA retornou um filtro estruturado (ex: OData). Use `),jc(539,`code`),lO(540,`result.filter`),wg(),lO(541,`
para aplicar a consulta \xE0 fonte de dados \u2014 por exemplo, passando para um `),jc(542,`code`),lO(543,`po-table`),wg(),lO(544,` via `),jc(545,`code`),lO(546,`p-filter`),wg(),lO(547,`.`),wg()(),jc(548,`li`)(549,`p`)(550,`strong`)(551,`code`),lO(552,`chat`),wg()(),lO(553,`: a IA retornou uma resposta conversacional. Use `),jc(554,`code`),lO(555,`result.data`),wg(),lO(556,` para exibir a mensagem
ao usu\xE1rio, por exemplo em um painel lateral ou tooltip.`),wg()(),jc(557,`li`)(558,`p`)(559,`strong`)(560,`code`),lO(561,`custom`),wg()(),lO(562,`: a IA retornou um payload genérico definido pelo backend. Use `),jc(563,`code`),lO(564,`result.data`),wg(),lO(565,` para
executar qualquer a\xE7\xE3o espec\xEDfica da aplica\xE7\xE3o (ex: navega\xE7\xE3o, abertura de modal, acionamento de comando).`),wg()()()()(),jc(566,`tr`,18)(567,`td`,19)(568,`div`,26)(569,`span`,27),lO(570,` p-timeout`),nu(571,`br`),wg()()(),jc(572,`td`,22)(573,`code`,30),lO(574,`number`),wg()(),jc(575,`td`,24)(576,`p`)(577,`code`),lO(578,`10000`),wg()()(),jc(579,`td`,25)(580,`em`)(581,`strong`),lO(582,`(opcional)`),wg()(),jc(583,`p`),lO(584,`Tempo m\xE1ximo de espera (em milissegundos) pela resposta da IA antes de abortar a
requisi\xE7\xE3o e emitir `),jc(585,`code`),lO(586,`p-error`),wg(),lO(587,` com `),jc(588,`code`),lO(589,`statusCode 408`),wg(),lO(590,`.`),wg()()(),jc(591,`tr`,18)(592,`td`,19)(593,`div`,26)(594,`span`,27),lO(595,` p-url`),nu(596,`br`),wg()()(),jc(597,`td`,22)(598,`code`,31),lO(599,`string`),wg()(),jc(600,`td`,24),lO(601,`-`),wg(),jc(602,`td`,25)(603,`em`)(604,`strong`),lO(605,`(opcional)`),wg()(),jc(606,`p`),lO(607,`Endpoint (proxy) respons\xE1vel por encaminhar a consulta para o provedor de IA.
Recebe `),jc(608,`code`),lO(609,`{ query, columns }`),wg(),lO(610,` via `),jc(611,`code`),lO(612,`POST`),wg(),lO(613,` e deve retornar `),jc(614,`code`),lO(615,`{ filter, description, confidence }`),wg(),lO(616,`.`),wg(),jc(617,`blockquote`)(618,`p`),lO(619,`A integração com a LLM e a guarda de chaves devem ocorrer `),jc(620,`strong`),lO(621,`no backend`),wg(),lO(622,`, nunca no client-side.`),wg()()()()(),jc(623,`h3`,14),lO(624,`Métodos`),wg(),jc(625,`table`,32)(626,`tr`,18)(627,`th`,33)(628,`div`,26)(629,`h4`)(630,`span`,27),lO(631,` search `),wg()()()()(),jc(632,`tr`,25)(633,`td`,25)(634,`p`),lO(635,`Envia a consulta atual (valor do campo) para o endpoint de IA configurado em `),jc(636,`code`),lO(637,`p-url`),wg(),lO(638,`.`),wg(),jc(639,`p`),lO(640,`Caso a consulta esteja vazia ou `),jc(641,`code`),lO(642,`p-url`),wg(),lO(643,` n\xE3o esteja definido, nada \xE9 feito.
O resultado \xE9 emitido via `),jc(644,`code`),lO(645,`p-result`),wg(),lO(646,` (ou `),jc(647,`code`),lO(648,`p-low-confidence`),wg(),lO(649,` quando a confian\xE7a for baixa)
e falhas s\xE3o emitidas via `),jc(650,`code`),lO(651,`p-error`),wg(),lO(652,`.`),wg()()()(),nu(653,`br`),jc(654,`table`,32)(655,`tr`,18)(656,`th`,33)(657,`div`,26)(658,`h4`)(659,`span`,27),lO(660,` clearSearch `),wg()()()()(),jc(661,`tr`,25)(662,`td`,25)(663,`p`),lO(664,`Limpa o filtro aplicado via IA, esvazia o campo e emite o evento `),jc(665,`code`),lO(666,`p-clear`),wg(),lO(667,`.`),wg()()()(),nu(668,`br`),jc(669,`table`,32)(670,`tr`,18)(671,`th`,33)(672,`div`,26)(673,`h4`)(674,`span`,27),lO(675,` onSearchKeydown `),wg()()()()(),jc(676,`tr`,25)(677,`td`,25)(678,`p`),lO(679,`Manipula a tecla pressionada no campo: dispara a busca ao pressionar `),jc(680,`code`),lO(681,`Enter`),wg(),lO(682,`.`),wg()()()(),jc(683,`h5`)(684,`b`),lO(685,`Parâmetros`),wg()(),jc(686,`table`,15)(687,`tr`,16)(688,`th`,17),lO(689,`Nome`),wg(),jc(690,`th`,17),lO(691,`Tipo`),wg(),jc(692,`th`,17),lO(693,`Descrição`),wg()(),jc(694,`tr`,18)(695,`td`,19),lO(696,` event`),wg(),nu(697,`td`,22),jc(698,`td`,25)(699,`p`),lO(700,`Evento de teclado.`),wg()()()(),nu(701,`br`),jc(702,`h3`),lO(703,`Interfaces`),wg(),jc(704,`h4`,34)(705,`code`,5),lO(706,`PoSearchAiColumn`),wg()(),jc(707,`div`,2)(708,`p`),lO(709,`Interface que define os metadados de uma coluna/campo enviados ao endpoint de IA
para contextualizar a interpreta\xE7\xE3o da busca em linguagem natural.`),wg(),jc(710,`p`),lO(711,`Esses metadados ajudam o provedor de IA a mapear os termos digitados pelo usu\xE1rio
para as propriedades reais dos dados e a gerar um filtro (por exemplo, OData) coerente.`),wg()(),jc(712,`h4`,14),lO(713,`Propriedades`),wg(),jc(714,`table`,15)(715,`tr`,16)(716,`th`,17),lO(717,`Nome`),wg(),jc(718,`th`,17),lO(719,`Tipo`),wg(),jc(720,`th`,17),lO(721,`Descrição`),wg()(),jc(722,`tr`,18)(723,`td`,19)(724,`div`,26)(725,`span`,27),lO(726,` label`),nu(727,`br`),wg()()(),jc(728,`td`,22)(729,`code`,31),lO(730,`string`),wg()(),jc(731,`td`,25)(732,`p`),lO(733,`Rótulo legível exibido ao usuário (ex: `),jc(734,`code`),lO(735,`Nome`),wg(),lO(736,`, `),jc(737,`code`),lO(738,`Idade`),wg(),lO(739,`, `),jc(740,`code`),lO(741,`Cidade`),wg(),lO(742,`).`),wg()()(),jc(743,`tr`,18)(744,`td`,19)(745,`div`,26)(746,`span`,27),lO(747,` property`),nu(748,`br`),wg()()(),jc(749,`td`,22)(750,`code`,31),lO(751,`string`),wg()(),jc(752,`td`,25)(753,`p`),lO(754,`Nome da propriedade do campo (ex: `),jc(755,`code`),lO(756,`name`),wg(),lO(757,`, `),jc(758,`code`),lO(759,`age`),wg(),lO(760,`, `),jc(761,`code`),lO(762,`city`),wg(),lO(763,`).`),wg()()(),jc(764,`tr`,18)(765,`td`,19)(766,`div`,26)(767,`span`,27),lO(768,` type`),nu(769,`br`),wg()()(),jc(770,`td`,22)(771,`code`,31),lO(772,`string`),wg()(),jc(773,`td`,25)(774,`em`)(775,`strong`),lO(776,`(opcional)`),wg()(),jc(777,`p`),lO(778,`Tipo do campo, utilizado pela IA para gerar comparações adequadas.`),wg(),jc(779,`p`),lO(780,`Valores comuns: `),jc(781,`code`),lO(782,`string`),wg(),lO(783,`, `),jc(784,`code`),lO(785,`number`),wg(),lO(786,`, `),jc(787,`code`),lO(788,`date`),wg(),lO(789,`, `),jc(790,`code`),lO(791,`currency`),wg(),lO(792,`, `),jc(793,`code`),lO(794,`boolean`),wg(),lO(795,`.`),wg()()()(),jc(796,`h4`,34)(797,`code`,5),lO(798,`PoSearchAiLiterals`),wg()(),jc(799,`div`,2)(800,`p`),lO(801,`Interface para definição das literais usadas no `),jc(802,`code`),lO(803,`po-search-ai`),wg(),lO(804,`.`),wg()(),jc(805,`h4`,14),lO(806,`Propriedades`),wg(),jc(807,`table`,15)(808,`tr`,16)(809,`th`,17),lO(810,`Nome`),wg(),jc(811,`th`,17),lO(812,`Tipo`),wg(),jc(813,`th`,17),lO(814,`Descrição`),wg()(),jc(815,`tr`,18)(816,`td`,19)(817,`div`,26)(818,`span`,27),lO(819,` clean`),nu(820,`br`),wg()()(),jc(821,`td`,22)(822,`code`,31),lO(823,`string`),wg()(),jc(824,`td`,25)(825,`em`)(826,`strong`),lO(827,`(opcional)`),wg()(),jc(828,`p`),lO(829,`Texto de acessibilidade do botão de limpar o campo.`),wg()()(),jc(830,`tr`,18)(831,`td`,19)(832,`div`,26)(833,`span`,27),lO(834,` errorMessage`),nu(835,`br`),wg()()(),jc(836,`td`,22)(837,`code`,31),lO(838,`string`),wg()(),jc(839,`td`,25)(840,`em`)(841,`strong`),lO(842,`(opcional)`),wg()(),jc(843,`p`),lO(844,`Mensagem exibida quando a busca com IA falha.`),wg()()()(),jc(845,`h4`,34)(846,`code`,5),lO(847,`PoSearchAiRequest`),wg()(),jc(848,`div`,2)(849,`p`),lO(850,`Interface que define o payload enviado ao endpoint de IA configurado via `),jc(851,`code`),lO(852,`p-url`),wg(),lO(853,`.`),wg(),jc(854,`p`),lO(855,`O componente é `),jc(856,`strong`),lO(857,`agnóstico ao provedor de IA`),wg(),lO(858,`: o backend (proxy) recebe este payload,
encaminha para a LLM e retorna um `),jc(859,`code`),lO(860,`PoSearchAiResponse`),wg(),lO(861,`.`),wg()(),jc(862,`h4`,14),lO(863,`Propriedades`),wg(),jc(864,`table`,15)(865,`tr`,16)(866,`th`,17),lO(867,`Nome`),wg(),jc(868,`th`,17),lO(869,`Tipo`),wg(),jc(870,`th`,17),lO(871,`Descrição`),wg()(),jc(872,`tr`,18)(873,`td`,19)(874,`div`,26)(875,`span`,27),lO(876,` columns`),nu(877,`br`),wg()()(),jc(878,`td`,22)(879,`code`,28),lO(880,`Array<PoSearchAiColumn>`),wg()(),jc(881,`td`,25)(882,`p`),lO(883,`Metadados dos campos disponíveis para a busca (ver `),jc(884,`code`),lO(885,`PoSearchAiColumn`),wg(),lO(886,`).`),wg()()(),jc(887,`tr`,18)(888,`td`,19)(889,`div`,26)(890,`span`,27),lO(891,` query`),nu(892,`br`),wg()()(),jc(893,`td`,22)(894,`code`,31),lO(895,`string`),wg()(),jc(896,`td`,25)(897,`p`),lO(898,`Texto em linguagem natural digitado pelo usuário.`),wg()()()(),jc(899,`h4`,34)(900,`code`,5),lO(901,`PoSearchAiResponse`),wg()(),jc(902,`div`,2)(903,`p`),lO(904,`Interface que define a resposta esperada do endpoint de IA configurado via `),jc(905,`code`),lO(906,`p-url`),wg(),lO(907,`.`),wg()(),jc(908,`h4`,14),lO(909,`Propriedades`),wg(),jc(910,`table`,15)(911,`tr`,16)(912,`th`,17),lO(913,`Nome`),wg(),jc(914,`th`,17),lO(915,`Tipo`),wg(),jc(916,`th`,17),lO(917,`Descrição`),wg()(),jc(918,`tr`,18)(919,`td`,19)(920,`div`,26)(921,`span`,27),lO(922,` confidence`),nu(923,`br`),wg()()(),jc(924,`td`,22)(925,`code`,30),lO(926,`number`),wg()(),jc(927,`td`,25)(928,`em`)(929,`strong`),lO(930,`(opcional)`),wg()(),jc(931,`p`),lO(932,`Nível de confiança da interpretação da IA, em um intervalo de `),jc(933,`code`),lO(934,`0.0`),wg(),lO(935,` a `),jc(936,`code`),lO(937,`1.0`),wg(),lO(938,`.`),wg(),jc(939,`p`),lO(940,`Utilizado em conjunto com `),jc(941,`code`),lO(942,`p-min-confidence`),wg(),lO(943,` para decidir se o resultado é confiável.`),wg()()(),jc(944,`tr`,18)(945,`td`,19)(946,`div`,26)(947,`span`,27),lO(948,` data`),nu(949,`br`),wg()()(),jc(950,`td`,22)(951,`code`,35),lO(952,`Record<string, any>`),wg()(),jc(953,`td`,25)(954,`em`)(955,`strong`),lO(956,`(opcional)`),wg()(),jc(957,`p`),lO(958,`Payload genérico da resposta da IA (mensagem de chat, ações, dados customizados, etc.).`),wg(),jc(959,`p`),lO(960,`Utilizado quando `),jc(961,`code`),lO(962,`type`),wg(),lO(963,` é `),jc(964,`code`),lO(965,`'chat'`),wg(),lO(966,` ou `),jc(967,`code`),lO(968,`'custom'`),wg(),lO(969,`.`),wg()()(),jc(970,`tr`,18)(971,`td`,19)(972,`div`,26)(973,`span`,27),lO(974,` description`),nu(975,`br`),wg()()(),jc(976,`td`,22)(977,`code`,31),lO(978,`string`),wg()(),jc(979,`td`,25)(980,`em`)(981,`strong`),lO(982,`(opcional)`),wg()(),jc(983,`p`),lO(984,`Descrição legível, em linguagem natural, da resposta.`),wg()()(),jc(985,`tr`,18)(986,`td`,19)(987,`div`,26)(988,`span`,27),lO(989,` filter`),nu(990,`br`),wg()()(),jc(991,`td`,22)(992,`code`,31),lO(993,`string`),wg()(),jc(994,`td`,25)(995,`em`)(996,`strong`),lO(997,`(opcional)`),wg()(),jc(998,`p`),lO(999,`Filtro gerado pela IA, normalmente no padr\xE3o OData
(ex: `),jc(1e3,`code`),lO(1001,`age gt 30 and city eq 'São Paulo'`),wg(),lO(1002,`).`),wg(),jc(1003,`p`),lO(1004,`Utilizado quando `),jc(1005,`code`),lO(1006,`type`),wg(),lO(1007,` é `),jc(1008,`code`),lO(1009,`'filter'`),wg(),lO(1010,`.`),wg()()(),jc(1011,`tr`,18)(1012,`td`,19)(1013,`div`,26)(1014,`span`,27),lO(1015,` type`),nu(1016,`br`),wg()()(),jc(1017,`td`,22)(1018,`code`,36),lO(1019,`PoSearchAiResponseType`),wg()(),jc(1020,`td`,25)(1021,`em`)(1022,`strong`),lO(1023,`(opcional)`),wg()(),jc(1024,`p`),lO(1025,`Tipo da resposta retornada pela IA.`),wg(),jc(1026,`p`),lO(1027,`Quando omitido, o componente infere `),jc(1028,`code`),lO(1029,`'filter'`),wg(),lO(1030,` se `),jc(1031,`code`),lO(1032,`filter`),wg(),lO(1033,` estiver presente,
caso contr\xE1rio assume `),jc(1034,`code`),lO(1035,`'custom'`),wg(),lO(1036,`.`),wg()()()(),jc(1037,`h4`,34)(1038,`code`,5),lO(1039,`PoSearchAiResult`),wg()(),jc(1040,`div`,2)(1041,`p`),lO(1042,`Interface que define o objeto emitido pelos eventos `),jc(1043,`code`),lO(1044,`p-result`),wg(),lO(1045,` e `),jc(1046,`code`),lO(1047,`p-low-confidence`),wg(),lO(1048,`.`),wg()(),jc(1049,`h4`,14),lO(1050,`Propriedades`),wg(),jc(1051,`table`,15)(1052,`tr`,16)(1053,`th`,17),lO(1054,`Nome`),wg(),jc(1055,`th`,17),lO(1056,`Tipo`),wg(),jc(1057,`th`,17),lO(1058,`Descrição`),wg()(),jc(1059,`tr`,18)(1060,`td`,19)(1061,`div`,26)(1062,`span`,27),lO(1063,` confidence`),nu(1064,`br`),wg()()(),jc(1065,`td`,22)(1066,`code`,30),lO(1067,`number`),wg()(),jc(1068,`td`,25)(1069,`em`)(1070,`strong`),lO(1071,`(opcional)`),wg()(),jc(1072,`p`),lO(1073,`Nível de confiança da interpretação (`),jc(1074,`code`),lO(1075,`0.0`),wg(),lO(1076,` a `),jc(1077,`code`),lO(1078,`1.0`),wg(),lO(1079,`).`),wg()()(),jc(1080,`tr`,18)(1081,`td`,19)(1082,`div`,26)(1083,`span`,27),lO(1084,` data`),nu(1085,`br`),wg()()(),jc(1086,`td`,22)(1087,`code`,35),lO(1088,`Record<string, any>`),wg()(),jc(1089,`td`,25)(1090,`em`)(1091,`strong`),lO(1092,`(opcional)`),wg()(),jc(1093,`p`),lO(1094,`Payload genérico da resposta (chat, ações, dados customizados, etc.).`),wg()()(),jc(1095,`tr`,18)(1096,`td`,19)(1097,`div`,26)(1098,`span`,27),lO(1099,` description`),nu(1100,`br`),wg()()(),jc(1101,`td`,22)(1102,`code`,31),lO(1103,`string`),wg()(),jc(1104,`td`,25)(1105,`em`)(1106,`strong`),lO(1107,`(opcional)`),wg()(),jc(1108,`p`),lO(1109,`Descrição legível da resposta.`),wg()()(),jc(1110,`tr`,18)(1111,`td`,19)(1112,`div`,26)(1113,`span`,27),lO(1114,` filter`),nu(1115,`br`),wg()()(),jc(1116,`td`,22)(1117,`code`,31),lO(1118,`string`),wg()(),jc(1119,`td`,25)(1120,`em`)(1121,`strong`),lO(1122,`(opcional)`),wg()(),jc(1123,`p`),lO(1124,`Filtro retornado pela IA (ex: filtro OData). Presente quando `),jc(1125,`code`),lO(1126,`type`),wg(),lO(1127,` é `),jc(1128,`code`),lO(1129,`'filter'`),wg(),lO(1130,`.`),wg()()(),jc(1131,`tr`,18)(1132,`td`,19)(1133,`div`,26)(1134,`span`,27),lO(1135,` query`),nu(1136,`br`),wg()()(),jc(1137,`td`,22)(1138,`code`,31),lO(1139,`string`),wg()(),jc(1140,`td`,25)(1141,`p`),lO(1142,`Texto original digitado pelo usuário.`),wg()()(),jc(1143,`tr`,18)(1144,`td`,19)(1145,`div`,26)(1146,`span`,27),lO(1147,` type`),nu(1148,`br`),wg()()(),jc(1149,`td`,22)(1150,`code`,36),lO(1151,`PoSearchAiResponseType`),wg()(),jc(1152,`td`,25)(1153,`p`),lO(1154,`Tipo da resposta retornada pela IA.`),wg()()()(),jc(1155,`h4`,34)(1156,`code`,5),lO(1157,`PoSearchAiError`),wg()(),jc(1158,`div`,2)(1159,`p`),lO(1160,`Interface que define o objeto emitido pelo evento `),jc(1161,`code`),lO(1162,`p-error`),wg(),lO(1163,` quando a chamada \xE0
API de IA falha (erro HTTP, timeout, resposta inv\xE1lida, etc.).`),wg()(),jc(1164,`h4`,14),lO(1165,`Propriedades`),wg(),jc(1166,`table`,15)(1167,`tr`,16)(1168,`th`,17),lO(1169,`Nome`),wg(),jc(1170,`th`,17),lO(1171,`Tipo`),wg(),jc(1172,`th`,17),lO(1173,`Descrição`),wg()(),jc(1174,`tr`,18)(1175,`td`,19)(1176,`div`,26)(1177,`span`,27),lO(1178,` message`),nu(1179,`br`),wg()()(),jc(1180,`td`,22)(1181,`code`,31),lO(1182,`string`),wg()(),jc(1183,`td`,25)(1184,`p`),lO(1185,`Mensagem de erro.`),wg()()(),jc(1186,`tr`,18)(1187,`td`,19)(1188,`div`,26)(1189,`span`,27),lO(1190,` query`),nu(1191,`br`),wg()()(),jc(1192,`td`,22)(1193,`code`,31),lO(1194,`string`),wg()(),jc(1195,`td`,25)(1196,`p`),lO(1197,`Texto original digitado pelo usuário.`),wg()()(),jc(1198,`tr`,18)(1199,`td`,19)(1200,`div`,26)(1201,`span`,27),lO(1202,` statusCode`),nu(1203,`br`),wg()()(),jc(1204,`td`,22)(1205,`code`,30),lO(1206,`number`),wg()(),jc(1207,`td`,25)(1208,`p`),lO(1209,`Código HTTP do erro (ex: `),jc(1210,`code`),lO(1211,`500`),wg(),lO(1212,`, `),jc(1213,`code`),lO(1214,`408`),wg(),lO(1215,` para timeout).`),wg()()()(),jc(1216,`h3`),lO(1217,`Enums`),wg(),jc(1218,`h4`,4)(1219,`code`,5),lO(1220,`PoSearchAiResponseType`),wg()(),jc(1221,`div`,2)(1222,`p`),lO(1223,`Enum que define os tipos de resposta suportados pelo endpoint de IA.`),wg()(),jc(1224,`h4`,14),lO(1225,`Propriedades`),wg(),jc(1226,`table`,15)(1227,`tr`,16)(1228,`th`,17),lO(1229,`Nome`),wg(),jc(1230,`th`,17),lO(1231,`Descrição`),wg()(),jc(1232,`tr`,18)(1233,`td`,19)(1234,`div`,26)(1235,`span`,27),lO(1236,` filter`),nu(1237,`br`),wg()()(),jc(1238,`td`,25)(1239,`p`),lO(1240,`Resposta contendo um filtro estruturado (ex: OData).`),wg()()(),jc(1241,`tr`,18)(1242,`td`,19)(1243,`div`,26)(1244,`span`,27),lO(1245,` chat`),nu(1246,`br`),wg()()(),jc(1247,`td`,25)(1248,`p`),lO(1249,`Resposta conversacional em linguagem natural.`),wg()()(),jc(1250,`tr`,18)(1251,`td`,19)(1252,`div`,26)(1253,`span`,27),lO(1254,` custom`),nu(1255,`br`),wg()()(),jc(1256,`td`,25)(1257,`p`),lO(1258,`Payload genérico definido pelo consumidor.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ge(o,O){if(o&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-search-ai-basic-view`)(2,`sample-po-search-ai-labs-view`)(3,`sample-po-search-ai-result-view`)(4,`sample-po-search-ai-filter-view`),wg()}if(o&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var Ue=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Search Ai`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ge,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-search-ai-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ge,fe,ve,_e,Pe],encapsulation:2,changeDetection:1})}return o})()}];var Te=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(Ue),I1]})}return o})();var vt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,Te]})}return o})();export{vt as DocPoSearchAiModule};
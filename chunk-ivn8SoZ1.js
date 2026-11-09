import{t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Aa as qk,Ai as XL,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Hr as Me,I as Koe,Ia as sk,Ja as vt$1,Li as ZO,Mi as Y,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Pr as Jm,Ri as Zg,Rr as Kb,Sn as q4,Ti as W0,U as Nf,Vi as _u,Yi as eF,Zi as fF,an as j4,ba as o1,da as kI,di as RZ,ea as ge,er as An,fa as kZ,fi as Rb,fr as Db,gi as Tk,hi as TZ,in as ioe,j as I4,ji as Xk,jn as tie,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,p as DP,qi as de,qr as NZ,rn as ia,st as Ss,ui as R,va as nk,vn as oi,w as Fc,wa as p,xi as VO,xr as Gb,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var Ve=(()=>{class o{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,i){a&1&&_u(0,`po-multiselect`,0),a&2&&Rb(`p-options`,i.options)},dependencies:[DP],encapsulation:2,changeDetection:1})}return o})();var Ge=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect Basic`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-multiselect-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ge,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return o})();var Ae=(()=>{class o{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`div`,2)(1,`po-multiselect`,3),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.multiselect,p)||(i.multiselect=p),H_(p)}),vt$1(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg()(),_u(2,`po-divider`),Jc(3,`div`,2),_u(4,`po-info`,4)(5,`po-info`,5),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.option.label,p)||(i.option.label=p),H_(p)}),Zg(),Jc(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.option.value,p)||(i.option.value=p),H_(p)}),Zg()(),Jc(12,`div`,2)(13,`po-button`,8),vt$1(`p-click`,function(){return i.addOption()}),Zg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,9),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.label,p)||(i.label=p),H_(p)}),Zg(),Jc(18,`po-input`,10),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.help,p)||(i.help=p),H_(p)}),Zg(),Jc(19,`po-input`,11),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.helperText,p)||(i.helperText=p),H_(p)}),Zg(),Jc(20,`po-input`,12),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.placeholder,p)||(i.placeholder=p),H_(p)}),Zg(),Jc(21,`po-input`,13),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.placeholderSearch,p)||(i.placeholderSearch=p),H_(p)}),Zg(),Jc(22,`po-input`,14),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),H_(p)}),Zg(),Jc(23,`po-input`,15),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.literals,p)||(i.literals=p),H_(p)}),vt$1(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(24,`po-input`,16),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.filterService,p)||(i.filterService=p),H_(p)}),Zg(),Jc(25,`po-input`,17),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.fieldValue,p)||(i.fieldValue=p),H_(p)}),Zg(),Jc(26,`po-input`,18),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.fieldLabel,p)||(i.fieldLabel=p),H_(p)}),Zg(),Jc(27,`po-checkbox-group`,19),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.properties,p)||(i.properties=p),H_(p)}),Zg(),Jc(28,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.filterMode,p)||(i.filterMode=p),H_(p)}),Zg(),Jc(29,`po-radio-group`,21),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.size,p)||(i.size=p),H_(p)}),Zg(),Jc(30,`po-radio-group`,22),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.listboxPosition,p)||(i.listboxPosition=p),H_(p)}),Zg(),Jc(31,`div`,2)(32,`po-button`,23),vt$1(`p-click`,function(){return i.restore()}),Zg()()()}if(a&2){let c=sk(8);Ig(),Yb(`ngModel`,i.multiselect),Rb(`p-helper`,i.helperText)(`p-auto-height`,i.properties.includes(`autoHeight`))(`p-disabled`,i.properties.includes(`disabled`))(`p-field-label`,i.fieldLabel)(`p-field-value`,i.fieldValue)(`p-filter-service`,i.filterService)(`p-filter-mode`,i.filterMode)(`p-help`,i.help)(`p-hide-search`,i.properties.includes(`hideSearch`))(`p-hide-select-all`,i.properties.includes(`hideSelectAll`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-optional`,i.properties.includes(`optional`))(`p-options`,i.options)(`p-placeholder`,i.placeholder)(`p-placeholder-search`,i.placeholderSearch)(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-sort`,i.properties.includes(`sort`))(`p-listbox-control-position`,i.listboxPosition)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),Y0(),Ig(3),Rb(`p-value`,i.multiselect),Ig(),Rb(`p-value`,i.event),Ig(5),Yb(`ngModel`,i.option.label),Y0(),Ig(),Yb(`ngModel`,i.option.value),Y0(),Ig(2),Rb(`p-disabled`,c.form.invalid),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.placeholderSearch),Y0(),Ig(),Yb(`ngModel`,i.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,i.literals),Y0(),Ig(),Yb(`ngModel`,i.filterService),Y0(),Ig(),Yb(`ngModel`,i.fieldValue),Y0(),Ig(),Yb(`ngModel`,i.fieldLabel),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.filterMode),Rb(`p-disabled`,i.properties.includes(`hideSearch`))(`p-options`,i.filterModeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0(),Ig(),Yb(`ngModel`,i.listboxPosition),Rb(`p-options`,i.listboxPositionOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,DP,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var Ye=o=>({"docs-sample-code-tabs":o});var Le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect Labs`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
    [p-label-text-wrap]="properties?.includes('labelTextWrap')"
    [p-compact-label]="properties?.includes('compactLabel')"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="listboxPosition"
    [(ngModel)]="listboxPosition"
    p-label="Listbox Position"
    [p-options]="listboxPositionOptions"
  ></po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
  size: string;
  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, { ...this.option }];
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-multiselect-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return o})();var Oe=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`form`,null,0)(2,`h3`),Tk(3,`Collective vacations`),Zg(),_u(4,`po-divider`),Jc(5,`div`,2)(6,`po-datepicker`,3),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.initialPeriod,p)||(i.initialPeriod=p),H_(p)}),Zg(),Jc(7,`po-datepicker`,4),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.finalPeriod,p)||(i.finalPeriod=p),H_(p)}),Zg()(),Jc(8,`div`,2)(9,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.days,p)||(i.days=p),H_(p)}),Zg()(),Jc(10,`div`,2)(11,`po-multiselect`,6),W0(),Kb(`ngModelChange`,function(p){return U_(c),Ak(i.employeesVacations,p)||(i.employeesVacations=p),H_(p)}),Zg()(),Jc(12,`div`,2)(13,`po-button`,7),vt$1(`p-click`,function(){U_(c);let p=sk(16);return i.updateNameEmployeesVacations(),H_(p.open())}),Zg(),Jc(14,`po-button`,8),vt$1(`p-click`,function(){return i.clean()}),Zg()()(),Jc(15,`po-modal`,9,1)(17,`div`,2),_u(18,`po-info`,10),qk(19,`date`),_u(20,`po-info`,11),qk(21,`date`),_u(22,`po-info`,12),Zg(),_u(23,`po-divider`),Jc(24,`div`,2),_u(25,`po-info`,13),Zg()()}if(a&2){let c=sk(1);Ig(6),Yb(`ngModel`,i.initialPeriod),Y0(),Ig(),Yb(`ngModel`,i.finalPeriod),Rb(`p-min-date`,i.initialPeriod),Y0(),Ig(2),Yb(`ngModel`,i.days),Rb(`p-options`,i.daysOptions),Y0(),Ig(2),Yb(`ngModel`,i.employeesVacations),Rb(`p-options`,i.employees),Y0(),Ig(2),Rb(`p-disabled`,c.form.invalid),Ig(5),Rb(`p-value`,Xk(19,12,i.initialPeriod,`longDate`,`+0000`)),Ig(2),Rb(`p-value`,Xk(21,16,i.finalPeriod,`longDate`,`+0000`)),Ig(2),Rb(`p-value`,i.days),Ig(3),Rb(`p-value`,i.nameEmployeesVacations)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,tie,DP,Zte,Joe,ia,fF],encapsulation:2,changeDetection:1})}return o})();var $e=o=>({"docs-sample-code-tabs":o});var ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect - Vacation`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-multiselect-vacation`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,$e,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return o})();var qe=(()=>{class o{formBuilder=p(kZ);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,Jm.required],finalPeriod:[null,Jm.required],days:[null,Jm.required],employeesVacations:[null,Jm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`form`,1)(1,`h3`),Tk(2,`Collective vacations`),Zg(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-datepicker`,3),W0(),Zg(),Jc(6,`po-datepicker`,4),W0(),Zg()(),Jc(7,`div`,2)(8,`po-multiselect`,5),W0(),Zg(),Jc(9,`po-radio-group`,6),W0(),Zg()(),Jc(10,`div`,2)(11,`po-button`,7),vt$1(`p-click`,function(){U_(c);let p=sk(14);return i.updateEmployeesVacations(),H_(p.open())}),Zg(),Jc(12,`po-button`,8),vt$1(`p-click`,function(){return i.clean()}),Zg()()(),Jc(13,`po-modal`,9,0)(15,`div`,2),_u(16,`po-info`,10),qk(17,`date`),_u(18,`po-info`,11),qk(19,`date`),_u(20,`po-info`,12),Zg(),_u(21,`po-divider`),Jc(22,`div`,2),_u(23,`po-info`,13),Zg()()}a&2&&(Rb(`formGroup`,i.formCollectiveVacations),Ig(5),Y0(),Ig(),Rb(`p-min-date`,i.getRangeFinalPeriod()),Y0(),Ig(2),Rb(`p-auto-height`,!0)(`p-options`,i.employees)(`p-required`,!0),Y0(),Ig(),Rb(`p-options`,i.daysOptions)(`p-columns`,3),Y0(),Ig(2),Rb(`p-disabled`,i.formCollectiveVacations.invalid),Ig(5),Rb(`p-value`,Xk(17,12,i.initialPeriod,`longDate`,`+0000`)),Ig(2),Rb(`p-value`,Xk(19,16,i.finalPeriod,`longDate`,`+0000`)),Ig(2),Rb(`p-value`,i.days),Ig(3),Rb(`p-value`,i.nameEmployeesVacations))},dependencies:[NZ,TZ,RZ,XL,o1,oi,Nf,tie,DP,Zte,Joe,ia,fF],encapsulation:2,changeDetection:1})}return o})();var nt=o=>({"docs-sample-code-tabs":o});var Fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect - Vacation Reactive Form`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-multiselect-vacation-reactive-form`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,nt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,qe],encapsulation:2,changeDetection:1})}return o})();function ot(o,K){o&1&&_u(0,`po-tag`,11),o&2&&Rb(`p-icon`,!0)}function lt(o,K){o&1&&_u(0,`po-tag`,12),o&2&&Rb(`p-icon`,!0)}function at(o,K){o&1&&_u(0,`po-tag`,13),o&2&&Rb(`p-icon`,!0)}function rt(o,K){if(o&1&&(Jc(0,`div`,0)(1,`div`,7)(2,`div`,8),Tk(3),Zg()(),Jc(4,`div`,9)(5,`div`,10),VO(6,ot,1,1,`po-tag`,11),VO(7,lt,1,1,`po-tag`,12),VO(8,at,1,1,`po-tag`,13),Zg()()()),o&2){let s=K.$implicit;Ig(3),Gb(s.label),Ig(3),BO(s.admin?6:-1),Ig(),BO(s.access?7:-1),Ig(),BO(!s.admin&&!s.access?8:-1)}}var Be=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-select`,1),W0(),Kb(`ngModelChange`,function(d){return Ak(i.employee,d)||(i.employee=d),d}),Zg(),Jc(2,`po-select`,2),W0(),Kb(`ngModelChange`,function(d){return Ak(i.typeAccess,d)||(i.typeAccess=d),d}),Zg(),Jc(3,`div`,3)(4,`po-button`,4),vt$1(`p-click`,function(){return i.changeAccess()}),Zg()(),Jc(5,`po-multiselect`,5),Db(6,rt,9,4,`ng-template`,6),Zg()()),a&2&&(Ig(),Rb(`p-options`,i.employees),Yb(`ngModel`,i.employee),Y0(),Ig(),Rb(`p-options`,i.typeAccessValue),Yb(`ngModel`,i.typeAccess),Y0(),Ig(2),Rb(`p-disabled`,!i.employee||!i.typeAccess),Ig(),Rb(`p-options`,i.options)(`p-hide-select-all`,!0))},dependencies:[TZ,JL,oi,DP,ioe,Koe,Ss],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return o})();var st=o=>({"docs-sample-code-tabs":o});var We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect - Template`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styleUrls: ['./sample-po-multiselect-template.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.containerFlex {
  display: flex;
  align-items: center;
}

.containerFlexTag {
  display: flex;
  gap: 2px;
  flex-direction: column;
}

.containerButton {
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-multiselect-template`),Zg(),_u(29,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,st,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Be],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{http=p(kI);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(Y(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(Y(a=>a.items))}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ze=(()=>{class o{samplePoMultiselectHeroesService=p(me);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[Me([me])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-multiselect`,1),W0(),Kb(`ngModelChange`,function(d){return Ak(i.multiselect,d)||(i.multiselect=d),d}),vt$1(`p-change`,function(d){return i.changeOptions(d)}),Zg(),Jc(2,`po-container`,2),_u(3,`po-table`,3),Zg()()),a&2&&(Ig(),Yb(`ngModel`,i.multiselect),Rb(`p-filter-service`,i.filterService)(`p-debounce-time`,i.debounce),Y0(),Ig(2),Rb(`p-columns`,i.columns)(`p-items`,i.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[TZ,JL,Fc,DP,q4],encapsulation:2,changeDetection:1})}return o})();var ct=o=>({"docs-sample-code-tabs":o});var Ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect - Heroes - using API`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-multiselect-heroes`),Zg(),_u(27,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ct,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ze],encapsulation:2,changeDetection:1})}return o})();var Ie=(()=>{class o{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`po-select`,2),W0(),Kb(`ngModelChange`,function(d){return Ak(i.fieldLabel,d)||(i.fieldLabel=d),d}),vt$1(`p-change`,function(d){return i.onChange(d)}),Zg(),Jc(3,`po-select`,3),W0(),Kb(`ngModelChange`,function(d){return Ak(i.fieldValue,d)||(i.fieldValue=d),d}),vt$1(`p-change`,function(d){return i.onChange(d)}),Zg()(),Jc(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),W0(),Kb(`ngModelChange`,function(d){return Ak(i.company,d)||(i.company=d),d}),Zg()(),Jc(7,`div`,0),_u(8,`po-info`,5),Zg()()()),a&2&&(Ig(2),Rb(`p-options`,i.optionsSelect),Yb(`ngModel`,i.fieldLabel),Y0(),Ig(),Rb(`p-options`,i.optionsSelect),Yb(`ngModel`,i.fieldValue),Y0(),Ig(3),Rb(`p-options`,i.options)(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel),Yb(`ngModel`,i.company),Y0(),Ig(2),Rb(`p-value`,i.company))},dependencies:[TZ,JL,DP,Koe,Joe],encapsulation:2,changeDetection:1})}return o})();var Et=o=>({"docs-sample-code-tabs":o});var He=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Multiselect - Array Any`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-multiselect-any-array`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Et,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ie],encapsulation:2,changeDetection:1})}return o})();var je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1546,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoMultiselectComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),Zg(),Jc(24,`p`),Tk(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),Zg(),Jc(26,`p`),Tk(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),Zg(),Jc(28,`p`),Tk(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Jc(30,`code`),Tk(31,`p-filter-service`),Zg(),Tk(32,`.`),Zg(),Jc(33,`h4`),Tk(34,`Boas práticas`),Zg(),Jc(35,`ul`)(36,`li`),Tk(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),Zg(),Jc(38,`li`),Tk(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),Zg()(),Jc(40,`h4`),Tk(41,`Acessibilidade tratada no componente`),Zg(),Jc(42,`p`),Tk(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(44,`ul`)(45,`li`),Tk(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),Zg(),Jc(47,`li`),Tk(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),Zg(),Jc(49,`li`),Tk(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),Zg(),Jc(51,`li`),Tk(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),Zg(),Jc(53,`li`),Tk(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),Zg()(),Jc(55,`h4`),Tk(56,`Tokens customizáveis`),Zg(),Jc(57,`p`),Tk(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(59,`blockquote`)(60,`p`),Tk(61,`Para maiores informações, acesse o guia `),Jc(62,`a`,6),Tk(63,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(64,`.`),Zg()(),Jc(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),Tk(69,`Propriedade`),Zg(),Jc(70,`th`),Tk(71,`Descrição`),Zg(),Jc(72,`th`),Tk(73,`Valor Padrão`),Zg()()(),Jc(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),Tk(78,`Default Values`),Zg()(),_u(79,`td`)(80,`td`),Zg(),Jc(81,`tr`)(82,`td`)(83,`code`),Tk(84,`--font-family`),Zg()(),Jc(85,`td`),Tk(86,`Família tipográfica usada`),Zg(),Jc(87,`td`)(88,`code`),Tk(89,`var(--font-family-theme)`),Zg()()(),Jc(90,`tr`)(91,`td`)(92,`code`),Tk(93,`--font-size`),Zg()(),Jc(94,`td`),Tk(95,`Tamanho da fonte`),Zg(),Jc(96,`td`)(97,`code`),Tk(98,`var(--font-size-default)`),Zg()()(),Jc(99,`tr`)(100,`td`)(101,`code`),Tk(102,`--text-color-placeholder`),Zg(),Tk(103,` \xA0`),Zg(),Jc(104,`td`),Tk(105,`Cor do texto do placeholder`),Zg(),Jc(106,`td`)(107,`code`),Tk(108,`var(--color-action-disabled)`),Zg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Tk(112,`--color`),Zg()(),Jc(113,`td`),Tk(114,`Cor principal do multiselect`),Zg(),Jc(115,`td`)(116,`code`),Tk(117,`var(--color-neutral-dark-70)`),Zg()()(),Jc(118,`tr`)(119,`td`)(120,`code`),Tk(121,`--background`),Zg()(),Jc(122,`td`),Tk(123,`Cor de background`),Zg(),Jc(124,`td`)(125,`code`),Tk(126,`var(--color-neutral-light-05)`),Zg()()(),Jc(127,`tr`)(128,`td`)(129,`code`),Tk(130,`--field-container-title-justify`),Zg()(),Jc(131,`td`),Tk(132,`Alinhamento horizontal do título (`),Jc(133,`code`),Tk(134,`justify-content`),Zg(),Tk(135,`)`),Zg(),Jc(136,`td`)(137,`code`),Tk(138,`space-between`),Zg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Tk(142,`--field-container-title-flex`),Zg()(),Jc(143,`td`),Tk(144,`Flex do título (`),Jc(145,`code`),Tk(146,`flex`),Zg(),Tk(147,`)`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`1 auto`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`strong`),Tk(154,`Hover`),Zg()(),_u(155,`td`)(156,`td`),Zg(),Jc(157,`tr`)(158,`td`)(159,`code`),Tk(160,`--color-hover`),Zg()(),Jc(161,`td`),Tk(162,`Cor principal no estado hover`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`var(--color-action-hover)`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--background-hover`),Zg()(),Jc(170,`td`),Tk(171,`Cor de background no estado hover`),Zg(),Jc(172,`td`)(173,`code`),Tk(174,`var(--color-brand-01-lighter)`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`strong`),Tk(178,`Focused`),Zg()(),_u(179,`td`)(180,`td`),Zg(),Jc(181,`tr`)(182,`td`)(183,`code`),Tk(184,`--color-focused`),Zg()(),Jc(185,`td`),Tk(186,`Cor principal no estado de focus`),Zg(),Jc(187,`td`)(188,`code`),Tk(189,`var(--color-action-default)`),Zg()()(),Jc(190,`tr`)(191,`td`)(192,`code`),Tk(193,`--outline-color-focused`),Zg(),Tk(194,` \xA0`),Zg(),Jc(195,`td`),Tk(196,`Cor do outline do estado de focus`),Zg(),Jc(197,`td`)(198,`code`),Tk(199,`var(--color-action-focus)`),Zg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Tk(203,`Disabled`),Zg()(),_u(204,`td`)(205,`td`),Zg(),Jc(206,`tr`)(207,`td`)(208,`code`),Tk(209,`--color-disabled`),Zg()(),Jc(210,`td`),Tk(211,`Cor principal no estado disabled`),Zg(),Jc(212,`td`)(213,`code`),Tk(214,`var(--color-action-disabled)`),Zg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Tk(218,`--background-disabled`),Zg(),Tk(219,` \xA0`),Zg(),Jc(220,`td`),Tk(221,`Cor de background no estado disabled \xA0`),Zg(),Jc(222,`td`)(223,`code`),Tk(224,`var(--color-neutral-light-20)`),Zg()()(),Jc(225,`tr`)(226,`td`)(227,`strong`),Tk(228,`Error`),Zg()(),_u(229,`td`)(230,`td`),Zg(),Jc(231,`tr`)(232,`td`)(233,`code`),Tk(234,`--color-error`),Zg()(),Jc(235,`td`),Tk(236,`Cor principal no estado error`),Zg(),Jc(237,`td`)(238,`code`),Tk(239,`var(--color-feedback-negative-base)`),Zg()()()()()(),Jc(240,`div`,7)(241,`h4`,8),Tk(242,`Seletor`),Zg(),Jc(243,`pre`,9),Tk(244,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),Zg()(),Jc(245,`h4`,10),Tk(246,`Propriedades`),Zg(),Jc(247,`table`,11)(248,`tr`,12)(249,`th`,13),Tk(250,`Nome`),Zg(),Jc(251,`th`,13),Tk(252,`Tipo`),Zg(),Jc(253,`th`,13),Tk(254,`Padrão`),Zg(),Jc(255,`th`,13),Tk(256,`Descrição`),Zg()(),Jc(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),Tk(261,` (p-additional-help)`),_u(262,`br`),Zg()(),Jc(263,`div`,18),Tk(264,`Deprecated`),Zg()(),Jc(265,`td`,19)(266,`code`,20),Tk(267,`EventEmitter`),Zg()(),Jc(268,`td`,21),Tk(269,`-`),Zg(),Jc(270,`td`,22)(271,`em`)(272,`strong`),Tk(273,`(opcional)`),Zg()(),Jc(274,`p`),Tk(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(276,`blockquote`)(277,`p`),Tk(278,`Essa propriedade está `),Jc(279,`strong`),Tk(280,`depreciada`),Zg(),Tk(281,` e será removida na versão `),Jc(282,`code`),Tk(283,`23.x.x`),Zg(),Tk(284,`. Recomendamos utilizar a propriedade `),Jc(285,`code`),Tk(286,`p-helper`),Zg(),Tk(287,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(288,`tr`,14)(289,`td`,15)(290,`div`,23)(291,`span`,24),Tk(292,` p-additional-help-tooltip`),_u(293,`br`),Zg()(),Jc(294,`div`,18),Tk(295,`Deprecated`),Zg()(),Jc(296,`td`,19)(297,`code`,25),Tk(298,`string`),Zg()(),Jc(299,`td`,21),Tk(300,`-`),Zg(),Jc(301,`td`,22)(302,`em`)(303,`strong`),Tk(304,`(opcional)`),Zg()(),Jc(305,`p`),Tk(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(307,`code`),Tk(308,`po-helper`),Zg(),Tk(309,`.
`),Jc(310,`strong`),Tk(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(312,`blockquote`)(313,`p`),Tk(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(315,`blockquote`)(316,`p`),Tk(317,`Essa propriedade está `),Jc(318,`strong`),Tk(319,`depreciada`),Zg(),Tk(320,` e será removida na versão `),Jc(321,`code`),Tk(322,`23.x.x`),Zg(),Tk(323,`. Recomendamos utilizar a propriedade `),Jc(324,`code`),Tk(325,`p-helper`),Zg(),Tk(326,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(327,`tr`,14)(328,`td`,15)(329,`div`,23)(330,`span`,24),Tk(331,` p-append-in-body`),_u(332,`br`),Zg()()(),Jc(333,`td`,19)(334,`code`,26),Tk(335,`boolean`),Zg()(),Jc(336,`td`,21)(337,`p`)(338,`code`),Tk(339,`false`),Zg()()(),Jc(340,`td`,22)(341,`em`)(342,`strong`),Tk(343,`(opcional)`),Zg()(),Jc(344,`p`),Tk(345,`Define que o `),Jc(346,`code`),Tk(347,`listbox`),Zg(),Tk(348,` e/ou popover (`),Jc(349,`code`),Tk(350,`p-helper`),Zg(),Tk(351,` e/ou `),Jc(352,`code`),Tk(353,`p-error-limit`),Zg(),Tk(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(355,`blockquote`)(356,`p`),Tk(357,`Quando utilizado com `),Jc(358,`code`),Tk(359,`p-helper`),Zg(),Tk(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),Tk(365,` p-auto-focus`),_u(366,`br`),Zg()()(),Jc(367,`td`,19)(368,`code`,26),Tk(369,`boolean`),Zg()(),Jc(370,`td`,21)(371,`p`)(372,`code`),Tk(373,`false`),Zg()()(),Jc(374,`td`,22)(375,`em`)(376,`strong`),Tk(377,`(opcional)`),Zg()(),Jc(378,`p`),Tk(379,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(380,`blockquote`)(381,`p`),Tk(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(383,`tr`,14)(384,`td`,15)(385,`div`,23)(386,`span`,24),Tk(387,` p-auto-height`),_u(388,`br`),Zg()()(),Jc(389,`td`,19)(390,`code`,26),Tk(391,`boolean`),Zg()(),Jc(392,`td`,21)(393,`p`)(394,`code`),Tk(395,`false`),Zg()()(),Jc(396,`td`,22)(397,`em`)(398,`strong`),Tk(399,`(opcional)`),Zg()(),Jc(400,`p`),Tk(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Zg(),Jc(402,`blockquote`)(403,`p`),Tk(404,`O valor padrão será `),Jc(405,`code`),Tk(406,`true`),Zg(),Tk(407,` quando houver serviço (`),Jc(408,`code`),Tk(409,`p-filter-service`),Zg(),Tk(410,`).`),Zg()()()(),Jc(411,`tr`,14)(412,`td`,15)(413,`div`,16)(414,`span`,17),Tk(415,` (p-blur)`),_u(416,`br`),Zg()()(),Jc(417,`td`,19)(418,`code`,20),Tk(419,`EventEmitter`),Zg()(),Jc(420,`td`,21),Tk(421,`-`),Zg(),Jc(422,`td`,22)(423,`em`)(424,`strong`),Tk(425,`(opcional)`),Zg()(),Jc(426,`p`),Tk(427,`Evento disparado ao sair do campo.`),Zg()()(),Jc(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),Tk(432,` (p-change)`),_u(433,`br`),Zg()()(),Jc(434,`td`,19)(435,`code`,20),Tk(436,`EventEmitter`),Zg()(),Jc(437,`td`,21),Tk(438,`-`),Zg(),Jc(439,`td`,22)(440,`em`)(441,`strong`),Tk(442,`(opcional)`),Zg()(),Jc(443,`p`),Tk(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),Zg()()(),Jc(445,`tr`,14)(446,`td`,15)(447,`div`,16)(448,`span`,17),Tk(449,` (p-change-model)`),_u(450,`br`),Zg()()(),Jc(451,`td`,19)(452,`code`,20),Tk(453,`EventEmitter`),Zg()(),Jc(454,`td`,21),Tk(455,`-`),Zg(),Jc(456,`td`,22)(457,`em`)(458,`strong`),Tk(459,`(opcional)`),Zg()(),Jc(460,`p`),Tk(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(462,`code`),Tk(463,`setValue`),Zg(),Tk(464,`, `),Jc(465,`code`),Tk(466,`patchValue`),Zg(),Tk(467,`, carregamento assíncrono).`),Zg(),Jc(468,`p`),Tk(469,`Diferentemente do `),Jc(470,`code`),Tk(471,`p-change`),Zg(),Tk(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(473,`code`),Tk(474,`p-change-model`),Zg(),Tk(475,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(476,`p`),Tk(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(478,`tr`,14)(479,`td`,15)(480,`div`,23)(481,`span`,24),Tk(482,` p-compact-label`),_u(483,`br`),Zg()()(),Jc(484,`td`,19)(485,`code`,26),Tk(486,`boolean`),Zg()(),Jc(487,`td`,21)(488,`p`)(489,`code`),Tk(490,`false`),Zg()()(),Jc(491,`td`,22)(492,`em`)(493,`strong`),Tk(494,`(opcional)`),Zg()(),Jc(495,`p`),Tk(496,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(497,`p`),Tk(498,`Quando habilitado (`),Jc(499,`code`),Tk(500,`true`),Zg(),Tk(501,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(502,`ul`)(503,`li`)(504,`code`),Tk(505,`po-label`),Zg()(),Jc(506,`li`)(507,`code`),Tk(508,`p-requirement (showRequired)`),Zg()(),Jc(509,`li`)(510,`code`),Tk(511,`po-helper`),Zg()()(),Jc(512,`p`),Tk(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(514,`p`),Tk(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(516,`ul`)(517,`li`)(518,`code`),Tk(519,`--field-container-title-justify`),Zg()(),Jc(520,`li`)(521,`code`),Tk(522,`--field-container-title-flex`),Zg()()(),Jc(523,`p`),Tk(524,`Exemplo:`),Zg(),Jc(525,`pre`)(526,`code`),Tk(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(528,`p`),Tk(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(530,`tr`,14)(531,`td`,15)(532,`div`,23)(533,`span`,24),Tk(534,` p-debounce-time`),_u(535,`br`),Zg()()(),Jc(536,`td`,19)(537,`code`,27),Tk(538,`number`),Zg()(),Jc(539,`td`,21)(540,`p`)(541,`code`),Tk(542,`400`),Zg()()(),Jc(543,`td`,22)(544,`em`)(545,`strong`),Tk(546,`(opcional)`),Zg()(),Jc(547,`p`),Tk(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),Zg(),Jc(549,`blockquote`)(550,`p`),Tk(551,`Será utilizada apenas quando houver serviço (`),Jc(552,`code`),Tk(553,`p-filter-service`),Zg(),Tk(554,`) e somente será aceito valor maior do que `),Jc(555,`em`),Tk(556,`zero`),Zg(),Tk(557,`.`),Zg()()()(),Jc(558,`tr`,14)(559,`td`,15)(560,`div`,23)(561,`span`,24),Tk(562,` p-disabled`),_u(563,`br`),Zg()()(),Jc(564,`td`,19)(565,`code`,26),Tk(566,`boolean`),Zg()(),Jc(567,`td`,21)(568,`p`)(569,`code`),Tk(570,`false`),Zg()()(),Jc(571,`td`,22)(572,`em`)(573,`strong`),Tk(574,`(opcional)`),Zg()(),Jc(575,`p`),Tk(576,`Indica que o campo será desabilitado.`),Zg()()(),Jc(577,`tr`,14)(578,`td`,15)(579,`div`,23)(580,`span`,24),Tk(581,` p-error-limit`),_u(582,`br`),Zg()()(),Jc(583,`td`,19)(584,`code`,26),Tk(585,`boolean`),Zg()(),Jc(586,`td`,21)(587,`p`)(588,`code`),Tk(589,`false`),Zg()()(),Jc(590,`td`,22)(591,`em`)(592,`strong`),Tk(593,`(opcional)`),Zg()(),Jc(594,`p`),Tk(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(596,`blockquote`)(597,`p`),Tk(598,`Caso essa propriedade seja definida como `),Jc(599,`code`),Tk(600,`true`),Zg(),Tk(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(602,`tr`,14)(603,`td`,15)(604,`div`,23)(605,`span`,24),Tk(606,` p-field-error-message`),_u(607,`br`),Zg()()(),Jc(608,`td`,19)(609,`code`,25),Tk(610,`string`),Zg()(),Jc(611,`td`,21),Tk(612,`-`),Zg(),Jc(613,`td`,22)(614,`em`)(615,`strong`),Tk(616,`(opcional)`),Zg()(),Jc(617,`p`),Tk(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(619,`blockquote`)(620,`p`),Tk(621,`Necessário que a propriedade `),Jc(622,`code`),Tk(623,`p-required`),Zg(),Tk(624,` esteja habilitada.`),Zg()()()(),Jc(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),Tk(629,` p-field-label`),_u(630,`br`),Zg()()(),Jc(631,`td`,19)(632,`code`,25),Tk(633,`string`),Zg()(),Jc(634,`td`,21)(635,`p`)(636,`code`),Tk(637,`label`),Zg()()(),Jc(638,`td`,22)(639,`em`)(640,`strong`),Tk(641,`(opcional)`),Zg()(),Jc(642,`p`),Tk(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(644,`code`),Tk(645,`p-options`),Zg(),Tk(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Zg(),Jc(647,`p`),Tk(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Jc(649,`code`),Tk(650,`PoMultiSelectOption`),Zg(),Tk(651,`.`),Zg()()(),Jc(652,`tr`,14)(653,`td`,15)(654,`div`,23)(655,`span`,24),Tk(656,` p-field-value`),_u(657,`br`),Zg()()(),Jc(658,`td`,19)(659,`code`,25),Tk(660,`string`),Zg()(),Jc(661,`td`,21)(662,`p`)(663,`code`),Tk(664,`value`),Zg()()(),Jc(665,`td`,22)(666,`em`)(667,`strong`),Tk(668,`(opcional)`),Zg()(),Jc(669,`p`),Tk(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(671,`code`),Tk(672,`p-options`),Zg(),Tk(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),Zg(),Jc(674,`p`),Tk(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Jc(676,`code`),Tk(677,`PoMultiSelectOption`),Zg(),Tk(678,`.`),Zg()()(),Jc(679,`tr`,14)(680,`td`,15)(681,`div`,23)(682,`span`,24),Tk(683,` p-filter-mode`),_u(684,`br`),Zg()()(),Jc(685,`td`,19)(686,`code`,28),Tk(687,`PoMultiselectFilterMode`),Zg()(),Jc(688,`td`,21)(689,`p`)(690,`code`),Tk(691,`startsWith`),Zg()()(),Jc(692,`td`,22)(693,`em`)(694,`strong`),Tk(695,`(opcional)`),Zg()(),Jc(696,`p`),Tk(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),Zg()()(),Jc(698,`tr`,14)(699,`td`,15)(700,`div`,23)(701,`span`,24),Tk(702,` p-filter-service`),_u(703,`br`),Zg()()(),Jc(704,`td`,19)(705,`code`,25),Tk(706,`string `),Zg(),Jc(707,`code`,29),Tk(708,` PoMultiselectFilter`),Zg()(),Jc(709,`td`,21),Tk(710,`-`),Zg(),Jc(711,`td`,22)(712,`em`)(713,`strong`),Tk(714,`(opcional)`),Zg()(),Jc(715,`p`),Tk(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),Zg(),Jc(717,`p`),Tk(718,`Também existe a possibilidade de informar um serviço implementando a interface `),Jc(719,`code`),Tk(720,`PoMultiselectFilter`),Zg(),Tk(721,`.`),Zg(),Jc(722,`p`),Tk(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Jc(724,`a`,30),Tk(725,`API PO UI`),Zg(),Tk(726,` e utilizar as propriedades `),Jc(727,`code`),Tk(728,`p-field-label`),Zg(),Tk(729,` e `),Jc(730,`code`),Tk(731,`p-field-value`),Zg(),Tk(732,` para a construção da lista de itens.`),Zg(),Jc(733,`p`),Tk(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Zg(),Jc(735,`pre`)(736,`code`),Tk(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),Zg()(),Jc(738,`p`),Tk(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),Zg(),Jc(740,`pre`)(741,`code`),Tk(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),Zg()()()(),Jc(743,`tr`,14)(744,`td`,15)(745,`div`,23)(746,`span`,24),Tk(747,` p-help`),_u(748,`br`),Zg()()(),Jc(749,`td`,19)(750,`code`,25),Tk(751,`string`),Zg()(),Jc(752,`td`,21),Tk(753,`-`),Zg(),Jc(754,`td`,22)(755,`em`)(756,`strong`),Tk(757,`(opcional)`),Zg()(),Jc(758,`p`),Tk(759,`Texto de apoio para o campo.`),Zg()()(),Jc(760,`tr`,14)(761,`td`,15)(762,`div`,23)(763,`span`,24),Tk(764,` p-hide-search`),_u(765,`br`),Zg()()(),Jc(766,`td`,19)(767,`code`,26),Tk(768,`boolean`),Zg()(),Jc(769,`td`,21)(770,`p`)(771,`code`),Tk(772,`false`),Zg()()(),Jc(773,`td`,22)(774,`em`)(775,`strong`),Tk(776,`(opcional)`),Zg()(),Jc(777,`p`),Tk(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),Zg()()(),Jc(779,`tr`,14)(780,`td`,15)(781,`div`,23)(782,`span`,24),Tk(783,` p-hide-select-all`),_u(784,`br`),Zg()()(),Jc(785,`td`,19)(786,`code`,26),Tk(787,`boolean`),Zg()(),Jc(788,`td`,21)(789,`p`)(790,`code`),Tk(791,`false`),Zg()()(),Jc(792,`td`,22)(793,`em`)(794,`strong`),Tk(795,`(opcional)`),Zg()(),Jc(796,`p`),Tk(797,`Indica se o campo "Selecionar todos" será escondido.`),Zg()()(),Jc(798,`tr`,14)(799,`td`,15)(800,`div`,16)(801,`span`,17),Tk(802,` (p-keydown)`),_u(803,`br`),Zg()()(),Jc(804,`td`,19)(805,`code`,20),Tk(806,`EventEmitter`),Zg()(),Jc(807,`td`,21),Tk(808,`-`),Zg(),Jc(809,`td`,22)(810,`em`)(811,`strong`),Tk(812,`(opcional)`),Zg()(),Jc(813,`p`),Tk(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(815,`code`),Tk(816,`KeyboardEvent`),Zg(),Tk(817,` com informações sobre a tecla.`),Zg()()(),Jc(818,`tr`,14)(819,`td`,15)(820,`div`,23)(821,`span`,24),Tk(822,` p-label`),_u(823,`br`),Zg()()(),Jc(824,`td`,19)(825,`code`,25),Tk(826,`string`),Zg()(),Jc(827,`td`,21),Tk(828,`-`),Zg(),Jc(829,`td`,22)(830,`em`)(831,`strong`),Tk(832,`(opcional)`),Zg()(),Jc(833,`p`),Tk(834,`Label no componente.`),Zg()()(),Jc(835,`tr`,14)(836,`td`,15)(837,`div`,23)(838,`span`,24),Tk(839,` p-label-text-wrap`),_u(840,`br`),Zg()()(),Jc(841,`td`,19)(842,`code`,26),Tk(843,`boolean`),Zg()(),Jc(844,`td`,21)(845,`p`)(846,`code`),Tk(847,`false`),Zg()()(),Jc(848,`td`,22)(849,`em`)(850,`strong`),Tk(851,`(opcional)`),Zg()(),Jc(852,`p`),Tk(853,`Habilita a quebra automática do texto da propriedade `),Jc(854,`code`),Tk(855,`p-label`),Zg(),Tk(856,`. Quando `),Jc(857,`code`),Tk(858,`p-label-text-wrap`),Zg(),Tk(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(860,`tr`,14)(861,`td`,15)(862,`div`,23)(863,`span`,24),Tk(864,` p-listbox-control-position`),_u(865,`br`),Zg()()(),Jc(866,`td`,19)(867,`code`,31),Tk(868,`'top' `),Zg(),Jc(869,`code`,32),Tk(870,` 'bottom'`),Zg()(),Jc(871,`td`,21)(872,`p`)(873,`code`),Tk(874,`bottom`),Zg()()(),Jc(875,`td`,22)(876,`em`)(877,`strong`),Tk(878,`(opcional)`),Zg()(),Jc(879,`p`),Tk(880,`Define a direção preferida para exibição do `),Jc(881,`code`),Tk(882,`listbox`),Zg(),Tk(883,` em relação ao campo (`),Jc(884,`code`),Tk(885,`top`),Zg(),Tk(886,` ou `),Jc(887,`code`),Tk(888,`bottom`),Zg(),Tk(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Zg()()(),Jc(890,`tr`,14)(891,`td`,15)(892,`div`,23)(893,`span`,24),Tk(894,` p-literals`),_u(895,`br`),Zg()()(),Jc(896,`td`,19)(897,`code`,33),Tk(898,`PoMultiselectLiterals`),Zg()(),Jc(899,`td`,21),Tk(900,`-`),Zg(),Jc(901,`td`,22)(902,`em`)(903,`strong`),Tk(904,`(opcional)`),Zg()(),Jc(905,`p`),Tk(906,`Objeto com as literais usadas no `),Jc(907,`code`),Tk(908,`po-multiselect`),Zg(),Tk(909,`.`),Zg(),Jc(910,`p`),Tk(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(912,`pre`)(913,`code`),Tk(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),Zg()(),Jc(915,`p`),Tk(916,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(917,`pre`)(918,`code`),Tk(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),Zg()(),Jc(920,`p`),Tk(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Zg(),Jc(922,`pre`)(923,`code`),Tk(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),Zg()(),Jc(925,`blockquote`)(926,`p`),Tk(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(928,`a`,34)(929,`code`),Tk(930,`PoI18nService`),Zg()(),Tk(931,` ou do browser.`),Zg()()()(),Jc(932,`tr`,14)(933,`td`,15)(934,`div`,23)(935,`span`,24),Tk(936,` p-loading`),_u(937,`br`),Zg()()(),Jc(938,`td`,19)(939,`code`,26),Tk(940,`boolean`),Zg()(),Jc(941,`td`,21)(942,`p`)(943,`code`),Tk(944,`false`),Zg()()(),Jc(945,`td`,22)(946,`em`)(947,`strong`),Tk(948,`(opcional)`),Zg()(),Jc(949,`p`),Tk(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(951,`tr`,14)(952,`td`,15)(953,`div`,23)(954,`span`,24),Tk(955,` name`),_u(956,`br`),Zg()()(),Jc(957,`td`,19)(958,`code`,25),Tk(959,`string`),Zg()(),Jc(960,`td`,21),Tk(961,`-`),Zg(),Jc(962,`td`,22)(963,`p`),Tk(964,`Nome do componente.`),Zg()()(),Jc(965,`tr`,14)(966,`td`,15)(967,`div`,23)(968,`span`,24),Tk(969,` p-optional`),_u(970,`br`),Zg()()(),Jc(971,`td`,19)(972,`code`,26),Tk(973,`boolean`),Zg()(),Jc(974,`td`,21)(975,`p`)(976,`code`),Tk(977,`false`),Zg()()(),Jc(978,`td`,22)(979,`em`)(980,`strong`),Tk(981,`(opcional)`),Zg()(),Jc(982,`p`),Tk(983,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(984,`blockquote`)(985,`p`),Tk(986,`Não será exibida a indicação se:`),Zg()(),Jc(987,`ul`)(988,`li`),Tk(989,`O campo conter `),Jc(990,`code`),Tk(991,`p-required`),Zg(),Tk(992,`;`),Zg(),Jc(993,`li`),Tk(994,`Não possuir `),Jc(995,`code`),Tk(996,`p-help`),Zg(),Tk(997,` e/ou `),Jc(998,`code`),Tk(999,`p-label`),Zg(),Tk(1e3,`.`),Zg()()()(),Jc(1001,`tr`,14)(1002,`td`,15)(1003,`div`,23)(1004,`span`,24),Tk(1005,` p-options`),_u(1006,`br`),Zg()()(),Jc(1007,`td`,19)(1008,`code`,35),Tk(1009,`Array<PoMultiselectOption `),Zg(),Jc(1010,`code`,36),Tk(1011,` any>`),Zg()(),Jc(1012,`td`,21),Tk(1013,`-`),Zg(),Jc(1014,`td`,22)(1015,`p`),Tk(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),Zg(),Jc(1017,`blockquote`)(1018,`p`),Tk(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Zg()(),Jc(1020,`pre`)(1021,`code`),Tk(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Zg()(),Jc(1023,`blockquote`)(1024,`p`),Tk(1025,`A lista pode ser definida utilizando um array com o valor representando `),Jc(1026,`code`),Tk(1027,`value`),Zg(),Tk(1028,` e `),Jc(1029,`code`),Tk(1030,`label`),Zg(),Tk(1031,` das seguintes formas:`),Zg()(),Jc(1032,`pre`)(1033,`code`),Tk(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),Zg()(),Jc(1035,`pre`)(1036,`code`),Tk(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),Zg()(),Jc(1038,`ul`)(1039,`li`),Tk(1040,`Aconselha-se utilizar valores distintos no `),Jc(1041,`code`),Tk(1042,`label`),Zg(),Tk(1043,` e `),Jc(1044,`code`),Tk(1045,`value`),Zg(),Tk(1046,` dos itens.`),Zg()()()(),Jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),Tk(1051,` p-placeholder`),_u(1052,`br`),Zg()()(),Jc(1053,`td`,19)(1054,`code`,25),Tk(1055,`string`),Zg()(),Jc(1056,`td`,21),Tk(1057,`-`),Zg(),Jc(1058,`td`,22)(1059,`em`)(1060,`strong`),Tk(1061,`(opcional)`),Zg()(),Jc(1062,`p`),Tk(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),Zg()()(),Jc(1064,`tr`,14)(1065,`td`,15)(1066,`div`,23)(1067,`span`,24),Tk(1068,` p-placeholder-search`),_u(1069,`br`),Zg()()(),Jc(1070,`td`,19)(1071,`code`,25),Tk(1072,`string`),Zg()(),Jc(1073,`td`,21)(1074,`p`)(1075,`code`),Tk(1076,`Buscar`),Zg()()(),Jc(1077,`td`,22)(1078,`em`)(1079,`strong`),Tk(1080,`(opcional)`),Zg()(),Jc(1081,`p`),Tk(1082,`Placeholder do campo de pesquisa.`),Zg(),Jc(1083,`blockquote`)(1084,`p`),Tk(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Zg()()()(),Jc(1086,`tr`,14)(1087,`td`,15)(1088,`div`,23)(1089,`span`,24),Tk(1090,` p-helper`),_u(1091,`br`),Zg()()(),Jc(1092,`td`,19)(1093,`code`,37),Tk(1094,`PoHelperOptions `),Zg(),Jc(1095,`code`,25),Tk(1096,` string`),Zg()(),Jc(1097,`td`,21),Tk(1098,`-`),Zg(),Jc(1099,`td`,22)(1100,`em`)(1101,`strong`),Tk(1102,`(opcional)`),Zg()(),Jc(1103,`p`),Tk(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1105,`code`),Tk(1106,`p-label`),Zg(),Tk(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1108,`code`),Tk(1109,`p-label`),Zg(),Tk(1110,`.`),Zg(),Jc(1111,`blockquote`)(1112,`p`),Tk(1113,`Para mais informações acesse: `),Jc(1114,`a`,38),Tk(1115,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1116,`.`),Zg()(),Jc(1117,`blockquote`)(1118,`p`),Tk(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1120,`code`),Tk(1121,`p-additional-help-tooltip`),Zg(),Tk(1122,` e `),Jc(1123,`code`),Tk(1124,`p-additional-help`),Zg(),Tk(1125,`) será ignorado.`),Zg()()()(),Jc(1126,`tr`,14)(1127,`td`,15)(1128,`div`,23)(1129,`span`,24),Tk(1130,` p-required`),_u(1131,`br`),Zg()()(),Jc(1132,`td`,19)(1133,`code`,26),Tk(1134,`boolean`),Zg()(),Jc(1135,`td`,21)(1136,`p`)(1137,`code`),Tk(1138,`false`),Zg()()(),Jc(1139,`td`,22)(1140,`em`)(1141,`strong`),Tk(1142,`(opcional)`),Zg()(),Jc(1143,`p`),Tk(1144,`Define que o campo será obrigatório.`),Zg(),Jc(1145,`blockquote`)(1146,`p`),Tk(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1148,`code`),Tk(1149,`(p-disabled)`),Zg(),Tk(1150,`.`),Zg()()()(),Jc(1151,`tr`,14)(1152,`td`,15)(1153,`div`,23)(1154,`span`,24),Tk(1155,` p-show-required`),_u(1156,`br`),Zg()()(),Jc(1157,`td`,19)(1158,`code`,26),Tk(1159,`boolean`),Zg()(),Jc(1160,`td`,21),Tk(1161,`-`),Zg(),Jc(1162,`td`,22)(1163,`p`),Tk(1164,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1165,`blockquote`)(1166,`p`),Tk(1167,`Não será exibida a indicação se:`),Zg()(),Jc(1168,`ul`)(1169,`li`),Tk(1170,`Não possuir `),Jc(1171,`code`),Tk(1172,`p-help`),Zg(),Tk(1173,` e/ou `),Jc(1174,`code`),Tk(1175,`p-label`),Zg(),Tk(1176,`.`),Zg()()()(),Jc(1177,`tr`,14)(1178,`td`,15)(1179,`div`,23)(1180,`span`,24),Tk(1181,` p-size`),_u(1182,`br`),Zg()()(),Jc(1183,`td`,19)(1184,`code`,25),Tk(1185,`string`),Zg()(),Jc(1186,`td`,21)(1187,`p`)(1188,`code`),Tk(1189,`medium`),Zg()()(),Jc(1190,`td`,22)(1191,`em`)(1192,`strong`),Tk(1193,`(opcional)`),Zg()(),Jc(1194,`p`),Tk(1195,`Define o tamanho do componente:`),Zg(),Jc(1196,`ul`)(1197,`li`)(1198,`code`),Tk(1199,`small`),Zg(),Tk(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1201,`li`)(1202,`code`),Tk(1203,`medium`),Zg(),Tk(1204,`: altura do input como 44px.`),Zg()(),Jc(1205,`blockquote`)(1206,`p`),Tk(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1208,`code`),Tk(1209,`medium`),Zg(),Tk(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1211,`a`,39),Tk(1212,`po-theme`),Zg(),Tk(1213,`.`),Zg()()()(),Jc(1214,`tr`,14)(1215,`td`,15)(1216,`div`,23)(1217,`span`,24),Tk(1218,` p-sort`),_u(1219,`br`),Zg()()(),Jc(1220,`td`,19)(1221,`code`,26),Tk(1222,`boolean`),Zg()(),Jc(1223,`td`,21)(1224,`p`)(1225,`code`),Tk(1226,`false`),Zg()()(),Jc(1227,`td`,22)(1228,`em`)(1229,`strong`),Tk(1230,`(opcional)`),Zg()(),Jc(1231,`p`),Tk(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),Zg()()()(),Jc(1233,`h3`,10),Tk(1234,`Métodos`),Zg(),Jc(1235,`table`,40)(1236,`tr`,14)(1237,`th`,41)(1238,`div`,23)(1239,`h4`)(1240,`span`,24),Tk(1241,` focus `),Zg()()()()(),Jc(1242,`tr`,22)(1243,`td`,22)(1244,`p`),Tk(1245,`Função que atribui foco ao componente.`),Zg(),Jc(1246,`p`),Tk(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1248,`pre`)(1249,`code`),Tk(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),Zg()()()()(),_u(1251,`br`),Jc(1252,`table`,40)(1253,`tr`,14)(1254,`th`,41)(1255,`div`,23)(1256,`h4`)(1257,`span`,24),Tk(1258,` showAdditionalHelp `),Zg()()()()(),Jc(1259,`tr`,22)(1260,`td`,22)(1261,`p`),Tk(1262,`Método que exibe `),Jc(1263,`code`),Tk(1264,`p-helper`),Zg(),Tk(1265,` ou executa a ação definida em `),Jc(1266,`code`),Tk(1267,`p-helper{eventOnClick}`),Zg(),Tk(1268,` ou em `),Jc(1269,`code`),Tk(1270,`p-additionalHelp`),Zg(),Tk(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1272,`code`),Tk(1273,`p-keydown`),Zg(),Tk(1274,`.`),Zg(),Jc(1275,`blockquote`)(1276,`p`),Tk(1277,`Exibe ou oculta o conteúdo do componente `),Jc(1278,`code`),Tk(1279,`po-helper`),Zg(),Tk(1280,` quando o componente estiver com foco.`),Zg()(),Jc(1281,`pre`)(1282,`code`),Tk(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),Zg()(),Jc(1284,`pre`)(1285,`code`),Tk(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1287,`br`),Jc(1288,`h3`),Tk(1289,`Interfaces`),Zg(),Jc(1290,`h4`,42)(1291,`code`,5),Tk(1292,`PoMultiselectFilter`),Zg()(),Jc(1293,`div`,2)(1294,`p`),Tk(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),Zg()(),Jc(1296,`h4`,10),Tk(1297,`Métodos`),Zg(),Jc(1298,`table`,40)(1299,`tr`,14)(1300,`th`,41)(1301,`div`,23)(1302,`h4`)(1303,`span`,24),Tk(1304,` getFilteredData `),Zg()()()()(),Jc(1305,`tr`,22)(1306,`td`,22)(1307,`p`),Tk(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Jc(1309,`code`),Tk(1310,`PoMultiselectOption`),Zg(),Tk(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),Zg()()()(),Jc(1312,`h5`)(1313,`b`),Tk(1314,`Parâmetros`),Zg()(),Jc(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),Tk(1318,`Nome`),Zg(),Jc(1319,`th`,13),Tk(1320,`Tipo`),Zg(),Jc(1321,`th`,13),Tk(1322,`Descrição`),Zg()(),Jc(1323,`tr`,14)(1324,`td`,15),Tk(1325,` params`),Zg(),Jc(1326,`td`,19)(1327,`code`,43),Tk(1328,` { property: string, value: string } `),Zg()(),Jc(1329,`td`,22)(1330,`p`),Tk(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Zg()()()(),_u(1332,`br`),Jc(1333,`table`,40)(1334,`tr`,14)(1335,`th`,41)(1336,`div`,23)(1337,`h4`)(1338,`span`,24),Tk(1339,` getObjectsByValues `),Zg()()()()(),Jc(1340,`tr`,22)(1341,`td`,22)(1342,`p`),Tk(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Jc(1344,`code`),Tk(1345,`PoMultiselectOption`),Zg(),Tk(1346,`, será informado por parâmetro valor a ser pesquisado.`),Zg()()()(),Jc(1347,`h5`)(1348,`b`),Tk(1349,`Parâmetros`),Zg()(),Jc(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),Tk(1353,`Nome`),Zg(),Jc(1354,`th`,13),Tk(1355,`Tipo`),Zg(),Jc(1356,`th`,13),Tk(1357,`Descrição`),Zg()(),Jc(1358,`tr`,14)(1359,`td`,15),Tk(1360,` values`),Zg(),Jc(1361,`td`,19)(1362,`code`,44),Tk(1363,` Array<string `),Zg(),Jc(1364,`code`,45),Tk(1365,` number> `),Zg()(),Jc(1366,`td`,22)(1367,`p`),Tk(1368,`Array com os valores a serem buscados.`),Zg()()()(),_u(1369,`br`),Jc(1370,`h4`,42)(1371,`code`,5),Tk(1372,`PoMultiselectLiterals`),Zg()(),Jc(1373,`div`,2)(1374,`p`),Tk(1375,`Interface para definição das literais usadas no `),Jc(1376,`code`),Tk(1377,`po-multiselect`),Zg(),Tk(1378,`.`),Zg()(),Jc(1379,`h4`,10),Tk(1380,`Propriedades`),Zg(),Jc(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),Tk(1384,`Nome`),Zg(),Jc(1385,`th`,13),Tk(1386,`Tipo`),Zg(),Jc(1387,`th`,13),Tk(1388,`Descrição`),Zg()(),Jc(1389,`tr`,14)(1390,`td`,15)(1391,`div`,23)(1392,`span`,24),Tk(1393,` noData`),_u(1394,`br`),Zg()()(),Jc(1395,`td`,19)(1396,`code`,25),Tk(1397,`string`),Zg()(),Jc(1398,`td`,22)(1399,`em`)(1400,`strong`),Tk(1401,`(opcional)`),Zg()(),Jc(1402,`p`),Tk(1403,`Texto exibido quando não houver dados encontrados na busca.`),Zg()()(),Jc(1404,`tr`,14)(1405,`td`,15)(1406,`div`,23)(1407,`span`,24),Tk(1408,` placeholderSearch`),_u(1409,`br`),Zg()()(),Jc(1410,`td`,19)(1411,`code`,25),Tk(1412,`string`),Zg()(),Jc(1413,`td`,22)(1414,`em`)(1415,`strong`),Tk(1416,`(opcional)`),Zg()(),Jc(1417,`p`),Tk(1418,`Texto do `),Jc(1419,`em`),Tk(1420,`placeholder`),Zg(),Tk(1421,` do campo de busca.`),Zg()()(),Jc(1422,`tr`,14)(1423,`td`,15)(1424,`div`,23)(1425,`span`,24),Tk(1426,` selectAll`),_u(1427,`br`),Zg()()(),Jc(1428,`td`,19)(1429,`code`,25),Tk(1430,`string`),Zg()(),Jc(1431,`td`,22)(1432,`em`)(1433,`strong`),Tk(1434,`(opcional)`),Zg()(),Jc(1435,`p`),Tk(1436,`Texto exibido no botão de selecionar todos.`),Zg()()(),Jc(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),Tk(1441,` selectItem`),_u(1442,`br`),Zg()()(),Jc(1443,`td`,19)(1444,`code`,25),Tk(1445,`string`),Zg()(),Jc(1446,`td`,22)(1447,`em`)(1448,`strong`),Tk(1449,`(opcional)`),Zg()(),Jc(1450,`p`),Tk(1451,`Texto exibido na propriedade placeholder.`),Zg()()()(),Jc(1452,`h4`,42)(1453,`code`,5),Tk(1454,`PoMultiselectOption`),Zg()(),Jc(1455,`div`,2)(1456,`p`),Tk(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),Zg()(),Jc(1458,`h4`,10),Tk(1459,`Propriedades`),Zg(),Jc(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),Tk(1463,`Nome`),Zg(),Jc(1464,`th`,13),Tk(1465,`Tipo`),Zg(),Jc(1466,`th`,13),Tk(1467,`Descrição`),Zg()(),Jc(1468,`tr`,14)(1469,`td`,15)(1470,`div`,23)(1471,`span`,24),Tk(1472,` label`),_u(1473,`br`),Zg()()(),Jc(1474,`td`,19)(1475,`code`,25),Tk(1476,`string`),Zg()(),Jc(1477,`td`,22)(1478,`p`),Tk(1479,`Label exibido nos itens da lista.`),Zg()()(),Jc(1480,`tr`,14)(1481,`td`,15)(1482,`div`,23)(1483,`span`,24),Tk(1484,` value`),_u(1485,`br`),Zg()()(),Jc(1486,`td`,19)(1487,`code`,25),Tk(1488,`string `),Zg(),Jc(1489,`code`,27),Tk(1490,` number`),Zg()(),Jc(1491,`td`,22)(1492,`p`),Tk(1493,`Valor do objeto que será atribuído ao model.`),Zg()()()(),Jc(1494,`h3`),Tk(1495,`Enums`),Zg(),Jc(1496,`h4`,4)(1497,`code`,5),Tk(1498,`PoMultiselectFilterMode`),Zg()(),Jc(1499,`div`,2)(1500,`p`),Tk(1501,`Define o tipo de busca usado no po-multiselect.`),Zg()(),Jc(1502,`h4`,10),Tk(1503,`Propriedades`),Zg(),Jc(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),Tk(1507,`Nome`),Zg(),Jc(1508,`th`,13),Tk(1509,`Descrição`),Zg()(),Jc(1510,`tr`,14)(1511,`td`,15)(1512,`div`,23)(1513,`span`,24),Tk(1514,` startsWith`),_u(1515,`br`),Zg()()(),Jc(1516,`td`,22)(1517,`p`),Tk(1518,`Verifica se o texto `),Jc(1519,`em`),Tk(1520,`inicia`),Zg(),Tk(1521,` com o valor pesquisado.`),Zg()()(),Jc(1522,`tr`,14)(1523,`td`,15)(1524,`div`,23)(1525,`span`,24),Tk(1526,` contains`),_u(1527,`br`),Zg()()(),Jc(1528,`td`,22)(1529,`p`),Tk(1530,`Verifica se o texto `),Jc(1531,`em`),Tk(1532,`contém`),Zg(),Tk(1533,` o valor pesquisado.`),Zg()()(),Jc(1534,`tr`,14)(1535,`td`,15)(1536,`div`,23)(1537,`span`,24),Tk(1538,` endsWith`),_u(1539,`br`),Zg()()(),Jc(1540,`td`,22)(1541,`p`),Tk(1542,`Verifica se o texto `),Jc(1543,`em`),Tk(1544,`finaliza`),Zg(),Tk(1545,` com o valor pesquisado.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function St(o,K){if(o&1){let s=ZO();Jc(0,`po-tab`,4),vt$1(`p-click`,function(){U_(s);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-multiselect-basic-view`)(2,`sample-po-multiselect-labs-view`)(3,`sample-po-multiselect-vacation-view`)(4,`sample-po-multiselect-vacation-reactive-form-view`)(5,`sample-po-multiselect-template-view`)(6,`sample-po-multiselect-heroes-view`)(7,`sample-po-multiselect-any-array-view`),Zg()}if(o&2){let s=nk();Rb(`p-active`,s.activeTab===`web`)}}var vt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,St,8,1,`po-tab`,2),Jc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-multiselect-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,De,Le,ke,Fe,We,Ne,He,je],encapsulation:2,changeDetection:1})}return o})()}];var Je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(vt),WV]})}return o})();var yn=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Je]})}return o})();export{yn as DocPoMultiselectModule};
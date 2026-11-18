import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,Da as kI,Dr as Gk,F as Joe,G as Nf,Hi as Y,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Rr as Kk,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,eo as uF,gi as Rb,go as z0,ha as i1,hr as Db,io as vu,j as I4,ji as Vk,li as Qc,lt as Ss,na as de,on as ioe,oo as wg,p as DP,pi as R,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,w as Fc,wn as q4,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var Ve=(()=>{class o{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,n){a&1&&vu(0,`po-multiselect`,0),a&2&&Rb(`p-options`,n.options)},dependencies:[DP],encapsulation:2,changeDetection:1})}return o})();var Ge=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ge,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return o})();var Ae=(()=>{class o{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`div`,2)(1,`po-multiselect`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.multiselect,r)||(n.multiselect=r),U_(r)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg()(),vu(2,`po-divider`),Qc(3,`div`,2),vu(4,`po-info`,4)(5,`po-info`,5),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.option.label,r)||(n.option.label=r),U_(r)}),Kg(),Qc(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.option.value,r)||(n.option.value=r),U_(r)}),Kg()(),Qc(12,`div`,2)(13,`po-button`,8),vt(`p-click`,function(){return n.addOption()}),Kg()()(),vu(14,`po-divider`),Qc(15,`form`,null,1)(17,`po-input`,9),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.label,r)||(n.label=r),U_(r)}),Kg(),Qc(18,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.help,r)||(n.help=r),U_(r)}),Kg(),Qc(19,`po-input`,11),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.helperText,r)||(n.helperText=r),U_(r)}),Kg(),Qc(20,`po-input`,12),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.placeholder,r)||(n.placeholder=r),U_(r)}),Kg(),Qc(21,`po-input`,13),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.placeholderSearch,r)||(n.placeholderSearch=r),U_(r)}),Kg(),Qc(22,`po-input`,14),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),U_(r)}),Kg(),Qc(23,`po-input`,15),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.literals,r)||(n.literals=r),U_(r)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Qc(24,`po-input`,16),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.filterService,r)||(n.filterService=r),U_(r)}),Kg(),Qc(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldValue,r)||(n.fieldValue=r),U_(r)}),Kg(),Qc(26,`po-input`,18),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldLabel,r)||(n.fieldLabel=r),U_(r)}),Kg(),Qc(27,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.properties,r)||(n.properties=r),U_(r)}),Kg(),Qc(28,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.filterMode,r)||(n.filterMode=r),U_(r)}),Kg(),Qc(29,`po-radio-group`,21),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.size,r)||(n.size=r),U_(r)}),Kg(),Qc(30,`po-radio-group`,22),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.listboxPosition,r)||(n.listboxPosition=r),U_(r)}),Kg(),Qc(31,`div`,2)(32,`po-button`,23),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(a&2){let c=ik(8);wg(),Yb(`ngModel`,n.multiselect),Rb(`p-helper`,n.helperText)(`p-auto-height`,n.properties.includes(`autoHeight`))(`p-disabled`,n.properties.includes(`disabled`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-service`,n.filterService)(`p-filter-mode`,n.filterMode)(`p-help`,n.help)(`p-hide-search`,n.properties.includes(`hideSearch`))(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-placeholder-search`,n.placeholderSearch)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-sort`,n.properties.includes(`sort`))(`p-listbox-control-position`,n.listboxPosition)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,n.multiselect),wg(),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.value),W0(),wg(2),Rb(`p-disabled`,c.form.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.placeholderSearch),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(),Yb(`ngModel`,n.filterService),W0(),wg(),Yb(`ngModel`,n.fieldValue),W0(),wg(),Yb(`ngModel`,n.fieldLabel),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.filterMode),Rb(`p-disabled`,n.properties.includes(`hideSearch`))(`p-options`,n.filterModeOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.listboxPosition),Rb(`p-options`,n.listboxPositionOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,DP,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var Ye=o=>({"docs-sample-code-tabs":o});var ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ye,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return o})();var Oe=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`form`,null,0)(2,`h3`),Sk(3,`Collective vacations`),Kg(),vu(4,`po-divider`),Qc(5,`div`,2)(6,`po-datepicker`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.initialPeriod,r)||(n.initialPeriod=r),U_(r)}),Kg(),Qc(7,`po-datepicker`,4),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.finalPeriod,r)||(n.finalPeriod=r),U_(r)}),Kg()(),Qc(8,`div`,2)(9,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.days,r)||(n.days=r),U_(r)}),Kg()(),Qc(10,`div`,2)(11,`po-multiselect`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.employeesVacations,r)||(n.employeesVacations=r),U_(r)}),Kg()(),Qc(12,`div`,2)(13,`po-button`,7),vt(`p-click`,function(){B_(c);let r=ik(16);return n.updateNameEmployeesVacations(),U_(r.open())}),Kg(),Qc(14,`po-button`,8),vt(`p-click`,function(){return n.clean()}),Kg()()(),Qc(15,`po-modal`,9,1)(17,`div`,2),vu(18,`po-info`,10),Gk(19,`date`),vu(20,`po-info`,11),Gk(21,`date`),vu(22,`po-info`,12),Kg(),vu(23,`po-divider`),Qc(24,`div`,2),vu(25,`po-info`,13),Kg()()}if(a&2){let c=ik(1);wg(6),Yb(`ngModel`,n.initialPeriod),W0(),wg(),Yb(`ngModel`,n.finalPeriod),Rb(`p-min-date`,n.initialPeriod),W0(),wg(2),Yb(`ngModel`,n.days),Rb(`p-options`,n.daysOptions),W0(),wg(2),Yb(`ngModel`,n.employeesVacations),Rb(`p-options`,n.employees),W0(),wg(2),Rb(`p-disabled`,c.form.invalid),wg(5),Rb(`p-value`,Kk(19,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,Kk(21,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,n.days),wg(3),Rb(`p-value`,n.nameEmployeesVacations)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return o})();var $e=o=>({"docs-sample-code-tabs":o});var Le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-vacation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Vacation`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form #f="ngForm">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-vacation`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,$e,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return o})();var qe=(()=>{class o{formBuilder=p(OZ);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,Xm.required],finalPeriod:[null,Xm.required],days:[null,Xm.required],employeesVacations:[null,Xm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`form`,1)(1,`h3`),Sk(2,`Collective vacations`),Kg(),vu(3,`po-divider`),Qc(4,`div`,2)(5,`po-datepicker`,3),z0(),Kg(),Qc(6,`po-datepicker`,4),z0(),Kg()(),Qc(7,`div`,2)(8,`po-multiselect`,5),z0(),Kg(),Qc(9,`po-radio-group`,6),z0(),Kg()(),Qc(10,`div`,2)(11,`po-button`,7),vt(`p-click`,function(){B_(c);let r=ik(14);return n.updateEmployeesVacations(),U_(r.open())}),Kg(),Qc(12,`po-button`,8),vt(`p-click`,function(){return n.clean()}),Kg()()(),Qc(13,`po-modal`,9,0)(15,`div`,2),vu(16,`po-info`,10),Gk(17,`date`),vu(18,`po-info`,11),Gk(19,`date`),vu(20,`po-info`,12),Kg(),vu(21,`po-divider`),Qc(22,`div`,2),vu(23,`po-info`,13),Kg()()}a&2&&(Rb(`formGroup`,n.formCollectiveVacations),wg(5),W0(),wg(),Rb(`p-min-date`,n.getRangeFinalPeriod()),W0(),wg(2),Rb(`p-auto-height`,!0)(`p-options`,n.employees)(`p-required`,!0),W0(),wg(),Rb(`p-options`,n.daysOptions)(`p-columns`,3),W0(),wg(2),Rb(`p-disabled`,n.formCollectiveVacations.invalid),wg(5),Rb(`p-value`,Kk(17,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,Kk(19,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,n.days),wg(3),Rb(`p-value`,n.nameEmployeesVacations))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return o})();var it=o=>({"docs-sample-code-tabs":o});var Fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-vacation-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Vacation Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form [formGroup]="formCollectiveVacations">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-vacation-reactive-form`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,it,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,qe],encapsulation:2,changeDetection:1})}return o})();function ot(o,K){o&1&&vu(0,`po-tag`,11),o&2&&Rb(`p-icon`,!0)}function lt(o,K){o&1&&vu(0,`po-tag`,12),o&2&&Rb(`p-icon`,!0)}function at(o,K){o&1&&vu(0,`po-tag`,13),o&2&&Rb(`p-icon`,!0)}function pt(o,K){if(o&1&&(Qc(0,`div`,0)(1,`div`,7)(2,`div`,8),Sk(3),Kg()(),Qc(4,`div`,9)(5,`div`,10),FO(6,ot,1,1,`po-tag`,11),FO(7,lt,1,1,`po-tag`,12),FO(8,at,1,1,`po-tag`,13),Kg()()()),o&2){let s=K.$implicit;wg(3),Gb(s.label),wg(3),VO(s.admin?6:-1),wg(),VO(s.access?7:-1),wg(),VO(!s.admin&&!s.access?8:-1)}}var Be=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`po-select`,1),z0(),Kb(`ngModelChange`,function(m){return Tk(n.employee,m)||(n.employee=m),m}),Kg(),Qc(2,`po-select`,2),z0(),Kb(`ngModelChange`,function(m){return Tk(n.typeAccess,m)||(n.typeAccess=m),m}),Kg(),Qc(3,`div`,3)(4,`po-button`,4),vt(`p-click`,function(){return n.changeAccess()}),Kg()(),Qc(5,`po-multiselect`,5),Db(6,pt,9,4,`ng-template`,6),Kg()()),a&2&&(wg(),Rb(`p-options`,n.employees),Yb(`ngModel`,n.employee),W0(),wg(),Rb(`p-options`,n.typeAccessValue),Yb(`ngModel`,n.typeAccess),W0(),wg(2),Rb(`p-disabled`,!n.employee||!n.typeAccess),wg(),Rb(`p-options`,n.options)(`p-hide-select-all`,!0))},dependencies:[MZ,QL,oi,DP,ioe,Koe,Ss],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return o})();var st=o=>({"docs-sample-code-tabs":o});var We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-multiselect-template`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Template`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.containerFlex {
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-multiselect-template`),Kg(),vu(29,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,st,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Be],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{http=p(kI);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(Y(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(Y(a=>a.items))}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ze=(()=>{class o{samplePoMultiselectHeroesService=p(ce);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[we([ce])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`po-multiselect`,1),z0(),Kb(`ngModelChange`,function(m){return Tk(n.multiselect,m)||(n.multiselect=m),m}),vt(`p-change`,function(m){return n.changeOptions(m)}),Kg(),Qc(2,`po-container`,2),vu(3,`po-table`,3),Kg()()),a&2&&(wg(),Yb(`ngModel`,n.multiselect),Rb(`p-filter-service`,n.filterService)(`p-debounce-time`,n.debounce),W0(),wg(2),Rb(`p-columns`,n.columns)(`p-items`,n.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[MZ,QL,Fc,DP,q4],encapsulation:2,changeDetection:1})}return o})();var ct=o=>({"docs-sample-code-tabs":o});var Ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-multiselect-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Heroes - using API`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-multiselect-heroes`),Kg(),vu(27,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ct,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ze],encapsulation:2,changeDetection:1})}return o})();var Ie=(()=>{class o{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(s){this.company=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`div`,1)(2,`po-select`,2),z0(),Kb(`ngModelChange`,function(m){return Tk(n.fieldLabel,m)||(n.fieldLabel=m),m}),vt(`p-change`,function(m){return n.onChange(m)}),Kg(),Qc(3,`po-select`,3),z0(),Kb(`ngModelChange`,function(m){return Tk(n.fieldValue,m)||(n.fieldValue=m),m}),vt(`p-change`,function(m){return n.onChange(m)}),Kg()(),Qc(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),z0(),Kb(`ngModelChange`,function(m){return Tk(n.company,m)||(n.company=m),m}),Kg()(),Qc(7,`div`,0),vu(8,`po-info`,5),Kg()()()),a&2&&(wg(2),Rb(`p-options`,n.optionsSelect),Yb(`ngModel`,n.fieldLabel),W0(),wg(),Rb(`p-options`,n.optionsSelect),Yb(`ngModel`,n.fieldValue),W0(),wg(3),Rb(`p-options`,n.options)(`p-field-value`,n.fieldValue)(`p-field-label`,n.fieldLabel),Yb(`ngModel`,n.company),W0(),wg(2),Rb(`p-value`,n.company))},dependencies:[MZ,QL,DP,Koe,Joe],encapsulation:2,changeDetection:1})}return o})();var ht=o=>({"docs-sample-code-tabs":o});var He=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-any-array`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Array Any`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-any-array`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ht,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ie],encapsulation:2,changeDetection:1})}return o})();var je=(()=>{class o{router=p(An);openDoc(s){this.router.navigate([`/documentation`,s],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1550,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Multiselect Option Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-multiselect-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-height`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-search`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder-search`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-multiselect-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`id`,`interface-po-multiselect-filter-method-getObjectsByValues`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`],[`id`,`interface-po-multiselect-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-placeholder-search`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-item`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-multiselect-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`blockquote`,3)(17,`strong`),Sk(18,`Subcomponentes:`),Kg(),Qc(19,`po-tag`,4),vt(`p-click`,function(){return n.openDoc(`po-multiselect-option-template`)}),Kg()(),Qc(20,`h3`,5),Sk(21,`Componente`),Kg(),Qc(22,`h4`,6)(23,`code`,7),Sk(24,`PoMultiselectComponent`),Kg()(),Qc(25,`div`,2)(26,`p`),Sk(27,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),Kg(),Qc(28,`p`),Sk(29,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),Kg(),Qc(30,`p`),Sk(31,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),Kg(),Qc(32,`p`),Sk(33,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Qc(34,`code`),Sk(35,`p-filter-service`),Kg(),Sk(36,`.`),Kg(),Qc(37,`h4`),Sk(38,`Boas práticas`),Kg(),Qc(39,`ul`)(40,`li`),Sk(41,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),Kg(),Qc(42,`li`),Sk(43,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),Kg()(),Qc(44,`h4`),Sk(45,`Acessibilidade tratada no componente`),Kg(),Qc(46,`p`),Sk(47,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(48,`ul`)(49,`li`),Sk(50,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),Kg(),Qc(51,`li`),Sk(52,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),Kg(),Qc(53,`li`),Sk(54,`Utilize a tecla Esc do teclado para fechar o listbox.`),Kg(),Qc(55,`li`),Sk(56,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),Kg(),Qc(57,`li`),Sk(58,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),Kg()(),Qc(59,`h4`),Sk(60,`Tokens customizáveis`),Kg(),Qc(61,`p`),Sk(62,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(63,`blockquote`)(64,`p`),Sk(65,`Para maiores informações, acesse o guia `),Qc(66,`a`,8),Sk(67,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(68,`.`),Kg()(),Qc(69,`table`)(70,`thead`)(71,`tr`)(72,`th`),Sk(73,`Propriedade`),Kg(),Qc(74,`th`),Sk(75,`Descrição`),Kg(),Qc(76,`th`),Sk(77,`Valor Padrão`),Kg()()(),Qc(78,`tbody`)(79,`tr`)(80,`td`)(81,`strong`),Sk(82,`Default Values`),Kg()(),vu(83,`td`)(84,`td`),Kg(),Qc(85,`tr`)(86,`td`)(87,`code`),Sk(88,`--font-family`),Kg()(),Qc(89,`td`),Sk(90,`Família tipográfica usada`),Kg(),Qc(91,`td`)(92,`code`),Sk(93,`var(--font-family-theme)`),Kg()()(),Qc(94,`tr`)(95,`td`)(96,`code`),Sk(97,`--font-size`),Kg()(),Qc(98,`td`),Sk(99,`Tamanho da fonte`),Kg(),Qc(100,`td`)(101,`code`),Sk(102,`var(--font-size-default)`),Kg()()(),Qc(103,`tr`)(104,`td`)(105,`code`),Sk(106,`--text-color-placeholder`),Kg(),Sk(107,` \xA0`),Kg(),Qc(108,`td`),Sk(109,`Cor do texto do placeholder`),Kg(),Qc(110,`td`)(111,`code`),Sk(112,`var(--color-action-disabled)`),Kg()()(),Qc(113,`tr`)(114,`td`)(115,`code`),Sk(116,`--color`),Kg()(),Qc(117,`td`),Sk(118,`Cor principal do multiselect`),Kg(),Qc(119,`td`)(120,`code`),Sk(121,`var(--color-neutral-dark-70)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--background`),Kg()(),Qc(126,`td`),Sk(127,`Cor de background`),Kg(),Qc(128,`td`)(129,`code`),Sk(130,`var(--color-neutral-light-05)`),Kg()()(),Qc(131,`tr`)(132,`td`)(133,`code`),Sk(134,`--field-container-title-justify`),Kg()(),Qc(135,`td`),Sk(136,`Alinhamento horizontal do título (`),Qc(137,`code`),Sk(138,`justify-content`),Kg(),Sk(139,`)`),Kg(),Qc(140,`td`)(141,`code`),Sk(142,`space-between`),Kg()()(),Qc(143,`tr`)(144,`td`)(145,`code`),Sk(146,`--field-container-title-flex`),Kg()(),Qc(147,`td`),Sk(148,`Flex do título (`),Qc(149,`code`),Sk(150,`flex`),Kg(),Sk(151,`)`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`1 auto`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`strong`),Sk(158,`Hover`),Kg()(),vu(159,`td`)(160,`td`),Kg(),Qc(161,`tr`)(162,`td`)(163,`code`),Sk(164,`--color-hover`),Kg()(),Qc(165,`td`),Sk(166,`Cor principal no estado hover`),Kg(),Qc(167,`td`)(168,`code`),Sk(169,`var(--color-action-hover)`),Kg()()(),Qc(170,`tr`)(171,`td`)(172,`code`),Sk(173,`--background-hover`),Kg()(),Qc(174,`td`),Sk(175,`Cor de background no estado hover`),Kg(),Qc(176,`td`)(177,`code`),Sk(178,`var(--color-brand-01-lighter)`),Kg()()(),Qc(179,`tr`)(180,`td`)(181,`strong`),Sk(182,`Focused`),Kg()(),vu(183,`td`)(184,`td`),Kg(),Qc(185,`tr`)(186,`td`)(187,`code`),Sk(188,`--color-focused`),Kg()(),Qc(189,`td`),Sk(190,`Cor principal no estado de focus`),Kg(),Qc(191,`td`)(192,`code`),Sk(193,`var(--color-action-default)`),Kg()()(),Qc(194,`tr`)(195,`td`)(196,`code`),Sk(197,`--outline-color-focused`),Kg(),Sk(198,` \xA0`),Kg(),Qc(199,`td`),Sk(200,`Cor do outline do estado de focus`),Kg(),Qc(201,`td`)(202,`code`),Sk(203,`var(--color-action-focus)`),Kg()()(),Qc(204,`tr`)(205,`td`)(206,`strong`),Sk(207,`Disabled`),Kg()(),vu(208,`td`)(209,`td`),Kg(),Qc(210,`tr`)(211,`td`)(212,`code`),Sk(213,`--color-disabled`),Kg()(),Qc(214,`td`),Sk(215,`Cor principal no estado disabled`),Kg(),Qc(216,`td`)(217,`code`),Sk(218,`var(--color-action-disabled)`),Kg()()(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--background-disabled`),Kg(),Sk(223,` \xA0`),Kg(),Qc(224,`td`),Sk(225,`Cor de background no estado disabled \xA0`),Kg(),Qc(226,`td`)(227,`code`),Sk(228,`var(--color-neutral-light-20)`),Kg()()(),Qc(229,`tr`)(230,`td`)(231,`strong`),Sk(232,`Error`),Kg()(),vu(233,`td`)(234,`td`),Kg(),Qc(235,`tr`)(236,`td`)(237,`code`),Sk(238,`--color-error`),Kg()(),Qc(239,`td`),Sk(240,`Cor principal no estado error`),Kg(),Qc(241,`td`)(242,`code`),Sk(243,`var(--color-feedback-negative-base)`),Kg()()()()()(),Qc(244,`div`,9)(245,`h4`,10),Sk(246,`Seletor`),Kg(),Qc(247,`pre`,11),Sk(248,`<po-multiselect
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
`),Kg()(),Qc(249,`h4`,12),Sk(250,`Propriedades`),Kg(),Qc(251,`table`,13)(252,`tr`,14)(253,`th`,15),Sk(254,`Nome`),Kg(),Qc(255,`th`,15),Sk(256,`Tipo`),Kg(),Qc(257,`th`,15),Sk(258,`Padrão`),Kg(),Qc(259,`th`,15),Sk(260,`Descrição`),Kg()(),Qc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),Sk(265,` (p-additional-help)`),vu(266,`br`),Kg()(),Qc(267,`div`,20),Sk(268,`Deprecated`),Kg()(),Qc(269,`td`,21)(270,`code`,22),Sk(271,`EventEmitter`),Kg()(),Qc(272,`td`,23),Sk(273,`-`),Kg(),Qc(274,`td`,24)(275,`em`)(276,`strong`),Sk(277,`(opcional)`),Kg()(),Qc(278,`p`),Sk(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(280,`blockquote`)(281,`p`),Sk(282,`Essa propriedade está `),Qc(283,`strong`),Sk(284,`depreciada`),Kg(),Sk(285,` e será removida na versão `),Qc(286,`code`),Sk(287,`23.x.x`),Kg(),Sk(288,`. Recomendamos utilizar a propriedade `),Qc(289,`code`),Sk(290,`p-helper`),Kg(),Sk(291,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(292,`tr`,25)(293,`td`,17)(294,`div`,26)(295,`span`,27),Sk(296,` p-additional-help-tooltip`),vu(297,`br`),Kg()(),Qc(298,`div`,20),Sk(299,`Deprecated`),Kg()(),Qc(300,`td`,21)(301,`code`,28),Sk(302,`string`),Kg()(),Qc(303,`td`,23),Sk(304,`-`),Kg(),Qc(305,`td`,24)(306,`em`)(307,`strong`),Sk(308,`(opcional)`),Kg()(),Qc(309,`p`),Sk(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(311,`code`),Sk(312,`po-helper`),Kg(),Sk(313,`.
`),Qc(314,`strong`),Sk(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(316,`blockquote`)(317,`p`),Sk(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(319,`blockquote`)(320,`p`),Sk(321,`Essa propriedade está `),Qc(322,`strong`),Sk(323,`depreciada`),Kg(),Sk(324,` e será removida na versão `),Qc(325,`code`),Sk(326,`23.x.x`),Kg(),Sk(327,`. Recomendamos utilizar a propriedade `),Qc(328,`code`),Sk(329,`p-helper`),Kg(),Sk(330,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(331,`tr`,29)(332,`td`,17)(333,`div`,26)(334,`span`,27),Sk(335,` p-append-in-body`),vu(336,`br`),Kg()()(),Qc(337,`td`,21)(338,`code`,30),Sk(339,`boolean`),Kg()(),Qc(340,`td`,23)(341,`p`)(342,`code`),Sk(343,`false`),Kg()()(),Qc(344,`td`,24)(345,`em`)(346,`strong`),Sk(347,`(opcional)`),Kg()(),Qc(348,`p`),Sk(349,`Define que o `),Qc(350,`code`),Sk(351,`listbox`),Kg(),Sk(352,` e/ou popover (`),Qc(353,`code`),Sk(354,`p-helper`),Kg(),Sk(355,` e/ou `),Qc(356,`code`),Sk(357,`p-error-limit`),Kg(),Sk(358,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Qc(359,`blockquote`)(360,`p`),Sk(361,`Quando utilizado com `),Qc(362,`code`),Sk(363,`p-helper`),Kg(),Sk(364,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(365,`tr`,31)(366,`td`,17)(367,`div`,26)(368,`span`,27),Sk(369,` p-auto-focus`),vu(370,`br`),Kg()()(),Qc(371,`td`,21)(372,`code`,30),Sk(373,`boolean`),Kg()(),Qc(374,`td`,23)(375,`p`)(376,`code`),Sk(377,`false`),Kg()()(),Qc(378,`td`,24)(379,`em`)(380,`strong`),Sk(381,`(opcional)`),Kg()(),Qc(382,`p`),Sk(383,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(384,`blockquote`)(385,`p`),Sk(386,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(387,`tr`,32)(388,`td`,17)(389,`div`,26)(390,`span`,27),Sk(391,` p-auto-height`),vu(392,`br`),Kg()()(),Qc(393,`td`,21)(394,`code`,30),Sk(395,`boolean`),Kg()(),Qc(396,`td`,23)(397,`p`)(398,`code`),Sk(399,`false`),Kg()()(),Qc(400,`td`,24)(401,`em`)(402,`strong`),Sk(403,`(opcional)`),Kg()(),Qc(404,`p`),Sk(405,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Kg(),Qc(406,`blockquote`)(407,`p`),Sk(408,`O valor padrão será `),Qc(409,`code`),Sk(410,`true`),Kg(),Sk(411,` quando houver serviço (`),Qc(412,`code`),Sk(413,`p-filter-service`),Kg(),Sk(414,`).`),Kg()()()(),Qc(415,`tr`,33)(416,`td`,17)(417,`div`,18)(418,`span`,19),Sk(419,` (p-blur)`),vu(420,`br`),Kg()()(),Qc(421,`td`,21)(422,`code`,22),Sk(423,`EventEmitter`),Kg()(),Qc(424,`td`,23),Sk(425,`-`),Kg(),Qc(426,`td`,24)(427,`em`)(428,`strong`),Sk(429,`(opcional)`),Kg()(),Qc(430,`p`),Sk(431,`Evento disparado ao sair do campo.`),Kg()()(),Qc(432,`tr`,34)(433,`td`,17)(434,`div`,18)(435,`span`,19),Sk(436,` (p-change)`),vu(437,`br`),Kg()()(),Qc(438,`td`,21)(439,`code`,22),Sk(440,`EventEmitter`),Kg()(),Qc(441,`td`,23),Sk(442,`-`),Kg(),Qc(443,`td`,24)(444,`em`)(445,`strong`),Sk(446,`(opcional)`),Kg()(),Qc(447,`p`),Sk(448,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),Kg()()(),Qc(449,`tr`,35)(450,`td`,17)(451,`div`,18)(452,`span`,19),Sk(453,` (p-change-model)`),vu(454,`br`),Kg()()(),Qc(455,`td`,21)(456,`code`,22),Sk(457,`EventEmitter`),Kg()(),Qc(458,`td`,23),Sk(459,`-`),Kg(),Qc(460,`td`,24)(461,`em`)(462,`strong`),Sk(463,`(opcional)`),Kg()(),Qc(464,`p`),Sk(465,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(466,`code`),Sk(467,`setValue`),Kg(),Sk(468,`, `),Qc(469,`code`),Sk(470,`patchValue`),Kg(),Sk(471,`, carregamento assíncrono).`),Kg(),Qc(472,`p`),Sk(473,`Diferentemente do `),Qc(474,`code`),Sk(475,`p-change`),Kg(),Sk(476,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(477,`code`),Sk(478,`p-change-model`),Kg(),Sk(479,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(480,`p`),Sk(481,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(482,`tr`,36)(483,`td`,17)(484,`div`,26)(485,`span`,27),Sk(486,` p-compact-label`),vu(487,`br`),Kg()()(),Qc(488,`td`,21)(489,`code`,30),Sk(490,`boolean`),Kg()(),Qc(491,`td`,23)(492,`p`)(493,`code`),Sk(494,`false`),Kg()()(),Qc(495,`td`,24)(496,`em`)(497,`strong`),Sk(498,`(opcional)`),Kg()(),Qc(499,`p`),Sk(500,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(501,`p`),Sk(502,`Quando habilitado (`),Qc(503,`code`),Sk(504,`true`),Kg(),Sk(505,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(506,`ul`)(507,`li`)(508,`code`),Sk(509,`po-label`),Kg()(),Qc(510,`li`)(511,`code`),Sk(512,`p-requirement (showRequired)`),Kg()(),Qc(513,`li`)(514,`code`),Sk(515,`po-helper`),Kg()()(),Qc(516,`p`),Sk(517,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(518,`p`),Sk(519,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(520,`ul`)(521,`li`)(522,`code`),Sk(523,`--field-container-title-justify`),Kg()(),Qc(524,`li`)(525,`code`),Sk(526,`--field-container-title-flex`),Kg()()(),Qc(527,`p`),Sk(528,`Exemplo:`),Kg(),Qc(529,`pre`)(530,`code`),Sk(531,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(532,`p`),Sk(533,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(534,`tr`,37)(535,`td`,17)(536,`div`,26)(537,`span`,27),Sk(538,` p-debounce-time`),vu(539,`br`),Kg()()(),Qc(540,`td`,21)(541,`code`,38),Sk(542,`number`),Kg()(),Qc(543,`td`,23)(544,`p`)(545,`code`),Sk(546,`400`),Kg()()(),Qc(547,`td`,24)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),Kg(),Qc(553,`blockquote`)(554,`p`),Sk(555,`Será utilizada apenas quando houver serviço (`),Qc(556,`code`),Sk(557,`p-filter-service`),Kg(),Sk(558,`) e somente será aceito valor maior do que `),Qc(559,`em`),Sk(560,`zero`),Kg(),Sk(561,`.`),Kg()()()(),Qc(562,`tr`,39)(563,`td`,17)(564,`div`,26)(565,`span`,27),Sk(566,` p-disabled`),vu(567,`br`),Kg()()(),Qc(568,`td`,21)(569,`code`,30),Sk(570,`boolean`),Kg()(),Qc(571,`td`,23)(572,`p`)(573,`code`),Sk(574,`false`),Kg()()(),Qc(575,`td`,24)(576,`em`)(577,`strong`),Sk(578,`(opcional)`),Kg()(),Qc(579,`p`),Sk(580,`Indica que o campo será desabilitado.`),Kg()()(),Qc(581,`tr`,40)(582,`td`,17)(583,`div`,26)(584,`span`,27),Sk(585,` p-error-limit`),vu(586,`br`),Kg()()(),Qc(587,`td`,21)(588,`code`,30),Sk(589,`boolean`),Kg()(),Qc(590,`td`,23)(591,`p`)(592,`code`),Sk(593,`false`),Kg()()(),Qc(594,`td`,24)(595,`em`)(596,`strong`),Sk(597,`(opcional)`),Kg()(),Qc(598,`p`),Sk(599,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(600,`blockquote`)(601,`p`),Sk(602,`Caso essa propriedade seja definida como `),Qc(603,`code`),Sk(604,`true`),Kg(),Sk(605,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(606,`tr`,41)(607,`td`,17)(608,`div`,26)(609,`span`,27),Sk(610,` p-field-error-message`),vu(611,`br`),Kg()()(),Qc(612,`td`,21)(613,`code`,28),Sk(614,`string`),Kg()(),Qc(615,`td`,23),Sk(616,`-`),Kg(),Qc(617,`td`,24)(618,`em`)(619,`strong`),Sk(620,`(opcional)`),Kg()(),Qc(621,`p`),Sk(622,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(623,`blockquote`)(624,`p`),Sk(625,`Necessário que a propriedade `),Qc(626,`code`),Sk(627,`p-required`),Kg(),Sk(628,` esteja habilitada.`),Kg()()()(),Qc(629,`tr`,42)(630,`td`,17)(631,`div`,26)(632,`span`,27),Sk(633,` p-field-label`),vu(634,`br`),Kg()()(),Qc(635,`td`,21)(636,`code`,28),Sk(637,`string`),Kg()(),Qc(638,`td`,23)(639,`p`)(640,`code`),Sk(641,`label`),Kg()()(),Qc(642,`td`,24)(643,`em`)(644,`strong`),Sk(645,`(opcional)`),Kg()(),Qc(646,`p`),Sk(647,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(648,`code`),Sk(649,`p-options`),Kg(),Sk(650,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Qc(651,`p`),Sk(652,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Qc(653,`code`),Sk(654,`PoMultiSelectOption`),Kg(),Sk(655,`.`),Kg()()(),Qc(656,`tr`,43)(657,`td`,17)(658,`div`,26)(659,`span`,27),Sk(660,` p-field-value`),vu(661,`br`),Kg()()(),Qc(662,`td`,21)(663,`code`,28),Sk(664,`string`),Kg()(),Qc(665,`td`,23)(666,`p`)(667,`code`),Sk(668,`value`),Kg()()(),Qc(669,`td`,24)(670,`em`)(671,`strong`),Sk(672,`(opcional)`),Kg()(),Qc(673,`p`),Sk(674,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(675,`code`),Sk(676,`p-options`),Kg(),Sk(677,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Qc(678,`p`),Sk(679,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Qc(680,`code`),Sk(681,`PoMultiSelectOption`),Kg(),Sk(682,`.`),Kg()()(),Qc(683,`tr`,44)(684,`td`,17)(685,`div`,26)(686,`span`,27),Sk(687,` p-filter-mode`),vu(688,`br`),Kg()()(),Qc(689,`td`,21)(690,`code`,45),Sk(691,`PoMultiselectFilterMode`),Kg()(),Qc(692,`td`,23)(693,`p`)(694,`code`),Sk(695,`startsWith`),Kg()()(),Qc(696,`td`,24)(697,`em`)(698,`strong`),Sk(699,`(opcional)`),Kg()(),Qc(700,`p`),Sk(701,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),Kg()()(),Qc(702,`tr`,46)(703,`td`,17)(704,`div`,26)(705,`span`,27),Sk(706,` p-filter-service`),vu(707,`br`),Kg()()(),Qc(708,`td`,21)(709,`code`,28),Sk(710,`string `),Kg(),Qc(711,`code`,47),Sk(712,` PoMultiselectFilter`),Kg()(),Qc(713,`td`,23),Sk(714,`-`),Kg(),Qc(715,`td`,24)(716,`em`)(717,`strong`),Sk(718,`(opcional)`),Kg()(),Qc(719,`p`),Sk(720,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),Kg(),Qc(721,`p`),Sk(722,`Também existe a possibilidade de informar um serviço implementando a interface `),Qc(723,`code`),Sk(724,`PoMultiselectFilter`),Kg(),Sk(725,`.`),Kg(),Qc(726,`p`),Sk(727,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Qc(728,`a`,48),Sk(729,`API PO UI`),Kg(),Sk(730,` e utilizar as propriedades `),Qc(731,`code`),Sk(732,`p-field-label`),Kg(),Sk(733,` e `),Qc(734,`code`),Sk(735,`p-field-value`),Kg(),Sk(736,` para a construção da lista de itens.`),Kg(),Qc(737,`p`),Sk(738,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Qc(739,`pre`)(740,`code`),Sk(741,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),Kg()(),Qc(742,`p`),Sk(743,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),Kg(),Qc(744,`pre`)(745,`code`),Sk(746,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),Kg()()()(),Qc(747,`tr`,49)(748,`td`,17)(749,`div`,26)(750,`span`,27),Sk(751,` p-help`),vu(752,`br`),Kg()()(),Qc(753,`td`,21)(754,`code`,28),Sk(755,`string`),Kg()(),Qc(756,`td`,23),Sk(757,`-`),Kg(),Qc(758,`td`,24)(759,`em`)(760,`strong`),Sk(761,`(opcional)`),Kg()(),Qc(762,`p`),Sk(763,`Texto de apoio para o campo.`),Kg()()(),Qc(764,`tr`,50)(765,`td`,17)(766,`div`,26)(767,`span`,27),Sk(768,` p-hide-search`),vu(769,`br`),Kg()()(),Qc(770,`td`,21)(771,`code`,30),Sk(772,`boolean`),Kg()(),Qc(773,`td`,23)(774,`p`)(775,`code`),Sk(776,`false`),Kg()()(),Qc(777,`td`,24)(778,`em`)(779,`strong`),Sk(780,`(opcional)`),Kg()(),Qc(781,`p`),Sk(782,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),Kg()()(),Qc(783,`tr`,51)(784,`td`,17)(785,`div`,26)(786,`span`,27),Sk(787,` p-hide-select-all`),vu(788,`br`),Kg()()(),Qc(789,`td`,21)(790,`code`,30),Sk(791,`boolean`),Kg()(),Qc(792,`td`,23)(793,`p`)(794,`code`),Sk(795,`false`),Kg()()(),Qc(796,`td`,24)(797,`em`)(798,`strong`),Sk(799,`(opcional)`),Kg()(),Qc(800,`p`),Sk(801,`Indica se o campo "Selecionar todos" será escondido.`),Kg()()(),Qc(802,`tr`,52)(803,`td`,17)(804,`div`,18)(805,`span`,19),Sk(806,` (p-keydown)`),vu(807,`br`),Kg()()(),Qc(808,`td`,21)(809,`code`,22),Sk(810,`EventEmitter`),Kg()(),Qc(811,`td`,23),Sk(812,`-`),Kg(),Qc(813,`td`,24)(814,`em`)(815,`strong`),Sk(816,`(opcional)`),Kg()(),Qc(817,`p`),Sk(818,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(819,`code`),Sk(820,`KeyboardEvent`),Kg(),Sk(821,` com informações sobre a tecla.`),Kg()()(),Qc(822,`tr`,53)(823,`td`,17)(824,`div`,26)(825,`span`,27),Sk(826,` p-label`),vu(827,`br`),Kg()()(),Qc(828,`td`,21)(829,`code`,28),Sk(830,`string`),Kg()(),Qc(831,`td`,23),Sk(832,`-`),Kg(),Qc(833,`td`,24)(834,`em`)(835,`strong`),Sk(836,`(opcional)`),Kg()(),Qc(837,`p`),Sk(838,`Label no componente.`),Kg()()(),Qc(839,`tr`,54)(840,`td`,17)(841,`div`,26)(842,`span`,27),Sk(843,` p-label-text-wrap`),vu(844,`br`),Kg()()(),Qc(845,`td`,21)(846,`code`,30),Sk(847,`boolean`),Kg()(),Qc(848,`td`,23)(849,`p`)(850,`code`),Sk(851,`false`),Kg()()(),Qc(852,`td`,24)(853,`em`)(854,`strong`),Sk(855,`(opcional)`),Kg()(),Qc(856,`p`),Sk(857,`Habilita a quebra automática do texto da propriedade `),Qc(858,`code`),Sk(859,`p-label`),Kg(),Sk(860,`. Quando `),Qc(861,`code`),Sk(862,`p-label-text-wrap`),Kg(),Sk(863,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(864,`tr`,55)(865,`td`,17)(866,`div`,26)(867,`span`,27),Sk(868,` p-listbox-control-position`),vu(869,`br`),Kg()()(),Qc(870,`td`,21)(871,`code`,56),Sk(872,`'top' `),Kg(),Qc(873,`code`,57),Sk(874,` 'bottom'`),Kg()(),Qc(875,`td`,23)(876,`p`)(877,`code`),Sk(878,`bottom`),Kg()()(),Qc(879,`td`,24)(880,`em`)(881,`strong`),Sk(882,`(opcional)`),Kg()(),Qc(883,`p`),Sk(884,`Define a direção preferida para exibição do `),Qc(885,`code`),Sk(886,`listbox`),Kg(),Sk(887,` em relação ao campo (`),Qc(888,`code`),Sk(889,`top`),Kg(),Sk(890,` ou `),Qc(891,`code`),Sk(892,`bottom`),Kg(),Sk(893,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Qc(894,`tr`,58)(895,`td`,17)(896,`div`,26)(897,`span`,27),Sk(898,` p-literals`),vu(899,`br`),Kg()()(),Qc(900,`td`,21)(901,`code`,59),Sk(902,`PoMultiselectLiterals`),Kg()(),Qc(903,`td`,23),Sk(904,`-`),Kg(),Qc(905,`td`,24)(906,`em`)(907,`strong`),Sk(908,`(opcional)`),Kg()(),Qc(909,`p`),Sk(910,`Objeto com as literais usadas no `),Qc(911,`code`),Sk(912,`po-multiselect`),Kg(),Sk(913,`.`),Kg(),Qc(914,`p`),Sk(915,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(916,`pre`)(917,`code`),Sk(918,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),Kg()(),Qc(919,`p`),Sk(920,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(921,`pre`)(922,`code`),Sk(923,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),Kg()(),Qc(924,`p`),Sk(925,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Qc(926,`pre`)(927,`code`),Sk(928,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),Kg()(),Qc(929,`blockquote`)(930,`p`),Sk(931,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(932,`a`,60)(933,`code`),Sk(934,`PoI18nService`),Kg()(),Sk(935,` ou do browser.`),Kg()()()(),Qc(936,`tr`,61)(937,`td`,17)(938,`div`,26)(939,`span`,27),Sk(940,` p-loading`),vu(941,`br`),Kg()()(),Qc(942,`td`,21)(943,`code`,30),Sk(944,`boolean`),Kg()(),Qc(945,`td`,23)(946,`p`)(947,`code`),Sk(948,`false`),Kg()()(),Qc(949,`td`,24)(950,`em`)(951,`strong`),Sk(952,`(opcional)`),Kg()(),Qc(953,`p`),Sk(954,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(955,`tr`,62)(956,`td`,17)(957,`div`,26)(958,`span`,27),Sk(959,` name`),vu(960,`br`),Kg()()(),Qc(961,`td`,21)(962,`code`,28),Sk(963,`string`),Kg()(),Qc(964,`td`,23),Sk(965,`-`),Kg(),Qc(966,`td`,24)(967,`p`),Sk(968,`Nome do componente.`),Kg()()(),Qc(969,`tr`,63)(970,`td`,17)(971,`div`,26)(972,`span`,27),Sk(973,` p-optional`),vu(974,`br`),Kg()()(),Qc(975,`td`,21)(976,`code`,30),Sk(977,`boolean`),Kg()(),Qc(978,`td`,23)(979,`p`)(980,`code`),Sk(981,`false`),Kg()()(),Qc(982,`td`,24)(983,`em`)(984,`strong`),Sk(985,`(opcional)`),Kg()(),Qc(986,`p`),Sk(987,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(988,`blockquote`)(989,`p`),Sk(990,`Não será exibida a indicação se:`),Kg()(),Qc(991,`ul`)(992,`li`),Sk(993,`O campo conter `),Qc(994,`code`),Sk(995,`p-required`),Kg(),Sk(996,`;`),Kg(),Qc(997,`li`),Sk(998,`Não possuir `),Qc(999,`code`),Sk(1e3,`p-help`),Kg(),Sk(1001,` e/ou `),Qc(1002,`code`),Sk(1003,`p-label`),Kg(),Sk(1004,`.`),Kg()()()(),Qc(1005,`tr`,64)(1006,`td`,17)(1007,`div`,26)(1008,`span`,27),Sk(1009,` p-options`),vu(1010,`br`),Kg()()(),Qc(1011,`td`,21)(1012,`code`,65),Sk(1013,`Array<PoMultiselectOption `),Kg(),Qc(1014,`code`,66),Sk(1015,` any>`),Kg()(),Qc(1016,`td`,23),Sk(1017,`-`),Kg(),Qc(1018,`td`,24)(1019,`p`),Sk(1020,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),Kg(),Qc(1021,`blockquote`)(1022,`p`),Sk(1023,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Kg()(),Qc(1024,`pre`)(1025,`code`),Sk(1026,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Kg()(),Qc(1027,`blockquote`)(1028,`p`),Sk(1029,`A lista pode ser definida utilizando um array com o valor representando `),Qc(1030,`code`),Sk(1031,`value`),Kg(),Sk(1032,` e `),Qc(1033,`code`),Sk(1034,`label`),Kg(),Sk(1035,` das seguintes formas:`),Kg()(),Qc(1036,`pre`)(1037,`code`),Sk(1038,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),Kg()(),Qc(1039,`pre`)(1040,`code`),Sk(1041,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),Kg()(),Qc(1042,`ul`)(1043,`li`),Sk(1044,`Aconselha-se utilizar valores distintos no `),Qc(1045,`code`),Sk(1046,`label`),Kg(),Sk(1047,` e `),Qc(1048,`code`),Sk(1049,`value`),Kg(),Sk(1050,` dos itens.`),Kg()()()(),Qc(1051,`tr`,67)(1052,`td`,17)(1053,`div`,26)(1054,`span`,27),Sk(1055,` p-placeholder`),vu(1056,`br`),Kg()()(),Qc(1057,`td`,21)(1058,`code`,28),Sk(1059,`string`),Kg()(),Qc(1060,`td`,23),Sk(1061,`-`),Kg(),Qc(1062,`td`,24)(1063,`em`)(1064,`strong`),Sk(1065,`(opcional)`),Kg()(),Qc(1066,`p`),Sk(1067,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Qc(1068,`tr`,68)(1069,`td`,17)(1070,`div`,26)(1071,`span`,27),Sk(1072,` p-placeholder-search`),vu(1073,`br`),Kg()()(),Qc(1074,`td`,21)(1075,`code`,28),Sk(1076,`string`),Kg()(),Qc(1077,`td`,23)(1078,`p`)(1079,`code`),Sk(1080,`Buscar`),Kg()()(),Qc(1081,`td`,24)(1082,`em`)(1083,`strong`),Sk(1084,`(opcional)`),Kg()(),Qc(1085,`p`),Sk(1086,`Placeholder do campo de pesquisa.`),Kg(),Qc(1087,`blockquote`)(1088,`p`),Sk(1089,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Kg()()()(),Qc(1090,`tr`,69)(1091,`td`,17)(1092,`div`,26)(1093,`span`,27),Sk(1094,` p-helper`),vu(1095,`br`),Kg()()(),Qc(1096,`td`,21)(1097,`code`,70),Sk(1098,`PoHelperOptions `),Kg(),Qc(1099,`code`,28),Sk(1100,` string`),Kg()(),Qc(1101,`td`,23),Sk(1102,`-`),Kg(),Qc(1103,`td`,24)(1104,`em`)(1105,`strong`),Sk(1106,`(opcional)`),Kg()(),Qc(1107,`p`),Sk(1108,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1109,`code`),Sk(1110,`p-label`),Kg(),Sk(1111,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1112,`code`),Sk(1113,`p-label`),Kg(),Sk(1114,`.`),Kg(),Qc(1115,`blockquote`)(1116,`p`),Sk(1117,`Para mais informações acesse: `),Qc(1118,`a`,71),Sk(1119,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1120,`.`),Kg()(),Qc(1121,`blockquote`)(1122,`p`),Sk(1123,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1124,`code`),Sk(1125,`p-additional-help-tooltip`),Kg(),Sk(1126,` e `),Qc(1127,`code`),Sk(1128,`p-additional-help`),Kg(),Sk(1129,`) será ignorado.`),Kg()()()(),Qc(1130,`tr`,72)(1131,`td`,17)(1132,`div`,26)(1133,`span`,27),Sk(1134,` p-required`),vu(1135,`br`),Kg()()(),Qc(1136,`td`,21)(1137,`code`,30),Sk(1138,`boolean`),Kg()(),Qc(1139,`td`,23)(1140,`p`)(1141,`code`),Sk(1142,`false`),Kg()()(),Qc(1143,`td`,24)(1144,`em`)(1145,`strong`),Sk(1146,`(opcional)`),Kg()(),Qc(1147,`p`),Sk(1148,`Define que o campo será obrigatório.`),Kg(),Qc(1149,`blockquote`)(1150,`p`),Sk(1151,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(1152,`code`),Sk(1153,`(p-disabled)`),Kg(),Sk(1154,`.`),Kg()()()(),Qc(1155,`tr`,73)(1156,`td`,17)(1157,`div`,26)(1158,`span`,27),Sk(1159,` p-show-required`),vu(1160,`br`),Kg()()(),Qc(1161,`td`,21)(1162,`code`,30),Sk(1163,`boolean`),Kg()(),Qc(1164,`td`,23),Sk(1165,`-`),Kg(),Qc(1166,`td`,24)(1167,`p`),Sk(1168,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1169,`blockquote`)(1170,`p`),Sk(1171,`Não será exibida a indicação se:`),Kg()(),Qc(1172,`ul`)(1173,`li`),Sk(1174,`Não possuir `),Qc(1175,`code`),Sk(1176,`p-help`),Kg(),Sk(1177,` e/ou `),Qc(1178,`code`),Sk(1179,`p-label`),Kg(),Sk(1180,`.`),Kg()()()(),Qc(1181,`tr`,74)(1182,`td`,17)(1183,`div`,26)(1184,`span`,27),Sk(1185,` p-size`),vu(1186,`br`),Kg()()(),Qc(1187,`td`,21)(1188,`code`,28),Sk(1189,`string`),Kg()(),Qc(1190,`td`,23)(1191,`p`)(1192,`code`),Sk(1193,`medium`),Kg()()(),Qc(1194,`td`,24)(1195,`em`)(1196,`strong`),Sk(1197,`(opcional)`),Kg()(),Qc(1198,`p`),Sk(1199,`Define o tamanho do componente:`),Kg(),Qc(1200,`ul`)(1201,`li`)(1202,`code`),Sk(1203,`small`),Kg(),Sk(1204,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1205,`li`)(1206,`code`),Sk(1207,`medium`),Kg(),Sk(1208,`: altura do input como 44px.`),Kg()(),Qc(1209,`blockquote`)(1210,`p`),Sk(1211,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1212,`code`),Sk(1213,`medium`),Kg(),Sk(1214,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1215,`a`,75),Sk(1216,`po-theme`),Kg(),Sk(1217,`.`),Kg()()()(),Qc(1218,`tr`,76)(1219,`td`,17)(1220,`div`,26)(1221,`span`,27),Sk(1222,` p-sort`),vu(1223,`br`),Kg()()(),Qc(1224,`td`,21)(1225,`code`,30),Sk(1226,`boolean`),Kg()(),Qc(1227,`td`,23)(1228,`p`)(1229,`code`),Sk(1230,`false`),Kg()()(),Qc(1231,`td`,24)(1232,`em`)(1233,`strong`),Sk(1234,`(opcional)`),Kg()(),Qc(1235,`p`),Sk(1236,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),Kg()()()(),Qc(1237,`h3`,12),Sk(1238,`Métodos`),Kg(),Qc(1239,`table`,77)(1240,`tr`,78)(1241,`th`,79)(1242,`div`,26)(1243,`h4`)(1244,`span`,27),Sk(1245,` focus `),Kg()()()()(),Qc(1246,`tr`,24)(1247,`td`,24)(1248,`p`),Sk(1249,`Função que atribui foco ao componente.`),Kg(),Qc(1250,`p`),Sk(1251,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1252,`pre`)(1253,`code`),Sk(1254,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),Kg()()()()(),vu(1255,`br`),Qc(1256,`table`,80)(1257,`tr`,78)(1258,`th`,79)(1259,`div`,26)(1260,`h4`)(1261,`span`,27),Sk(1262,` showAdditionalHelp `),Kg()()()()(),Qc(1263,`tr`,24)(1264,`td`,24)(1265,`p`),Sk(1266,`Método que exibe `),Qc(1267,`code`),Sk(1268,`p-helper`),Kg(),Sk(1269,` ou executa a ação definida em `),Qc(1270,`code`),Sk(1271,`p-helper{eventOnClick}`),Kg(),Sk(1272,` ou em `),Qc(1273,`code`),Sk(1274,`p-additionalHelp`),Kg(),Sk(1275,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1276,`code`),Sk(1277,`p-keydown`),Kg(),Sk(1278,`.`),Kg(),Qc(1279,`blockquote`)(1280,`p`),Sk(1281,`Exibe ou oculta o conteúdo do componente `),Qc(1282,`code`),Sk(1283,`po-helper`),Kg(),Sk(1284,` quando o componente estiver com foco.`),Kg()(),Qc(1285,`pre`)(1286,`code`),Sk(1287,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),Kg()(),Qc(1288,`pre`)(1289,`code`),Sk(1290,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1291,`br`),Qc(1292,`h3`),Sk(1293,`Interfaces`),Kg(),Qc(1294,`h4`,81)(1295,`code`,7),Sk(1296,`PoMultiselectFilter`),Kg()(),Qc(1297,`div`,2)(1298,`p`),Sk(1299,`Interface para os serviços que serão utilizados no po-multiselect.`),Kg()(),Qc(1300,`h4`,12),Sk(1301,`Métodos`),Kg(),Qc(1302,`table`,82)(1303,`tr`,78)(1304,`th`,79)(1305,`div`,26)(1306,`h4`)(1307,`span`,27),Sk(1308,` getFilteredData `),Kg()()()()(),Qc(1309,`tr`,24)(1310,`td`,24)(1311,`p`),Sk(1312,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Qc(1313,`code`),Sk(1314,`PoMultiselectOption`),Kg(),Sk(1315,`, será informado por parametro o campo e o valor a ser pesquisado.`),Kg()()()(),Qc(1316,`h5`)(1317,`b`),Sk(1318,`Parâmetros`),Kg()(),Qc(1319,`table`,13)(1320,`tr`,14)(1321,`th`,15),Sk(1322,`Nome`),Kg(),Qc(1323,`th`,15),Sk(1324,`Tipo`),Kg(),Qc(1325,`th`,15),Sk(1326,`Descrição`),Kg()(),Qc(1327,`tr`,78)(1328,`td`,17),Sk(1329,` params`),Kg(),Qc(1330,`td`,21)(1331,`code`,83),Sk(1332,` { property: string, value: string } `),Kg()(),Qc(1333,`td`,24)(1334,`p`),Sk(1335,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()()(),vu(1336,`br`),Qc(1337,`table`,84)(1338,`tr`,78)(1339,`th`,79)(1340,`div`,26)(1341,`h4`)(1342,`span`,27),Sk(1343,` getObjectsByValues `),Kg()()()()(),Qc(1344,`tr`,24)(1345,`td`,24)(1346,`p`),Sk(1347,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Qc(1348,`code`),Sk(1349,`PoMultiselectOption`),Kg(),Sk(1350,`, será informado por parâmetro valor a ser pesquisado.`),Kg()()()(),Qc(1351,`h5`)(1352,`b`),Sk(1353,`Parâmetros`),Kg()(),Qc(1354,`table`,13)(1355,`tr`,14)(1356,`th`,15),Sk(1357,`Nome`),Kg(),Qc(1358,`th`,15),Sk(1359,`Tipo`),Kg(),Qc(1360,`th`,15),Sk(1361,`Descrição`),Kg()(),Qc(1362,`tr`,78)(1363,`td`,17),Sk(1364,` values`),Kg(),Qc(1365,`td`,21)(1366,`code`,85),Sk(1367,` Array<string `),Kg(),Qc(1368,`code`,86),Sk(1369,` number> `),Kg()(),Qc(1370,`td`,24)(1371,`p`),Sk(1372,`Array com os valores a serem buscados.`),Kg()()()(),vu(1373,`br`),Qc(1374,`h4`,87)(1375,`code`,7),Sk(1376,`PoMultiselectLiterals`),Kg()(),Qc(1377,`div`,2)(1378,`p`),Sk(1379,`Interface para definição das literais usadas no `),Qc(1380,`code`),Sk(1381,`po-multiselect`),Kg(),Sk(1382,`.`),Kg()(),Qc(1383,`h4`,12),Sk(1384,`Propriedades`),Kg(),Qc(1385,`table`,13)(1386,`tr`,14)(1387,`th`,15),Sk(1388,`Nome`),Kg(),Qc(1389,`th`,15),Sk(1390,`Tipo`),Kg(),Qc(1391,`th`,15),Sk(1392,`Descrição`),Kg()(),Qc(1393,`tr`,88)(1394,`td`,17)(1395,`div`,26)(1396,`span`,27),Sk(1397,` noData`),vu(1398,`br`),Kg()()(),Qc(1399,`td`,21)(1400,`code`,28),Sk(1401,`string`),Kg()(),Qc(1402,`td`,24)(1403,`em`)(1404,`strong`),Sk(1405,`(opcional)`),Kg()(),Qc(1406,`p`),Sk(1407,`Texto exibido quando não houver dados encontrados na busca.`),Kg()()(),Qc(1408,`tr`,89)(1409,`td`,17)(1410,`div`,26)(1411,`span`,27),Sk(1412,` placeholderSearch`),vu(1413,`br`),Kg()()(),Qc(1414,`td`,21)(1415,`code`,28),Sk(1416,`string`),Kg()(),Qc(1417,`td`,24)(1418,`em`)(1419,`strong`),Sk(1420,`(opcional)`),Kg()(),Qc(1421,`p`),Sk(1422,`Texto do `),Qc(1423,`em`),Sk(1424,`placeholder`),Kg(),Sk(1425,` do campo de busca.`),Kg()()(),Qc(1426,`tr`,90)(1427,`td`,17)(1428,`div`,26)(1429,`span`,27),Sk(1430,` selectAll`),vu(1431,`br`),Kg()()(),Qc(1432,`td`,21)(1433,`code`,28),Sk(1434,`string`),Kg()(),Qc(1435,`td`,24)(1436,`em`)(1437,`strong`),Sk(1438,`(opcional)`),Kg()(),Qc(1439,`p`),Sk(1440,`Texto exibido no botão de selecionar todos.`),Kg()()(),Qc(1441,`tr`,91)(1442,`td`,17)(1443,`div`,26)(1444,`span`,27),Sk(1445,` selectItem`),vu(1446,`br`),Kg()()(),Qc(1447,`td`,21)(1448,`code`,28),Sk(1449,`string`),Kg()(),Qc(1450,`td`,24)(1451,`em`)(1452,`strong`),Sk(1453,`(opcional)`),Kg()(),Qc(1454,`p`),Sk(1455,`Texto exibido na propriedade placeholder.`),Kg()()()(),Qc(1456,`h4`,92)(1457,`code`,7),Sk(1458,`PoMultiselectOption`),Kg()(),Qc(1459,`div`,2)(1460,`p`),Sk(1461,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),Kg()(),Qc(1462,`h4`,12),Sk(1463,`Propriedades`),Kg(),Qc(1464,`table`,13)(1465,`tr`,14)(1466,`th`,15),Sk(1467,`Nome`),Kg(),Qc(1468,`th`,15),Sk(1469,`Tipo`),Kg(),Qc(1470,`th`,15),Sk(1471,`Descrição`),Kg()(),Qc(1472,`tr`,93)(1473,`td`,17)(1474,`div`,26)(1475,`span`,27),Sk(1476,` label`),vu(1477,`br`),Kg()()(),Qc(1478,`td`,21)(1479,`code`,28),Sk(1480,`string`),Kg()(),Qc(1481,`td`,24)(1482,`p`),Sk(1483,`Label exibido nos itens da lista.`),Kg()()(),Qc(1484,`tr`,94)(1485,`td`,17)(1486,`div`,26)(1487,`span`,27),Sk(1488,` value`),vu(1489,`br`),Kg()()(),Qc(1490,`td`,21)(1491,`code`,28),Sk(1492,`string `),Kg(),Qc(1493,`code`,38),Sk(1494,` number`),Kg()(),Qc(1495,`td`,24)(1496,`p`),Sk(1497,`Valor do objeto que será atribuído ao model.`),Kg()()()(),Qc(1498,`h3`),Sk(1499,`Enums`),Kg(),Qc(1500,`h4`,95)(1501,`code`,7),Sk(1502,`PoMultiselectFilterMode`),Kg()(),Qc(1503,`div`,2)(1504,`p`),Sk(1505,`Define o tipo de busca usado no po-multiselect.`),Kg()(),Qc(1506,`h4`,12),Sk(1507,`Propriedades`),Kg(),Qc(1508,`table`,13)(1509,`tr`,14)(1510,`th`,15),Sk(1511,`Nome`),Kg(),Qc(1512,`th`,15),Sk(1513,`Descrição`),Kg()(),Qc(1514,`tr`,96)(1515,`td`,17)(1516,`div`,26)(1517,`span`,27),Sk(1518,` startsWith`),vu(1519,`br`),Kg()()(),Qc(1520,`td`,24)(1521,`p`),Sk(1522,`Verifica se o texto `),Qc(1523,`em`),Sk(1524,`inicia`),Kg(),Sk(1525,` com o valor pesquisado.`),Kg()()(),Qc(1526,`tr`,97)(1527,`td`,17)(1528,`div`,26)(1529,`span`,27),Sk(1530,` contains`),vu(1531,`br`),Kg()()(),Qc(1532,`td`,24)(1533,`p`),Sk(1534,`Verifica se o texto `),Qc(1535,`em`),Sk(1536,`contém`),Kg(),Sk(1537,` o valor pesquisado.`),Kg()()(),Qc(1538,`tr`,98)(1539,`td`,17)(1540,`div`,26)(1541,`span`,27),Sk(1542,` endsWith`),vu(1543,`br`),Kg()()(),Qc(1544,`td`,24)(1545,`p`),Sk(1546,`Verifica se o texto `),Qc(1547,`em`),Sk(1548,`finaliza`),Kg(),Sk(1549,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function St(o,K){if(o&1){let s=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(s);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-multiselect-basic-view`)(2,`sample-po-multiselect-labs-view`)(3,`sample-po-multiselect-vacation-view`)(4,`sample-po-multiselect-vacation-reactive-form-view`)(5,`sample-po-multiselect-template-view`)(6,`sample-po-multiselect-heroes-view`)(7,`sample-po-multiselect-any-array-view`),Kg()}if(o&2){let s=ek();Rb(`p-active`,s.activeTab===`web`)}}var ft=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,St,8,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-multiselect-doc`),Kg()()()),a&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,De,ke,Le,Fe,We,Ne,He,je],encapsulation:2,changeDetection:1})}return o})()}];var Je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(ft),GV]})}return o})();var Mi=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Je]})}return o})();export{Mi as DocPoMultiselectModule};
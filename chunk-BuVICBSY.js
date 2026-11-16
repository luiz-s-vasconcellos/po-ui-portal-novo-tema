import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,Da as kI,Dr as Gk,F as Joe,G as Nf,Hi as Y,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Rr as Kk,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,eo as uF,gi as Rb,go as z0,ha as i1,hr as Db,io as vu,j as I4,ji as Vk,li as Qc,lt as Ss,na as de$1,on as ioe,oo as wg,p as DP,pi as R,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,w as Fc,wn as q4,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var Ve=(()=>{class o{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,n){a&1&&vu(0,`po-multiselect`,0),a&2&&Rb(`p-options`,n.options)},dependencies:[DP],encapsulation:2,changeDetection:1})}return o})();var Ge=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ge,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return o})();var Ae=(()=>{class o{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`div`,2)(1,`po-multiselect`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.multiselect,r)||(n.multiselect=r),U_(r)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg()(),vu(2,`po-divider`),Qc(3,`div`,2),vu(4,`po-info`,4)(5,`po-info`,5),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.option.label,r)||(n.option.label=r),U_(r)}),Kg(),Qc(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.option.value,r)||(n.option.value=r),U_(r)}),Kg()(),Qc(12,`div`,2)(13,`po-button`,8),vt(`p-click`,function(){return n.addOption()}),Kg()()(),vu(14,`po-divider`),Qc(15,`form`,null,1)(17,`po-input`,9),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.label,r)||(n.label=r),U_(r)}),Kg(),Qc(18,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.help,r)||(n.help=r),U_(r)}),Kg(),Qc(19,`po-input`,11),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.helperText,r)||(n.helperText=r),U_(r)}),Kg(),Qc(20,`po-input`,12),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.placeholder,r)||(n.placeholder=r),U_(r)}),Kg(),Qc(21,`po-input`,13),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.placeholderSearch,r)||(n.placeholderSearch=r),U_(r)}),Kg(),Qc(22,`po-input`,14),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),U_(r)}),Kg(),Qc(23,`po-input`,15),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.literals,r)||(n.literals=r),U_(r)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Qc(24,`po-input`,16),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.filterService,r)||(n.filterService=r),U_(r)}),Kg(),Qc(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldValue,r)||(n.fieldValue=r),U_(r)}),Kg(),Qc(26,`po-input`,18),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.fieldLabel,r)||(n.fieldLabel=r),U_(r)}),Kg(),Qc(27,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.properties,r)||(n.properties=r),U_(r)}),Kg(),Qc(28,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.filterMode,r)||(n.filterMode=r),U_(r)}),Kg(),Qc(29,`po-radio-group`,21),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.size,r)||(n.size=r),U_(r)}),Kg(),Qc(30,`po-radio-group`,22),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.listboxPosition,r)||(n.listboxPosition=r),U_(r)}),Kg(),Qc(31,`div`,2)(32,`po-button`,23),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(a&2){let c=ik(8);wg(),Yb(`ngModel`,n.multiselect),Rb(`p-helper`,n.helperText)(`p-auto-height`,n.properties.includes(`autoHeight`))(`p-disabled`,n.properties.includes(`disabled`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-service`,n.filterService)(`p-filter-mode`,n.filterMode)(`p-help`,n.help)(`p-hide-search`,n.properties.includes(`hideSearch`))(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-placeholder-search`,n.placeholderSearch)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-sort`,n.properties.includes(`sort`))(`p-listbox-control-position`,n.listboxPosition)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,n.multiselect),wg(),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.value),W0(),wg(2),Rb(`p-disabled`,c.form.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.placeholderSearch),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(),Yb(`ngModel`,n.filterService),W0(),wg(),Yb(`ngModel`,n.fieldValue),W0(),wg(),Yb(`ngModel`,n.fieldLabel),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.filterMode),Rb(`p-disabled`,n.properties.includes(`hideSearch`))(`p-options`,n.filterModeOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.listboxPosition),Rb(`p-options`,n.listboxPositionOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,DP,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var Ye=o=>({"docs-sample-code-tabs":o});var Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ye,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return o})();var Le=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(`, `)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`form`,null,0)(2,`h3`),Sk(3,`Collective vacations`),Kg(),vu(4,`po-divider`),Qc(5,`div`,2)(6,`po-datepicker`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.initialPeriod,r)||(n.initialPeriod=r),U_(r)}),Kg(),Qc(7,`po-datepicker`,4),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.finalPeriod,r)||(n.finalPeriod=r),U_(r)}),Kg()(),Qc(8,`div`,2)(9,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.days,r)||(n.days=r),U_(r)}),Kg()(),Qc(10,`div`,2)(11,`po-multiselect`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(n.employeesVacations,r)||(n.employeesVacations=r),U_(r)}),Kg()(),Qc(12,`div`,2)(13,`po-button`,7),vt(`p-click`,function(){B_(c);let r=ik(16);return n.updateNameEmployeesVacations(),U_(r.open())}),Kg(),Qc(14,`po-button`,8),vt(`p-click`,function(){return n.clean()}),Kg()()(),Qc(15,`po-modal`,9,1)(17,`div`,2),vu(18,`po-info`,10),Gk(19,`date`),vu(20,`po-info`,11),Gk(21,`date`),vu(22,`po-info`,12),Kg(),vu(23,`po-divider`),Qc(24,`div`,2),vu(25,`po-info`,13),Kg()()}if(a&2){let c=ik(1);wg(6),Yb(`ngModel`,n.initialPeriod),W0(),wg(),Yb(`ngModel`,n.finalPeriod),Rb(`p-min-date`,n.initialPeriod),W0(),wg(2),Yb(`ngModel`,n.days),Rb(`p-options`,n.daysOptions),W0(),wg(2),Yb(`ngModel`,n.employeesVacations),Rb(`p-options`,n.employees),W0(),wg(2),Rb(`p-disabled`,c.form.invalid),wg(5),Rb(`p-value`,Kk(19,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,Kk(21,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,n.days),wg(3),Rb(`p-value`,n.nameEmployeesVacations)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return o})();var $e=o=>({"docs-sample-code-tabs":o});var ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-vacation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Vacation`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form #f="ngForm">
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-vacation`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,$e,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Le],encapsulation:2,changeDetection:1})}return o})();var qe=(()=>{class o{formBuilder=p(OZ);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,Xm.required],finalPeriod:[null,Xm.required],days:[null,Xm.required],employeesVacations:[null,Xm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(s.value)).map(s=>s.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=YO();Qc(0,`form`,1)(1,`h3`),Sk(2,`Collective vacations`),Kg(),vu(3,`po-divider`),Qc(4,`div`,2)(5,`po-datepicker`,3),z0(),Kg(),Qc(6,`po-datepicker`,4),z0(),Kg()(),Qc(7,`div`,2)(8,`po-multiselect`,5),z0(),Kg(),Qc(9,`po-radio-group`,6),z0(),Kg()(),Qc(10,`div`,2)(11,`po-button`,7),vt(`p-click`,function(){B_(c);let r=ik(14);return n.updateEmployeesVacations(),U_(r.open())}),Kg(),Qc(12,`po-button`,8),vt(`p-click`,function(){return n.clean()}),Kg()()(),Qc(13,`po-modal`,9,0)(15,`div`,2),vu(16,`po-info`,10),Gk(17,`date`),vu(18,`po-info`,11),Gk(19,`date`),vu(20,`po-info`,12),Kg(),vu(21,`po-divider`),Qc(22,`div`,2),vu(23,`po-info`,13),Kg()()}a&2&&(Rb(`formGroup`,n.formCollectiveVacations),wg(5),W0(),wg(),Rb(`p-min-date`,n.getRangeFinalPeriod()),W0(),wg(2),Rb(`p-auto-height`,!0)(`p-options`,n.employees)(`p-required`,!0),W0(),wg(),Rb(`p-options`,n.daysOptions)(`p-columns`,3),W0(),wg(2),Rb(`p-disabled`,n.formCollectiveVacations.invalid),wg(5),Rb(`p-value`,Kk(17,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,Kk(19,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Rb(`p-value`,n.days),wg(3),Rb(`p-value`,n.nameEmployeesVacations))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return o})();var it=o=>({"docs-sample-code-tabs":o});var Fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-multiselect-vacation-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Vacation Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form [formGroup]="formCollectiveVacations">
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
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-multiselect-template`),Kg(),vu(29,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,st,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Be],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{http=p(kI);getFilteredData({value:s}){let a={filter:s};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(Y(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(Y(a=>a.items))}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ze=(()=>{class o{samplePoMultiselectHeroesService=p(de);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,`_blank`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[we([de])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`po-multiselect`,1),z0(),Kb(`ngModelChange`,function(m){return Tk(n.multiselect,m)||(n.multiselect=m),m}),vt(`p-change`,function(m){return n.changeOptions(m)}),Kg(),Qc(2,`po-container`,2),vu(3,`po-table`,3),Kg()()),a&2&&(wg(),Yb(`ngModel`,n.multiselect),Rb(`p-filter-service`,n.filterService)(`p-debounce-time`,n.debounce),W0(),wg(2),Rb(`p-columns`,n.columns)(`p-items`,n.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[MZ,QL,Fc,DP,q4],encapsulation:2,changeDetection:1})}return o})();var ct=o=>({"docs-sample-code-tabs":o});var Ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-multiselect-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Multiselect - Heroes - using API`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-multiselect-any-array`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ht,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ie],encapsulation:2,changeDetection:1})}return o})();var je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1552,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-multiselect-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-height`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-search`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder-search`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-multiselect-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`id`,`interface-po-multiselect-filter-method-getObjectsByValues`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`],[`id`,`interface-po-multiselect-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-placeholder-search`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-item`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-multiselect-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-ends-with`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-multiselect-option-template?view=doc`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoMultiselectComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),Kg(),Qc(24,`p`),Sk(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),Kg(),Qc(26,`p`),Sk(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),Kg(),Qc(28,`p`),Sk(29,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Qc(30,`code`),Sk(31,`p-filter-service`),Kg(),Sk(32,`.`),Kg(),Qc(33,`h4`),Sk(34,`Boas práticas`),Kg(),Qc(35,`ul`)(36,`li`),Sk(37,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),Kg(),Qc(38,`li`),Sk(39,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),Kg()(),Qc(40,`h4`),Sk(41,`Acessibilidade tratada no componente`),Kg(),Qc(42,`p`),Sk(43,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(44,`ul`)(45,`li`),Sk(46,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),Kg(),Qc(47,`li`),Sk(48,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),Kg(),Qc(49,`li`),Sk(50,`Utilize a tecla Esc do teclado para fechar o listbox.`),Kg(),Qc(51,`li`),Sk(52,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),Kg(),Qc(53,`li`),Sk(54,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),Kg()(),Qc(55,`h4`),Sk(56,`Tokens customizáveis`),Kg(),Qc(57,`p`),Sk(58,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(59,`blockquote`)(60,`p`),Sk(61,`Para maiores informações, acesse o guia `),Qc(62,`a`,6),Sk(63,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(64,`.`),Kg()(),Qc(65,`table`)(66,`thead`)(67,`tr`)(68,`th`),Sk(69,`Propriedade`),Kg(),Qc(70,`th`),Sk(71,`Descrição`),Kg(),Qc(72,`th`),Sk(73,`Valor Padrão`),Kg()()(),Qc(74,`tbody`)(75,`tr`)(76,`td`)(77,`strong`),Sk(78,`Default Values`),Kg()(),vu(79,`td`)(80,`td`),Kg(),Qc(81,`tr`)(82,`td`)(83,`code`),Sk(84,`--font-family`),Kg()(),Qc(85,`td`),Sk(86,`Família tipográfica usada`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`var(--font-family-theme)`),Kg()()(),Qc(90,`tr`)(91,`td`)(92,`code`),Sk(93,`--font-size`),Kg()(),Qc(94,`td`),Sk(95,`Tamanho da fonte`),Kg(),Qc(96,`td`)(97,`code`),Sk(98,`var(--font-size-default)`),Kg()()(),Qc(99,`tr`)(100,`td`)(101,`code`),Sk(102,`--text-color-placeholder`),Kg(),Sk(103,` \xA0`),Kg(),Qc(104,`td`),Sk(105,`Cor do texto do placeholder`),Kg(),Qc(106,`td`)(107,`code`),Sk(108,`var(--color-action-disabled)`),Kg()()(),Qc(109,`tr`)(110,`td`)(111,`code`),Sk(112,`--color`),Kg()(),Qc(113,`td`),Sk(114,`Cor principal do multiselect`),Kg(),Qc(115,`td`)(116,`code`),Sk(117,`var(--color-neutral-dark-70)`),Kg()()(),Qc(118,`tr`)(119,`td`)(120,`code`),Sk(121,`--background`),Kg()(),Qc(122,`td`),Sk(123,`Cor de background`),Kg(),Qc(124,`td`)(125,`code`),Sk(126,`var(--color-neutral-light-05)`),Kg()()(),Qc(127,`tr`)(128,`td`)(129,`code`),Sk(130,`--field-container-title-justify`),Kg()(),Qc(131,`td`),Sk(132,`Alinhamento horizontal do título (`),Qc(133,`code`),Sk(134,`justify-content`),Kg(),Sk(135,`)`),Kg(),Qc(136,`td`)(137,`code`),Sk(138,`space-between`),Kg()()(),Qc(139,`tr`)(140,`td`)(141,`code`),Sk(142,`--field-container-title-flex`),Kg()(),Qc(143,`td`),Sk(144,`Flex do título (`),Qc(145,`code`),Sk(146,`flex`),Kg(),Sk(147,`)`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`1 auto`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`strong`),Sk(154,`Hover`),Kg()(),vu(155,`td`)(156,`td`),Kg(),Qc(157,`tr`)(158,`td`)(159,`code`),Sk(160,`--color-hover`),Kg()(),Qc(161,`td`),Sk(162,`Cor principal no estado hover`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`var(--color-action-hover)`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--background-hover`),Kg()(),Qc(170,`td`),Sk(171,`Cor de background no estado hover`),Kg(),Qc(172,`td`)(173,`code`),Sk(174,`var(--color-brand-01-lighter)`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`strong`),Sk(178,`Focused`),Kg()(),vu(179,`td`)(180,`td`),Kg(),Qc(181,`tr`)(182,`td`)(183,`code`),Sk(184,`--color-focused`),Kg()(),Qc(185,`td`),Sk(186,`Cor principal no estado de focus`),Kg(),Qc(187,`td`)(188,`code`),Sk(189,`var(--color-action-default)`),Kg()()(),Qc(190,`tr`)(191,`td`)(192,`code`),Sk(193,`--outline-color-focused`),Kg(),Sk(194,` \xA0`),Kg(),Qc(195,`td`),Sk(196,`Cor do outline do estado de focus`),Kg(),Qc(197,`td`)(198,`code`),Sk(199,`var(--color-action-focus)`),Kg()()(),Qc(200,`tr`)(201,`td`)(202,`strong`),Sk(203,`Disabled`),Kg()(),vu(204,`td`)(205,`td`),Kg(),Qc(206,`tr`)(207,`td`)(208,`code`),Sk(209,`--color-disabled`),Kg()(),Qc(210,`td`),Sk(211,`Cor principal no estado disabled`),Kg(),Qc(212,`td`)(213,`code`),Sk(214,`var(--color-action-disabled)`),Kg()()(),Qc(215,`tr`)(216,`td`)(217,`code`),Sk(218,`--background-disabled`),Kg(),Sk(219,` \xA0`),Kg(),Qc(220,`td`),Sk(221,`Cor de background no estado disabled \xA0`),Kg(),Qc(222,`td`)(223,`code`),Sk(224,`var(--color-neutral-light-20)`),Kg()()(),Qc(225,`tr`)(226,`td`)(227,`strong`),Sk(228,`Error`),Kg()(),vu(229,`td`)(230,`td`),Kg(),Qc(231,`tr`)(232,`td`)(233,`code`),Sk(234,`--color-error`),Kg()(),Qc(235,`td`),Sk(236,`Cor principal no estado error`),Kg(),Qc(237,`td`)(238,`code`),Sk(239,`var(--color-feedback-negative-base)`),Kg()()()()()(),Qc(240,`div`,7)(241,`h4`,8),Sk(242,`Seletor`),Kg(),Qc(243,`pre`,9),Sk(244,`<po-multiselect
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
`),Kg()(),Qc(245,`h4`,10),Sk(246,`Propriedades`),Kg(),Qc(247,`table`,11)(248,`tr`,12)(249,`th`,13),Sk(250,`Nome`),Kg(),Qc(251,`th`,13),Sk(252,`Tipo`),Kg(),Qc(253,`th`,13),Sk(254,`Padrão`),Kg(),Qc(255,`th`,13),Sk(256,`Descrição`),Kg()(),Qc(257,`tr`,14)(258,`td`,15)(259,`div`,16)(260,`span`,17),Sk(261,` (p-additional-help)`),vu(262,`br`),Kg()(),Qc(263,`div`,18),Sk(264,`Deprecated`),Kg()(),Qc(265,`td`,19)(266,`code`,20),Sk(267,`EventEmitter`),Kg()(),Qc(268,`td`,21),Sk(269,`-`),Kg(),Qc(270,`td`,22)(271,`em`)(272,`strong`),Sk(273,`(opcional)`),Kg()(),Qc(274,`p`),Sk(275,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(276,`blockquote`)(277,`p`),Sk(278,`Essa propriedade está `),Qc(279,`strong`),Sk(280,`depreciada`),Kg(),Sk(281,` e será removida na versão `),Qc(282,`code`),Sk(283,`23.x.x`),Kg(),Sk(284,`. Recomendamos utilizar a propriedade `),Qc(285,`code`),Sk(286,`p-helper`),Kg(),Sk(287,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(288,`tr`,23)(289,`td`,15)(290,`div`,24)(291,`span`,25),Sk(292,` p-additional-help-tooltip`),vu(293,`br`),Kg()(),Qc(294,`div`,18),Sk(295,`Deprecated`),Kg()(),Qc(296,`td`,19)(297,`code`,26),Sk(298,`string`),Kg()(),Qc(299,`td`,21),Sk(300,`-`),Kg(),Qc(301,`td`,22)(302,`em`)(303,`strong`),Sk(304,`(opcional)`),Kg()(),Qc(305,`p`),Sk(306,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(307,`code`),Sk(308,`po-helper`),Kg(),Sk(309,`.
`),Qc(310,`strong`),Sk(311,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(312,`blockquote`)(313,`p`),Sk(314,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(315,`blockquote`)(316,`p`),Sk(317,`Essa propriedade está `),Qc(318,`strong`),Sk(319,`depreciada`),Kg(),Sk(320,` e será removida na versão `),Qc(321,`code`),Sk(322,`23.x.x`),Kg(),Sk(323,`. Recomendamos utilizar a propriedade `),Qc(324,`code`),Sk(325,`p-helper`),Kg(),Sk(326,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(327,`tr`,27)(328,`td`,15)(329,`div`,24)(330,`span`,25),Sk(331,` p-append-in-body`),vu(332,`br`),Kg()()(),Qc(333,`td`,19)(334,`code`,28),Sk(335,`boolean`),Kg()(),Qc(336,`td`,21)(337,`p`)(338,`code`),Sk(339,`false`),Kg()()(),Qc(340,`td`,22)(341,`em`)(342,`strong`),Sk(343,`(opcional)`),Kg()(),Qc(344,`p`),Sk(345,`Define que o `),Qc(346,`code`),Sk(347,`listbox`),Kg(),Sk(348,` e/ou popover (`),Qc(349,`code`),Sk(350,`p-helper`),Kg(),Sk(351,` e/ou `),Qc(352,`code`),Sk(353,`p-error-limit`),Kg(),Sk(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Qc(355,`blockquote`)(356,`p`),Sk(357,`Quando utilizado com `),Qc(358,`code`),Sk(359,`p-helper`),Kg(),Sk(360,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(361,`tr`,29)(362,`td`,15)(363,`div`,24)(364,`span`,25),Sk(365,` p-auto-focus`),vu(366,`br`),Kg()()(),Qc(367,`td`,19)(368,`code`,28),Sk(369,`boolean`),Kg()(),Qc(370,`td`,21)(371,`p`)(372,`code`),Sk(373,`false`),Kg()()(),Qc(374,`td`,22)(375,`em`)(376,`strong`),Sk(377,`(opcional)`),Kg()(),Qc(378,`p`),Sk(379,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(380,`blockquote`)(381,`p`),Sk(382,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(383,`tr`,30)(384,`td`,15)(385,`div`,24)(386,`span`,25),Sk(387,` p-auto-height`),vu(388,`br`),Kg()()(),Qc(389,`td`,19)(390,`code`,28),Sk(391,`boolean`),Kg()(),Qc(392,`td`,21)(393,`p`)(394,`code`),Sk(395,`false`),Kg()()(),Qc(396,`td`,22)(397,`em`)(398,`strong`),Sk(399,`(opcional)`),Kg()(),Qc(400,`p`),Sk(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Kg(),Qc(402,`blockquote`)(403,`p`),Sk(404,`O valor padrão será `),Qc(405,`code`),Sk(406,`true`),Kg(),Sk(407,` quando houver serviço (`),Qc(408,`code`),Sk(409,`p-filter-service`),Kg(),Sk(410,`).`),Kg()()()(),Qc(411,`tr`,31)(412,`td`,15)(413,`div`,16)(414,`span`,17),Sk(415,` (p-blur)`),vu(416,`br`),Kg()()(),Qc(417,`td`,19)(418,`code`,20),Sk(419,`EventEmitter`),Kg()(),Qc(420,`td`,21),Sk(421,`-`),Kg(),Qc(422,`td`,22)(423,`em`)(424,`strong`),Sk(425,`(opcional)`),Kg()(),Qc(426,`p`),Sk(427,`Evento disparado ao sair do campo.`),Kg()()(),Qc(428,`tr`,32)(429,`td`,15)(430,`div`,16)(431,`span`,17),Sk(432,` (p-change)`),vu(433,`br`),Kg()()(),Qc(434,`td`,19)(435,`code`,20),Sk(436,`EventEmitter`),Kg()(),Qc(437,`td`,21),Sk(438,`-`),Kg(),Qc(439,`td`,22)(440,`em`)(441,`strong`),Sk(442,`(opcional)`),Kg()(),Qc(443,`p`),Sk(444,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),Kg()()(),Qc(445,`tr`,33)(446,`td`,15)(447,`div`,16)(448,`span`,17),Sk(449,` (p-change-model)`),vu(450,`br`),Kg()()(),Qc(451,`td`,19)(452,`code`,20),Sk(453,`EventEmitter`),Kg()(),Qc(454,`td`,21),Sk(455,`-`),Kg(),Qc(456,`td`,22)(457,`em`)(458,`strong`),Sk(459,`(opcional)`),Kg()(),Qc(460,`p`),Sk(461,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(462,`code`),Sk(463,`setValue`),Kg(),Sk(464,`, `),Qc(465,`code`),Sk(466,`patchValue`),Kg(),Sk(467,`, carregamento assíncrono).`),Kg(),Qc(468,`p`),Sk(469,`Diferentemente do `),Qc(470,`code`),Sk(471,`p-change`),Kg(),Sk(472,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(473,`code`),Sk(474,`p-change-model`),Kg(),Sk(475,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(476,`p`),Sk(477,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(478,`tr`,34)(479,`td`,15)(480,`div`,24)(481,`span`,25),Sk(482,` p-compact-label`),vu(483,`br`),Kg()()(),Qc(484,`td`,19)(485,`code`,28),Sk(486,`boolean`),Kg()(),Qc(487,`td`,21)(488,`p`)(489,`code`),Sk(490,`false`),Kg()()(),Qc(491,`td`,22)(492,`em`)(493,`strong`),Sk(494,`(opcional)`),Kg()(),Qc(495,`p`),Sk(496,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(497,`p`),Sk(498,`Quando habilitado (`),Qc(499,`code`),Sk(500,`true`),Kg(),Sk(501,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(502,`ul`)(503,`li`)(504,`code`),Sk(505,`po-label`),Kg()(),Qc(506,`li`)(507,`code`),Sk(508,`p-requirement (showRequired)`),Kg()(),Qc(509,`li`)(510,`code`),Sk(511,`po-helper`),Kg()()(),Qc(512,`p`),Sk(513,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(514,`p`),Sk(515,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(516,`ul`)(517,`li`)(518,`code`),Sk(519,`--field-container-title-justify`),Kg()(),Qc(520,`li`)(521,`code`),Sk(522,`--field-container-title-flex`),Kg()()(),Qc(523,`p`),Sk(524,`Exemplo:`),Kg(),Qc(525,`pre`)(526,`code`),Sk(527,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(528,`p`),Sk(529,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(530,`tr`,35)(531,`td`,15)(532,`div`,24)(533,`span`,25),Sk(534,` p-debounce-time`),vu(535,`br`),Kg()()(),Qc(536,`td`,19)(537,`code`,36),Sk(538,`number`),Kg()(),Qc(539,`td`,21)(540,`p`)(541,`code`),Sk(542,`400`),Kg()()(),Qc(543,`td`,22)(544,`em`)(545,`strong`),Sk(546,`(opcional)`),Kg()(),Qc(547,`p`),Sk(548,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),Kg(),Qc(549,`blockquote`)(550,`p`),Sk(551,`Será utilizada apenas quando houver serviço (`),Qc(552,`code`),Sk(553,`p-filter-service`),Kg(),Sk(554,`) e somente será aceito valor maior do que `),Qc(555,`em`),Sk(556,`zero`),Kg(),Sk(557,`.`),Kg()()()(),Qc(558,`tr`,37)(559,`td`,15)(560,`div`,24)(561,`span`,25),Sk(562,` p-disabled`),vu(563,`br`),Kg()()(),Qc(564,`td`,19)(565,`code`,28),Sk(566,`boolean`),Kg()(),Qc(567,`td`,21)(568,`p`)(569,`code`),Sk(570,`false`),Kg()()(),Qc(571,`td`,22)(572,`em`)(573,`strong`),Sk(574,`(opcional)`),Kg()(),Qc(575,`p`),Sk(576,`Indica que o campo será desabilitado.`),Kg()()(),Qc(577,`tr`,38)(578,`td`,15)(579,`div`,24)(580,`span`,25),Sk(581,` p-error-limit`),vu(582,`br`),Kg()()(),Qc(583,`td`,19)(584,`code`,28),Sk(585,`boolean`),Kg()(),Qc(586,`td`,21)(587,`p`)(588,`code`),Sk(589,`false`),Kg()()(),Qc(590,`td`,22)(591,`em`)(592,`strong`),Sk(593,`(opcional)`),Kg()(),Qc(594,`p`),Sk(595,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(596,`blockquote`)(597,`p`),Sk(598,`Caso essa propriedade seja definida como `),Qc(599,`code`),Sk(600,`true`),Kg(),Sk(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(602,`tr`,39)(603,`td`,15)(604,`div`,24)(605,`span`,25),Sk(606,` p-field-error-message`),vu(607,`br`),Kg()()(),Qc(608,`td`,19)(609,`code`,26),Sk(610,`string`),Kg()(),Qc(611,`td`,21),Sk(612,`-`),Kg(),Qc(613,`td`,22)(614,`em`)(615,`strong`),Sk(616,`(opcional)`),Kg()(),Qc(617,`p`),Sk(618,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(619,`blockquote`)(620,`p`),Sk(621,`Necessário que a propriedade `),Qc(622,`code`),Sk(623,`p-required`),Kg(),Sk(624,` esteja habilitada.`),Kg()()()(),Qc(625,`tr`,40)(626,`td`,15)(627,`div`,24)(628,`span`,25),Sk(629,` p-field-label`),vu(630,`br`),Kg()()(),Qc(631,`td`,19)(632,`code`,26),Sk(633,`string`),Kg()(),Qc(634,`td`,21)(635,`p`)(636,`code`),Sk(637,`label`),Kg()()(),Qc(638,`td`,22)(639,`em`)(640,`strong`),Sk(641,`(opcional)`),Kg()(),Qc(642,`p`),Sk(643,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(644,`code`),Sk(645,`p-options`),Kg(),Sk(646,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Qc(647,`p`),Sk(648,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Qc(649,`code`),Sk(650,`PoMultiSelectOption`),Kg(),Sk(651,`.`),Kg()()(),Qc(652,`tr`,41)(653,`td`,15)(654,`div`,24)(655,`span`,25),Sk(656,` p-field-value`),vu(657,`br`),Kg()()(),Qc(658,`td`,19)(659,`code`,26),Sk(660,`string`),Kg()(),Qc(661,`td`,21)(662,`p`)(663,`code`),Sk(664,`value`),Kg()()(),Qc(665,`td`,22)(666,`em`)(667,`strong`),Sk(668,`(opcional)`),Kg()(),Qc(669,`p`),Sk(670,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(671,`code`),Sk(672,`p-options`),Kg(),Sk(673,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Qc(674,`p`),Sk(675,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Qc(676,`code`),Sk(677,`PoMultiSelectOption`),Kg(),Sk(678,`.`),Kg()()(),Qc(679,`tr`,42)(680,`td`,15)(681,`div`,24)(682,`span`,25),Sk(683,` p-filter-mode`),vu(684,`br`),Kg()()(),Qc(685,`td`,19)(686,`code`,43),Sk(687,`PoMultiselectFilterMode`),Kg()(),Qc(688,`td`,21)(689,`p`)(690,`code`),Sk(691,`startsWith`),Kg()()(),Qc(692,`td`,22)(693,`em`)(694,`strong`),Sk(695,`(opcional)`),Kg()(),Qc(696,`p`),Sk(697,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),Kg()()(),Qc(698,`tr`,44)(699,`td`,15)(700,`div`,24)(701,`span`,25),Sk(702,` p-filter-service`),vu(703,`br`),Kg()()(),Qc(704,`td`,19)(705,`code`,26),Sk(706,`string `),Kg(),Qc(707,`code`,45),Sk(708,` PoMultiselectFilter`),Kg()(),Qc(709,`td`,21),Sk(710,`-`),Kg(),Qc(711,`td`,22)(712,`em`)(713,`strong`),Sk(714,`(opcional)`),Kg()(),Qc(715,`p`),Sk(716,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),Kg(),Qc(717,`p`),Sk(718,`Também existe a possibilidade de informar um serviço implementando a interface `),Qc(719,`code`),Sk(720,`PoMultiselectFilter`),Kg(),Sk(721,`.`),Kg(),Qc(722,`p`),Sk(723,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Qc(724,`a`,46),Sk(725,`API PO UI`),Kg(),Sk(726,` e utilizar as propriedades `),Qc(727,`code`),Sk(728,`p-field-label`),Kg(),Sk(729,` e `),Qc(730,`code`),Sk(731,`p-field-value`),Kg(),Sk(732,` para a construção da lista de itens.`),Kg(),Qc(733,`p`),Sk(734,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Qc(735,`pre`)(736,`code`),Sk(737,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),Kg()(),Qc(738,`p`),Sk(739,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),Kg(),Qc(740,`pre`)(741,`code`),Sk(742,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),Kg()()()(),Qc(743,`tr`,47)(744,`td`,15)(745,`div`,24)(746,`span`,25),Sk(747,` p-help`),vu(748,`br`),Kg()()(),Qc(749,`td`,19)(750,`code`,26),Sk(751,`string`),Kg()(),Qc(752,`td`,21),Sk(753,`-`),Kg(),Qc(754,`td`,22)(755,`em`)(756,`strong`),Sk(757,`(opcional)`),Kg()(),Qc(758,`p`),Sk(759,`Texto de apoio para o campo.`),Kg()()(),Qc(760,`tr`,48)(761,`td`,15)(762,`div`,24)(763,`span`,25),Sk(764,` p-hide-search`),vu(765,`br`),Kg()()(),Qc(766,`td`,19)(767,`code`,28),Sk(768,`boolean`),Kg()(),Qc(769,`td`,21)(770,`p`)(771,`code`),Sk(772,`false`),Kg()()(),Qc(773,`td`,22)(774,`em`)(775,`strong`),Sk(776,`(opcional)`),Kg()(),Qc(777,`p`),Sk(778,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),Kg()()(),Qc(779,`tr`,49)(780,`td`,15)(781,`div`,24)(782,`span`,25),Sk(783,` p-hide-select-all`),vu(784,`br`),Kg()()(),Qc(785,`td`,19)(786,`code`,28),Sk(787,`boolean`),Kg()(),Qc(788,`td`,21)(789,`p`)(790,`code`),Sk(791,`false`),Kg()()(),Qc(792,`td`,22)(793,`em`)(794,`strong`),Sk(795,`(opcional)`),Kg()(),Qc(796,`p`),Sk(797,`Indica se o campo "Selecionar todos" será escondido.`),Kg()()(),Qc(798,`tr`,50)(799,`td`,15)(800,`div`,16)(801,`span`,17),Sk(802,` (p-keydown)`),vu(803,`br`),Kg()()(),Qc(804,`td`,19)(805,`code`,20),Sk(806,`EventEmitter`),Kg()(),Qc(807,`td`,21),Sk(808,`-`),Kg(),Qc(809,`td`,22)(810,`em`)(811,`strong`),Sk(812,`(opcional)`),Kg()(),Qc(813,`p`),Sk(814,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(815,`code`),Sk(816,`KeyboardEvent`),Kg(),Sk(817,` com informações sobre a tecla.`),Kg()()(),Qc(818,`tr`,51)(819,`td`,15)(820,`div`,24)(821,`span`,25),Sk(822,` p-label`),vu(823,`br`),Kg()()(),Qc(824,`td`,19)(825,`code`,26),Sk(826,`string`),Kg()(),Qc(827,`td`,21),Sk(828,`-`),Kg(),Qc(829,`td`,22)(830,`em`)(831,`strong`),Sk(832,`(opcional)`),Kg()(),Qc(833,`p`),Sk(834,`Label no componente.`),Kg()()(),Qc(835,`tr`,52)(836,`td`,15)(837,`div`,24)(838,`span`,25),Sk(839,` p-label-text-wrap`),vu(840,`br`),Kg()()(),Qc(841,`td`,19)(842,`code`,28),Sk(843,`boolean`),Kg()(),Qc(844,`td`,21)(845,`p`)(846,`code`),Sk(847,`false`),Kg()()(),Qc(848,`td`,22)(849,`em`)(850,`strong`),Sk(851,`(opcional)`),Kg()(),Qc(852,`p`),Sk(853,`Habilita a quebra automática do texto da propriedade `),Qc(854,`code`),Sk(855,`p-label`),Kg(),Sk(856,`. Quando `),Qc(857,`code`),Sk(858,`p-label-text-wrap`),Kg(),Sk(859,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(860,`tr`,53)(861,`td`,15)(862,`div`,24)(863,`span`,25),Sk(864,` p-listbox-control-position`),vu(865,`br`),Kg()()(),Qc(866,`td`,19)(867,`code`,54),Sk(868,`'top' `),Kg(),Qc(869,`code`,55),Sk(870,` 'bottom'`),Kg()(),Qc(871,`td`,21)(872,`p`)(873,`code`),Sk(874,`bottom`),Kg()()(),Qc(875,`td`,22)(876,`em`)(877,`strong`),Sk(878,`(opcional)`),Kg()(),Qc(879,`p`),Sk(880,`Define a direção preferida para exibição do `),Qc(881,`code`),Sk(882,`listbox`),Kg(),Sk(883,` em relação ao campo (`),Qc(884,`code`),Sk(885,`top`),Kg(),Sk(886,` ou `),Qc(887,`code`),Sk(888,`bottom`),Kg(),Sk(889,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Qc(890,`tr`,56)(891,`td`,15)(892,`div`,24)(893,`span`,25),Sk(894,` p-literals`),vu(895,`br`),Kg()()(),Qc(896,`td`,19)(897,`code`,57),Sk(898,`PoMultiselectLiterals`),Kg()(),Qc(899,`td`,21),Sk(900,`-`),Kg(),Qc(901,`td`,22)(902,`em`)(903,`strong`),Sk(904,`(opcional)`),Kg()(),Qc(905,`p`),Sk(906,`Objeto com as literais usadas no `),Qc(907,`code`),Sk(908,`po-multiselect`),Kg(),Sk(909,`.`),Kg(),Qc(910,`p`),Sk(911,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(912,`pre`)(913,`code`),Sk(914,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),Kg()(),Qc(915,`p`),Sk(916,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(917,`pre`)(918,`code`),Sk(919,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),Kg()(),Qc(920,`p`),Sk(921,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Qc(922,`pre`)(923,`code`),Sk(924,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),Kg()(),Qc(925,`blockquote`)(926,`p`),Sk(927,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(928,`a`,58)(929,`code`),Sk(930,`PoI18nService`),Kg()(),Sk(931,` ou do browser.`),Kg()()()(),Qc(932,`tr`,59)(933,`td`,15)(934,`div`,24)(935,`span`,25),Sk(936,` p-loading`),vu(937,`br`),Kg()()(),Qc(938,`td`,19)(939,`code`,28),Sk(940,`boolean`),Kg()(),Qc(941,`td`,21)(942,`p`)(943,`code`),Sk(944,`false`),Kg()()(),Qc(945,`td`,22)(946,`em`)(947,`strong`),Sk(948,`(opcional)`),Kg()(),Qc(949,`p`),Sk(950,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(951,`tr`,60)(952,`td`,15)(953,`div`,24)(954,`span`,25),Sk(955,` name`),vu(956,`br`),Kg()()(),Qc(957,`td`,19)(958,`code`,26),Sk(959,`string`),Kg()(),Qc(960,`td`,21),Sk(961,`-`),Kg(),Qc(962,`td`,22)(963,`p`),Sk(964,`Nome do componente.`),Kg()()(),Qc(965,`tr`,61)(966,`td`,15)(967,`div`,24)(968,`span`,25),Sk(969,` p-optional`),vu(970,`br`),Kg()()(),Qc(971,`td`,19)(972,`code`,28),Sk(973,`boolean`),Kg()(),Qc(974,`td`,21)(975,`p`)(976,`code`),Sk(977,`false`),Kg()()(),Qc(978,`td`,22)(979,`em`)(980,`strong`),Sk(981,`(opcional)`),Kg()(),Qc(982,`p`),Sk(983,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(984,`blockquote`)(985,`p`),Sk(986,`Não será exibida a indicação se:`),Kg()(),Qc(987,`ul`)(988,`li`),Sk(989,`O campo conter `),Qc(990,`code`),Sk(991,`p-required`),Kg(),Sk(992,`;`),Kg(),Qc(993,`li`),Sk(994,`Não possuir `),Qc(995,`code`),Sk(996,`p-help`),Kg(),Sk(997,` e/ou `),Qc(998,`code`),Sk(999,`p-label`),Kg(),Sk(1e3,`.`),Kg()()()(),Qc(1001,`tr`,62)(1002,`td`,15)(1003,`div`,24)(1004,`span`,25),Sk(1005,` p-options`),vu(1006,`br`),Kg()()(),Qc(1007,`td`,19)(1008,`code`,63),Sk(1009,`Array<PoMultiselectOption `),Kg(),Qc(1010,`code`,64),Sk(1011,` any>`),Kg()(),Qc(1012,`td`,21),Sk(1013,`-`),Kg(),Qc(1014,`td`,22)(1015,`p`),Sk(1016,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),Kg(),Qc(1017,`blockquote`)(1018,`p`),Sk(1019,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Kg()(),Qc(1020,`pre`)(1021,`code`),Sk(1022,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Kg()(),Qc(1023,`blockquote`)(1024,`p`),Sk(1025,`A lista pode ser definida utilizando um array com o valor representando `),Qc(1026,`code`),Sk(1027,`value`),Kg(),Sk(1028,` e `),Qc(1029,`code`),Sk(1030,`label`),Kg(),Sk(1031,` das seguintes formas:`),Kg()(),Qc(1032,`pre`)(1033,`code`),Sk(1034,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),Kg()(),Qc(1035,`pre`)(1036,`code`),Sk(1037,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),Kg()(),Qc(1038,`ul`)(1039,`li`),Sk(1040,`Aconselha-se utilizar valores distintos no `),Qc(1041,`code`),Sk(1042,`label`),Kg(),Sk(1043,` e `),Qc(1044,`code`),Sk(1045,`value`),Kg(),Sk(1046,` dos itens.`),Kg()()()(),Qc(1047,`tr`,65)(1048,`td`,15)(1049,`div`,24)(1050,`span`,25),Sk(1051,` p-placeholder`),vu(1052,`br`),Kg()()(),Qc(1053,`td`,19)(1054,`code`,26),Sk(1055,`string`),Kg()(),Qc(1056,`td`,21),Sk(1057,`-`),Kg(),Qc(1058,`td`,22)(1059,`em`)(1060,`strong`),Sk(1061,`(opcional)`),Kg()(),Qc(1062,`p`),Sk(1063,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Qc(1064,`tr`,66)(1065,`td`,15)(1066,`div`,24)(1067,`span`,25),Sk(1068,` p-placeholder-search`),vu(1069,`br`),Kg()()(),Qc(1070,`td`,19)(1071,`code`,26),Sk(1072,`string`),Kg()(),Qc(1073,`td`,21)(1074,`p`)(1075,`code`),Sk(1076,`Buscar`),Kg()()(),Qc(1077,`td`,22)(1078,`em`)(1079,`strong`),Sk(1080,`(opcional)`),Kg()(),Qc(1081,`p`),Sk(1082,`Placeholder do campo de pesquisa.`),Kg(),Qc(1083,`blockquote`)(1084,`p`),Sk(1085,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Kg()()()(),Qc(1086,`tr`,67)(1087,`td`,15)(1088,`div`,24)(1089,`span`,25),Sk(1090,` p-helper`),vu(1091,`br`),Kg()()(),Qc(1092,`td`,19)(1093,`code`,68),Sk(1094,`PoHelperOptions `),Kg(),Qc(1095,`code`,26),Sk(1096,` string`),Kg()(),Qc(1097,`td`,21),Sk(1098,`-`),Kg(),Qc(1099,`td`,22)(1100,`em`)(1101,`strong`),Sk(1102,`(opcional)`),Kg()(),Qc(1103,`p`),Sk(1104,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1105,`code`),Sk(1106,`p-label`),Kg(),Sk(1107,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1108,`code`),Sk(1109,`p-label`),Kg(),Sk(1110,`.`),Kg(),Qc(1111,`blockquote`)(1112,`p`),Sk(1113,`Para mais informações acesse: `),Qc(1114,`a`,69),Sk(1115,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1116,`.`),Kg()(),Qc(1117,`blockquote`)(1118,`p`),Sk(1119,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1120,`code`),Sk(1121,`p-additional-help-tooltip`),Kg(),Sk(1122,` e `),Qc(1123,`code`),Sk(1124,`p-additional-help`),Kg(),Sk(1125,`) será ignorado.`),Kg()()()(),Qc(1126,`tr`,70)(1127,`td`,15)(1128,`div`,24)(1129,`span`,25),Sk(1130,` p-required`),vu(1131,`br`),Kg()()(),Qc(1132,`td`,19)(1133,`code`,28),Sk(1134,`boolean`),Kg()(),Qc(1135,`td`,21)(1136,`p`)(1137,`code`),Sk(1138,`false`),Kg()()(),Qc(1139,`td`,22)(1140,`em`)(1141,`strong`),Sk(1142,`(opcional)`),Kg()(),Qc(1143,`p`),Sk(1144,`Define que o campo será obrigatório.`),Kg(),Qc(1145,`blockquote`)(1146,`p`),Sk(1147,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(1148,`code`),Sk(1149,`(p-disabled)`),Kg(),Sk(1150,`.`),Kg()()()(),Qc(1151,`tr`,71)(1152,`td`,15)(1153,`div`,24)(1154,`span`,25),Sk(1155,` p-show-required`),vu(1156,`br`),Kg()()(),Qc(1157,`td`,19)(1158,`code`,28),Sk(1159,`boolean`),Kg()(),Qc(1160,`td`,21),Sk(1161,`-`),Kg(),Qc(1162,`td`,22)(1163,`p`),Sk(1164,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1165,`blockquote`)(1166,`p`),Sk(1167,`Não será exibida a indicação se:`),Kg()(),Qc(1168,`ul`)(1169,`li`),Sk(1170,`Não possuir `),Qc(1171,`code`),Sk(1172,`p-help`),Kg(),Sk(1173,` e/ou `),Qc(1174,`code`),Sk(1175,`p-label`),Kg(),Sk(1176,`.`),Kg()()()(),Qc(1177,`tr`,72)(1178,`td`,15)(1179,`div`,24)(1180,`span`,25),Sk(1181,` p-size`),vu(1182,`br`),Kg()()(),Qc(1183,`td`,19)(1184,`code`,26),Sk(1185,`string`),Kg()(),Qc(1186,`td`,21)(1187,`p`)(1188,`code`),Sk(1189,`medium`),Kg()()(),Qc(1190,`td`,22)(1191,`em`)(1192,`strong`),Sk(1193,`(opcional)`),Kg()(),Qc(1194,`p`),Sk(1195,`Define o tamanho do componente:`),Kg(),Qc(1196,`ul`)(1197,`li`)(1198,`code`),Sk(1199,`small`),Kg(),Sk(1200,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1201,`li`)(1202,`code`),Sk(1203,`medium`),Kg(),Sk(1204,`: altura do input como 44px.`),Kg()(),Qc(1205,`blockquote`)(1206,`p`),Sk(1207,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1208,`code`),Sk(1209,`medium`),Kg(),Sk(1210,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1211,`a`,73),Sk(1212,`po-theme`),Kg(),Sk(1213,`.`),Kg()()()(),Qc(1214,`tr`,74)(1215,`td`,15)(1216,`div`,24)(1217,`span`,25),Sk(1218,` p-sort`),vu(1219,`br`),Kg()()(),Qc(1220,`td`,19)(1221,`code`,28),Sk(1222,`boolean`),Kg()(),Qc(1223,`td`,21)(1224,`p`)(1225,`code`),Sk(1226,`false`),Kg()()(),Qc(1227,`td`,22)(1228,`em`)(1229,`strong`),Sk(1230,`(opcional)`),Kg()(),Qc(1231,`p`),Sk(1232,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),Kg()()()(),Qc(1233,`h3`,10),Sk(1234,`Métodos`),Kg(),Qc(1235,`table`,75)(1236,`tr`,76)(1237,`th`,77)(1238,`div`,24)(1239,`h4`)(1240,`span`,25),Sk(1241,` focus `),Kg()()()()(),Qc(1242,`tr`,22)(1243,`td`,22)(1244,`p`),Sk(1245,`Função que atribui foco ao componente.`),Kg(),Qc(1246,`p`),Sk(1247,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1248,`pre`)(1249,`code`),Sk(1250,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),Kg()()()()(),vu(1251,`br`),Qc(1252,`table`,78)(1253,`tr`,76)(1254,`th`,77)(1255,`div`,24)(1256,`h4`)(1257,`span`,25),Sk(1258,` showAdditionalHelp `),Kg()()()()(),Qc(1259,`tr`,22)(1260,`td`,22)(1261,`p`),Sk(1262,`Método que exibe `),Qc(1263,`code`),Sk(1264,`p-helper`),Kg(),Sk(1265,` ou executa a ação definida em `),Qc(1266,`code`),Sk(1267,`p-helper{eventOnClick}`),Kg(),Sk(1268,` ou em `),Qc(1269,`code`),Sk(1270,`p-additionalHelp`),Kg(),Sk(1271,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1272,`code`),Sk(1273,`p-keydown`),Kg(),Sk(1274,`.`),Kg(),Qc(1275,`blockquote`)(1276,`p`),Sk(1277,`Exibe ou oculta o conteúdo do componente `),Qc(1278,`code`),Sk(1279,`po-helper`),Kg(),Sk(1280,` quando o componente estiver com foco.`),Kg()(),Qc(1281,`pre`)(1282,`code`),Sk(1283,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),Kg()(),Qc(1284,`pre`)(1285,`code`),Sk(1286,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1287,`br`),Qc(1288,`h3`),Sk(1289,`Interfaces`),Kg(),Qc(1290,`h4`,79)(1291,`code`,5),Sk(1292,`PoMultiselectFilter`),Kg()(),Qc(1293,`div`,2)(1294,`p`),Sk(1295,`Interface para os serviços que serão utilizados no po-multiselect.`),Kg()(),Qc(1296,`h4`,10),Sk(1297,`Métodos`),Kg(),Qc(1298,`table`,80)(1299,`tr`,76)(1300,`th`,77)(1301,`div`,24)(1302,`h4`)(1303,`span`,25),Sk(1304,` getFilteredData `),Kg()()()()(),Qc(1305,`tr`,22)(1306,`td`,22)(1307,`p`),Sk(1308,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Qc(1309,`code`),Sk(1310,`PoMultiselectOption`),Kg(),Sk(1311,`, será informado por parametro o campo e o valor a ser pesquisado.`),Kg()()()(),Qc(1312,`h5`)(1313,`b`),Sk(1314,`Parâmetros`),Kg()(),Qc(1315,`table`,11)(1316,`tr`,12)(1317,`th`,13),Sk(1318,`Nome`),Kg(),Qc(1319,`th`,13),Sk(1320,`Tipo`),Kg(),Qc(1321,`th`,13),Sk(1322,`Descrição`),Kg()(),Qc(1323,`tr`,76)(1324,`td`,15),Sk(1325,` params`),Kg(),Qc(1326,`td`,19)(1327,`code`,81),Sk(1328,` { property: string, value: string } `),Kg()(),Qc(1329,`td`,22)(1330,`p`),Sk(1331,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()()(),vu(1332,`br`),Qc(1333,`table`,82)(1334,`tr`,76)(1335,`th`,77)(1336,`div`,24)(1337,`h4`)(1338,`span`,25),Sk(1339,` getObjectsByValues `),Kg()()()()(),Qc(1340,`tr`,22)(1341,`td`,22)(1342,`p`),Sk(1343,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Qc(1344,`code`),Sk(1345,`PoMultiselectOption`),Kg(),Sk(1346,`, será informado por parâmetro valor a ser pesquisado.`),Kg()()()(),Qc(1347,`h5`)(1348,`b`),Sk(1349,`Parâmetros`),Kg()(),Qc(1350,`table`,11)(1351,`tr`,12)(1352,`th`,13),Sk(1353,`Nome`),Kg(),Qc(1354,`th`,13),Sk(1355,`Tipo`),Kg(),Qc(1356,`th`,13),Sk(1357,`Descrição`),Kg()(),Qc(1358,`tr`,76)(1359,`td`,15),Sk(1360,` values`),Kg(),Qc(1361,`td`,19)(1362,`code`,83),Sk(1363,` Array<string `),Kg(),Qc(1364,`code`,84),Sk(1365,` number> `),Kg()(),Qc(1366,`td`,22)(1367,`p`),Sk(1368,`Array com os valores a serem buscados.`),Kg()()()(),vu(1369,`br`),Qc(1370,`h4`,85)(1371,`code`,5),Sk(1372,`PoMultiselectLiterals`),Kg()(),Qc(1373,`div`,2)(1374,`p`),Sk(1375,`Interface para definição das literais usadas no `),Qc(1376,`code`),Sk(1377,`po-multiselect`),Kg(),Sk(1378,`.`),Kg()(),Qc(1379,`h4`,10),Sk(1380,`Propriedades`),Kg(),Qc(1381,`table`,11)(1382,`tr`,12)(1383,`th`,13),Sk(1384,`Nome`),Kg(),Qc(1385,`th`,13),Sk(1386,`Tipo`),Kg(),Qc(1387,`th`,13),Sk(1388,`Descrição`),Kg()(),Qc(1389,`tr`,86)(1390,`td`,15)(1391,`div`,24)(1392,`span`,25),Sk(1393,` noData`),vu(1394,`br`),Kg()()(),Qc(1395,`td`,19)(1396,`code`,26),Sk(1397,`string`),Kg()(),Qc(1398,`td`,22)(1399,`em`)(1400,`strong`),Sk(1401,`(opcional)`),Kg()(),Qc(1402,`p`),Sk(1403,`Texto exibido quando não houver dados encontrados na busca.`),Kg()()(),Qc(1404,`tr`,87)(1405,`td`,15)(1406,`div`,24)(1407,`span`,25),Sk(1408,` placeholderSearch`),vu(1409,`br`),Kg()()(),Qc(1410,`td`,19)(1411,`code`,26),Sk(1412,`string`),Kg()(),Qc(1413,`td`,22)(1414,`em`)(1415,`strong`),Sk(1416,`(opcional)`),Kg()(),Qc(1417,`p`),Sk(1418,`Texto do `),Qc(1419,`em`),Sk(1420,`placeholder`),Kg(),Sk(1421,` do campo de busca.`),Kg()()(),Qc(1422,`tr`,88)(1423,`td`,15)(1424,`div`,24)(1425,`span`,25),Sk(1426,` selectAll`),vu(1427,`br`),Kg()()(),Qc(1428,`td`,19)(1429,`code`,26),Sk(1430,`string`),Kg()(),Qc(1431,`td`,22)(1432,`em`)(1433,`strong`),Sk(1434,`(opcional)`),Kg()(),Qc(1435,`p`),Sk(1436,`Texto exibido no botão de selecionar todos.`),Kg()()(),Qc(1437,`tr`,89)(1438,`td`,15)(1439,`div`,24)(1440,`span`,25),Sk(1441,` selectItem`),vu(1442,`br`),Kg()()(),Qc(1443,`td`,19)(1444,`code`,26),Sk(1445,`string`),Kg()(),Qc(1446,`td`,22)(1447,`em`)(1448,`strong`),Sk(1449,`(opcional)`),Kg()(),Qc(1450,`p`),Sk(1451,`Texto exibido na propriedade placeholder.`),Kg()()()(),Qc(1452,`h4`,90)(1453,`code`,5),Sk(1454,`PoMultiselectOption`),Kg()(),Qc(1455,`div`,2)(1456,`p`),Sk(1457,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),Kg()(),Qc(1458,`h4`,10),Sk(1459,`Propriedades`),Kg(),Qc(1460,`table`,11)(1461,`tr`,12)(1462,`th`,13),Sk(1463,`Nome`),Kg(),Qc(1464,`th`,13),Sk(1465,`Tipo`),Kg(),Qc(1466,`th`,13),Sk(1467,`Descrição`),Kg()(),Qc(1468,`tr`,91)(1469,`td`,15)(1470,`div`,24)(1471,`span`,25),Sk(1472,` label`),vu(1473,`br`),Kg()()(),Qc(1474,`td`,19)(1475,`code`,26),Sk(1476,`string`),Kg()(),Qc(1477,`td`,22)(1478,`p`),Sk(1479,`Label exibido nos itens da lista.`),Kg()()(),Qc(1480,`tr`,92)(1481,`td`,15)(1482,`div`,24)(1483,`span`,25),Sk(1484,` value`),vu(1485,`br`),Kg()()(),Qc(1486,`td`,19)(1487,`code`,26),Sk(1488,`string `),Kg(),Qc(1489,`code`,36),Sk(1490,` number`),Kg()(),Qc(1491,`td`,22)(1492,`p`),Sk(1493,`Valor do objeto que será atribuído ao model.`),Kg()()()(),Qc(1494,`h3`),Sk(1495,`Enums`),Kg(),Qc(1496,`h4`,93)(1497,`code`,5),Sk(1498,`PoMultiselectFilterMode`),Kg()(),Qc(1499,`div`,2)(1500,`p`),Sk(1501,`Define o tipo de busca usado no po-multiselect.`),Kg()(),Qc(1502,`h4`,10),Sk(1503,`Propriedades`),Kg(),Qc(1504,`table`,11)(1505,`tr`,12)(1506,`th`,13),Sk(1507,`Nome`),Kg(),Qc(1508,`th`,13),Sk(1509,`Descrição`),Kg()(),Qc(1510,`tr`,94)(1511,`td`,15)(1512,`div`,24)(1513,`span`,25),Sk(1514,` startsWith`),vu(1515,`br`),Kg()()(),Qc(1516,`td`,22)(1517,`p`),Sk(1518,`Verifica se o texto `),Qc(1519,`em`),Sk(1520,`inicia`),Kg(),Sk(1521,` com o valor pesquisado.`),Kg()()(),Qc(1522,`tr`,95)(1523,`td`,15)(1524,`div`,24)(1525,`span`,25),Sk(1526,` contains`),vu(1527,`br`),Kg()()(),Qc(1528,`td`,22)(1529,`p`),Sk(1530,`Verifica se o texto `),Qc(1531,`em`),Sk(1532,`contém`),Kg(),Sk(1533,` o valor pesquisado.`),Kg()()(),Qc(1534,`tr`,96)(1535,`td`,15)(1536,`div`,24)(1537,`span`,25),Sk(1538,` endsWith`),vu(1539,`br`),Kg()()(),Qc(1540,`td`,22)(1541,`p`),Sk(1542,`Verifica se o texto `),Qc(1543,`em`),Sk(1544,`finaliza`),Kg(),Sk(1545,` com o valor pesquisado.`),Kg()()()(),Qc(1546,`h3`,97),Sk(1547,`Subcomponentes`),Kg(),Qc(1548,`ul`,98)(1549,`li`)(1550,`a`,99),Sk(1551,`Multiselect Option Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function St(o,K){if(o&1){let s=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(s);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-multiselect-basic-view`)(2,`sample-po-multiselect-labs-view`)(3,`sample-po-multiselect-vacation-view`)(4,`sample-po-multiselect-vacation-reactive-form-view`)(5,`sample-po-multiselect-template-view`)(6,`sample-po-multiselect-heroes-view`)(7,`sample-po-multiselect-any-array-view`),Kg()}if(o&2){let s=ek();Rb(`p-active`,s.activeTab===`web`)}}var ft=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Multiselect`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,St,8,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-multiselect-doc`),Kg()()()),a&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,De,Oe,ke,Fe,We,Ne,He,je],encapsulation:2,changeDetection:1})}return o})()}];var Je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(ft),GV]})}return o})();var vi=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,Je]})}return o})();export{vi as DocPoMultiselectModule};
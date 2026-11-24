import{m as P,p as M}from"./main-5NWS7DIP.js";import{$i as ar,Ar as G0,At as Zte,Ca as j_,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Ji as Zk,Ki as ZL,Kr as Kg,L as Koe,Li as WL,Oi as U_,Pn as tie,Pt as are,Qr as Mk,Ra as ok,Ri as Wb,Sa as jO,Si as RZ,Tn as q4,U as Mze,Va as p,Vi as Y,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de,an as ia,ar as Ab,bn as oi,ci as PI,co as wg,eo as tk,fo as xZ,hr as Cb,j as I4,jr as GV,li as PZ,lt as Ss,mi as QL,on as ioe,or as An,p as DP,pa as ge,qi as Zb,ro as uF,rr as AZ,sn as j4,so as we$1,ur as B_,va as i1,w as Fc,xi as R,yi as Qm,zi as Wk,zr as I}from"./chunk-DdK63a0t.js";import{t as r}from"./chunk-zystk1pz.js";var we=(()=>{class l{options=[{value:`poMultiselect1`,label:`PO Multiselect 1`},{value:`poMultiselect2`,label:`PO Multiselect 2`}];static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-basic`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`multiselect`,`p-label`,`PO Multiselect`,3,`p-options`]],template:function(a,n){a&1&&_u(0,`po-multiselect`,0),a&2&&Ab(`p-options`,n.options)},dependencies:[DP],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-multiselect-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return l})();var Ve=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];propertiesOptions=[{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`hideSearch`,label:`Hide Search`},{value:`autoHeight`,label:`Auto Height`},{value:`sort`,label:`Sort`},{value:`hideSelectAll`,label:`Hide Select All`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,r({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}restore(){this.helperText=``,this.customLiterals=void 0,this.help=``,this.filterMode=void 0,this.label=void 0,this.literals=``,this.placeholder=``,this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage=``,this.filterService=``,this.fieldLabel=``,this.fieldValue=``,this.option={label:void 0,value:void 0},this.options=[],this.event=``,this.multiselect=[],this.size=`medium`}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-labs`]],standalone:!1,decls:33,vars:51,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[`name`,`PO Multiselect`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-auto-height`,`p-disabled`,`p-field-label`,`p-field-value`,`p-filter-service`,`p-filter-mode`,`p-help`,`p-hide-search`,`p-hide-select-all`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-placeholder-search`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-sort`,`p-listbox-control-position`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholderSearch`,`p-clean`,``,`p-label`,`Placeholder Search`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-disabled`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let c=KO();Jc(0,`div`,2)(1,`po-multiselect`,3),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.multiselect,r)||(n.multiselect=r),H_(r)}),_t(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg()(),_u(2,`po-divider`),Jc(3,`div`,2),_u(4,`po-info`,4)(5,`po-info`,5),Kg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,6),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.option.label,r)||(n.option.label=r),H_(r)}),Kg(),Jc(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.option.value,r)||(n.option.value=r),H_(r)}),Kg()(),Jc(12,`div`,2)(13,`po-button`,8),_t(`p-click`,function(){return n.addOption()}),Kg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,9),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.label,r)||(n.label=r),H_(r)}),Kg(),Jc(18,`po-input`,10),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.help,r)||(n.help=r),H_(r)}),Kg(),Jc(19,`po-input`,11),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.helperText,r)||(n.helperText=r),H_(r)}),Kg(),Jc(20,`po-input`,12),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.placeholder,r)||(n.placeholder=r),H_(r)}),Kg(),Jc(21,`po-input`,13),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.placeholderSearch,r)||(n.placeholderSearch=r),H_(r)}),Kg(),Jc(22,`po-input`,14),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),H_(r)}),Kg(),Jc(23,`po-input`,15),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.literals,r)||(n.literals=r),H_(r)}),_t(`p-change`,function(){return n.changeLiterals()}),Kg(),Jc(24,`po-input`,16),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.filterService,r)||(n.filterService=r),H_(r)}),Kg(),Jc(25,`po-input`,17),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.fieldValue,r)||(n.fieldValue=r),H_(r)}),Kg(),Jc(26,`po-input`,18),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.fieldLabel,r)||(n.fieldLabel=r),H_(r)}),Kg(),Jc(27,`po-checkbox-group`,19),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.properties,r)||(n.properties=r),H_(r)}),Kg(),Jc(28,`po-radio-group`,20),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.filterMode,r)||(n.filterMode=r),H_(r)}),Kg(),Jc(29,`po-radio-group`,21),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.size,r)||(n.size=r),H_(r)}),Kg(),Jc(30,`po-radio-group`,22),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.listboxPosition,r)||(n.listboxPosition=r),H_(r)}),Kg(),Jc(31,`div`,2)(32,`po-button`,23),_t(`p-click`,function(){return n.restore()}),Kg()()()}if(a&2){let c=ok(8);wg(),Kb(`ngModel`,n.multiselect),Ab(`p-helper`,n.helperText)(`p-auto-height`,n.properties.includes(`autoHeight`))(`p-disabled`,n.properties.includes(`disabled`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-service`,n.filterService)(`p-filter-mode`,n.filterMode)(`p-help`,n.help)(`p-hide-search`,n.properties.includes(`hideSearch`))(`p-hide-select-all`,n.properties.includes(`hideSelectAll`))(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-placeholder-search`,n.placeholderSearch)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-sort`,n.properties.includes(`sort`))(`p-listbox-control-position`,n.listboxPosition)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),q0(),wg(3),Ab(`p-value`,n.multiselect),wg(),Ab(`p-value`,n.event),wg(5),Kb(`ngModel`,n.option.label),q0(),wg(),Kb(`ngModel`,n.option.value),q0(),wg(2),Ab(`p-disabled`,c.form.invalid),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.placeholder),q0(),wg(),Kb(`ngModel`,n.placeholderSearch),q0(),wg(),Kb(`ngModel`,n.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,n.literals),q0(),wg(),Kb(`ngModel`,n.filterService),q0(),wg(),Kb(`ngModel`,n.fieldValue),q0(),wg(),Kb(`ngModel`,n.fieldLabel),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.filterMode),Ab(`p-disabled`,n.properties.includes(`hideSearch`))(`p-options`,n.filterModeOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0(),wg(),Kb(`ngModel`,n.listboxPosition),Ab(`p-options`,n.listboxPositionOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,DP,Zte,Joe],encapsulation:2,changeDetection:1})}return l})();var Te=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-multiselect-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ve],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(p=>this.employeesVacations.includes(p.value)).map(p=>p.label).join(`, `)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-vacation`]],standalone:!1,decls:26,vars:20,consts:[[`f`,`ngForm`],[`modalEmployeesVacation`,``],[1,`po-row`],[`name`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`days`,`p-help`,`Maximum of days that employs can choose`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=KO();Jc(0,`form`,null,0)(2,`h3`),Mk(3,`Collective vacations`),Kg(),_u(4,`po-divider`),Jc(5,`div`,2)(6,`po-datepicker`,3),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.initialPeriod,r)||(n.initialPeriod=r),H_(r)}),Kg(),Jc(7,`po-datepicker`,4),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.finalPeriod,r)||(n.finalPeriod=r),H_(r)}),Kg()(),Jc(8,`div`,2)(9,`po-radio-group`,5),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.days,r)||(n.days=r),H_(r)}),Kg()(),Jc(10,`div`,2)(11,`po-multiselect`,6),G0(),Zb(`ngModelChange`,function(r){return U_(c),Rk(n.employeesVacations,r)||(n.employeesVacations=r),H_(r)}),Kg()(),Jc(12,`div`,2)(13,`po-button`,7),_t(`p-click`,function(){U_(c);let r=ok(16);return n.updateNameEmployeesVacations(),H_(r.open())}),Kg(),Jc(14,`po-button`,8),_t(`p-click`,function(){return n.clean()}),Kg()()(),Jc(15,`po-modal`,9,1)(17,`div`,2),_u(18,`po-info`,10),Wk(19,`date`),_u(20,`po-info`,11),Wk(21,`date`),_u(22,`po-info`,12),Kg(),_u(23,`po-divider`),Jc(24,`div`,2),_u(25,`po-info`,13),Kg()()}if(a&2){let c=ok(1);wg(6),Kb(`ngModel`,n.initialPeriod),q0(),wg(),Kb(`ngModel`,n.finalPeriod),Ab(`p-min-date`,n.initialPeriod),q0(),wg(2),Kb(`ngModel`,n.days),Ab(`p-options`,n.daysOptions),q0(),wg(2),Kb(`ngModel`,n.employeesVacations),Ab(`p-options`,n.employees),q0(),wg(2),Ab(`p-disabled`,c.form.invalid),wg(5),Ab(`p-value`,Zk(19,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Ab(`p-value`,Zk(21,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Ab(`p-value`,n.days),wg(3),Ab(`p-value`,n.nameEmployeesVacations)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return l})();var Ae=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-vacation-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-multiselect-vacation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect - Vacation`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-vacation`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #f="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,De],encapsulation:2,changeDetection:1})}return l})();var Oe=(()=>{class l{formBuilder=p(PZ);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:`412341`,label:`Alfred`},{value:`518734`,label:`Alice`},{value:`986237`,label:`Bradley`},{value:`941278`,label:`Jackie`},{value:`112333`,label:`Jane`},{value:`989898`,label:`John`},{value:`897643`,label:`Phillip`},{value:`423767`,label:`Reynold`},{value:`423837`,label:`Robert`}];daysOptions=[{value:10,label:`10`},{value:20,label:`20`},{value:30,label:`30`}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,Qm.required],finalPeriod:[null,Qm.required],days:[null,Qm.required],employeesVacations:[null,Qm.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get(`initialPeriod`).value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(p=>this.formCollectiveVacations.get(`employeesVacations`).value.includes(p.value)).map(p=>p.label).join(`, `),this.initialPeriod=this.formCollectiveVacations.get(`initialPeriod`).value,this.finalPeriod=this.formCollectiveVacations.get(`finalPeriod`).value,this.days=this.formCollectiveVacations.get(`days`).value}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form`]],standalone:!1,decls:24,vars:20,consts:[[`modalEmployeesVacation`,``],[3,`formGroup`],[1,`po-row`],[`name`,`initialPeriod`,`formControlName`,`initialPeriod`,`p-label`,`Initial period`,`p-required`,``,1,`po-md-6`],[`name`,`finalPeriod`,`formControlName`,`finalPeriod`,`p-label`,`Final period`,`p-required`,``,1,`po-md-6`,3,`p-min-date`],[`name`,`employeesVacations`,`formControlName`,`employeesVacations`,`p-label`,`Select your employees for collective vacations`,1,`po-md-4`,3,`p-auto-height`,`p-options`,`p-required`],[`name`,`days`,`formControlName`,`days`,`p-label`,`How many days of vacation the employees will be able to have?`,`p-required`,``,1,`po-lg-8`,3,`p-options`,`p-columns`],[`name`,`Approve Vacations`,`p-label`,`Approve Vacations`,1,`po-md-4`,`po-offset-md-5`,`po-offset-lg-5`,`po-offset-xl-5`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-title`,`Collective Vacation`],[`p-label`,`Initial period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Final period`,1,`po-md-5`,3,`p-value`],[`p-label`,`Days`,1,`po-md-2`,3,`p-value`],[`p-label`,`Employees`,1,`po-lg-12`,3,`p-value`]],template:function(a,n){if(a&1){let c=KO();Jc(0,`form`,1)(1,`h3`),Mk(2,`Collective vacations`),Kg(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-datepicker`,3),G0(),Kg(),Jc(6,`po-datepicker`,4),G0(),Kg()(),Jc(7,`div`,2)(8,`po-multiselect`,5),G0(),Kg(),Jc(9,`po-radio-group`,6),G0(),Kg()(),Jc(10,`div`,2)(11,`po-button`,7),_t(`p-click`,function(){U_(c);let r=ok(14);return n.updateEmployeesVacations(),H_(r.open())}),Kg(),Jc(12,`po-button`,8),_t(`p-click`,function(){return n.clean()}),Kg()()(),Jc(13,`po-modal`,9,0)(15,`div`,2),_u(16,`po-info`,10),Wk(17,`date`),_u(18,`po-info`,11),Wk(19,`date`),_u(20,`po-info`,12),Kg(),_u(21,`po-divider`),Jc(22,`div`,2),_u(23,`po-info`,13),Kg()()}a&2&&(Ab(`formGroup`,n.formCollectiveVacations),wg(5),q0(),wg(),Ab(`p-min-date`,n.getRangeFinalPeriod()),q0(),wg(2),Ab(`p-auto-height`,!0)(`p-options`,n.employees)(`p-required`,!0),q0(),wg(),Ab(`p-options`,n.daysOptions)(`p-columns`,3),q0(),wg(2),Ab(`p-disabled`,n.formCollectiveVacations.invalid),wg(5),Ab(`p-value`,Zk(17,12,n.initialPeriod,`longDate`,`+0000`)),wg(2),Ab(`p-value`,Zk(19,16,n.finalPeriod,`longDate`,`+0000`)),wg(2),Ab(`p-value`,n.days),wg(3),Ab(`p-value`,n.nameEmployeesVacations))},dependencies:[xZ,RZ,AZ,ZL,i1,oi,Nf,tie,DP,Zte,Joe,ia,uF],encapsulation:2,changeDetection:1})}return l})();var qe=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-vacation-reactive-form-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-multiselect-vacation-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect - Vacation Reactive Form`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-vacation-reactive-form`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form [formGroup]="formCollectiveVacations">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Oe],encapsulation:2,changeDetection:1})}return l})();function Ze(l,I){l&1&&_u(0,`po-tag`,11),l&2&&Ab(`p-icon`,!0)}function $e(l,I){l&1&&_u(0,`po-tag`,12),l&2&&Ab(`p-icon`,!0)}function et(l,I){l&1&&_u(0,`po-tag`,13),l&2&&Ab(`p-icon`,!0)}function tt(l,I){if(l&1&&(Jc(0,`div`,0)(1,`div`,7)(2,`div`,8),Mk(3),Kg()(),Jc(4,`div`,9)(5,`div`,10),LO(6,Ze,1,1,`po-tag`,11),LO(7,$e,1,1,`po-tag`,12),LO(8,et,1,1,`po-tag`,13),Kg()()()),l&2){let p=I.$implicit;wg(3),Wb(p.label),wg(3),jO(p.admin?6:-1),wg(),jO(p.access?7:-1),wg(),jO(!p.admin&&!p.access?8:-1)}}var Le=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:`Anna M.`,label:`Anna M.`,admin:!1,access:!0},{value:`Jhon T.`,label:`Jhon T.`,admin:!0,access:!0},{value:`Marie J.`,label:`Marie J.`,admin:!1,access:!1}];employees=[{label:`Anna M.`,value:`Anna M.`},{label:`Jhon T.`,value:`Jhon T.`},{label:`Marie J.`,value:`Marie J.`}];typeAccessValue=[{label:`Admin e acesso padrão`,value:`admin`},{label:`Acesso padrão`,value:`access`},{label:`Sem acesso`,value:`noAccess`}];changeAccess(){let p=[...this.options].map(a=>a.value===this.employee?r({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=p,this.employee=void 0,this.typeAccess=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-template`]],standalone:!1,decls:7,vars:7,consts:[[1,`po-row`],[`name`,`employee`,`p-label`,`Employee`,1,`po-md-5`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`typeOfAccess`,`p-label`,`Type of access`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-md-1`,`containerButton`],[`p-label`,`Alterar acesso`,3,`p-click`,`p-disabled`],[`name`,`multiselect`,`p-label`,`PO Multiselect`,1,`po-md-12`,3,`p-options`,`p-hide-select-all`],[`p-multiselect-option-template`,``],[1,`po-md-2`,`containerFlex`],[1,`po-font-text-large-bold`],[1,`po-md-10`],[1,`containerFlexTag`],[`p-value`,`Admin`,`p-type`,`success`,3,`p-icon`],[`p-value`,`Normal`,`p-type`,`info`,3,`p-icon`],[`p-value`,`Sem acesso`,`p-type`,`danger`,3,`p-icon`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`po-select`,1),G0(),Zb(`ngModelChange`,function(m){return Rk(n.employee,m)||(n.employee=m),m}),Kg(),Jc(2,`po-select`,2),G0(),Zb(`ngModelChange`,function(m){return Rk(n.typeAccess,m)||(n.typeAccess=m),m}),Kg(),Jc(3,`div`,3)(4,`po-button`,4),_t(`p-click`,function(){return n.changeAccess()}),Kg()(),Jc(5,`po-multiselect`,5),Cb(6,tt,9,4,`ng-template`,6),Kg()()),a&2&&(wg(),Ab(`p-options`,n.employees),Kb(`ngModel`,n.employee),q0(),wg(),Ab(`p-options`,n.typeAccessValue),Kb(`ngModel`,n.typeAccess),q0(),wg(2),Ab(`p-disabled`,!n.employee||!n.typeAccess),wg(),Ab(`p-options`,n.options)(`p-hide-select-all`,!0))},dependencies:[RZ,QL,oi,DP,ioe,Koe,Ss],styles:[`.containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}`],changeDetection:1})}return l})();var ke=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-template-view`]],standalone:!1,decls:37,vars:0,consts:[[`id`,`sample-po-multiselect-template`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect - Template`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-template`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-template/sample-po-multiselect-template.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
          <div class="po-font-text-large-bold">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` option.label `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
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
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-multiselect-template/sample-po-multiselect-template.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()(),Jc(29,`po-tab`,13)(30,`div`)(31,`label`,7),Mk(32,`sample-po-multiselect-template/sample-po-multiselect-template.component.css`),Kg(),Jc(33,`div`,14)(34,`pre`,15),Mk(35,`.containerFlex {
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
`),Kg()()()()()(),_u(36,`hr`))},dependencies:[P,tre,are,Le],encapsulation:2,changeDetection:1})}return l})();var pe=(()=>{class l{http=p(PI);getFilteredData({value:p}){let a={filter:p};return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10`,{params:a}).pipe(Y(n=>n.items))}getObjectsByValues(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${p.toString()}`).pipe(Y(a=>a.items))}static ɵfac=function(a){return new(a||l)};static ɵprov=R({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();var Fe=(()=>{class l{samplePoMultiselectHeroesService=p(pe);debounce=500;filterService;heroes;multiselect=[`1495831666871`,`1405833068599`];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`,type:`link`,action:p=>{this.openLink(p)}}];constructor(){let p=this.samplePoMultiselectHeroesService;this.filterService=p}changeOptions(p){this.heroes=[...p]}openLink(p){window.open(`http://google.com/search?q=${p}`,`_blank`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-heroes`]],standalone:!1,features:[we$1([pe])],decls:4,vars:9,consts:[[1,`po-row`],[`name`,`multiselect`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-filter-service`,`p-debounce-time`],[1,`po-md-6`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`po-multiselect`,1),G0(),Zb(`ngModelChange`,function(m){return Rk(n.multiselect,m)||(n.multiselect=m),m}),_t(`p-change`,function(m){return n.changeOptions(m)}),Kg(),Jc(2,`po-container`,2),_u(3,`po-table`,3),Kg()()),a&2&&(wg(),Kb(`ngModel`,n.multiselect),Ab(`p-filter-service`,n.filterService)(`p-debounce-time`,n.debounce),q0(),wg(2),Ab(`p-columns`,n.columns)(`p-items`,n.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[RZ,QL,Fc,DP,q4],encapsulation:2,changeDetection:1})}return l})();var We=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-heroes-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-multiselect-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`,1,`docs-code-block`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect - Heroes - using API`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-heroes`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Fe],encapsulation:2,changeDetection:1})}return l})();var ze=(()=>{class l{company;fieldLabel=`razaoSocial`;fieldValue=`cnpj`;options=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];optionsSelect=[{label:`codigo`,value:`codigo`},{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`label`,value:`label`},{label:`cnpj`,value:`cnpj`},{label:`value`,value:`value`},{label:`id`,value:`id`},{label:`email`,value:`email`},{label:`data`,value:`data`},{label:`origem`,value:`origem`}];onChange(p){this.company=void 0}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-any-array`]],standalone:!1,decls:9,vars:9,consts:[[1,`po-row`],[1,`po-md-6`],[`name`,`label`,`p-label`,`Select Field Label`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`label`,`p-label`,`Select Field Value`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`multiselect`,`p-label`,`Select your Company`,`p-listbox-control-position`,`top`,1,`po-md-12`,3,`ngModelChange`,`p-options`,`p-field-value`,`p-field-label`,`ngModel`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`po-select`,2),G0(),Zb(`ngModelChange`,function(m){return Rk(n.fieldLabel,m)||(n.fieldLabel=m),m}),_t(`p-change`,function(m){return n.onChange(m)}),Kg(),Jc(3,`po-select`,3),G0(),Zb(`ngModelChange`,function(m){return Rk(n.fieldValue,m)||(n.fieldValue=m),m}),_t(`p-change`,function(m){return n.onChange(m)}),Kg()(),Jc(4,`div`,1)(5,`div`,0)(6,`po-multiselect`,4),G0(),Zb(`ngModelChange`,function(m){return Rk(n.company,m)||(n.company=m),m}),Kg()(),Jc(7,`div`,0),_u(8,`po-info`,5),Kg()()()),a&2&&(wg(2),Ab(`p-options`,n.optionsSelect),Kb(`ngModel`,n.fieldLabel),q0(),wg(),Ab(`p-options`,n.optionsSelect),Kb(`ngModel`,n.fieldValue),q0(),wg(3),Ab(`p-options`,n.options)(`p-field-value`,n.fieldValue)(`p-field-label`,n.fieldLabel),Kb(`ngModel`,n.company),q0(),wg(2),Ab(`p-value`,n.company))},dependencies:[RZ,QL,DP,Koe,Joe],encapsulation:2,changeDetection:1})}return l})();var Ne=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-any-array-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-multiselect-any-array`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Multiselect - Array Any`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-multiselect-any-array`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ze],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-multiselect-doc`]],standalone:!1,decls:1550,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Multiselect Option Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-multiselect-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-height`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-search`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder-search`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-multiselect-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`{`,`property:`,`string,`,`value:`,`string`,`}`],[`id`,`interface-po-multiselect-filter-method-getObjectsByValues`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`Array<string`],[`pan`,``,1,`docs-api-property-type`,`number>`],[`id`,`interface-po-multiselect-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-placeholder-search`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-literals-select-item`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-multiselect-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-multiselect-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-multiselect-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-multiselect-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`blockquote`,3)(17,`strong`),Mk(18,`Subcomponentes:`),Kg(),Jc(19,`po-tag`,4),_t(`p-click`,function(){return n.openDoc(`po-multiselect-option-template`)}),Kg()(),Jc(20,`h3`,5),Mk(21,`Componente`),Kg(),Jc(22,`h4`,6)(23,`code`,7),Mk(24,`PoMultiselectComponent`),Kg()(),Jc(25,`div`,2)(26,`p`),Mk(27,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),Kg(),Jc(28,`p`),Mk(29,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),Kg(),Jc(30,`p`),Mk(31,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),Kg(),Jc(32,`p`),Mk(33,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Jc(34,`code`),Mk(35,`p-filter-service`),Kg(),Mk(36,`.`),Kg(),Jc(37,`h4`),Mk(38,`Boas práticas`),Kg(),Jc(39,`ul`)(40,`li`),Mk(41,`Caso a lista apresente menos de 5 itens, considere utilizar outro componente;`),Kg(),Jc(42,`li`),Mk(43,`Não utilize o multiselect caso o usuário possa selecionar apenas uma opção. Para esse caso, opte por utilizar po-radio ou po-select;`),Kg()(),Jc(44,`h4`),Mk(45,`Acessibilidade tratada no componente`),Kg(),Jc(46,`p`),Mk(47,`Algumas diretrizes de acessibilidade já são tratadas no componente internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(48,`ul`)(49,`li`),Mk(50,`Quando em foco, o multiselect abre o listbox usando as teclas de Espaço ou Enter do teclado.`),Kg(),Jc(51,`li`),Mk(52,`Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox.`),Kg(),Jc(53,`li`),Mk(54,`Utilize a tecla Esc do teclado para fechar o listbox.`),Kg(),Jc(55,`li`),Mk(56,`Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles.`),Kg(),Jc(57,`li`),Mk(58,`Quando em foco e havendo um item ou mais já selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox.`),Kg()(),Jc(59,`h4`),Mk(60,`Tokens customizáveis`),Kg(),Jc(61,`p`),Mk(62,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(63,`blockquote`)(64,`p`),Mk(65,`Para maiores informações, acesse o guia `),Jc(66,`a`,8),Mk(67,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(68,`.`),Kg()(),Jc(69,`table`)(70,`thead`)(71,`tr`)(72,`th`),Mk(73,`Propriedade`),Kg(),Jc(74,`th`),Mk(75,`Descrição`),Kg(),Jc(76,`th`),Mk(77,`Valor Padrão`),Kg()()(),Jc(78,`tbody`)(79,`tr`)(80,`td`)(81,`strong`),Mk(82,`Default Values`),Kg()(),_u(83,`td`)(84,`td`),Kg(),Jc(85,`tr`)(86,`td`)(87,`code`),Mk(88,`--font-family`),Kg()(),Jc(89,`td`),Mk(90,`Família tipográfica usada`),Kg(),Jc(91,`td`)(92,`code`),Mk(93,`var(--font-family-theme)`),Kg()()(),Jc(94,`tr`)(95,`td`)(96,`code`),Mk(97,`--font-size`),Kg()(),Jc(98,`td`),Mk(99,`Tamanho da fonte`),Kg(),Jc(100,`td`)(101,`code`),Mk(102,`var(--font-size-default)`),Kg()()(),Jc(103,`tr`)(104,`td`)(105,`code`),Mk(106,`--text-color-placeholder`),Kg(),Mk(107,` \xA0`),Kg(),Jc(108,`td`),Mk(109,`Cor do texto do placeholder`),Kg(),Jc(110,`td`)(111,`code`),Mk(112,`var(--color-action-disabled)`),Kg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Mk(116,`--color`),Kg()(),Jc(117,`td`),Mk(118,`Cor principal do multiselect`),Kg(),Jc(119,`td`)(120,`code`),Mk(121,`var(--color-neutral-dark-70)`),Kg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Mk(125,`--background`),Kg()(),Jc(126,`td`),Mk(127,`Cor de background`),Kg(),Jc(128,`td`)(129,`code`),Mk(130,`var(--color-neutral-light-05)`),Kg()()(),Jc(131,`tr`)(132,`td`)(133,`code`),Mk(134,`--field-container-title-justify`),Kg()(),Jc(135,`td`),Mk(136,`Alinhamento horizontal do título (`),Jc(137,`code`),Mk(138,`justify-content`),Kg(),Mk(139,`)`),Kg(),Jc(140,`td`)(141,`code`),Mk(142,`space-between`),Kg()()(),Jc(143,`tr`)(144,`td`)(145,`code`),Mk(146,`--field-container-title-flex`),Kg()(),Jc(147,`td`),Mk(148,`Flex do título (`),Jc(149,`code`),Mk(150,`flex`),Kg(),Mk(151,`)`),Kg(),Jc(152,`td`)(153,`code`),Mk(154,`1 auto`),Kg()()(),Jc(155,`tr`)(156,`td`)(157,`strong`),Mk(158,`Hover`),Kg()(),_u(159,`td`)(160,`td`),Kg(),Jc(161,`tr`)(162,`td`)(163,`code`),Mk(164,`--color-hover`),Kg()(),Jc(165,`td`),Mk(166,`Cor principal no estado hover`),Kg(),Jc(167,`td`)(168,`code`),Mk(169,`var(--color-action-hover)`),Kg()()(),Jc(170,`tr`)(171,`td`)(172,`code`),Mk(173,`--background-hover`),Kg()(),Jc(174,`td`),Mk(175,`Cor de background no estado hover`),Kg(),Jc(176,`td`)(177,`code`),Mk(178,`var(--color-brand-01-lighter)`),Kg()()(),Jc(179,`tr`)(180,`td`)(181,`strong`),Mk(182,`Focused`),Kg()(),_u(183,`td`)(184,`td`),Kg(),Jc(185,`tr`)(186,`td`)(187,`code`),Mk(188,`--color-focused`),Kg()(),Jc(189,`td`),Mk(190,`Cor principal no estado de focus`),Kg(),Jc(191,`td`)(192,`code`),Mk(193,`var(--color-action-default)`),Kg()()(),Jc(194,`tr`)(195,`td`)(196,`code`),Mk(197,`--outline-color-focused`),Kg(),Mk(198,` \xA0`),Kg(),Jc(199,`td`),Mk(200,`Cor do outline do estado de focus`),Kg(),Jc(201,`td`)(202,`code`),Mk(203,`var(--color-action-focus)`),Kg()()(),Jc(204,`tr`)(205,`td`)(206,`strong`),Mk(207,`Disabled`),Kg()(),_u(208,`td`)(209,`td`),Kg(),Jc(210,`tr`)(211,`td`)(212,`code`),Mk(213,`--color-disabled`),Kg()(),Jc(214,`td`),Mk(215,`Cor principal no estado disabled`),Kg(),Jc(216,`td`)(217,`code`),Mk(218,`var(--color-action-disabled)`),Kg()()(),Jc(219,`tr`)(220,`td`)(221,`code`),Mk(222,`--background-disabled`),Kg(),Mk(223,` \xA0`),Kg(),Jc(224,`td`),Mk(225,`Cor de background no estado disabled \xA0`),Kg(),Jc(226,`td`)(227,`code`),Mk(228,`var(--color-neutral-light-20)`),Kg()()(),Jc(229,`tr`)(230,`td`)(231,`strong`),Mk(232,`Error`),Kg()(),_u(233,`td`)(234,`td`),Kg(),Jc(235,`tr`)(236,`td`)(237,`code`),Mk(238,`--color-error`),Kg()(),Jc(239,`td`),Mk(240,`Cor principal no estado error`),Kg(),Jc(241,`td`)(242,`code`),Mk(243,`var(--color-feedback-negative-base)`),Kg()()()()()(),Jc(244,`div`,9)(245,`h4`,10),Mk(246,`Seletor`),Kg(),Jc(247,`pre`,11),Mk(248,`<po-multiselect
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
`),Kg()(),Jc(249,`h4`,12),Mk(250,`Propriedades`),Kg(),Jc(251,`table`,13)(252,`tr`,14)(253,`th`,15),Mk(254,`Nome`),Kg(),Jc(255,`th`,15),Mk(256,`Tipo`),Kg(),Jc(257,`th`,15),Mk(258,`Padrão`),Kg(),Jc(259,`th`,15),Mk(260,`Descrição`),Kg()(),Jc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),Mk(265,` (p-additional-help)`),_u(266,`br`),Kg()(),Jc(267,`div`,20),Mk(268,`Deprecated`),Kg()(),Jc(269,`td`,21)(270,`code`,22),Mk(271,`EventEmitter`),Kg()(),Jc(272,`td`,23),Mk(273,`-`),Kg(),Jc(274,`td`,24)(275,`em`)(276,`strong`),Mk(277,`(opcional)`),Kg()(),Jc(278,`p`),Mk(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(280,`blockquote`)(281,`p`),Mk(282,`Essa propriedade está `),Jc(283,`strong`),Mk(284,`depreciada`),Kg(),Mk(285,` e será removida na versão `),Jc(286,`code`),Mk(287,`23.x.x`),Kg(),Mk(288,`. Recomendamos utilizar a propriedade `),Jc(289,`code`),Mk(290,`p-helper`),Kg(),Mk(291,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(292,`tr`,25)(293,`td`,17)(294,`div`,26)(295,`span`,27),Mk(296,` p-additional-help-tooltip`),_u(297,`br`),Kg()(),Jc(298,`div`,20),Mk(299,`Deprecated`),Kg()(),Jc(300,`td`,21)(301,`code`,28),Mk(302,`string`),Kg()(),Jc(303,`td`,23),Mk(304,`-`),Kg(),Jc(305,`td`,24)(306,`em`)(307,`strong`),Mk(308,`(opcional)`),Kg()(),Jc(309,`p`),Mk(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(311,`code`),Mk(312,`po-helper`),Kg(),Mk(313,`.
`),Jc(314,`strong`),Mk(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(316,`blockquote`)(317,`p`),Mk(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(319,`blockquote`)(320,`p`),Mk(321,`Essa propriedade está `),Jc(322,`strong`),Mk(323,`depreciada`),Kg(),Mk(324,` e será removida na versão `),Jc(325,`code`),Mk(326,`23.x.x`),Kg(),Mk(327,`. Recomendamos utilizar a propriedade `),Jc(328,`code`),Mk(329,`p-helper`),Kg(),Mk(330,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(331,`tr`,29)(332,`td`,17)(333,`div`,26)(334,`span`,27),Mk(335,` p-append-in-body`),_u(336,`br`),Kg()()(),Jc(337,`td`,21)(338,`code`,30),Mk(339,`boolean`),Kg()(),Jc(340,`td`,23)(341,`p`)(342,`code`),Mk(343,`false`),Kg()()(),Jc(344,`td`,24)(345,`em`)(346,`strong`),Mk(347,`(opcional)`),Kg()(),Jc(348,`p`),Mk(349,`Define que o `),Jc(350,`code`),Mk(351,`listbox`),Kg(),Mk(352,` e/ou popover (`),Jc(353,`code`),Mk(354,`p-helper`),Kg(),Mk(355,` e/ou `),Jc(356,`code`),Mk(357,`p-error-limit`),Kg(),Mk(358,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Jc(359,`blockquote`)(360,`p`),Mk(361,`Quando utilizado com `),Jc(362,`code`),Mk(363,`p-helper`),Kg(),Mk(364,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(365,`tr`,31)(366,`td`,17)(367,`div`,26)(368,`span`,27),Mk(369,` p-auto-focus`),_u(370,`br`),Kg()()(),Jc(371,`td`,21)(372,`code`,30),Mk(373,`boolean`),Kg()(),Jc(374,`td`,23)(375,`p`)(376,`code`),Mk(377,`false`),Kg()()(),Jc(378,`td`,24)(379,`em`)(380,`strong`),Mk(381,`(opcional)`),Kg()(),Jc(382,`p`),Mk(383,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(384,`blockquote`)(385,`p`),Mk(386,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(387,`tr`,32)(388,`td`,17)(389,`div`,26)(390,`span`,27),Mk(391,` p-auto-height`),_u(392,`br`),Kg()()(),Jc(393,`td`,21)(394,`code`,30),Mk(395,`boolean`),Kg()(),Jc(396,`td`,23)(397,`p`)(398,`code`),Mk(399,`false`),Kg()()(),Jc(400,`td`,24)(401,`em`)(402,`strong`),Mk(403,`(opcional)`),Kg()(),Jc(404,`p`),Mk(405,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Kg(),Jc(406,`blockquote`)(407,`p`),Mk(408,`O valor padrão será `),Jc(409,`code`),Mk(410,`true`),Kg(),Mk(411,` quando houver serviço (`),Jc(412,`code`),Mk(413,`p-filter-service`),Kg(),Mk(414,`).`),Kg()()()(),Jc(415,`tr`,33)(416,`td`,17)(417,`div`,18)(418,`span`,19),Mk(419,` (p-blur)`),_u(420,`br`),Kg()()(),Jc(421,`td`,21)(422,`code`,22),Mk(423,`EventEmitter`),Kg()(),Jc(424,`td`,23),Mk(425,`-`),Kg(),Jc(426,`td`,24)(427,`em`)(428,`strong`),Mk(429,`(opcional)`),Kg()(),Jc(430,`p`),Mk(431,`Evento disparado ao sair do campo.`),Kg()()(),Jc(432,`tr`,34)(433,`td`,17)(434,`div`,18)(435,`span`,19),Mk(436,` (p-change)`),_u(437,`br`),Kg()()(),Jc(438,`td`,21)(439,`code`,22),Mk(440,`EventEmitter`),Kg()(),Jc(441,`td`,23),Mk(442,`-`),Kg(),Jc(443,`td`,24)(444,`em`)(445,`strong`),Mk(446,`(opcional)`),Kg()(),Jc(447,`p`),Mk(448,`Pode ser informada uma função que será disparada quando houver alterações no ngModel.`),Kg()()(),Jc(449,`tr`,35)(450,`td`,17)(451,`div`,18)(452,`span`,19),Mk(453,` (p-change-model)`),_u(454,`br`),Kg()()(),Jc(455,`td`,21)(456,`code`,22),Mk(457,`EventEmitter`),Kg()(),Jc(458,`td`,23),Mk(459,`-`),Kg(),Jc(460,`td`,24)(461,`em`)(462,`strong`),Mk(463,`(opcional)`),Kg()(),Jc(464,`p`),Mk(465,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(466,`code`),Mk(467,`setValue`),Kg(),Mk(468,`, `),Jc(469,`code`),Mk(470,`patchValue`),Kg(),Mk(471,`, carregamento assíncrono).`),Kg(),Jc(472,`p`),Mk(473,`Diferentemente do `),Jc(474,`code`),Mk(475,`p-change`),Kg(),Mk(476,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(477,`code`),Mk(478,`p-change-model`),Kg(),Mk(479,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(480,`p`),Mk(481,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(482,`tr`,36)(483,`td`,17)(484,`div`,26)(485,`span`,27),Mk(486,` p-compact-label`),_u(487,`br`),Kg()()(),Jc(488,`td`,21)(489,`code`,30),Mk(490,`boolean`),Kg()(),Jc(491,`td`,23)(492,`p`)(493,`code`),Mk(494,`false`),Kg()()(),Jc(495,`td`,24)(496,`em`)(497,`strong`),Mk(498,`(opcional)`),Kg()(),Jc(499,`p`),Mk(500,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(501,`p`),Mk(502,`Quando habilitado (`),Jc(503,`code`),Mk(504,`true`),Kg(),Mk(505,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(506,`ul`)(507,`li`)(508,`code`),Mk(509,`po-label`),Kg()(),Jc(510,`li`)(511,`code`),Mk(512,`p-requirement (showRequired)`),Kg()(),Jc(513,`li`)(514,`code`),Mk(515,`po-helper`),Kg()()(),Jc(516,`p`),Mk(517,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(518,`p`),Mk(519,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(520,`ul`)(521,`li`)(522,`code`),Mk(523,`--field-container-title-justify`),Kg()(),Jc(524,`li`)(525,`code`),Mk(526,`--field-container-title-flex`),Kg()()(),Jc(527,`p`),Mk(528,`Exemplo:`),Kg(),Jc(529,`pre`)(530,`code`),Mk(531,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(532,`p`),Mk(533,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(534,`tr`,37)(535,`td`,17)(536,`div`,26)(537,`span`,27),Mk(538,` p-debounce-time`),_u(539,`br`),Kg()()(),Jc(540,`td`,21)(541,`code`,38),Mk(542,`number`),Kg()(),Jc(543,`td`,23)(544,`p`)(545,`code`),Mk(546,`400`),Kg()()(),Jc(547,`td`,24)(548,`em`)(549,`strong`),Mk(550,`(opcional)`),Kg()(),Jc(551,`p`),Mk(552,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.`),Kg(),Jc(553,`blockquote`)(554,`p`),Mk(555,`Será utilizada apenas quando houver serviço (`),Jc(556,`code`),Mk(557,`p-filter-service`),Kg(),Mk(558,`) e somente será aceito valor maior do que `),Jc(559,`em`),Mk(560,`zero`),Kg(),Mk(561,`.`),Kg()()()(),Jc(562,`tr`,39)(563,`td`,17)(564,`div`,26)(565,`span`,27),Mk(566,` p-disabled`),_u(567,`br`),Kg()()(),Jc(568,`td`,21)(569,`code`,30),Mk(570,`boolean`),Kg()(),Jc(571,`td`,23)(572,`p`)(573,`code`),Mk(574,`false`),Kg()()(),Jc(575,`td`,24)(576,`em`)(577,`strong`),Mk(578,`(opcional)`),Kg()(),Jc(579,`p`),Mk(580,`Indica que o campo será desabilitado.`),Kg()()(),Jc(581,`tr`,40)(582,`td`,17)(583,`div`,26)(584,`span`,27),Mk(585,` p-error-limit`),_u(586,`br`),Kg()()(),Jc(587,`td`,21)(588,`code`,30),Mk(589,`boolean`),Kg()(),Jc(590,`td`,23)(591,`p`)(592,`code`),Mk(593,`false`),Kg()()(),Jc(594,`td`,24)(595,`em`)(596,`strong`),Mk(597,`(opcional)`),Kg()(),Jc(598,`p`),Mk(599,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(600,`blockquote`)(601,`p`),Mk(602,`Caso essa propriedade seja definida como `),Jc(603,`code`),Mk(604,`true`),Kg(),Mk(605,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(606,`tr`,41)(607,`td`,17)(608,`div`,26)(609,`span`,27),Mk(610,` p-field-error-message`),_u(611,`br`),Kg()()(),Jc(612,`td`,21)(613,`code`,28),Mk(614,`string`),Kg()(),Jc(615,`td`,23),Mk(616,`-`),Kg(),Jc(617,`td`,24)(618,`em`)(619,`strong`),Mk(620,`(opcional)`),Kg()(),Jc(621,`p`),Mk(622,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(623,`blockquote`)(624,`p`),Mk(625,`Necessário que a propriedade `),Jc(626,`code`),Mk(627,`p-required`),Kg(),Mk(628,` esteja habilitada.`),Kg()()()(),Jc(629,`tr`,42)(630,`td`,17)(631,`div`,26)(632,`span`,27),Mk(633,` p-field-label`),_u(634,`br`),Kg()()(),Jc(635,`td`,21)(636,`code`,28),Mk(637,`string`),Kg()(),Jc(638,`td`,23)(639,`p`)(640,`code`),Mk(641,`label`),Kg()()(),Jc(642,`td`,24)(643,`em`)(644,`strong`),Mk(645,`(opcional)`),Kg()(),Jc(646,`p`),Mk(647,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(648,`code`),Mk(649,`p-options`),Kg(),Mk(650,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Jc(651,`p`),Mk(652,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Jc(653,`code`),Mk(654,`PoMultiSelectOption`),Kg(),Mk(655,`.`),Kg()()(),Jc(656,`tr`,43)(657,`td`,17)(658,`div`,26)(659,`span`,27),Mk(660,` p-field-value`),_u(661,`br`),Kg()()(),Jc(662,`td`,21)(663,`code`,28),Mk(664,`string`),Kg()(),Jc(665,`td`,23)(666,`p`)(667,`code`),Mk(668,`value`),Kg()()(),Jc(669,`td`,24)(670,`em`)(671,`strong`),Mk(672,`(opcional)`),Kg()(),Jc(673,`p`),Mk(674,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(675,`code`),Mk(676,`p-options`),Kg(),Mk(677,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Jc(678,`p`),Mk(679,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Jc(680,`code`),Mk(681,`PoMultiSelectOption`),Kg(),Mk(682,`.`),Kg()()(),Jc(683,`tr`,44)(684,`td`,17)(685,`div`,26)(686,`span`,27),Mk(687,` p-filter-mode`),_u(688,`br`),Kg()()(),Jc(689,`td`,21)(690,`code`,45),Mk(691,`PoMultiselectFilterMode`),Kg()(),Jc(692,`td`,23)(693,`p`)(694,`code`),Mk(695,`startsWith`),Kg()()(),Jc(696,`td`,24)(697,`em`)(698,`strong`),Mk(699,`(opcional)`),Kg()(),Jc(700,`p`),Mk(701,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),Kg()()(),Jc(702,`tr`,46)(703,`td`,17)(704,`div`,26)(705,`span`,27),Mk(706,` p-filter-service`),_u(707,`br`),Kg()()(),Jc(708,`td`,21)(709,`code`,28),Mk(710,`string `),Kg(),Jc(711,`code`,47),Mk(712,` PoMultiselectFilter`),Kg()(),Jc(713,`td`,23),Mk(714,`-`),Kg(),Jc(715,`td`,24)(716,`em`)(717,`strong`),Mk(718,`(opcional)`),Kg()(),Jc(719,`p`),Mk(720,`Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.`),Kg(),Jc(721,`p`),Mk(722,`Também existe a possibilidade de informar um serviço implementando a interface `),Jc(723,`code`),Mk(724,`PoMultiselectFilter`),Kg(),Mk(725,`.`),Kg(),Jc(726,`p`),Mk(727,`Caso utilizado uma URL, o serviço deve ser retornado no padrão `),Jc(728,`a`,48),Mk(729,`API PO UI`),Kg(),Mk(730,` e utilizar as propriedades `),Jc(731,`code`),Mk(732,`p-field-label`),Kg(),Mk(733,` e `),Jc(734,`code`),Mk(735,`p-field-value`),Kg(),Mk(736,` para a construção da lista de itens.`),Kg(),Jc(737,`p`),Mk(738,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Jc(739,`pre`)(740,`code`),Mk(741,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),Kg()(),Jc(742,`p`),Mk(743,`E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:`),Kg(),Jc(744,`pre`)(745,`code`),Mk(746,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),Kg()()()(),Jc(747,`tr`,49)(748,`td`,17)(749,`div`,26)(750,`span`,27),Mk(751,` p-help`),_u(752,`br`),Kg()()(),Jc(753,`td`,21)(754,`code`,28),Mk(755,`string`),Kg()(),Jc(756,`td`,23),Mk(757,`-`),Kg(),Jc(758,`td`,24)(759,`em`)(760,`strong`),Mk(761,`(opcional)`),Kg()(),Jc(762,`p`),Mk(763,`Texto de apoio para o campo.`),Kg()()(),Jc(764,`tr`,50)(765,`td`,17)(766,`div`,26)(767,`span`,27),Mk(768,` p-hide-search`),_u(769,`br`),Kg()()(),Jc(770,`td`,21)(771,`code`,30),Mk(772,`boolean`),Kg()(),Jc(773,`td`,23)(774,`p`)(775,`code`),Mk(776,`false`),Kg()()(),Jc(777,`td`,24)(778,`em`)(779,`strong`),Mk(780,`(opcional)`),Kg()(),Jc(781,`p`),Mk(782,`Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.`),Kg()()(),Jc(783,`tr`,51)(784,`td`,17)(785,`div`,26)(786,`span`,27),Mk(787,` p-hide-select-all`),_u(788,`br`),Kg()()(),Jc(789,`td`,21)(790,`code`,30),Mk(791,`boolean`),Kg()(),Jc(792,`td`,23)(793,`p`)(794,`code`),Mk(795,`false`),Kg()()(),Jc(796,`td`,24)(797,`em`)(798,`strong`),Mk(799,`(opcional)`),Kg()(),Jc(800,`p`),Mk(801,`Indica se o campo "Selecionar todos" será escondido.`),Kg()()(),Jc(802,`tr`,52)(803,`td`,17)(804,`div`,18)(805,`span`,19),Mk(806,` (p-keydown)`),_u(807,`br`),Kg()()(),Jc(808,`td`,21)(809,`code`,22),Mk(810,`EventEmitter`),Kg()(),Jc(811,`td`,23),Mk(812,`-`),Kg(),Jc(813,`td`,24)(814,`em`)(815,`strong`),Mk(816,`(opcional)`),Kg()(),Jc(817,`p`),Mk(818,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(819,`code`),Mk(820,`KeyboardEvent`),Kg(),Mk(821,` com informações sobre a tecla.`),Kg()()(),Jc(822,`tr`,53)(823,`td`,17)(824,`div`,26)(825,`span`,27),Mk(826,` p-label`),_u(827,`br`),Kg()()(),Jc(828,`td`,21)(829,`code`,28),Mk(830,`string`),Kg()(),Jc(831,`td`,23),Mk(832,`-`),Kg(),Jc(833,`td`,24)(834,`em`)(835,`strong`),Mk(836,`(opcional)`),Kg()(),Jc(837,`p`),Mk(838,`Label no componente.`),Kg()()(),Jc(839,`tr`,54)(840,`td`,17)(841,`div`,26)(842,`span`,27),Mk(843,` p-label-text-wrap`),_u(844,`br`),Kg()()(),Jc(845,`td`,21)(846,`code`,30),Mk(847,`boolean`),Kg()(),Jc(848,`td`,23)(849,`p`)(850,`code`),Mk(851,`false`),Kg()()(),Jc(852,`td`,24)(853,`em`)(854,`strong`),Mk(855,`(opcional)`),Kg()(),Jc(856,`p`),Mk(857,`Habilita a quebra automática do texto da propriedade `),Jc(858,`code`),Mk(859,`p-label`),Kg(),Mk(860,`. Quando `),Jc(861,`code`),Mk(862,`p-label-text-wrap`),Kg(),Mk(863,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(864,`tr`,55)(865,`td`,17)(866,`div`,26)(867,`span`,27),Mk(868,` p-listbox-control-position`),_u(869,`br`),Kg()()(),Jc(870,`td`,21)(871,`code`,56),Mk(872,`'top' `),Kg(),Jc(873,`code`,57),Mk(874,` 'bottom'`),Kg()(),Jc(875,`td`,23)(876,`p`)(877,`code`),Mk(878,`bottom`),Kg()()(),Jc(879,`td`,24)(880,`em`)(881,`strong`),Mk(882,`(opcional)`),Kg()(),Jc(883,`p`),Mk(884,`Define a direção preferida para exibição do `),Jc(885,`code`),Mk(886,`listbox`),Kg(),Mk(887,` em relação ao campo (`),Jc(888,`code`),Mk(889,`top`),Kg(),Mk(890,` ou `),Jc(891,`code`),Mk(892,`bottom`),Kg(),Mk(893,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Jc(894,`tr`,58)(895,`td`,17)(896,`div`,26)(897,`span`,27),Mk(898,` p-literals`),_u(899,`br`),Kg()()(),Jc(900,`td`,21)(901,`code`,59),Mk(902,`PoMultiselectLiterals`),Kg()(),Jc(903,`td`,23),Mk(904,`-`),Kg(),Jc(905,`td`,24)(906,`em`)(907,`strong`),Mk(908,`(opcional)`),Kg()(),Jc(909,`p`),Mk(910,`Objeto com as literais usadas no `),Jc(911,`code`),Mk(912,`po-multiselect`),Kg(),Mk(913,`.`),Kg(),Jc(914,`p`),Mk(915,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(916,`pre`)(917,`code`),Mk(918,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),Kg()(),Jc(919,`p`),Mk(920,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(921,`pre`)(922,`code`),Mk(923,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),Kg()(),Jc(924,`p`),Mk(925,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Jc(926,`pre`)(927,`code`),Mk(928,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),Kg()(),Jc(929,`blockquote`)(930,`p`),Mk(931,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(932,`a`,60)(933,`code`),Mk(934,`PoI18nService`),Kg()(),Mk(935,` ou do browser.`),Kg()()()(),Jc(936,`tr`,61)(937,`td`,17)(938,`div`,26)(939,`span`,27),Mk(940,` p-loading`),_u(941,`br`),Kg()()(),Jc(942,`td`,21)(943,`code`,30),Mk(944,`boolean`),Kg()(),Jc(945,`td`,23)(946,`p`)(947,`code`),Mk(948,`false`),Kg()()(),Jc(949,`td`,24)(950,`em`)(951,`strong`),Mk(952,`(opcional)`),Kg()(),Jc(953,`p`),Mk(954,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(955,`tr`,62)(956,`td`,17)(957,`div`,26)(958,`span`,27),Mk(959,` name`),_u(960,`br`),Kg()()(),Jc(961,`td`,21)(962,`code`,28),Mk(963,`string`),Kg()(),Jc(964,`td`,23),Mk(965,`-`),Kg(),Jc(966,`td`,24)(967,`p`),Mk(968,`Nome do componente.`),Kg()()(),Jc(969,`tr`,63)(970,`td`,17)(971,`div`,26)(972,`span`,27),Mk(973,` p-optional`),_u(974,`br`),Kg()()(),Jc(975,`td`,21)(976,`code`,30),Mk(977,`boolean`),Kg()(),Jc(978,`td`,23)(979,`p`)(980,`code`),Mk(981,`false`),Kg()()(),Jc(982,`td`,24)(983,`em`)(984,`strong`),Mk(985,`(opcional)`),Kg()(),Jc(986,`p`),Mk(987,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(988,`blockquote`)(989,`p`),Mk(990,`Não será exibida a indicação se:`),Kg()(),Jc(991,`ul`)(992,`li`),Mk(993,`O campo conter `),Jc(994,`code`),Mk(995,`p-required`),Kg(),Mk(996,`;`),Kg(),Jc(997,`li`),Mk(998,`Não possuir `),Jc(999,`code`),Mk(1e3,`p-help`),Kg(),Mk(1001,` e/ou `),Jc(1002,`code`),Mk(1003,`p-label`),Kg(),Mk(1004,`.`),Kg()()()(),Jc(1005,`tr`,64)(1006,`td`,17)(1007,`div`,26)(1008,`span`,27),Mk(1009,` p-options`),_u(1010,`br`),Kg()()(),Jc(1011,`td`,21)(1012,`code`,65),Mk(1013,`Array<PoMultiselectOption `),Kg(),Jc(1014,`code`,66),Mk(1015,` any>`),Kg()(),Jc(1016,`td`,23),Mk(1017,`-`),Kg(),Jc(1018,`td`,24)(1019,`p`),Mk(1020,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),Kg(),Jc(1021,`blockquote`)(1022,`p`),Mk(1023,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Kg()(),Jc(1024,`pre`)(1025,`code`),Mk(1026,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Kg()(),Jc(1027,`blockquote`)(1028,`p`),Mk(1029,`A lista pode ser definida utilizando um array com o valor representando `),Jc(1030,`code`),Mk(1031,`value`),Kg(),Mk(1032,` e `),Jc(1033,`code`),Mk(1034,`label`),Kg(),Mk(1035,` das seguintes formas:`),Kg()(),Jc(1036,`pre`)(1037,`code`),Mk(1038,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),Kg()(),Jc(1039,`pre`)(1040,`code`),Mk(1041,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),Kg()(),Jc(1042,`ul`)(1043,`li`),Mk(1044,`Aconselha-se utilizar valores distintos no `),Jc(1045,`code`),Mk(1046,`label`),Kg(),Mk(1047,` e `),Jc(1048,`code`),Mk(1049,`value`),Kg(),Mk(1050,` dos itens.`),Kg()()()(),Jc(1051,`tr`,67)(1052,`td`,17)(1053,`div`,26)(1054,`span`,27),Mk(1055,` p-placeholder`),_u(1056,`br`),Kg()()(),Jc(1057,`td`,21)(1058,`code`,28),Mk(1059,`string`),Kg()(),Jc(1060,`td`,23),Mk(1061,`-`),Kg(),Jc(1062,`td`,24)(1063,`em`)(1064,`strong`),Mk(1065,`(opcional)`),Kg()(),Jc(1066,`p`),Mk(1067,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Jc(1068,`tr`,68)(1069,`td`,17)(1070,`div`,26)(1071,`span`,27),Mk(1072,` p-placeholder-search`),_u(1073,`br`),Kg()()(),Jc(1074,`td`,21)(1075,`code`,28),Mk(1076,`string`),Kg()(),Jc(1077,`td`,23)(1078,`p`)(1079,`code`),Mk(1080,`Buscar`),Kg()()(),Jc(1081,`td`,24)(1082,`em`)(1083,`strong`),Mk(1084,`(opcional)`),Kg()(),Jc(1085,`p`),Mk(1086,`Placeholder do campo de pesquisa.`),Kg(),Jc(1087,`blockquote`)(1088,`p`),Mk(1089,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Kg()()()(),Jc(1090,`tr`,69)(1091,`td`,17)(1092,`div`,26)(1093,`span`,27),Mk(1094,` p-helper`),_u(1095,`br`),Kg()()(),Jc(1096,`td`,21)(1097,`code`,70),Mk(1098,`PoHelperOptions `),Kg(),Jc(1099,`code`,28),Mk(1100,` string`),Kg()(),Jc(1101,`td`,23),Mk(1102,`-`),Kg(),Jc(1103,`td`,24)(1104,`em`)(1105,`strong`),Mk(1106,`(opcional)`),Kg()(),Jc(1107,`p`),Mk(1108,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1109,`code`),Mk(1110,`p-label`),Kg(),Mk(1111,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1112,`code`),Mk(1113,`p-label`),Kg(),Mk(1114,`.`),Kg(),Jc(1115,`blockquote`)(1116,`p`),Mk(1117,`Para mais informações acesse: `),Jc(1118,`a`,71),Mk(1119,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(1120,`.`),Kg()(),Jc(1121,`blockquote`)(1122,`p`),Mk(1123,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1124,`code`),Mk(1125,`p-additional-help-tooltip`),Kg(),Mk(1126,` e `),Jc(1127,`code`),Mk(1128,`p-additional-help`),Kg(),Mk(1129,`) será ignorado.`),Kg()()()(),Jc(1130,`tr`,72)(1131,`td`,17)(1132,`div`,26)(1133,`span`,27),Mk(1134,` p-required`),_u(1135,`br`),Kg()()(),Jc(1136,`td`,21)(1137,`code`,30),Mk(1138,`boolean`),Kg()(),Jc(1139,`td`,23)(1140,`p`)(1141,`code`),Mk(1142,`false`),Kg()()(),Jc(1143,`td`,24)(1144,`em`)(1145,`strong`),Mk(1146,`(opcional)`),Kg()(),Jc(1147,`p`),Mk(1148,`Define que o campo será obrigatório.`),Kg(),Jc(1149,`blockquote`)(1150,`p`),Mk(1151,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1152,`code`),Mk(1153,`(p-disabled)`),Kg(),Mk(1154,`.`),Kg()()()(),Jc(1155,`tr`,73)(1156,`td`,17)(1157,`div`,26)(1158,`span`,27),Mk(1159,` p-show-required`),_u(1160,`br`),Kg()()(),Jc(1161,`td`,21)(1162,`code`,30),Mk(1163,`boolean`),Kg()(),Jc(1164,`td`,23),Mk(1165,`-`),Kg(),Jc(1166,`td`,24)(1167,`p`),Mk(1168,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(1169,`blockquote`)(1170,`p`),Mk(1171,`Não será exibida a indicação se:`),Kg()(),Jc(1172,`ul`)(1173,`li`),Mk(1174,`Não possuir `),Jc(1175,`code`),Mk(1176,`p-help`),Kg(),Mk(1177,` e/ou `),Jc(1178,`code`),Mk(1179,`p-label`),Kg(),Mk(1180,`.`),Kg()()()(),Jc(1181,`tr`,74)(1182,`td`,17)(1183,`div`,26)(1184,`span`,27),Mk(1185,` p-size`),_u(1186,`br`),Kg()()(),Jc(1187,`td`,21)(1188,`code`,28),Mk(1189,`string`),Kg()(),Jc(1190,`td`,23)(1191,`p`)(1192,`code`),Mk(1193,`medium`),Kg()()(),Jc(1194,`td`,24)(1195,`em`)(1196,`strong`),Mk(1197,`(opcional)`),Kg()(),Jc(1198,`p`),Mk(1199,`Define o tamanho do componente:`),Kg(),Jc(1200,`ul`)(1201,`li`)(1202,`code`),Mk(1203,`small`),Kg(),Mk(1204,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1205,`li`)(1206,`code`),Mk(1207,`medium`),Kg(),Mk(1208,`: altura do input como 44px.`),Kg()(),Jc(1209,`blockquote`)(1210,`p`),Mk(1211,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1212,`code`),Mk(1213,`medium`),Kg(),Mk(1214,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1215,`a`,75),Mk(1216,`po-theme`),Kg(),Mk(1217,`.`),Kg()()()(),Jc(1218,`tr`,76)(1219,`td`,17)(1220,`div`,26)(1221,`span`,27),Mk(1222,` p-sort`),_u(1223,`br`),Kg()()(),Jc(1224,`td`,21)(1225,`code`,30),Mk(1226,`boolean`),Kg()(),Jc(1227,`td`,23)(1228,`p`)(1229,`code`),Mk(1230,`false`),Kg()()(),Jc(1231,`td`,24)(1232,`em`)(1233,`strong`),Mk(1234,`(opcional)`),Kg()(),Jc(1235,`p`),Mk(1236,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),Kg()()()(),Jc(1237,`h3`,12),Mk(1238,`Métodos`),Kg(),Jc(1239,`table`,77)(1240,`tr`,78)(1241,`th`,79)(1242,`div`,26)(1243,`h4`)(1244,`span`,27),Mk(1245,` focus `),Kg()()()()(),Jc(1246,`tr`,24)(1247,`td`,24)(1248,`p`),Mk(1249,`Função que atribui foco ao componente.`),Kg(),Jc(1250,`p`),Mk(1251,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(1252,`pre`)(1253,`code`),Mk(1254,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),Kg()()()()(),_u(1255,`br`),Jc(1256,`table`,80)(1257,`tr`,78)(1258,`th`,79)(1259,`div`,26)(1260,`h4`)(1261,`span`,27),Mk(1262,` showAdditionalHelp `),Kg()()()()(),Jc(1263,`tr`,24)(1264,`td`,24)(1265,`p`),Mk(1266,`Método que exibe `),Jc(1267,`code`),Mk(1268,`p-helper`),Kg(),Mk(1269,` ou executa a ação definida em `),Jc(1270,`code`),Mk(1271,`p-helper{eventOnClick}`),Kg(),Mk(1272,` ou em `),Jc(1273,`code`),Mk(1274,`p-additionalHelp`),Kg(),Mk(1275,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1276,`code`),Mk(1277,`p-keydown`),Kg(),Mk(1278,`.`),Kg(),Jc(1279,`blockquote`)(1280,`p`),Mk(1281,`Exibe ou oculta o conteúdo do componente `),Jc(1282,`code`),Mk(1283,`po-helper`),Kg(),Mk(1284,` quando o componente estiver com foco.`),Kg()(),Jc(1285,`pre`)(1286,`code`),Mk(1287,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),Kg()(),Jc(1288,`pre`)(1289,`code`),Mk(1290,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1291,`br`),Jc(1292,`h3`),Mk(1293,`Interfaces`),Kg(),Jc(1294,`h4`,81)(1295,`code`,7),Mk(1296,`PoMultiselectFilter`),Kg()(),Jc(1297,`div`,2)(1298,`p`),Mk(1299,`Interface para os serviços que serão utilizados no po-multiselect.`),Kg()(),Jc(1300,`h4`,12),Mk(1301,`Métodos`),Kg(),Jc(1302,`table`,82)(1303,`tr`,78)(1304,`th`,79)(1305,`div`,26)(1306,`h4`)(1307,`span`,27),Mk(1308,` getFilteredData `),Kg()()()()(),Jc(1309,`tr`,24)(1310,`td`,24)(1311,`p`),Mk(1312,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Jc(1313,`code`),Mk(1314,`PoMultiselectOption`),Kg(),Mk(1315,`, será informado por parametro o campo e o valor a ser pesquisado.`),Kg()()()(),Jc(1316,`h5`)(1317,`b`),Mk(1318,`Parâmetros`),Kg()(),Jc(1319,`table`,13)(1320,`tr`,14)(1321,`th`,15),Mk(1322,`Nome`),Kg(),Jc(1323,`th`,15),Mk(1324,`Tipo`),Kg(),Jc(1325,`th`,15),Mk(1326,`Descrição`),Kg()(),Jc(1327,`tr`,78)(1328,`td`,17),Mk(1329,` params`),Kg(),Jc(1330,`td`,21)(1331,`code`,83),Mk(1332,` { property: string, value: string } `),Kg()(),Jc(1333,`td`,24)(1334,`p`),Mk(1335,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()()(),_u(1336,`br`),Jc(1337,`table`,84)(1338,`tr`,78)(1339,`th`,79)(1340,`div`,26)(1341,`h4`)(1342,`span`,27),Mk(1343,` getObjectsByValues `),Kg()()()()(),Jc(1344,`tr`,24)(1345,`td`,24)(1346,`p`),Mk(1347,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Jc(1348,`code`),Mk(1349,`PoMultiselectOption`),Kg(),Mk(1350,`, será informado por parâmetro valor a ser pesquisado.`),Kg()()()(),Jc(1351,`h5`)(1352,`b`),Mk(1353,`Parâmetros`),Kg()(),Jc(1354,`table`,13)(1355,`tr`,14)(1356,`th`,15),Mk(1357,`Nome`),Kg(),Jc(1358,`th`,15),Mk(1359,`Tipo`),Kg(),Jc(1360,`th`,15),Mk(1361,`Descrição`),Kg()(),Jc(1362,`tr`,78)(1363,`td`,17),Mk(1364,` values`),Kg(),Jc(1365,`td`,21)(1366,`code`,85),Mk(1367,` Array<string `),Kg(),Jc(1368,`code`,86),Mk(1369,` number> `),Kg()(),Jc(1370,`td`,24)(1371,`p`),Mk(1372,`Array com os valores a serem buscados.`),Kg()()()(),_u(1373,`br`),Jc(1374,`h4`,87)(1375,`code`,7),Mk(1376,`PoMultiselectLiterals`),Kg()(),Jc(1377,`div`,2)(1378,`p`),Mk(1379,`Interface para definição das literais usadas no `),Jc(1380,`code`),Mk(1381,`po-multiselect`),Kg(),Mk(1382,`.`),Kg()(),Jc(1383,`h4`,12),Mk(1384,`Propriedades`),Kg(),Jc(1385,`table`,13)(1386,`tr`,14)(1387,`th`,15),Mk(1388,`Nome`),Kg(),Jc(1389,`th`,15),Mk(1390,`Tipo`),Kg(),Jc(1391,`th`,15),Mk(1392,`Descrição`),Kg()(),Jc(1393,`tr`,88)(1394,`td`,17)(1395,`div`,26)(1396,`span`,27),Mk(1397,` noData`),_u(1398,`br`),Kg()()(),Jc(1399,`td`,21)(1400,`code`,28),Mk(1401,`string`),Kg()(),Jc(1402,`td`,24)(1403,`em`)(1404,`strong`),Mk(1405,`(opcional)`),Kg()(),Jc(1406,`p`),Mk(1407,`Texto exibido quando não houver dados encontrados na busca.`),Kg()()(),Jc(1408,`tr`,89)(1409,`td`,17)(1410,`div`,26)(1411,`span`,27),Mk(1412,` placeholderSearch`),_u(1413,`br`),Kg()()(),Jc(1414,`td`,21)(1415,`code`,28),Mk(1416,`string`),Kg()(),Jc(1417,`td`,24)(1418,`em`)(1419,`strong`),Mk(1420,`(opcional)`),Kg()(),Jc(1421,`p`),Mk(1422,`Texto do `),Jc(1423,`em`),Mk(1424,`placeholder`),Kg(),Mk(1425,` do campo de busca.`),Kg()()(),Jc(1426,`tr`,90)(1427,`td`,17)(1428,`div`,26)(1429,`span`,27),Mk(1430,` selectAll`),_u(1431,`br`),Kg()()(),Jc(1432,`td`,21)(1433,`code`,28),Mk(1434,`string`),Kg()(),Jc(1435,`td`,24)(1436,`em`)(1437,`strong`),Mk(1438,`(opcional)`),Kg()(),Jc(1439,`p`),Mk(1440,`Texto exibido no botão de selecionar todos.`),Kg()()(),Jc(1441,`tr`,91)(1442,`td`,17)(1443,`div`,26)(1444,`span`,27),Mk(1445,` selectItem`),_u(1446,`br`),Kg()()(),Jc(1447,`td`,21)(1448,`code`,28),Mk(1449,`string`),Kg()(),Jc(1450,`td`,24)(1451,`em`)(1452,`strong`),Mk(1453,`(opcional)`),Kg()(),Jc(1454,`p`),Mk(1455,`Texto exibido na propriedade placeholder.`),Kg()()()(),Jc(1456,`h4`,92)(1457,`code`,7),Mk(1458,`PoMultiselectOption`),Kg()(),Jc(1459,`div`,2)(1460,`p`),Mk(1461,`Interface dos itens da coleção que será exibida no dropdown do po-multiselect.`),Kg()(),Jc(1462,`h4`,12),Mk(1463,`Propriedades`),Kg(),Jc(1464,`table`,13)(1465,`tr`,14)(1466,`th`,15),Mk(1467,`Nome`),Kg(),Jc(1468,`th`,15),Mk(1469,`Tipo`),Kg(),Jc(1470,`th`,15),Mk(1471,`Descrição`),Kg()(),Jc(1472,`tr`,93)(1473,`td`,17)(1474,`div`,26)(1475,`span`,27),Mk(1476,` label`),_u(1477,`br`),Kg()()(),Jc(1478,`td`,21)(1479,`code`,28),Mk(1480,`string`),Kg()(),Jc(1481,`td`,24)(1482,`p`),Mk(1483,`Label exibido nos itens da lista.`),Kg()()(),Jc(1484,`tr`,94)(1485,`td`,17)(1486,`div`,26)(1487,`span`,27),Mk(1488,` value`),_u(1489,`br`),Kg()()(),Jc(1490,`td`,21)(1491,`code`,28),Mk(1492,`string `),Kg(),Jc(1493,`code`,38),Mk(1494,` number`),Kg()(),Jc(1495,`td`,24)(1496,`p`),Mk(1497,`Valor do objeto que será atribuído ao model.`),Kg()()()(),Jc(1498,`h3`),Mk(1499,`Enums`),Kg(),Jc(1500,`h4`,95)(1501,`code`,7),Mk(1502,`PoMultiselectFilterMode`),Kg()(),Jc(1503,`div`,2)(1504,`p`),Mk(1505,`Define o tipo de busca usado no po-multiselect.`),Kg()(),Jc(1506,`h4`,12),Mk(1507,`Propriedades`),Kg(),Jc(1508,`table`,13)(1509,`tr`,14)(1510,`th`,15),Mk(1511,`Nome`),Kg(),Jc(1512,`th`,15),Mk(1513,`Descrição`),Kg()(),Jc(1514,`tr`,96)(1515,`td`,17)(1516,`div`,26)(1517,`span`,27),Mk(1518,` startsWith`),_u(1519,`br`),Kg()()(),Jc(1520,`td`,24)(1521,`p`),Mk(1522,`Verifica se o texto `),Jc(1523,`em`),Mk(1524,`inicia`),Kg(),Mk(1525,` com o valor pesquisado.`),Kg()()(),Jc(1526,`tr`,97)(1527,`td`,17)(1528,`div`,26)(1529,`span`,27),Mk(1530,` contains`),_u(1531,`br`),Kg()()(),Jc(1532,`td`,24)(1533,`p`),Mk(1534,`Verifica se o texto `),Jc(1535,`em`),Mk(1536,`contém`),Kg(),Mk(1537,` o valor pesquisado.`),Kg()()(),Jc(1538,`tr`,98)(1539,`td`,17)(1540,`div`,26)(1541,`span`,27),Mk(1542,` endsWith`),_u(1543,`br`),Kg()()(),Jc(1544,`td`,24)(1545,`p`),Mk(1546,`Verifica se o texto `),Jc(1547,`em`),Mk(1548,`finaliza`),Kg(),Mk(1549,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return l})();function st(l,I){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-multiselect-basic-view`)(2,`sample-po-multiselect-labs-view`)(3,`sample-po-multiselect-vacation-view`)(4,`sample-po-multiselect-vacation-reactive-form-view`)(5,`sample-po-multiselect-template-view`)(6,`sample-po-multiselect-heroes-view`)(7,`sample-po-multiselect-any-array-view`),Kg()),l&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var mt=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;title=`Multiselect`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Multiselect · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0),LO(1,st,8,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-multiselect-doc`),Kg()()),a&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,_e,Te,Ae,qe,ke,We,Ne,He],encapsulation:2,changeDetection:1})}return l})()}];var Be=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(mt),GV]})}return l})();var Ei=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Be]})}return l})();export{Ei as DocPoMultiselectModule};
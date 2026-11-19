import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,At as Zte,Da as kI,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ta as jk,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,an as ia,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,hr as Db,io as vu,j as I4,ji as Vk,ki as V_,li as Qc,lr as Be$1,na as de,oo as wg,pi as R,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,uo as xk,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var qe=()=>({label:`Option 1`,value:`1`});var Be=()=>({label:`Option 2`,value:`2`});var Fe=(a,W)=>[a,W];var xe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&vu(0,`po-select`,0),p&2&&Rb(`p-options`,jk(3,Fe,Lk(1,qe),Lk(2,Be)))},dependencies:[Koe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-select-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-select-basic/sample-po-select-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-basic/sample-po-select-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Select Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-select-basic/sample-po-select-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-select-basic/sample-po-select-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-select-basic`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ze,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,xe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{cdr=p(Be$1);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:c,value:d}=p;if(i){let o=r.findIndex(ae=>ae.label===i&&`options`in ae);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:c,value:d}]}]):(r[o].options.push({label:c,value:d}),r)}return[...r,{label:c,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let c=YO();Qc(0,`po-select`,2),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.select,o)||(i.select=o),U_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4)(4,`po-info`,5),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0),vu(8,`po-divider`,6),Qc(9,`div`,3)(10,`po-switch`,7),z0(),vt(`p-change`,function(o){return i.restoreSwitch(o)}),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),U_(o)}),Kg(),Qc(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),U_(o)}),vt(`p-change`,function(){return i.optionsGroupSelection()}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.optionsGroup,o)||(i.optionsGroup=o),U_(o)}),Kg()(),vu(13,`po-divider`,10),Qc(14,`div`,3)(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.option.label,o)||(i.option.label=o),U_(o)}),Kg(),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.option.value,o)||(i.option.value=o),U_(o)}),Kg()(),Qc(17,`div`,3)(18,`po-button`,13),vt(`p-click`,function(){return i.addOption()}),Kg()()(),vu(19,`po-divider`),Qc(20,`form`,null,1)(22,`po-input`,14),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.label,o)||(i.label=o),U_(o)}),Kg(),Qc(23,`po-input`,15),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.help,o)||(i.help=o),U_(o)}),Kg(),Qc(24,`po-input`,16),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.helperText,o)||(i.helperText=o),U_(o)}),Kg(),Qc(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.placeholder,o)||(i.placeholder=o),U_(o)}),Kg(),Qc(26,`po-input`,18),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),U_(o)}),Kg(),Qc(27,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.properties,o)||(i.properties=o),U_(o)}),Kg(),Qc(28,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.size,o)||(i.size=o),U_(o)}),Kg(),Qc(29,`div`,3)(30,`div`,21)(31,`po-button`,22),vt(`p-click`,function(){return i.restore()}),Kg()()(),vu(32,`form`),Kg()}if(p&2){let c=ik(7);Yb(`ngModel`,i.select),Rb(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,i.select),wg(),Rb(`p-value`,i.event),wg(6),Yb(`ngModel`,i.selectOptionGroupSwitch),W0(),wg(),Yb(`ngModel`,i.selectedOptionsGroup),Rb(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),W0(),wg(),Yb(`ngModel`,i.optionsGroup),Rb(`p-disabled`,!i.selectOptionGroupSwitch),W0(),wg(3),Yb(`ngModel`,i.option.label),W0(),wg(),Yb(`ngModel`,i.option.value),W0(),wg(2),Rb(`p-disabled`,c.invalid),wg(4),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.help),W0(),wg(),Yb(`ngModel`,i.helperText),W0(),wg(),Yb(`ngModel`,i.placeholder),W0(),wg(),Yb(`ngModel`,i.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-select-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-select-labs/sample-po-select-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-labs/sample-po-select-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Select Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-select-labs/sample-po-select-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-select-labs/sample-po-select-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  helperText: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
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
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-select-labs`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ne,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{http=p(kI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function je(a,W){if(a&1&&(Qc(0,`div`,17),vu(1,`po-avatar`,18),Qc(2,`div`,19)(3,`div`,20),Sk(4),Kg(),Qc(5,`div`,21),Sk(6),Kg()()()),a&2){let r=W.$implicit;wg(),Rb(`p-src`,xk(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),wg(3),Gb(r.label),wg(2),Gb(r.value)}}var Te=(()=>{class a{sampleService=p(oe);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[we$1([oe])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let c=YO();Qc(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.documentType,o)||(i.documentType=o),U_(o)}),vt(`p-change`,function(o){return i.changeType(o)}),Kg(),Qc(4,`po-input`,4),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.document,o)||(i.document=o),U_(o)}),Kg()(),Qc(5,`div`,2)(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.name,o)||(i.name=o),U_(o)}),Kg(),Qc(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.address,o)||(i.address=o),U_(o)}),Kg()(),Qc(8,`div`,2)(9,`po-select`,7),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.state,o)||(i.state=o),U_(o)}),vt(`p-change`,function(){return i.onChangeState()}),Db(10,je,7,4,`ng-template`,8),Kg(),Qc(11,`po-select`,9),z0(),Kb(`ngModelChange`,function(o){return B_(c),Tk(i.city,o)||(i.city=o),U_(o)}),Kg()(),Qc(12,`div`,2)(13,`po-button`,10),vt(`p-click`,function(){B_(c);let o=ik(15);return U_(o.open())}),Kg()()(),Qc(14,`po-modal`,11,1)(16,`div`,2),vu(17,`po-info`,12)(18,`po-info`,13),Kg(),vu(19,`po-divider`),Qc(20,`div`,2),vu(21,`po-info`,13)(22,`po-info`,14),Kg(),vu(23,`po-divider`),Qc(24,`div`,2),vu(25,`po-info`,15)(26,`po-info`,16),Kg()()}if(p&2){let c=ik(1);wg(3),Yb(`ngModel`,i.documentType),Rb(`p-options`,i.options),W0(),wg(),Yb(`ngModel`,i.document),Rb(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),W0(),wg(2),Yb(`ngModel`,i.name),Rb(`p-label`,i.nameLabel),W0(),wg(),Yb(`ngModel`,i.address),W0(),wg(2),Yb(`ngModel`,i.state),Rb(`p-options`,i.stateOptions),W0(),wg(2),Yb(`ngModel`,i.city),Rb(`p-options`,i.cityOptions),W0(),wg(2),Rb(`p-disabled`,c.invalid),wg(4),Rb(`p-value`,i.documentType),wg(),Rb(`p-label`,i.documentLabel)(`p-value`,i.document),wg(3),Rb(`p-label`,i.nameLabel)(`p-value`,i.name),wg(),Rb(`p-value`,i.address),wg(3),Rb(`p-value`,i.getStateByValue(i.state)),wg(),Rb(`p-value`,i.getCityByValue(i.city))}},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,Nf,j4,Zte,Koe,Joe,ia],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:56,vars:6,consts:[[`id`,`sample-po-select-customer-registration`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Select - Customer registration`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` option.value `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` option.label `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
            <div class="sample-select-option-template-value">`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` option.value `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styleUrls: ['./sample-po-select-customer-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),Kg()(),Qc(41,`label`,6),Sk(42,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),Kg(),Qc(43,`div`,12)(44,`pre`,11),Sk(45,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),Kg()()()(),Qc(46,`po-tab`,13)(47,`div`)(48,`label`,6),Sk(49,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),Kg(),Qc(50,`div`,14)(51,`pre`,15),Sk(52,`.sample-select-option-template-container {
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
}

.sample-select-option-template-margin {
  margin: 5px;
}

.sample-select-option-template-label {
  font-size: 16px;
}

.sample-select-option-template-value {
  font-size: 12px;
  text-transform: uppercase;
}
`),Kg()()()()()(),Qc(53,`div`,16),vu(54,`sample-po-select-customer-registration`),Kg(),vu(55,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Te],encapsulation:2,changeDetection:1})}return a})();var Oe=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(Qc(0,`po-select`,0),z0(),Kb(`ngModelChange`,function(d){return Tk(i.select,d)||(i.select=d),d}),Kg(),Qc(1,`po-info`,1),Kb(`p-valueChange`,function(d){return Tk(i.select,d)||(i.select=d),d}),Kg(),Qc(2,`div`,2)(3,`po-select`,3),z0(),vt(`p-change`,function(d){return i.onChange(d)}),Kb(`ngModelChange`,function(d){return Tk(i.fieldLabel,d)||(i.fieldLabel=d),d}),Kg(),Qc(4,`po-select`,4),z0(),vt(`p-change`,function(d){return i.onChange(d)}),Kb(`ngModelChange`,function(d){return Tk(i.fieldValue,d)||(i.fieldValue=d),d}),Kg()()),p&2&&(Yb(`ngModel`,i.select),Rb(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),W0(),wg(),Yb(`p-value`,i.select),wg(2),Rb(`p-options`,i.labels),Yb(`ngModel`,i.fieldLabel),W0(),wg(),Rb(`p-options`,i.values),Yb(`ngModel`,i.fieldValue),W0())},dependencies:[MZ,QL,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-select-companies`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-select-companies/sample-po-select-companies.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-companies/sample-po-select-companies.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Select Companies`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-select-companies/sample-po-select-companies.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-select-companies/sample-po-select-companies.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
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

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-select-companies`),Kg(),vu(25,`hr`)),p&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ke,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-select-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`interface-po-select-option-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-select-option-group-label`,1,`docs-api-properties-row`],[`id`,`interface-po-select-option-group-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`id`,`interface-po-select-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-select-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-select-option-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoSelectComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),Kg(),Qc(24,`blockquote`)(25,`p`),Sk(26,`Ao passar um valor para o `),Qc(27,`em`),Sk(28,`model`),Kg(),Sk(29,` que não está na lista de opções, o mesmo será definido como `),Qc(30,`code`),Sk(31,`undefined`),Kg(),Sk(32,`.`),Kg()(),Qc(33,`p`),Sk(34,`Também existe a possibilidade de utilizar um `),Qc(35,`em`),Sk(36,`template`),Kg(),Sk(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Qc(38,`strong`)(39,`a`,6),Sk(40,`p-combo-option-template`),Kg()(),Sk(41,`.`),Kg(),Qc(42,`blockquote`)(43,`p`),Sk(44,`Obs: o template `),Qc(45,`strong`)(46,`a`,7),Sk(47,`p-select-option-template`),Kg()(),Sk(48,` será depreciado na versão 14.x.x.`),Kg()(),Qc(49,`h4`),Sk(50,`Tokens customizáveis`),Kg(),Qc(51,`p`),Sk(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(53,`blockquote`)(54,`p`),Sk(55,`Para maiores informações, acesse o guia `),Qc(56,`a`,8),Sk(57,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(58,`.`),Kg()(),Qc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),Sk(63,`Propriedade`),Kg(),Qc(64,`th`),Sk(65,`Descrição`),Kg(),Qc(66,`th`),Sk(67,`Valor Padrão`),Kg()()(),Qc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),Sk(72,`Default Values`),Kg()(),vu(73,`td`)(74,`td`),Kg(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--font-family`),Kg()(),Qc(79,`td`),Sk(80,`Família tipográfica usada`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(--font-family-theme)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--font-size`),Kg()(),Qc(88,`td`),Sk(89,`Tamanho da fonte`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--font-size-default)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--text-color-empty`),Kg()(),Qc(97,`td`),Sk(98,`Cor do placeholder`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--color-neutral-light-30)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--color`),Kg()(),Qc(106,`td`),Sk(107,`Cor da borda`),Kg(),Qc(108,`td`)(109,`code`),Sk(110,`var(--color-neutral-dark-70)`),Kg()()(),Qc(111,`tr`)(112,`td`)(113,`code`),Sk(114,`--background`),Kg()(),Qc(115,`td`),Sk(116,`Cor de background`),Kg(),Qc(117,`td`)(118,`code`),Sk(119,`var(--color-neutral-light-05)`),Kg()()(),Qc(120,`tr`)(121,`td`)(122,`code`),Sk(123,`--text-color`),Kg()(),Qc(124,`td`),Sk(125,`Cor do texto`),Kg(),Qc(126,`td`)(127,`code`),Sk(128,`var(--color-neutral-dark-90)`),Kg()()(),Qc(129,`tr`)(130,`td`)(131,`code`),Sk(132,`--padding-horizontal`),Kg()(),Qc(133,`td`),Sk(134,`Preenchimento horizontal`),Kg(),Qc(135,`td`)(136,`code`),Sk(137,`0.5em`),Kg()()(),Qc(138,`tr`)(139,`td`)(140,`code`),Sk(141,`--padding-vertical`),Kg()(),Qc(142,`td`),Sk(143,`Preenchimento vertical`),Kg(),Qc(144,`td`)(145,`code`),Sk(146,`0.7em`),Kg()()(),Qc(147,`tr`)(148,`td`)(149,`code`),Sk(150,`--field-container-title-justify`),Kg()(),Qc(151,`td`),Sk(152,`Alinhamento horizontal do título (`),Qc(153,`code`),Sk(154,`justify-content`),Kg(),Sk(155,`)`),Kg(),Qc(156,`td`)(157,`code`),Sk(158,`space-between`),Kg()()(),Qc(159,`tr`)(160,`td`)(161,`code`),Sk(162,`--field-container-title-flex`),Kg()(),Qc(163,`td`),Sk(164,`Flex do título (`),Qc(165,`code`),Sk(166,`flex`),Kg(),Sk(167,`)`),Kg(),Qc(168,`td`)(169,`code`),Sk(170,`1 auto`),Kg()()(),Qc(171,`tr`)(172,`td`)(173,`strong`),Sk(174,`Hover`),Kg()(),vu(175,`td`)(176,`td`),Kg(),Qc(177,`tr`)(178,`td`)(179,`code`),Sk(180,`--color-hover`),Kg()(),Qc(181,`td`),Sk(182,`Cor principal no estado hover`),Kg(),Qc(183,`td`)(184,`code`),Sk(185,`var(--color-brand-01-dark)`),Kg()()(),Qc(186,`tr`)(187,`td`)(188,`code`),Sk(189,`--background-hover`),Kg()(),Qc(190,`td`),Sk(191,`Cor de background no estado hover`),Kg(),Qc(192,`td`)(193,`code`),Sk(194,`var(--color-brand-01-lighter)`),Kg()()(),Qc(195,`tr`)(196,`td`)(197,`strong`),Sk(198,`Focused`),Kg()(),vu(199,`td`)(200,`td`),Kg(),Qc(201,`tr`)(202,`td`)(203,`code`),Sk(204,`--outline-color-focused`),Kg()(),Qc(205,`td`),Sk(206,`Cor do outline do estado de focus`),Kg(),Qc(207,`td`)(208,`code`),Sk(209,`var(--color-action-focus)`),Kg()()(),Qc(210,`tr`)(211,`td`)(212,`code`),Sk(213,`--color-focused`),Kg()(),Qc(214,`td`),Sk(215,`Cor da borda no estado de focus`),Kg(),Qc(216,`td`)(217,`code`),Sk(218,`var(--color-action-default)`),Kg()()(),Qc(219,`tr`)(220,`td`)(221,`strong`),Sk(222,`Disabled`),Kg()(),vu(223,`td`)(224,`td`),Kg(),Qc(225,`tr`)(226,`td`)(227,`code`),Sk(228,`--color-disabled`),Kg()(),Qc(229,`td`),Sk(230,`Cor principal no estado disabled`),Kg(),Qc(231,`td`)(232,`code`),Sk(233,`var(--color-neutral-light-30)`),Kg()()(),Qc(234,`tr`)(235,`td`)(236,`code`),Sk(237,`--background-color-disabled`),Kg(),Sk(238,`\xA0`),Kg(),Qc(239,`td`),Sk(240,`Cor de background no estado disabled`),Kg(),Qc(241,`td`)(242,`code`),Sk(243,`var(--color-neutral-light-20)`),Kg()()()()()(),Qc(244,`div`,9)(245,`h4`,10),Sk(246,`Seletor`),Kg(),Qc(247,`pre`,11),Sk(248,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),Kg()(),Qc(249,`h4`,12),Sk(250,`Propriedades`),Kg(),Qc(251,`table`,13)(252,`tr`,14)(253,`th`,15),Sk(254,`Nome`),Kg(),Qc(255,`th`,15),Sk(256,`Tipo`),Kg(),Qc(257,`th`,15),Sk(258,`Padrão`),Kg(),Qc(259,`th`,15),Sk(260,`Descrição`),Kg()(),Qc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),Sk(265,` (p-additional-help)`),vu(266,`br`),Kg()(),Qc(267,`div`,20),Sk(268,`Deprecated`),Kg()(),Qc(269,`td`,21)(270,`code`,22),Sk(271,`EventEmitter`),Kg()(),Qc(272,`td`,23),Sk(273,`-`),Kg(),Qc(274,`td`,24)(275,`em`)(276,`strong`),Sk(277,`(opcional)`),Kg()(),Qc(278,`p`),Sk(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(280,`blockquote`)(281,`p`),Sk(282,`Essa propriedade está `),Qc(283,`strong`),Sk(284,`depreciada`),Kg(),Sk(285,` e será removida na versão `),Qc(286,`code`),Sk(287,`23.x.x`),Kg(),Sk(288,`. Recomendamos utilizar a propriedade `),Qc(289,`code`),Sk(290,`p-helper`),Kg(),Sk(291,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(292,`tr`,25)(293,`td`,17)(294,`div`,26)(295,`span`,27),Sk(296,` p-additional-help-tooltip`),vu(297,`br`),Kg()(),Qc(298,`div`,20),Sk(299,`Deprecated`),Kg()(),Qc(300,`td`,21)(301,`code`,28),Sk(302,`string`),Kg()(),Qc(303,`td`,23),Sk(304,`-`),Kg(),Qc(305,`td`,24)(306,`em`)(307,`strong`),Sk(308,`(opcional)`),Kg()(),Qc(309,`p`),Sk(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(311,`code`),Sk(312,`po-helper`),Kg(),Sk(313,`.
`),Qc(314,`strong`),Sk(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(316,`blockquote`)(317,`p`),Sk(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(319,`blockquote`)(320,`p`),Sk(321,`Essa propriedade está `),Qc(322,`strong`),Sk(323,`depreciada`),Kg(),Sk(324,` e será removida na versão `),Qc(325,`code`),Sk(326,`23.x.x`),Kg(),Sk(327,`. Recomendamos utilizar a propriedade `),Qc(328,`code`),Sk(329,`p-helper`),Kg(),Sk(330,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(331,`tr`,29)(332,`td`,17)(333,`div`,26)(334,`span`,27),Sk(335,` p-append-in-body`),vu(336,`br`),Kg()()(),Qc(337,`td`,21)(338,`code`,30),Sk(339,`boolean`),Kg()(),Qc(340,`td`,23)(341,`p`)(342,`code`),Sk(343,`false`),Kg()()(),Qc(344,`td`,24)(345,`em`)(346,`strong`),Sk(347,`(opcional)`),Kg()(),Qc(348,`p`),Sk(349,`Define que o popover (`),Qc(350,`code`),Sk(351,`p-helper`),Kg(),Sk(352,` e/ou `),Qc(353,`code`),Sk(354,`p-error-limit`),Kg(),Sk(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(356,`blockquote`)(357,`p`),Sk(358,`Quando utilizado com `),Qc(359,`code`),Sk(360,`p-helper`),Kg(),Sk(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(362,`tr`,31)(363,`td`,17)(364,`div`,18)(365,`span`,19),Sk(366,` (p-blur)`),vu(367,`br`),Kg()()(),Qc(368,`td`,21)(369,`code`,22),Sk(370,`EventEmitter`),Kg()(),Qc(371,`td`,23),Sk(372,`-`),Kg(),Qc(373,`td`,24)(374,`em`)(375,`strong`),Sk(376,`(opcional)`),Kg()(),Qc(377,`p`),Sk(378,`Evento disparado ao sair do campo.`),Kg()()(),Qc(379,`tr`,32)(380,`td`,17)(381,`div`,18)(382,`span`,19),Sk(383,` (p-change)`),vu(384,`br`),Kg()()(),Qc(385,`td`,21)(386,`code`,22),Sk(387,`EventEmitter`),Kg()(),Qc(388,`td`,23),Sk(389,`-`),Kg(),Qc(390,`td`,24)(391,`em`)(392,`strong`),Sk(393,`(opcional)`),Kg()(),Qc(394,`p`),Sk(395,`Evento disparado ao alterar valor do campo.`),Kg()()(),Qc(396,`tr`,33)(397,`td`,17)(398,`div`,18)(399,`span`,19),Sk(400,` (p-change-model)`),vu(401,`br`),Kg()()(),Qc(402,`td`,21)(403,`code`,22),Sk(404,`EventEmitter`),Kg()(),Qc(405,`td`,23),Sk(406,`-`),Kg(),Qc(407,`td`,24)(408,`em`)(409,`strong`),Sk(410,`(opcional)`),Kg()(),Qc(411,`p`),Sk(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(413,`code`),Sk(414,`setValue`),Kg(),Sk(415,`, `),Qc(416,`code`),Sk(417,`patchValue`),Kg(),Sk(418,`, carregamento assíncrono).`),Kg(),Qc(419,`p`),Sk(420,`Diferentemente do `),Qc(421,`code`),Sk(422,`p-change`),Kg(),Sk(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(424,`code`),Sk(425,`p-change-model`),Kg(),Sk(426,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(427,`p`),Sk(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(429,`tr`,34)(430,`td`,17)(431,`div`,26)(432,`span`,27),Sk(433,` p-compact-label`),vu(434,`br`),Kg()()(),Qc(435,`td`,21)(436,`code`,30),Sk(437,`boolean`),Kg()(),Qc(438,`td`,23)(439,`p`)(440,`code`),Sk(441,`false`),Kg()()(),Qc(442,`td`,24)(443,`em`)(444,`strong`),Sk(445,`(opcional)`),Kg()(),Qc(446,`p`),Sk(447,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(448,`p`),Sk(449,`Quando habilitado (`),Qc(450,`code`),Sk(451,`true`),Kg(),Sk(452,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(453,`ul`)(454,`li`)(455,`code`),Sk(456,`po-label`),Kg()(),Qc(457,`li`)(458,`code`),Sk(459,`p-requirement (showRequired)`),Kg()(),Qc(460,`li`)(461,`code`),Sk(462,`po-helper`),Kg()()(),Qc(463,`p`),Sk(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(465,`p`),Sk(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(467,`ul`)(468,`li`)(469,`code`),Sk(470,`--field-container-title-justify`),Kg()(),Qc(471,`li`)(472,`code`),Sk(473,`--field-container-title-flex`),Kg()()(),Qc(474,`p`),Sk(475,`Exemplo:`),Kg(),Qc(476,`pre`)(477,`code`),Sk(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(479,`p`),Sk(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(481,`tr`,35)(482,`td`,17)(483,`div`,26)(484,`span`,27),Sk(485,` p-disabled`),vu(486,`br`),Kg()()(),Qc(487,`td`,21)(488,`code`,30),Sk(489,`boolean`),Kg()(),Qc(490,`td`,23)(491,`p`)(492,`code`),Sk(493,`false`),Kg()()(),Qc(494,`td`,24)(495,`em`)(496,`strong`),Sk(497,`(opcional)`),Kg()(),Qc(498,`p`),Sk(499,`Indica se o campo será desabilitado.`),Kg()()(),Qc(500,`tr`,36)(501,`td`,17)(502,`div`,26)(503,`span`,27),Sk(504,` p-error-limit`),vu(505,`br`),Kg()()(),Qc(506,`td`,21)(507,`code`,30),Sk(508,`boolean`),Kg()(),Qc(509,`td`,23)(510,`p`)(511,`code`),Sk(512,`false`),Kg()()(),Qc(513,`td`,24)(514,`em`)(515,`strong`),Sk(516,`(opcional)`),Kg()(),Qc(517,`p`),Sk(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(519,`blockquote`)(520,`p`),Sk(521,`Caso essa propriedade seja definida como `),Qc(522,`code`),Sk(523,`true`),Kg(),Sk(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(525,`tr`,37)(526,`td`,17)(527,`div`,26)(528,`span`,27),Sk(529,` p-field-error-message`),vu(530,`br`),Kg()()(),Qc(531,`td`,21)(532,`code`,28),Sk(533,`string`),Kg()(),Qc(534,`td`,23),Sk(535,`-`),Kg(),Qc(536,`td`,24)(537,`em`)(538,`strong`),Sk(539,`(opcional)`),Kg()(),Qc(540,`p`),Sk(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(542,`blockquote`)(543,`p`),Sk(544,`Necessário que a propriedade `),Qc(545,`code`),Sk(546,`p-required`),Kg(),Sk(547,` esteja habilitada.`),Kg()()()(),Qc(548,`tr`,38)(549,`td`,17)(550,`div`,26)(551,`span`,27),Sk(552,` p-field-label`),vu(553,`br`),Kg()()(),Qc(554,`td`,21)(555,`code`,28),Sk(556,`string`),Kg()(),Qc(557,`td`,23)(558,`p`)(559,`code`),Sk(560,`label`),Kg()()(),Qc(561,`td`,24)(562,`em`)(563,`strong`),Sk(564,`(opcional)`),Kg()(),Qc(565,`p`),Sk(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(567,`code`),Sk(568,`p-options`),Kg(),Sk(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg()()(),Qc(570,`tr`,39)(571,`td`,17)(572,`div`,26)(573,`span`,27),Sk(574,` p-field-value`),vu(575,`br`),Kg()()(),Qc(576,`td`,21)(577,`code`,28),Sk(578,`string`),Kg()(),Qc(579,`td`,23)(580,`p`)(581,`code`),Sk(582,`value`),Kg()()(),Qc(583,`td`,24)(584,`em`)(585,`strong`),Sk(586,`(opcional)`),Kg()(),Qc(587,`p`),Sk(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(589,`code`),Sk(590,`p-options`),Kg(),Sk(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg()()(),Qc(592,`tr`,40)(593,`td`,17)(594,`div`,26)(595,`span`,27),Sk(596,` p-help`),vu(597,`br`),Kg()()(),Qc(598,`td`,21)(599,`code`,28),Sk(600,`string`),Kg()(),Qc(601,`td`,23),Sk(602,`-`),Kg(),Qc(603,`td`,24)(604,`p`),Sk(605,`Texto de apoio para o campo.`),Kg()()(),Qc(606,`tr`,41)(607,`td`,17)(608,`div`,18)(609,`span`,19),Sk(610,` (p-keydown)`),vu(611,`br`),Kg()()(),Qc(612,`td`,21)(613,`code`,22),Sk(614,`EventEmitter`),Kg()(),Qc(615,`td`,23),Sk(616,`-`),Kg(),Qc(617,`td`,24)(618,`em`)(619,`strong`),Sk(620,`(opcional)`),Kg()(),Qc(621,`p`),Sk(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(623,`code`),Sk(624,`KeyboardEvent`),Kg(),Sk(625,` com informações sobre a tecla.`),Kg()()(),Qc(626,`tr`,42)(627,`td`,17)(628,`div`,26)(629,`span`,27),Sk(630,` p-label`),vu(631,`br`),Kg()()(),Qc(632,`td`,21)(633,`code`,28),Sk(634,`string`),Kg()(),Qc(635,`td`,23),Sk(636,`-`),Kg(),Qc(637,`td`,24)(638,`p`),Sk(639,`Rótulo exibido pelo componente.`),Kg()()(),Qc(640,`tr`,43)(641,`td`,17)(642,`div`,26)(643,`span`,27),Sk(644,` p-label-text-wrap`),vu(645,`br`),Kg()()(),Qc(646,`td`,21)(647,`code`,30),Sk(648,`boolean`),Kg()(),Qc(649,`td`,23)(650,`p`)(651,`code`),Sk(652,`false`),Kg()()(),Qc(653,`td`,24)(654,`em`)(655,`strong`),Sk(656,`(opcional)`),Kg()(),Qc(657,`p`),Sk(658,`Habilita a quebra automática do texto da propriedade `),Qc(659,`code`),Sk(660,`p-label`),Kg(),Sk(661,`. Quando `),Qc(662,`code`),Sk(663,`p-label-text-wrap`),Kg(),Sk(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(665,`tr`,44)(666,`td`,17)(667,`div`,26)(668,`span`,27),Sk(669,` p-loading`),vu(670,`br`),Kg()()(),Qc(671,`td`,21)(672,`code`,30),Sk(673,`boolean`),Kg()(),Qc(674,`td`,23)(675,`p`)(676,`code`),Sk(677,`false`),Kg()()(),Qc(678,`td`,24)(679,`em`)(680,`strong`),Sk(681,`(opcional)`),Kg()(),Qc(682,`p`),Sk(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(684,`tr`,45)(685,`td`,17)(686,`div`,26)(687,`span`,27),Sk(688,` name`),vu(689,`br`),Kg()()(),Qc(690,`td`,21)(691,`code`,28),Sk(692,`string`),Kg()(),Qc(693,`td`,23),Sk(694,`-`),Kg(),Qc(695,`td`,24)(696,`p`),Sk(697,`Nome do componente.`),Kg()()(),Qc(698,`tr`,46)(699,`td`,17)(700,`div`,18)(701,`span`,19),Sk(702,` (ngModelChange)`),vu(703,`br`),Kg()()(),Qc(704,`td`,21)(705,`code`,22),Sk(706,`EventEmitter`),Kg()(),Qc(707,`td`,23),Sk(708,`-`),Kg(),Qc(709,`td`,24)(710,`em`)(711,`strong`),Sk(712,`(opcional)`),Kg()(),Qc(713,`p`),Sk(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Qc(715,`p`),Sk(716,`Na versão 12.2.0 do Angular a verificação `),Qc(717,`code`),Sk(718,`strictTemplates`),Kg(),Sk(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Qc(720,`pre`)(721,`code`),Sk(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),Kg()()()(),Qc(723,`tr`,47)(724,`td`,17)(725,`div`,26)(726,`span`,27),Sk(727,` p-optional`),vu(728,`br`),Kg()()(),Qc(729,`td`,21)(730,`code`,30),Sk(731,`boolean`),Kg()(),Qc(732,`td`,23)(733,`p`)(734,`code`),Sk(735,`false`),Kg()()(),Qc(736,`td`,24)(737,`em`)(738,`strong`),Sk(739,`(opcional)`),Kg()(),Qc(740,`p`),Sk(741,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(742,`blockquote`)(743,`p`),Sk(744,`Não será exibida a indicação se:`),Kg()(),Qc(745,`ul`)(746,`li`),Sk(747,`O campo conter `),Qc(748,`code`),Sk(749,`p-required`),Kg(),Sk(750,`;`),Kg(),Qc(751,`li`),Sk(752,`Não possuir `),Qc(753,`code`),Sk(754,`p-help`),Kg(),Sk(755,` e/ou `),Qc(756,`code`),Sk(757,`p-label`),Kg(),Sk(758,`.`),Kg()()()(),Qc(759,`tr`,48)(760,`td`,17)(761,`div`,26)(762,`span`,27),Sk(763,` p-options`),vu(764,`br`),Kg()()(),Qc(765,`td`,21)(766,`code`,49),Sk(767,`any[]`),Kg()(),Qc(768,`td`,23),Sk(769,`-`),Kg(),Qc(770,`td`,24)(771,`p`),Sk(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),Qc(773,`code`),Sk(774,`PoSelectOption`),Kg(),Sk(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Qc(776,`code`),Sk(777,`PoSelectOptionGroup`),Kg(),Sk(778,`.`),Kg(),Qc(779,`p`),Sk(780,`Caso esta lista estiver vazia, o model será `),Qc(781,`code`),Sk(782,`undefined`),Kg(),Sk(783,`.`),Kg(),Qc(784,`blockquote`)(785,`p`),Sk(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Kg()(),Qc(787,`pre`)(788,`code`),Sk(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Kg()(),Qc(790,`blockquote`)(791,`p`),Sk(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),Qc(793,`code`),Sk(794,`options`),Kg(),Sk(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),Kg()(),Qc(796,`pre`)(797,`code`),Sk(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),Kg()(),Qc(799,`p`),Sk(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),Kg()()(),Qc(801,`tr`,50)(802,`td`,17)(803,`div`,26)(804,`span`,27),Sk(805,` p-placeholder`),vu(806,`br`),Kg()()(),Qc(807,`td`,21)(808,`code`,28),Sk(809,`string`),Kg()(),Qc(810,`td`,23),Sk(811,`-`),Kg(),Qc(812,`td`,24)(813,`em`)(814,`strong`),Sk(815,`(opcional)`),Kg()(),Qc(816,`p`),Sk(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),Kg()()(),Qc(818,`tr`,51)(819,`td`,17)(820,`div`,26)(821,`span`,27),Sk(822,` p-helper`),vu(823,`br`),Kg()()(),Qc(824,`td`,21)(825,`code`,52),Sk(826,`PoHelperOptions `),Kg(),Qc(827,`code`,28),Sk(828,` string`),Kg()(),Qc(829,`td`,23),Sk(830,`-`),Kg(),Qc(831,`td`,24)(832,`em`)(833,`strong`),Sk(834,`(opcional)`),Kg()(),Qc(835,`p`),Sk(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(837,`code`),Sk(838,`p-label`),Kg(),Sk(839,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(840,`code`),Sk(841,`p-label`),Kg(),Sk(842,`.`),Kg(),Qc(843,`blockquote`)(844,`p`),Sk(845,`Para mais informações acesse: `),Qc(846,`a`,53),Sk(847,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(848,`.`),Kg()(),Qc(849,`blockquote`)(850,`p`),Sk(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(852,`code`),Sk(853,`p-additional-help-tooltip`),Kg(),Sk(854,` e `),Qc(855,`code`),Sk(856,`p-additional-help`),Kg(),Sk(857,`) será ignorado.`),Kg()()()(),Qc(858,`tr`,54)(859,`td`,17)(860,`div`,26)(861,`span`,27),Sk(862,` p-readonly`),vu(863,`br`),Kg()()(),Qc(864,`td`,21)(865,`code`,30),Sk(866,`boolean`),Kg()(),Qc(867,`td`,23)(868,`p`)(869,`code`),Sk(870,`false`),Kg()()(),Qc(871,`td`,24)(872,`em`)(873,`strong`),Sk(874,`(opcional)`),Kg()(),Qc(875,`p`),Sk(876,`Indica que o campo será somente para leitura.`),Kg()()(),Qc(877,`tr`,55)(878,`td`,17)(879,`div`,26)(880,`span`,27),Sk(881,` p-required`),vu(882,`br`),Kg()()(),Qc(883,`td`,21)(884,`code`,30),Sk(885,`boolean`),Kg()(),Qc(886,`td`,23)(887,`p`)(888,`code`),Sk(889,`false`),Kg()()(),Qc(890,`td`,24)(891,`em`)(892,`strong`),Sk(893,`(opcional)`),Kg()(),Qc(894,`p`),Sk(895,`Define que o campo será obrigatório.`),Kg()()(),Qc(896,`tr`,56)(897,`td`,17)(898,`div`,26)(899,`span`,27),Sk(900,` p-show-required`),vu(901,`br`),Kg()()(),Qc(902,`td`,21)(903,`code`,30),Sk(904,`boolean`),Kg()(),Qc(905,`td`,23),Sk(906,`-`),Kg(),Qc(907,`td`,24)(908,`p`),Sk(909,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(910,`blockquote`)(911,`p`),Sk(912,`Não será exibida a indicação se:`),Kg()(),Qc(913,`ul`)(914,`li`),Sk(915,`Não possuir `),Qc(916,`code`),Sk(917,`p-help`),Kg(),Sk(918,` e/ou `),Qc(919,`code`),Sk(920,`p-label`),Kg(),Sk(921,`.`),Kg()()()(),Qc(922,`tr`,57)(923,`td`,17)(924,`div`,26)(925,`span`,27),Sk(926,` p-size`),vu(927,`br`),Kg()()(),Qc(928,`td`,21)(929,`code`,28),Sk(930,`string`),Kg()(),Qc(931,`td`,23)(932,`p`)(933,`code`),Sk(934,`medium`),Kg()()(),Qc(935,`td`,24)(936,`em`)(937,`strong`),Sk(938,`(opcional)`),Kg()(),Qc(939,`p`),Sk(940,`Define o tamanho do componente:`),Kg(),Qc(941,`ul`)(942,`li`)(943,`code`),Sk(944,`small`),Kg(),Sk(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(946,`li`)(947,`code`),Sk(948,`medium`),Kg(),Sk(949,`: altura do input como 44px.`),Kg()(),Qc(950,`blockquote`)(951,`p`),Sk(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(953,`code`),Sk(954,`medium`),Kg(),Sk(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(956,`a`,58),Sk(957,`po-theme`),Kg(),Sk(958,`.`),Kg()()()()(),Qc(959,`h3`,12),Sk(960,`Métodos`),Kg(),Qc(961,`table`,59)(962,`tr`,60)(963,`th`,61)(964,`div`,26)(965,`h4`)(966,`span`,27),Sk(967,` focus `),Kg()()()()(),Qc(968,`tr`,24)(969,`td`,24)(970,`p`),Sk(971,`Função que atribui foco ao componente.`),Kg(),Qc(972,`p`),Sk(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(974,`pre`)(975,`code`),Sk(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),Kg()()()()(),vu(977,`br`),Qc(978,`table`,62)(979,`tr`,60)(980,`th`,61)(981,`div`,26)(982,`h4`)(983,`span`,27),Sk(984,` showAdditionalHelp `),Kg()()()()(),Qc(985,`tr`,24)(986,`td`,24)(987,`p`),Sk(988,`Método que exibe `),Qc(989,`code`),Sk(990,`p-helper`),Kg(),Sk(991,` ou executa a ação definida em `),Qc(992,`code`),Sk(993,`p-helper{eventOnClick}`),Kg(),Sk(994,` ou em `),Qc(995,`code`),Sk(996,`p-additionalHelp`),Kg(),Sk(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(998,`code`),Sk(999,`p-keydown`),Kg(),Sk(1e3,`.`),Kg(),Qc(1001,`blockquote`)(1002,`p`),Sk(1003,`Exibe ou oculta o conteúdo do componente `),Qc(1004,`code`),Sk(1005,`po-helper`),Kg(),Sk(1006,` quando o componente estiver com foco.`),Kg()(),Qc(1007,`pre`)(1008,`code`),Sk(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),Kg()(),Qc(1010,`pre`)(1011,`code`,63),Sk(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1013,`br`),Qc(1014,`h3`),Sk(1015,`Interfaces`),Kg(),Qc(1016,`h4`,64)(1017,`code`,5),Sk(1018,`PoSelectOptionGroup`),Kg()(),Qc(1019,`div`,2)(1020,`p`),Sk(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),Qc(1022,`code`),Sk(1023,`PoSelectOption`),Kg(),Sk(1024,`.`),Kg()(),Qc(1025,`h4`,12),Sk(1026,`Propriedades`),Kg(),Qc(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),Sk(1030,`Nome`),Kg(),Qc(1031,`th`,15),Sk(1032,`Tipo`),Kg(),Qc(1033,`th`,15),Sk(1034,`Descrição`),Kg()(),Qc(1035,`tr`,65)(1036,`td`,17)(1037,`div`,26)(1038,`span`,27),Sk(1039,` label`),vu(1040,`br`),Kg()()(),Qc(1041,`td`,21)(1042,`code`,28),Sk(1043,`string`),Kg()(),Qc(1044,`td`,24)(1045,`p`),Sk(1046,`Label para denominar o nome do grupo.`),Kg()()(),Qc(1047,`tr`,66)(1048,`td`,17)(1049,`div`,26)(1050,`span`,27),Sk(1051,` options`),vu(1052,`br`),Kg()()(),Qc(1053,`td`,21)(1054,`code`,67),Sk(1055,`Array<PoSelectOption>`),Kg()(),Qc(1056,`td`,24)(1057,`p`),Sk(1058,`Lista com as opções disponíveis em cada grupo.`),Kg()()()(),Qc(1059,`h4`,68)(1060,`code`,5),Sk(1061,`PoSelectOption`),Kg()(),Qc(1062,`div`,2)(1063,`p`),Sk(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),Kg()(),Qc(1065,`h4`,12),Sk(1066,`Propriedades`),Kg(),Qc(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),Sk(1070,`Nome`),Kg(),Qc(1071,`th`,15),Sk(1072,`Tipo`),Kg(),Qc(1073,`th`,15),Sk(1074,`Descrição`),Kg()(),Qc(1075,`tr`,69)(1076,`td`,17)(1077,`div`,26)(1078,`span`,27),Sk(1079,` label`),vu(1080,`br`),Kg()()(),Qc(1081,`td`,21)(1082,`code`,28),Sk(1083,`string`),Kg()(),Qc(1084,`td`,24)(1085,`p`),Sk(1086,`Label a ser utilizada nos itens da lista.`),Kg()()(),Qc(1087,`tr`,70)(1088,`td`,17)(1089,`div`,26)(1090,`span`,27),Sk(1091,` value`),vu(1092,`br`),Kg()()(),Qc(1093,`td`,21)(1094,`code`,28),Sk(1095,`string `),Kg(),Qc(1096,`code`,71),Sk(1097,` number`),Kg()(),Qc(1098,`td`,24)(1099,`p`),Sk(1100,`Valor do objeto que será atribuído ao model.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Xe(a,W){if(a&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-select-basic-view`)(2,`sample-po-select-labs-view`)(3,`sample-po-select-customer-registration-view`)(4,`sample-po-select-companies-view`),Kg()}if(a&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Ze=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Xe,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-select-doc`),Kg()()()),p&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ye,Pe,Me,Le,De],encapsulation:2,changeDetection:1})}return a})()}];var Ve=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Ze),GV]})}return a})();var Nt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ve]})}return a})();export{Nt as DocPoSelectModule};
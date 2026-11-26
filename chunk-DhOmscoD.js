import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{$t as ia,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Lt as c4,M as I4,Mi as WL,Mt as Zte,Na as ok,Ni as Wb,Oi as Vk,Pr as I,Qn as AZ,R as Koe,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ar as B_,ca as ge,cr as Bk,ea as de,er as Ab,fn as oi,gi as R,jr as H_,li as QL,no as we$1,nt as R4,or as Be$1,qr as Mk,ri as PI,ro as wg,so as xZ,ti as Ok,tn as j4,tr as An,ur as Cb,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var Te=()=>({label:`Option 1`,value:`1`});var Le=()=>({label:`Option 2`,value:`2`});var De=(l,G)=>[l,G];var Ee=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&_u(0,`po-select`,0),p&2&&Ab(`p-options`,Bk(3,De,Vk(1,Te),Vk(2,Le)))},dependencies:[Koe],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-select-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-select-basic/sample-po-select-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-basic/sample-po-select-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Select Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-select-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-select-basic/sample-po-select-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-select-basic/sample-po-select-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{cdr=p(Be$1);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:s}=p;if(i){let o=r.findIndex($=>$.label===i&&`options`in $);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:s}]}]):(r[o].options.push({label:m,value:s}),r)}return[...r,{label:m,value:s}]}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let m=KO();Jc(0,`po-select`,2),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.select,o)||(i.select=o),H_(o)}),_t(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0),_u(8,`po-divider`,6),Jc(9,`div`,3)(10,`po-switch`,7),G0(),_t(`p-change`,function(o){return i.restoreSwitch(o)}),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),H_(o)}),Kg(),Jc(11,`po-select`,8),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),H_(o)}),_t(`p-change`,function(){return i.optionsGroupSelection()}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.optionsGroup,o)||(i.optionsGroup=o),H_(o)}),Kg()(),_u(13,`po-divider`,10),Jc(14,`div`,3)(15,`po-input`,11),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.option.label,o)||(i.option.label=o),H_(o)}),Kg(),Jc(16,`po-input`,12),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.option.value,o)||(i.option.value=o),H_(o)}),Kg()(),Jc(17,`div`,3)(18,`po-button`,13),_t(`p-click`,function(){return i.addOption()}),Kg()()(),_u(19,`po-divider`),Jc(20,`form`,null,1)(22,`po-input`,14),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.label,o)||(i.label=o),H_(o)}),Kg(),Jc(23,`po-input`,15),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.help,o)||(i.help=o),H_(o)}),Kg(),Jc(24,`po-input`,16),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.helperText,o)||(i.helperText=o),H_(o)}),Kg(),Jc(25,`po-input`,17),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.placeholder,o)||(i.placeholder=o),H_(o)}),Kg(),Jc(26,`po-input`,18),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),H_(o)}),Kg(),Jc(27,`po-checkbox-group`,19),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.properties,o)||(i.properties=o),H_(o)}),Kg(),Jc(28,`po-radio-group`,20),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.size,o)||(i.size=o),H_(o)}),Kg(),Jc(29,`div`,3)(30,`div`,21)(31,`po-button`,22),_t(`p-click`,function(){return i.restore()}),Kg()()(),_u(32,`form`),Kg()}if(p&2){let m=ok(7);Kb(`ngModel`,i.select),Ab(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),q0(),wg(3),Ab(`p-value`,i.select),wg(),Ab(`p-value`,i.event),wg(6),Kb(`ngModel`,i.selectOptionGroupSwitch),q0(),wg(),Kb(`ngModel`,i.selectedOptionsGroup),Ab(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),q0(),wg(),Kb(`ngModel`,i.optionsGroup),Ab(`p-disabled`,!i.selectOptionGroupSwitch),q0(),wg(3),Kb(`ngModel`,i.option.label),q0(),wg(),Kb(`ngModel`,i.option.value),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(4),Kb(`ngModel`,i.label),q0(),wg(),Kb(`ngModel`,i.help),q0(),wg(),Kb(`ngModel`,i.helperText),q0(),wg(),Kb(`ngModel`,i.placeholder),q0(),wg(),Kb(`ngModel`,i.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-select-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-select-labs/sample-po-select-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-labs/sample-po-select-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Select Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-select-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-select-labs/sample-po-select-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-select
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-select-labs/sample-po-select-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,fe],encapsulation:2,changeDetection:1})}return l})();var Z=(()=>{class l{http=p(PI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||l)};static ɵprov=R({token:l,factory:l.ɵfac,providedIn:`root`})}return l})();function Fe(l,G){if(l&1&&(Jc(0,`div`,17),_u(1,`po-avatar`,18),Jc(2,`div`,19)(3,`div`,20),Mk(4),Kg(),Jc(5,`div`,21),Mk(6),Kg()()()),l&2){let r=G.$implicit;wg(),Ab(`p-src`,Ok(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),wg(3),Wb(r.label),wg(2),Wb(r.value)}}var Ce=(()=>{class l{sampleService=p(Z);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[we$1([Z])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let m=KO();Jc(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.documentType,o)||(i.documentType=o),H_(o)}),_t(`p-change`,function(o){return i.changeType(o)}),Kg(),Jc(4,`po-input`,4),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.document,o)||(i.document=o),H_(o)}),Kg()(),Jc(5,`div`,2)(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.name,o)||(i.name=o),H_(o)}),Kg(),Jc(7,`po-input`,6),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.address,o)||(i.address=o),H_(o)}),Kg()(),Jc(8,`div`,2)(9,`po-select`,7),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.state,o)||(i.state=o),H_(o)}),_t(`p-change`,function(){return i.onChangeState()}),Cb(10,Fe,7,4,`ng-template`,8),Kg(),Jc(11,`po-select`,9),G0(),Zb(`ngModelChange`,function(o){return U_(m),Rk(i.city,o)||(i.city=o),H_(o)}),Kg()(),Jc(12,`div`,2)(13,`po-button`,10),_t(`p-click`,function(){U_(m);let o=ok(15);return H_(o.open())}),Kg()()(),Jc(14,`po-modal`,11,1)(16,`div`,2),_u(17,`po-info`,12)(18,`po-info`,13),Kg(),_u(19,`po-divider`),Jc(20,`div`,2),_u(21,`po-info`,13)(22,`po-info`,14),Kg(),_u(23,`po-divider`),Jc(24,`div`,2),_u(25,`po-info`,15)(26,`po-info`,16),Kg()()}if(p&2){let m=ok(1);wg(3),Kb(`ngModel`,i.documentType),Ab(`p-options`,i.options),q0(),wg(),Kb(`ngModel`,i.document),Ab(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),q0(),wg(2),Kb(`ngModel`,i.name),Ab(`p-label`,i.nameLabel),q0(),wg(),Kb(`ngModel`,i.address),q0(),wg(2),Kb(`ngModel`,i.state),Ab(`p-options`,i.stateOptions),q0(),wg(2),Kb(`ngModel`,i.city),Ab(`p-options`,i.cityOptions),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(4),Ab(`p-value`,i.documentType),wg(),Ab(`p-label`,i.documentLabel)(`p-value`,i.document),wg(3),Ab(`p-label`,i.nameLabel)(`p-value`,i.name),wg(),Ab(`p-value`,i.address),wg(3),Ab(`p-value`,i.getStateByValue(i.state)),wg(),Ab(`p-value`,i.getCityByValue(i.city))}},dependencies:[xZ,RZ,AZ,QL,WL,c4,oi,Nf,j4,Zte,Koe,Joe,ia],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:54,vars:0,consts:[[`id`,`sample-po-select-customer-registration`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Select - Customer registration`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-select-customer-registration`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #f="ngForm">
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
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` option.value `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` option.label `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
            <div class="sample-select-option-template-value">`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` option.value `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</div>
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
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(41,`label`,7),Mk(42,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),Kg(),Jc(43,`div`,13)(44,`pre`,12),Mk(45,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()(),Jc(46,`po-tab`,14)(47,`div`)(48,`label`,7),Mk(49,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),Kg(),Jc(50,`div`,15)(51,`pre`,16),Mk(52,`.sample-select-option-template-container {
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
`),Kg()()()()()(),_u(53,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var we=(()=>{class l{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(Jc(0,`po-select`,0),G0(),Zb(`ngModelChange`,function(s){return Rk(i.select,s)||(i.select=s),s}),Kg(),Jc(1,`po-info`,1),Zb(`p-valueChange`,function(s){return Rk(i.select,s)||(i.select=s),s}),Kg(),Jc(2,`div`,2)(3,`po-select`,3),G0(),_t(`p-change`,function(s){return i.onChange(s)}),Zb(`ngModelChange`,function(s){return Rk(i.fieldLabel,s)||(i.fieldLabel=s),s}),Kg(),Jc(4,`po-select`,4),G0(),_t(`p-change`,function(s){return i.onChange(s)}),Zb(`ngModelChange`,function(s){return Rk(i.fieldValue,s)||(i.fieldValue=s),s}),Kg()()),p&2&&(Kb(`ngModel`,i.select),Ab(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),q0(),wg(),Kb(`p-value`,i.select),wg(2),Ab(`p-options`,i.labels),Kb(`ngModel`,i.fieldLabel),q0(),wg(),Ab(`p-options`,i.values),Kb(`ngModel`,i.fieldValue),q0())},dependencies:[RZ,QL,Koe,Joe],encapsulation:2,changeDetection:1})}return l})();var Pe=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-select-companies`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-select-companies/sample-po-select-companies.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-select-companies/sample-po-select-companies.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Select Companies`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-select-companies`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-select-companies/sample-po-select-companies.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-select
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-select-companies/sample-po-select-companies.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-select-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`interface-po-select-option-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-select-option-group-label`,1,`docs-api-properties-row`],[`id`,`interface-po-select-option-group-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`id`,`interface-po-select-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-select-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-select-option-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoSelectComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),Kg(),Jc(24,`blockquote`)(25,`p`),Mk(26,`Ao passar um valor para o `),Jc(27,`em`),Mk(28,`model`),Kg(),Mk(29,` que não está na lista de opções, o mesmo será definido como `),Jc(30,`code`),Mk(31,`undefined`),Kg(),Mk(32,`.`),Kg()(),Jc(33,`p`),Mk(34,`Também existe a possibilidade de utilizar um `),Jc(35,`em`),Mk(36,`template`),Kg(),Mk(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Jc(38,`strong`)(39,`a`,6),Mk(40,`p-combo-option-template`),Kg()(),Mk(41,`.`),Kg(),Jc(42,`blockquote`)(43,`p`),Mk(44,`Obs: o template `),Jc(45,`strong`)(46,`a`,7),Mk(47,`p-select-option-template`),Kg()(),Mk(48,` será depreciado na versão 14.x.x.`),Kg()(),Jc(49,`h4`),Mk(50,`Tokens customizáveis`),Kg(),Jc(51,`p`),Mk(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(53,`blockquote`)(54,`p`),Mk(55,`Para maiores informações, acesse o guia `),Jc(56,`a`,8),Mk(57,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(58,`.`),Kg()(),Jc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),Mk(63,`Propriedade`),Kg(),Jc(64,`th`),Mk(65,`Descrição`),Kg(),Jc(66,`th`),Mk(67,`Valor Padrão`),Kg()()(),Jc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),Mk(72,`Default Values`),Kg()(),_u(73,`td`)(74,`td`),Kg(),Jc(75,`tr`)(76,`td`)(77,`code`),Mk(78,`--font-family`),Kg()(),Jc(79,`td`),Mk(80,`Família tipográfica usada`),Kg(),Jc(81,`td`)(82,`code`),Mk(83,`var(--font-family-theme)`),Kg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Mk(87,`--font-size`),Kg()(),Jc(88,`td`),Mk(89,`Tamanho da fonte`),Kg(),Jc(90,`td`)(91,`code`),Mk(92,`var(--font-size-default)`),Kg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Mk(96,`--text-color-empty`),Kg()(),Jc(97,`td`),Mk(98,`Cor do placeholder`),Kg(),Jc(99,`td`)(100,`code`),Mk(101,`var(--color-neutral-light-30)`),Kg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Mk(105,`--color`),Kg()(),Jc(106,`td`),Mk(107,`Cor da borda`),Kg(),Jc(108,`td`)(109,`code`),Mk(110,`var(--color-neutral-dark-70)`),Kg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Mk(114,`--background`),Kg()(),Jc(115,`td`),Mk(116,`Cor de background`),Kg(),Jc(117,`td`)(118,`code`),Mk(119,`var(--color-neutral-light-05)`),Kg()()(),Jc(120,`tr`)(121,`td`)(122,`code`),Mk(123,`--text-color`),Kg()(),Jc(124,`td`),Mk(125,`Cor do texto`),Kg(),Jc(126,`td`)(127,`code`),Mk(128,`var(--color-neutral-dark-90)`),Kg()()(),Jc(129,`tr`)(130,`td`)(131,`code`),Mk(132,`--padding-horizontal`),Kg()(),Jc(133,`td`),Mk(134,`Preenchimento horizontal`),Kg(),Jc(135,`td`)(136,`code`),Mk(137,`0.5em`),Kg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Mk(141,`--padding-vertical`),Kg()(),Jc(142,`td`),Mk(143,`Preenchimento vertical`),Kg(),Jc(144,`td`)(145,`code`),Mk(146,`0.7em`),Kg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Mk(150,`--field-container-title-justify`),Kg()(),Jc(151,`td`),Mk(152,`Alinhamento horizontal do título (`),Jc(153,`code`),Mk(154,`justify-content`),Kg(),Mk(155,`)`),Kg(),Jc(156,`td`)(157,`code`),Mk(158,`space-between`),Kg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Mk(162,`--field-container-title-flex`),Kg()(),Jc(163,`td`),Mk(164,`Flex do título (`),Jc(165,`code`),Mk(166,`flex`),Kg(),Mk(167,`)`),Kg(),Jc(168,`td`)(169,`code`),Mk(170,`1 auto`),Kg()()(),Jc(171,`tr`)(172,`td`)(173,`strong`),Mk(174,`Hover`),Kg()(),_u(175,`td`)(176,`td`),Kg(),Jc(177,`tr`)(178,`td`)(179,`code`),Mk(180,`--color-hover`),Kg()(),Jc(181,`td`),Mk(182,`Cor principal no estado hover`),Kg(),Jc(183,`td`)(184,`code`),Mk(185,`var(--color-brand-01-dark)`),Kg()()(),Jc(186,`tr`)(187,`td`)(188,`code`),Mk(189,`--background-hover`),Kg()(),Jc(190,`td`),Mk(191,`Cor de background no estado hover`),Kg(),Jc(192,`td`)(193,`code`),Mk(194,`var(--color-brand-01-lighter)`),Kg()()(),Jc(195,`tr`)(196,`td`)(197,`strong`),Mk(198,`Focused`),Kg()(),_u(199,`td`)(200,`td`),Kg(),Jc(201,`tr`)(202,`td`)(203,`code`),Mk(204,`--outline-color-focused`),Kg()(),Jc(205,`td`),Mk(206,`Cor do outline do estado de focus`),Kg(),Jc(207,`td`)(208,`code`),Mk(209,`var(--color-action-focus)`),Kg()()(),Jc(210,`tr`)(211,`td`)(212,`code`),Mk(213,`--color-focused`),Kg()(),Jc(214,`td`),Mk(215,`Cor da borda no estado de focus`),Kg(),Jc(216,`td`)(217,`code`),Mk(218,`var(--color-action-default)`),Kg()()(),Jc(219,`tr`)(220,`td`)(221,`strong`),Mk(222,`Disabled`),Kg()(),_u(223,`td`)(224,`td`),Kg(),Jc(225,`tr`)(226,`td`)(227,`code`),Mk(228,`--color-disabled`),Kg()(),Jc(229,`td`),Mk(230,`Cor principal no estado disabled`),Kg(),Jc(231,`td`)(232,`code`),Mk(233,`var(--color-neutral-light-30)`),Kg()()(),Jc(234,`tr`)(235,`td`)(236,`code`),Mk(237,`--background-color-disabled`),Kg(),Mk(238,`\xA0`),Kg(),Jc(239,`td`),Mk(240,`Cor de background no estado disabled`),Kg(),Jc(241,`td`)(242,`code`),Mk(243,`var(--color-neutral-light-20)`),Kg()()()()()(),Jc(244,`div`,9)(245,`h4`,10),Mk(246,`Seletor`),Kg(),Jc(247,`pre`,11),Mk(248,`<po-select
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
`),Kg()(),Jc(249,`h4`,12),Mk(250,`Propriedades`),Kg(),Jc(251,`table`,13)(252,`tr`,14)(253,`th`,15),Mk(254,`Nome`),Kg(),Jc(255,`th`,15),Mk(256,`Tipo`),Kg(),Jc(257,`th`,15),Mk(258,`Padrão`),Kg(),Jc(259,`th`,15),Mk(260,`Descrição`),Kg()(),Jc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),Mk(265,` (p-additional-help)`),_u(266,`br`),Kg()(),Jc(267,`div`,20),Mk(268,`Deprecated`),Kg()(),Jc(269,`td`,21)(270,`code`,22),Mk(271,`EventEmitter`),Kg()(),Jc(272,`td`,23),Mk(273,`-`),Kg(),Jc(274,`td`,24)(275,`em`)(276,`strong`),Mk(277,`(opcional)`),Kg()(),Jc(278,`p`),Mk(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(280,`blockquote`)(281,`p`),Mk(282,`Essa propriedade está `),Jc(283,`strong`),Mk(284,`depreciada`),Kg(),Mk(285,` e será removida na versão `),Jc(286,`code`),Mk(287,`23.x.x`),Kg(),Mk(288,`. Recomendamos utilizar a propriedade `),Jc(289,`code`),Mk(290,`p-helper`),Kg(),Mk(291,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(292,`tr`,25)(293,`td`,17)(294,`div`,26)(295,`span`,27),Mk(296,` p-additional-help-tooltip`),_u(297,`br`),Kg()(),Jc(298,`div`,20),Mk(299,`Deprecated`),Kg()(),Jc(300,`td`,21)(301,`code`,28),Mk(302,`string`),Kg()(),Jc(303,`td`,23),Mk(304,`-`),Kg(),Jc(305,`td`,24)(306,`em`)(307,`strong`),Mk(308,`(opcional)`),Kg()(),Jc(309,`p`),Mk(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(311,`code`),Mk(312,`po-helper`),Kg(),Mk(313,`.
`),Jc(314,`strong`),Mk(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(316,`blockquote`)(317,`p`),Mk(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(319,`blockquote`)(320,`p`),Mk(321,`Essa propriedade está `),Jc(322,`strong`),Mk(323,`depreciada`),Kg(),Mk(324,` e será removida na versão `),Jc(325,`code`),Mk(326,`23.x.x`),Kg(),Mk(327,`. Recomendamos utilizar a propriedade `),Jc(328,`code`),Mk(329,`p-helper`),Kg(),Mk(330,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(331,`tr`,29)(332,`td`,17)(333,`div`,26)(334,`span`,27),Mk(335,` p-append-in-body`),_u(336,`br`),Kg()()(),Jc(337,`td`,21)(338,`code`,30),Mk(339,`boolean`),Kg()(),Jc(340,`td`,23)(341,`p`)(342,`code`),Mk(343,`false`),Kg()()(),Jc(344,`td`,24)(345,`em`)(346,`strong`),Mk(347,`(opcional)`),Kg()(),Jc(348,`p`),Mk(349,`Define que o popover (`),Jc(350,`code`),Mk(351,`p-helper`),Kg(),Mk(352,` e/ou `),Jc(353,`code`),Mk(354,`p-error-limit`),Kg(),Mk(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(356,`blockquote`)(357,`p`),Mk(358,`Quando utilizado com `),Jc(359,`code`),Mk(360,`p-helper`),Kg(),Mk(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(362,`tr`,31)(363,`td`,17)(364,`div`,18)(365,`span`,19),Mk(366,` (p-blur)`),_u(367,`br`),Kg()()(),Jc(368,`td`,21)(369,`code`,22),Mk(370,`EventEmitter`),Kg()(),Jc(371,`td`,23),Mk(372,`-`),Kg(),Jc(373,`td`,24)(374,`em`)(375,`strong`),Mk(376,`(opcional)`),Kg()(),Jc(377,`p`),Mk(378,`Evento disparado ao sair do campo.`),Kg()()(),Jc(379,`tr`,32)(380,`td`,17)(381,`div`,18)(382,`span`,19),Mk(383,` (p-change)`),_u(384,`br`),Kg()()(),Jc(385,`td`,21)(386,`code`,22),Mk(387,`EventEmitter`),Kg()(),Jc(388,`td`,23),Mk(389,`-`),Kg(),Jc(390,`td`,24)(391,`em`)(392,`strong`),Mk(393,`(opcional)`),Kg()(),Jc(394,`p`),Mk(395,`Evento disparado ao alterar valor do campo.`),Kg()()(),Jc(396,`tr`,33)(397,`td`,17)(398,`div`,18)(399,`span`,19),Mk(400,` (p-change-model)`),_u(401,`br`),Kg()()(),Jc(402,`td`,21)(403,`code`,22),Mk(404,`EventEmitter`),Kg()(),Jc(405,`td`,23),Mk(406,`-`),Kg(),Jc(407,`td`,24)(408,`em`)(409,`strong`),Mk(410,`(opcional)`),Kg()(),Jc(411,`p`),Mk(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(413,`code`),Mk(414,`setValue`),Kg(),Mk(415,`, `),Jc(416,`code`),Mk(417,`patchValue`),Kg(),Mk(418,`, carregamento assíncrono).`),Kg(),Jc(419,`p`),Mk(420,`Diferentemente do `),Jc(421,`code`),Mk(422,`p-change`),Kg(),Mk(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(424,`code`),Mk(425,`p-change-model`),Kg(),Mk(426,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(427,`p`),Mk(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(429,`tr`,34)(430,`td`,17)(431,`div`,26)(432,`span`,27),Mk(433,` p-compact-label`),_u(434,`br`),Kg()()(),Jc(435,`td`,21)(436,`code`,30),Mk(437,`boolean`),Kg()(),Jc(438,`td`,23)(439,`p`)(440,`code`),Mk(441,`false`),Kg()()(),Jc(442,`td`,24)(443,`em`)(444,`strong`),Mk(445,`(opcional)`),Kg()(),Jc(446,`p`),Mk(447,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(448,`p`),Mk(449,`Quando habilitado (`),Jc(450,`code`),Mk(451,`true`),Kg(),Mk(452,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(453,`ul`)(454,`li`)(455,`code`),Mk(456,`po-label`),Kg()(),Jc(457,`li`)(458,`code`),Mk(459,`p-requirement (showRequired)`),Kg()(),Jc(460,`li`)(461,`code`),Mk(462,`po-helper`),Kg()()(),Jc(463,`p`),Mk(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(465,`p`),Mk(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(467,`ul`)(468,`li`)(469,`code`),Mk(470,`--field-container-title-justify`),Kg()(),Jc(471,`li`)(472,`code`),Mk(473,`--field-container-title-flex`),Kg()()(),Jc(474,`p`),Mk(475,`Exemplo:`),Kg(),Jc(476,`pre`)(477,`code`),Mk(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(479,`p`),Mk(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(481,`tr`,35)(482,`td`,17)(483,`div`,26)(484,`span`,27),Mk(485,` p-disabled`),_u(486,`br`),Kg()()(),Jc(487,`td`,21)(488,`code`,30),Mk(489,`boolean`),Kg()(),Jc(490,`td`,23)(491,`p`)(492,`code`),Mk(493,`false`),Kg()()(),Jc(494,`td`,24)(495,`em`)(496,`strong`),Mk(497,`(opcional)`),Kg()(),Jc(498,`p`),Mk(499,`Indica se o campo será desabilitado.`),Kg()()(),Jc(500,`tr`,36)(501,`td`,17)(502,`div`,26)(503,`span`,27),Mk(504,` p-error-limit`),_u(505,`br`),Kg()()(),Jc(506,`td`,21)(507,`code`,30),Mk(508,`boolean`),Kg()(),Jc(509,`td`,23)(510,`p`)(511,`code`),Mk(512,`false`),Kg()()(),Jc(513,`td`,24)(514,`em`)(515,`strong`),Mk(516,`(opcional)`),Kg()(),Jc(517,`p`),Mk(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(519,`blockquote`)(520,`p`),Mk(521,`Caso essa propriedade seja definida como `),Jc(522,`code`),Mk(523,`true`),Kg(),Mk(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(525,`tr`,37)(526,`td`,17)(527,`div`,26)(528,`span`,27),Mk(529,` p-field-error-message`),_u(530,`br`),Kg()()(),Jc(531,`td`,21)(532,`code`,28),Mk(533,`string`),Kg()(),Jc(534,`td`,23),Mk(535,`-`),Kg(),Jc(536,`td`,24)(537,`em`)(538,`strong`),Mk(539,`(opcional)`),Kg()(),Jc(540,`p`),Mk(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(542,`blockquote`)(543,`p`),Mk(544,`Necessário que a propriedade `),Jc(545,`code`),Mk(546,`p-required`),Kg(),Mk(547,` esteja habilitada.`),Kg()()()(),Jc(548,`tr`,38)(549,`td`,17)(550,`div`,26)(551,`span`,27),Mk(552,` p-field-label`),_u(553,`br`),Kg()()(),Jc(554,`td`,21)(555,`code`,28),Mk(556,`string`),Kg()(),Jc(557,`td`,23)(558,`p`)(559,`code`),Mk(560,`label`),Kg()()(),Jc(561,`td`,24)(562,`em`)(563,`strong`),Mk(564,`(opcional)`),Kg()(),Jc(565,`p`),Mk(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(567,`code`),Mk(568,`p-options`),Kg(),Mk(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg()()(),Jc(570,`tr`,39)(571,`td`,17)(572,`div`,26)(573,`span`,27),Mk(574,` p-field-value`),_u(575,`br`),Kg()()(),Jc(576,`td`,21)(577,`code`,28),Mk(578,`string`),Kg()(),Jc(579,`td`,23)(580,`p`)(581,`code`),Mk(582,`value`),Kg()()(),Jc(583,`td`,24)(584,`em`)(585,`strong`),Mk(586,`(opcional)`),Kg()(),Jc(587,`p`),Mk(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(589,`code`),Mk(590,`p-options`),Kg(),Mk(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg()()(),Jc(592,`tr`,40)(593,`td`,17)(594,`div`,26)(595,`span`,27),Mk(596,` p-help`),_u(597,`br`),Kg()()(),Jc(598,`td`,21)(599,`code`,28),Mk(600,`string`),Kg()(),Jc(601,`td`,23),Mk(602,`-`),Kg(),Jc(603,`td`,24)(604,`p`),Mk(605,`Texto de apoio para o campo.`),Kg()()(),Jc(606,`tr`,41)(607,`td`,17)(608,`div`,18)(609,`span`,19),Mk(610,` (p-keydown)`),_u(611,`br`),Kg()()(),Jc(612,`td`,21)(613,`code`,22),Mk(614,`EventEmitter`),Kg()(),Jc(615,`td`,23),Mk(616,`-`),Kg(),Jc(617,`td`,24)(618,`em`)(619,`strong`),Mk(620,`(opcional)`),Kg()(),Jc(621,`p`),Mk(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(623,`code`),Mk(624,`KeyboardEvent`),Kg(),Mk(625,` com informações sobre a tecla.`),Kg()()(),Jc(626,`tr`,42)(627,`td`,17)(628,`div`,26)(629,`span`,27),Mk(630,` p-label`),_u(631,`br`),Kg()()(),Jc(632,`td`,21)(633,`code`,28),Mk(634,`string`),Kg()(),Jc(635,`td`,23),Mk(636,`-`),Kg(),Jc(637,`td`,24)(638,`p`),Mk(639,`Rótulo exibido pelo componente.`),Kg()()(),Jc(640,`tr`,43)(641,`td`,17)(642,`div`,26)(643,`span`,27),Mk(644,` p-label-text-wrap`),_u(645,`br`),Kg()()(),Jc(646,`td`,21)(647,`code`,30),Mk(648,`boolean`),Kg()(),Jc(649,`td`,23)(650,`p`)(651,`code`),Mk(652,`false`),Kg()()(),Jc(653,`td`,24)(654,`em`)(655,`strong`),Mk(656,`(opcional)`),Kg()(),Jc(657,`p`),Mk(658,`Habilita a quebra automática do texto da propriedade `),Jc(659,`code`),Mk(660,`p-label`),Kg(),Mk(661,`. Quando `),Jc(662,`code`),Mk(663,`p-label-text-wrap`),Kg(),Mk(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(665,`tr`,44)(666,`td`,17)(667,`div`,26)(668,`span`,27),Mk(669,` p-loading`),_u(670,`br`),Kg()()(),Jc(671,`td`,21)(672,`code`,30),Mk(673,`boolean`),Kg()(),Jc(674,`td`,23)(675,`p`)(676,`code`),Mk(677,`false`),Kg()()(),Jc(678,`td`,24)(679,`em`)(680,`strong`),Mk(681,`(opcional)`),Kg()(),Jc(682,`p`),Mk(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(684,`tr`,45)(685,`td`,17)(686,`div`,26)(687,`span`,27),Mk(688,` name`),_u(689,`br`),Kg()()(),Jc(690,`td`,21)(691,`code`,28),Mk(692,`string`),Kg()(),Jc(693,`td`,23),Mk(694,`-`),Kg(),Jc(695,`td`,24)(696,`p`),Mk(697,`Nome do componente.`),Kg()()(),Jc(698,`tr`,46)(699,`td`,17)(700,`div`,18)(701,`span`,19),Mk(702,` (ngModelChange)`),_u(703,`br`),Kg()()(),Jc(704,`td`,21)(705,`code`,22),Mk(706,`EventEmitter`),Kg()(),Jc(707,`td`,23),Mk(708,`-`),Kg(),Jc(709,`td`,24)(710,`em`)(711,`strong`),Mk(712,`(opcional)`),Kg()(),Jc(713,`p`),Mk(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Jc(715,`p`),Mk(716,`Na versão 12.2.0 do Angular a verificação `),Jc(717,`code`),Mk(718,`strictTemplates`),Kg(),Mk(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Jc(720,`pre`)(721,`code`),Mk(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),Kg()()()(),Jc(723,`tr`,47)(724,`td`,17)(725,`div`,26)(726,`span`,27),Mk(727,` p-optional`),_u(728,`br`),Kg()()(),Jc(729,`td`,21)(730,`code`,30),Mk(731,`boolean`),Kg()(),Jc(732,`td`,23)(733,`p`)(734,`code`),Mk(735,`false`),Kg()()(),Jc(736,`td`,24)(737,`em`)(738,`strong`),Mk(739,`(opcional)`),Kg()(),Jc(740,`p`),Mk(741,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(742,`blockquote`)(743,`p`),Mk(744,`Não será exibida a indicação se:`),Kg()(),Jc(745,`ul`)(746,`li`),Mk(747,`O campo conter `),Jc(748,`code`),Mk(749,`p-required`),Kg(),Mk(750,`;`),Kg(),Jc(751,`li`),Mk(752,`Não possuir `),Jc(753,`code`),Mk(754,`p-help`),Kg(),Mk(755,` e/ou `),Jc(756,`code`),Mk(757,`p-label`),Kg(),Mk(758,`.`),Kg()()()(),Jc(759,`tr`,48)(760,`td`,17)(761,`div`,26)(762,`span`,27),Mk(763,` p-options`),_u(764,`br`),Kg()()(),Jc(765,`td`,21)(766,`code`,49),Mk(767,`any[]`),Kg()(),Jc(768,`td`,23),Mk(769,`-`),Kg(),Jc(770,`td`,24)(771,`p`),Mk(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),Jc(773,`code`),Mk(774,`PoSelectOption`),Kg(),Mk(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Jc(776,`code`),Mk(777,`PoSelectOptionGroup`),Kg(),Mk(778,`.`),Kg(),Jc(779,`p`),Mk(780,`Caso esta lista estiver vazia, o model será `),Jc(781,`code`),Mk(782,`undefined`),Kg(),Mk(783,`.`),Kg(),Jc(784,`blockquote`)(785,`p`),Mk(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Kg()(),Jc(787,`pre`)(788,`code`),Mk(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Kg()(),Jc(790,`blockquote`)(791,`p`),Mk(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),Jc(793,`code`),Mk(794,`options`),Kg(),Mk(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),Kg()(),Jc(796,`pre`)(797,`code`),Mk(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),Kg()(),Jc(799,`p`),Mk(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),Kg()()(),Jc(801,`tr`,50)(802,`td`,17)(803,`div`,26)(804,`span`,27),Mk(805,` p-placeholder`),_u(806,`br`),Kg()()(),Jc(807,`td`,21)(808,`code`,28),Mk(809,`string`),Kg()(),Jc(810,`td`,23),Mk(811,`-`),Kg(),Jc(812,`td`,24)(813,`em`)(814,`strong`),Mk(815,`(opcional)`),Kg()(),Jc(816,`p`),Mk(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),Kg()()(),Jc(818,`tr`,51)(819,`td`,17)(820,`div`,26)(821,`span`,27),Mk(822,` p-helper`),_u(823,`br`),Kg()()(),Jc(824,`td`,21)(825,`code`,52),Mk(826,`PoHelperOptions `),Kg(),Jc(827,`code`,28),Mk(828,` string`),Kg()(),Jc(829,`td`,23),Mk(830,`-`),Kg(),Jc(831,`td`,24)(832,`em`)(833,`strong`),Mk(834,`(opcional)`),Kg()(),Jc(835,`p`),Mk(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(837,`code`),Mk(838,`p-label`),Kg(),Mk(839,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(840,`code`),Mk(841,`p-label`),Kg(),Mk(842,`.`),Kg(),Jc(843,`blockquote`)(844,`p`),Mk(845,`Para mais informações acesse: `),Jc(846,`a`,53),Mk(847,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(848,`.`),Kg()(),Jc(849,`blockquote`)(850,`p`),Mk(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(852,`code`),Mk(853,`p-additional-help-tooltip`),Kg(),Mk(854,` e `),Jc(855,`code`),Mk(856,`p-additional-help`),Kg(),Mk(857,`) será ignorado.`),Kg()()()(),Jc(858,`tr`,54)(859,`td`,17)(860,`div`,26)(861,`span`,27),Mk(862,` p-readonly`),_u(863,`br`),Kg()()(),Jc(864,`td`,21)(865,`code`,30),Mk(866,`boolean`),Kg()(),Jc(867,`td`,23)(868,`p`)(869,`code`),Mk(870,`false`),Kg()()(),Jc(871,`td`,24)(872,`em`)(873,`strong`),Mk(874,`(opcional)`),Kg()(),Jc(875,`p`),Mk(876,`Indica que o campo será somente para leitura.`),Kg()()(),Jc(877,`tr`,55)(878,`td`,17)(879,`div`,26)(880,`span`,27),Mk(881,` p-required`),_u(882,`br`),Kg()()(),Jc(883,`td`,21)(884,`code`,30),Mk(885,`boolean`),Kg()(),Jc(886,`td`,23)(887,`p`)(888,`code`),Mk(889,`false`),Kg()()(),Jc(890,`td`,24)(891,`em`)(892,`strong`),Mk(893,`(opcional)`),Kg()(),Jc(894,`p`),Mk(895,`Define que o campo será obrigatório.`),Kg()()(),Jc(896,`tr`,56)(897,`td`,17)(898,`div`,26)(899,`span`,27),Mk(900,` p-show-required`),_u(901,`br`),Kg()()(),Jc(902,`td`,21)(903,`code`,30),Mk(904,`boolean`),Kg()(),Jc(905,`td`,23),Mk(906,`-`),Kg(),Jc(907,`td`,24)(908,`p`),Mk(909,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(910,`blockquote`)(911,`p`),Mk(912,`Não será exibida a indicação se:`),Kg()(),Jc(913,`ul`)(914,`li`),Mk(915,`Não possuir `),Jc(916,`code`),Mk(917,`p-help`),Kg(),Mk(918,` e/ou `),Jc(919,`code`),Mk(920,`p-label`),Kg(),Mk(921,`.`),Kg()()()(),Jc(922,`tr`,57)(923,`td`,17)(924,`div`,26)(925,`span`,27),Mk(926,` p-size`),_u(927,`br`),Kg()()(),Jc(928,`td`,21)(929,`code`,28),Mk(930,`string`),Kg()(),Jc(931,`td`,23)(932,`p`)(933,`code`),Mk(934,`medium`),Kg()()(),Jc(935,`td`,24)(936,`em`)(937,`strong`),Mk(938,`(opcional)`),Kg()(),Jc(939,`p`),Mk(940,`Define o tamanho do componente:`),Kg(),Jc(941,`ul`)(942,`li`)(943,`code`),Mk(944,`small`),Kg(),Mk(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(946,`li`)(947,`code`),Mk(948,`medium`),Kg(),Mk(949,`: altura do input como 44px.`),Kg()(),Jc(950,`blockquote`)(951,`p`),Mk(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(953,`code`),Mk(954,`medium`),Kg(),Mk(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(956,`a`,58),Mk(957,`po-theme`),Kg(),Mk(958,`.`),Kg()()()()(),Jc(959,`h3`,12),Mk(960,`Métodos`),Kg(),Jc(961,`table`,59)(962,`tr`,60)(963,`th`,61)(964,`div`,26)(965,`h4`)(966,`span`,27),Mk(967,` focus `),Kg()()()()(),Jc(968,`tr`,24)(969,`td`,24)(970,`p`),Mk(971,`Função que atribui foco ao componente.`),Kg(),Jc(972,`p`),Mk(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(974,`pre`)(975,`code`),Mk(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),Kg()()()()(),_u(977,`br`),Jc(978,`table`,62)(979,`tr`,60)(980,`th`,61)(981,`div`,26)(982,`h4`)(983,`span`,27),Mk(984,` showAdditionalHelp `),Kg()()()()(),Jc(985,`tr`,24)(986,`td`,24)(987,`p`),Mk(988,`Método que exibe `),Jc(989,`code`),Mk(990,`p-helper`),Kg(),Mk(991,` ou executa a ação definida em `),Jc(992,`code`),Mk(993,`p-helper{eventOnClick}`),Kg(),Mk(994,` ou em `),Jc(995,`code`),Mk(996,`p-additionalHelp`),Kg(),Mk(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(998,`code`),Mk(999,`p-keydown`),Kg(),Mk(1e3,`.`),Kg(),Jc(1001,`blockquote`)(1002,`p`),Mk(1003,`Exibe ou oculta o conteúdo do componente `),Jc(1004,`code`),Mk(1005,`po-helper`),Kg(),Mk(1006,` quando o componente estiver com foco.`),Kg()(),Jc(1007,`pre`)(1008,`code`),Mk(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),Kg()(),Jc(1010,`pre`)(1011,`code`,63),Mk(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1013,`br`),Jc(1014,`h3`),Mk(1015,`Interfaces`),Kg(),Jc(1016,`h4`,64)(1017,`code`,5),Mk(1018,`PoSelectOptionGroup`),Kg()(),Jc(1019,`div`,2)(1020,`p`),Mk(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),Jc(1022,`code`),Mk(1023,`PoSelectOption`),Kg(),Mk(1024,`.`),Kg()(),Jc(1025,`h4`,12),Mk(1026,`Propriedades`),Kg(),Jc(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),Mk(1030,`Nome`),Kg(),Jc(1031,`th`,15),Mk(1032,`Tipo`),Kg(),Jc(1033,`th`,15),Mk(1034,`Descrição`),Kg()(),Jc(1035,`tr`,65)(1036,`td`,17)(1037,`div`,26)(1038,`span`,27),Mk(1039,` label`),_u(1040,`br`),Kg()()(),Jc(1041,`td`,21)(1042,`code`,28),Mk(1043,`string`),Kg()(),Jc(1044,`td`,24)(1045,`p`),Mk(1046,`Label para denominar o nome do grupo.`),Kg()()(),Jc(1047,`tr`,66)(1048,`td`,17)(1049,`div`,26)(1050,`span`,27),Mk(1051,` options`),_u(1052,`br`),Kg()()(),Jc(1053,`td`,21)(1054,`code`,67),Mk(1055,`Array<PoSelectOption>`),Kg()(),Jc(1056,`td`,24)(1057,`p`),Mk(1058,`Lista com as opções disponíveis em cada grupo.`),Kg()()()(),Jc(1059,`h4`,68)(1060,`code`,5),Mk(1061,`PoSelectOption`),Kg()(),Jc(1062,`div`,2)(1063,`p`),Mk(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),Kg()(),Jc(1065,`h4`,12),Mk(1066,`Propriedades`),Kg(),Jc(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),Mk(1070,`Nome`),Kg(),Jc(1071,`th`,15),Mk(1072,`Tipo`),Kg(),Jc(1073,`th`,15),Mk(1074,`Descrição`),Kg()(),Jc(1075,`tr`,69)(1076,`td`,17)(1077,`div`,26)(1078,`span`,27),Mk(1079,` label`),_u(1080,`br`),Kg()()(),Jc(1081,`td`,21)(1082,`code`,28),Mk(1083,`string`),Kg()(),Jc(1084,`td`,24)(1085,`p`),Mk(1086,`Label a ser utilizada nos itens da lista.`),Kg()()(),Jc(1087,`tr`,70)(1088,`td`,17)(1089,`div`,26)(1090,`span`,27),Mk(1091,` value`),_u(1092,`br`),Kg()()(),Jc(1093,`td`,21)(1094,`code`,28),Mk(1095,`string `),Kg(),Jc(1096,`code`,71),Mk(1097,` number`),Kg()(),Jc(1098,`td`,24)(1099,`p`),Mk(1100,`Valor do objeto que será atribuído ao model.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function je(l,G){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-select-basic-view`)(2,`sample-po-select-labs-view`)(3,`sample-po-select-customer-registration-view`)(4,`sample-po-select-companies-view`),Kg()),l&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Be=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Select`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Select · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0),LO(1,je,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-select-doc`),Kg()()),p&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,he,xe,ye,Pe,_e],encapsulation:2,changeDetection:1})}return l})()}];var Oe=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(Be),GV]})}return l})();var Vt=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Oe]})}return l})();export{Vt as DocPoSelectModule};
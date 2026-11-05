import{$r as RK,Ai as Zn,Ar as He,Br as MK,C as G4,Ca as o0,Ci as Xx,Da as pO,Et as Yoe,Fa as rb,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Si as Ww,Sn as ri,Tr as Fx,Ua as v_,Ut as ea,Xa as wg,Ya as we$1,Z as P4,_r as Dx,_t as Vze,aa as ir,ca as jc,ci as T,di as UE,ea as h,fr as DO,ha as lO,hi as VE,ii as SK,ir as Ax,ji as _O,ln as lre,lr as CO,mt as V4,oi as Sn,pn as p4,ri as SF,rr as Ag,sr as Bx,tt as Qte,wt as Xoe,x as Ff,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var ke=()=>({label:`Option 1`,value:`1`});var Ve=()=>({label:`Option 2`,value:`2`});var qe=(a,I)=>[a,I];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&nu(0,`po-select`,0),p&2&&UE(`p-options`,CO(3,qe,_O(1,ke),_O(2,Ve)))},dependencies:[Yoe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Select Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-select-basic/sample-po-select-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-select-basic/sample-po-select-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-basic`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ge,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,fe],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{cdr=h(He);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:c,value:d}=p;if(i){let o=r.findIndex(ne=>ne.label===i&&`options`in ne);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:c,value:d}]}]):(r[o].options.push({label:c,value:d}),r)}return[...r,{label:c,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let c=Ax();jc(0,`po-select`,2),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.select,o)||(i.select=o),__(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4)(4,`po-info`,5),wg(),nu(5,`po-divider`),jc(6,`form`,null,0),nu(8,`po-divider`,6),jc(9,`div`,3)(10,`po-switch`,7),r0(),mt(`p-change`,function(o){return i.restoreSwitch(o)}),ab(`ngModelChange`,function(o){return v_(c),uO(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),__(o)}),wg(),jc(11,`po-select`,8),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),__(o)}),mt(`p-change`,function(){return i.optionsGroupSelection()}),wg(),jc(12,`po-input`,9),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.optionsGroup,o)||(i.optionsGroup=o),__(o)}),wg()(),nu(13,`po-divider`,10),jc(14,`div`,3)(15,`po-input`,11),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.option.label,o)||(i.option.label=o),__(o)}),wg(),jc(16,`po-input`,12),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.option.value,o)||(i.option.value=o),__(o)}),wg()(),jc(17,`div`,3)(18,`po-button`,13),mt(`p-click`,function(){return i.addOption()}),wg()()(),nu(19,`po-divider`),jc(20,`form`,null,1)(22,`po-input`,14),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.label,o)||(i.label=o),__(o)}),wg(),jc(23,`po-input`,15),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.help,o)||(i.help=o),__(o)}),wg(),jc(24,`po-input`,16),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.helperText,o)||(i.helperText=o),__(o)}),wg(),jc(25,`po-input`,17),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.placeholder,o)||(i.placeholder=o),__(o)}),wg(),jc(26,`po-input`,18),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),__(o)}),wg(),jc(27,`po-checkbox-group`,19),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.properties,o)||(i.properties=o),__(o)}),wg(),jc(28,`po-radio-group`,20),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.size,o)||(i.size=o),__(o)}),wg(),jc(29,`div`,3)(30,`div`,21)(31,`po-button`,22),mt(`p-click`,function(){return i.restore()}),wg()()(),nu(32,`form`),wg()}if(p&2){let c=Bx(7);sb(`ngModel`,i.select),UE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),o0(),rg(3),UE(`p-value`,i.select),rg(),UE(`p-value`,i.event),rg(6),sb(`ngModel`,i.selectOptionGroupSwitch),o0(),rg(),sb(`ngModel`,i.selectedOptionsGroup),UE(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),o0(),rg(),sb(`ngModel`,i.optionsGroup),UE(`p-disabled`,!i.selectOptionGroupSwitch),o0(),rg(3),sb(`ngModel`,i.option.label),o0(),rg(),sb(`ngModel`,i.option.value),o0(),rg(2),UE(`p-disabled`,c.invalid),rg(4),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.helperText),o0(),rg(),sb(`ngModel`,i.placeholder),o0(),rg(),sb(`ngModel`,i.fieldErrorMessage),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,ri,Ff,P4,G4,Qte,Yoe,V4,Xoe],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Select Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-select-labs/sample-po-select-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-select
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-select-labs/sample-po-select-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-labs`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ye],encapsulation:2,changeDetection:1})}return a})();var te=(()=>{class a{http=h(Ww);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=T({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Ne(a,I){if(a&1&&(jc(0,`div`,17),nu(1,`po-avatar`,18),jc(2,`div`,19)(3,`div`,20),lO(4),wg(),jc(5,`div`,21),lO(6),wg()()()),a&2){let r=I.$implicit;rg(),UE(`p-src`,pO(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),rg(3),rb(r.label),rg(2),rb(r.value)}}var Pe=(()=>{class a{sampleService=h(te);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[we$1([te])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let c=Ax();jc(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.documentType,o)||(i.documentType=o),__(o)}),mt(`p-change`,function(o){return i.changeType(o)}),wg(),jc(4,`po-input`,4),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.document,o)||(i.document=o),__(o)}),wg()(),jc(5,`div`,2)(6,`po-input`,5),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.name,o)||(i.name=o),__(o)}),wg(),jc(7,`po-input`,6),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.address,o)||(i.address=o),__(o)}),wg()(),jc(8,`div`,2)(9,`po-select`,7),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.state,o)||(i.state=o),__(o)}),mt(`p-change`,function(){return i.onChangeState()}),VE(10,Ne,7,4,`ng-template`,8),wg(),jc(11,`po-select`,9),r0(),ab(`ngModelChange`,function(o){return v_(c),uO(i.city,o)||(i.city=o),__(o)}),wg()(),jc(12,`div`,2)(13,`po-button`,10),mt(`p-click`,function(){v_(c);let o=Bx(15);return __(o.open())}),wg()()(),jc(14,`po-modal`,11,1)(16,`div`,2),nu(17,`po-info`,12)(18,`po-info`,13),wg(),nu(19,`po-divider`),jc(20,`div`,2),nu(21,`po-info`,13)(22,`po-info`,14),wg(),nu(23,`po-divider`),jc(24,`div`,2),nu(25,`po-info`,15)(26,`po-info`,16),wg()()}if(p&2){let c=Bx(1);rg(3),sb(`ngModel`,i.documentType),UE(`p-options`,i.options),o0(),rg(),sb(`ngModel`,i.document),UE(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),o0(),rg(2),sb(`ngModel`,i.name),UE(`p-label`,i.nameLabel),o0(),rg(),sb(`ngModel`,i.address),o0(),rg(2),sb(`ngModel`,i.state),UE(`p-options`,i.stateOptions),o0(),rg(2),sb(`ngModel`,i.city),UE(`p-options`,i.cityOptions),o0(),rg(2),UE(`p-disabled`,c.invalid),rg(4),UE(`p-value`,i.documentType),rg(),UE(`p-label`,i.documentLabel)(`p-value`,i.document),rg(3),UE(`p-label`,i.nameLabel)(`p-value`,i.name),rg(),UE(`p-value`,i.address),rg(3),UE(`p-value`,i.getStateByValue(i.state)),rg(),UE(`p-value`,i.getCityByValue(i.city))}},dependencies:[RK,SK,MK,xF,SF,p4,ri,Ff,G4,Qte,Yoe,Xoe,ea],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Select - Customer registration`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form #f="ngForm">
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
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),lO(28,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),wg(),jc(29,`pre`,11),lO(30,`.sample-select-option-template-container {
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
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-select-customer-registration`),wg(),nu(33,`hr`)),p&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,je,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Pe],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(jc(0,`po-select`,0),r0(),ab(`ngModelChange`,function(d){return uO(i.select,d)||(i.select=d),d}),wg(),jc(1,`po-info`,1),ab(`p-valueChange`,function(d){return uO(i.select,d)||(i.select=d),d}),wg(),jc(2,`div`,2)(3,`po-select`,3),r0(),mt(`p-change`,function(d){return i.onChange(d)}),ab(`ngModelChange`,function(d){return uO(i.fieldLabel,d)||(i.fieldLabel=d),d}),wg(),jc(4,`po-select`,4),r0(),mt(`p-change`,function(d){return i.onChange(d)}),ab(`ngModelChange`,function(d){return uO(i.fieldValue,d)||(i.fieldValue=d),d}),wg()()),p&2&&(sb(`ngModel`,i.select),UE(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),o0(),rg(),sb(`p-value`,i.select),rg(2),UE(`p-options`,i.labels),sb(`ngModel`,i.fieldLabel),o0(),rg(),UE(`p-options`,i.values),sb(`ngModel`,i.fieldValue),o0())},dependencies:[SK,xF,Yoe,Xoe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Select Companies`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-select-companies/sample-po-select-companies.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-select
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-select-companies/sample-po-select-companies.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-select-companies`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Je,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Te],encapsulation:2,changeDetection:1})}return a})();var Oe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoSelectComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),wg(),jc(24,`blockquote`)(25,`p`),lO(26,`Ao passar um valor para o `),jc(27,`em`),lO(28,`model`),wg(),lO(29,` que não está na lista de opções, o mesmo será definido como `),jc(30,`code`),lO(31,`undefined`),wg(),lO(32,`.`),wg()(),jc(33,`p`),lO(34,`Também existe a possibilidade de utilizar um `),jc(35,`em`),lO(36,`template`),wg(),lO(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),jc(38,`strong`)(39,`a`,6),lO(40,`p-combo-option-template`),wg()(),lO(41,`.`),wg(),jc(42,`blockquote`)(43,`p`),lO(44,`Obs: o template `),jc(45,`strong`)(46,`a`,7),lO(47,`p-select-option-template`),wg()(),lO(48,` será depreciado na versão 14.x.x.`),wg()(),jc(49,`h4`),lO(50,`Tokens customizáveis`),wg(),jc(51,`p`),lO(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(53,`blockquote`)(54,`p`),lO(55,`Para maiores informações, acesse o guia `),jc(56,`a`,8),lO(57,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(58,`.`),wg()(),jc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),lO(63,`Propriedade`),wg(),jc(64,`th`),lO(65,`Descrição`),wg(),jc(66,`th`),lO(67,`Valor Padrão`),wg()()(),jc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),lO(72,`Default Values`),wg()(),nu(73,`td`)(74,`td`),wg(),jc(75,`tr`)(76,`td`)(77,`code`),lO(78,`--font-family`),wg()(),jc(79,`td`),lO(80,`Família tipográfica usada`),wg(),jc(81,`td`)(82,`code`),lO(83,`var(--font-family-theme)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),lO(87,`--font-size`),wg()(),jc(88,`td`),lO(89,`Tamanho da fonte`),wg(),jc(90,`td`)(91,`code`),lO(92,`var(--font-size-default)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),lO(96,`--text-color-empty`),wg()(),jc(97,`td`),lO(98,`Cor do placeholder`),wg(),jc(99,`td`)(100,`code`),lO(101,`var(--color-neutral-light-30)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),lO(105,`--color`),wg()(),jc(106,`td`),lO(107,`Cor da borda`),wg(),jc(108,`td`)(109,`code`),lO(110,`var(--color-neutral-dark-70)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),lO(114,`--background`),wg()(),jc(115,`td`),lO(116,`Cor de background`),wg(),jc(117,`td`)(118,`code`),lO(119,`var(--color-neutral-light-05)`),wg()()(),jc(120,`tr`)(121,`td`)(122,`code`),lO(123,`--text-color`),wg()(),jc(124,`td`),lO(125,`Cor do texto`),wg(),jc(126,`td`)(127,`code`),lO(128,`var(--color-neutral-dark-90)`),wg()()(),jc(129,`tr`)(130,`td`)(131,`code`),lO(132,`--padding-horizontal`),wg()(),jc(133,`td`),lO(134,`Preenchimento horizontal`),wg(),jc(135,`td`)(136,`code`),lO(137,`0.5em`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),lO(141,`--padding-vertical`),wg()(),jc(142,`td`),lO(143,`Preenchimento vertical`),wg(),jc(144,`td`)(145,`code`),lO(146,`0.7em`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),lO(150,`--field-container-title-justify`),wg()(),jc(151,`td`),lO(152,`Alinhamento horizontal do título (`),jc(153,`code`),lO(154,`justify-content`),wg(),lO(155,`)`),wg(),jc(156,`td`)(157,`code`),lO(158,`space-between`),wg()()(),jc(159,`tr`)(160,`td`)(161,`code`),lO(162,`--field-container-title-flex`),wg()(),jc(163,`td`),lO(164,`Flex do título (`),jc(165,`code`),lO(166,`flex`),wg(),lO(167,`)`),wg(),jc(168,`td`)(169,`code`),lO(170,`1 auto`),wg()()(),jc(171,`tr`)(172,`td`)(173,`strong`),lO(174,`Hover`),wg()(),nu(175,`td`)(176,`td`),wg(),jc(177,`tr`)(178,`td`)(179,`code`),lO(180,`--color-hover`),wg()(),jc(181,`td`),lO(182,`Cor principal no estado hover`),wg(),jc(183,`td`)(184,`code`),lO(185,`var(--color-brand-01-dark)`),wg()()(),jc(186,`tr`)(187,`td`)(188,`code`),lO(189,`--background-hover`),wg()(),jc(190,`td`),lO(191,`Cor de background no estado hover`),wg(),jc(192,`td`)(193,`code`),lO(194,`var(--color-brand-01-lighter)`),wg()()(),jc(195,`tr`)(196,`td`)(197,`strong`),lO(198,`Focused`),wg()(),nu(199,`td`)(200,`td`),wg(),jc(201,`tr`)(202,`td`)(203,`code`),lO(204,`--outline-color-focused`),wg()(),jc(205,`td`),lO(206,`Cor do outline do estado de focus`),wg(),jc(207,`td`)(208,`code`),lO(209,`var(--color-action-focus)`),wg()()(),jc(210,`tr`)(211,`td`)(212,`code`),lO(213,`--color-focused`),wg()(),jc(214,`td`),lO(215,`Cor da borda no estado de focus`),wg(),jc(216,`td`)(217,`code`),lO(218,`var(--color-action-default)`),wg()()(),jc(219,`tr`)(220,`td`)(221,`strong`),lO(222,`Disabled`),wg()(),nu(223,`td`)(224,`td`),wg(),jc(225,`tr`)(226,`td`)(227,`code`),lO(228,`--color-disabled`),wg()(),jc(229,`td`),lO(230,`Cor principal no estado disabled`),wg(),jc(231,`td`)(232,`code`),lO(233,`var(--color-neutral-light-30)`),wg()()(),jc(234,`tr`)(235,`td`)(236,`code`),lO(237,`--background-color-disabled`),wg(),lO(238,`\xA0`),wg(),jc(239,`td`),lO(240,`Cor de background no estado disabled`),wg(),jc(241,`td`)(242,`code`),lO(243,`var(--color-neutral-light-20)`),wg()()()()()(),jc(244,`div`,9)(245,`h4`,10),lO(246,`Seletor`),wg(),jc(247,`pre`,11),lO(248,`<po-select
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
`),wg()(),jc(249,`h4`,12),lO(250,`Propriedades`),wg(),jc(251,`table`,13)(252,`tr`,14)(253,`th`,15),lO(254,`Nome`),wg(),jc(255,`th`,15),lO(256,`Tipo`),wg(),jc(257,`th`,15),lO(258,`Padrão`),wg(),jc(259,`th`,15),lO(260,`Descrição`),wg()(),jc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),lO(265,` (p-additional-help)`),nu(266,`br`),wg()(),jc(267,`div`,20),lO(268,`Deprecated`),wg()(),jc(269,`td`,21)(270,`code`,22),lO(271,`EventEmitter`),wg()(),jc(272,`td`,23),lO(273,`-`),wg(),jc(274,`td`,24)(275,`em`)(276,`strong`),lO(277,`(opcional)`),wg()(),jc(278,`p`),lO(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(280,`blockquote`)(281,`p`),lO(282,`Essa propriedade está `),jc(283,`strong`),lO(284,`depreciada`),wg(),lO(285,` e será removida na versão `),jc(286,`code`),lO(287,`23.x.x`),wg(),lO(288,`. Recomendamos utilizar a propriedade `),jc(289,`code`),lO(290,`p-helper`),wg(),lO(291,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(292,`tr`,16)(293,`td`,17)(294,`div`,25)(295,`span`,26),lO(296,` p-additional-help-tooltip`),nu(297,`br`),wg()(),jc(298,`div`,20),lO(299,`Deprecated`),wg()(),jc(300,`td`,21)(301,`code`,27),lO(302,`string`),wg()(),jc(303,`td`,23),lO(304,`-`),wg(),jc(305,`td`,24)(306,`em`)(307,`strong`),lO(308,`(opcional)`),wg()(),jc(309,`p`),lO(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(311,`code`),lO(312,`po-helper`),wg(),lO(313,`.
`),jc(314,`strong`),lO(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(316,`blockquote`)(317,`p`),lO(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(319,`blockquote`)(320,`p`),lO(321,`Essa propriedade está `),jc(322,`strong`),lO(323,`depreciada`),wg(),lO(324,` e será removida na versão `),jc(325,`code`),lO(326,`23.x.x`),wg(),lO(327,`. Recomendamos utilizar a propriedade `),jc(328,`code`),lO(329,`p-helper`),wg(),lO(330,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(331,`tr`,16)(332,`td`,17)(333,`div`,25)(334,`span`,26),lO(335,` p-append-in-body`),nu(336,`br`),wg()()(),jc(337,`td`,21)(338,`code`,28),lO(339,`boolean`),wg()(),jc(340,`td`,23)(341,`p`)(342,`code`),lO(343,`false`),wg()()(),jc(344,`td`,24)(345,`em`)(346,`strong`),lO(347,`(opcional)`),wg()(),jc(348,`p`),lO(349,`Define que o popover (`),jc(350,`code`),lO(351,`p-helper`),wg(),lO(352,` e/ou `),jc(353,`code`),lO(354,`p-error-limit`),wg(),lO(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(356,`blockquote`)(357,`p`),lO(358,`Quando utilizado com `),jc(359,`code`),lO(360,`p-helper`),wg(),lO(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(362,`tr`,16)(363,`td`,17)(364,`div`,18)(365,`span`,19),lO(366,` (p-blur)`),nu(367,`br`),wg()()(),jc(368,`td`,21)(369,`code`,22),lO(370,`EventEmitter`),wg()(),jc(371,`td`,23),lO(372,`-`),wg(),jc(373,`td`,24)(374,`em`)(375,`strong`),lO(376,`(opcional)`),wg()(),jc(377,`p`),lO(378,`Evento disparado ao sair do campo.`),wg()()(),jc(379,`tr`,16)(380,`td`,17)(381,`div`,18)(382,`span`,19),lO(383,` (p-change)`),nu(384,`br`),wg()()(),jc(385,`td`,21)(386,`code`,22),lO(387,`EventEmitter`),wg()(),jc(388,`td`,23),lO(389,`-`),wg(),jc(390,`td`,24)(391,`em`)(392,`strong`),lO(393,`(opcional)`),wg()(),jc(394,`p`),lO(395,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(396,`tr`,16)(397,`td`,17)(398,`div`,18)(399,`span`,19),lO(400,` (p-change-model)`),nu(401,`br`),wg()()(),jc(402,`td`,21)(403,`code`,22),lO(404,`EventEmitter`),wg()(),jc(405,`td`,23),lO(406,`-`),wg(),jc(407,`td`,24)(408,`em`)(409,`strong`),lO(410,`(opcional)`),wg()(),jc(411,`p`),lO(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(413,`code`),lO(414,`setValue`),wg(),lO(415,`, `),jc(416,`code`),lO(417,`patchValue`),wg(),lO(418,`, carregamento assíncrono).`),wg(),jc(419,`p`),lO(420,`Diferentemente do `),jc(421,`code`),lO(422,`p-change`),wg(),lO(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(424,`code`),lO(425,`p-change-model`),wg(),lO(426,` cobre todos os cenários de alteração de valor.`),wg(),jc(427,`p`),lO(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(429,`tr`,16)(430,`td`,17)(431,`div`,25)(432,`span`,26),lO(433,` p-compact-label`),nu(434,`br`),wg()()(),jc(435,`td`,21)(436,`code`,28),lO(437,`boolean`),wg()(),jc(438,`td`,23)(439,`p`)(440,`code`),lO(441,`false`),wg()()(),jc(442,`td`,24)(443,`em`)(444,`strong`),lO(445,`(opcional)`),wg()(),jc(446,`p`),lO(447,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(448,`p`),lO(449,`Quando habilitado (`),jc(450,`code`),lO(451,`true`),wg(),lO(452,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(453,`ul`)(454,`li`)(455,`code`),lO(456,`po-label`),wg()(),jc(457,`li`)(458,`code`),lO(459,`p-requirement (showRequired)`),wg()(),jc(460,`li`)(461,`code`),lO(462,`po-helper`),wg()()(),jc(463,`p`),lO(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(465,`p`),lO(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(467,`ul`)(468,`li`)(469,`code`),lO(470,`--field-container-title-justify`),wg()(),jc(471,`li`)(472,`code`),lO(473,`--field-container-title-flex`),wg()()(),jc(474,`p`),lO(475,`Exemplo:`),wg(),jc(476,`pre`)(477,`code`),lO(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(479,`p`),lO(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(481,`tr`,16)(482,`td`,17)(483,`div`,25)(484,`span`,26),lO(485,` p-disabled`),nu(486,`br`),wg()()(),jc(487,`td`,21)(488,`code`,28),lO(489,`boolean`),wg()(),jc(490,`td`,23)(491,`p`)(492,`code`),lO(493,`false`),wg()()(),jc(494,`td`,24)(495,`em`)(496,`strong`),lO(497,`(opcional)`),wg()(),jc(498,`p`),lO(499,`Indica se o campo será desabilitado.`),wg()()(),jc(500,`tr`,16)(501,`td`,17)(502,`div`,25)(503,`span`,26),lO(504,` p-error-limit`),nu(505,`br`),wg()()(),jc(506,`td`,21)(507,`code`,28),lO(508,`boolean`),wg()(),jc(509,`td`,23)(510,`p`)(511,`code`),lO(512,`false`),wg()()(),jc(513,`td`,24)(514,`em`)(515,`strong`),lO(516,`(opcional)`),wg()(),jc(517,`p`),lO(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(519,`blockquote`)(520,`p`),lO(521,`Caso essa propriedade seja definida como `),jc(522,`code`),lO(523,`true`),wg(),lO(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(525,`tr`,16)(526,`td`,17)(527,`div`,25)(528,`span`,26),lO(529,` p-field-error-message`),nu(530,`br`),wg()()(),jc(531,`td`,21)(532,`code`,27),lO(533,`string`),wg()(),jc(534,`td`,23),lO(535,`-`),wg(),jc(536,`td`,24)(537,`em`)(538,`strong`),lO(539,`(opcional)`),wg()(),jc(540,`p`),lO(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(542,`blockquote`)(543,`p`),lO(544,`Necessário que a propriedade `),jc(545,`code`),lO(546,`p-required`),wg(),lO(547,` esteja habilitada.`),wg()()()(),jc(548,`tr`,16)(549,`td`,17)(550,`div`,25)(551,`span`,26),lO(552,` p-field-label`),nu(553,`br`),wg()()(),jc(554,`td`,21)(555,`code`,27),lO(556,`string`),wg()(),jc(557,`td`,23)(558,`p`)(559,`code`),lO(560,`label`),wg()()(),jc(561,`td`,24)(562,`em`)(563,`strong`),lO(564,`(opcional)`),wg()(),jc(565,`p`),lO(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(567,`code`),lO(568,`p-options`),wg(),lO(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),wg()()(),jc(570,`tr`,16)(571,`td`,17)(572,`div`,25)(573,`span`,26),lO(574,` p-field-value`),nu(575,`br`),wg()()(),jc(576,`td`,21)(577,`code`,27),lO(578,`string`),wg()(),jc(579,`td`,23)(580,`p`)(581,`code`),lO(582,`value`),wg()()(),jc(583,`td`,24)(584,`em`)(585,`strong`),lO(586,`(opcional)`),wg()(),jc(587,`p`),lO(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),jc(589,`code`),lO(590,`p-options`),wg(),lO(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),wg()()(),jc(592,`tr`,16)(593,`td`,17)(594,`div`,25)(595,`span`,26),lO(596,` p-help`),nu(597,`br`),wg()()(),jc(598,`td`,21)(599,`code`,27),lO(600,`string`),wg()(),jc(601,`td`,23),lO(602,`-`),wg(),jc(603,`td`,24)(604,`p`),lO(605,`Texto de apoio para o campo.`),wg()()(),jc(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),lO(610,` (p-keydown)`),nu(611,`br`),wg()()(),jc(612,`td`,21)(613,`code`,22),lO(614,`EventEmitter`),wg()(),jc(615,`td`,23),lO(616,`-`),wg(),jc(617,`td`,24)(618,`em`)(619,`strong`),lO(620,`(opcional)`),wg()(),jc(621,`p`),lO(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(623,`code`),lO(624,`KeyboardEvent`),wg(),lO(625,` com informações sobre a tecla.`),wg()()(),jc(626,`tr`,16)(627,`td`,17)(628,`div`,25)(629,`span`,26),lO(630,` p-label`),nu(631,`br`),wg()()(),jc(632,`td`,21)(633,`code`,27),lO(634,`string`),wg()(),jc(635,`td`,23),lO(636,`-`),wg(),jc(637,`td`,24)(638,`p`),lO(639,`Rótulo exibido pelo componente.`),wg()()(),jc(640,`tr`,16)(641,`td`,17)(642,`div`,25)(643,`span`,26),lO(644,` p-label-text-wrap`),nu(645,`br`),wg()()(),jc(646,`td`,21)(647,`code`,28),lO(648,`boolean`),wg()(),jc(649,`td`,23)(650,`p`)(651,`code`),lO(652,`false`),wg()()(),jc(653,`td`,24)(654,`em`)(655,`strong`),lO(656,`(opcional)`),wg()(),jc(657,`p`),lO(658,`Habilita a quebra automática do texto da propriedade `),jc(659,`code`),lO(660,`p-label`),wg(),lO(661,`. Quando `),jc(662,`code`),lO(663,`p-label-text-wrap`),wg(),lO(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(665,`tr`,16)(666,`td`,17)(667,`div`,25)(668,`span`,26),lO(669,` p-loading`),nu(670,`br`),wg()()(),jc(671,`td`,21)(672,`code`,28),lO(673,`boolean`),wg()(),jc(674,`td`,23)(675,`p`)(676,`code`),lO(677,`false`),wg()()(),jc(678,`td`,24)(679,`em`)(680,`strong`),lO(681,`(opcional)`),wg()(),jc(682,`p`),lO(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(684,`tr`,16)(685,`td`,17)(686,`div`,25)(687,`span`,26),lO(688,` name`),nu(689,`br`),wg()()(),jc(690,`td`,21)(691,`code`,27),lO(692,`string`),wg()(),jc(693,`td`,23),lO(694,`-`),wg(),jc(695,`td`,24)(696,`p`),lO(697,`Nome do componente.`),wg()()(),jc(698,`tr`,16)(699,`td`,17)(700,`div`,18)(701,`span`,19),lO(702,` (ngModelChange)`),nu(703,`br`),wg()()(),jc(704,`td`,21)(705,`code`,22),lO(706,`EventEmitter`),wg()(),jc(707,`td`,23),lO(708,`-`),wg(),jc(709,`td`,24)(710,`em`)(711,`strong`),lO(712,`(opcional)`),wg()(),jc(713,`p`),lO(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),wg(),jc(715,`p`),lO(716,`Na versão 12.2.0 do Angular a verificação `),jc(717,`code`),lO(718,`strictTemplates`),wg(),lO(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),wg(),jc(720,`pre`)(721,`code`),lO(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),wg()()()(),jc(723,`tr`,16)(724,`td`,17)(725,`div`,25)(726,`span`,26),lO(727,` p-optional`),nu(728,`br`),wg()()(),jc(729,`td`,21)(730,`code`,28),lO(731,`boolean`),wg()(),jc(732,`td`,23)(733,`p`)(734,`code`),lO(735,`false`),wg()()(),jc(736,`td`,24)(737,`em`)(738,`strong`),lO(739,`(opcional)`),wg()(),jc(740,`p`),lO(741,`Define se a indicação de campo opcional será exibida.`),wg(),jc(742,`blockquote`)(743,`p`),lO(744,`Não será exibida a indicação se:`),wg()(),jc(745,`ul`)(746,`li`),lO(747,`O campo conter `),jc(748,`code`),lO(749,`p-required`),wg(),lO(750,`;`),wg(),jc(751,`li`),lO(752,`Não possuir `),jc(753,`code`),lO(754,`p-help`),wg(),lO(755,` e/ou `),jc(756,`code`),lO(757,`p-label`),wg(),lO(758,`.`),wg()()()(),jc(759,`tr`,16)(760,`td`,17)(761,`div`,25)(762,`span`,26),lO(763,` p-options`),nu(764,`br`),wg()()(),jc(765,`td`,21)(766,`code`,29),lO(767,`any[]`),wg()(),jc(768,`td`,23),lO(769,`-`),wg(),jc(770,`td`,24)(771,`p`),lO(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),jc(773,`code`),lO(774,`PoSelectOption`),wg(),lO(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),jc(776,`code`),lO(777,`PoSelectOptionGroup`),wg(),lO(778,`.`),wg(),jc(779,`p`),lO(780,`Caso esta lista estiver vazia, o model será `),jc(781,`code`),lO(782,`undefined`),wg(),lO(783,`.`),wg(),jc(784,`blockquote`)(785,`p`),lO(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),wg()(),jc(787,`pre`)(788,`code`),lO(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),wg()(),jc(790,`blockquote`)(791,`p`),lO(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),jc(793,`code`),lO(794,`options`),wg(),lO(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),wg()(),jc(796,`pre`)(797,`code`),lO(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),wg()(),jc(799,`p`),lO(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),wg()()(),jc(801,`tr`,16)(802,`td`,17)(803,`div`,25)(804,`span`,26),lO(805,` p-placeholder`),nu(806,`br`),wg()()(),jc(807,`td`,21)(808,`code`,27),lO(809,`string`),wg()(),jc(810,`td`,23),lO(811,`-`),wg(),jc(812,`td`,24)(813,`em`)(814,`strong`),lO(815,`(opcional)`),wg()(),jc(816,`p`),lO(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),wg()()(),jc(818,`tr`,16)(819,`td`,17)(820,`div`,25)(821,`span`,26),lO(822,` p-helper`),nu(823,`br`),wg()()(),jc(824,`td`,21)(825,`code`,30),lO(826,`PoHelperOptions `),wg(),jc(827,`code`,27),lO(828,` string`),wg()(),jc(829,`td`,23),lO(830,`-`),wg(),jc(831,`td`,24)(832,`em`)(833,`strong`),lO(834,`(opcional)`),wg()(),jc(835,`p`),lO(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(837,`code`),lO(838,`p-label`),wg(),lO(839,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(840,`code`),lO(841,`p-label`),wg(),lO(842,`.`),wg(),jc(843,`blockquote`)(844,`p`),lO(845,`Para mais informações acesse: `),jc(846,`a`,31),lO(847,`https://po-ui.io/documentation/po-helper`),wg(),lO(848,`.`),wg()(),jc(849,`blockquote`)(850,`p`),lO(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(852,`code`),lO(853,`p-additional-help-tooltip`),wg(),lO(854,` e `),jc(855,`code`),lO(856,`p-additional-help`),wg(),lO(857,`) será ignorado.`),wg()()()(),jc(858,`tr`,16)(859,`td`,17)(860,`div`,25)(861,`span`,26),lO(862,` p-readonly`),nu(863,`br`),wg()()(),jc(864,`td`,21)(865,`code`,28),lO(866,`boolean`),wg()(),jc(867,`td`,23)(868,`p`)(869,`code`),lO(870,`false`),wg()()(),jc(871,`td`,24)(872,`em`)(873,`strong`),lO(874,`(opcional)`),wg()(),jc(875,`p`),lO(876,`Indica que o campo será somente para leitura.`),wg()()(),jc(877,`tr`,16)(878,`td`,17)(879,`div`,25)(880,`span`,26),lO(881,` p-required`),nu(882,`br`),wg()()(),jc(883,`td`,21)(884,`code`,28),lO(885,`boolean`),wg()(),jc(886,`td`,23)(887,`p`)(888,`code`),lO(889,`false`),wg()()(),jc(890,`td`,24)(891,`em`)(892,`strong`),lO(893,`(opcional)`),wg()(),jc(894,`p`),lO(895,`Define que o campo será obrigatório.`),wg()()(),jc(896,`tr`,16)(897,`td`,17)(898,`div`,25)(899,`span`,26),lO(900,` p-show-required`),nu(901,`br`),wg()()(),jc(902,`td`,21)(903,`code`,28),lO(904,`boolean`),wg()(),jc(905,`td`,23),lO(906,`-`),wg(),jc(907,`td`,24)(908,`p`),lO(909,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(910,`blockquote`)(911,`p`),lO(912,`Não será exibida a indicação se:`),wg()(),jc(913,`ul`)(914,`li`),lO(915,`Não possuir `),jc(916,`code`),lO(917,`p-help`),wg(),lO(918,` e/ou `),jc(919,`code`),lO(920,`p-label`),wg(),lO(921,`.`),wg()()()(),jc(922,`tr`,16)(923,`td`,17)(924,`div`,25)(925,`span`,26),lO(926,` p-size`),nu(927,`br`),wg()()(),jc(928,`td`,21)(929,`code`,27),lO(930,`string`),wg()(),jc(931,`td`,23)(932,`p`)(933,`code`),lO(934,`medium`),wg()()(),jc(935,`td`,24)(936,`em`)(937,`strong`),lO(938,`(opcional)`),wg()(),jc(939,`p`),lO(940,`Define o tamanho do componente:`),wg(),jc(941,`ul`)(942,`li`)(943,`code`),lO(944,`small`),wg(),lO(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(946,`li`)(947,`code`),lO(948,`medium`),wg(),lO(949,`: altura do input como 44px.`),wg()(),jc(950,`blockquote`)(951,`p`),lO(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(953,`code`),lO(954,`medium`),wg(),lO(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(956,`a`,32),lO(957,`po-theme`),wg(),lO(958,`.`),wg()()()()(),jc(959,`h3`,12),lO(960,`Métodos`),wg(),jc(961,`table`,33)(962,`tr`,16)(963,`th`,34)(964,`div`,25)(965,`h4`)(966,`span`,26),lO(967,` focus `),wg()()()()(),jc(968,`tr`,24)(969,`td`,24)(970,`p`),lO(971,`Função que atribui foco ao componente.`),wg(),jc(972,`p`),lO(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(974,`pre`)(975,`code`),lO(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),wg()()()()(),nu(977,`br`),jc(978,`table`,33)(979,`tr`,16)(980,`th`,34)(981,`div`,25)(982,`h4`)(983,`span`,26),lO(984,` showAdditionalHelp `),wg()()()()(),jc(985,`tr`,24)(986,`td`,24)(987,`p`),lO(988,`Método que exibe `),jc(989,`code`),lO(990,`p-helper`),wg(),lO(991,` ou executa a ação definida em `),jc(992,`code`),lO(993,`p-helper{eventOnClick}`),wg(),lO(994,` ou em `),jc(995,`code`),lO(996,`p-additionalHelp`),wg(),lO(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(998,`code`),lO(999,`p-keydown`),wg(),lO(1e3,`.`),wg(),jc(1001,`blockquote`)(1002,`p`),lO(1003,`Exibe ou oculta o conteúdo do componente `),jc(1004,`code`),lO(1005,`po-helper`),wg(),lO(1006,` quando o componente estiver com foco.`),wg()(),jc(1007,`pre`)(1008,`code`),lO(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),wg()(),jc(1010,`pre`)(1011,`code`,35),lO(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1013,`br`),jc(1014,`h3`),lO(1015,`Interfaces`),wg(),jc(1016,`h4`,36)(1017,`code`,5),lO(1018,`PoSelectOptionGroup`),wg()(),jc(1019,`div`,2)(1020,`p`),lO(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),jc(1022,`code`),lO(1023,`PoSelectOption`),wg(),lO(1024,`.`),wg()(),jc(1025,`h4`,12),lO(1026,`Propriedades`),wg(),jc(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),lO(1030,`Nome`),wg(),jc(1031,`th`,15),lO(1032,`Tipo`),wg(),jc(1033,`th`,15),lO(1034,`Descrição`),wg()(),jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,25)(1038,`span`,26),lO(1039,` label`),nu(1040,`br`),wg()()(),jc(1041,`td`,21)(1042,`code`,27),lO(1043,`string`),wg()(),jc(1044,`td`,24)(1045,`p`),lO(1046,`Label para denominar o nome do grupo.`),wg()()(),jc(1047,`tr`,16)(1048,`td`,17)(1049,`div`,25)(1050,`span`,26),lO(1051,` options`),nu(1052,`br`),wg()()(),jc(1053,`td`,21)(1054,`code`,37),lO(1055,`Array<PoSelectOption>`),wg()(),jc(1056,`td`,24)(1057,`p`),lO(1058,`Lista com as opções disponíveis em cada grupo.`),wg()()()(),jc(1059,`h4`,36)(1060,`code`,5),lO(1061,`PoSelectOption`),wg()(),jc(1062,`div`,2)(1063,`p`),lO(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),wg()(),jc(1065,`h4`,12),lO(1066,`Propriedades`),wg(),jc(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),lO(1070,`Nome`),wg(),jc(1071,`th`,15),lO(1072,`Tipo`),wg(),jc(1073,`th`,15),lO(1074,`Descrição`),wg()(),jc(1075,`tr`,16)(1076,`td`,17)(1077,`div`,25)(1078,`span`,26),lO(1079,` label`),nu(1080,`br`),wg()()(),jc(1081,`td`,21)(1082,`code`,27),lO(1083,`string`),wg()(),jc(1084,`td`,24)(1085,`p`),lO(1086,`Label a ser utilizada nos itens da lista.`),wg()()(),jc(1087,`tr`,16)(1088,`td`,17)(1089,`div`,25)(1090,`span`,26),lO(1091,` value`),nu(1092,`br`),wg()()(),jc(1093,`td`,21)(1094,`code`,27),lO(1095,`string `),wg(),jc(1096,`code`,38),lO(1097,` number`),wg()(),jc(1098,`td`,24)(1099,`p`),lO(1100,`Valor do objeto que será atribuído ao model.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Qe(a,I){if(a&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-select-basic-view`)(2,`sample-po-select-labs-view`)(3,`sample-po-select-customer-registration-view`)(4,`sample-po-select-companies-view`),wg()}if(a&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Qe,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-select-doc`),wg()()()),p&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Vze,lre,ure,Ce,_e,we,Me,Oe],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Ye),I1]})}return a})();var Ft=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,De]})}return a})();export{Ft as DocPoSelectModule};
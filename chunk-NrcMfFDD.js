import{$ as R4,$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Hr as Me$1,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Sr as Ge$1,Ti as W0,U as Nf,Vi as _u,Yi as eF,an as j4,bi as Uk,ca as jk,da as kI,di as RZ,ea as ge,er as An,fi as Rb,fr as Db,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,pa as kk,qi as de,qr as NZ,rn as ia,ui as R,va as nk,vn as oi,wa as p,xi as VO,xr as Gb,ya as nm,yi as U_,zt as c4}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var ke=()=>({label:`Option 1`,value:`1`});var Ve=()=>({label:`Option 2`,value:`2`});var qe=(a,I)=>[a,I];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`p-options`]],template:function(p,i){p&1&&_u(0,`po-select`,0),p&2&&Rb(`p-options`,Uk(3,qe,jk(1,ke),jk(2,Ve)))},dependencies:[Koe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Select Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-select-basic/sample-po-select-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-select-basic/sample-po-select-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-select-basic`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ge,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{cdr=p(Ge$1);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`readonly`,label:`Read Only`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.select=``,this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size=`medium`}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:c,value:d}=p;if(i){let o=r.findIndex(ne=>ne.label===i&&`options`in ne);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:c,value:d}]}]):(r[o].options.push({label:c,value:d}),r)}return[...r,{label:c,value:d}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-labs`]],standalone:!1,decls:33,vars:37,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`select`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-options`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po select options group`],[`name`,`selectOptionGroupSwitch`,`p-label`,`Select options group`,1,`po-lg-2`,`po-md-12`,3,`p-change`,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po select options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-lg-3`,`po-md-6`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(p,i){if(p&1){let c=ZO();Jc(0,`po-select`,2),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.select,o)||(i.select=o),H_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0),_u(8,`po-divider`,6),Jc(9,`div`,3)(10,`po-switch`,7),W0(),vt(`p-change`,function(o){return i.restoreSwitch(o)}),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),H_(o)}),Zg(),Jc(11,`po-select`,8),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),H_(o)}),vt(`p-change`,function(){return i.optionsGroupSelection()}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.optionsGroup,o)||(i.optionsGroup=o),H_(o)}),Zg()(),_u(13,`po-divider`,10),Jc(14,`div`,3)(15,`po-input`,11),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.option.label,o)||(i.option.label=o),H_(o)}),Zg(),Jc(16,`po-input`,12),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.option.value,o)||(i.option.value=o),H_(o)}),Zg()(),Jc(17,`div`,3)(18,`po-button`,13),vt(`p-click`,function(){return i.addOption()}),Zg()()(),_u(19,`po-divider`),Jc(20,`form`,null,1)(22,`po-input`,14),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.label,o)||(i.label=o),H_(o)}),Zg(),Jc(23,`po-input`,15),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.help,o)||(i.help=o),H_(o)}),Zg(),Jc(24,`po-input`,16),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.helperText,o)||(i.helperText=o),H_(o)}),Zg(),Jc(25,`po-input`,17),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.placeholder,o)||(i.placeholder=o),H_(o)}),Zg(),Jc(26,`po-input`,18),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),H_(o)}),Zg(),Jc(27,`po-checkbox-group`,19),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.properties,o)||(i.properties=o),H_(o)}),Zg(),Jc(28,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.size,o)||(i.size=o),H_(o)}),Zg(),Jc(29,`div`,3)(30,`div`,21)(31,`po-button`,22),vt(`p-click`,function(){return i.restore()}),Zg()()(),_u(32,`form`),Zg()}if(p&2){let c=sk(7);Yb(`ngModel`,i.select),Rb(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-options`,i.options)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),Y0(),Ig(3),Rb(`p-value`,i.select),Ig(),Rb(`p-value`,i.event),Ig(6),Yb(`ngModel`,i.selectOptionGroupSwitch),Y0(),Ig(),Yb(`ngModel`,i.selectedOptionsGroup),Rb(`p-disabled`,!i.selectOptionGroupSwitch)(`p-options`,i.optionsGroupList),Y0(),Ig(),Yb(`ngModel`,i.optionsGroup),Rb(`p-disabled`,!i.selectOptionGroupSwitch),Y0(),Ig(3),Yb(`ngModel`,i.option.label),Y0(),Ig(),Yb(`ngModel`,i.option.value),Y0(),Ig(2),Rb(`p-disabled`,c.invalid),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Select Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-select-labs/sample-po-select-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-select
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-select-labs/sample-po-select-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-select-labs`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var te=(()=>{class a{http=p(kI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function Ne(a,I){if(a&1&&(Jc(0,`div`,17),_u(1,`po-avatar`,18),Jc(2,`div`,19)(3,`div`,20),Tk(4),Zg(),Jc(5,`div`,21),Tk(6),Zg()()()),a&2){let r=I.$implicit;Ig(),Rb(`p-src`,kk(`https://po-sample-api.onrender.com/v1/sampleSelect/`,r.value,`.png`)),Ig(3),Gb(r.label),Ig(2),Gb(r.value)}}var Pe=(()=>{class a{sampleService=p(te);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:`CPF`,value:`CPF`},{label:`CNPJ`,value:`CNPJ`}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r===`CPF`?(this.documentLabel=`CPF Number`,this.mask=`999.999.999-99`,this.minLength=14,this.nameLabel=`Client Name`):(this.documentLabel=`CNPJ Number`,this.mask=`99.999.999/9999-99`,this.minLength=18,this.nameLabel=`Company Name`),this.address=``,this.document=``,this.name=``}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType=`CPF`}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:``}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:``}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state=`sp`,this.getCitiesByState(this.state)})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-customer-registration`]],standalone:!1,features:[Me$1([te])],decls:27,vars:22,consts:[[`f`,`ngForm`],[`modal`,``],[1,`po-row`],[`name`,`documentType`,`p-label`,`Document type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`document`,`p-mask-format-model`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`,`p-mask`,`p-minlength`],[`name`,`name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-label`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-select-option-template`,``],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Send Informations`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Informations`],[`p-label`,`Document type`,1,`po-md-6`,3,`p-value`],[1,`po-md-6`,3,`p-label`,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`State`,1,`po-md-6`,3,`p-value`],[`p-label`,`City`,1,`po-md-6`,3,`p-value`],[1,`sample-select-option-template-container`],[`p-size`,`xs`,3,`p-src`],[1,`sample-select-option-template-margin`],[1,`sample-select-option-template-label`],[1,`sample-select-option-template-value`]],template:function(p,i){if(p&1){let c=ZO();Jc(0,`form`,null,0)(2,`div`,2)(3,`po-radio-group`,3),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.documentType,o)||(i.documentType=o),H_(o)}),vt(`p-change`,function(o){return i.changeType(o)}),Zg(),Jc(4,`po-input`,4),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.document,o)||(i.document=o),H_(o)}),Zg()(),Jc(5,`div`,2)(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.name,o)||(i.name=o),H_(o)}),Zg(),Jc(7,`po-input`,6),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.address,o)||(i.address=o),H_(o)}),Zg()(),Jc(8,`div`,2)(9,`po-select`,7),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.state,o)||(i.state=o),H_(o)}),vt(`p-change`,function(){return i.onChangeState()}),Db(10,Ne,7,4,`ng-template`,8),Zg(),Jc(11,`po-select`,9),W0(),Kb(`ngModelChange`,function(o){return U_(c),Ak(i.city,o)||(i.city=o),H_(o)}),Zg()(),Jc(12,`div`,2)(13,`po-button`,10),vt(`p-click`,function(){U_(c);let o=sk(15);return H_(o.open())}),Zg()()(),Jc(14,`po-modal`,11,1)(16,`div`,2),_u(17,`po-info`,12)(18,`po-info`,13),Zg(),_u(19,`po-divider`),Jc(20,`div`,2),_u(21,`po-info`,13)(22,`po-info`,14),Zg(),_u(23,`po-divider`),Jc(24,`div`,2),_u(25,`po-info`,15)(26,`po-info`,16),Zg()()}if(p&2){let c=sk(1);Ig(3),Yb(`ngModel`,i.documentType),Rb(`p-options`,i.options),Y0(),Ig(),Yb(`ngModel`,i.document),Rb(`p-label`,i.documentLabel)(`p-mask`,i.mask)(`p-minlength`,i.minLength),Y0(),Ig(2),Yb(`ngModel`,i.name),Rb(`p-label`,i.nameLabel),Y0(),Ig(),Yb(`ngModel`,i.address),Y0(),Ig(2),Yb(`ngModel`,i.state),Rb(`p-options`,i.stateOptions),Y0(),Ig(2),Yb(`ngModel`,i.city),Rb(`p-options`,i.cityOptions),Y0(),Ig(2),Rb(`p-disabled`,c.invalid),Ig(4),Rb(`p-value`,i.documentType),Ig(),Rb(`p-label`,i.documentLabel)(`p-value`,i.document),Ig(3),Rb(`p-label`,i.nameLabel)(`p-value`,i.name),Ig(),Rb(`p-value`,i.address),Ig(3),Rb(`p-value`,i.getStateByValue(i.state)),Ig(),Rb(`p-value`,i.getCityByValue(i.city))}},dependencies:[NZ,TZ,RZ,JL,qL,c4,oi,Nf,j4,Zte,Koe,Joe,ia],styles:[`.sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}`],changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-customer-registration-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Select - Customer registration`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #f="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-select-customer-registration/sample-po-select-customer-registration.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`.sample-select-option-template-container {
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
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-select-customer-registration`),Zg(),_u(33,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,je,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{select;fieldLabel=`nomeFantasia`;fieldValue=`cnpj`;empresas=[{codigo:`1`,nomeFantasia:`TOTVS SA`,razaoSocial:`TOTVS LTDA`,label:`TOTVS COMPANY`,cnpj:`01.234.567/0000-01`,value:`100`,id:`10`,email:`totvscompany@sample.com`,data:`10/03/2015`,origem:`São Paulo`},{codigo:`2`,nomeFantasia:`INSTITUTO TOTVS DE ENSINO SA`,razaoSocial:`INST TOTVS DE ENSINO LTDA`,label:`INST TOTVS`,cnpj:`02.345.678/0000-02`,value:`200`,id:`20`,email:`insttotvs@sample.com`,data:`10/10/2020`,origem:`Joinville`},{codigo:`3`,nomeFantasia:`TOTVS ENTERPRISE SA`,razaoSocial:`TOTVS ENTERPRISE LTDA `,label:`ENT TOTVS`,cnpj:`03.456.789/0000-03`,value:`300`,id:`30`,email:`enttotvs@sample.com`,data:`10/01/2022`,origem:`Curitiba`}];labels=[{label:`Dados`,options:[{label:`nomeFantasia`,value:`nomeFantasia`},{label:`razaoSocial`,value:`razaoSocial`},{label:`email`,value:`email`}]},{label:`Cidade`,options:[{label:`origem`,value:`origem`}]}];values=[{label:`codigo`,value:`codigo`},{label:`cnpj`,value:`cnpj`},{label:`id`,value:`id`},{label:`data`,value:`data`}];onChange(r){this.select=void 0}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-companies`]],standalone:!1,decls:5,vars:9,consts:[[`name`,`select`,`p-label`,`PO Select`,3,`ngModelChange`,`ngModel`,`p-field-value`,`p-field-label`,`p-options`],[`p-label`,`Model`,`name`,`selectInfo`,3,`p-valueChange`,`p-value`],[1,`po-row`],[`name`,`fieldLabel`,`p-label`,`p-field-label`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`],[`name`,`selectValue`,`p-label`,`p-field-value`,1,`po-md-6`,3,`p-change`,`ngModelChange`,`p-options`,`ngModel`]],template:function(p,i){p&1&&(Jc(0,`po-select`,0),W0(),Kb(`ngModelChange`,function(d){return Ak(i.select,d)||(i.select=d),d}),Zg(),Jc(1,`po-info`,1),Kb(`p-valueChange`,function(d){return Ak(i.select,d)||(i.select=d),d}),Zg(),Jc(2,`div`,2)(3,`po-select`,3),W0(),vt(`p-change`,function(d){return i.onChange(d)}),Kb(`ngModelChange`,function(d){return Ak(i.fieldLabel,d)||(i.fieldLabel=d),d}),Zg(),Jc(4,`po-select`,4),W0(),vt(`p-change`,function(d){return i.onChange(d)}),Kb(`ngModelChange`,function(d){return Ak(i.fieldValue,d)||(i.fieldValue=d),d}),Zg()()),p&2&&(Yb(`ngModel`,i.select),Rb(`p-field-value`,i.fieldValue)(`p-field-label`,i.fieldLabel)(`p-options`,i.empresas),Y0(),Ig(),Yb(`p-value`,i.select),Ig(2),Rb(`p-options`,i.labels),Yb(`ngModel`,i.fieldLabel),Y0(),Ig(),Rb(`p-options`,i.values),Yb(`ngModel`,i.fieldValue),Y0())},dependencies:[TZ,JL,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-companies-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,i){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Select Companies`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-select-companies/sample-po-select-companies.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-select
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-select-companies/sample-po-select-companies.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-select-companies`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Je,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Te],encapsulation:2,changeDetection:1})}return a})();var Oe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-select-doc`]],standalone:!1,decls:1101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo-option-template`],[`href`,`/documentation/po-select-option-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(p,i){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoSelectComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),Zg(),Jc(24,`blockquote`)(25,`p`),Tk(26,`Ao passar um valor para o `),Jc(27,`em`),Tk(28,`model`),Zg(),Tk(29,` que não está na lista de opções, o mesmo será definido como `),Jc(30,`code`),Tk(31,`undefined`),Zg(),Tk(32,`.`),Zg()(),Jc(33,`p`),Tk(34,`Também existe a possibilidade de utilizar um `),Jc(35,`em`),Tk(36,`template`),Zg(),Tk(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Jc(38,`strong`)(39,`a`,6),Tk(40,`p-combo-option-template`),Zg()(),Tk(41,`.`),Zg(),Jc(42,`blockquote`)(43,`p`),Tk(44,`Obs: o template `),Jc(45,`strong`)(46,`a`,7),Tk(47,`p-select-option-template`),Zg()(),Tk(48,` será depreciado na versão 14.x.x.`),Zg()(),Jc(49,`h4`),Tk(50,`Tokens customizáveis`),Zg(),Jc(51,`p`),Tk(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(53,`blockquote`)(54,`p`),Tk(55,`Para maiores informações, acesse o guia `),Jc(56,`a`,8),Tk(57,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(58,`.`),Zg()(),Jc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),Tk(63,`Propriedade`),Zg(),Jc(64,`th`),Tk(65,`Descrição`),Zg(),Jc(66,`th`),Tk(67,`Valor Padrão`),Zg()()(),Jc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),Tk(72,`Default Values`),Zg()(),_u(73,`td`)(74,`td`),Zg(),Jc(75,`tr`)(76,`td`)(77,`code`),Tk(78,`--font-family`),Zg()(),Jc(79,`td`),Tk(80,`Família tipográfica usada`),Zg(),Jc(81,`td`)(82,`code`),Tk(83,`var(--font-family-theme)`),Zg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Tk(87,`--font-size`),Zg()(),Jc(88,`td`),Tk(89,`Tamanho da fonte`),Zg(),Jc(90,`td`)(91,`code`),Tk(92,`var(--font-size-default)`),Zg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Tk(96,`--text-color-empty`),Zg()(),Jc(97,`td`),Tk(98,`Cor do placeholder`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--color-neutral-light-30)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Tk(105,`--color`),Zg()(),Jc(106,`td`),Tk(107,`Cor da borda`),Zg(),Jc(108,`td`)(109,`code`),Tk(110,`var(--color-neutral-dark-70)`),Zg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Tk(114,`--background`),Zg()(),Jc(115,`td`),Tk(116,`Cor de background`),Zg(),Jc(117,`td`)(118,`code`),Tk(119,`var(--color-neutral-light-05)`),Zg()()(),Jc(120,`tr`)(121,`td`)(122,`code`),Tk(123,`--text-color`),Zg()(),Jc(124,`td`),Tk(125,`Cor do texto`),Zg(),Jc(126,`td`)(127,`code`),Tk(128,`var(--color-neutral-dark-90)`),Zg()()(),Jc(129,`tr`)(130,`td`)(131,`code`),Tk(132,`--padding-horizontal`),Zg()(),Jc(133,`td`),Tk(134,`Preenchimento horizontal`),Zg(),Jc(135,`td`)(136,`code`),Tk(137,`0.5em`),Zg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Tk(141,`--padding-vertical`),Zg()(),Jc(142,`td`),Tk(143,`Preenchimento vertical`),Zg(),Jc(144,`td`)(145,`code`),Tk(146,`0.7em`),Zg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Tk(150,`--field-container-title-justify`),Zg()(),Jc(151,`td`),Tk(152,`Alinhamento horizontal do título (`),Jc(153,`code`),Tk(154,`justify-content`),Zg(),Tk(155,`)`),Zg(),Jc(156,`td`)(157,`code`),Tk(158,`space-between`),Zg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Tk(162,`--field-container-title-flex`),Zg()(),Jc(163,`td`),Tk(164,`Flex do título (`),Jc(165,`code`),Tk(166,`flex`),Zg(),Tk(167,`)`),Zg(),Jc(168,`td`)(169,`code`),Tk(170,`1 auto`),Zg()()(),Jc(171,`tr`)(172,`td`)(173,`strong`),Tk(174,`Hover`),Zg()(),_u(175,`td`)(176,`td`),Zg(),Jc(177,`tr`)(178,`td`)(179,`code`),Tk(180,`--color-hover`),Zg()(),Jc(181,`td`),Tk(182,`Cor principal no estado hover`),Zg(),Jc(183,`td`)(184,`code`),Tk(185,`var(--color-brand-01-dark)`),Zg()()(),Jc(186,`tr`)(187,`td`)(188,`code`),Tk(189,`--background-hover`),Zg()(),Jc(190,`td`),Tk(191,`Cor de background no estado hover`),Zg(),Jc(192,`td`)(193,`code`),Tk(194,`var(--color-brand-01-lighter)`),Zg()()(),Jc(195,`tr`)(196,`td`)(197,`strong`),Tk(198,`Focused`),Zg()(),_u(199,`td`)(200,`td`),Zg(),Jc(201,`tr`)(202,`td`)(203,`code`),Tk(204,`--outline-color-focused`),Zg()(),Jc(205,`td`),Tk(206,`Cor do outline do estado de focus`),Zg(),Jc(207,`td`)(208,`code`),Tk(209,`var(--color-action-focus)`),Zg()()(),Jc(210,`tr`)(211,`td`)(212,`code`),Tk(213,`--color-focused`),Zg()(),Jc(214,`td`),Tk(215,`Cor da borda no estado de focus`),Zg(),Jc(216,`td`)(217,`code`),Tk(218,`var(--color-action-default)`),Zg()()(),Jc(219,`tr`)(220,`td`)(221,`strong`),Tk(222,`Disabled`),Zg()(),_u(223,`td`)(224,`td`),Zg(),Jc(225,`tr`)(226,`td`)(227,`code`),Tk(228,`--color-disabled`),Zg()(),Jc(229,`td`),Tk(230,`Cor principal no estado disabled`),Zg(),Jc(231,`td`)(232,`code`),Tk(233,`var(--color-neutral-light-30)`),Zg()()(),Jc(234,`tr`)(235,`td`)(236,`code`),Tk(237,`--background-color-disabled`),Zg(),Tk(238,`\xA0`),Zg(),Jc(239,`td`),Tk(240,`Cor de background no estado disabled`),Zg(),Jc(241,`td`)(242,`code`),Tk(243,`var(--color-neutral-light-20)`),Zg()()()()()(),Jc(244,`div`,9)(245,`h4`,10),Tk(246,`Seletor`),Zg(),Jc(247,`pre`,11),Tk(248,`<po-select
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
`),Zg()(),Jc(249,`h4`,12),Tk(250,`Propriedades`),Zg(),Jc(251,`table`,13)(252,`tr`,14)(253,`th`,15),Tk(254,`Nome`),Zg(),Jc(255,`th`,15),Tk(256,`Tipo`),Zg(),Jc(257,`th`,15),Tk(258,`Padrão`),Zg(),Jc(259,`th`,15),Tk(260,`Descrição`),Zg()(),Jc(261,`tr`,16)(262,`td`,17)(263,`div`,18)(264,`span`,19),Tk(265,` (p-additional-help)`),_u(266,`br`),Zg()(),Jc(267,`div`,20),Tk(268,`Deprecated`),Zg()(),Jc(269,`td`,21)(270,`code`,22),Tk(271,`EventEmitter`),Zg()(),Jc(272,`td`,23),Tk(273,`-`),Zg(),Jc(274,`td`,24)(275,`em`)(276,`strong`),Tk(277,`(opcional)`),Zg()(),Jc(278,`p`),Tk(279,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(280,`blockquote`)(281,`p`),Tk(282,`Essa propriedade está `),Jc(283,`strong`),Tk(284,`depreciada`),Zg(),Tk(285,` e será removida na versão `),Jc(286,`code`),Tk(287,`23.x.x`),Zg(),Tk(288,`. Recomendamos utilizar a propriedade `),Jc(289,`code`),Tk(290,`p-helper`),Zg(),Tk(291,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(292,`tr`,16)(293,`td`,17)(294,`div`,25)(295,`span`,26),Tk(296,` p-additional-help-tooltip`),_u(297,`br`),Zg()(),Jc(298,`div`,20),Tk(299,`Deprecated`),Zg()(),Jc(300,`td`,21)(301,`code`,27),Tk(302,`string`),Zg()(),Jc(303,`td`,23),Tk(304,`-`),Zg(),Jc(305,`td`,24)(306,`em`)(307,`strong`),Tk(308,`(opcional)`),Zg()(),Jc(309,`p`),Tk(310,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(311,`code`),Tk(312,`po-helper`),Zg(),Tk(313,`.
`),Jc(314,`strong`),Tk(315,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(316,`blockquote`)(317,`p`),Tk(318,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(319,`blockquote`)(320,`p`),Tk(321,`Essa propriedade está `),Jc(322,`strong`),Tk(323,`depreciada`),Zg(),Tk(324,` e será removida na versão `),Jc(325,`code`),Tk(326,`23.x.x`),Zg(),Tk(327,`. Recomendamos utilizar a propriedade `),Jc(328,`code`),Tk(329,`p-helper`),Zg(),Tk(330,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(331,`tr`,16)(332,`td`,17)(333,`div`,25)(334,`span`,26),Tk(335,` p-append-in-body`),_u(336,`br`),Zg()()(),Jc(337,`td`,21)(338,`code`,28),Tk(339,`boolean`),Zg()(),Jc(340,`td`,23)(341,`p`)(342,`code`),Tk(343,`false`),Zg()()(),Jc(344,`td`,24)(345,`em`)(346,`strong`),Tk(347,`(opcional)`),Zg()(),Jc(348,`p`),Tk(349,`Define que o popover (`),Jc(350,`code`),Tk(351,`p-helper`),Zg(),Tk(352,` e/ou `),Jc(353,`code`),Tk(354,`p-error-limit`),Zg(),Tk(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(356,`blockquote`)(357,`p`),Tk(358,`Quando utilizado com `),Jc(359,`code`),Tk(360,`p-helper`),Zg(),Tk(361,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(362,`tr`,16)(363,`td`,17)(364,`div`,18)(365,`span`,19),Tk(366,` (p-blur)`),_u(367,`br`),Zg()()(),Jc(368,`td`,21)(369,`code`,22),Tk(370,`EventEmitter`),Zg()(),Jc(371,`td`,23),Tk(372,`-`),Zg(),Jc(373,`td`,24)(374,`em`)(375,`strong`),Tk(376,`(opcional)`),Zg()(),Jc(377,`p`),Tk(378,`Evento disparado ao sair do campo.`),Zg()()(),Jc(379,`tr`,16)(380,`td`,17)(381,`div`,18)(382,`span`,19),Tk(383,` (p-change)`),_u(384,`br`),Zg()()(),Jc(385,`td`,21)(386,`code`,22),Tk(387,`EventEmitter`),Zg()(),Jc(388,`td`,23),Tk(389,`-`),Zg(),Jc(390,`td`,24)(391,`em`)(392,`strong`),Tk(393,`(opcional)`),Zg()(),Jc(394,`p`),Tk(395,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(396,`tr`,16)(397,`td`,17)(398,`div`,18)(399,`span`,19),Tk(400,` (p-change-model)`),_u(401,`br`),Zg()()(),Jc(402,`td`,21)(403,`code`,22),Tk(404,`EventEmitter`),Zg()(),Jc(405,`td`,23),Tk(406,`-`),Zg(),Jc(407,`td`,24)(408,`em`)(409,`strong`),Tk(410,`(opcional)`),Zg()(),Jc(411,`p`),Tk(412,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(413,`code`),Tk(414,`setValue`),Zg(),Tk(415,`, `),Jc(416,`code`),Tk(417,`patchValue`),Zg(),Tk(418,`, carregamento assíncrono).`),Zg(),Jc(419,`p`),Tk(420,`Diferentemente do `),Jc(421,`code`),Tk(422,`p-change`),Zg(),Tk(423,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(424,`code`),Tk(425,`p-change-model`),Zg(),Tk(426,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(427,`p`),Tk(428,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(429,`tr`,16)(430,`td`,17)(431,`div`,25)(432,`span`,26),Tk(433,` p-compact-label`),_u(434,`br`),Zg()()(),Jc(435,`td`,21)(436,`code`,28),Tk(437,`boolean`),Zg()(),Jc(438,`td`,23)(439,`p`)(440,`code`),Tk(441,`false`),Zg()()(),Jc(442,`td`,24)(443,`em`)(444,`strong`),Tk(445,`(opcional)`),Zg()(),Jc(446,`p`),Tk(447,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(448,`p`),Tk(449,`Quando habilitado (`),Jc(450,`code`),Tk(451,`true`),Zg(),Tk(452,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(453,`ul`)(454,`li`)(455,`code`),Tk(456,`po-label`),Zg()(),Jc(457,`li`)(458,`code`),Tk(459,`p-requirement (showRequired)`),Zg()(),Jc(460,`li`)(461,`code`),Tk(462,`po-helper`),Zg()()(),Jc(463,`p`),Tk(464,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(465,`p`),Tk(466,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(467,`ul`)(468,`li`)(469,`code`),Tk(470,`--field-container-title-justify`),Zg()(),Jc(471,`li`)(472,`code`),Tk(473,`--field-container-title-flex`),Zg()()(),Jc(474,`p`),Tk(475,`Exemplo:`),Zg(),Jc(476,`pre`)(477,`code`),Tk(478,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(479,`p`),Tk(480,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(481,`tr`,16)(482,`td`,17)(483,`div`,25)(484,`span`,26),Tk(485,` p-disabled`),_u(486,`br`),Zg()()(),Jc(487,`td`,21)(488,`code`,28),Tk(489,`boolean`),Zg()(),Jc(490,`td`,23)(491,`p`)(492,`code`),Tk(493,`false`),Zg()()(),Jc(494,`td`,24)(495,`em`)(496,`strong`),Tk(497,`(opcional)`),Zg()(),Jc(498,`p`),Tk(499,`Indica se o campo será desabilitado.`),Zg()()(),Jc(500,`tr`,16)(501,`td`,17)(502,`div`,25)(503,`span`,26),Tk(504,` p-error-limit`),_u(505,`br`),Zg()()(),Jc(506,`td`,21)(507,`code`,28),Tk(508,`boolean`),Zg()(),Jc(509,`td`,23)(510,`p`)(511,`code`),Tk(512,`false`),Zg()()(),Jc(513,`td`,24)(514,`em`)(515,`strong`),Tk(516,`(opcional)`),Zg()(),Jc(517,`p`),Tk(518,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(519,`blockquote`)(520,`p`),Tk(521,`Caso essa propriedade seja definida como `),Jc(522,`code`),Tk(523,`true`),Zg(),Tk(524,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(525,`tr`,16)(526,`td`,17)(527,`div`,25)(528,`span`,26),Tk(529,` p-field-error-message`),_u(530,`br`),Zg()()(),Jc(531,`td`,21)(532,`code`,27),Tk(533,`string`),Zg()(),Jc(534,`td`,23),Tk(535,`-`),Zg(),Jc(536,`td`,24)(537,`em`)(538,`strong`),Tk(539,`(opcional)`),Zg()(),Jc(540,`p`),Tk(541,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(542,`blockquote`)(543,`p`),Tk(544,`Necessário que a propriedade `),Jc(545,`code`),Tk(546,`p-required`),Zg(),Tk(547,` esteja habilitada.`),Zg()()()(),Jc(548,`tr`,16)(549,`td`,17)(550,`div`,25)(551,`span`,26),Tk(552,` p-field-label`),_u(553,`br`),Zg()()(),Jc(554,`td`,21)(555,`code`,27),Tk(556,`string`),Zg()(),Jc(557,`td`,23)(558,`p`)(559,`code`),Tk(560,`label`),Zg()()(),Jc(561,`td`,24)(562,`em`)(563,`strong`),Tk(564,`(opcional)`),Zg()(),Jc(565,`p`),Tk(566,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(567,`code`),Tk(568,`p-options`),Zg(),Tk(569,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Zg()()(),Jc(570,`tr`,16)(571,`td`,17)(572,`div`,25)(573,`span`,26),Tk(574,` p-field-value`),_u(575,`br`),Zg()()(),Jc(576,`td`,21)(577,`code`,27),Tk(578,`string`),Zg()(),Jc(579,`td`,23)(580,`p`)(581,`code`),Tk(582,`value`),Zg()()(),Jc(583,`td`,24)(584,`em`)(585,`strong`),Tk(586,`(opcional)`),Zg()(),Jc(587,`p`),Tk(588,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(589,`code`),Tk(590,`p-options`),Zg(),Tk(591,`), esta propriedade será responsável pelo valor de cada item da lista.`),Zg()()(),Jc(592,`tr`,16)(593,`td`,17)(594,`div`,25)(595,`span`,26),Tk(596,` p-help`),_u(597,`br`),Zg()()(),Jc(598,`td`,21)(599,`code`,27),Tk(600,`string`),Zg()(),Jc(601,`td`,23),Tk(602,`-`),Zg(),Jc(603,`td`,24)(604,`p`),Tk(605,`Texto de apoio para o campo.`),Zg()()(),Jc(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),Tk(610,` (p-keydown)`),_u(611,`br`),Zg()()(),Jc(612,`td`,21)(613,`code`,22),Tk(614,`EventEmitter`),Zg()(),Jc(615,`td`,23),Tk(616,`-`),Zg(),Jc(617,`td`,24)(618,`em`)(619,`strong`),Tk(620,`(opcional)`),Zg()(),Jc(621,`p`),Tk(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(623,`code`),Tk(624,`KeyboardEvent`),Zg(),Tk(625,` com informações sobre a tecla.`),Zg()()(),Jc(626,`tr`,16)(627,`td`,17)(628,`div`,25)(629,`span`,26),Tk(630,` p-label`),_u(631,`br`),Zg()()(),Jc(632,`td`,21)(633,`code`,27),Tk(634,`string`),Zg()(),Jc(635,`td`,23),Tk(636,`-`),Zg(),Jc(637,`td`,24)(638,`p`),Tk(639,`Rótulo exibido pelo componente.`),Zg()()(),Jc(640,`tr`,16)(641,`td`,17)(642,`div`,25)(643,`span`,26),Tk(644,` p-label-text-wrap`),_u(645,`br`),Zg()()(),Jc(646,`td`,21)(647,`code`,28),Tk(648,`boolean`),Zg()(),Jc(649,`td`,23)(650,`p`)(651,`code`),Tk(652,`false`),Zg()()(),Jc(653,`td`,24)(654,`em`)(655,`strong`),Tk(656,`(opcional)`),Zg()(),Jc(657,`p`),Tk(658,`Habilita a quebra automática do texto da propriedade `),Jc(659,`code`),Tk(660,`p-label`),Zg(),Tk(661,`. Quando `),Jc(662,`code`),Tk(663,`p-label-text-wrap`),Zg(),Tk(664,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(665,`tr`,16)(666,`td`,17)(667,`div`,25)(668,`span`,26),Tk(669,` p-loading`),_u(670,`br`),Zg()()(),Jc(671,`td`,21)(672,`code`,28),Tk(673,`boolean`),Zg()(),Jc(674,`td`,23)(675,`p`)(676,`code`),Tk(677,`false`),Zg()()(),Jc(678,`td`,24)(679,`em`)(680,`strong`),Tk(681,`(opcional)`),Zg()(),Jc(682,`p`),Tk(683,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(684,`tr`,16)(685,`td`,17)(686,`div`,25)(687,`span`,26),Tk(688,` name`),_u(689,`br`),Zg()()(),Jc(690,`td`,21)(691,`code`,27),Tk(692,`string`),Zg()(),Jc(693,`td`,23),Tk(694,`-`),Zg(),Jc(695,`td`,24)(696,`p`),Tk(697,`Nome do componente.`),Zg()()(),Jc(698,`tr`,16)(699,`td`,17)(700,`div`,18)(701,`span`,19),Tk(702,` (ngModelChange)`),_u(703,`br`),Zg()()(),Jc(704,`td`,21)(705,`code`,22),Tk(706,`EventEmitter`),Zg()(),Jc(707,`td`,23),Tk(708,`-`),Zg(),Jc(709,`td`,24)(710,`em`)(711,`strong`),Tk(712,`(opcional)`),Zg()(),Jc(713,`p`),Tk(714,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Zg(),Jc(715,`p`),Tk(716,`Na versão 12.2.0 do Angular a verificação `),Jc(717,`code`),Tk(718,`strictTemplates`),Zg(),Tk(719,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Zg(),Jc(720,`pre`)(721,`code`),Tk(722,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),Zg()()()(),Jc(723,`tr`,16)(724,`td`,17)(725,`div`,25)(726,`span`,26),Tk(727,` p-optional`),_u(728,`br`),Zg()()(),Jc(729,`td`,21)(730,`code`,28),Tk(731,`boolean`),Zg()(),Jc(732,`td`,23)(733,`p`)(734,`code`),Tk(735,`false`),Zg()()(),Jc(736,`td`,24)(737,`em`)(738,`strong`),Tk(739,`(opcional)`),Zg()(),Jc(740,`p`),Tk(741,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(742,`blockquote`)(743,`p`),Tk(744,`Não será exibida a indicação se:`),Zg()(),Jc(745,`ul`)(746,`li`),Tk(747,`O campo conter `),Jc(748,`code`),Tk(749,`p-required`),Zg(),Tk(750,`;`),Zg(),Jc(751,`li`),Tk(752,`Não possuir `),Jc(753,`code`),Tk(754,`p-help`),Zg(),Tk(755,` e/ou `),Jc(756,`code`),Tk(757,`p-label`),Zg(),Tk(758,`.`),Zg()()()(),Jc(759,`tr`,16)(760,`td`,17)(761,`div`,25)(762,`span`,26),Tk(763,` p-options`),_u(764,`br`),Zg()()(),Jc(765,`td`,21)(766,`code`,29),Tk(767,`any[]`),Zg()(),Jc(768,`td`,23),Tk(769,`-`),Zg(),Jc(770,`td`,24)(771,`p`),Tk(772,`Nesta propriedade deve ser definido uma coleção de objetos que implementam a interface `),Jc(773,`code`),Tk(774,`PoSelectOption`),Zg(),Tk(775,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Jc(776,`code`),Tk(777,`PoSelectOptionGroup`),Zg(),Tk(778,`.`),Zg(),Jc(779,`p`),Tk(780,`Caso esta lista estiver vazia, o model será `),Jc(781,`code`),Tk(782,`undefined`),Zg(),Tk(783,`.`),Zg(),Jc(784,`blockquote`)(785,`p`),Tk(786,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),Zg()(),Jc(787,`pre`)(788,`code`),Tk(789,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),Zg()(),Jc(790,`blockquote`)(791,`p`),Tk(792,`Para coleção de objetos dentro de grupos distintos será exibido a label e opções somente se a propriedade `),Jc(793,`code`),Tk(794,`options`),Zg(),Tk(795,` possua valores. Sendo assim, a estrutura seguiria dessa forma:`),Zg()(),Jc(796,`pre`)(797,`code`),Tk(798,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),Zg()(),Jc(799,`p`),Tk(800,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),Zg()()(),Jc(801,`tr`,16)(802,`td`,17)(803,`div`,25)(804,`span`,26),Tk(805,` p-placeholder`),_u(806,`br`),Zg()()(),Jc(807,`td`,21)(808,`code`,27),Tk(809,`string`),Zg()(),Jc(810,`td`,23),Tk(811,`-`),Zg(),Jc(812,`td`,24)(813,`em`)(814,`strong`),Tk(815,`(opcional)`),Zg()(),Jc(816,`p`),Tk(817,`Mensagem que aparecerá enquanto nenhuma opção estiver selecionada.`),Zg()()(),Jc(818,`tr`,16)(819,`td`,17)(820,`div`,25)(821,`span`,26),Tk(822,` p-helper`),_u(823,`br`),Zg()()(),Jc(824,`td`,21)(825,`code`,30),Tk(826,`PoHelperOptions `),Zg(),Jc(827,`code`,27),Tk(828,` string`),Zg()(),Jc(829,`td`,23),Tk(830,`-`),Zg(),Jc(831,`td`,24)(832,`em`)(833,`strong`),Tk(834,`(opcional)`),Zg()(),Jc(835,`p`),Tk(836,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(837,`code`),Tk(838,`p-label`),Zg(),Tk(839,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(840,`code`),Tk(841,`p-label`),Zg(),Tk(842,`.`),Zg(),Jc(843,`blockquote`)(844,`p`),Tk(845,`Para mais informações acesse: `),Jc(846,`a`,31),Tk(847,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(848,`.`),Zg()(),Jc(849,`blockquote`)(850,`p`),Tk(851,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(852,`code`),Tk(853,`p-additional-help-tooltip`),Zg(),Tk(854,` e `),Jc(855,`code`),Tk(856,`p-additional-help`),Zg(),Tk(857,`) será ignorado.`),Zg()()()(),Jc(858,`tr`,16)(859,`td`,17)(860,`div`,25)(861,`span`,26),Tk(862,` p-readonly`),_u(863,`br`),Zg()()(),Jc(864,`td`,21)(865,`code`,28),Tk(866,`boolean`),Zg()(),Jc(867,`td`,23)(868,`p`)(869,`code`),Tk(870,`false`),Zg()()(),Jc(871,`td`,24)(872,`em`)(873,`strong`),Tk(874,`(opcional)`),Zg()(),Jc(875,`p`),Tk(876,`Indica que o campo será somente para leitura.`),Zg()()(),Jc(877,`tr`,16)(878,`td`,17)(879,`div`,25)(880,`span`,26),Tk(881,` p-required`),_u(882,`br`),Zg()()(),Jc(883,`td`,21)(884,`code`,28),Tk(885,`boolean`),Zg()(),Jc(886,`td`,23)(887,`p`)(888,`code`),Tk(889,`false`),Zg()()(),Jc(890,`td`,24)(891,`em`)(892,`strong`),Tk(893,`(opcional)`),Zg()(),Jc(894,`p`),Tk(895,`Define que o campo será obrigatório.`),Zg()()(),Jc(896,`tr`,16)(897,`td`,17)(898,`div`,25)(899,`span`,26),Tk(900,` p-show-required`),_u(901,`br`),Zg()()(),Jc(902,`td`,21)(903,`code`,28),Tk(904,`boolean`),Zg()(),Jc(905,`td`,23),Tk(906,`-`),Zg(),Jc(907,`td`,24)(908,`p`),Tk(909,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(910,`blockquote`)(911,`p`),Tk(912,`Não será exibida a indicação se:`),Zg()(),Jc(913,`ul`)(914,`li`),Tk(915,`Não possuir `),Jc(916,`code`),Tk(917,`p-help`),Zg(),Tk(918,` e/ou `),Jc(919,`code`),Tk(920,`p-label`),Zg(),Tk(921,`.`),Zg()()()(),Jc(922,`tr`,16)(923,`td`,17)(924,`div`,25)(925,`span`,26),Tk(926,` p-size`),_u(927,`br`),Zg()()(),Jc(928,`td`,21)(929,`code`,27),Tk(930,`string`),Zg()(),Jc(931,`td`,23)(932,`p`)(933,`code`),Tk(934,`medium`),Zg()()(),Jc(935,`td`,24)(936,`em`)(937,`strong`),Tk(938,`(opcional)`),Zg()(),Jc(939,`p`),Tk(940,`Define o tamanho do componente:`),Zg(),Jc(941,`ul`)(942,`li`)(943,`code`),Tk(944,`small`),Zg(),Tk(945,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(946,`li`)(947,`code`),Tk(948,`medium`),Zg(),Tk(949,`: altura do input como 44px.`),Zg()(),Jc(950,`blockquote`)(951,`p`),Tk(952,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(953,`code`),Tk(954,`medium`),Zg(),Tk(955,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(956,`a`,32),Tk(957,`po-theme`),Zg(),Tk(958,`.`),Zg()()()()(),Jc(959,`h3`,12),Tk(960,`Métodos`),Zg(),Jc(961,`table`,33)(962,`tr`,16)(963,`th`,34)(964,`div`,25)(965,`h4`)(966,`span`,26),Tk(967,` focus `),Zg()()()()(),Jc(968,`tr`,24)(969,`td`,24)(970,`p`),Tk(971,`Função que atribui foco ao componente.`),Zg(),Jc(972,`p`),Tk(973,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(974,`pre`)(975,`code`),Tk(976,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),Zg()()()()(),_u(977,`br`),Jc(978,`table`,33)(979,`tr`,16)(980,`th`,34)(981,`div`,25)(982,`h4`)(983,`span`,26),Tk(984,` showAdditionalHelp `),Zg()()()()(),Jc(985,`tr`,24)(986,`td`,24)(987,`p`),Tk(988,`Método que exibe `),Jc(989,`code`),Tk(990,`p-helper`),Zg(),Tk(991,` ou executa a ação definida em `),Jc(992,`code`),Tk(993,`p-helper{eventOnClick}`),Zg(),Tk(994,` ou em `),Jc(995,`code`),Tk(996,`p-additionalHelp`),Zg(),Tk(997,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(998,`code`),Tk(999,`p-keydown`),Zg(),Tk(1e3,`.`),Zg(),Jc(1001,`blockquote`)(1002,`p`),Tk(1003,`Exibe ou oculta o conteúdo do componente `),Jc(1004,`code`),Tk(1005,`po-helper`),Zg(),Tk(1006,` quando o componente estiver com foco.`),Zg()(),Jc(1007,`pre`)(1008,`code`),Tk(1009,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),Zg()(),Jc(1010,`pre`)(1011,`code`,35),Tk(1012,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1013,`br`),Jc(1014,`h3`),Tk(1015,`Interfaces`),Zg(),Jc(1016,`h4`,36)(1017,`code`,5),Tk(1018,`PoSelectOptionGroup`),Zg()(),Jc(1019,`div`,2)(1020,`p`),Tk(1021,`Interface da coleções de itens em grupo, utilizando uma label para o grupo e as opções do tipo `),Jc(1022,`code`),Tk(1023,`PoSelectOption`),Zg(),Tk(1024,`.`),Zg()(),Jc(1025,`h4`,12),Tk(1026,`Propriedades`),Zg(),Jc(1027,`table`,13)(1028,`tr`,14)(1029,`th`,15),Tk(1030,`Nome`),Zg(),Jc(1031,`th`,15),Tk(1032,`Tipo`),Zg(),Jc(1033,`th`,15),Tk(1034,`Descrição`),Zg()(),Jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,25)(1038,`span`,26),Tk(1039,` label`),_u(1040,`br`),Zg()()(),Jc(1041,`td`,21)(1042,`code`,27),Tk(1043,`string`),Zg()(),Jc(1044,`td`,24)(1045,`p`),Tk(1046,`Label para denominar o nome do grupo.`),Zg()()(),Jc(1047,`tr`,16)(1048,`td`,17)(1049,`div`,25)(1050,`span`,26),Tk(1051,` options`),_u(1052,`br`),Zg()()(),Jc(1053,`td`,21)(1054,`code`,37),Tk(1055,`Array<PoSelectOption>`),Zg()(),Jc(1056,`td`,24)(1057,`p`),Tk(1058,`Lista com as opções disponíveis em cada grupo.`),Zg()()()(),Jc(1059,`h4`,36)(1060,`code`,5),Tk(1061,`PoSelectOption`),Zg()(),Jc(1062,`div`,2)(1063,`p`),Tk(1064,`Interface da coleções de itens que deve ser informado no componente po-select`),Zg()(),Jc(1065,`h4`,12),Tk(1066,`Propriedades`),Zg(),Jc(1067,`table`,13)(1068,`tr`,14)(1069,`th`,15),Tk(1070,`Nome`),Zg(),Jc(1071,`th`,15),Tk(1072,`Tipo`),Zg(),Jc(1073,`th`,15),Tk(1074,`Descrição`),Zg()(),Jc(1075,`tr`,16)(1076,`td`,17)(1077,`div`,25)(1078,`span`,26),Tk(1079,` label`),_u(1080,`br`),Zg()()(),Jc(1081,`td`,21)(1082,`code`,27),Tk(1083,`string`),Zg()(),Jc(1084,`td`,24)(1085,`p`),Tk(1086,`Label a ser utilizada nos itens da lista.`),Zg()()(),Jc(1087,`tr`,16)(1088,`td`,17)(1089,`div`,25)(1090,`span`,26),Tk(1091,` value`),_u(1092,`br`),Zg()()(),Jc(1093,`td`,21)(1094,`code`,27),Tk(1095,`string `),Zg(),Jc(1096,`code`,38),Tk(1097,` number`),Zg()(),Jc(1098,`td`,24)(1099,`p`),Tk(1100,`Valor do objeto que será atribuído ao model.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Qe(a,I){if(a&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-select-basic-view`)(2,`sample-po-select-labs-view`)(3,`sample-po-select-customer-registration-view`)(4,`sample-po-select-companies-view`),Zg()}if(a&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Select`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,i){p&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Qe,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-select-doc`),Zg()()()),p&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Ce,_e,we,Me,Oe],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Ye),WV]})}return a})();var Ft=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,De]})}return a})();export{Ft as DocPoSelectModule};
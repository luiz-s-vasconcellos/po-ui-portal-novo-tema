import{m as P,p as M}from"./main-QQSPUZS3.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,F as Joe,Fr as H_,G as Nf,Hi as YI,Hr as KO,It as bae,Ki as Zb,L as Koe,La as ok,Li as WL,Lr as I,Mn as ta,Ni as Vk,Pn as tre,Pt as are,Si as Rk,Ti as TZ,Ui as Yk,Ur as Kb,W as Mze,Wa as q0,Wi as Z,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,an as ia,ar as Ab,bn as oi,co as wg,da as ge,eo as tk,ho as xo,ht as Tt,j as I4,jr as GV,ki as U_,kt as Zoe,oo as vt,or as An,pi as QL,qr as LO,ra as de,ri as No,rt as Ru,sn as j4,ta as dF,ti as NZ,ur as Be,wa as jk,xi as RZ,xn as p5,ya as jO,zi as Wk,zr as Jc}from"./chunk-t_lpM8Oc.js";import{t as r}from"./chunk-zystk1pz.js";var De=[`target`];var ke=()=>({label:`PO Popup`});var Te=l=>[l];var he=(()=>{class l{cdr=p(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(a,n){if(a&1&&Cu(De,5,Z),a&2){let m;No(m=xo())&&(n.targetRef=m.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(a,n){if(a&1){let m=KO();Jc(0,`po-icon`,2,0),vt(`click`,function(){U_(m);let i=ok(3);return H_(i.toggle())}),Kg(),_u(2,`po-popup`,3,1)}a&2&&(wg(2),Ab(`p-actions`,jk(3,Te,Vk(2,ke)))(`p-target`,n.targetRef))},dependencies:[Tt,ta],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-popup-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popup-basic/sample-po-popup-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popup-basic/sample-po-popup-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popup - Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-popup-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return l})();var Re=[`target`];var ve=(()=>{class l{poNotification=p(Ru);targetRef;action;actions;customPositions;event;infoValue;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(r$1){let a=r({},r$1);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r$1.parent)this.actions=[...this.actions,a];else{let n=this.getActionNode(this.actions,r$1.parent);n?n.subItems=[...n.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}changeEvent(r,a){this.event=r,this.infoValue=a}restore(){this.actions=[],this.customPositions=[],this.event=``,this.infoValue=``,this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let n of r){if(n.label===a||n.value===a)return n;if(n.subItems&&Array.isArray(n.subItems)){let m=this.getActionNode(n.subItems,a);if(m)return m}}}updateParentList(r,a=0,n=[]){return!r||!Array.isArray(r)||r.forEach(m=>{let{label:s}=m;n.push({label:`${`-`.repeat(a)} ${s}`,value:s}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,n)}),n}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(a,n){if(a&1&&Cu(Re,7,Z),a&2){let m;No(m=xo())&&(n.targetRef=m.first)}},standalone:!1,decls:33,vars:29,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-click-item`,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Clicked item`,1,`po-md-6`,3,`p-value`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let m=KO();Jc(0,`po-popup`,4,0),vt(`p-click-item`,function(i){return n.changeEvent(`p-click-item`,i)}),Kg(),Jc(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),vt(`p-click`,function(){U_(m);let i=ok(1);return H_(i.toggle())}),Kg()()(),_u(6,`po-divider`),Jc(7,`div`,8),_u(8,`po-info`,9)(9,`po-info`,10),Wk(10,`json`),Kg(),_u(11,`po-divider`),Jc(12,`form`,null,2)(14,`po-input`,11),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.label,i)||(n.action.label=i),H_(i)}),Kg(),Jc(15,`po-input`,12),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.action,i)||(n.action.action=i),H_(i)}),Kg(),Jc(16,`po-input`,13),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.url,i)||(n.action.url=i),H_(i)}),Kg(),Jc(17,`po-select`,14),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.type,i)||(n.action.type=i),H_(i)}),Kg(),Jc(18,`po-select`,15),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.icon,i)||(n.action.icon=i),H_(i)}),Kg(),Jc(19,`po-select`,16),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action.parent,i)||(n.action.parent=i),H_(i)}),Kg(),Jc(20,`po-checkbox-group`,17),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.action,i)||(n.action=i),H_(i)}),Kg(),Jc(21,`div`,8)(22,`po-button`,18),vt(`p-click`,function(){return n.addAction(n.action)}),Kg()()(),_u(23,`po-divider`),Jc(24,`form`,null,3)(26,`div`,8)(27,`po-input`,19),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.positions,i)||(n.positions=i),H_(i)}),vt(`p-change`,function(){return n.convertToArray()}),Kg(),Jc(28,`po-select`,20),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.position,i)||(n.position=i),H_(i)}),Kg(),Jc(29,`po-checkbox-group`,21),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.properties,i)||(n.properties=i),H_(i)}),Kg(),Jc(30,`po-radio-group`,22),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.size,i)||(n.size=i),H_(i)}),Kg()(),Jc(31,`div`,8)(32,`po-button`,23),vt(`p-click`,function(){U_(m);let i=ok(13);return ok(25).reset(),i.reset(),H_(n.restore())}),Kg()()()}if(a&2){let m=ok(13);Ab(`p-actions`,n.actions)(`p-custom-positions`,n.customPositions)(`p-hide-arrow`,n.properties.includes(`hideArrow`))(`p-position`,n.position)(`p-size`,n.size)(`p-target`,n.targetRef),wg(8),Ab(`p-value`,n.event),wg(),Ab(`p-value`,Yk(10,27,n.infoValue)),wg(5),Kb(`ngModel`,n.action.label),q0(),wg(),Kb(`ngModel`,n.action.action),q0(),wg(),Kb(`ngModel`,n.action.url),q0(),wg(),Kb(`ngModel`,n.action.type),Ab(`p-options`,n.typeOptions),q0(),wg(),Kb(`ngModel`,n.action.icon),Ab(`p-options`,n.iconOptions),q0(),wg(),Kb(`ngModel`,n.action.parent),Ab(`p-options`,n.parentList),q0(),wg(),Kb(`ngModel`,n.action),Ab(`p-options`,n.actionOptions),q0(),wg(2),Ab(`p-disabled`,m.form.invalid),wg(5),Kb(`ngModel`,n.positions),q0(),wg(),Kb(`ngModel`,n.position),Ab(`p-options`,n.positionOptions),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,Joe,ta,dF],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Pe=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-popup-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popup-labs/sample-po-popup-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popup-labs/sample-po-popup-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-popup-labs/sample-po-popup-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popup - Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-popup-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
  (p-click-item)="changeEvent('p-click-item', $event)"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  <po-info class="po-md-6" p-label="Clicked item" [p-value]="infoValue | json"> </po-info>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
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
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styleUrls: ['./sample-po-popup-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction & { parent?: string };
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  event: string;
  infoValue: any;
  parentList: Array<PoSelectOption>;
  position: string;
  positions: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPopupAction & { parent?: string }) {
    const newAction: PoPopupAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  changeEvent(type: string, event?: any) {
    this.event = type;
    this.infoValue = event;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.event = '';
    this.infoValue = '';
    this.parentList = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    };
  }

  private getActionNode(items: Array<PoPopupAction>, value: string): PoPopupAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoPopupAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()(),Jc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Mk(26,`sample-po-popup-labs/sample-po-popup-labs.component.css`),Kg(),Jc(27,`div`,13)(28,`pre`,14),Mk(29,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return l})();var We=[`formEmail`];var Ie=[`target`];function ze(l,Me){if(l&1&&(Jc(0,`div`)(1,`div`,6),_u(2,`po-info`,20),Kg(),_u(3,`po-divider`),Kg()),l&2){let r=tk();wg(2),Ab(`p-value`,r.cc)}}var Ce=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(a,n){if(a&1&&Cu(We,7)(Ie,7,Z)(ia,7),a&2){let m;No(m=xo())&&(n.formEmail=m.first),No(m=xo())&&(n.targetRef=m.first),No(m=xo())&&(n.poModal=m.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(a,n){if(a&1){let m=KO();Jc(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),Mk(4,`Settings`),Kg()()(),Jc(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.to,i)||(n.to=i),H_(i)}),Kg(),Jc(11,`po-email`,9),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.cc,i)||(n.cc=i),H_(i)}),Kg(),Jc(12,`po-input`,10),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.subject,i)||(n.subject=i),H_(i)}),Kg()(),Jc(13,`div`,6)(14,`po-textarea`,11,2),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.emailText,i)||(n.emailText=i),H_(i)}),vt(`click`,function(){U_(m);let i=ok(1);return H_(i.toggle())}),Kg(),_u(16,`img`,12),Kg(),Jc(17,`div`,6)(18,`po-button`,13),vt(`p-click`,function(){return n.send()}),Kg(),Jc(19,`po-button`,14),vt(`p-click`,function(){return n.reset()}),Kg()()()()(),Jc(20,`po-modal`,15)(21,`div`,6),_u(22,`po-info`,16)(23,`po-info`,17),Kg(),_u(24,`po-divider`),LO(25,ze,4,1,`div`),Jc(26,`div`,6),_u(27,`po-info`,18),Kg(),_u(28,`po-divider`),Jc(29,`div`,6)(30,`po-textarea`,19),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.emailText,i)||(n.emailText=i),H_(i)}),Kg()()()}if(a&2){let m=ok(8);Ab(`p-actions`,n.popupActions)(`p-target`,n.targetRef),wg(10),Kb(`ngModel`,n.to),q0(),wg(),Kb(`ngModel`,n.cc),q0(),wg(),Kb(`ngModel`,n.subject),q0(),wg(2),Kb(`ngModel`,n.emailText),q0(),wg(4),Ab(`p-disabled`,m.form.invalid),wg(),Ab(`p-disabled`,m.form.invalid),wg(),Ab(`p-primary-action`,n.primaryAction),wg(2),Ab(`p-value`,n.from),wg(),Ab(`p-value`,n.to),wg(2),jO(n.cc!==``?25:-1),wg(2),Ab(`p-value`,n.subject),wg(3),Kb(`ngModel`,n.emailText),q0()}},dependencies:[NZ,YI,TZ,RZ,QL,WL,oi,Nf,p5,j4,Zoe,Joe,ia,ta,bae],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-popup-email`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-popup-email/sample-po-popup-email.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-popup-email/sample-po-popup-email.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-popup-email/sample-po-popup-email.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Popup Email`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-popup-email`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-popup-email/sample-po-popup-email.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-popup-email/sample-po-popup-email.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styleUrls: ['./sample-po-popup-email.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),Kg()()()(),Jc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Mk(26,`sample-po-popup-email/sample-po-popup-email.component.css`),Kg(),Jc(27,`div`,13)(28,`pre`,14),Mk(29,`.sample-logo-po {
  height: 15%;
  padding-top: 2.5%;
}

.sample-popup-header-template {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #0c9abe;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-top: 5%;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var we=(()=>{class l{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:1002,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-popup-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click-item`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-custom-positions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`id`,`prop-p-hide-arrow`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-root-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-sub-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-target`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`method-toggle`,1,`docs-api-method-table`],[`id`,`interface-po-popup-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPopupModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-popup.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoPopupComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-popup`),Kg(),Mk(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),Kg(),Jc(18,`p`),Mk(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Jc(20,`code`),Mk(21,`subItems`),Kg(),Mk(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),Kg(),Jc(23,`p`),Mk(24,`É possível escolher as posições do `),Jc(25,`code`),Mk(26,`po-popup`),Kg(),Mk(27,` em relação ao componente alvo, para isto veja a propriedade `),Jc(28,`code`),Mk(29,`p-position`),Kg(),Mk(30,`.`),Kg(),Jc(31,`p`),Mk(32,`Também é possível informar um `),Jc(33,`em`),Mk(34,`template`),Kg(),Jc(35,`em`),Mk(36,`header`),Kg(),Mk(37,` para o `),Jc(38,`code`),Mk(39,`po-popup`),Kg(),Mk(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Jc(41,`code`),Mk(42,`p-popup-header-template`),Kg(),Mk(43,` no elemento que servirá de template, por exemplo:`),Kg(),Jc(44,`pre`)(45,`code`),Mk(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),Kg()(),Jc(47,`h4`),Mk(48,`Tokens customizáveis`),Kg(),Jc(49,`p`),Mk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(51,`blockquote`)(52,`p`),Mk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Mk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(56,`.`),Kg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Mk(61,`Propriedade`),Kg(),Jc(62,`th`),Mk(63,`Descrição`),Kg(),Jc(64,`th`),Mk(65,`Valor Padrão`),Kg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Mk(70,`Default Values`),Kg()(),_u(71,`td`)(72,`td`),Kg(),Jc(73,`tr`)(74,`td`)(75,`code`),Mk(76,`--border-radius`),Kg()(),Jc(77,`td`),Mk(78,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(79,`td`)(80,`code`),Mk(81,`var(--border-radius-md)`),Kg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Mk(85,`--border-width`),Kg()(),Jc(86,`td`),Mk(87,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(88,`td`)(89,`code`),Mk(90,`var(--border-width-sm)`),Kg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Mk(94,`--border-color`),Kg()(),Jc(95,`td`),Mk(96,`Cor da borda`),Kg(),Jc(97,`td`)(98,`code`),Mk(99,`var(--color-neutral-light-20)`),Kg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Mk(103,`--background`),Kg()(),Jc(104,`td`),Mk(105,`Cor do background`),Kg(),Jc(106,`td`)(107,`code`),Mk(108,`var(--color-neutral-light-00)`),Kg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Mk(112,`--shadow`),Kg()(),Jc(113,`td`),Mk(114,`Contém o valor da sombra do elemento`),Kg(),Jc(115,`td`)(116,`code`),Mk(117,`var(--shadow-md)`),Kg()()(),Jc(118,`tr`)(119,`td`)(120,`strong`),Mk(121,`po-popup po-item-list`),Kg()(),_u(122,`td`)(123,`td`),Kg(),Jc(124,`tr`)(125,`td`)(126,`code`),Mk(127,`--font-family`),Kg()(),Jc(128,`td`),Mk(129,`Família tipográfica usada`),Kg(),Jc(130,`td`)(131,`code`),Mk(132,`var(--font-family-theme)`),Kg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Mk(136,`--font-size`),Kg()(),Jc(137,`td`),Mk(138,`Tamanho da fonte`),Kg(),Jc(139,`td`)(140,`code`),Mk(141,`var(--font-size-default)`),Kg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Mk(145,`--line-height`),Kg()(),Jc(146,`td`),Mk(147,`Tamanho da label`),Kg(),Jc(148,`td`)(149,`code`),Mk(150,`var(--line-height-md)`),Kg()()(),Jc(151,`tr`)(152,`td`)(153,`strong`),Mk(154,`Action`),Kg()(),_u(155,`td`)(156,`td`),Kg(),Jc(157,`tr`)(158,`td`)(159,`code`),Mk(160,`--font-weight`),Kg()(),Jc(161,`td`),Mk(162,`Peso da fonte`),Kg(),Jc(163,`td`)(164,`code`),Mk(165,`var(--font-weight-bold)`),Kg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Mk(169,`--color`),Kg()(),Jc(170,`td`),Mk(171,`Cor principal do popup`),Kg(),Jc(172,`td`)(173,`code`),Mk(174,`var(--color-action-default)`),Kg()()(),Jc(175,`tr`)(176,`td`)(177,`strong`),Mk(178,`Hover`),Kg()(),_u(179,`td`)(180,`td`),Kg(),Jc(181,`tr`)(182,`td`)(183,`code`),Mk(184,`--color-hover`),Kg()(),Jc(185,`td`),Mk(186,`Cor principal no estado hover`),Kg(),Jc(187,`td`)(188,`code`),Mk(189,`var(--color-brand-01-darkest)`),Kg()()(),Jc(190,`tr`)(191,`td`)(192,`code`),Mk(193,`--background-hover`),Kg()(),Jc(194,`td`),Mk(195,`Cor de background no estado hover`),Kg(),Jc(196,`td`)(197,`code`),Mk(198,`var(--color-brand-01-lighter)`),Kg()()(),Jc(199,`tr`)(200,`td`)(201,`strong`),Mk(202,`Focused`),Kg()(),_u(203,`td`)(204,`td`),Kg(),Jc(205,`tr`)(206,`td`)(207,`code`),Mk(208,`--outline-color-focused`),Kg()(),Jc(209,`td`),Mk(210,`Cor do outline do estado de focus`),Kg(),Jc(211,`td`)(212,`code`),Mk(213,`var(--color-action-focus)`),Kg()()(),Jc(214,`tr`)(215,`td`)(216,`strong`),Mk(217,`Pressed`),Kg()(),_u(218,`td`)(219,`td`),Kg(),Jc(220,`tr`)(221,`td`)(222,`code`),Mk(223,`--background-pressed`),Kg()(),Jc(224,`td`),Mk(225,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(226,`td`)(227,`code`),Mk(228,`var(--color-brand-01-light)`),Kg()()(),Jc(229,`tr`)(230,`td`)(231,`strong`),Mk(232,`Disabled`),Kg()(),_u(233,`td`)(234,`td`),Kg(),Jc(235,`tr`)(236,`td`)(237,`code`),Mk(238,`--color-disabled`),Kg()(),Jc(239,`td`),Mk(240,`Cor principal no estado disabled`),Kg(),Jc(241,`td`)(242,`code`),Mk(243,`var(--color-action-disabled)`),Kg()()(),Jc(244,`tr`)(245,`td`)(246,`strong`),Mk(247,`Selected`),Kg()(),_u(248,`td`)(249,`td`),Kg(),Jc(250,`tr`)(251,`td`)(252,`code`),Mk(253,`--font-weight-selected`),Kg()(),Jc(254,`td`),Mk(255,`Peso da fonte no estado selecionado`),Kg(),Jc(256,`td`)(257,`code`),Mk(258,`var(--font-weight-bold)`),Kg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Mk(262,`--background-selected`),Kg()(),Jc(263,`td`),Mk(264,`Cor de background no estado selecionado`),Kg(),Jc(265,`td`)(266,`code`),Mk(267,`var(--color-brand-01-lightest)`),Kg()()(),Jc(268,`tr`)(269,`td`)(270,`strong`),Mk(271,`Option e check`),Kg()(),_u(272,`td`)(273,`td`),Kg(),Jc(274,`tr`)(275,`td`)(276,`code`),Mk(277,`--color-option`),Kg()(),Jc(278,`td`),Mk(279,`Cor principa no estado Option/check`),Kg(),Jc(280,`td`)(281,`code`),Mk(282,`var(--color-neutral-dark-90)`),Kg()()()()()(),Jc(283,`div`,7)(284,`h4`,8),Mk(285,`Seletor`),Kg(),Jc(286,`pre`,9),Mk(287,`<po-popup
    p-actions="Array<PoPopupAction>"
    (p-click-item)="EventEmitter"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter"
    p-target="any" >
</po-popup>
`),Kg()(),Jc(288,`h4`,10),Mk(289,`Propriedades`),Kg(),Jc(290,`table`,11)(291,`tr`,12)(292,`th`,13),Mk(293,`Nome`),Kg(),Jc(294,`th`,13),Mk(295,`Tipo`),Kg(),Jc(296,`th`,13),Mk(297,`Padrão`),Kg(),Jc(298,`th`,13),Mk(299,`Descrição`),Kg()(),Jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),Mk(304,` p-actions`),_u(305,`br`),Kg()()(),Jc(306,`td`,18)(307,`code`,19),Mk(308,`Array<PoPopupAction>`),Kg()(),Jc(309,`td`,20),Mk(310,`-`),Kg(),Jc(311,`td`,21)(312,`p`),Mk(313,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Jc(314,`em`),Mk(315,`array`),Kg(),Mk(316,` de `),Jc(317,`code`),Mk(318,`PoPopupAction`),Kg(),Mk(319,`.`),Kg()()(),Jc(320,`tr`,22)(321,`td`,15)(322,`div`,23)(323,`span`,24),Mk(324,` (p-click-item)`),_u(325,`br`),Kg()()(),Jc(326,`td`,18)(327,`code`,25),Mk(328,`EventEmitter`),Kg()(),Jc(329,`td`,20),Mk(330,`-`),Kg(),Jc(331,`td`,21)(332,`em`)(333,`strong`),Mk(334,`(opcional)`),Kg()(),Jc(335,`p`),Mk(336,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Jc(337,`code`),Mk(338,`PoDropdownAction`),Kg(),Mk(339,`).`),Kg(),Jc(340,`blockquote`)(341,`p`),Mk(342,`Não é disparado para a ação interna de voltar (`),Jc(343,`code`),Mk(344,`goBack`),Kg(),Mk(345,`).`),Kg()()()(),Jc(346,`tr`,26)(347,`td`,15)(348,`div`,16)(349,`span`,17),Mk(350,` p-custom-positions`),_u(351,`br`),Kg()()(),Jc(352,`td`,18)(353,`code`,27),Mk(354,`string[]`),Kg()(),Jc(355,`td`,20),Mk(356,`-`),Kg(),Jc(357,`td`,21)(358,`em`)(359,`strong`),Mk(360,`(opcional)`),Kg()(),Jc(361,`p`),Mk(362,`Define as posições e a sequência que o `),Jc(363,`code`),Mk(364,`po-popup`),Kg(),Mk(365,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Jc(366,`em`),Mk(367,`array`),Kg(),Mk(368,`. Caso não seja definido, o `),Jc(369,`code`),Mk(370,`po-popup`),Kg(),Mk(371,` irá rotacionar em todas as posições válidas.`),Kg(),Jc(372,`blockquote`)(373,`p`),Mk(374,`O componente sempre irá abrir na posição definida no `),Jc(375,`code`),Mk(376,`p-position`),Kg(),Mk(377,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Jc(378,`code`),Mk(379,`p-custom-position`),Kg(),Mk(380,`.`),Kg()(),Jc(381,`p`),Mk(382,`Posições válidas:`),Kg(),Jc(383,`ul`)(384,`li`)(385,`code`),Mk(386,`right`),Kg(),Mk(387,`: Posiciona o po-popup no lado direito do componente alvo.`),Kg(),Jc(388,`li`)(389,`code`),Mk(390,`right-bottom`),Kg(),Mk(391,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Kg(),Jc(392,`li`)(393,`code`),Mk(394,`right-top`),Kg(),Mk(395,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Kg(),Jc(396,`li`)(397,`code`),Mk(398,`bottom`),Kg(),Mk(399,`: Posiciona o po-popup abaixo do componente alvo.`),Kg(),Jc(400,`li`)(401,`code`),Mk(402,`bottom-left`),Kg(),Mk(403,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Kg(),Jc(404,`li`)(405,`code`),Mk(406,`bottom-right`),Kg(),Mk(407,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Kg(),Jc(408,`li`)(409,`code`),Mk(410,`left`),Kg(),Mk(411,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Kg(),Jc(412,`li`)(413,`code`),Mk(414,`left-top`),Kg(),Mk(415,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Kg(),Jc(416,`li`)(417,`code`),Mk(418,`left-bottom`),Kg(),Mk(419,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Kg(),Jc(420,`li`)(421,`code`),Mk(422,`top`),Kg(),Mk(423,`: Posiciona o po-popup acima do componente alvo.`),Kg(),Jc(424,`li`)(425,`code`),Mk(426,`top-right`),Kg(),Mk(427,`: Posiciona o po-popup acima e à direita do componente alvo.`),Kg(),Jc(428,`li`)(429,`code`),Mk(430,`top-left`),Kg(),Mk(431,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Kg()()()(),Jc(432,`tr`,28)(433,`td`,15)(434,`div`,16)(435,`span`,17),Mk(436,` p-hide-arrow`),_u(437,`br`),Kg()()(),Jc(438,`td`,18)(439,`code`,29),Mk(440,`boolean`),Kg()(),Jc(441,`td`,20)(442,`p`)(443,`code`),Mk(444,`false`),Kg()()(),Jc(445,`td`,21)(446,`em`)(447,`strong`),Mk(448,`(opcional)`),Kg()(),Jc(449,`p`),Mk(450,`Oculta a seta do componente `),Jc(451,`em`),Mk(452,`popup`),Kg(),Mk(453,`.`),Kg()()(),Jc(454,`tr`,30)(455,`td`,15)(456,`div`,16)(457,`span`,17),Mk(458,` p-position`),_u(459,`br`),Kg()()(),Jc(460,`td`,18)(461,`code`,31),Mk(462,`string`),Kg()(),Jc(463,`td`,20)(464,`p`)(465,`code`),Mk(466,`bottom-left`),Kg()()(),Jc(467,`td`,21)(468,`em`)(469,`strong`),Mk(470,`(opcional)`),Kg()(),Jc(471,`p`),Mk(472,`Define a posição inicial que o `),Jc(473,`code`),Mk(474,`po-popup`),Kg(),Mk(475,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Jc(476,`code`),Mk(477,`bottom-left`),Kg(),Mk(478,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Kg(),Jc(479,`blockquote`)(480,`p`),Mk(481,`Caso seja definido um `),Jc(482,`code`),Mk(483,`p-custom-positions`),Kg(),Mk(484,` o componente irá abrir na posição definida na propriedade `),Jc(485,`code`),Mk(486,`p-position`),Kg(),Mk(487,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Jc(488,`code`),Mk(489,`p-custom-positions`),Kg(),Mk(490,`.`),Kg()(),Jc(491,`p`),Mk(492,`Posições válidas:`),Kg(),Jc(493,`ul`)(494,`li`)(495,`code`),Mk(496,`right`),Kg(),Mk(497,`: Posiciona o po-popup no lado direito do componente alvo.`),Kg(),Jc(498,`li`)(499,`code`),Mk(500,`right-bottom`),Kg(),Mk(501,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Kg(),Jc(502,`li`)(503,`code`),Mk(504,`right-top`),Kg(),Mk(505,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Kg(),Jc(506,`li`)(507,`code`),Mk(508,`bottom`),Kg(),Mk(509,`: Posiciona o po-popup abaixo do componente alvo.`),Kg(),Jc(510,`li`)(511,`code`),Mk(512,`bottom-left`),Kg(),Mk(513,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Kg(),Jc(514,`li`)(515,`code`),Mk(516,`bottom-right`),Kg(),Mk(517,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Kg(),Jc(518,`li`)(519,`code`),Mk(520,`left`),Kg(),Mk(521,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Kg(),Jc(522,`li`)(523,`code`),Mk(524,`left-top`),Kg(),Mk(525,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Kg(),Jc(526,`li`)(527,`code`),Mk(528,`left-bottom`),Kg(),Mk(529,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Kg(),Jc(530,`li`)(531,`code`),Mk(532,`top`),Kg(),Mk(533,`: Posiciona o po-popup acima do componente alvo.`),Kg(),Jc(534,`li`)(535,`code`),Mk(536,`top-right`),Kg(),Mk(537,`: Posiciona o po-popup acima e à direita do componente alvo.`),Kg(),Jc(538,`li`)(539,`code`),Mk(540,`top-left`),Kg(),Mk(541,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Kg()()()(),Jc(542,`tr`,32)(543,`td`,15)(544,`div`,23)(545,`span`,24),Mk(546,` (p-root-items-load)`),_u(547,`br`),Kg()()(),Jc(548,`td`,18)(549,`code`,25),Mk(550,`EventEmitter`),Kg()(),Jc(551,`td`,20),Mk(552,`-`),Kg(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Mk(556,`(opcional)`),Kg()(),Jc(557,`p`),Mk(558,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Kg(),Jc(559,`blockquote`)(560,`p`),Mk(561,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Jc(562,`tr`,33)(563,`td`,15)(564,`div`,16)(565,`span`,17),Mk(566,` p-size`),_u(567,`br`),Kg()()(),Jc(568,`td`,18)(569,`code`,31),Mk(570,`string`),Kg()(),Jc(571,`td`,20)(572,`p`)(573,`code`),Mk(574,`medium`),Kg()()(),Jc(575,`td`,21)(576,`em`)(577,`strong`),Mk(578,`(opcional)`),Kg()(),Jc(579,`p`),Mk(580,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(581,`ul`)(582,`li`)(583,`code`),Mk(584,`small`),Kg(),Mk(585,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(586,`li`)(587,`code`),Mk(588,`medium`),Kg(),Mk(589,`: aplica a medida medium de cada componente.`),Kg()(),Jc(590,`blockquote`)(591,`p`),Mk(592,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(593,`code`),Mk(594,`medium`),Kg(),Mk(595,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(596,`a`,34),Mk(597,`po-theme`),Kg(),Mk(598,`.`),Kg()()()(),Jc(599,`tr`,35)(600,`td`,15)(601,`div`,23)(602,`span`,24),Mk(603,` (p-sub-items-load)`),_u(604,`br`),Kg()()(),Jc(605,`td`,18)(606,`code`,25),Mk(607,`EventEmitter`),Kg()(),Jc(608,`td`,20),Mk(609,`-`),Kg(),Jc(610,`td`,21)(611,`em`)(612,`strong`),Mk(613,`(opcional)`),Kg()(),Jc(614,`p`),Mk(615,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Jc(616,`code`),Mk(617,`PoPopupAction`),Kg(),Mk(618,`) que originou o carregamento.`),Kg(),Jc(619,`blockquote`)(620,`p`),Mk(621,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Jc(622,`tr`,36)(623,`td`,15)(624,`div`,16)(625,`span`,17),Mk(626,` p-target`),_u(627,`br`),Kg()()(),Jc(628,`td`,18)(629,`code`,37),Mk(630,`any`),Kg()(),Jc(631,`td`,20),Mk(632,`-`),Kg(),Jc(633,`td`,21)(634,`p`),Mk(635,`Para utilizar o `),Jc(636,`code`),Mk(637,`po-popup`),Kg(),Mk(638,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Jc(639,`code`),Mk(640,`toggle`),Kg(),Mk(641,`, por exemplo:`),Kg(),Jc(642,`pre`)(643,`code`),Mk(644,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),Kg()(),Jc(645,`p`),Mk(646,`Caso o elemento alvo for um componente, será preciso obter o `),Jc(647,`code`),Mk(648,`ElementRef`),Kg(),Mk(649,` do mesmo e passá-lo à propriedade, por exemplo:`),Kg(),Jc(650,`pre`)(651,`code`),Mk(652,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),Kg()()()()(),Jc(653,`h3`,10),Mk(654,`Métodos`),Kg(),Jc(655,`table`,38)(656,`tr`,39)(657,`th`,40)(658,`div`,16)(659,`h4`)(660,`span`,17),Mk(661,` close `),Kg()()()()(),Jc(662,`tr`,21)(663,`td`,21)(664,`p`),Mk(665,`Fecha o componente `),Jc(666,`em`),Mk(667,`popup`),Kg(),Mk(668,`.`),Kg(),Jc(669,`blockquote`)(670,`p`),Mk(671,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),Kg()()()()(),_u(672,`br`),Jc(673,`table`,41)(674,`tr`,39)(675,`th`,40)(676,`div`,16)(677,`h4`)(678,`span`,17),Mk(679,` open `),Kg()()()()(),Jc(680,`tr`,21)(681,`td`,21)(682,`p`),Mk(683,`Abre o componente `),Jc(684,`em`),Mk(685,`popup`),Kg(),Mk(686,`.`),Kg(),Jc(687,`blockquote`)(688,`p`),Mk(689,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Kg()()()()(),_u(690,`br`),Jc(691,`table`,42)(692,`tr`,39)(693,`th`,40)(694,`div`,16)(695,`h4`)(696,`span`,17),Mk(697,` toggle `),Kg()()()()(),Jc(698,`tr`,21)(699,`td`,21)(700,`p`),Mk(701,`Responsável por abrir e fechar o `),Jc(702,`em`),Mk(703,`popup`),Kg(),Mk(704,`.`),Kg(),Jc(705,`p`),Mk(706,`Quando disparado abrirá o `),Jc(707,`em`),Mk(708,`popup`),Kg(),Mk(709,` e caso o mesmo já estiver aberto e possuir o mesmo `),Jc(710,`code`),Mk(711,`target`),Kg(),Mk(712,` irá fecha-lo.`),Kg(),Jc(713,`p`),Mk(714,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Kg()()()(),_u(715,`br`),Jc(716,`h3`),Mk(717,`Interfaces`),Kg(),Jc(718,`h4`,43)(719,`code`,5),Mk(720,`PoPopupAction`),Kg()(),Jc(721,`div`,2)(722,`p`),Mk(723,`Interface para lista de ações do componente.`),Kg()(),Jc(724,`h4`,10),Mk(725,`Propriedades`),Kg(),Jc(726,`table`,11)(727,`tr`,12)(728,`th`,13),Mk(729,`Nome`),Kg(),Jc(730,`th`,13),Mk(731,`Tipo`),Kg(),Jc(732,`th`,13),Mk(733,`Descrição`),Kg()(),Jc(734,`tr`,44)(735,`td`,15)(736,`div`,16)(737,`span`,17),Mk(738,` action`),_u(739,`br`),Kg()()(),Jc(740,`td`,18)(741,`code`,45),Mk(742,`Function`),Kg()(),Jc(743,`td`,21)(744,`em`)(745,`strong`),Mk(746,`(opcional)`),Kg()(),Jc(747,`p`),Mk(748,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Jc(749,`p`),Mk(750,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(751,`code`),Mk(752,`subItems`),Kg(),Mk(753,`.`),Kg(),Jc(754,`blockquote`)(755,`p`),Mk(756,`Para que a função seja executada no contexto do componente, utilize `),Jc(757,`em`),Mk(758,`bind`),Kg(),Mk(759,`:
`),Jc(760,`code`),Mk(761,`action: this.myFunction.bind(this)`),Kg()()()()(),Jc(762,`tr`,46)(763,`td`,15)(764,`div`,16)(765,`span`,17),Mk(766,` disabled`),_u(767,`br`),Kg()()(),Jc(768,`td`,18)(769,`code`,29),Mk(770,`boolean `),Kg(),Jc(771,`code`,45),Mk(772,` Function`),Kg()(),Jc(773,`td`,21)(774,`em`)(775,`strong`),Mk(776,`(opcional)`),Kg()(),Jc(777,`p`),Mk(778,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Jc(779,`tr`,47)(780,`td`,15)(781,`div`,16)(782,`span`,17),Mk(783,` icon`),_u(784,`br`),Kg()()(),Jc(785,`td`,18)(786,`code`,31),Mk(787,`string `),Kg(),Jc(788,`code`,48),Mk(789,` TemplateRef<void>`),Kg()(),Jc(790,`td`,21)(791,`em`)(792,`strong`),Mk(793,`(opcional)`),Kg()(),Jc(794,`p`),Mk(795,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Jc(796,`p`),Mk(797,`Aceita ícones da `),Jc(798,`a`,49),Mk(799,`Biblioteca de ícones`),Kg(),Mk(800,`, fontes externas (ex: Font Awesome)
ou um `),Jc(801,`code`),Mk(802,`TemplateRef`),Kg(),Mk(803,` para ícones customizados.`),Kg(),Jc(804,`pre`)(805,`code`),Mk(806,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Jc(807,`tr`,50)(808,`td`,15)(809,`div`,16)(810,`span`,17),Mk(811,` label`),_u(812,`br`),Kg()()(),Jc(813,`td`,18)(814,`code`,31),Mk(815,`string`),Kg()(),Jc(816,`td`,21)(817,`p`),Mk(818,`Rótulo da ação.`),Kg(),Jc(819,`p`),Mk(820,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(821,`code`),Mk(822,`subItems`),Kg(),Mk(823,`.`),Kg()()(),Jc(824,`tr`,51)(825,`td`,15)(826,`div`,16)(827,`span`,17),Mk(828,` selected`),_u(829,`br`),Kg()()(),Jc(830,`td`,18)(831,`code`,29),Mk(832,`boolean`),Kg()(),Jc(833,`td`,21)(834,`em`)(835,`strong`),Mk(836,`(opcional)`),Kg()(),Jc(837,`p`),Mk(838,`Define se a ação está selecionada.`),Kg()()(),Jc(839,`tr`,52)(840,`td`,15)(841,`div`,16)(842,`span`,17),Mk(843,` separator`),_u(844,`br`),Kg()()(),Jc(845,`td`,18)(846,`code`,29),Mk(847,`boolean`),Kg()(),Jc(848,`td`,21)(849,`em`)(850,`strong`),Mk(851,`(opcional)`),Kg()(),Jc(852,`p`),Mk(853,`Atribui uma linha separadora acima do item.`),Kg()()(),Jc(854,`tr`,53)(855,`td`,15)(856,`div`,16)(857,`span`,17),Mk(858,` subItems`),_u(859,`br`),Kg()()(),Jc(860,`td`,18)(861,`code`,19),Mk(862,`Array<PoPopupAction>`),Kg()(),Jc(863,`td`,21)(864,`em`)(865,`strong`),Mk(866,`(opcional)`),Kg()(),Jc(867,`p`),Mk(868,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Jc(869,`pre`)(870,`code`),Mk(871,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Jc(872,`p`),Mk(873,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Jc(874,`blockquote`)(875,`p`),Mk(876,`As propriedades `),Jc(877,`code`),Mk(878,`disabled`),Kg(),Mk(879,`, `),Jc(880,`code`),Mk(881,`type`),Kg(),Mk(882,` e `),Jc(883,`code`),Mk(884,`visible`),Kg(),Mk(885,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Jc(886,`blockquote`)(887,`p`),Mk(888,`Quando `),Jc(889,`code`),Mk(890,`url`),Kg(),Mk(891,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Jc(892,`blockquote`)(893,`p`),Mk(894,`Em subníveis aninhados, o `),Jc(895,`code`),Mk(896,`icon`),Kg(),Mk(897,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Jc(898,`tr`,54)(899,`td`,15)(900,`div`,16)(901,`span`,17),Mk(902,` subItemsLazy`),_u(903,`br`),Kg()()(),Jc(904,`td`,18)(905,`code`,55),Mk(906,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Jc(907,`td`,21)(908,`em`)(909,`strong`),Mk(910,`(opcional)`),Kg()(),Jc(911,`p`),Mk(912,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Jc(913,`p`),Mk(914,`Recebe o item agrupador e retorna um `),Jc(915,`code`),Mk(916,`Observable<Array<PoPopupAction>>`),Kg(),Mk(917,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(918,`strong`),Mk(919,`apenas`),Kg(),Mk(920,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(921,`code`),Mk(922,`po-skeleton`),Kg(),Mk(923,`
enquanto os dados s\xE3o carregados:`),Kg(),Jc(924,`pre`)(925,`code`),Mk(926,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Jc(927,`blockquote`)(928,`p`),Mk(929,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Jc(930,`p`),Mk(931,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Jc(932,`tr`,56)(933,`td`,15)(934,`div`,16)(935,`span`,17),Mk(936,` type`),_u(937,`br`),Kg()()(),Jc(938,`td`,18)(939,`code`,31),Mk(940,`string`),Kg()(),Jc(941,`td`,21)(942,`em`)(943,`strong`),Mk(944,`(opcional)`),Kg()(),Jc(945,`p`),Mk(946,`Define a cor do item.`),Kg(),Jc(947,`p`),Mk(948,`Valores válidos:`),Kg(),Jc(949,`ul`)(950,`li`)(951,`code`),Mk(952,`default`),Kg()(),Jc(953,`li`)(954,`code`),Mk(955,`danger`),Kg()()()()(),Jc(956,`tr`,57)(957,`td`,15)(958,`div`,16)(959,`span`,17),Mk(960,` url`),_u(961,`br`),Kg()()(),Jc(962,`td`,18)(963,`code`,31),Mk(964,`string`),Kg()(),Jc(965,`td`,21)(966,`em`)(967,`strong`),Mk(968,`(opcional)`),Kg()(),Jc(969,`p`),Mk(970,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Jc(971,`p`),Mk(972,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(973,`code`),Mk(974,`url`),Kg(),Mk(975,` é informada em um agrupador, o clique `),Jc(976,`strong`),Mk(977,`não abrirá os subitens`),Kg(),Mk(978,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Jc(979,`blockquote`)(980,`p`),Mk(981,`Quando informada, tem prioridade sobre a propriedade `),Jc(982,`code`),Mk(983,`action`),Kg(),Mk(984,`.`),Kg()()()(),Jc(985,`tr`,58)(986,`td`,15)(987,`div`,16)(988,`span`,17),Mk(989,` visible`),_u(990,`br`),Kg()()(),Jc(991,`td`,18)(992,`code`,29),Mk(993,`boolean `),Kg(),Jc(994,`code`,45),Mk(995,` Function`),Kg()(),Jc(996,`td`,21)(997,`em`)(998,`strong`),Mk(999,`(opcional)`),Kg()(),Jc(1e3,`p`),Mk(1001,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function He(l,Me){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-popup-basic-view`)(2,`sample-po-popup-labs-view`)(3,`sample-po-popup-email-view`),Kg()),l&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Qe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Popup`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Popup · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0),LO(1,He,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-popup-doc`),Kg()()),a&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,xe,Pe,ye,we],encapsulation:2,changeDetection:1})}return l})()}];var Ae=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(Qe),GV]})}return l})();var Ot=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Ae]})}return l})();export{Ot as DocPoPopupModule};
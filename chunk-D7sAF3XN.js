import{m as P,p as M}from"./main-RU54IPUI.js";import{$r as No,$t as ia,A as Goe,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Mi as WL,Mt as Zte,Na as ok,Pi as Wk,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,X as Or,Ya as tk,_a as jO,_i as RZ,_n as q4,ar as B_,b as Eo,ca as ge$1,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,it as Ru,ja as nm,jn as w4,jr as H_,li as QL,no as we,nt as R4,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,ua as hF,va as j_,vi as Rk,zi as Yk,zr as KO}from"./chunk-CTJH0VS3.js";var fe=(()=>{class a{poNotification;constructor(r){this.poNotification=r}static ɵfac=function(n){return new(n||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(n,o){n&1&&(Jc(0,`po-button`,0),_t(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-notification-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-notification-basic/sample-po-notification-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-basic/sample-po-notification-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,o){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Notification Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-notification-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Or.Top},{label:`Bottom`,value:Or.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Eo.Success},{label:`Error`,value:Eo.Error},{label:`Warning`,value:Eo.Warning},{label:`Information`,value:Eo.Information}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let r={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(r.action=()=>this.poModal.open()),this.type){case Eo.Success:this.poNotification.success(r);break;case Eo.Error:this.poNotification.error(r);break;case Eo.Warning:this.poNotification.warning(r);break;case Eo.Information:this.poNotification.information(r);break;default:this.poNotification.success(r)}}static ɵfac=function(n){return new(n||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-labs`]],viewQuery:function(n,o){if(n&1&&Cu(ia,7),n&2){let s;No(s=xo())&&(o.poModal=s.first)}},standalone:!1,features:[we([Ru])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(n,o){if(n&1){let s=KO();Jc(0,`po-button`,1),_t(`p-click`,function(){return o.showNotification()}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.type,l)||(o.type=l),H_(l)}),Kg(),Jc(6,`po-radio-group`,4),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.orientation,l)||(o.orientation=l),H_(l)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.message,l)||(o.message=l),H_(l)}),Kg(),Jc(8,`po-number`,6),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.duration,l)||(o.duration=l),H_(l)}),Kg(),Jc(9,`po-switch`,7),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.action,l)||(o.action=l),H_(l)}),Kg(),Jc(10,`po-input`,8),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.actionLabel,l)||(o.actionLabel=l),H_(l)}),Kg(),Jc(11,`po-radio-group`,9),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.sizeActions,l)||(o.sizeActions=l),H_(l)}),Kg(),Jc(12,`div`,2)(13,`po-button`,10),_t(`p-click`,function(){return o.restore()}),Kg()()()(),Jc(14,`po-modal`,11),Mk(15,` Notification Action `),Kg()}n&2&&(wg(5),Kb(`ngModel`,o.type),Ab(`p-options`,o.typeOptions),q0(),wg(),Kb(`ngModel`,o.orientation),Ab(`p-options`,o.orientationOptions),q0(),wg(),Kb(`ngModel`,o.message),q0(),wg(),Kb(`ngModel`,o.duration),q0(),wg(),Kb(`ngModel`,o.action),q0(),wg(),Kb(`ngModel`,o.actionLabel),q0(),wg(),Kb(`ngModel`,o.sizeActions),Ab(`p-options`,o.sizeActionsOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Goe,Zte,R4,ia],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-notification-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-notification-labs/sample-po-notification-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-labs/sample-po-notification-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,o){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Notification Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-notification-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<po-divider />

<div class="po-row">
  <form #f="ngForm">
    <po-radio-group
      class="po-md-12"
      name="type"
      [(ngModel)]="type"
      p-columns="4"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

    <po-number class="po-md-6 po-lg-3" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

    <po-switch class="po-md-6 po-lg-3" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="sizeActions"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoRadioGroupOption,
  PoToasterOrientation,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  sizeActions: string;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
    this.sizeActions = 'medium';
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration,
      sizeActions: this.sizeActions
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(r){this.poNotification=r}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let r=this.products.findIndex(n=>n.productID===this.product);r>=0?(this.products[r].quantity+=this.quantity,this.products[r].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let r=this.productDetailsList.findIndex(n=>n.id===this.product);if(r>=0){let n=this.productDetailsList[r];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[r].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(r,n){let o=this.productDetailsList.find(s=>s.id===r);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(n){return new(n||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[we([Ru])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(n,o){if(n&1){let s=KO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.product,l)||(o.product=l),H_(l)}),_t(`p-change`,function(){return o.checkProduct()}),Kg(),Jc(4,`po-number`,3),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.quantity,l)||(o.quantity=l),H_(l)}),_t(`p-change`,function(){return o.checkQuantity()}),Kg(),Jc(5,`po-number`,4),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.price,l)||(o.price=l),H_(l)}),Kg(),Jc(6,`po-number`,5),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.stock,l)||(o.stock=l),H_(l)}),Kg(),Jc(7,`po-number`,6),G0(),Zb(`ngModelChange`,function(l){return U_(s),Rk(o.totalPrice,l)||(o.totalPrice=l),H_(l)}),Kg()(),Jc(8,`div`,1)(9,`po-button`,7),_t(`p-click`,function(){return o.addCart()}),Kg()()(),_u(10,`po-divider`)(11,`po-table`,8),Jc(12,`div`,1)(13,`div`,9)(14,`span`,10),Mk(15),Wk(16,`currency`),Kg()()()}if(n&2){let s=ok(1);wg(3),Kb(`ngModel`,o.product),Ab(`p-options`,o.productOptions),q0(),wg(),Kb(`ngModel`,o.quantity),Ab(`p-max`,o.stock),q0(),wg(),Kb(`ngModel`,o.price),q0(),wg(),Kb(`ngModel`,o.stock),q0(),wg(),Kb(`ngModel`,o.totalPrice),q0(),wg(2),Ab(`p-disabled`,s.form.invalid||o.stock===0),wg(2),Ab(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),wg(4),nm(`Total: R`,Yk(16,12,o.totalPriceSum),` `)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,w4,Goe,q4,hF],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-notification-sales`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-notification-sales/sample-po-notification-sales.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-sales/sample-po-notification-sales.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,o){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Notification - Sales`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-notification-sales`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` totalPriceSum | currency `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,` </span>
  </div>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-notification-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-success`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`method-warning`,1,`docs-api-method-table`],[`id`,`method-error`,1,`docs-api-method-table`],[`id`,`method-information`,1,`docs-api-method-table`],[`id`,`method-setDefaultDuration`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-notification`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-notification-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-notification-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-notification-duration`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-notification-message`,1,`docs-api-properties-row`],[`id`,`interface-po-notification-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`id`,`interface-po-notification-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`id`,`interface-po-notification-show-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-notification-size-actions`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-notification-support-message`,1,`docs-api-properties-row`]],template:function(n,o){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),Kg()(),_u(4,`div`,2),Jc(5,`h3`,3),Mk(6,`Services`),Kg(),Jc(7,`h4`,4)(8,`code`,5),Mk(9,`PoNotificationService`),Kg()(),Jc(10,`div`,2)(11,`p`),Mk(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),Kg(),Jc(13,`ul`)(14,`li`),Mk(15,`success,`),Kg(),Jc(16,`li`),Mk(17,`warning,`),Kg(),Jc(18,`li`),Mk(19,`error,`),Kg(),Jc(20,`li`),Mk(21,`information.`),Kg()(),Jc(22,`p`),Mk(23,`Cada um destes métodos recebe como parâmetro o objeto `),Jc(24,`code`),Mk(25,`PoNotification`),Kg(),Mk(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),Kg(),Jc(27,`p`),Mk(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),Kg(),Jc(29,`p`),Mk(30,`Notificações com ação ou notificações de `),Jc(31,`code`),Mk(32,`erro`),Kg(),Mk(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),Kg(),Jc(34,`p`),Mk(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),Kg()(),Jc(36,`h3`,6),Mk(37,`Métodos`),Kg(),Jc(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),Mk(44,` success `),Kg()()()()(),Jc(45,`tr`,12)(46,`td`,12)(47,`p`),Mk(48,`Emite uma notificação de sucesso.`),Kg()()()(),Jc(49,`h5`)(50,`b`),Mk(51,`Parâmetros`),Kg()(),Jc(52,`table`,13)(53,`tr`,14)(54,`th`,15),Mk(55,`Nome`),Kg(),Jc(56,`th`,15),Mk(57,`Tipo`),Kg(),Jc(58,`th`,15),Mk(59,`Descrição`),Kg()(),Jc(60,`tr`,8)(61,`td`,16),Mk(62,` notification`),Kg(),Jc(63,`td`,17)(64,`code`,18),Mk(65,` PoNotification `),Kg(),Jc(66,`code`,19),Mk(67,` string `),Kg()(),Jc(68,`td`,12)(69,`p`),Mk(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),Kg()()()(),_u(71,`br`),Jc(72,`table`,20)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),Mk(78,` warning `),Kg()()()()(),Jc(79,`tr`,12)(80,`td`,12)(81,`p`),Mk(82,`Emite uma notificação de atenção.`),Kg()()()(),Jc(83,`h5`)(84,`b`),Mk(85,`Parâmetros`),Kg()(),Jc(86,`table`,13)(87,`tr`,14)(88,`th`,15),Mk(89,`Nome`),Kg(),Jc(90,`th`,15),Mk(91,`Tipo`),Kg(),Jc(92,`th`,15),Mk(93,`Descrição`),Kg()(),Jc(94,`tr`,8)(95,`td`,16),Mk(96,` notification`),Kg(),Jc(97,`td`,17)(98,`code`,18),Mk(99,` PoNotification `),Kg(),Jc(100,`code`,19),Mk(101,` string `),Kg()(),Jc(102,`td`,12)(103,`p`),Mk(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),_u(105,`br`),Jc(106,`table`,21)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),Mk(112,` error `),Kg()()()()(),Jc(113,`tr`,12)(114,`td`,12)(115,`p`),Mk(116,`Emite uma notificação de erro.`),Kg()()()(),Jc(117,`h5`)(118,`b`),Mk(119,`Parâmetros`),Kg()(),Jc(120,`table`,13)(121,`tr`,14)(122,`th`,15),Mk(123,`Nome`),Kg(),Jc(124,`th`,15),Mk(125,`Tipo`),Kg(),Jc(126,`th`,15),Mk(127,`Descrição`),Kg()(),Jc(128,`tr`,8)(129,`td`,16),Mk(130,` notification`),Kg(),Jc(131,`td`,17)(132,`code`,18),Mk(133,` PoNotification `),Kg(),Jc(134,`code`,19),Mk(135,` string `),Kg()(),Jc(136,`td`,12)(137,`p`),Mk(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),_u(139,`br`),Jc(140,`table`,22)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),Mk(146,` information `),Kg()()()()(),Jc(147,`tr`,12)(148,`td`,12)(149,`p`),Mk(150,`Emite uma notificação de informação.`),Kg()()()(),Jc(151,`h5`)(152,`b`),Mk(153,`Parâmetros`),Kg()(),Jc(154,`table`,13)(155,`tr`,14)(156,`th`,15),Mk(157,`Nome`),Kg(),Jc(158,`th`,15),Mk(159,`Tipo`),Kg(),Jc(160,`th`,15),Mk(161,`Descrição`),Kg()(),Jc(162,`tr`,8)(163,`td`,16),Mk(164,` notification`),Kg(),Jc(165,`td`,17)(166,`code`,18),Mk(167,` PoNotification `),Kg(),Jc(168,`code`,19),Mk(169,` string `),Kg()(),Jc(170,`td`,12)(171,`p`),Mk(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),_u(173,`br`),Jc(174,`table`,23)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),Mk(180,` setDefaultDuration `),Kg()()()()(),Jc(181,`tr`,12)(182,`td`,12)(183,`p`),Mk(184,`Define em milissegundos a duração padrão para as notificações.`),Kg(),Jc(185,`blockquote`)(186,`p`),Mk(187,`Padrão 9 segundos.`),Kg()()()()(),Jc(188,`h5`)(189,`b`),Mk(190,`Parâmetros`),Kg()(),Jc(191,`table`,13)(192,`tr`,14)(193,`th`,15),Mk(194,`Nome`),Kg(),Jc(195,`th`,15),Mk(196,`Tipo`),Kg(),Jc(197,`th`,15),Mk(198,`Descrição`),Kg()(),Jc(199,`tr`,8)(200,`td`,16),Mk(201,` defaultDuration`),Kg(),Jc(202,`td`,17)(203,`code`,24),Mk(204,` number `),Kg()(),Jc(205,`td`,12)(206,`p`),Mk(207,`Duração em milisegundos`),Kg()()()(),_u(208,`br`),Jc(209,`h3`),Mk(210,`Interfaces`),Kg(),Jc(211,`h4`,25)(212,`code`,5),Mk(213,`PoNotification`),Kg()(),Jc(214,`div`,2)(215,`p`),Mk(216,`Interface para uso do serviço PoNotification.`),Kg()(),Jc(217,`h4`,6),Mk(218,`Propriedades`),Kg(),Jc(219,`table`,13)(220,`tr`,14)(221,`th`,15),Mk(222,`Nome`),Kg(),Jc(223,`th`,15),Mk(224,`Tipo`),Kg(),Jc(225,`th`,15),Mk(226,`Descrição`),Kg()(),Jc(227,`tr`,26)(228,`td`,16)(229,`div`,10)(230,`span`,11),Mk(231,` action`),_u(232,`br`),Kg()()(),Jc(233,`td`,17)(234,`code`,27),Mk(235,`Function`),Kg()(),Jc(236,`td`,12)(237,`em`)(238,`strong`),Mk(239,`(opcional)`),Kg()(),Jc(240,`p`),Mk(241,`Ação para a notificação.`),Kg(),Jc(242,`p`),Mk(243,`Ao utilizar esta propriedade em conjunto com a `),Jc(244,`code`),Mk(245,`actionLabel`),Kg(),Mk(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),Kg(),Jc(247,`p`),Mk(248,`Caso não informar a propriedade `),Jc(249,`code`),Mk(250,`actionLabel`),Kg(),Mk(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),Kg()()(),Jc(252,`tr`,28)(253,`td`,16)(254,`div`,10)(255,`span`,11),Mk(256,` actionLabel`),_u(257,`br`),Kg()()(),Jc(258,`td`,17)(259,`code`,19),Mk(260,`string`),Kg()(),Jc(261,`td`,12)(262,`em`)(263,`strong`),Mk(264,`(opcional)`),Kg()(),Jc(265,`p`),Mk(266,`Label do botão quando houver uma ação definida.`),Kg()()(),Jc(267,`tr`,29)(268,`td`,16)(269,`div`,10)(270,`span`,11),Mk(271,` duration`),_u(272,`br`),Kg()()(),Jc(273,`td`,17)(274,`code`,30),Mk(275,`number`),Kg()(),Jc(276,`td`,12)(277,`em`)(278,`strong`),Mk(279,`(opcional)`),Kg()(),Jc(280,`p`),Mk(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),Kg(),Jc(282,`blockquote`)(283,`p`),Mk(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Jc(285,`code`),Mk(286,`erro`),Kg(),Mk(287,`, a propriedade será ignorada.`),Kg()()()(),Jc(288,`tr`,31)(289,`td`,16)(290,`div`,10)(291,`span`,11),Mk(292,` message`),_u(293,`br`),Kg()()(),Jc(294,`td`,17)(295,`code`,19),Mk(296,`string`),Kg()(),Jc(297,`td`,12)(298,`p`),Mk(299,`Mensagem a ser exibida na notificação.`),Kg()()(),Jc(300,`tr`,32)(301,`td`,16)(302,`div`,10)(303,`span`,11),Mk(304,` mode`),_u(305,`br`),Kg()()(),Jc(306,`td`,17)(307,`code`,33),Mk(308,`PoToasterMode`),Kg()(),Jc(309,`td`,12)(310,`em`)(311,`strong`),Mk(312,`(opcional)`),Kg()(),Jc(313,`p`),Mk(314,`Define o Modo/Tipo do Toaster.`),Kg()()(),Jc(315,`tr`,34)(316,`td`,16)(317,`div`,10)(318,`span`,11),Mk(319,` orientation`),_u(320,`br`),Kg()()(),Jc(321,`td`,17)(322,`code`,35),Mk(323,`PoToasterOrientation`),Kg()(),Jc(324,`td`,12)(325,`em`)(326,`strong`),Mk(327,`(opcional)`),Kg()(),Jc(328,`p`),Mk(329,`Posição da notificação na página que pode ser `),Jc(330,`code`),Mk(331,`Top`),Kg(),Mk(332,` (topo) ou `),Jc(333,`code`),Mk(334,`Bottom`),Kg(),Mk(335,`(rodapé). A posição padrão é `),Jc(336,`code`),Mk(337,`bottom`),Kg(),Mk(338,`.`),Kg()()(),Jc(339,`tr`,36)(340,`td`,16)(341,`div`,10)(342,`span`,11),Mk(343,` showClose`),_u(344,`br`),Kg()()(),Jc(345,`td`,17)(346,`code`,37),Mk(347,`boolean`),Kg()(),Jc(348,`td`,12)(349,`em`)(350,`strong`),Mk(351,`(opcional)`),Kg()(),Jc(352,`p`),Mk(353,`Exibe o botão de fechar a notificação.`),Kg(),Jc(354,`blockquote`)(355,`p`),Mk(356,`Caso a notificação seja do modo `),Jc(357,`code`),Mk(358,`default`),Kg(),Mk(359,`, a propriedade será ignorada.`),Kg()()()(),Jc(360,`tr`,38)(361,`td`,16)(362,`div`,10)(363,`span`,11),Mk(364,` sizeActions`),_u(365,`br`),Kg()()(),Jc(366,`td`,17)(367,`code`,19),Mk(368,`string`),Kg()(),Jc(369,`td`,12)(370,`em`)(371,`strong`),Mk(372,`(opcional)`),Kg()(),Jc(373,`p`),Mk(374,`Define o tamanho das ações:`),Kg(),Jc(375,`ul`)(376,`li`)(377,`code`),Mk(378,`small`),Kg(),Mk(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),Kg(),Jc(380,`li`)(381,`code`),Mk(382,`medium`),Kg(),Mk(383,`: aplica a medida medium de cada ação.`),Kg()(),Jc(384,`blockquote`)(385,`p`),Mk(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(387,`code`),Mk(388,`medium`),Kg(),Mk(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(390,`a`,39),Mk(391,`po-theme`),Kg(),Mk(392,`.`),Kg()()()(),Jc(393,`tr`,40)(394,`td`,16)(395,`div`,10)(396,`span`,11),Mk(397,` supportMessage`),_u(398,`br`),Kg()()(),Jc(399,`td`,17)(400,`code`,19),Mk(401,`string`),Kg()(),Jc(402,`td`,12)(403,`em`)(404,`strong`),Mk(405,`(opcional)`),Kg()(),Jc(406,`p`),Mk(407,`Mensagem de suporte a ser exibida na notificação.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Le(a,Oe){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-notification-basic-view`)(2,`sample-po-notification-labs-view`)(3,`sample-po-notification-sales-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Notification`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,n){this.route=r,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let n=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Notification · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(n,o){n&1&&(Jc(0,`po-page-default`,0),LO(1,Le,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-notification-doc`),Kg()()),n&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,be,Ee,ye,Pe],encapsulation:2,changeDetection:1})}return a})()}];var ve=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(qe),GV]})}return a})();var mt=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,ve]})}return a})();export{mt as DocPoNotificationModule};
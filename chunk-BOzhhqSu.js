import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,E as G4,Ea as jk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,Li as WL,M as Ize,Ni as Vk,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,St as Vze,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de$1,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,jr as GV,mi as QL,or as An,pa as ge,qi as Zb,rr as AZ,sn as j4,zr as I}from"./chunk-DdK63a0t.js";var ce=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var ue=o=>[o];var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,l){a&1&&_u(0,`po-menu-panel`,0),a&2&&Ab(`p-menus`,jk(2,ue,Vk(1,ce)))},dependencies:[Ize],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-menu-panel-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,l){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu Panel Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-menu-panel-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,oe],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(i){let a=Object.assign({},i,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(i){this.menuItemSelected=i.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,l){if(a&1){let u=KO();Jc(0,`div`,1),_u(1,`po-menu-panel`,2),Jc(2,`po-page-default`,3)(3,`div`,4),_u(4,`po-info`,5),Kg(),_u(5,`po-divider`),Jc(6,`div`,4)(7,`po-input`,6),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(l.logo,m)||(l.logo=m),H_(m)}),Kg()(),Jc(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(l.menuItem.label,m)||(l.menuItem.label=m),H_(m)}),Kg(),Jc(12,`po-url`,8),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(l.menuItem.link,m)||(l.menuItem.link=m),H_(m)}),Kg()(),Jc(13,`div`,4)(14,`po-radio-group`,9),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(l.menuItem.icon,m)||(l.menuItem.icon=m),H_(m)}),Kg()(),Jc(15,`div`,4)(16,`po-button`,10),_t(`p-click`,function(){U_(u);let m=ok(9);return l.addMenuItem(l.menuItem),H_(m.reset())}),Kg(),Jc(17,`po-button`,11),_t(`p-click`,function(){U_(u);let m=ok(9);return l.restore(),H_(m.reset())}),Kg()()()()()}if(a&2){let u=ok(9);wg(),Ab(`p-menus`,l.menuItems)(`p-logo`,l.logo),wg(3),Ab(`p-value`,l.menuItemSelected),wg(3),Kb(`ngModel`,l.logo),q0(),wg(4),Kb(`ngModel`,l.menuItem.label),q0(),wg(),Kb(`ngModel`,l.menuItem.link),q0(),wg(2),Kb(`ngModel`,l.menuItem.icon),Ab(`p-options`,l.iconsOptions),q0(),wg(2),Ab(`p-disabled`,u.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Zte,G4,Joe,Ize,Mze],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-menu-panel-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,l){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu Panel Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-menu-panel-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-wrapper-menu-panel">
  <po-menu-panel [p-menus]="menuItems" [p-logo]="logo"> </po-menu-panel>

  <po-page-default p-title="PO Menu Panel">
    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <po-divider />

    <div class="po-row">
      <po-input
        class="po-md-12"
        name="logo"
        [(ngModel)]="logo"
        p-label="Logo"
        p-help="Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg"
      >
      </po-input>
    </div>

    <form #fMenuPanel="ngForm">
      <div class="po-row">
        <po-input class="po-md-6" name="label" [(ngModel)]="menuItem.label" p-label="Label" p-required> </po-input>

        <po-url class="po-md-6" name="link" [(ngModel)]="menuItem.link" p-label="External link" p-placeholder="http://">
        </po-url>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="icon"
          [(ngModel)]="menuItem.icon"
          p-label="Icon"
          p-required
          [p-options]="iconsOptions"
        >
        </po-radio-group>
      </div>

      <div class="po-row">
        <po-button
          class="po-xl-2 po-md-4"
          [p-disabled]="fMenuPanel.invalid"
          p-label="Add"
          (p-click)="addMenuItem(menuItem); fMenuPanel.reset()"
        >
        </po-button>

        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore(); fMenuPanel.reset()">
        </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-labs',
  templateUrl: './sample-po-menu-panel-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelLabsComponent implements OnInit {
  menuItem: PoMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<PoMenuPanelItem>;
  menuItemSelected: string;
  logo: string;

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: PoMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected.bind(this) });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
    this.logo = undefined;
  }

  private onMenuItemSelected(menu: PoMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ie],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(i){this.title=i.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,l){a&1&&(Jc(0,`div`,0),_u(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),Kg()),a&2&&(wg(2),Ab(`p-menus`,l.menuItems),wg(),Ab(`p-title`,l.title))},dependencies:[Ize,Mze,Vze],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-menu-panel-customer`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,l){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Menu Panel - Customers`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-menu-panel-customer`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-customer',
  templateUrl: './sample-po-menu-panel-customer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelCustomerComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'an an-house-line' },
    { label: 'Customers', action: this.changeTitle.bind(this), icon: 'an an-user' },
    { label: 'New Sale', action: this.changeTitle.bind(this), icon: 'an an-money' },
    { label: 'Reports', action: this.changeTitle.bind(this), icon: 'an an-newspaper' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'an an-gear' }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-menu-panel-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-logo-alt`,1,`docs-api-properties-row`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[`id`,`interface-po-menu-panel-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-panel-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-menu-panel-item-icon`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-menu-panel-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-panel-item-link`,1,`docs-api-properties-row`]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-menu-panel.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoMenuPanelComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),Kg(),Jc(15,`p`),Mk(16,`O componente `),Jc(17,`code`),Mk(18,`po-menu-panel`),Kg(),Mk(19,` recebe uma lista de objetos do tipo `),Jc(20,`code`),Mk(21,`MenuPanelItem`),Kg(),Mk(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Jc(23,`code`),Mk(24,`RouterModule`),Kg(),Mk(25,` e `),Jc(26,`code`),Mk(27,`Routes`),Kg(),Mk(28,` do módulo principal de sua aplicação:`),Kg(),Jc(29,`pre`)(30,`code`),Mk(31,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),Kg()(),Jc(32,`p`),Mk(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Kg(),Jc(34,`pre`)(35,`code`),Mk(36,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),Kg()()(),Jc(37,`div`,6)(38,`h4`,7),Mk(39,`Seletor`),Kg(),Jc(40,`pre`,8),Mk(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),Kg()(),Jc(42,`h4`,9),Mk(43,`Propriedades`),Kg(),Jc(44,`table`,10)(45,`tr`,11)(46,`th`,12),Mk(47,`Nome`),Kg(),Jc(48,`th`,12),Mk(49,`Tipo`),Kg(),Jc(50,`th`,12),Mk(51,`Padrão`),Kg(),Jc(52,`th`,12),Mk(53,`Descrição`),Kg()(),Jc(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),Mk(58,` p-logo`),_u(59,`br`),Kg()()(),Jc(60,`td`,17)(61,`code`,18),Mk(62,`string`),Kg()(),Jc(63,`td`,19),Mk(64,`-`),Kg(),Jc(65,`td`,20)(66,`em`)(67,`strong`),Mk(68,`(opcional)`),Kg()(),Jc(69,`p`),Mk(70,`Caminho para a logomarca localizada na parte superior do menu.`),Kg(),Jc(71,`blockquote`)(72,`p`)(73,`strong`),Mk(74,`Importante`),Kg(),Mk(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),Kg()()()(),Jc(76,`tr`,21)(77,`td`,14)(78,`div`,15)(79,`span`,16),Mk(80,` p-logo-alt`),_u(81,`br`),Kg()()(),Jc(82,`td`,17)(83,`code`,18),Mk(84,`string`),Kg()(),Jc(85,`td`,19)(86,`p`)(87,`code`),Mk(88,`Logomarca início`),Kg()()(),Jc(89,`td`,20)(90,`em`)(91,`strong`),Mk(92,`(opcional)`),Kg()(),Jc(93,`p`),Mk(94,`Define o texto alternativo para a logomarca.`),Kg(),Jc(95,`blockquote`)(96,`p`)(97,`strong`),Mk(98,`Importante`),Kg(),Mk(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Kg()()()(),Jc(100,`tr`,22)(101,`td`,14)(102,`div`,15)(103,`span`,16),Mk(104,` p-menus`),_u(105,`br`),Kg()()(),Jc(106,`td`,17)(107,`code`,23),Mk(108,`PoMenuPanelItem[]`),Kg()(),Jc(109,`td`,19),Mk(110,`-`),Kg(),Jc(111,`td`,20)(112,`p`),Mk(113,`Lista dos itens do `),Jc(114,`code`),Mk(115,`po-menu-panel`),Kg(),Mk(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg()()()(),Jc(117,`h3`),Mk(118,`Interfaces`),Kg(),Jc(119,`h4`,24)(120,`code`,5),Mk(121,`PoMenuPanelItem`),Kg()(),Jc(122,`div`,2)(123,`p`),Mk(124,`Interface para os itens de menu do componente `),Jc(125,`code`),Mk(126,`po-menu-panel`),Kg(),Mk(127,`.`),Kg()(),Jc(128,`h4`,9),Mk(129,`Propriedades`),Kg(),Jc(130,`table`,10)(131,`tr`,11)(132,`th`,12),Mk(133,`Nome`),Kg(),Jc(134,`th`,12),Mk(135,`Tipo`),Kg(),Jc(136,`th`,12),Mk(137,`Descrição`),Kg()(),Jc(138,`tr`,25)(139,`td`,14)(140,`div`,15)(141,`span`,16),Mk(142,` action`),_u(143,`br`),Kg()()(),Jc(144,`td`,17)(145,`code`,26),Mk(146,`Function`),Kg()(),Jc(147,`td`,20)(148,`em`)(149,`strong`),Mk(150,`(opcional)`),Kg()(),Jc(151,`p`),Mk(152,`Ação personalizada para clique do item de menu.`),Kg()()(),Jc(153,`tr`,27)(154,`td`,14)(155,`div`,15)(156,`span`,16),Mk(157,` icon`),_u(158,`br`),Kg()()(),Jc(159,`td`,17)(160,`code`,18),Mk(161,`string`),Kg()(),Jc(162,`td`,20)(163,`p`),Mk(164,`Ícone para o item de menu, os `),Jc(165,`a`,28),Mk(166,`ícones aceitos`),Kg(),Mk(167,` são os definidos no guia de estilo da PO.`),Kg()()(),Jc(168,`tr`,29)(169,`td`,14)(170,`div`,15)(171,`span`,16),Mk(172,` label`),_u(173,`br`),Kg()()(),Jc(174,`td`,17)(175,`code`,18),Mk(176,`string`),Kg()(),Jc(177,`td`,20)(178,`p`),Mk(179,`Texto do item de menu.`),Kg()()(),Jc(180,`tr`,30)(181,`td`,14)(182,`div`,15)(183,`span`,16),Mk(184,` link`),_u(185,`br`),Kg()()(),Jc(186,`td`,17)(187,`code`,18),Mk(188,`string`),Kg()(),Jc(189,`td`,20)(190,`em`)(191,`strong`),Mk(192,`(opcional)`),Kg()(),Jc(193,`p`),Mk(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function ve(o,Ee){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-menu-panel-basic-view`)(2,`sample-po-menu-panel-labs-view`)(3,`sample-po-menu-panel-customer-view`),Kg()),o&2){let i=tk();Ab(`hidden`,i.activeTab!==`web`)}}var Ce=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Menu Panel`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Menu Panel · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0),LO(1,ve,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-menu-panel-doc`),Kg()()),a&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,ae,le,me,re],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(Ce),GV]})}return o})();var Ze=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,de]})}return o})();export{Ze as DocPoMenuPanelModule};
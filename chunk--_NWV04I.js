import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,E as G4,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,Lr as Kg,M as Ize,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,St as Vze,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var he=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var be=o=>[o];var ie=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&vu(0,`po-menu-panel`,0),a&2&&Rb(`p-menus`,Vk(2,be,Lk(1,he)))},dependencies:[Ize],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-menu-panel-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu Panel Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-menu-panel-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,fe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ie],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(l){let a=Object.assign({},l,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(l){this.menuItemSelected=l.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=YO();Qc(0,`div`,1),vu(1,`po-menu-panel`,2),Qc(2,`po-page-default`,3)(3,`div`,4),vu(4,`po-info`,5),Kg(),vu(5,`po-divider`),Qc(6,`div`,4)(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(i.logo,r)||(i.logo=r),U_(r)}),Kg()(),Qc(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(i.menuItem.label,r)||(i.menuItem.label=r),U_(r)}),Kg(),Qc(12,`po-url`,8),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(i.menuItem.link,r)||(i.menuItem.link=r),U_(r)}),Kg()(),Qc(13,`div`,4)(14,`po-radio-group`,9),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(i.menuItem.icon,r)||(i.menuItem.icon=r),U_(r)}),Kg()(),Qc(15,`div`,4)(16,`po-button`,10),vt(`p-click`,function(){B_(c);let r=ik(9);return i.addMenuItem(i.menuItem),U_(r.reset())}),Kg(),Qc(17,`po-button`,11),vt(`p-click`,function(){B_(c);let r=ik(9);return i.restore(),U_(r.reset())}),Kg()()()()()}if(a&2){let c=ik(9);wg(),Rb(`p-menus`,i.menuItems)(`p-logo`,i.logo),wg(3),Rb(`p-value`,i.menuItemSelected),wg(3),Yb(`ngModel`,i.logo),W0(),wg(4),Yb(`ngModel`,i.menuItem.label),W0(),wg(),Yb(`ngModel`,i.menuItem.link),W0(),wg(2),Yb(`ngModel`,i.menuItem.icon),Rb(`p-options`,i.iconsOptions),W0(),wg(2),Rb(`p-disabled`,c.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,G4,Joe,Ize,Mze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-menu-panel-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu Panel Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-wrapper-menu-panel">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-menu-panel-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(l){this.title=l.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(Qc(0,`div`,0),vu(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),Kg()),a&2&&(wg(2),Rb(`p-menus`,i.menuItems),wg(),Rb(`p-title`,i.title))},dependencies:[Ize,Mze,Vze],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-menu-panel-customer`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Menu Panel - Customers`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-menu-panel-customer`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-menu-panel-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-logo-alt`,1,`docs-api-properties-row`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[`id`,`interface-po-menu-panel-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-menu-panel-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-menu-panel-item-icon`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-menu-panel-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-menu-panel-item-link`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-menu-panel.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoMenuPanelComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),Kg(),Qc(15,`p`),Sk(16,`O componente `),Qc(17,`code`),Sk(18,`po-menu-panel`),Kg(),Sk(19,` recebe uma lista de objetos do tipo `),Qc(20,`code`),Sk(21,`MenuPanelItem`),Kg(),Sk(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Qc(23,`code`),Sk(24,`RouterModule`),Kg(),Sk(25,` e `),Qc(26,`code`),Sk(27,`Routes`),Kg(),Sk(28,` do módulo principal de sua aplicação:`),Kg(),Qc(29,`pre`)(30,`code`),Sk(31,`import { RouterModule, Routes } from '@angular/router';

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
`),Kg()(),Qc(32,`p`),Sk(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Kg(),Qc(34,`pre`)(35,`code`),Sk(36,`import { NgModule } from '@angular/core';

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
`),Kg()()(),Qc(37,`div`,6)(38,`h4`,7),Sk(39,`Seletor`),Kg(),Qc(40,`pre`,8),Sk(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),Kg()(),Qc(42,`h4`,9),Sk(43,`Propriedades`),Kg(),Qc(44,`table`,10)(45,`tr`,11)(46,`th`,12),Sk(47,`Nome`),Kg(),Qc(48,`th`,12),Sk(49,`Tipo`),Kg(),Qc(50,`th`,12),Sk(51,`Padrão`),Kg(),Qc(52,`th`,12),Sk(53,`Descrição`),Kg()(),Qc(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),Sk(58,` p-logo`),vu(59,`br`),Kg()()(),Qc(60,`td`,17)(61,`code`,18),Sk(62,`string`),Kg()(),Qc(63,`td`,19),Sk(64,`-`),Kg(),Qc(65,`td`,20)(66,`em`)(67,`strong`),Sk(68,`(opcional)`),Kg()(),Qc(69,`p`),Sk(70,`Caminho para a logomarca localizada na parte superior do menu.`),Kg(),Qc(71,`blockquote`)(72,`p`)(73,`strong`),Sk(74,`Importante`),Kg(),Sk(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),Kg()()()(),Qc(76,`tr`,21)(77,`td`,14)(78,`div`,15)(79,`span`,16),Sk(80,` p-logo-alt`),vu(81,`br`),Kg()()(),Qc(82,`td`,17)(83,`code`,18),Sk(84,`string`),Kg()(),Qc(85,`td`,19)(86,`p`)(87,`code`),Sk(88,`Logomarca início`),Kg()()(),Qc(89,`td`,20)(90,`em`)(91,`strong`),Sk(92,`(opcional)`),Kg()(),Qc(93,`p`),Sk(94,`Define o texto alternativo para a logomarca.`),Kg(),Qc(95,`blockquote`)(96,`p`)(97,`strong`),Sk(98,`Importante`),Kg(),Sk(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Kg()()()(),Qc(100,`tr`,22)(101,`td`,14)(102,`div`,15)(103,`span`,16),Sk(104,` p-menus`),vu(105,`br`),Kg()()(),Qc(106,`td`,17)(107,`code`,23),Sk(108,`PoMenuPanelItem[]`),Kg()(),Qc(109,`td`,19),Sk(110,`-`),Kg(),Qc(111,`td`,20)(112,`p`),Sk(113,`Lista dos itens do `),Qc(114,`code`),Sk(115,`po-menu-panel`),Kg(),Sk(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg()()()(),Qc(117,`h3`),Sk(118,`Interfaces`),Kg(),Qc(119,`h4`,24)(120,`code`,5),Sk(121,`PoMenuPanelItem`),Kg()(),Qc(122,`div`,2)(123,`p`),Sk(124,`Interface para os itens de menu do componente `),Qc(125,`code`),Sk(126,`po-menu-panel`),Kg(),Sk(127,`.`),Kg()(),Qc(128,`h4`,9),Sk(129,`Propriedades`),Kg(),Qc(130,`table`,10)(131,`tr`,11)(132,`th`,12),Sk(133,`Nome`),Kg(),Qc(134,`th`,12),Sk(135,`Tipo`),Kg(),Qc(136,`th`,12),Sk(137,`Descrição`),Kg()(),Qc(138,`tr`,25)(139,`td`,14)(140,`div`,15)(141,`span`,16),Sk(142,` action`),vu(143,`br`),Kg()()(),Qc(144,`td`,17)(145,`code`,26),Sk(146,`Function`),Kg()(),Qc(147,`td`,20)(148,`em`)(149,`strong`),Sk(150,`(opcional)`),Kg()(),Qc(151,`p`),Sk(152,`Ação personalizada para clique do item de menu.`),Kg()()(),Qc(153,`tr`,27)(154,`td`,14)(155,`div`,15)(156,`span`,16),Sk(157,` icon`),vu(158,`br`),Kg()()(),Qc(159,`td`,17)(160,`code`,18),Sk(161,`string`),Kg()(),Qc(162,`td`,20)(163,`p`),Sk(164,`Ícone para o item de menu, os `),Qc(165,`a`,28),Sk(166,`ícones aceitos`),Kg(),Sk(167,` são os definidos no guia de estilo da PO.`),Kg()()(),Qc(168,`tr`,29)(169,`td`,14)(170,`div`,15)(171,`span`,16),Sk(172,` label`),vu(173,`br`),Kg()()(),Qc(174,`td`,17)(175,`code`,18),Sk(176,`string`),Kg()(),Qc(177,`td`,20)(178,`p`),Sk(179,`Texto do item de menu.`),Kg()()(),Qc(180,`tr`,30)(181,`td`,14)(182,`div`,15)(183,`span`,16),Sk(184,` link`),vu(185,`br`),Kg()()(),Qc(186,`td`,17)(187,`code`,18),Sk(188,`string`),Kg()(),Qc(189,`td`,20)(190,`em`)(191,`strong`),Sk(192,`(opcional)`),Kg()(),Qc(193,`p`),Sk(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ie(o,_e){if(o&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-menu-panel-basic-view`)(2,`sample-po-menu-panel-labs-view`)(3,`sample-po-menu-panel-customer-view`),Kg()}if(o&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Te=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ie,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-menu-panel-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,se,de,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Te),GV]})}return o})();var en=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ge]})}return o})();export{en as DocPoMenuPanelModule};
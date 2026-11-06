import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,E as H4,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,ca as jk,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,o as Aze,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_,zn as wze}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var he=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var be=o=>[o];var ie=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&_u(0,`po-menu-panel`,0),a&2&&Rb(`p-menus`,Bk(2,be,jk(1,he)))},dependencies:[wze],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu Panel Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-menu-panel-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ie],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(l){let a=Object.assign({},l,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(l){this.menuItemSelected=l.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`div`,1),_u(1,`po-menu-panel`,2),Jc(2,`po-page-default`,3)(3,`div`,4),_u(4,`po-info`,5),Zg(),_u(5,`po-divider`),Jc(6,`div`,4)(7,`po-input`,6),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(i.logo,r)||(i.logo=r),H_(r)}),Zg()(),Jc(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(i.menuItem.label,r)||(i.menuItem.label=r),H_(r)}),Zg(),Jc(12,`po-url`,8),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(i.menuItem.link,r)||(i.menuItem.link=r),H_(r)}),Zg()(),Jc(13,`div`,4)(14,`po-radio-group`,9),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(i.menuItem.icon,r)||(i.menuItem.icon=r),H_(r)}),Zg()(),Jc(15,`div`,4)(16,`po-button`,10),vt(`p-click`,function(){U_(c);let r=sk(9);return i.addMenuItem(i.menuItem),H_(r.reset())}),Zg(),Jc(17,`po-button`,11),vt(`p-click`,function(){U_(c);let r=sk(9);return i.restore(),H_(r.reset())}),Zg()()()()()}if(a&2){let c=sk(9);Ig(),Rb(`p-menus`,i.menuItems)(`p-logo`,i.logo),Ig(3),Rb(`p-value`,i.menuItemSelected),Ig(3),Yb(`ngModel`,i.logo),Y0(),Ig(4),Yb(`ngModel`,i.menuItem.label),Y0(),Ig(),Yb(`ngModel`,i.menuItem.link),Y0(),Ig(2),Yb(`ngModel`,i.menuItem.icon),Rb(`p-options`,i.iconsOptions),Y0(),Ig(2),Rb(`p-disabled`,c.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,Gte,H4,Yoe,wze,Tze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu Panel Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-wrapper-menu-panel">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-menu-panel-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(l){this.title=l.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(Jc(0,`div`,0),_u(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),Zg()),a&2&&(Ig(2),Rb(`p-menus`,i.menuItems),Ig(),Rb(`p-title`,i.title))},dependencies:[wze,Tze,Aze],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Menu Panel - Customers`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-menu-panel-customer`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,re],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-menu-panel.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoMenuPanelComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),Zg(),Jc(15,`p`),Tk(16,`O componente `),Jc(17,`code`),Tk(18,`po-menu-panel`),Zg(),Tk(19,` recebe uma lista de objetos do tipo `),Jc(20,`code`),Tk(21,`MenuPanelItem`),Zg(),Tk(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Jc(23,`code`),Tk(24,`RouterModule`),Zg(),Tk(25,` e `),Jc(26,`code`),Tk(27,`Routes`),Zg(),Tk(28,` do módulo principal de sua aplicação:`),Zg(),Jc(29,`pre`)(30,`code`),Tk(31,`import { RouterModule, Routes } from '@angular/router';

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
`),Zg()(),Jc(32,`p`),Tk(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),Zg(),Jc(34,`pre`)(35,`code`),Tk(36,`import { NgModule } from '@angular/core';

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
`),Zg()()(),Jc(37,`div`,6)(38,`h4`,7),Tk(39,`Seletor`),Zg(),Jc(40,`pre`,8),Tk(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),Zg()(),Jc(42,`h4`,9),Tk(43,`Propriedades`),Zg(),Jc(44,`table`,10)(45,`tr`,11)(46,`th`,12),Tk(47,`Nome`),Zg(),Jc(48,`th`,12),Tk(49,`Tipo`),Zg(),Jc(50,`th`,12),Tk(51,`Padrão`),Zg(),Jc(52,`th`,12),Tk(53,`Descrição`),Zg()(),Jc(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),Tk(58,` p-logo`),_u(59,`br`),Zg()()(),Jc(60,`td`,17)(61,`code`,18),Tk(62,`string`),Zg()(),Jc(63,`td`,19),Tk(64,`-`),Zg(),Jc(65,`td`,20)(66,`em`)(67,`strong`),Tk(68,`(opcional)`),Zg()(),Jc(69,`p`),Tk(70,`Caminho para a logomarca localizada na parte superior do menu.`),Zg(),Jc(71,`blockquote`)(72,`p`)(73,`strong`),Tk(74,`Importante`),Zg(),Tk(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),Zg()()()(),Jc(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),Tk(80,` p-logo-alt`),_u(81,`br`),Zg()()(),Jc(82,`td`,17)(83,`code`,18),Tk(84,`string`),Zg()(),Jc(85,`td`,19)(86,`p`)(87,`code`),Tk(88,`Logomarca início`),Zg()()(),Jc(89,`td`,20)(90,`em`)(91,`strong`),Tk(92,`(opcional)`),Zg()(),Jc(93,`p`),Tk(94,`Define o texto alternativo para a logomarca.`),Zg(),Jc(95,`blockquote`)(96,`p`)(97,`strong`),Tk(98,`Importante`),Zg(),Tk(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),Zg()()()(),Jc(100,`tr`,13)(101,`td`,14)(102,`div`,15)(103,`span`,16),Tk(104,` p-menus`),_u(105,`br`),Zg()()(),Jc(106,`td`,17)(107,`code`,21),Tk(108,`PoMenuPanelItem[]`),Zg()(),Jc(109,`td`,19),Tk(110,`-`),Zg(),Jc(111,`td`,20)(112,`p`),Tk(113,`Lista dos itens do `),Jc(114,`code`),Tk(115,`po-menu-panel`),Zg(),Tk(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Zg()()()(),Jc(117,`h3`),Tk(118,`Interfaces`),Zg(),Jc(119,`h4`,22)(120,`code`,5),Tk(121,`PoMenuPanelItem`),Zg()(),Jc(122,`div`,2)(123,`p`),Tk(124,`Interface para os itens de menu do componente `),Jc(125,`code`),Tk(126,`po-menu-panel`),Zg(),Tk(127,`.`),Zg()(),Jc(128,`h4`,9),Tk(129,`Propriedades`),Zg(),Jc(130,`table`,10)(131,`tr`,11)(132,`th`,12),Tk(133,`Nome`),Zg(),Jc(134,`th`,12),Tk(135,`Tipo`),Zg(),Jc(136,`th`,12),Tk(137,`Descrição`),Zg()(),Jc(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),Tk(142,` action`),_u(143,`br`),Zg()()(),Jc(144,`td`,17)(145,`code`,23),Tk(146,`Function`),Zg()(),Jc(147,`td`,20)(148,`em`)(149,`strong`),Tk(150,`(opcional)`),Zg()(),Jc(151,`p`),Tk(152,`Ação personalizada para clique do item de menu.`),Zg()()(),Jc(153,`tr`,13)(154,`td`,14)(155,`div`,15)(156,`span`,16),Tk(157,` icon`),_u(158,`br`),Zg()()(),Jc(159,`td`,17)(160,`code`,18),Tk(161,`string`),Zg()(),Jc(162,`td`,20)(163,`p`),Tk(164,`Ícone para o item de menu, os `),Jc(165,`a`,24),Tk(166,`ícones aceitos`),Zg(),Tk(167,` são os definidos no guia de estilo da PO.`),Zg()()(),Jc(168,`tr`,13)(169,`td`,14)(170,`div`,15)(171,`span`,16),Tk(172,` label`),_u(173,`br`),Zg()()(),Jc(174,`td`,17)(175,`code`,18),Tk(176,`string`),Zg()(),Jc(177,`td`,20)(178,`p`),Tk(179,`Texto do item de menu.`),Zg()()(),Jc(180,`tr`,13)(181,`td`,14)(182,`div`,15)(183,`span`,16),Tk(184,` link`),_u(185,`br`),Zg()()(),Jc(186,`td`,17)(187,`code`,18),Tk(188,`string`),Zg()(),Jc(189,`td`,20)(190,`em`)(191,`strong`),Tk(192,`(opcional)`),Zg()(),Jc(193,`p`),Tk(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ie(o,_e){if(o&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-menu-panel-basic-view`)(2,`sample-po-menu-panel-labs-view`)(3,`sample-po-menu-panel-customer-view`),Zg()}if(o&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Te=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ie,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-menu-panel-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,de,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[WV.forChild(Te),WV]})}return o})();var en=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ge]})}return o})();export{en as DocPoMenuPanelModule};
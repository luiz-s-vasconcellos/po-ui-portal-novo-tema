import{m as P,p as M}from"./main-5NWS7DIP.js";import{$ as Pze,$i as ar,Ar as G0,At as Zte,Ci as Rk,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,Li as WL,Ni as Vk,Oi as U_,Pr as HO,Pt as are,Qr as Mk,Rr as Hk,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Y as Or,Yr as LO,Zi as _u,_r as Cu,aa as de,ar as Ab,bn as oi,co as wg,dr as Be$1,eo as tk,er as $O,fo as xZ,go as xo,hr as Cb,ii as No,jr as GV,k as Goe,mi as QL,or as An,pa as ge$1,pr as Bk,q as Nze,qi as Zb,rr as AZ,rt as Ru,sn as j4,tt as R4,vi as Qk,zr as I}from"./chunk-DdK63a0t.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var ge=(()=>{class r{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(i){this.poNotification=i}myAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(l){return new(l||r)(I(Ru))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(l,o){l&1&&_u(0,`po-header`,0),l&2&&Ab(`p-brand`,o.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[Nze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r})();var be=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-header-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-header-basic/sample-po-header-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-header-basic/sample-po-header-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Header Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-header-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-header-basic/sample-po-header-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-header-basic/sample-po-header-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return r})();var Pe=()=>({label:`Positive`,value:`positive`});var _e=()=>({label:`Negative`,value:`negative`});var ke=()=>({label:`Warning`,value:`warning`});var Ne=()=>({label:`Disabled`,value:`disabled`});var He=(r,w,i,l)=>[r,w,i,l];var Le=()=>({label:`Medium`,value:`medium`});var Me=()=>({label:`Small`,value:`small`});var Be=(r,w)=>[r,w];var Se=(()=>{class r$1{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(i){this.poNotification=i}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(i){let l=i;i.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(l.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,i],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(l){return new(l||r$1)(I(Ru))};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let p=KO();_u(0,`po-header`,1),Jc(1,`div`,2)(2,`po-input`,3),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.headerBrandTitle,d)||(o.headerBrandTitle=d),H_(d)}),Kg(),Jc(3,`po-input`,4),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.headerBrandLogo,d)||(o.headerBrandLogo=d),H_(d)}),Kg(),Jc(4,`po-input`,5),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.headerBrandSmallLogo,d)||(o.headerBrandSmallLogo=d),H_(d)}),Kg(),Jc(5,`div`,6)(6,`po-button`,7),_t(`p-click`,function(){return o.addBrand()}),Kg()()(),_u(7,`hr`),Jc(8,`div`,8)(9,`h3`,9),Mk(10,`Ações dos itens de menu`),Kg(),Jc(11,`po-input`,10),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.menuActionEvent,d)||(o.menuActionEvent=d),H_(d)}),Kg(),Jc(12,`po-input`,11),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.menuActionLabel,d)||(o.menuActionLabel=d),H_(d)}),Kg(),Jc(13,`po-button`,12),_t(`p-click`,function(){return o.addAction()}),Kg()(),_u(14,`hr`),Jc(15,`h3`,9),Mk(16,`Ações das configurações`),Kg(),Jc(17,`form`,8,0)(19,`po-input`,13),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.actionNewTool.icon,d)||(o.actionNewTool.icon=d),H_(d)}),Kg(),Jc(20,`po-input`,14),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.actionNewTool.tooltip,d)||(o.actionNewTool.tooltip=d),H_(d)}),Kg(),Jc(21,`po-number`,15),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.actionNewTool.badge,d)||(o.actionNewTool.badge=d),H_(d)}),Kg(),Jc(22,`po-switch`,16),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.actionNewToolEvent,d)||(o.actionNewToolEvent=d),H_(d)}),Kg(),Jc(23,`po-button`,17),_t(`p-click`,function(){return o.addTool(o.actionNewTool)}),Kg()(),_u(24,`hr`),Jc(25,`h3`,9),Mk(26,`Ações do Usuário`),Kg(),Jc(27,`form`,8,0)(29,`po-input`,18),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.newActionUser.customerBrand,d)||(o.newActionUser.customerBrand=d),H_(d)}),Kg(),Jc(30,`po-input`,19),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.newActionUser.avatar,d)||(o.newActionUser.avatar=d),H_(d)}),Kg(),Jc(31,`po-radio-group`,20),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.newActionUser.status,d)||(o.newActionUser.status=d),H_(d)}),Kg(),Jc(32,`po-button`,17),_t(`p-click`,function(){return o.addUser()}),Kg(),_u(33,`hr`),Jc(34,`h3`,9),Mk(35,`Variações de tamanho`),Kg(),Jc(36,`div`,8)(37,`po-radio-group`,21),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(o.size,d)||(o.size=d),H_(d)}),Kg()(),_u(38,`hr`),Jc(39,`po-button`,22),_t(`p-click`,function(){return o.reset()}),Kg()()}l&2&&(Ab(`p-side-menu-only-action`,!0)(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuActions)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.actionUser)(`p-size`,o.size),wg(2),Kb(`ngModel`,o.headerBrandTitle),q0(),wg(),Kb(`ngModel`,o.headerBrandLogo),q0(),wg(),Kb(`ngModel`,o.headerBrandSmallLogo),q0(),wg(7),Kb(`ngModel`,o.menuActionEvent),q0(),wg(),Kb(`ngModel`,o.menuActionLabel),q0(),wg(),Ab(`p-disabled`,!o.menuActionLabel),wg(6),Kb(`ngModel`,o.actionNewTool.icon),q0(),wg(),Kb(`ngModel`,o.actionNewTool.tooltip),q0(),wg(),Kb(`ngModel`,o.actionNewTool.badge),q0(),wg(),Kb(`ngModel`,o.actionNewToolEvent),q0(),wg(),Ab(`p-disabled`,o.actionTools.length>2),wg(6),Kb(`ngModel`,o.newActionUser.customerBrand),q0(),wg(),Kb(`ngModel`,o.newActionUser.avatar),q0(),wg(),Kb(`ngModel`,o.newActionUser.status),Ab(`p-options`,Hk(28,He,Vk(24,Pe),Vk(25,_e),Vk(26,ke),Vk(27,Ne))),q0(),wg(),Ab(`p-disabled`,!o.newActionUser.avatar||o.newActionUser.customerBrand),wg(5),Kb(`ngModel`,o.size),Ab(`p-options`,Bk(35,Be,Vk(33,Le),Vk(34,Me))),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,j4,Goe,Zte,R4,Nze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r$1})();var fe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-header-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-header-labs/sample-po-header-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-header-labs/sample-po-header-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Header Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-header-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-header-labs/sample-po-header-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-header-labs/sample-po-header-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return r})();var Ve=[`meuTemplate`];var Ue=[`notificationTemplate`];var qe=(r,w)=>w.icon;function Ie(r,w){if(r&1&&_u(0,`po-button`,5),r&2){let i=w.$implicit;Ab(`p-icon`,i.icon)}}function Oe(r,w){if(r&1&&(Jc(0,`div`,3)(1,`p`),Mk(2,`Meus aplicativos`),Kg(),_u(3,`br`),Jc(4,`div`,4),HO(5,Ie,1,1,`po-button`,5,qe),Kg()()),r&2){let i=tk();wg(5),$O(i.systemApps)}}function ze(r,w){if(r&1){let i=KO();Jc(0,`div`,6)(1,`div`,7)(2,`span`,8),Mk(3,`Notificações`),Kg()(),Jc(4,`div`,9)(5,`po-button`,10),_t(`p-click`,function(){U_(i);let o=tk();return H_(o.markAllAsRead())}),Kg()()(),_u(6,`po-divider`),Jc(7,`po-list-view`,11),_t(`p-item-click`,function(o){U_(i);let p=tk();return H_(p.readNotification(o))}),Kg(),_u(8,`po-divider`),Jc(9,`div`,12)(10,`div`,13)(11,`po-button`,14),_t(`p-click`,function(){U_(i);let o=tk();return H_(o.resetNotifications())}),Kg(),Jc(12,`po-button`,15),_t(`p-click`,function(){U_(i);let o=tk();return H_(o.markAllAsUnread())}),Kg()()()}if(r&2){let i=tk();wg(5),Ab(`p-disabled`,!i.hasNotifications),wg(2),Ab(`p-field-properties`,i.fieldProperties)(`p-items`,i.notificationList)(`p-select`,!1)(`p-literals`,i.notificationLiterals)}}var xe=(()=>{class r$2{poNotification;cd;meuTemplate;notificationTemplate;fieldProperties={title:`title`,subtitle:`content`,avatar:`avatar`,highlighted:`checked`,tag:{value:`tag`,type:`tagType`}};initialNotifications=[{title:`Relatório de faturamento`,content:`O arquivo solicitado já está disponível para download`,tag:`Concluído`,tagType:`success`,avatar:{progress:100,status:`success`,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Folha de pagamento`,content:`O cálculo da folha de pagamento está em andamento`,tag:`Em andamento`,tagType:`info`,avatar:{progress:80,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Nova versão TOTVS 2.1`,content:`Atualize seu sistema para a versão TOTVS 2.1`,tag:`Novidade`,tagType:`neutral`,avatar:{icon:`an an-arrow-circle-up`,color:`#ffffff`,backgroundColor:`#000000`},checked:!0},{title:`6 novos colaboradores`,content:`Você tem 6 novos colaboradores cadastrados`,tag:`Info`,tagType:`info`,avatar:{icon:`an an-user`,color:`#753399`,backgroundColor:`#f0e6f5`},checked:!0},{title:`Novo usuário`,content:`Novo usuário adicionado ao grupo Financeiro`,tag:`Info`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=12`,checked:!0}];allNotifications=this.initialNotifications.map(i=>r({},i));notificationList=this.allNotifications.filter(i=>i.checked);get hasNotifications(){return this.notificationList.some(i=>i.checked)}notificationLiterals={noData:`Você está atualizado! Você não tem novas notificações no momento. Assim que surgirem novidades ou alertas, eles aparecerão aqui.`};listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)},{label:`Notificações`,icon:`an an-bell`,tooltip:`Notificações do usuário`,badge:5,popover:{content:this.notificationTemplate,width:480},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(i,l){this.poNotification=i,this.cd=l}ngAfterViewInit(){this.actionTools=this.actionTools.map(i=>i.label===`Aplicativos`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.meuTemplate})}):i.label===`Notificações`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.notificationTemplate})}):i),this.cd.detectChanges()}myAction(i){this.poNotification.success({message:`Action clicked: ${i}`,orientation:Or.Bottom})}markAllAsRead(){this.allNotifications.forEach(i=>i.checked=!1),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(void 0),this.poNotification.success({message:`Todas as notificações foram marcadas como lidas.`,orientation:Or.Top})}readNotification(i){let l=this.allNotifications.find(o=>o.title===i?.title);l&&(l.checked=!1),setTimeout(()=>{this.notificationList=this.allNotifications.filter(p=>p.checked);let o=this.notificationList.length;this.setNotificationBadge(o>0?o:void 0)}),this.poNotification.information({message:`Notifica\xE7\xE3o lida: ${i?.title}`,orientation:Or.Top})}resetNotifications(){this.notificationList=this.allNotifications.map(i=>r({},i))}markAllAsUnread(){this.allNotifications.forEach(i=>i.checked=!0),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(this.allNotifications.length),this.poNotification.information({message:`Todas as notificações foram marcadas como não lidas.`,orientation:Or.Top})}setNotificationBadge(i){setTimeout(()=>{this.actionTools=this.actionTools.map(l=>l.label===`Notificações`?s(r({},l),{badge:i}):l),this.cd.detectChanges()})}onOpenTool(i){this.poNotification.information({message:`Opened: ${i} (p-actions-tools)`,orientation:Or.Top})}onCloseTool(i){this.poNotification.warning({message:`Closed: ${i} (p-actions-tools)`,orientation:Or.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Or.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Or.Top})}static ɵfac=function(l){return new(l||r$2)(I(Ru),I(Be$1))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-header-apps`]],viewQuery:function(l,o){if(l&1&&Cu(Ve,5)(Ue,5),l&2){let p;No(p=xo())&&(o.meuTemplate=p.first),No(p=xo())&&(o.notificationTemplate=p.first)}},standalone:!1,decls:5,vars:5,consts:[[`meuTemplate`,``],[`notificationTemplate`,``],[1,`example-notification-header`,3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-2`,`po-pb-0`],[1,`po-md-6`],[1,`po-font-subtitle`],[1,`po-md-6`,`po-text-right`],[`p-icon`,`an an-checks`,`p-label`,`Marcar todas como lidas`,`p-kind`,`tertiary`,3,`p-click`,`p-disabled`],[`p-tag-position`,`top`,`p-avatar-size`,`md`,3,`p-item-click`,`p-field-properties`,`p-items`,`p-select`,`p-literals`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-0`,`po-pb-2`],[1,`po-md-12`,`po-text-right`],[`p-label`,`Ver todas notificações`,`p-kind`,`primary`,1,`po-mr-1`,3,`p-click`],[`p-icon`,`an an-arrow-counter-clockwise`,`p-kind`,`tertiary`,`p-aria-label`,`Marcar todas como não lidas`,3,`p-click`]],template:function(l,o){l&1&&(_u(0,`po-header`,2),Cb(1,Oe,7,0,`ng-template`,null,0,Qk)(3,ze,13,5,`ng-template`,null,1,Qk)),l&2&&Ab(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuItems)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[oi,Nf,Pze,Nze],styles:[`sample-po-header-apps{display:block;min-height:768px}sample-po-header-apps .app-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}sample-po-header-apps .custom-template{padding:.5rem}sample-po-header-apps .custom-template p{text-align:center;font-weight:700;color:var(--%NS%color-neutral-dark-90)}sample-po-header-apps po-header{--%NS%nav-position: flex}po-header.example-notification-header po-list-view{--%NS%po-density-gap-spacing: 0px;--%NS%po-density-content-padding: 0px;--%NS%list-item-shadow: none;--%NS%list-item-border-radius: 0px;--%NS%list-item-border-color: transparent}po-header.example-notification-header po-divider{--%NS%po-density-gap-spacing: 0}
`],encapsulation:2,changeDetection:1})}return r$2})();var ve=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-header-apps`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-header-apps/sample-po-header-apps.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-header-apps/sample-po-header-apps.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Header Apps`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-header-apps`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-header-apps/sample-po-header-apps.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-header
  class="example-notification-header"
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>

<ng-template #notificationTemplate>
  <div class="po-row po-pr-1 po-pl-1 po-pt-2 po-pb-0">
    <div class="po-md-6">
      <span class="po-font-subtitle">Notifica\xE7\xF5es</span>
    </div>
    <div class="po-md-6 po-text-right">
      <po-button
        p-icon="an an-checks"
        p-label="Marcar todas como lidas"
        p-kind="tertiary"
        [p-disabled]="!hasNotifications"
        (p-click)="markAllAsRead()"
      ></po-button>
    </div>
  </div>

  <po-divider></po-divider>

  <po-list-view
    p-tag-position="top"
    p-avatar-size="md"
    [p-field-properties]="fieldProperties"
    [p-items]="notificationList"
    [p-select]="false"
    [p-literals]="notificationLiterals"
    (p-item-click)="readNotification($event)"
  >
  </po-list-view>

  <po-divider></po-divider>

  <div class="po-row po-pr-1 po-pl-1 po-pt-0 po-pb-2">
    <div class="po-md-12 po-text-right">
      <po-button
        class="po-mr-1"
        p-label="Ver todas notifica\xE7\xF5es"
        p-kind="primary"
        (p-click)="resetNotifications()"
      ></po-button>
      <po-button
        p-icon="an an-arrow-counter-clockwise"
        p-kind="tertiary"
        p-aria-label="Marcar todas como n\xE3o lidas"
        (p-click)="markAllAsUnread()"
      ></po-button>
    </div>
  </div>
</ng-template>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-header-apps/sample-po-header-apps.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoListViewFieldProperties,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    sample-po-header-apps {
      display: block;
      min-height: 768px;
    }

    sample-po-header-apps .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    sample-po-header-apps .custom-template {
      padding: 0.5rem;
    }

    sample-po-header-apps .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    sample-po-header-apps po-header {
      --nav-position: flex;
    }

    po-header.example-notification-header po-list-view {
      --po-density-gap-spacing: 0px;
      --po-density-content-padding: 0px;

      --list-item-shadow: none;
      --list-item-border-radius: 0px;
      --list-item-border-color: transparent;
    }

    po-header.example-notification-header po-divider {
      --po-density-gap-spacing: 0;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;
  @ViewChild('notificationTemplate') notificationTemplate!: TemplateRef<any>;

  fieldProperties: PoListViewFieldProperties = {
    title: 'title',
    subtitle: 'content',
    avatar: 'avatar',
    highlighted: 'checked',
    tag: { value: 'tag', type: 'tagType' }
  };

  private readonly initialNotifications = [
    {
      title: 'Relat\xF3rio de faturamento',
      content: 'O arquivo solicitado j\xE1 est\xE1 dispon\xEDvel para download',
      tag: 'Conclu\xEDdo',
      tagType: 'success',
      avatar: { progress: 100, status: 'success', showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Folha de pagamento',
      content: 'O c\xE1lculo da folha de pagamento est\xE1 em andamento',
      tag: 'Em andamento',
      tagType: 'info',
      avatar: { progress: 80, showPercentage: true, size: 'large', radius: 35 },
      checked: true
    },
    {
      title: 'Nova vers\xE3o TOTVS 2.1',
      content: 'Atualize seu sistema para a vers\xE3o TOTVS 2.1',
      tag: 'Novidade',
      tagType: 'neutral',
      avatar: { icon: 'an an-arrow-circle-up', color: '#ffffff', backgroundColor: '#000000' },
      checked: true
    },
    {
      title: '6 novos colaboradores',
      content: 'Voc\xEA tem 6 novos colaboradores cadastrados',
      tag: 'Info',
      tagType: 'info',
      avatar: { icon: 'an an-user', color: '#753399', backgroundColor: '#f0e6f5' },
      checked: true
    },
    {
      title: 'Novo usu\xE1rio',
      content: 'Novo usu\xE1rio adicionado ao grupo Financeiro',
      tag: 'Info',
      tagType: 'info',
      avatar: 'https://i.pravatar.cc/150?img=12',
      checked: true
    }
  ];

  private allNotifications = this.initialNotifications.map(item => ({ ...item }));

  notificationList = this.allNotifications.filter(item => item.checked);

  get hasNotifications(): boolean {
    return this.notificationList.some(item => item.checked);
  }

  readonly notificationLiterals = {
    noData:
      'Voc\xEA est\xE1 atualizado! Voc\xEA n\xE3o tem novas notifica\xE7\xF5es no momento. Assim que surgirem novidades ou alertas, eles aparecer\xE3o aqui.'
  };

  readonly listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  readonly headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  readonly menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-bell',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      popover: {
        content: this.notificationTemplate,
        width: 480
      },
      onOpen: (label?: string) => this.onOpenTool(label),
      onClose: (label?: string) => this.onCloseTool(label)
    }
  ];

  readonly headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    status: 'positive',
    items: [
      { label: 'Meu perfil', action: this.myAction.bind(this, 'Meu perfil') },
      { label: 'Configura\xE7\xF5es', action: this.myAction.bind(this, 'Configura\xE7\xF5es') },
      { label: 'Sair', action: this.myAction.bind(this, 'Sair') }
    ],
    onOpen: () => this.onOpenUser(),
    onClose: () => this.onCloseUser()
  };

  readonly systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.label === 'Aplicativos' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.meuTemplate } };
      }
      if (action.label === 'Notifica\xE7\xF5es' && action.popover) {
        return { ...action, popover: { ...action.popover, content: this.notificationTemplate } };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Bottom });
  }

  markAllAsRead(): void {
    this.allNotifications.forEach(item => (item.checked = false));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(undefined);

    this.poNotification.success({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  readNotification(item: any): void {
    const notification = this.allNotifications.find(current => current.title === item?.title);
    if (notification) {
      notification.checked = false;
    }

    setTimeout(() => {
      this.notificationList = this.allNotifications.filter(current => current.checked);
      const unread = this.notificationList.length;
      this.setNotificationBadge(unread > 0 ? unread : undefined);
    });

    this.poNotification.information({
      message: \`Notifica\xE7\xE3o lida: \${item?.title}\`,
      orientation: PoToasterOrientation.Top
    });
  }

  resetNotifications(): void {
    this.notificationList = this.allNotifications.map(current => ({ ...current }));
  }

  markAllAsUnread(): void {
    this.allNotifications.forEach(item => (item.checked = true));
    this.notificationList = this.allNotifications.filter(item => item.checked);
    this.setNotificationBadge(this.allNotifications.length);

    this.poNotification.information({
      message: 'Todas as notifica\xE7\xF5es foram marcadas como n\xE3o lidas.',
      orientation: PoToasterOrientation.Top
    });
  }

  private setNotificationBadge(badge: number | undefined): void {
    setTimeout(() => {
      this.actionTools = this.actionTools.map(action =>
        action.label === 'Notifica\xE7\xF5es' ? { ...action, badge } : action
      );
      this.cd.detectChanges();
    });
  }

  /** Callback de abertura para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onOpenTool(label?: string): void {
    this.poNotification.information({
      message: \`Opened: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para a\xE7\xF5es do \`p-actions-tools\`. Recebe o \`label\` da a\xE7\xE3o. */
  onCloseTool(label?: string): void {
    this.poNotification.warning({
      message: \`Closed: \${label} (p-actions-tools)\`,
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de abertura para o \`p-header-user\`. */
  onOpenUser(): void {
    this.poNotification.information({
      message: 'Opened: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }

  /** Callback de fechamento para o \`p-header-user\`. */
  onCloseUser(): void {
    this.poNotification.warning({
      message: 'Closed: User menu (p-header-user)',
      orientation: PoToasterOrientation.Top
    });
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,xe],encapsulation:2,changeDetection:1})}return r})();var we=(()=>{class r{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-header-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions-tools`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-amount-more`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-brand`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-colapsed-menu`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-filter-menu`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-header-template`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`id`,`prop-p-header-user`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`id`,`prop-p-hide-button-menu`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-menus`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`id`,`prop-p-menu-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-header-action-tool`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-tool-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-header-action-tool-badge`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`id`,`interface-po-header-action-tool-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-on-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`id`,`interface-po-header-action-tool-on-open`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-popover`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`id`,`interface-po-header-action-tool-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-popover-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-popover-action-content`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-popover-action-width`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-action-tool-item-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-action-tool-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-actions-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-id`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-label`,1,`docs-api-properties-row`],[`id`,`interface-po-header-actions-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-brand-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-link`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-logo`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-small-logo`,1,`docs-api-properties-row`],[`id`,`interface-po-header-brand-title`,1,`docs-api-properties-row`],[`id`,`interface-po-header-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-literals-header-links`,1,`docs-api-properties-row`],[`id`,`interface-po-header-literals-notifications`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-header-user-action`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-avatar`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-customer-brand`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-items`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-on-close`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-on-open`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-popover`,1,`docs-api-properties-row`],[`id`,`interface-po-header-user-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-header`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`h3`,3),Mk(11,`Componente`),Kg(),Jc(12,`h4`,4)(13,`code`,5),Mk(14,`PoHeaderComponent`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O componente `),Jc(18,`code`),Mk(19,`po-header`),Kg(),Mk(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Jc(21,`code`),Mk(22,`p-brand`),Kg(),Mk(23,`, `),Jc(24,`code`),Mk(25,`p-menu-items`),Kg(),Mk(26,`, `),Jc(27,`code`),Mk(28,`p-actions-tools`),Kg(),Mk(29,` e `),Jc(30,`code`),Mk(31,`p-header-user`),Kg(),Mk(32,`.`),Kg(),Jc(33,`ul`)(34,`li`)(35,`code`),Mk(36,`p-brand`),Kg(),Mk(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),Kg(),Jc(38,`li`)(39,`code`),Mk(40,`p-menu-items`),Kg(),Mk(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),Kg(),Jc(42,`li`)(43,`code`),Mk(44,`p-actions-tools`),Kg(),Mk(45,`: Possibilita a inclusão de até 3 botões com ações.`),Kg(),Jc(46,`li`)(47,`code`),Mk(48,`p-header-user`),Kg(),Mk(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),Kg()(),Jc(50,`p`),Mk(51,`O componente `),Jc(52,`code`),Mk(53,`po-header`),Kg(),Mk(54,` pode ser usado de duas formas:`),Kg(),Jc(55,`p`),Mk(56,`Com `),Jc(57,`code`),Mk(58,`po-menu`),Kg(),Mk(59,` definido pelo usuário:`),Kg(),Jc(60,`pre`)(61,`code`),Mk(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),Kg()(),Jc(63,`p`),Mk(64,`Passando os itens diretamente para o `),Jc(65,`code`),Mk(66,`po-header`),Kg(),Mk(67,` pela propriedade `),Jc(68,`code`),Mk(69,`p-menus`),Kg(),Mk(70,`:`),Kg(),Jc(71,`pre`)(72,`code`),Mk(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),Kg()(),Jc(74,`h4`),Mk(75,`Tokens customizáveis`),Kg(),Jc(76,`p`),Mk(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(78,`blockquote`)(79,`p`),Mk(80,`Para maiores informações, acesse o guia `),Jc(81,`a`,6),Mk(82,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(83,`.`),Kg()(),Jc(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),Mk(88,`Propriedade`),Kg(),Jc(89,`th`),Mk(90,`Descrição`),Kg(),Jc(91,`th`),Mk(92,`Valor Padrão`),Kg()()(),Jc(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),Mk(97,`--font-family`),Kg()(),Jc(98,`td`),Mk(99,`Família tipográfica usada`),Kg(),Jc(100,`td`)(101,`code`),Mk(102,`var(--font-family-theme)`),Kg()()(),Jc(103,`tr`)(104,`td`)(105,`code`),Mk(106,`--font-weight`),Kg()(),Jc(107,`td`),Mk(108,`Peso da fonte`),Kg(),Jc(109,`td`)(110,`code`),Mk(111,`var(--font-weight-bold)`),Kg()()(),Jc(112,`tr`)(113,`td`)(114,`code`),Mk(115,`--text-color`),Kg()(),Jc(116,`td`),Mk(117,`Cor do texto`),Kg(),Jc(118,`td`)(119,`code`),Mk(120,`var(--color-neutral-dark-70)`),Kg()()(),Jc(121,`tr`)(122,`td`)(123,`code`),Mk(124,`--outline-color-focused`),Kg()(),Jc(125,`td`),Mk(126,`Cor do outline dos itens de sub-menu e customer`),Kg(),Jc(127,`td`)(128,`code`),Mk(129,`var(--color-neutral-dark-95)`),Kg()()(),Jc(130,`tr`)(131,`td`)(132,`code`),Mk(133,`--object-fit-brand`),Kg()(),Jc(134,`td`),Mk(135,`Valor do object-fit da imagem do logo`),Kg(),Jc(136,`td`)(137,`code`),Mk(138,`contain`),Kg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Mk(142,`--object-fit-customer`),Kg()(),Jc(143,`td`),Mk(144,`Valor do object-fit da imagem do logo na seção customer`),Kg(),Jc(145,`td`)(146,`code`),Mk(147,`contain`),Kg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Mk(151,`--object-fit-customer-user`),Kg()(),Jc(152,`td`),Mk(153,`Valor do object-fit da imagem do avatar`),Kg(),Jc(154,`td`)(155,`code`),Mk(156,`cover`),Kg()()(),Jc(157,`tr`)(158,`td`)(159,`strong`),Mk(160,`Header`),Kg()(),_u(161,`td`)(162,`td`),Kg(),Jc(163,`tr`)(164,`td`)(165,`code`),Mk(166,`--background-color`),Kg()(),Jc(167,`td`),Mk(168,`Cor de background do header`),Kg(),Jc(169,`td`)(170,`code`),Mk(171,`var(--color-neutral-light-05)`),Kg()()(),Jc(172,`tr`)(173,`td`)(174,`code`),Mk(175,`--border-radius-bottom-left`),Kg()(),Jc(176,`td`),Mk(177,`Valor do radius do lado esquerdo do header`),Kg(),Jc(178,`td`)(179,`code`),Mk(180,`var(--border-radius-md)`),Kg()()(),Jc(181,`tr`)(182,`td`)(183,`code`),Mk(184,`--border-radius-bottom-right`),Kg()(),Jc(185,`td`),Mk(186,`Valor do radius do lado direito do header`),Kg(),Jc(187,`td`)(188,`code`),Mk(189,`var(--border-radius-md)`),Kg()()(),Jc(190,`tr`)(191,`td`)(192,`code`),Mk(193,`--base shadow`),Kg()(),Jc(194,`td`),Mk(195,`Cor da sombra do header`),Kg(),Jc(196,`td`)(197,`code`),Mk(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),Kg()()(),Jc(199,`tr`)(200,`td`)(201,`code`),Mk(202,`--stroke-color`),Kg()(),Jc(203,`td`),Mk(204,`Cor da borda inferior do header`),Kg(),Jc(205,`td`)(206,`code`),Mk(207,`var(--color-brand-01-base)`),Kg()()(),Jc(208,`tr`)(209,`td`)(210,`strong`),Mk(211,`Sub-menu`),Kg()(),_u(212,`td`)(213,`td`),Kg(),Jc(214,`tr`)(215,`td`)(216,`code`),Mk(217,`--border-radius`),Kg()(),Jc(218,`td`),Mk(219,`Valor do radius dos itens do sub-menu`),Kg(),Jc(220,`td`)(221,`code`),Mk(222,`var(--border-radius-md);`),Kg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Mk(226,`--text-color-submenu`),Kg()(),Jc(227,`td`),Mk(228,`Cor do texto dos itens do sub-menu`),Kg(),Jc(229,`td`)(230,`code`),Mk(231,`var(--color-brand-01-base)`),Kg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Mk(235,`--icon-color`),Kg()(),Jc(236,`td`),Mk(237,`Cor do ícone do sub-menu com itens`),Kg(),Jc(238,`td`)(239,`code`),Mk(240,`var(--color-brand-01-base)`),Kg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Mk(244,`--border-color`),Kg()(),Jc(245,`td`),Mk(246,`Cor da borda`),Kg(),Jc(247,`td`)(248,`code`),Mk(249,`var(--color-transparent)`),Kg()()(),Jc(250,`tr`)(251,`td`)(252,`code`),Mk(253,`--shadow`),Kg()(),Jc(254,`td`),Mk(255,`Contém o valor da sombra do elemento`),Kg(),Jc(256,`td`)(257,`code`),Mk(258,`var(--shadow-none)`),Kg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Mk(262,`--font-family-submenu`),Kg()(),Jc(263,`td`),Mk(264,`Fonte do texto dos itens de sub-menu`),Kg(),Jc(265,`td`)(266,`code`),Mk(267,`var(--font-family-theme)`),Kg()()(),Jc(268,`tr`)(269,`td`)(270,`code`),Mk(271,`--font-weight-submenu`),Kg()(),Jc(272,`td`),Mk(273,`Peso da fonte do texto dos itens de sub-menu`),Kg(),Jc(274,`td`)(275,`code`),Mk(276,`var(--font-weight-bold)`),Kg()()(),Jc(277,`tr`)(278,`td`)(279,`strong`),Mk(280,`Sub-menu - Hover`),Kg()(),_u(281,`td`)(282,`td`),Kg(),Jc(283,`tr`)(284,`td`)(285,`code`),Mk(286,`--background-hover`),Kg()(),Jc(287,`td`),Mk(288,`Cor de background dos itens do sub-menu no estado hover`),Kg(),Jc(289,`td`)(290,`code`),Mk(291,`var(--color-brand-01-lighter)`),Kg()()(),Jc(292,`tr`)(293,`td`)(294,`code`),Mk(295,`--icon-color-hover`),Kg()(),Jc(296,`td`),Mk(297,`Cor do ícone dos itens de sub-menu no estado hover`),Kg(),Jc(298,`td`)(299,`code`),Mk(300,`var(--color-brand-01-darkest)`),Kg()()(),Jc(301,`tr`)(302,`td`)(303,`code`),Mk(304,`--text-color-hover`),Kg()(),Jc(305,`td`),Mk(306,`Cor do texto dos itens de sub-menu no estado hover`),Kg(),Jc(307,`td`)(308,`code`),Mk(309,`var(--color-brand-01-darkest)`),Kg()()(),Jc(310,`tr`)(311,`td`)(312,`strong`),Mk(313,`Sub-menu - pressed`),Kg()(),_u(314,`td`)(315,`td`),Kg(),Jc(316,`tr`)(317,`td`)(318,`code`),Mk(319,`--background-pressed`),Kg()(),Jc(320,`td`),Mk(321,`Cor de background dos itens do sub-menu no estado pressed`),Kg(),Jc(322,`td`)(323,`code`),Mk(324,`var(--color-brand-01-light)`),Kg()()(),Jc(325,`tr`)(326,`td`)(327,`code`),Mk(328,`--icon-color-pressed`),Kg()(),Jc(329,`td`),Mk(330,`Cor do ícone dos itens de sub-menu no estado pressed`),Kg(),Jc(331,`td`)(332,`code`),Mk(333,`var(--color-brand-01-darkest)`),Kg()()(),Jc(334,`tr`)(335,`td`)(336,`code`),Mk(337,`--text-color-pressed`),Kg()(),Jc(338,`td`),Mk(339,`Cor do texto dos itens de sub-menu no estado pressed`),Kg(),Jc(340,`td`)(341,`code`),Mk(342,`var(--color-brand-01-darkest)`),Kg()()(),Jc(343,`tr`)(344,`td`)(345,`strong`),Mk(346,`Sub-menu - selected`),Kg()(),_u(347,`td`)(348,`td`),Kg(),Jc(349,`tr`)(350,`td`)(351,`code`),Mk(352,`--background-selected`),Kg()(),Jc(353,`td`),Mk(354,`Cor de background dos itens do sub-menu no estado selected`),Kg(),Jc(355,`td`)(356,`code`),Mk(357,`var(--color-brand-01-light)`),Kg()()(),Jc(358,`tr`)(359,`td`)(360,`code`),Mk(361,`--icon-color-selected`),Kg()(),Jc(362,`td`),Mk(363,`Cor do ícone dos itens de sub-menu no estado selected`),Kg(),Jc(364,`td`)(365,`code`),Mk(366,`var(--color-neutral-dark-95)`),Kg()()(),Jc(367,`tr`)(368,`td`)(369,`code`),Mk(370,`--text-color-selected`),Kg()(),Jc(371,`td`),Mk(372,`Cor do texto dos itens de sub-menu no estado selected`),Kg(),Jc(373,`td`)(374,`code`),Mk(375,`var(--color-brand-01-darkest)`),Kg()()(),Jc(376,`tr`)(377,`td`)(378,`strong`),Mk(379,`Customer`),Kg()(),_u(380,`td`)(381,`td`),Kg(),Jc(382,`tr`)(383,`td`)(384,`code`),Mk(385,`--background-color-customer`),Kg()(),Jc(386,`td`),Mk(387,`Cor do background da seção customer`),Kg(),Jc(388,`td`)(389,`code`),Mk(390,`var(--color-neutral-light-00)`),Kg()()(),Jc(391,`tr`)(392,`td`)(393,`code`),Mk(394,`--border-color`),Kg()(),Jc(395,`td`),Mk(396,`Cor da borda da seção customer`),Kg(),Jc(397,`td`)(398,`code`),Mk(399,`var(--color-neutral-light-10)`),Kg()()(),Jc(400,`tr`)(401,`td`)(402,`code`),Mk(403,`--border-style`),Kg()(),Jc(404,`td`),Mk(405,`Estilo da borda da seção customer`),Kg(),Jc(406,`td`)(407,`code`),Mk(408,`solid`),Kg()()(),Jc(409,`tr`)(410,`td`)(411,`code`),Mk(412,`--border-width`),Kg()(),Jc(413,`td`),Mk(414,`Largura da borda da seção customer`),Kg(),Jc(415,`td`)(416,`code`),Mk(417,`var(--border-width-sm)`),Kg()()(),Jc(418,`tr`)(419,`td`)(420,`strong`),Mk(421,`Customer - hover`),Kg()(),_u(422,`td`)(423,`td`),Kg(),Jc(424,`tr`)(425,`td`)(426,`code`),Mk(427,`--background-color-customer-hover`),Kg()(),Jc(428,`td`),Mk(429,`Cor do background da seção customer no estado hover`),Kg(),Jc(430,`td`)(431,`code`),Mk(432,`var(--color-brand-01-lighter)`),Kg()()(),Jc(433,`tr`)(434,`td`)(435,`strong`),Mk(436,`Customer - pressed`),Kg()(),_u(437,`td`)(438,`td`),Kg(),Jc(439,`tr`)(440,`td`)(441,`code`),Mk(442,`--background-color-customer-pressed`),Kg()(),Jc(443,`td`),Mk(444,`Cor do background da seção customer no estado pressed`),Kg(),Jc(445,`td`)(446,`code`),Mk(447,`var(--color-brand-01-light)`),Kg()()(),Jc(448,`tr`)(449,`td`)(450,`code`),Mk(451,`--border-width-pressed`),Kg()(),Jc(452,`td`),Mk(453,`Largura da borda da seção customer no estado pressed`),Kg(),Jc(454,`td`)(455,`code`),Mk(456,`var(--border-width-md)`),Kg()()()()()(),Jc(457,`div`,7)(458,`h4`,8),Mk(459,`Seletor`),Kg(),Jc(460,`pre`,9),Mk(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),Kg()(),Jc(462,`h4`,10),Mk(463,`Propriedades`),Kg(),Jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Mk(467,`Nome`),Kg(),Jc(468,`th`,13),Mk(469,`Tipo`),Kg(),Jc(470,`th`,13),Mk(471,`Padrão`),Kg(),Jc(472,`th`,13),Mk(473,`Descrição`),Kg()(),Jc(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),Mk(478,` p-actions-tools`),_u(479,`br`),Kg()()(),Jc(480,`td`,18)(481,`code`,19),Mk(482,`Array<PoHeaderActionTool>`),Kg()(),Jc(483,`td`,20),Mk(484,`-`),Kg(),Jc(485,`td`,21)(486,`em`)(487,`strong`),Mk(488,`(opcional)`),Kg()(),Jc(489,`p`),Mk(490,`Propriedade para configurar a seção de tools do `),Jc(491,`code`),Mk(492,`po-header`),Kg()(),Jc(493,`blockquote`)(494,`p`),Mk(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),Kg()()()(),Jc(496,`tr`,22)(497,`td`,15)(498,`div`,16)(499,`span`,17),Mk(500,` p-amount-more`),_u(501,`br`),Kg()()(),Jc(502,`td`,18)(503,`code`,23),Mk(504,`number`),Kg()(),Jc(505,`td`,20),Mk(506,`-`),Kg(),Jc(507,`td`,21)(508,`em`)(509,`strong`),Mk(510,`(opcional)`),Kg()(),Jc(511,`p`),Mk(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),Kg(),Jc(513,`blockquote`)(514,`p`),Mk(515,`Ao utilizar essa propriedade o `),Jc(516,`code`),Mk(517,`po-header`),Kg(),Mk(518,` não irá realizar o calculo automatíco de itens.`),Kg()()()(),Jc(519,`tr`,24)(520,`td`,15)(521,`div`,16)(522,`span`,17),Mk(523,` p-brand`),_u(524,`br`),Kg()()(),Jc(525,`td`,18)(526,`code`,25),Mk(527,`PoHeaderBrand `),Kg(),Jc(528,`code`,26),Mk(529,` string`),Kg()(),Jc(530,`td`,20),Mk(531,`-`),Kg(),Jc(532,`td`,21)(533,`em`)(534,`strong`),Mk(535,`(opcional)`),Kg()(),Jc(536,`p`),Mk(537,`Propriedade para configurar a seção de brand do `),Jc(538,`code`),Mk(539,`po-header`),Kg()(),Jc(540,`p`),Mk(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),Kg()()(),Jc(542,`tr`,27)(543,`td`,15)(544,`div`,28)(545,`span`,29),Mk(546,` (p-colapsed-menu)`),_u(547,`br`),Kg()()(),Jc(548,`td`,18)(549,`code`,30),Mk(550,`EventEmitter`),Kg()(),Jc(551,`td`,20),Mk(552,`-`),Kg(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Mk(556,`(opcional)`),Kg()(),Jc(557,`p`),Mk(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),Kg()()(),Jc(559,`tr`,31)(560,`td`,15)(561,`div`,16)(562,`span`,17),Mk(563,` p-filter-menu`),_u(564,`br`),Kg()()(),Jc(565,`td`,18)(566,`code`,32),Mk(567,`boolean`),Kg()(),Jc(568,`td`,20),Mk(569,`-`),Kg(),Jc(570,`td`,21)(571,`em`)(572,`strong`),Mk(573,`(opcional)`),Kg()(),Jc(574,`p`),Mk(575,`Habilita campo para filtrar itens no menu`),Kg()()(),Jc(576,`tr`,33)(577,`td`,15)(578,`div`,16)(579,`span`,17),Mk(580,` p-header-template`),_u(581,`br`),Kg()()(),Jc(582,`td`,18)(583,`code`,34),Mk(584,`TemplateRef<any>`),Kg()(),Jc(585,`td`,20),Mk(586,`-`),Kg(),Jc(587,`td`,21)(588,`em`)(589,`strong`),Mk(590,`(opcional)`),Kg()(),Jc(591,`p`),Mk(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Jc(593,`code`),Mk(594,`p-menu-items`),Kg()()()(),Jc(595,`tr`,35)(596,`td`,15)(597,`div`,16)(598,`span`,17),Mk(599,` p-header-user`),_u(600,`br`),Kg()()(),Jc(601,`td`,18)(602,`code`,36),Mk(603,`PoHeaderUser`),Kg()(),Jc(604,`td`,20),Mk(605,`-`),Kg(),Jc(606,`td`,21)(607,`em`)(608,`strong`),Mk(609,`(opcional)`),Kg()(),Jc(610,`p`),Mk(611,`Propriedade para configurar a seção de headerUser do `),Jc(612,`code`),Mk(613,`po-header`),Kg()()()(),Jc(614,`tr`,37)(615,`td`,15)(616,`div`,16)(617,`span`,17),Mk(618,` p-hide-button-menu`),_u(619,`br`),Kg()()(),Jc(620,`td`,18)(621,`code`,32),Mk(622,`boolean`),Kg()(),Jc(623,`td`,20),Mk(624,`-`),Kg(),Jc(625,`td`,21)(626,`em`)(627,`strong`),Mk(628,`(opcional)`),Kg()(),Jc(629,`p`),Mk(630,`Esconde o botão de menu colapsado.`),Kg()()(),Jc(631,`tr`,38)(632,`td`,15)(633,`div`,16)(634,`span`,17),Mk(635,` p-literals`),_u(636,`br`),Kg()()(),Jc(637,`td`,18)(638,`code`,39),Mk(639,`PoHeaderLiterals`),Kg()(),Jc(640,`td`,20),Mk(641,`-`),Kg(),Jc(642,`td`,21)(643,`em`)(644,`strong`),Mk(645,`(opcional)`),Kg()(),Jc(646,`p`),Mk(647,`Objeto com a literal usada na propriedade `),Jc(648,`code`),Mk(649,`p-literals`),Kg(),Mk(650,`.`),Kg(),Jc(651,`p`),Mk(652,`Para customizar a literal, basta declarar um objeto do tipo `),Jc(653,`code`),Mk(654,`PoHeaderLiterals`),Kg(),Mk(655,` conforme exemplo abaixo:`),Kg(),Jc(656,`pre`)(657,`code`),Mk(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),Kg()(),Jc(659,`p`),Mk(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(661,`pre`)(662,`code`),Mk(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),Kg()(),Jc(664,`blockquote`)(665,`p`),Mk(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(667,`a`,40)(668,`code`),Mk(669,`PoI18nService`),Kg()(),Mk(670,` ou do browser.`),Kg()()()(),Jc(671,`tr`,41)(672,`td`,15)(673,`div`,16)(674,`span`,17),Mk(675,` p-menus`),_u(676,`br`),Kg()()(),Jc(677,`td`,18)(678,`code`,42),Mk(679,`Array<PoMenuItem>`),Kg()(),Jc(680,`td`,20),Mk(681,`-`),Kg(),Jc(682,`td`,21)(683,`em`)(684,`strong`),Mk(685,`(opcional)`),Kg()(),Jc(686,`p`),Mk(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg(),Jc(688,`blockquote`)(689,`p`),Mk(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),Kg()()()(),Jc(691,`tr`,43)(692,`td`,15)(693,`div`,16)(694,`span`,17),Mk(695,` p-menu-items`),_u(696,`br`),Kg()()(),Jc(697,`td`,18)(698,`code`,44),Mk(699,`Array<PoHeaderActions>`),Kg()(),Jc(700,`td`,20),Mk(701,`-`),Kg(),Jc(702,`td`,21)(703,`em`)(704,`strong`),Mk(705,`(opcional)`),Kg()(),Jc(706,`p`),Mk(707,`Propriedade para configurar a seção de menu do `),Jc(708,`code`),Mk(709,`po-header`),Kg(),Mk(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),Kg(),Jc(711,`blockquote`)(712,`p`),Mk(713,`Os itens irão ficar visíveis em uma tela de até 960px`),Kg()()()(),Jc(714,`tr`,45)(715,`td`,15)(716,`div`,16)(717,`span`,17),Mk(718,` p-size`),_u(719,`br`),Kg()()(),Jc(720,`td`,18)(721,`code`,26),Mk(722,`string`),Kg()(),Jc(723,`td`,20)(724,`p`)(725,`code`),Mk(726,`medium`),Kg()()(),Jc(727,`td`,21)(728,`em`)(729,`strong`),Mk(730,`(opcional)`),Kg()(),Jc(731,`p`),Mk(732,`Define o tamanho do componente:`),Kg(),Jc(733,`ul`)(734,`li`)(735,`code`),Mk(736,`small`),Kg(),Mk(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),Kg(),Jc(738,`li`)(739,`code`),Mk(740,`medium`),Kg(),Mk(741,`: altura de 56px.`),Kg()(),Jc(742,`blockquote`)(743,`p`),Mk(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(745,`code`),Mk(746,`medium`),Kg(),Mk(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(748,`a`,46),Mk(749,`po-theme`),Kg(),Mk(750,`.`),Kg()()()()(),Jc(751,`h3`),Mk(752,`Interfaces`),Kg(),Jc(753,`h4`,47)(754,`code`,5),Mk(755,`PoHeaderActionTool`),Kg()(),Jc(756,`div`,2)(757,`p`)(758,`em`),Mk(759,`Interface`),Kg(),Mk(760,` que define a seção de Actions do header.`),Kg(),Jc(761,`p`),Mk(762,`Indicação de uso:`),Kg(),Jc(763,`ul`)(764,`li`),Mk(765,`Primeira ação destinada à app launcher.`),Kg(),Jc(766,`li`),Mk(767,`Segunda ação (terceiro ícone) destinada à notificações.`),Kg(),Jc(768,`li`),Mk(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),Kg()(),Jc(770,`blockquote`)(771,`p`),Mk(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),Kg()()(),Jc(773,`h4`,10),Mk(774,`Propriedades`),Kg(),Jc(775,`table`,11)(776,`tr`,12)(777,`th`,13),Mk(778,`Nome`),Kg(),Jc(779,`th`,13),Mk(780,`Tipo`),Kg(),Jc(781,`th`,13),Mk(782,`Descrição`),Kg()(),Jc(783,`tr`,48)(784,`td`,15)(785,`div`,16)(786,`span`,17),Mk(787,` action`),_u(788,`br`),Kg()()(),Jc(789,`td`,18)(790,`code`,49),Mk(791,`Function`),Kg()(),Jc(792,`td`,21)(793,`em`)(794,`strong`),Mk(795,`(opcional)`),Kg()(),Jc(796,`p`),Mk(797,`Evento emitido ao clicar em uma ação`),Kg(),Jc(798,`p`),Mk(799,`Exemplo: `),Jc(800,`code`),Mk(801,`action: this.myFunction.bind(this)`),Kg()()()(),Jc(802,`tr`,50)(803,`td`,15)(804,`div`,16)(805,`span`,17),Mk(806,` badge`),_u(807,`br`),Kg()()(),Jc(808,`td`,18)(809,`code`,23),Mk(810,`number`),Kg()(),Jc(811,`td`,21)(812,`em`)(813,`strong`),Mk(814,`(opcional)`),Kg()(),Jc(815,`p`),Mk(816,`Valor númerico com a repsentação de notificações`),Kg()()(),Jc(817,`tr`,51)(818,`td`,15)(819,`div`,16)(820,`span`,17),Mk(821,` icon`),_u(822,`br`),Kg()()(),Jc(823,`td`,18)(824,`code`,26),Mk(825,`string`),Kg()(),Jc(826,`td`,21)(827,`em`)(828,`strong`),Mk(829,`(opcional)`),Kg()(),Jc(830,`p`),Mk(831,`Ícone do botão de ação`),Kg()()(),Jc(832,`tr`,52)(833,`td`,15)(834,`div`,16)(835,`span`,17),Mk(836,` items`),_u(837,`br`),Kg()()(),Jc(838,`td`,18)(839,`code`,53),Mk(840,`Array<PoHeaderActionToolItem>`),Kg()(),Jc(841,`td`,21)(842,`em`)(843,`strong`),Mk(844,`(opcional)`),Kg()(),Jc(845,`p`),Mk(846,`Itens de ações`),Kg()()(),Jc(847,`tr`,54)(848,`td`,15)(849,`div`,16)(850,`span`,17),Mk(851,` label`),_u(852,`br`),Kg()()(),Jc(853,`td`,18)(854,`code`,26),Mk(855,`string`),Kg()(),Jc(856,`td`,21)(857,`em`)(858,`strong`),Mk(859,`(opcional)`),Kg()(),Jc(860,`p`),Mk(861,`Título da ação`),Kg()()(),Jc(862,`tr`,55)(863,`td`,15)(864,`div`,16)(865,`span`,17),Mk(866,` link`),_u(867,`br`),Kg()()(),Jc(868,`td`,18)(869,`code`,26),Mk(870,`string`),Kg()(),Jc(871,`td`,21)(872,`em`)(873,`strong`),Mk(874,`(opcional)`),Kg()(),Jc(875,`p`),Mk(876,`link utilizado no redirecionamento das páginas.`),Kg()()(),Jc(877,`tr`,56)(878,`td`,15)(879,`div`,16)(880,`span`,17),Mk(881,` onClose`),_u(882,`br`),Kg()()(),Jc(883,`td`,18)(884,`code`,57),Mk(885,`(label?: string) => void`),Kg()(),Jc(886,`td`,21)(887,`em`)(888,`strong`),Mk(889,`(opcional)`),Kg()(),Jc(890,`p`),Mk(891,`Função executada quando o popup ou popover da ação é fechado.`),Kg(),Jc(892,`p`),Mk(893,`Esse evento é disparado toda vez que o popup (quando há `),Jc(894,`code`),Mk(895,`items`),Kg(),Mk(896,`) ou o popover (quando há `),Jc(897,`code`),Mk(898,`popover`),Kg(),Mk(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Kg(),Jc(900,`p`),Mk(901,`O callback recebe como parâmetro o `),Jc(902,`code`),Mk(903,`label`),Kg(),Mk(904,` da ação que disparou o evento.`),Kg(),Jc(905,`p`),Mk(906,`Exemplo: `),Jc(907,`code`),Mk(908,`onClose: (label) => console.log('Fechado:', label)`),Kg()()()(),Jc(909,`tr`,58)(910,`td`,15)(911,`div`,16)(912,`span`,17),Mk(913,` onOpen`),_u(914,`br`),Kg()()(),Jc(915,`td`,18)(916,`code`,57),Mk(917,`(label?: string) => void`),Kg()(),Jc(918,`td`,21)(919,`em`)(920,`strong`),Mk(921,`(opcional)`),Kg()(),Jc(922,`p`),Mk(923,`Função executada quando o popup ou popover da ação é aberto.`),Kg(),Jc(924,`p`),Mk(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Jc(926,`code`),Mk(927,`items`),Kg(),Mk(928,`)
ou o popover (quando h\xE1 `),Jc(929,`code`),Mk(930,`popover`),Kg(),Mk(931,`) é exibido.`),Kg(),Jc(932,`p`),Mk(933,`O callback recebe como parâmetro o `),Jc(934,`code`),Mk(935,`label`),Kg(),Mk(936,` da ação que disparou o evento.`),Kg(),Jc(937,`p`),Mk(938,`Exemplo: `),Jc(939,`code`),Mk(940,`onOpen: (label) => console.log('Aberto:', label)`),Kg()()()(),Jc(941,`tr`,59)(942,`td`,15)(943,`div`,16)(944,`span`,17),Mk(945,` popover`),_u(946,`br`),Kg()()(),Jc(947,`td`,18)(948,`code`,60),Mk(949,`PoHeaderActionPopoverAction`),Kg()(),Jc(950,`td`,21)(951,`em`)(952,`strong`),Mk(953,`(opcional)`),Kg()(),Jc(954,`p`),Mk(955,`Template que será utilizado na ação`),Kg()()(),Jc(956,`tr`,61)(957,`td`,15)(958,`div`,16)(959,`span`,17),Mk(960,` tooltip`),_u(961,`br`),Kg()()(),Jc(962,`td`,18)(963,`code`,26),Mk(964,`string`),Kg()(),Jc(965,`td`,21)(966,`em`)(967,`strong`),Mk(968,`(opcional)`),Kg()(),Jc(969,`p`),Mk(970,`Texto que será apresentado na tooltip`),Kg()()()(),Jc(971,`h4`,62)(972,`code`,5),Mk(973,`PoHeaderActionPopoverAction`),Kg()(),Jc(974,`div`,2)(975,`p`)(976,`em`),Mk(977,`Interface`),Kg(),Mk(978,` que define um template para uma ação.`),Kg()(),Jc(979,`h4`,10),Mk(980,`Propriedades`),Kg(),Jc(981,`table`,11)(982,`tr`,12)(983,`th`,13),Mk(984,`Nome`),Kg(),Jc(985,`th`,13),Mk(986,`Tipo`),Kg(),Jc(987,`th`,13),Mk(988,`Descrição`),Kg()(),Jc(989,`tr`,63)(990,`td`,15)(991,`div`,16)(992,`span`,17),Mk(993,` content`),_u(994,`br`),Kg()()(),Jc(995,`td`,18)(996,`code`,34),Mk(997,`TemplateRef<any>`),Kg()(),Jc(998,`td`,21)(999,`p`),Mk(1e3,`Template que será renderizado dentro do popover.`),Kg()()(),Jc(1001,`tr`,64)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),Mk(1005,` width`),_u(1006,`br`),Kg()()(),Jc(1007,`td`,18)(1008,`code`,23),Mk(1009,`number`),Kg()(),Jc(1010,`td`,21)(1011,`em`)(1012,`strong`),Mk(1013,`(opcional)`),Kg()(),Jc(1014,`p`),Mk(1015,`Largura, em pixels, do template renderizado dentro do popover.`),Kg(),Jc(1016,`p`),Mk(1017,`Valores permitidos: de 240 a 800.`),Kg()()()(),Jc(1018,`h4`,65)(1019,`code`,5),Mk(1020,`PoHeaderActionToolItem`),Kg()(),Jc(1021,`div`,2)(1022,`p`)(1023,`em`),Mk(1024,`Interface`),Kg(),Mk(1025,` que define uma lista de ações.`),Kg()(),Jc(1026,`h4`,10),Mk(1027,`Propriedades`),Kg(),Jc(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),Mk(1031,`Nome`),Kg(),Jc(1032,`th`,13),Mk(1033,`Tipo`),Kg(),Jc(1034,`th`,13),Mk(1035,`Descrição`),Kg()(),Jc(1036,`tr`,66)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),Mk(1040,` action`),_u(1041,`br`),Kg()()(),Jc(1042,`td`,18)(1043,`code`,49),Mk(1044,`Function`),Kg()(),Jc(1045,`td`,21)(1046,`p`),Mk(1047,`Evento emitido ao clicar em uma ação`),Kg(),Jc(1048,`p`),Mk(1049,`Exemplo: `),Jc(1050,`code`),Mk(1051,`action: this.myFunction.bind(this)`),Kg()()()(),Jc(1052,`tr`,67)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),Mk(1056,` label`),_u(1057,`br`),Kg()()(),Jc(1058,`td`,18)(1059,`code`,26),Mk(1060,`string`),Kg()(),Jc(1061,`td`,21)(1062,`p`),Mk(1063,`Label da ação`),Kg()()()(),Jc(1064,`h4`,68)(1065,`code`,5),Mk(1066,`PoHeaderActions`),Kg()(),Jc(1067,`div`,2)(1068,`p`)(1069,`em`),Mk(1070,`Interface`),Kg(),Mk(1071,` que define uma lista de ações no sub-menu.`),Kg()(),Jc(1072,`h4`,10),Mk(1073,`Propriedades`),Kg(),Jc(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),Mk(1077,`Nome`),Kg(),Jc(1078,`th`,13),Mk(1079,`Tipo`),Kg(),Jc(1080,`th`,13),Mk(1081,`Descrição`),Kg()(),Jc(1082,`tr`,69)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),Mk(1086,` action`),_u(1087,`br`),Kg()()(),Jc(1088,`td`,18)(1089,`code`,49),Mk(1090,`Function`),Kg()(),Jc(1091,`td`,21)(1092,`em`)(1093,`strong`),Mk(1094,`(opcional)`),Kg()(),Jc(1095,`p`),Mk(1096,`Evento da ação`),Kg(),Jc(1097,`p`),Mk(1098,` Exemplo: `),Jc(1099,`code`),Mk(1100,`action: this.myFunction.bind(this)`),Kg()()()(),Jc(1101,`tr`,70)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),Mk(1105,` id`),_u(1106,`br`),Kg()()(),Jc(1107,`td`,18)(1108,`code`,26),Mk(1109,`string`),Kg()(),Jc(1110,`td`,21)(1111,`em`)(1112,`strong`),Mk(1113,`(opcional)`),Kg()(),Jc(1114,`p`),Mk(1115,`Identificador da ação`),Kg()()(),Jc(1116,`tr`,71)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),Mk(1120,` label`),_u(1121,`br`),Kg()()(),Jc(1122,`td`,18)(1123,`code`,26),Mk(1124,`string`),Kg()(),Jc(1125,`td`,21)(1126,`p`),Mk(1127,`Label da ação`),Kg()()(),Jc(1128,`tr`,72)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),Mk(1132,` link`),_u(1133,`br`),Kg()()(),Jc(1134,`td`,18)(1135,`code`,26),Mk(1136,`string`),Kg()(),Jc(1137,`td`,21)(1138,`em`)(1139,`strong`),Mk(1140,`(opcional)`),Kg()(),Jc(1141,`p`),Mk(1142,`link utilizado no redirecionamento das páginas.`),Kg()()()(),Jc(1143,`h4`,73)(1144,`code`,5),Mk(1145,`PoHeaderBrand`),Kg()(),Jc(1146,`div`,2)(1147,`p`)(1148,`em`),Mk(1149,`Interface`),Kg(),Mk(1150,` que define a seção de brand.`),Kg()(),Jc(1151,`h4`,10),Mk(1152,`Propriedades`),Kg(),Jc(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),Mk(1156,`Nome`),Kg(),Jc(1157,`th`,13),Mk(1158,`Tipo`),Kg(),Jc(1159,`th`,13),Mk(1160,`Descrição`),Kg()(),Jc(1161,`tr`,74)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),Mk(1165,` action`),_u(1166,`br`),Kg()()(),Jc(1167,`td`,18)(1168,`code`,49),Mk(1169,`Function`),Kg()(),Jc(1170,`td`,21)(1171,`em`)(1172,`strong`),Mk(1173,`(opcional)`),Kg()(),Jc(1174,`p`),Mk(1175,`Evento da ação`),Kg(),Jc(1176,`p`),Mk(1177,` Exemplo: `),Jc(1178,`code`),Mk(1179,`action: this.myFunction.bind(this)`),Kg()()()(),Jc(1180,`tr`,75)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),Mk(1184,` link`),_u(1185,`br`),Kg()()(),Jc(1186,`td`,18)(1187,`code`,26),Mk(1188,`string`),Kg()(),Jc(1189,`td`,21)(1190,`em`)(1191,`strong`),Mk(1192,`(opcional)`),Kg()(),Jc(1193,`p`),Mk(1194,`link utilizado no redirecionamento das páginas.`),Kg()()(),Jc(1195,`tr`,76)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),Mk(1199,` logo`),_u(1200,`br`),Kg()()(),Jc(1201,`td`,18)(1202,`code`,26),Mk(1203,`string`),Kg()(),Jc(1204,`td`,21)(1205,`em`)(1206,`strong`),Mk(1207,`(opcional)`),Kg()(),Jc(1208,`p`),Mk(1209,`Imagem da marca`),Kg()()(),Jc(1210,`tr`,77)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),Mk(1214,` smallLogo`),_u(1215,`br`),Kg()()(),Jc(1216,`td`,18)(1217,`code`,26),Mk(1218,`string`),Kg()(),Jc(1219,`td`,21)(1220,`em`)(1221,`strong`),Mk(1222,`(opcional)`),Kg()(),Jc(1223,`p`),Mk(1224,`Imagem da marca quando a tela é menor que 960px`),Kg()()(),Jc(1225,`tr`,78)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),Mk(1229,` title`),_u(1230,`br`),Kg()()(),Jc(1231,`td`,18)(1232,`code`,26),Mk(1233,`string`),Kg()(),Jc(1234,`td`,21)(1235,`em`)(1236,`strong`),Mk(1237,`(opcional)`),Kg()(),Jc(1238,`p`),Mk(1239,`Título da marca`),Kg()()()(),Jc(1240,`h4`,79)(1241,`code`,5),Mk(1242,`PoHeaderLiterals`),Kg()(),Jc(1243,`div`,2)(1244,`p`),Mk(1245,`Interface para definição das literais usadas no `),Jc(1246,`code`),Mk(1247,`po-header`),Kg(),Mk(1248,`.`),Kg()(),Jc(1249,`h4`,10),Mk(1250,`Propriedades`),Kg(),Jc(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),Mk(1254,`Nome`),Kg(),Jc(1255,`th`,13),Mk(1256,`Tipo`),Kg(),Jc(1257,`th`,13),Mk(1258,`Descrição`),Kg()(),Jc(1259,`tr`,80)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),Mk(1263,` headerLinks`),_u(1264,`br`),Kg()()(),Jc(1265,`td`,18)(1266,`code`,26),Mk(1267,`string`),Kg()(),Jc(1268,`td`,21)(1269,`em`)(1270,`strong`),Mk(1271,`(opcional)`),Kg()(),Jc(1272,`p`),Mk(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),Kg()()(),Jc(1274,`tr`,81)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),Mk(1278,` notifications`),_u(1279,`br`),Kg()()(),Jc(1280,`td`,18)(1281,`code`,26),Mk(1282,`string`),Kg()(),Jc(1283,`td`,21)(1284,`em`)(1285,`strong`),Mk(1286,`(opcional)`),Kg()(),Jc(1287,`p`),Mk(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Jc(1289,`code`),Mk(1290,`badge`),Kg()()()()(),Jc(1291,`h4`,82)(1292,`code`,5),Mk(1293,`PoHeaderUser`),Kg()(),Jc(1294,`div`,2)(1295,`p`)(1296,`em`),Mk(1297,`Interface`),Kg(),Mk(1298,` que define a seção de Customer do header.`),Kg()(),Jc(1299,`h4`,10),Mk(1300,`Propriedades`),Kg(),Jc(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),Mk(1304,`Nome`),Kg(),Jc(1305,`th`,13),Mk(1306,`Tipo`),Kg(),Jc(1307,`th`,13),Mk(1308,`Descrição`),Kg()(),Jc(1309,`tr`,83)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),Mk(1313,` action`),_u(1314,`br`),Kg()()(),Jc(1315,`td`,18)(1316,`code`,49),Mk(1317,`Function`),Kg()(),Jc(1318,`td`,21)(1319,`em`)(1320,`strong`),Mk(1321,`(opcional)`),Kg()(),Jc(1322,`p`),Mk(1323,`Evento emitido ao clicar na seção`),Kg(),Jc(1324,`p`),Mk(1325,`Exemplo: `),Jc(1326,`code`),Mk(1327,`action: this.myFunction.bind(this)`),Kg()()()(),Jc(1328,`tr`,84)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),Mk(1332,` avatar`),_u(1333,`br`),Kg()()(),Jc(1334,`td`,18)(1335,`code`,26),Mk(1336,`string`),Kg()(),Jc(1337,`td`,21)(1338,`p`),Mk(1339,`Logo representando o perfil`),Kg()()(),Jc(1340,`tr`,85)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),Mk(1344,` customerBrand`),_u(1345,`br`),Kg()()(),Jc(1346,`td`,18)(1347,`code`,26),Mk(1348,`string`),Kg()(),Jc(1349,`td`,21)(1350,`p`),Mk(1351,`Imagem da marca`),Kg()()(),Jc(1352,`tr`,86)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),Mk(1356,` items`),_u(1357,`br`),Kg()()(),Jc(1358,`td`,18)(1359,`code`,53),Mk(1360,`Array<PoHeaderActionToolItem>`),Kg()(),Jc(1361,`td`,21)(1362,`em`)(1363,`strong`),Mk(1364,`(opcional)`),Kg()(),Jc(1365,`p`),Mk(1366,`Itens de ações`),Kg(),Jc(1367,`blockquote`)(1368,`p`),Mk(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),Kg()()()(),Jc(1370,`tr`,87)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),Mk(1374,` onClose`),_u(1375,`br`),Kg()()(),Jc(1376,`td`,18)(1377,`code`,49),Mk(1378,`Function`),Kg()(),Jc(1379,`td`,21)(1380,`em`)(1381,`strong`),Mk(1382,`(opcional)`),Kg()(),Jc(1383,`p`),Mk(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),Kg(),Jc(1385,`p`),Mk(1386,`Esse evento é disparado toda vez que o popup (quando há `),Jc(1387,`code`),Mk(1388,`items`),Kg(),Mk(1389,`) ou o popover (quando há `),Jc(1390,`code`),Mk(1391,`popover`),Kg(),Mk(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Kg(),Jc(1393,`p`),Mk(1394,`Exemplo: `),Jc(1395,`code`),Mk(1396,`onClose: this.onCloseNotifications.bind(this)`),Kg()()()(),Jc(1397,`tr`,88)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),Mk(1401,` onOpen`),_u(1402,`br`),Kg()()(),Jc(1403,`td`,18)(1404,`code`,49),Mk(1405,`Function`),Kg()(),Jc(1406,`td`,21)(1407,`em`)(1408,`strong`),Mk(1409,`(opcional)`),Kg()(),Jc(1410,`p`),Mk(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),Kg(),Jc(1412,`p`),Mk(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Jc(1414,`code`),Mk(1415,`items`),Kg(),Mk(1416,`) ou o popover (quando há `),Jc(1417,`code`),Mk(1418,`popover`),Kg(),Mk(1419,`) é exibido.`),Kg(),Jc(1420,`p`),Mk(1421,`Exemplo: `),Jc(1422,`code`),Mk(1423,`onOpen: this.onOpenNotifications.bind(this)`),Kg()()()(),Jc(1424,`tr`,89)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),Mk(1428,` popover`),_u(1429,`br`),Kg()()(),Jc(1430,`td`,18)(1431,`code`,60),Mk(1432,`PoHeaderActionPopoverAction`),Kg()(),Jc(1433,`td`,21)(1434,`em`)(1435,`strong`),Mk(1436,`(opcional)`),Kg()(),Jc(1437,`p`),Mk(1438,`Template que será utilizado na ação`),Kg()()(),Jc(1439,`tr`,90)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),Mk(1443,` status`),_u(1444,`br`),Kg()()(),Jc(1445,`td`,18)(1446,`code`,91),Mk(1447,`'positive' `),Kg(),Jc(1448,`code`,92),Mk(1449,` 'negative' `),Kg(),Jc(1450,`code`,93),Mk(1451,` 'warning' `),Kg(),Jc(1452,`code`,94),Mk(1453,` 'disabled'`),Kg()(),Jc(1454,`td`,21)(1455,`em`)(1456,`strong`),Mk(1457,`(opcional)`),Kg()(),Jc(1458,`p`),Mk(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),Kg(),Jc(1460,`ul`)(1461,`li`)(1462,`code`),Mk(1463,`positive`),Kg(),Mk(1464,`: Define a cor do `),Jc(1465,`code`),Mk(1466,`status`),Kg(),Mk(1467,` com a cor de feedback positivo.`),Kg(),Jc(1468,`li`)(1469,`code`),Mk(1470,`negative`),Kg(),Mk(1471,`: Define a cor do `),Jc(1472,`code`),Mk(1473,`status`),Kg(),Mk(1474,` com a cor de feedback negative.`),Kg(),Jc(1475,`li`)(1476,`code`),Mk(1477,`warning`),Kg(),Mk(1478,`: Define a cor do `),Jc(1479,`code`),Mk(1480,`status`),Kg(),Mk(1481,` com a cor de feedback warning.`),Kg(),Jc(1482,`li`)(1483,`code`),Mk(1484,`disabled`),Kg(),Mk(1485,`: Define a cor do `),Jc(1486,`code`),Mk(1487,`status`),Kg(),Mk(1488,` com a cor de feedback disabled`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function Qe(r,w){if(r&1&&(Jc(0,`div`,1),_u(1,`sample-po-header-basic-view`)(2,`sample-po-header-labs-view`)(3,`sample-po-header-apps-view`),Kg()),r&2){let i=tk();Ab(`hidden`,i.activeTab!==`web`)}}var Ge=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Header`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Header · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0),LO(1,Qe,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-header-doc`),Kg()()),l&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,be,fe,ve,we],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[GV.forChild(Ge),GV]})}return r})();var At=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge$1({type:r});static ɵinj=de({imports:[M,Ce]})}return r})();export{At as DocPoHeaderModule};
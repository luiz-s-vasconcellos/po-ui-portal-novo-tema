import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as Oze,$a as xO,A as Hoe,Ai as _O,B as L4,Cn as oi,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Li as bO,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Un as xze,Vi as bx,Wa as vo,Xa as wx,Xt as ere,Ya as wg,Za as xF,a as Ar,aa as iu,ai as Sn,b as Fu,cr as CO,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,kr as He$1,ma as lO,mi as VE,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var fe=(()=>{class r{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(i){this.poNotification=i}myAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(l){return new(l||r)(b(Fu))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(l,o){l&1&&nu(0,`po-header`,0),l&2&&UE(`p-brand`,o.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[Oze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r})();var He=r=>({"docs-sample-code-tabs":r});var Ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Header Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-header-basic/sample-po-header-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-header-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,He,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,fe],encapsulation:2,changeDetection:1})}return r})();var Be=()=>({label:`Positive`,value:`positive`});var Me=()=>({label:`Negative`,value:`negative`});var De=()=>({label:`Warning`,value:`warning`});var Fe=()=>({label:`Disabled`,value:`disabled`});var Ve=(r,C,i,l)=>[r,C,i,l];var Ie=()=>({label:`Medium`,value:`medium`});var Ue=()=>({label:`Small`,value:`small`});var qe=(r,C)=>[r,C];var ye=(()=>{class r$1{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(i){this.poNotification=i}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(i){let l=i;i.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(l.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,i],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(l){return new(l||r$1)(b(Fu))};static ɵcmp=Zn({type:r$1,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let m=Ax();nu(0,`po-header`,1),jc(1,`div`,2)(2,`po-input`,3),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.headerBrandTitle,d)||(o.headerBrandTitle=d),__(d)}),wg(),jc(3,`po-input`,4),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.headerBrandLogo,d)||(o.headerBrandLogo=d),__(d)}),wg(),jc(4,`po-input`,5),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.headerBrandSmallLogo,d)||(o.headerBrandSmallLogo=d),__(d)}),wg(),jc(5,`div`,6)(6,`po-button`,7),mt(`p-click`,function(){return o.addBrand()}),wg()()(),nu(7,`hr`),jc(8,`div`,8)(9,`h3`,9),lO(10,`Ações dos itens de menu`),wg(),jc(11,`po-input`,10),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.menuActionEvent,d)||(o.menuActionEvent=d),__(d)}),wg(),jc(12,`po-input`,11),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.menuActionLabel,d)||(o.menuActionLabel=d),__(d)}),wg(),jc(13,`po-button`,12),mt(`p-click`,function(){return o.addAction()}),wg()(),nu(14,`hr`),jc(15,`h3`,9),lO(16,`Ações das configurações`),wg(),jc(17,`form`,8,0)(19,`po-input`,13),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.actionNewTool.icon,d)||(o.actionNewTool.icon=d),__(d)}),wg(),jc(20,`po-input`,14),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.actionNewTool.tooltip,d)||(o.actionNewTool.tooltip=d),__(d)}),wg(),jc(21,`po-number`,15),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.actionNewTool.badge,d)||(o.actionNewTool.badge=d),__(d)}),wg(),jc(22,`po-switch`,16),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.actionNewToolEvent,d)||(o.actionNewToolEvent=d),__(d)}),wg(),jc(23,`po-button`,17),mt(`p-click`,function(){return o.addTool(o.actionNewTool)}),wg()(),nu(24,`hr`),jc(25,`h3`,9),lO(26,`Ações do Usuário`),wg(),jc(27,`form`,8,0)(29,`po-input`,18),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.newActionUser.customerBrand,d)||(o.newActionUser.customerBrand=d),__(d)}),wg(),jc(30,`po-input`,19),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.newActionUser.avatar,d)||(o.newActionUser.avatar=d),__(d)}),wg(),jc(31,`po-radio-group`,20),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.newActionUser.status,d)||(o.newActionUser.status=d),__(d)}),wg(),jc(32,`po-button`,17),mt(`p-click`,function(){return o.addUser()}),wg(),nu(33,`hr`),jc(34,`h3`,9),lO(35,`Variações de tamanho`),wg(),jc(36,`div`,8)(37,`po-radio-group`,21),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(o.size,d)||(o.size=d),__(d)}),wg()(),nu(38,`hr`),jc(39,`po-button`,22),mt(`p-click`,function(){return o.reset()}),wg()()}l&2&&(UE(`p-side-menu-only-action`,!0)(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuActions)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.actionUser)(`p-size`,o.size),rg(2),sb(`ngModel`,o.headerBrandTitle),o0(),rg(),sb(`ngModel`,o.headerBrandLogo),o0(),rg(),sb(`ngModel`,o.headerBrandSmallLogo),o0(),rg(7),sb(`ngModel`,o.menuActionEvent),o0(),rg(),sb(`ngModel`,o.menuActionLabel),o0(),rg(),UE(`p-disabled`,!o.menuActionLabel),rg(6),sb(`ngModel`,o.actionNewTool.icon),o0(),rg(),sb(`ngModel`,o.actionNewTool.tooltip),o0(),rg(),sb(`ngModel`,o.actionNewTool.badge),o0(),rg(),sb(`ngModel`,o.actionNewToolEvent),o0(),rg(),UE(`p-disabled`,o.actionTools.length>2),rg(6),sb(`ngModel`,o.newActionUser.customerBrand),o0(),rg(),sb(`ngModel`,o.newActionUser.avatar),o0(),rg(),sb(`ngModel`,o.newActionUser.status),UE(`p-options`,bO(28,Ve,_O(24,Be),_O(25,Me),_O(26,De),_O(27,Fe))),o0(),rg(),UE(`p-disabled`,!o.newActionUser.avatar||o.newActionUser.customerBrand),rg(5),sb(`ngModel`,o.size),UE(`p-options`,CO(35,qe,_O(33,Ie),_O(34,Ue))),o0())},dependencies:[RK,SK,MK,xF,SF,oi,U4,Hoe,Gte,L4,Oze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r$1})();var ze=r=>({"docs-sample-code-tabs":r});var Te=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Header Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-header-labs/sample-po-header-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-header
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-header-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ze,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ye],encapsulation:2,changeDetection:1})}return r})();var je=[`meuTemplate`];var Re=[`notificationTemplate`];var Qe=(r,C)=>C.icon;function Ge(r,C){if(r&1&&nu(0,`po-button`,5),r&2){let i=C.$implicit;UE(`p-icon`,i.icon)}}function Je(r,C){if(r&1&&(jc(0,`div`,3)(1,`p`),lO(2,`Meus aplicativos`),wg(),nu(3,`br`),jc(4,`div`,4),bx(5,Ge,1,1,`po-button`,5,Qe),wg()()),r&2){let i=Fx();rg(5),wx(i.systemApps)}}function Ke(r,C){if(r&1){let i=Ax();jc(0,`div`,6)(1,`div`,7)(2,`span`,8),lO(3,`Notificações`),wg()(),jc(4,`div`,9)(5,`po-button`,10),mt(`p-click`,function(){v_(i);let o=Fx();return __(o.markAllAsRead())}),wg()()(),nu(6,`po-divider`),jc(7,`po-list-view`,11),mt(`p-item-click`,function(o){v_(i);let m=Fx();return __(m.readNotification(o))}),wg(),nu(8,`po-divider`),jc(9,`div`,12)(10,`div`,13)(11,`po-button`,14),mt(`p-click`,function(){v_(i);let o=Fx();return __(o.resetNotifications())}),wg(),jc(12,`po-button`,15),mt(`p-click`,function(){v_(i);let o=Fx();return __(o.markAllAsUnread())}),wg()()()}if(r&2){let i=Fx();rg(5),UE(`p-disabled`,!i.hasNotifications),rg(2),UE(`p-field-properties`,i.fieldProperties)(`p-items`,i.notificationList)(`p-select`,!1)(`p-literals`,i.notificationLiterals)}}var Ae=(()=>{class r$2{poNotification;cd;meuTemplate;notificationTemplate;fieldProperties={title:`title`,subtitle:`content`,avatar:`avatar`,highlighted:`checked`,tag:{value:`tag`,type:`tagType`}};initialNotifications=[{title:`Relatório de faturamento`,content:`O arquivo solicitado já está disponível para download`,tag:`Concluído`,tagType:`success`,avatar:{progress:100,status:`success`,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Folha de pagamento`,content:`O cálculo da folha de pagamento está em andamento`,tag:`Em andamento`,tagType:`info`,avatar:{progress:80,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Nova versão TOTVS 2.1`,content:`Atualize seu sistema para a versão TOTVS 2.1`,tag:`Novidade`,tagType:`neutral`,avatar:{icon:`an an-arrow-circle-up`,color:`#ffffff`,backgroundColor:`#000000`},checked:!0},{title:`6 novos colaboradores`,content:`Você tem 6 novos colaboradores cadastrados`,tag:`Info`,tagType:`info`,avatar:{icon:`an an-user`,color:`#753399`,backgroundColor:`#f0e6f5`},checked:!0},{title:`Novo usuário`,content:`Novo usuário adicionado ao grupo Financeiro`,tag:`Info`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=12`,checked:!0}];allNotifications=this.initialNotifications.map(i=>r({},i));notificationList=this.allNotifications.filter(i=>i.checked);get hasNotifications(){return this.notificationList.some(i=>i.checked)}notificationLiterals={noData:`Você está atualizado! Você não tem novas notificações no momento. Assim que surgirem novidades ou alertas, eles aparecerão aqui.`};listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)},{label:`Notificações`,icon:`an an-bell`,tooltip:`Notificações do usuário`,badge:5,popover:{content:this.notificationTemplate,width:480},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(i,l){this.poNotification=i,this.cd=l}ngAfterViewInit(){this.actionTools=this.actionTools.map(i=>i.label===`Aplicativos`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.meuTemplate})}):i.label===`Notificações`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.notificationTemplate})}):i),this.cd.detectChanges()}myAction(i){this.poNotification.success({message:`Action clicked: ${i}`,orientation:Ar.Bottom})}markAllAsRead(){this.allNotifications.forEach(i=>i.checked=!1),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(void 0),this.poNotification.success({message:`Todas as notificações foram marcadas como lidas.`,orientation:Ar.Top})}readNotification(i){let l=this.allNotifications.find(o=>o.title===i?.title);l&&(l.checked=!1),setTimeout(()=>{this.notificationList=this.allNotifications.filter(m=>m.checked);let o=this.notificationList.length;this.setNotificationBadge(o>0?o:void 0)}),this.poNotification.information({message:`Notifica\xE7\xE3o lida: ${i?.title}`,orientation:Ar.Top})}resetNotifications(){this.notificationList=this.allNotifications.map(i=>r({},i))}markAllAsUnread(){this.allNotifications.forEach(i=>i.checked=!0),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(this.allNotifications.length),this.poNotification.information({message:`Todas as notificações foram marcadas como não lidas.`,orientation:Ar.Top})}setNotificationBadge(i){setTimeout(()=>{this.actionTools=this.actionTools.map(l=>l.label===`Notificações`?s(r({},l),{badge:i}):l),this.cd.detectChanges()})}onOpenTool(i){this.poNotification.information({message:`Opened: ${i} (p-actions-tools)`,orientation:Ar.Top})}onCloseTool(i){this.poNotification.warning({message:`Closed: ${i} (p-actions-tools)`,orientation:Ar.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Ar.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Ar.Top})}static ɵfac=function(l){return new(l||r$2)(b(Fu),b(He$1))};static ɵcmp=Zn({type:r$2,selectors:[[`sample-po-header-apps`]],viewQuery:function(l,o){if(l&1&&iu(je,5)(Re,5),l&2){let m;yo(m=vo())&&(o.meuTemplate=m.first),yo(m=vo())&&(o.notificationTemplate=m.first)}},standalone:!1,decls:5,vars:5,consts:[[`meuTemplate`,``],[`notificationTemplate`,``],[1,`example-notification-header`,3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-2`,`po-pb-0`],[1,`po-md-6`],[1,`po-font-subtitle`],[1,`po-md-6`,`po-text-right`],[`p-icon`,`an an-checks`,`p-label`,`Marcar todas como lidas`,`p-kind`,`tertiary`,3,`p-click`,`p-disabled`],[`p-tag-position`,`top`,`p-avatar-size`,`md`,3,`p-item-click`,`p-field-properties`,`p-items`,`p-select`,`p-literals`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-0`,`po-pb-2`],[1,`po-md-12`,`po-text-right`],[`p-label`,`Ver todas notificações`,`p-kind`,`primary`,1,`po-mr-1`,3,`p-click`],[`p-icon`,`an an-arrow-counter-clockwise`,`p-kind`,`tertiary`,`p-aria-label`,`Marcar todas como não lidas`,3,`p-click`]],template:function(l,o){l&1&&(nu(0,`po-header`,2),VE(1,Je,7,0,`ng-template`,null,0,xO)(3,Ke,13,5,`ng-template`,null,1,xO)),l&2&&UE(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuItems)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[oi,Lf,xze,Oze],styles:[`sample-po-header-apps{display:block;min-height:768px}sample-po-header-apps .app-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}sample-po-header-apps .custom-template{padding:.5rem}sample-po-header-apps .custom-template p{text-align:center;font-weight:700;color:var(--%NS%color-neutral-dark-90)}sample-po-header-apps po-header{--%NS%nav-position: flex}po-header.example-notification-header po-list-view{--%NS%po-density-gap-spacing: 0px;--%NS%po-density-content-padding: 0px;--%NS%list-item-shadow: none;--%NS%list-item-border-radius: 0px;--%NS%list-item-border-color: transparent}po-header.example-notification-header po-divider{--%NS%po-density-gap-spacing: 0}
`],encapsulation:2,changeDetection:1})}return r$2})();var Ye=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Header Apps`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-header-apps/sample-po-header-apps.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-header
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import {
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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-header-apps`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ye,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ae],encapsulation:2,changeDetection:1})}return r})();var Pe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-header`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoHeaderComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`O componente `),jc(18,`code`),lO(19,`po-header`),wg(),lO(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),jc(21,`code`),lO(22,`p-brand`),wg(),lO(23,`, `),jc(24,`code`),lO(25,`p-menu-items`),wg(),lO(26,`, `),jc(27,`code`),lO(28,`p-actions-tools`),wg(),lO(29,` e `),jc(30,`code`),lO(31,`p-header-user`),wg(),lO(32,`.`),wg(),jc(33,`ul`)(34,`li`)(35,`code`),lO(36,`p-brand`),wg(),lO(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),wg(),jc(38,`li`)(39,`code`),lO(40,`p-menu-items`),wg(),lO(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),wg(),jc(42,`li`)(43,`code`),lO(44,`p-actions-tools`),wg(),lO(45,`: Possibilita a inclusão de até 3 botões com ações.`),wg(),jc(46,`li`)(47,`code`),lO(48,`p-header-user`),wg(),lO(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),wg()(),jc(50,`p`),lO(51,`O componente `),jc(52,`code`),lO(53,`po-header`),wg(),lO(54,` pode ser usado de duas formas:`),wg(),jc(55,`p`),lO(56,`Com `),jc(57,`code`),lO(58,`po-menu`),wg(),lO(59,` definido pelo usuário:`),wg(),jc(60,`pre`)(61,`code`),lO(62,`...
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
`),wg()(),jc(63,`p`),lO(64,`Passando os itens diretamente para o `),jc(65,`code`),lO(66,`po-header`),wg(),lO(67,` pela propriedade `),jc(68,`code`),lO(69,`p-menus`),wg(),lO(70,`:`),wg(),jc(71,`pre`)(72,`code`),lO(73,`...
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
`),wg()(),jc(74,`h4`),lO(75,`Tokens customizáveis`),wg(),jc(76,`p`),lO(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(78,`blockquote`)(79,`p`),lO(80,`Para maiores informações, acesse o guia `),jc(81,`a`,6),lO(82,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(83,`.`),wg()(),jc(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),lO(88,`Propriedade`),wg(),jc(89,`th`),lO(90,`Descrição`),wg(),jc(91,`th`),lO(92,`Valor Padrão`),wg()()(),jc(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),lO(97,`--font-family`),wg()(),jc(98,`td`),lO(99,`Família tipográfica usada`),wg(),jc(100,`td`)(101,`code`),lO(102,`var(--font-family-theme)`),wg()()(),jc(103,`tr`)(104,`td`)(105,`code`),lO(106,`--font-weight`),wg()(),jc(107,`td`),lO(108,`Peso da fonte`),wg(),jc(109,`td`)(110,`code`),lO(111,`var(--font-weight-bold)`),wg()()(),jc(112,`tr`)(113,`td`)(114,`code`),lO(115,`--text-color`),wg()(),jc(116,`td`),lO(117,`Cor do texto`),wg(),jc(118,`td`)(119,`code`),lO(120,`var(--color-neutral-dark-70)`),wg()()(),jc(121,`tr`)(122,`td`)(123,`code`),lO(124,`--outline-color-focused`),wg()(),jc(125,`td`),lO(126,`Cor do outline dos itens de sub-menu e customer`),wg(),jc(127,`td`)(128,`code`),lO(129,`var(--color-neutral-dark-95)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),lO(133,`--object-fit-brand`),wg()(),jc(134,`td`),lO(135,`Valor do object-fit da imagem do logo`),wg(),jc(136,`td`)(137,`code`),lO(138,`contain`),wg()()(),jc(139,`tr`)(140,`td`)(141,`code`),lO(142,`--object-fit-customer`),wg()(),jc(143,`td`),lO(144,`Valor do object-fit da imagem do logo na seção customer`),wg(),jc(145,`td`)(146,`code`),lO(147,`contain`),wg()()(),jc(148,`tr`)(149,`td`)(150,`code`),lO(151,`--object-fit-customer-user`),wg()(),jc(152,`td`),lO(153,`Valor do object-fit da imagem do avatar`),wg(),jc(154,`td`)(155,`code`),lO(156,`cover`),wg()()(),jc(157,`tr`)(158,`td`)(159,`strong`),lO(160,`Header`),wg()(),nu(161,`td`)(162,`td`),wg(),jc(163,`tr`)(164,`td`)(165,`code`),lO(166,`--background-color`),wg()(),jc(167,`td`),lO(168,`Cor de background do header`),wg(),jc(169,`td`)(170,`code`),lO(171,`var(--color-neutral-light-05)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`code`),lO(175,`--border-radius-bottom-left`),wg()(),jc(176,`td`),lO(177,`Valor do radius do lado esquerdo do header`),wg(),jc(178,`td`)(179,`code`),lO(180,`var(--border-radius-md)`),wg()()(),jc(181,`tr`)(182,`td`)(183,`code`),lO(184,`--border-radius-bottom-right`),wg()(),jc(185,`td`),lO(186,`Valor do radius do lado direito do header`),wg(),jc(187,`td`)(188,`code`),lO(189,`var(--border-radius-md)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`code`),lO(193,`--base shadow`),wg()(),jc(194,`td`),lO(195,`Cor da sombra do header`),wg(),jc(196,`td`)(197,`code`),lO(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),wg()()(),jc(199,`tr`)(200,`td`)(201,`code`),lO(202,`--stroke-color`),wg()(),jc(203,`td`),lO(204,`Cor da borda inferior do header`),wg(),jc(205,`td`)(206,`code`),lO(207,`var(--color-brand-01-base)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`strong`),lO(211,`Sub-menu`),wg()(),nu(212,`td`)(213,`td`),wg(),jc(214,`tr`)(215,`td`)(216,`code`),lO(217,`--border-radius`),wg()(),jc(218,`td`),lO(219,`Valor do radius dos itens do sub-menu`),wg(),jc(220,`td`)(221,`code`),lO(222,`var(--border-radius-md);`),wg()()(),jc(223,`tr`)(224,`td`)(225,`code`),lO(226,`--text-color-submenu`),wg()(),jc(227,`td`),lO(228,`Cor do texto dos itens do sub-menu`),wg(),jc(229,`td`)(230,`code`),lO(231,`var(--color-brand-01-base)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),lO(235,`--icon-color`),wg()(),jc(236,`td`),lO(237,`Cor do ícone do sub-menu com itens`),wg(),jc(238,`td`)(239,`code`),lO(240,`var(--color-brand-01-base)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),lO(244,`--border-color`),wg()(),jc(245,`td`),lO(246,`Cor da borda`),wg(),jc(247,`td`)(248,`code`),lO(249,`var(--color-transparent)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`code`),lO(253,`--shadow`),wg()(),jc(254,`td`),lO(255,`Contém o valor da sombra do elemento`),wg(),jc(256,`td`)(257,`code`),lO(258,`var(--shadow-none)`),wg()()(),jc(259,`tr`)(260,`td`)(261,`code`),lO(262,`--font-family-submenu`),wg()(),jc(263,`td`),lO(264,`Fonte do texto dos itens de sub-menu`),wg(),jc(265,`td`)(266,`code`),lO(267,`var(--font-family-theme)`),wg()()(),jc(268,`tr`)(269,`td`)(270,`code`),lO(271,`--font-weight-submenu`),wg()(),jc(272,`td`),lO(273,`Peso da fonte do texto dos itens de sub-menu`),wg(),jc(274,`td`)(275,`code`),lO(276,`var(--font-weight-bold)`),wg()()(),jc(277,`tr`)(278,`td`)(279,`strong`),lO(280,`Sub-menu - Hover`),wg()(),nu(281,`td`)(282,`td`),wg(),jc(283,`tr`)(284,`td`)(285,`code`),lO(286,`--background-hover`),wg()(),jc(287,`td`),lO(288,`Cor de background dos itens do sub-menu no estado hover`),wg(),jc(289,`td`)(290,`code`),lO(291,`var(--color-brand-01-lighter)`),wg()()(),jc(292,`tr`)(293,`td`)(294,`code`),lO(295,`--icon-color-hover`),wg()(),jc(296,`td`),lO(297,`Cor do ícone dos itens de sub-menu no estado hover`),wg(),jc(298,`td`)(299,`code`),lO(300,`var(--color-brand-01-darkest)`),wg()()(),jc(301,`tr`)(302,`td`)(303,`code`),lO(304,`--text-color-hover`),wg()(),jc(305,`td`),lO(306,`Cor do texto dos itens de sub-menu no estado hover`),wg(),jc(307,`td`)(308,`code`),lO(309,`var(--color-brand-01-darkest)`),wg()()(),jc(310,`tr`)(311,`td`)(312,`strong`),lO(313,`Sub-menu - pressed`),wg()(),nu(314,`td`)(315,`td`),wg(),jc(316,`tr`)(317,`td`)(318,`code`),lO(319,`--background-pressed`),wg()(),jc(320,`td`),lO(321,`Cor de background dos itens do sub-menu no estado pressed`),wg(),jc(322,`td`)(323,`code`),lO(324,`var(--color-brand-01-light)`),wg()()(),jc(325,`tr`)(326,`td`)(327,`code`),lO(328,`--icon-color-pressed`),wg()(),jc(329,`td`),lO(330,`Cor do ícone dos itens de sub-menu no estado pressed`),wg(),jc(331,`td`)(332,`code`),lO(333,`var(--color-brand-01-darkest)`),wg()()(),jc(334,`tr`)(335,`td`)(336,`code`),lO(337,`--text-color-pressed`),wg()(),jc(338,`td`),lO(339,`Cor do texto dos itens de sub-menu no estado pressed`),wg(),jc(340,`td`)(341,`code`),lO(342,`var(--color-brand-01-darkest)`),wg()()(),jc(343,`tr`)(344,`td`)(345,`strong`),lO(346,`Sub-menu - selected`),wg()(),nu(347,`td`)(348,`td`),wg(),jc(349,`tr`)(350,`td`)(351,`code`),lO(352,`--background-selected`),wg()(),jc(353,`td`),lO(354,`Cor de background dos itens do sub-menu no estado selected`),wg(),jc(355,`td`)(356,`code`),lO(357,`var(--color-brand-01-light)`),wg()()(),jc(358,`tr`)(359,`td`)(360,`code`),lO(361,`--icon-color-selected`),wg()(),jc(362,`td`),lO(363,`Cor do ícone dos itens de sub-menu no estado selected`),wg(),jc(364,`td`)(365,`code`),lO(366,`var(--color-neutral-dark-95)`),wg()()(),jc(367,`tr`)(368,`td`)(369,`code`),lO(370,`--text-color-selected`),wg()(),jc(371,`td`),lO(372,`Cor do texto dos itens de sub-menu no estado selected`),wg(),jc(373,`td`)(374,`code`),lO(375,`var(--color-brand-01-darkest)`),wg()()(),jc(376,`tr`)(377,`td`)(378,`strong`),lO(379,`Customer`),wg()(),nu(380,`td`)(381,`td`),wg(),jc(382,`tr`)(383,`td`)(384,`code`),lO(385,`--background-color-customer`),wg()(),jc(386,`td`),lO(387,`Cor do background da seção customer`),wg(),jc(388,`td`)(389,`code`),lO(390,`var(--color-neutral-light-00)`),wg()()(),jc(391,`tr`)(392,`td`)(393,`code`),lO(394,`--border-color`),wg()(),jc(395,`td`),lO(396,`Cor da borda da seção customer`),wg(),jc(397,`td`)(398,`code`),lO(399,`var(--color-neutral-light-10)`),wg()()(),jc(400,`tr`)(401,`td`)(402,`code`),lO(403,`--border-style`),wg()(),jc(404,`td`),lO(405,`Estilo da borda da seção customer`),wg(),jc(406,`td`)(407,`code`),lO(408,`solid`),wg()()(),jc(409,`tr`)(410,`td`)(411,`code`),lO(412,`--border-width`),wg()(),jc(413,`td`),lO(414,`Largura da borda da seção customer`),wg(),jc(415,`td`)(416,`code`),lO(417,`var(--border-width-sm)`),wg()()(),jc(418,`tr`)(419,`td`)(420,`strong`),lO(421,`Customer - hover`),wg()(),nu(422,`td`)(423,`td`),wg(),jc(424,`tr`)(425,`td`)(426,`code`),lO(427,`--background-color-customer-hover`),wg()(),jc(428,`td`),lO(429,`Cor do background da seção customer no estado hover`),wg(),jc(430,`td`)(431,`code`),lO(432,`var(--color-brand-01-lighter)`),wg()()(),jc(433,`tr`)(434,`td`)(435,`strong`),lO(436,`Customer - pressed`),wg()(),nu(437,`td`)(438,`td`),wg(),jc(439,`tr`)(440,`td`)(441,`code`),lO(442,`--background-color-customer-pressed`),wg()(),jc(443,`td`),lO(444,`Cor do background da seção customer no estado pressed`),wg(),jc(445,`td`)(446,`code`),lO(447,`var(--color-brand-01-light)`),wg()()(),jc(448,`tr`)(449,`td`)(450,`code`),lO(451,`--border-width-pressed`),wg()(),jc(452,`td`),lO(453,`Largura da borda da seção customer no estado pressed`),wg(),jc(454,`td`)(455,`code`),lO(456,`var(--border-width-md)`),wg()()()()()(),jc(457,`div`,7)(458,`h4`,8),lO(459,`Seletor`),wg(),jc(460,`pre`,9),lO(461,`<po-header
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
`),wg()(),jc(462,`h4`,10),lO(463,`Propriedades`),wg(),jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),lO(467,`Nome`),wg(),jc(468,`th`,13),lO(469,`Tipo`),wg(),jc(470,`th`,13),lO(471,`Padrão`),wg(),jc(472,`th`,13),lO(473,`Descrição`),wg()(),jc(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),lO(478,` p-actions-tools`),nu(479,`br`),wg()()(),jc(480,`td`,18)(481,`code`,19),lO(482,`Array<PoHeaderActionTool>`),wg()(),jc(483,`td`,20),lO(484,`-`),wg(),jc(485,`td`,21)(486,`em`)(487,`strong`),lO(488,`(opcional)`),wg()(),jc(489,`p`),lO(490,`Propriedade para configurar a seção de tools do `),jc(491,`code`),lO(492,`po-header`),wg()(),jc(493,`blockquote`)(494,`p`),lO(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),wg()()()(),jc(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),lO(500,` p-amount-more`),nu(501,`br`),wg()()(),jc(502,`td`,18)(503,`code`,22),lO(504,`number`),wg()(),jc(505,`td`,20),lO(506,`-`),wg(),jc(507,`td`,21)(508,`em`)(509,`strong`),lO(510,`(opcional)`),wg()(),jc(511,`p`),lO(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),wg(),jc(513,`blockquote`)(514,`p`),lO(515,`Ao utilizar essa propriedade o `),jc(516,`code`),lO(517,`po-header`),wg(),lO(518,` não irá realizar o calculo automatíco de itens.`),wg()()()(),jc(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),lO(523,` p-brand`),nu(524,`br`),wg()()(),jc(525,`td`,18)(526,`code`,23),lO(527,`PoHeaderBrand `),wg(),jc(528,`code`,24),lO(529,` string`),wg()(),jc(530,`td`,20),lO(531,`-`),wg(),jc(532,`td`,21)(533,`em`)(534,`strong`),lO(535,`(opcional)`),wg()(),jc(536,`p`),lO(537,`Propriedade para configurar a seção de brand do `),jc(538,`code`),lO(539,`po-header`),wg()(),jc(540,`p`),lO(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),wg()()(),jc(542,`tr`,14)(543,`td`,15)(544,`div`,25)(545,`span`,26),lO(546,` (p-colapsed-menu)`),nu(547,`br`),wg()()(),jc(548,`td`,18)(549,`code`,27),lO(550,`EventEmitter`),wg()(),jc(551,`td`,20),lO(552,`-`),wg(),jc(553,`td`,21)(554,`em`)(555,`strong`),lO(556,`(opcional)`),wg()(),jc(557,`p`),lO(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),wg()()(),jc(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),lO(563,` p-filter-menu`),nu(564,`br`),wg()()(),jc(565,`td`,18)(566,`code`,28),lO(567,`boolean`),wg()(),jc(568,`td`,20),lO(569,`-`),wg(),jc(570,`td`,21)(571,`em`)(572,`strong`),lO(573,`(opcional)`),wg()(),jc(574,`p`),lO(575,`Habilita campo para filtrar itens no menu`),wg()()(),jc(576,`tr`,14)(577,`td`,15)(578,`div`,16)(579,`span`,17),lO(580,` p-header-template`),nu(581,`br`),wg()()(),jc(582,`td`,18)(583,`code`,29),lO(584,`TemplateRef<any>`),wg()(),jc(585,`td`,20),lO(586,`-`),wg(),jc(587,`td`,21)(588,`em`)(589,`strong`),lO(590,`(opcional)`),wg()(),jc(591,`p`),lO(592,`Template customiado que será renderizado após os itens definidos na propriedade `),jc(593,`code`),lO(594,`p-menu-items`),wg()()()(),jc(595,`tr`,14)(596,`td`,15)(597,`div`,16)(598,`span`,17),lO(599,` p-header-user`),nu(600,`br`),wg()()(),jc(601,`td`,18)(602,`code`,30),lO(603,`PoHeaderUser`),wg()(),jc(604,`td`,20),lO(605,`-`),wg(),jc(606,`td`,21)(607,`em`)(608,`strong`),lO(609,`(opcional)`),wg()(),jc(610,`p`),lO(611,`Propriedade para configurar a seção de headerUser do `),jc(612,`code`),lO(613,`po-header`),wg()()()(),jc(614,`tr`,14)(615,`td`,15)(616,`div`,16)(617,`span`,17),lO(618,` p-hide-button-menu`),nu(619,`br`),wg()()(),jc(620,`td`,18)(621,`code`,28),lO(622,`boolean`),wg()(),jc(623,`td`,20),lO(624,`-`),wg(),jc(625,`td`,21)(626,`em`)(627,`strong`),lO(628,`(opcional)`),wg()(),jc(629,`p`),lO(630,`Esconde o botão de menu colapsado.`),wg()()(),jc(631,`tr`,14)(632,`td`,15)(633,`div`,16)(634,`span`,17),lO(635,` p-literals`),nu(636,`br`),wg()()(),jc(637,`td`,18)(638,`code`,31),lO(639,`PoHeaderLiterals`),wg()(),jc(640,`td`,20),lO(641,`-`),wg(),jc(642,`td`,21)(643,`em`)(644,`strong`),lO(645,`(opcional)`),wg()(),jc(646,`p`),lO(647,`Objeto com a literal usada na propriedade `),jc(648,`code`),lO(649,`p-literals`),wg(),lO(650,`.`),wg(),jc(651,`p`),lO(652,`Para customizar a literal, basta declarar um objeto do tipo `),jc(653,`code`),lO(654,`PoHeaderLiterals`),wg(),lO(655,` conforme exemplo abaixo:`),wg(),jc(656,`pre`)(657,`code`),lO(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),wg()(),jc(659,`p`),lO(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(661,`pre`)(662,`code`),lO(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),wg()(),jc(664,`blockquote`)(665,`p`),lO(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(667,`a`,32)(668,`code`),lO(669,`PoI18nService`),wg()(),lO(670,` ou do browser.`),wg()()()(),jc(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),lO(675,` p-menus`),nu(676,`br`),wg()()(),jc(677,`td`,18)(678,`code`,33),lO(679,`Array<PoMenuItem>`),wg()(),jc(680,`td`,20),lO(681,`-`),wg(),jc(682,`td`,21)(683,`em`)(684,`strong`),lO(685,`(opcional)`),wg()(),jc(686,`p`),lO(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),wg(),jc(688,`blockquote`)(689,`p`),lO(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),wg()()()(),jc(691,`tr`,14)(692,`td`,15)(693,`div`,16)(694,`span`,17),lO(695,` p-menu-items`),nu(696,`br`),wg()()(),jc(697,`td`,18)(698,`code`,34),lO(699,`Array<PoHeaderActions>`),wg()(),jc(700,`td`,20),lO(701,`-`),wg(),jc(702,`td`,21)(703,`em`)(704,`strong`),lO(705,`(opcional)`),wg()(),jc(706,`p`),lO(707,`Propriedade para configurar a seção de menu do `),jc(708,`code`),lO(709,`po-header`),wg(),lO(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),wg(),jc(711,`blockquote`)(712,`p`),lO(713,`Os itens irão ficar visíveis em uma tela de até 960px`),wg()()()(),jc(714,`tr`,14)(715,`td`,15)(716,`div`,16)(717,`span`,17),lO(718,` p-size`),nu(719,`br`),wg()()(),jc(720,`td`,18)(721,`code`,24),lO(722,`string`),wg()(),jc(723,`td`,20)(724,`p`)(725,`code`),lO(726,`medium`),wg()()(),jc(727,`td`,21)(728,`em`)(729,`strong`),lO(730,`(opcional)`),wg()(),jc(731,`p`),lO(732,`Define o tamanho do componente:`),wg(),jc(733,`ul`)(734,`li`)(735,`code`),lO(736,`small`),wg(),lO(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),wg(),jc(738,`li`)(739,`code`),lO(740,`medium`),wg(),lO(741,`: altura de 56px.`),wg()(),jc(742,`blockquote`)(743,`p`),lO(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(745,`code`),lO(746,`medium`),wg(),lO(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(748,`a`,35),lO(749,`po-theme`),wg(),lO(750,`.`),wg()()()()(),jc(751,`h3`),lO(752,`Interfaces`),wg(),jc(753,`h4`,36)(754,`code`,5),lO(755,`PoHeaderActionTool`),wg()(),jc(756,`div`,2)(757,`p`)(758,`em`),lO(759,`Interface`),wg(),lO(760,` que define a seção de Actions do header.`),wg(),jc(761,`p`),lO(762,`Indicação de uso:`),wg(),jc(763,`ul`)(764,`li`),lO(765,`Primeira ação destinada à app launcher.`),wg(),jc(766,`li`),lO(767,`Segunda ação (terceiro ícone) destinada à notificações.`),wg(),jc(768,`li`),lO(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),wg()(),jc(770,`blockquote`)(771,`p`),lO(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),wg()()(),jc(773,`h4`,10),lO(774,`Propriedades`),wg(),jc(775,`table`,11)(776,`tr`,12)(777,`th`,13),lO(778,`Nome`),wg(),jc(779,`th`,13),lO(780,`Tipo`),wg(),jc(781,`th`,13),lO(782,`Descrição`),wg()(),jc(783,`tr`,14)(784,`td`,15)(785,`div`,16)(786,`span`,17),lO(787,` action`),nu(788,`br`),wg()()(),jc(789,`td`,18)(790,`code`,37),lO(791,`Function`),wg()(),jc(792,`td`,21)(793,`em`)(794,`strong`),lO(795,`(opcional)`),wg()(),jc(796,`p`),lO(797,`Evento emitido ao clicar em uma ação`),wg(),jc(798,`p`),lO(799,`Exemplo: `),jc(800,`code`),lO(801,`action: this.myFunction.bind(this)`),wg()()()(),jc(802,`tr`,14)(803,`td`,15)(804,`div`,16)(805,`span`,17),lO(806,` badge`),nu(807,`br`),wg()()(),jc(808,`td`,18)(809,`code`,22),lO(810,`number`),wg()(),jc(811,`td`,21)(812,`em`)(813,`strong`),lO(814,`(opcional)`),wg()(),jc(815,`p`),lO(816,`Valor númerico com a repsentação de notificações`),wg()()(),jc(817,`tr`,14)(818,`td`,15)(819,`div`,16)(820,`span`,17),lO(821,` icon`),nu(822,`br`),wg()()(),jc(823,`td`,18)(824,`code`,24),lO(825,`string`),wg()(),jc(826,`td`,21)(827,`em`)(828,`strong`),lO(829,`(opcional)`),wg()(),jc(830,`p`),lO(831,`Ícone do botão de ação`),wg()()(),jc(832,`tr`,14)(833,`td`,15)(834,`div`,16)(835,`span`,17),lO(836,` items`),nu(837,`br`),wg()()(),jc(838,`td`,18)(839,`code`,38),lO(840,`Array<PoHeaderActionToolItem>`),wg()(),jc(841,`td`,21)(842,`em`)(843,`strong`),lO(844,`(opcional)`),wg()(),jc(845,`p`),lO(846,`Itens de ações`),wg()()(),jc(847,`tr`,14)(848,`td`,15)(849,`div`,16)(850,`span`,17),lO(851,` label`),nu(852,`br`),wg()()(),jc(853,`td`,18)(854,`code`,24),lO(855,`string`),wg()(),jc(856,`td`,21)(857,`em`)(858,`strong`),lO(859,`(opcional)`),wg()(),jc(860,`p`),lO(861,`Título da ação`),wg()()(),jc(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),lO(866,` link`),nu(867,`br`),wg()()(),jc(868,`td`,18)(869,`code`,24),lO(870,`string`),wg()(),jc(871,`td`,21)(872,`em`)(873,`strong`),lO(874,`(opcional)`),wg()(),jc(875,`p`),lO(876,`link utilizado no redirecionamento das páginas.`),wg()()(),jc(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),lO(881,` onClose`),nu(882,`br`),wg()()(),jc(883,`td`,18)(884,`code`,39),lO(885,`(label?: string) => void`),wg()(),jc(886,`td`,21)(887,`em`)(888,`strong`),lO(889,`(opcional)`),wg()(),jc(890,`p`),lO(891,`Função executada quando o popup ou popover da ação é fechado.`),wg(),jc(892,`p`),lO(893,`Esse evento é disparado toda vez que o popup (quando há `),jc(894,`code`),lO(895,`items`),wg(),lO(896,`) ou o popover (quando há `),jc(897,`code`),lO(898,`popover`),wg(),lO(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),wg(),jc(900,`p`),lO(901,`O callback recebe como parâmetro o `),jc(902,`code`),lO(903,`label`),wg(),lO(904,` da ação que disparou o evento.`),wg(),jc(905,`p`),lO(906,`Exemplo: `),jc(907,`code`),lO(908,`onClose: (label) => console.log('Fechado:', label)`),wg()()()(),jc(909,`tr`,14)(910,`td`,15)(911,`div`,16)(912,`span`,17),lO(913,` onOpen`),nu(914,`br`),wg()()(),jc(915,`td`,18)(916,`code`,39),lO(917,`(label?: string) => void`),wg()(),jc(918,`td`,21)(919,`em`)(920,`strong`),lO(921,`(opcional)`),wg()(),jc(922,`p`),lO(923,`Função executada quando o popup ou popover da ação é aberto.`),wg(),jc(924,`p`),lO(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),jc(926,`code`),lO(927,`items`),wg(),lO(928,`)
ou o popover (quando h\xE1 `),jc(929,`code`),lO(930,`popover`),wg(),lO(931,`) é exibido.`),wg(),jc(932,`p`),lO(933,`O callback recebe como parâmetro o `),jc(934,`code`),lO(935,`label`),wg(),lO(936,` da ação que disparou o evento.`),wg(),jc(937,`p`),lO(938,`Exemplo: `),jc(939,`code`),lO(940,`onOpen: (label) => console.log('Aberto:', label)`),wg()()()(),jc(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),lO(945,` popover`),nu(946,`br`),wg()()(),jc(947,`td`,18)(948,`code`,40),lO(949,`PoHeaderActionPopoverAction`),wg()(),jc(950,`td`,21)(951,`em`)(952,`strong`),lO(953,`(opcional)`),wg()(),jc(954,`p`),lO(955,`Template que será utilizado na ação`),wg()()(),jc(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),lO(960,` tooltip`),nu(961,`br`),wg()()(),jc(962,`td`,18)(963,`code`,24),lO(964,`string`),wg()(),jc(965,`td`,21)(966,`em`)(967,`strong`),lO(968,`(opcional)`),wg()(),jc(969,`p`),lO(970,`Texto que será apresentado na tooltip`),wg()()()(),jc(971,`h4`,36)(972,`code`,5),lO(973,`PoHeaderActionPopoverAction`),wg()(),jc(974,`div`,2)(975,`p`)(976,`em`),lO(977,`Interface`),wg(),lO(978,` que define um template para uma ação.`),wg()(),jc(979,`h4`,10),lO(980,`Propriedades`),wg(),jc(981,`table`,11)(982,`tr`,12)(983,`th`,13),lO(984,`Nome`),wg(),jc(985,`th`,13),lO(986,`Tipo`),wg(),jc(987,`th`,13),lO(988,`Descrição`),wg()(),jc(989,`tr`,14)(990,`td`,15)(991,`div`,16)(992,`span`,17),lO(993,` content`),nu(994,`br`),wg()()(),jc(995,`td`,18)(996,`code`,29),lO(997,`TemplateRef<any>`),wg()(),jc(998,`td`,21)(999,`p`),lO(1e3,`Template que será renderizado dentro do popover.`),wg()()(),jc(1001,`tr`,14)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),lO(1005,` width`),nu(1006,`br`),wg()()(),jc(1007,`td`,18)(1008,`code`,22),lO(1009,`number`),wg()(),jc(1010,`td`,21)(1011,`em`)(1012,`strong`),lO(1013,`(opcional)`),wg()(),jc(1014,`p`),lO(1015,`Largura, em pixels, do template renderizado dentro do popover.`),wg(),jc(1016,`p`),lO(1017,`Valores permitidos: de 240 a 800.`),wg()()()(),jc(1018,`h4`,36)(1019,`code`,5),lO(1020,`PoHeaderActionToolItem`),wg()(),jc(1021,`div`,2)(1022,`p`)(1023,`em`),lO(1024,`Interface`),wg(),lO(1025,` que define uma lista de ações.`),wg()(),jc(1026,`h4`,10),lO(1027,`Propriedades`),wg(),jc(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),lO(1031,`Nome`),wg(),jc(1032,`th`,13),lO(1033,`Tipo`),wg(),jc(1034,`th`,13),lO(1035,`Descrição`),wg()(),jc(1036,`tr`,14)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),lO(1040,` action`),nu(1041,`br`),wg()()(),jc(1042,`td`,18)(1043,`code`,37),lO(1044,`Function`),wg()(),jc(1045,`td`,21)(1046,`p`),lO(1047,`Evento emitido ao clicar em uma ação`),wg(),jc(1048,`p`),lO(1049,`Exemplo: `),jc(1050,`code`),lO(1051,`action: this.myFunction.bind(this)`),wg()()()(),jc(1052,`tr`,14)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),lO(1056,` label`),nu(1057,`br`),wg()()(),jc(1058,`td`,18)(1059,`code`,24),lO(1060,`string`),wg()(),jc(1061,`td`,21)(1062,`p`),lO(1063,`Label da ação`),wg()()()(),jc(1064,`h4`,36)(1065,`code`,5),lO(1066,`PoHeaderActions`),wg()(),jc(1067,`div`,2)(1068,`p`)(1069,`em`),lO(1070,`Interface`),wg(),lO(1071,` que define uma lista de ações no sub-menu.`),wg()(),jc(1072,`h4`,10),lO(1073,`Propriedades`),wg(),jc(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),lO(1077,`Nome`),wg(),jc(1078,`th`,13),lO(1079,`Tipo`),wg(),jc(1080,`th`,13),lO(1081,`Descrição`),wg()(),jc(1082,`tr`,14)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),lO(1086,` action`),nu(1087,`br`),wg()()(),jc(1088,`td`,18)(1089,`code`,37),lO(1090,`Function`),wg()(),jc(1091,`td`,21)(1092,`em`)(1093,`strong`),lO(1094,`(opcional)`),wg()(),jc(1095,`p`),lO(1096,`Evento da ação`),wg(),jc(1097,`p`),lO(1098,` Exemplo: `),jc(1099,`code`),lO(1100,`action: this.myFunction.bind(this)`),wg()()()(),jc(1101,`tr`,14)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),lO(1105,` id`),nu(1106,`br`),wg()()(),jc(1107,`td`,18)(1108,`code`,24),lO(1109,`string`),wg()(),jc(1110,`td`,21)(1111,`em`)(1112,`strong`),lO(1113,`(opcional)`),wg()(),jc(1114,`p`),lO(1115,`Identificador da ação`),wg()()(),jc(1116,`tr`,14)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),lO(1120,` label`),nu(1121,`br`),wg()()(),jc(1122,`td`,18)(1123,`code`,24),lO(1124,`string`),wg()(),jc(1125,`td`,21)(1126,`p`),lO(1127,`Label da ação`),wg()()(),jc(1128,`tr`,14)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),lO(1132,` link`),nu(1133,`br`),wg()()(),jc(1134,`td`,18)(1135,`code`,24),lO(1136,`string`),wg()(),jc(1137,`td`,21)(1138,`em`)(1139,`strong`),lO(1140,`(opcional)`),wg()(),jc(1141,`p`),lO(1142,`link utilizado no redirecionamento das páginas.`),wg()()()(),jc(1143,`h4`,36)(1144,`code`,5),lO(1145,`PoHeaderBrand`),wg()(),jc(1146,`div`,2)(1147,`p`)(1148,`em`),lO(1149,`Interface`),wg(),lO(1150,` que define a seção de brand.`),wg()(),jc(1151,`h4`,10),lO(1152,`Propriedades`),wg(),jc(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),lO(1156,`Nome`),wg(),jc(1157,`th`,13),lO(1158,`Tipo`),wg(),jc(1159,`th`,13),lO(1160,`Descrição`),wg()(),jc(1161,`tr`,14)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),lO(1165,` action`),nu(1166,`br`),wg()()(),jc(1167,`td`,18)(1168,`code`,37),lO(1169,`Function`),wg()(),jc(1170,`td`,21)(1171,`em`)(1172,`strong`),lO(1173,`(opcional)`),wg()(),jc(1174,`p`),lO(1175,`Evento da ação`),wg(),jc(1176,`p`),lO(1177,` Exemplo: `),jc(1178,`code`),lO(1179,`action: this.myFunction.bind(this)`),wg()()()(),jc(1180,`tr`,14)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),lO(1184,` link`),nu(1185,`br`),wg()()(),jc(1186,`td`,18)(1187,`code`,24),lO(1188,`string`),wg()(),jc(1189,`td`,21)(1190,`em`)(1191,`strong`),lO(1192,`(opcional)`),wg()(),jc(1193,`p`),lO(1194,`link utilizado no redirecionamento das páginas.`),wg()()(),jc(1195,`tr`,14)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),lO(1199,` logo`),nu(1200,`br`),wg()()(),jc(1201,`td`,18)(1202,`code`,24),lO(1203,`string`),wg()(),jc(1204,`td`,21)(1205,`em`)(1206,`strong`),lO(1207,`(opcional)`),wg()(),jc(1208,`p`),lO(1209,`Imagem da marca`),wg()()(),jc(1210,`tr`,14)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),lO(1214,` smallLogo`),nu(1215,`br`),wg()()(),jc(1216,`td`,18)(1217,`code`,24),lO(1218,`string`),wg()(),jc(1219,`td`,21)(1220,`em`)(1221,`strong`),lO(1222,`(opcional)`),wg()(),jc(1223,`p`),lO(1224,`Imagem da marca quando a tela é menor que 960px`),wg()()(),jc(1225,`tr`,14)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),lO(1229,` title`),nu(1230,`br`),wg()()(),jc(1231,`td`,18)(1232,`code`,24),lO(1233,`string`),wg()(),jc(1234,`td`,21)(1235,`em`)(1236,`strong`),lO(1237,`(opcional)`),wg()(),jc(1238,`p`),lO(1239,`Título da marca`),wg()()()(),jc(1240,`h4`,36)(1241,`code`,5),lO(1242,`PoHeaderLiterals`),wg()(),jc(1243,`div`,2)(1244,`p`),lO(1245,`Interface para definição das literais usadas no `),jc(1246,`code`),lO(1247,`po-header`),wg(),lO(1248,`.`),wg()(),jc(1249,`h4`,10),lO(1250,`Propriedades`),wg(),jc(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),lO(1254,`Nome`),wg(),jc(1255,`th`,13),lO(1256,`Tipo`),wg(),jc(1257,`th`,13),lO(1258,`Descrição`),wg()(),jc(1259,`tr`,14)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),lO(1263,` headerLinks`),nu(1264,`br`),wg()()(),jc(1265,`td`,18)(1266,`code`,24),lO(1267,`string`),wg()(),jc(1268,`td`,21)(1269,`em`)(1270,`strong`),lO(1271,`(opcional)`),wg()(),jc(1272,`p`),lO(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),wg()()(),jc(1274,`tr`,14)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),lO(1278,` notifications`),nu(1279,`br`),wg()()(),jc(1280,`td`,18)(1281,`code`,24),lO(1282,`string`),wg()(),jc(1283,`td`,21)(1284,`em`)(1285,`strong`),lO(1286,`(opcional)`),wg()(),jc(1287,`p`),lO(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),jc(1289,`code`),lO(1290,`badge`),wg()()()()(),jc(1291,`h4`,36)(1292,`code`,5),lO(1293,`PoHeaderUser`),wg()(),jc(1294,`div`,2)(1295,`p`)(1296,`em`),lO(1297,`Interface`),wg(),lO(1298,` que define a seção de Customer do header.`),wg()(),jc(1299,`h4`,10),lO(1300,`Propriedades`),wg(),jc(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),lO(1304,`Nome`),wg(),jc(1305,`th`,13),lO(1306,`Tipo`),wg(),jc(1307,`th`,13),lO(1308,`Descrição`),wg()(),jc(1309,`tr`,14)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),lO(1313,` action`),nu(1314,`br`),wg()()(),jc(1315,`td`,18)(1316,`code`,37),lO(1317,`Function`),wg()(),jc(1318,`td`,21)(1319,`em`)(1320,`strong`),lO(1321,`(opcional)`),wg()(),jc(1322,`p`),lO(1323,`Evento emitido ao clicar na seção`),wg(),jc(1324,`p`),lO(1325,`Exemplo: `),jc(1326,`code`),lO(1327,`action: this.myFunction.bind(this)`),wg()()()(),jc(1328,`tr`,14)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),lO(1332,` avatar`),nu(1333,`br`),wg()()(),jc(1334,`td`,18)(1335,`code`,24),lO(1336,`string`),wg()(),jc(1337,`td`,21)(1338,`p`),lO(1339,`Logo representando o perfil`),wg()()(),jc(1340,`tr`,14)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),lO(1344,` customerBrand`),nu(1345,`br`),wg()()(),jc(1346,`td`,18)(1347,`code`,24),lO(1348,`string`),wg()(),jc(1349,`td`,21)(1350,`p`),lO(1351,`Imagem da marca`),wg()()(),jc(1352,`tr`,14)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),lO(1356,` items`),nu(1357,`br`),wg()()(),jc(1358,`td`,18)(1359,`code`,38),lO(1360,`Array<PoHeaderActionToolItem>`),wg()(),jc(1361,`td`,21)(1362,`em`)(1363,`strong`),lO(1364,`(opcional)`),wg()(),jc(1365,`p`),lO(1366,`Itens de ações`),wg(),jc(1367,`blockquote`)(1368,`p`),lO(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),wg()()()(),jc(1370,`tr`,14)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),lO(1374,` onClose`),nu(1375,`br`),wg()()(),jc(1376,`td`,18)(1377,`code`,37),lO(1378,`Function`),wg()(),jc(1379,`td`,21)(1380,`em`)(1381,`strong`),lO(1382,`(opcional)`),wg()(),jc(1383,`p`),lO(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),wg(),jc(1385,`p`),lO(1386,`Esse evento é disparado toda vez que o popup (quando há `),jc(1387,`code`),lO(1388,`items`),wg(),lO(1389,`) ou o popover (quando há `),jc(1390,`code`),lO(1391,`popover`),wg(),lO(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),wg(),jc(1393,`p`),lO(1394,`Exemplo: `),jc(1395,`code`),lO(1396,`onClose: this.onCloseNotifications.bind(this)`),wg()()()(),jc(1397,`tr`,14)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),lO(1401,` onOpen`),nu(1402,`br`),wg()()(),jc(1403,`td`,18)(1404,`code`,37),lO(1405,`Function`),wg()(),jc(1406,`td`,21)(1407,`em`)(1408,`strong`),lO(1409,`(opcional)`),wg()(),jc(1410,`p`),lO(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),wg(),jc(1412,`p`),lO(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),jc(1414,`code`),lO(1415,`items`),wg(),lO(1416,`) ou o popover (quando há `),jc(1417,`code`),lO(1418,`popover`),wg(),lO(1419,`) é exibido.`),wg(),jc(1420,`p`),lO(1421,`Exemplo: `),jc(1422,`code`),lO(1423,`onOpen: this.onOpenNotifications.bind(this)`),wg()()()(),jc(1424,`tr`,14)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),lO(1428,` popover`),nu(1429,`br`),wg()()(),jc(1430,`td`,18)(1431,`code`,40),lO(1432,`PoHeaderActionPopoverAction`),wg()(),jc(1433,`td`,21)(1434,`em`)(1435,`strong`),lO(1436,`(opcional)`),wg()(),jc(1437,`p`),lO(1438,`Template que será utilizado na ação`),wg()()(),jc(1439,`tr`,14)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),lO(1443,` status`),nu(1444,`br`),wg()()(),jc(1445,`td`,18)(1446,`code`,41),lO(1447,`'positive' `),wg(),jc(1448,`code`,42),lO(1449,` 'negative' `),wg(),jc(1450,`code`,43),lO(1451,` 'warning' `),wg(),jc(1452,`code`,44),lO(1453,` 'disabled'`),wg()(),jc(1454,`td`,21)(1455,`em`)(1456,`strong`),lO(1457,`(opcional)`),wg()(),jc(1458,`p`),lO(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),wg(),jc(1460,`ul`)(1461,`li`)(1462,`code`),lO(1463,`positive`),wg(),lO(1464,`: Define a cor do `),jc(1465,`code`),lO(1466,`status`),wg(),lO(1467,` com a cor de feedback positivo.`),wg(),jc(1468,`li`)(1469,`code`),lO(1470,`negative`),wg(),lO(1471,`: Define a cor do `),jc(1472,`code`),lO(1473,`status`),wg(),lO(1474,` com a cor de feedback negative.`),wg(),jc(1475,`li`)(1476,`code`),lO(1477,`warning`),wg(),lO(1478,`: Define a cor do `),jc(1479,`code`),lO(1480,`status`),wg(),lO(1481,` com a cor de feedback warning.`),wg(),jc(1482,`li`)(1483,`code`),lO(1484,`disabled`),wg(),lO(1485,`: Define a cor do `),jc(1486,`code`),lO(1487,`status`),wg(),lO(1488,` com a cor de feedback disabled`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function et(r,C){if(r&1){let i=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(i);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-header-basic-view`)(2,`sample-po-header-labs-view`)(3,`sample-po-header-apps-view`),wg()}if(r&2){let i=Fx();UE(`p-active`,i.activeTab===`web`)}}var tt=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(b(ir),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,et,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-header-doc`),wg()()()),l&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ce,Te,we,Pe],encapsulation:2,changeDetection:1})}return r})()}];var ke=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[I1.forChild(tt),I1]})}return r})();var kt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[M,ke]})}return r})();export{kt as DocPoHeaderModule};
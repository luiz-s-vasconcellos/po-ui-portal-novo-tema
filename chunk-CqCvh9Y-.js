import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as Oze,$n as Ak,A as Hoe,Ar as Ig,B as L4,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Nr as Jk,Ri as Zg,Rr as Kb,Sr as Ge$1,T as Gte,Ti as W0,Un as xze,Vi as _u,Xn as $O,Xr as No,Xt as ere,Yi as eF,Zn as $k,a as Ar,b as Fu,bi as Uk,ca as jk,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,fr as Db,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,oo as zO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var xe=(()=>{class r{poNotification;headerBrand={title:`Minha empresa`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};constructor(i){this.poNotification=i}myAction(i){this.poNotification.success(`Action clicked: ${i}`)}static ɵfac=function(l){return new(l||r)(I(Fu))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-brand`,`p-side-menu-only-action`]],template:function(l,o){l&1&&_u(0,`po-header`,0),l&2&&Rb(`p-brand`,o.headerBrand)(`p-side-menu-only-action`,!0)},dependencies:[Oze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r})();var Ne=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Header Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-header-basic/sample-po-header-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-header-basic/sample-po-header-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-header-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ne,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return r})();var Le=()=>({label:`Positive`,value:`positive`});var Be=()=>({label:`Negative`,value:`negative`});var Me=()=>({label:`Warning`,value:`warning`});var De=()=>({label:`Disabled`,value:`disabled`});var Fe=(r,C,i,l)=>[r,C,i,l];var Ve=()=>({label:`Medium`,value:`medium`});var Ie=()=>({label:`Small`,value:`small`});var Ue=(r,C)=>[r,C];var Ce=(()=>{class r$1{poNotification;headerBrandTitle=``;headerBrandLogo=``;headerBrandSmallLogo=``;headerBrand={};menuActionLabel=``;menuActionEvent=``;menuActions=[];actionNewTool={tooltip:``,icon:``,badge:null,action:null,label:``};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:``,customerBrand:``,status:`positive`};actionUser={avatar:``,customerBrand:``,status:`positive`};size=`medium`;constructor(i){this.poNotification=i}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle=``,this.headerBrandLogo=``,this.headerBrandSmallLogo=``}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel=``,this.menuActionEvent=``}addTool(i){let l=i;i.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(l.action=this.showAction.bind(this,`Tool Actions!`)),this.actionTools=[...this.actionTools,i],this.actionNewTool={}}addUser(){this.actionUser=r({},this.newActionUser),this.newActionUser={avatar:``,customerBrand:``,status:`positive`}}showAction(i){this.poNotification.success(`Action clicked: ${i}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:``,customerBrand:``,status:`positive`},this.newActionUser={avatar:``,customerBrand:``,status:`positive`},this.size=`medium`}static ɵfac=function(l){return new(l||r$1)(I(Fu))};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-header-labs`]],standalone:!1,decls:40,vars:38,consts:[[`formAction`,`ngForm`],[3,`p-side-menu-only-action`,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-size`],[1,`po-row`,`po-mt-4`],[`p-clean`,``,`p-label`,`Título da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Logo da marca - small`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-mt-1`],[`p-label`,`Add Brand`,1,`po-lg-6`,`po-md-6`,3,`p-click`],[1,`po-row`,`po-mt-2`],[1,`po-lg-12`,`po-mb-2`],[`p-clean`,``,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Action`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`badge`,`p-clean`,``,`p-label`,`Badge`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`switch`,`name`,`action`,`p-label`,`Action`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add settings`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`brand`,`p-clean`,``,`p-label`,`Logo Brand`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`avatar`,`p-clean`,``,`p-label`,`Avatar`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`radioGroupBasic`,`p-label`,`Status`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Reset`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let m=ZO();_u(0,`po-header`,1),Jc(1,`div`,2)(2,`po-input`,3),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.headerBrandTitle,d)||(o.headerBrandTitle=d),H_(d)}),Zg(),Jc(3,`po-input`,4),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.headerBrandLogo,d)||(o.headerBrandLogo=d),H_(d)}),Zg(),Jc(4,`po-input`,5),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.headerBrandSmallLogo,d)||(o.headerBrandSmallLogo=d),H_(d)}),Zg(),Jc(5,`div`,6)(6,`po-button`,7),vt(`p-click`,function(){return o.addBrand()}),Zg()()(),_u(7,`hr`),Jc(8,`div`,8)(9,`h3`,9),Tk(10,`Ações dos itens de menu`),Zg(),Jc(11,`po-input`,10),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.menuActionEvent,d)||(o.menuActionEvent=d),H_(d)}),Zg(),Jc(12,`po-input`,11),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.menuActionLabel,d)||(o.menuActionLabel=d),H_(d)}),Zg(),Jc(13,`po-button`,12),vt(`p-click`,function(){return o.addAction()}),Zg()(),_u(14,`hr`),Jc(15,`h3`,9),Tk(16,`Ações das configurações`),Zg(),Jc(17,`form`,8,0)(19,`po-input`,13),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.actionNewTool.icon,d)||(o.actionNewTool.icon=d),H_(d)}),Zg(),Jc(20,`po-input`,14),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.actionNewTool.tooltip,d)||(o.actionNewTool.tooltip=d),H_(d)}),Zg(),Jc(21,`po-number`,15),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.actionNewTool.badge,d)||(o.actionNewTool.badge=d),H_(d)}),Zg(),Jc(22,`po-switch`,16),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.actionNewToolEvent,d)||(o.actionNewToolEvent=d),H_(d)}),Zg(),Jc(23,`po-button`,17),vt(`p-click`,function(){return o.addTool(o.actionNewTool)}),Zg()(),_u(24,`hr`),Jc(25,`h3`,9),Tk(26,`Ações do Usuário`),Zg(),Jc(27,`form`,8,0)(29,`po-input`,18),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.newActionUser.customerBrand,d)||(o.newActionUser.customerBrand=d),H_(d)}),Zg(),Jc(30,`po-input`,19),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.newActionUser.avatar,d)||(o.newActionUser.avatar=d),H_(d)}),Zg(),Jc(31,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.newActionUser.status,d)||(o.newActionUser.status=d),H_(d)}),Zg(),Jc(32,`po-button`,17),vt(`p-click`,function(){return o.addUser()}),Zg(),_u(33,`hr`),Jc(34,`h3`,9),Tk(35,`Variações de tamanho`),Zg(),Jc(36,`div`,8)(37,`po-radio-group`,21),W0(),Kb(`ngModelChange`,function(d){return U_(m),Ak(o.size,d)||(o.size=d),H_(d)}),Zg()(),_u(38,`hr`),Jc(39,`po-button`,22),vt(`p-click`,function(){return o.reset()}),Zg()()}l&2&&(Rb(`p-side-menu-only-action`,!0)(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuActions)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.actionUser)(`p-size`,o.size),Ig(2),Yb(`ngModel`,o.headerBrandTitle),Y0(),Ig(),Yb(`ngModel`,o.headerBrandLogo),Y0(),Ig(),Yb(`ngModel`,o.headerBrandSmallLogo),Y0(),Ig(7),Yb(`ngModel`,o.menuActionEvent),Y0(),Ig(),Yb(`ngModel`,o.menuActionLabel),Y0(),Ig(),Rb(`p-disabled`,!o.menuActionLabel),Ig(6),Yb(`ngModel`,o.actionNewTool.icon),Y0(),Ig(),Yb(`ngModel`,o.actionNewTool.tooltip),Y0(),Ig(),Yb(`ngModel`,o.actionNewTool.badge),Y0(),Ig(),Yb(`ngModel`,o.actionNewToolEvent),Y0(),Ig(),Rb(`p-disabled`,o.actionTools.length>2),Ig(6),Yb(`ngModel`,o.newActionUser.customerBrand),Y0(),Ig(),Yb(`ngModel`,o.newActionUser.avatar),Y0(),Ig(),Yb(`ngModel`,o.newActionUser.status),Rb(`p-options`,$k(28,Fe,jk(24,Le),jk(25,Be),jk(26,Me),jk(27,De))),Y0(),Ig(),Rb(`p-disabled`,!o.newActionUser.avatar||o.newActionUser.customerBrand),Ig(5),Yb(`ngModel`,o.size),Rb(`p-options`,Uk(35,Ue,jk(33,Ve),jk(34,Ie))),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,U4,Hoe,Gte,L4,Oze],styles:[`po-header[_ngcontent-%COMP%]{--%NS%nav-position: flex}`],changeDetection:1})}return r$1})();var Oe=r=>({"docs-sample-code-tabs":r});var ye=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Header Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-header-labs/sample-po-header-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-header
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-header-labs/sample-po-header-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-header-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Oe,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return r})();var We=[`meuTemplate`];var je=[`notificationTemplate`];var Re=(r,C)=>C.icon;function Qe(r,C){if(r&1&&_u(0,`po-button`,5),r&2){let i=C.$implicit;Rb(`p-icon`,i.icon)}}function Ge(r,C){if(r&1&&(Jc(0,`div`,3)(1,`p`),Tk(2,`Meus aplicativos`),Zg(),_u(3,`br`),Jc(4,`div`,4),$O(5,Qe,1,1,`po-button`,5,Re),Zg()()),r&2){let i=nk();Ig(5),zO(i.systemApps)}}function Je(r,C){if(r&1){let i=ZO();Jc(0,`div`,6)(1,`div`,7)(2,`span`,8),Tk(3,`Notificações`),Zg()(),Jc(4,`div`,9)(5,`po-button`,10),vt(`p-click`,function(){U_(i);let o=nk();return H_(o.markAllAsRead())}),Zg()()(),_u(6,`po-divider`),Jc(7,`po-list-view`,11),vt(`p-item-click`,function(o){U_(i);let m=nk();return H_(m.readNotification(o))}),Zg(),_u(8,`po-divider`),Jc(9,`div`,12)(10,`div`,13)(11,`po-button`,14),vt(`p-click`,function(){U_(i);let o=nk();return H_(o.resetNotifications())}),Zg(),Jc(12,`po-button`,15),vt(`p-click`,function(){U_(i);let o=nk();return H_(o.markAllAsUnread())}),Zg()()()}if(r&2){let i=nk();Ig(5),Rb(`p-disabled`,!i.hasNotifications),Ig(2),Rb(`p-field-properties`,i.fieldProperties)(`p-items`,i.notificationList)(`p-select`,!1)(`p-literals`,i.notificationLiterals)}}var Te=(()=>{class r$2{poNotification;cd;meuTemplate;notificationTemplate;fieldProperties={title:`title`,subtitle:`content`,avatar:`avatar`,highlighted:`checked`,tag:{value:`tag`,type:`tagType`}};initialNotifications=[{title:`Relatório de faturamento`,content:`O arquivo solicitado já está disponível para download`,tag:`Concluído`,tagType:`success`,avatar:{progress:100,status:`success`,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Folha de pagamento`,content:`O cálculo da folha de pagamento está em andamento`,tag:`Em andamento`,tagType:`info`,avatar:{progress:80,showPercentage:!0,size:`large`,radius:35},checked:!0},{title:`Nova versão TOTVS 2.1`,content:`Atualize seu sistema para a versão TOTVS 2.1`,tag:`Novidade`,tagType:`neutral`,avatar:{icon:`an an-arrow-circle-up`,color:`#ffffff`,backgroundColor:`#000000`},checked:!0},{title:`6 novos colaboradores`,content:`Você tem 6 novos colaboradores cadastrados`,tag:`Info`,tagType:`info`,avatar:{icon:`an an-user`,color:`#753399`,backgroundColor:`#f0e6f5`},checked:!0},{title:`Novo usuário`,content:`Novo usuário adicionado ao grupo Financeiro`,tag:`Info`,tagType:`info`,avatar:`https://i.pravatar.cc/150?img=12`,checked:!0}];allNotifications=this.initialNotifications.map(i=>r({},i));notificationList=this.allNotifications.filter(i=>i.checked);get hasNotifications(){return this.notificationList.some(i=>i.checked)}notificationLiterals={noData:`Você está atualizado! Você não tem novas notificações no momento. Assim que surgirem novidades ou alertas, eles aparecerão aqui.`};listItem=[{label:`Ação 1`,action:this.myAction.bind(this,`Ação 1`)},{label:`Ação 2`,action:this.myAction.bind(this,`Ação 2`)},{label:`Ação 3`,action:this.myAction.bind(this,`Ação 3`)}];headerBrand={title:`PO UI`,logo:`../../../assets/po-logos/po_color.png`,action:this.myAction.bind(this,`Logo ação`)};menuItems=[{label:`Item 1`,action:this.myAction.bind(this,`Item 1`)},{label:`Item 2`,action:this.myAction.bind(this,`Item 2`)},{label:`Item 3`,action:this.myAction.bind(this,`Item 3`)}];actionTools=[{label:`Configurações`,icon:`an an-gear-six`,tooltip:`Configurações do sistema`,action:this.myAction.bind(this,`Configuração`)},{label:`Aplicativos`,icon:`an an-dots-nine`,tooltip:`Aplicativos do sistema`,popover:{content:this.meuTemplate},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)},{label:`Notificações`,icon:`an an-bell`,tooltip:`Notificações do usuário`,badge:5,popover:{content:this.notificationTemplate,width:480},onOpen:i=>this.onOpenTool(i),onClose:i=>this.onCloseTool(i)}];headerUser={avatar:`../../../assets/graphics/avatar1.png`,customerBrand:`../../../assets/po-logos/po_black.png`,status:`positive`,items:[{label:`Meu perfil`,action:this.myAction.bind(this,`Meu perfil`)},{label:`Configurações`,action:this.myAction.bind(this,`Configurações`)},{label:`Sair`,action:this.myAction.bind(this,`Sair`)}],onOpen:()=>this.onOpenUser(),onClose:()=>this.onCloseUser()};systemApps=[{icon:`an an-reddit-logo`,action:this.myAction.bind(this,`Aplicativo 1`)},{icon:`an an-twitter-logo`,action:this.myAction.bind(this,`Aplicativo 2`)},{icon:`an an-twitch-logo`,action:this.myAction.bind(this,`Aplicativo 3`)},{icon:`an an-facebook-logo`,action:this.myAction.bind(this,`Aplicativo 4`)},{icon:`an an-meta-logo`,action:this.myAction.bind(this,`Aplicativo 5`)},{icon:`an an-amazon-logo`,action:this.myAction.bind(this,`Aplicativo 6`)}];constructor(i,l){this.poNotification=i,this.cd=l}ngAfterViewInit(){this.actionTools=this.actionTools.map(i=>i.label===`Aplicativos`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.meuTemplate})}):i.label===`Notificações`&&i.popover?s(r({},i),{popover:s(r({},i.popover),{content:this.notificationTemplate})}):i),this.cd.detectChanges()}myAction(i){this.poNotification.success({message:`Action clicked: ${i}`,orientation:Ar.Bottom})}markAllAsRead(){this.allNotifications.forEach(i=>i.checked=!1),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(void 0),this.poNotification.success({message:`Todas as notificações foram marcadas como lidas.`,orientation:Ar.Top})}readNotification(i){let l=this.allNotifications.find(o=>o.title===i?.title);l&&(l.checked=!1),setTimeout(()=>{this.notificationList=this.allNotifications.filter(m=>m.checked);let o=this.notificationList.length;this.setNotificationBadge(o>0?o:void 0)}),this.poNotification.information({message:`Notifica\xE7\xE3o lida: ${i?.title}`,orientation:Ar.Top})}resetNotifications(){this.notificationList=this.allNotifications.map(i=>r({},i))}markAllAsUnread(){this.allNotifications.forEach(i=>i.checked=!0),this.notificationList=this.allNotifications.filter(i=>i.checked),this.setNotificationBadge(this.allNotifications.length),this.poNotification.information({message:`Todas as notificações foram marcadas como não lidas.`,orientation:Ar.Top})}setNotificationBadge(i){setTimeout(()=>{this.actionTools=this.actionTools.map(l=>l.label===`Notificações`?s(r({},l),{badge:i}):l),this.cd.detectChanges()})}onOpenTool(i){this.poNotification.information({message:`Opened: ${i} (p-actions-tools)`,orientation:Ar.Top})}onCloseTool(i){this.poNotification.warning({message:`Closed: ${i} (p-actions-tools)`,orientation:Ar.Top})}onOpenUser(){this.poNotification.information({message:`Opened: User menu (p-header-user)`,orientation:Ar.Top})}onCloseUser(){this.poNotification.warning({message:`Closed: User menu (p-header-user)`,orientation:Ar.Top})}static ɵfac=function(l){return new(l||r$2)(I(Fu),I(Ge$1))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-header-apps`]],viewQuery:function(l,o){if(l&1&&Cu(We,5)(je,5),l&2){let m;No(m=xo())&&(o.meuTemplate=m.first),No(m=xo())&&(o.notificationTemplate=m.first)}},standalone:!1,decls:5,vars:5,consts:[[`meuTemplate`,``],[`notificationTemplate`,``],[1,`example-notification-header`,3,`p-brand`,`p-menu-items`,`p-actions-tools`,`p-header-user`,`p-side-menu-only-action`],[1,`custom-template`],[1,`app-wrapper`],[3,`p-icon`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-2`,`po-pb-0`],[1,`po-md-6`],[1,`po-font-subtitle`],[1,`po-md-6`,`po-text-right`],[`p-icon`,`an an-checks`,`p-label`,`Marcar todas como lidas`,`p-kind`,`tertiary`,3,`p-click`,`p-disabled`],[`p-tag-position`,`top`,`p-avatar-size`,`md`,3,`p-item-click`,`p-field-properties`,`p-items`,`p-select`,`p-literals`],[1,`po-row`,`po-pr-1`,`po-pl-1`,`po-pt-0`,`po-pb-2`],[1,`po-md-12`,`po-text-right`],[`p-label`,`Ver todas notificações`,`p-kind`,`primary`,1,`po-mr-1`,3,`p-click`],[`p-icon`,`an an-arrow-counter-clockwise`,`p-kind`,`tertiary`,`p-aria-label`,`Marcar todas como não lidas`,3,`p-click`]],template:function(l,o){l&1&&(_u(0,`po-header`,2),Db(1,Ge,7,0,`ng-template`,null,0,Jk)(3,Je,13,5,`ng-template`,null,1,Jk)),l&2&&Rb(`p-brand`,o.headerBrand)(`p-menu-items`,o.menuItems)(`p-actions-tools`,o.actionTools)(`p-header-user`,o.headerUser)(`p-side-menu-only-action`,!0)},dependencies:[oi,Lf,xze,Oze],styles:[`sample-po-header-apps{display:block;min-height:768px}sample-po-header-apps .app-wrapper{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}sample-po-header-apps .custom-template{padding:.5rem}sample-po-header-apps .custom-template p{text-align:center;font-weight:700;color:var(--%NS%color-neutral-dark-90)}sample-po-header-apps po-header{--%NS%nav-position: flex}po-header.example-notification-header po-list-view{--%NS%po-density-gap-spacing: 0px;--%NS%po-density-content-padding: 0px;--%NS%list-item-shadow: none;--%NS%list-item-border-radius: 0px;--%NS%list-item-border-color: transparent}po-header.example-notification-header po-divider{--%NS%po-density-gap-spacing: 0}
`],encapsulation:2,changeDetection:1})}return r$2})();var Xe=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-apps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Header Apps`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-header-apps/sample-po-header-apps.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-header
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-header-apps/sample-po-header-apps.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import {
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-header-apps`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Xe,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Te],encapsulation:2,changeDetection:1})}return r})();var we=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-header-doc`]],standalone:!1,decls:1489,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionTool>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderBrand`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<any>`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderUser`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMenuItem>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActions>`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`Array<PoHeaderActionToolItem>`],[`pan`,``,1,`docs-api-property-type`,`(label?:`,`string)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`PoHeaderActionPopoverAction`],[`pan`,``,1,`docs-api-property-type`,`'positive'`],[`pan`,``,1,`docs-api-property-type`,`'negative'`],[`pan`,``,1,`docs-api-property-type`,`'warning'`],[`pan`,``,1,`docs-api-property-type`,`'disabled'`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoHeaderModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-header`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoHeaderComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O componente `),Jc(18,`code`),Tk(19,`po-header`),Zg(),Tk(20,` é um cabeçalho fixo que permite apresentar itens com ações, divididos em `),Jc(21,`code`),Tk(22,`p-brand`),Zg(),Tk(23,`, `),Jc(24,`code`),Tk(25,`p-menu-items`),Zg(),Tk(26,`, `),Jc(27,`code`),Tk(28,`p-actions-tools`),Zg(),Tk(29,` e `),Jc(30,`code`),Tk(31,`p-header-user`),Zg(),Tk(32,`.`),Zg(),Jc(33,`ul`)(34,`li`)(35,`code`),Tk(36,`p-brand`),Zg(),Tk(37,`: Possibilita a inclusão de uma imagem e o titulo do header.`),Zg(),Jc(38,`li`)(39,`code`),Tk(40,`p-menu-items`),Zg(),Tk(41,`: Possibilita a inclusão de uma lista de itens com ações ou links.`),Zg(),Jc(42,`li`)(43,`code`),Tk(44,`p-actions-tools`),Zg(),Tk(45,`: Possibilita a inclusão de até 3 botões com ações.`),Zg(),Jc(46,`li`)(47,`code`),Tk(48,`p-header-user`),Zg(),Tk(49,`: Possibilita a inclusão de uma imagem representando a marca e avatar.`),Zg()(),Jc(50,`p`),Tk(51,`O componente `),Jc(52,`code`),Tk(53,`po-header`),Zg(),Tk(54,` pode ser usado de duas formas:`),Zg(),Jc(55,`p`),Tk(56,`Com `),Jc(57,`code`),Tk(58,`po-menu`),Zg(),Tk(59,` definido pelo usuário:`),Zg(),Jc(60,`pre`)(61,`code`),Tk(62,`...
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
`),Zg()(),Jc(63,`p`),Tk(64,`Passando os itens diretamente para o `),Jc(65,`code`),Tk(66,`po-header`),Zg(),Tk(67,` pela propriedade `),Jc(68,`code`),Tk(69,`p-menus`),Zg(),Tk(70,`:`),Zg(),Jc(71,`pre`)(72,`code`),Tk(73,`...
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
`),Zg()(),Jc(74,`h4`),Tk(75,`Tokens customizáveis`),Zg(),Jc(76,`p`),Tk(77,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(78,`blockquote`)(79,`p`),Tk(80,`Para maiores informações, acesse o guia `),Jc(81,`a`,6),Tk(82,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(83,`.`),Zg()(),Jc(84,`table`)(85,`thead`)(86,`tr`)(87,`th`),Tk(88,`Propriedade`),Zg(),Jc(89,`th`),Tk(90,`Descrição`),Zg(),Jc(91,`th`),Tk(92,`Valor Padrão`),Zg()()(),Jc(93,`tbody`)(94,`tr`)(95,`td`)(96,`code`),Tk(97,`--font-family`),Zg()(),Jc(98,`td`),Tk(99,`Família tipográfica usada`),Zg(),Jc(100,`td`)(101,`code`),Tk(102,`var(--font-family-theme)`),Zg()()(),Jc(103,`tr`)(104,`td`)(105,`code`),Tk(106,`--font-weight`),Zg()(),Jc(107,`td`),Tk(108,`Peso da fonte`),Zg(),Jc(109,`td`)(110,`code`),Tk(111,`var(--font-weight-bold)`),Zg()()(),Jc(112,`tr`)(113,`td`)(114,`code`),Tk(115,`--text-color`),Zg()(),Jc(116,`td`),Tk(117,`Cor do texto`),Zg(),Jc(118,`td`)(119,`code`),Tk(120,`var(--color-neutral-dark-70)`),Zg()()(),Jc(121,`tr`)(122,`td`)(123,`code`),Tk(124,`--outline-color-focused`),Zg()(),Jc(125,`td`),Tk(126,`Cor do outline dos itens de sub-menu e customer`),Zg(),Jc(127,`td`)(128,`code`),Tk(129,`var(--color-neutral-dark-95)`),Zg()()(),Jc(130,`tr`)(131,`td`)(132,`code`),Tk(133,`--object-fit-brand`),Zg()(),Jc(134,`td`),Tk(135,`Valor do object-fit da imagem do logo`),Zg(),Jc(136,`td`)(137,`code`),Tk(138,`contain`),Zg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Tk(142,`--object-fit-customer`),Zg()(),Jc(143,`td`),Tk(144,`Valor do object-fit da imagem do logo na seção customer`),Zg(),Jc(145,`td`)(146,`code`),Tk(147,`contain`),Zg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Tk(151,`--object-fit-customer-user`),Zg()(),Jc(152,`td`),Tk(153,`Valor do object-fit da imagem do avatar`),Zg(),Jc(154,`td`)(155,`code`),Tk(156,`cover`),Zg()()(),Jc(157,`tr`)(158,`td`)(159,`strong`),Tk(160,`Header`),Zg()(),_u(161,`td`)(162,`td`),Zg(),Jc(163,`tr`)(164,`td`)(165,`code`),Tk(166,`--background-color`),Zg()(),Jc(167,`td`),Tk(168,`Cor de background do header`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`var(--color-neutral-light-05)`),Zg()()(),Jc(172,`tr`)(173,`td`)(174,`code`),Tk(175,`--border-radius-bottom-left`),Zg()(),Jc(176,`td`),Tk(177,`Valor do radius do lado esquerdo do header`),Zg(),Jc(178,`td`)(179,`code`),Tk(180,`var(--border-radius-md)`),Zg()()(),Jc(181,`tr`)(182,`td`)(183,`code`),Tk(184,`--border-radius-bottom-right`),Zg()(),Jc(185,`td`),Tk(186,`Valor do radius do lado direito do header`),Zg(),Jc(187,`td`)(188,`code`),Tk(189,`var(--border-radius-md)`),Zg()()(),Jc(190,`tr`)(191,`td`)(192,`code`),Tk(193,`--base shadow`),Zg()(),Jc(194,`td`),Tk(195,`Cor da sombra do header`),Zg(),Jc(196,`td`)(197,`code`),Tk(198,`0 1px 8px rgba(0, 0, 0, 0.1)`),Zg()()(),Jc(199,`tr`)(200,`td`)(201,`code`),Tk(202,`--stroke-color`),Zg()(),Jc(203,`td`),Tk(204,`Cor da borda inferior do header`),Zg(),Jc(205,`td`)(206,`code`),Tk(207,`var(--color-brand-01-base)`),Zg()()(),Jc(208,`tr`)(209,`td`)(210,`strong`),Tk(211,`Sub-menu`),Zg()(),_u(212,`td`)(213,`td`),Zg(),Jc(214,`tr`)(215,`td`)(216,`code`),Tk(217,`--border-radius`),Zg()(),Jc(218,`td`),Tk(219,`Valor do radius dos itens do sub-menu`),Zg(),Jc(220,`td`)(221,`code`),Tk(222,`var(--border-radius-md);`),Zg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Tk(226,`--text-color-submenu`),Zg()(),Jc(227,`td`),Tk(228,`Cor do texto dos itens do sub-menu`),Zg(),Jc(229,`td`)(230,`code`),Tk(231,`var(--color-brand-01-base)`),Zg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Tk(235,`--icon-color`),Zg()(),Jc(236,`td`),Tk(237,`Cor do ícone do sub-menu com itens`),Zg(),Jc(238,`td`)(239,`code`),Tk(240,`var(--color-brand-01-base)`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Tk(244,`--border-color`),Zg()(),Jc(245,`td`),Tk(246,`Cor da borda`),Zg(),Jc(247,`td`)(248,`code`),Tk(249,`var(--color-transparent)`),Zg()()(),Jc(250,`tr`)(251,`td`)(252,`code`),Tk(253,`--shadow`),Zg()(),Jc(254,`td`),Tk(255,`Contém o valor da sombra do elemento`),Zg(),Jc(256,`td`)(257,`code`),Tk(258,`var(--shadow-none)`),Zg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Tk(262,`--font-family-submenu`),Zg()(),Jc(263,`td`),Tk(264,`Fonte do texto dos itens de sub-menu`),Zg(),Jc(265,`td`)(266,`code`),Tk(267,`var(--font-family-theme)`),Zg()()(),Jc(268,`tr`)(269,`td`)(270,`code`),Tk(271,`--font-weight-submenu`),Zg()(),Jc(272,`td`),Tk(273,`Peso da fonte do texto dos itens de sub-menu`),Zg(),Jc(274,`td`)(275,`code`),Tk(276,`var(--font-weight-bold)`),Zg()()(),Jc(277,`tr`)(278,`td`)(279,`strong`),Tk(280,`Sub-menu - Hover`),Zg()(),_u(281,`td`)(282,`td`),Zg(),Jc(283,`tr`)(284,`td`)(285,`code`),Tk(286,`--background-hover`),Zg()(),Jc(287,`td`),Tk(288,`Cor de background dos itens do sub-menu no estado hover`),Zg(),Jc(289,`td`)(290,`code`),Tk(291,`var(--color-brand-01-lighter)`),Zg()()(),Jc(292,`tr`)(293,`td`)(294,`code`),Tk(295,`--icon-color-hover`),Zg()(),Jc(296,`td`),Tk(297,`Cor do ícone dos itens de sub-menu no estado hover`),Zg(),Jc(298,`td`)(299,`code`),Tk(300,`var(--color-brand-01-darkest)`),Zg()()(),Jc(301,`tr`)(302,`td`)(303,`code`),Tk(304,`--text-color-hover`),Zg()(),Jc(305,`td`),Tk(306,`Cor do texto dos itens de sub-menu no estado hover`),Zg(),Jc(307,`td`)(308,`code`),Tk(309,`var(--color-brand-01-darkest)`),Zg()()(),Jc(310,`tr`)(311,`td`)(312,`strong`),Tk(313,`Sub-menu - pressed`),Zg()(),_u(314,`td`)(315,`td`),Zg(),Jc(316,`tr`)(317,`td`)(318,`code`),Tk(319,`--background-pressed`),Zg()(),Jc(320,`td`),Tk(321,`Cor de background dos itens do sub-menu no estado pressed`),Zg(),Jc(322,`td`)(323,`code`),Tk(324,`var(--color-brand-01-light)`),Zg()()(),Jc(325,`tr`)(326,`td`)(327,`code`),Tk(328,`--icon-color-pressed`),Zg()(),Jc(329,`td`),Tk(330,`Cor do ícone dos itens de sub-menu no estado pressed`),Zg(),Jc(331,`td`)(332,`code`),Tk(333,`var(--color-brand-01-darkest)`),Zg()()(),Jc(334,`tr`)(335,`td`)(336,`code`),Tk(337,`--text-color-pressed`),Zg()(),Jc(338,`td`),Tk(339,`Cor do texto dos itens de sub-menu no estado pressed`),Zg(),Jc(340,`td`)(341,`code`),Tk(342,`var(--color-brand-01-darkest)`),Zg()()(),Jc(343,`tr`)(344,`td`)(345,`strong`),Tk(346,`Sub-menu - selected`),Zg()(),_u(347,`td`)(348,`td`),Zg(),Jc(349,`tr`)(350,`td`)(351,`code`),Tk(352,`--background-selected`),Zg()(),Jc(353,`td`),Tk(354,`Cor de background dos itens do sub-menu no estado selected`),Zg(),Jc(355,`td`)(356,`code`),Tk(357,`var(--color-brand-01-light)`),Zg()()(),Jc(358,`tr`)(359,`td`)(360,`code`),Tk(361,`--icon-color-selected`),Zg()(),Jc(362,`td`),Tk(363,`Cor do ícone dos itens de sub-menu no estado selected`),Zg(),Jc(364,`td`)(365,`code`),Tk(366,`var(--color-neutral-dark-95)`),Zg()()(),Jc(367,`tr`)(368,`td`)(369,`code`),Tk(370,`--text-color-selected`),Zg()(),Jc(371,`td`),Tk(372,`Cor do texto dos itens de sub-menu no estado selected`),Zg(),Jc(373,`td`)(374,`code`),Tk(375,`var(--color-brand-01-darkest)`),Zg()()(),Jc(376,`tr`)(377,`td`)(378,`strong`),Tk(379,`Customer`),Zg()(),_u(380,`td`)(381,`td`),Zg(),Jc(382,`tr`)(383,`td`)(384,`code`),Tk(385,`--background-color-customer`),Zg()(),Jc(386,`td`),Tk(387,`Cor do background da seção customer`),Zg(),Jc(388,`td`)(389,`code`),Tk(390,`var(--color-neutral-light-00)`),Zg()()(),Jc(391,`tr`)(392,`td`)(393,`code`),Tk(394,`--border-color`),Zg()(),Jc(395,`td`),Tk(396,`Cor da borda da seção customer`),Zg(),Jc(397,`td`)(398,`code`),Tk(399,`var(--color-neutral-light-10)`),Zg()()(),Jc(400,`tr`)(401,`td`)(402,`code`),Tk(403,`--border-style`),Zg()(),Jc(404,`td`),Tk(405,`Estilo da borda da seção customer`),Zg(),Jc(406,`td`)(407,`code`),Tk(408,`solid`),Zg()()(),Jc(409,`tr`)(410,`td`)(411,`code`),Tk(412,`--border-width`),Zg()(),Jc(413,`td`),Tk(414,`Largura da borda da seção customer`),Zg(),Jc(415,`td`)(416,`code`),Tk(417,`var(--border-width-sm)`),Zg()()(),Jc(418,`tr`)(419,`td`)(420,`strong`),Tk(421,`Customer - hover`),Zg()(),_u(422,`td`)(423,`td`),Zg(),Jc(424,`tr`)(425,`td`)(426,`code`),Tk(427,`--background-color-customer-hover`),Zg()(),Jc(428,`td`),Tk(429,`Cor do background da seção customer no estado hover`),Zg(),Jc(430,`td`)(431,`code`),Tk(432,`var(--color-brand-01-lighter)`),Zg()()(),Jc(433,`tr`)(434,`td`)(435,`strong`),Tk(436,`Customer - pressed`),Zg()(),_u(437,`td`)(438,`td`),Zg(),Jc(439,`tr`)(440,`td`)(441,`code`),Tk(442,`--background-color-customer-pressed`),Zg()(),Jc(443,`td`),Tk(444,`Cor do background da seção customer no estado pressed`),Zg(),Jc(445,`td`)(446,`code`),Tk(447,`var(--color-brand-01-light)`),Zg()()(),Jc(448,`tr`)(449,`td`)(450,`code`),Tk(451,`--border-width-pressed`),Zg()(),Jc(452,`td`),Tk(453,`Largura da borda da seção customer no estado pressed`),Zg(),Jc(454,`td`)(455,`code`),Tk(456,`var(--border-width-md)`),Zg()()()()()(),Jc(457,`div`,7)(458,`h4`,8),Tk(459,`Seletor`),Zg(),Jc(460,`pre`,9),Tk(461,`<po-header
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
`),Zg()(),Jc(462,`h4`,10),Tk(463,`Propriedades`),Zg(),Jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Tk(467,`Nome`),Zg(),Jc(468,`th`,13),Tk(469,`Tipo`),Zg(),Jc(470,`th`,13),Tk(471,`Padrão`),Zg(),Jc(472,`th`,13),Tk(473,`Descrição`),Zg()(),Jc(474,`tr`,14)(475,`td`,15)(476,`div`,16)(477,`span`,17),Tk(478,` p-actions-tools`),_u(479,`br`),Zg()()(),Jc(480,`td`,18)(481,`code`,19),Tk(482,`Array<PoHeaderActionTool>`),Zg()(),Jc(483,`td`,20),Tk(484,`-`),Zg(),Jc(485,`td`,21)(486,`em`)(487,`strong`),Tk(488,`(opcional)`),Zg()(),Jc(489,`p`),Tk(490,`Propriedade para configurar a seção de tools do `),Jc(491,`code`),Tk(492,`po-header`),Zg()(),Jc(493,`blockquote`)(494,`p`),Tk(495,`Máximo de 3 itens, o componente irá ignorar os itens caso seja mandado mais itens que o suportado.`),Zg()()()(),Jc(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),Tk(500,` p-amount-more`),_u(501,`br`),Zg()()(),Jc(502,`td`,18)(503,`code`,22),Tk(504,`number`),Zg()(),Jc(505,`td`,20),Tk(506,`-`),Zg(),Jc(507,`td`,21)(508,`em`)(509,`strong`),Tk(510,`(opcional)`),Zg()(),Jc(511,`p`),Tk(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),Zg(),Jc(513,`blockquote`)(514,`p`),Tk(515,`Ao utilizar essa propriedade o `),Jc(516,`code`),Tk(517,`po-header`),Zg(),Tk(518,` não irá realizar o calculo automatíco de itens.`),Zg()()()(),Jc(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),Tk(523,` p-brand`),_u(524,`br`),Zg()()(),Jc(525,`td`,18)(526,`code`,23),Tk(527,`PoHeaderBrand `),Zg(),Jc(528,`code`,24),Tk(529,` string`),Zg()(),Jc(530,`td`,20),Tk(531,`-`),Zg(),Jc(532,`td`,21)(533,`em`)(534,`strong`),Tk(535,`(opcional)`),Zg()(),Jc(536,`p`),Tk(537,`Propriedade para configurar a seção de brand do `),Jc(538,`code`),Tk(539,`po-header`),Zg()(),Jc(540,`p`),Tk(541,`Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada.`),Zg()()(),Jc(542,`tr`,14)(543,`td`,15)(544,`div`,25)(545,`span`,26),Tk(546,` (p-colapsed-menu)`),_u(547,`br`),Zg()()(),Jc(548,`td`,18)(549,`code`,27),Tk(550,`EventEmitter`),Zg()(),Jc(551,`td`,20),Tk(552,`-`),Zg(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Tk(556,`(opcional)`),Zg()(),Jc(557,`p`),Tk(558,`Evento emitido ao clicar no botão para colapsar ou expandir menu.`),Zg()()(),Jc(559,`tr`,14)(560,`td`,15)(561,`div`,16)(562,`span`,17),Tk(563,` p-filter-menu`),_u(564,`br`),Zg()()(),Jc(565,`td`,18)(566,`code`,28),Tk(567,`boolean`),Zg()(),Jc(568,`td`,20),Tk(569,`-`),Zg(),Jc(570,`td`,21)(571,`em`)(572,`strong`),Tk(573,`(opcional)`),Zg()(),Jc(574,`p`),Tk(575,`Habilita campo para filtrar itens no menu`),Zg()()(),Jc(576,`tr`,14)(577,`td`,15)(578,`div`,16)(579,`span`,17),Tk(580,` p-header-template`),_u(581,`br`),Zg()()(),Jc(582,`td`,18)(583,`code`,29),Tk(584,`TemplateRef<any>`),Zg()(),Jc(585,`td`,20),Tk(586,`-`),Zg(),Jc(587,`td`,21)(588,`em`)(589,`strong`),Tk(590,`(opcional)`),Zg()(),Jc(591,`p`),Tk(592,`Template customiado que será renderizado após os itens definidos na propriedade `),Jc(593,`code`),Tk(594,`p-menu-items`),Zg()()()(),Jc(595,`tr`,14)(596,`td`,15)(597,`div`,16)(598,`span`,17),Tk(599,` p-header-user`),_u(600,`br`),Zg()()(),Jc(601,`td`,18)(602,`code`,30),Tk(603,`PoHeaderUser`),Zg()(),Jc(604,`td`,20),Tk(605,`-`),Zg(),Jc(606,`td`,21)(607,`em`)(608,`strong`),Tk(609,`(opcional)`),Zg()(),Jc(610,`p`),Tk(611,`Propriedade para configurar a seção de headerUser do `),Jc(612,`code`),Tk(613,`po-header`),Zg()()()(),Jc(614,`tr`,14)(615,`td`,15)(616,`div`,16)(617,`span`,17),Tk(618,` p-hide-button-menu`),_u(619,`br`),Zg()()(),Jc(620,`td`,18)(621,`code`,28),Tk(622,`boolean`),Zg()(),Jc(623,`td`,20),Tk(624,`-`),Zg(),Jc(625,`td`,21)(626,`em`)(627,`strong`),Tk(628,`(opcional)`),Zg()(),Jc(629,`p`),Tk(630,`Esconde o botão de menu colapsado.`),Zg()()(),Jc(631,`tr`,14)(632,`td`,15)(633,`div`,16)(634,`span`,17),Tk(635,` p-literals`),_u(636,`br`),Zg()()(),Jc(637,`td`,18)(638,`code`,31),Tk(639,`PoHeaderLiterals`),Zg()(),Jc(640,`td`,20),Tk(641,`-`),Zg(),Jc(642,`td`,21)(643,`em`)(644,`strong`),Tk(645,`(opcional)`),Zg()(),Jc(646,`p`),Tk(647,`Objeto com a literal usada na propriedade `),Jc(648,`code`),Tk(649,`p-literals`),Zg(),Tk(650,`.`),Zg(),Jc(651,`p`),Tk(652,`Para customizar a literal, basta declarar um objeto do tipo `),Jc(653,`code`),Tk(654,`PoHeaderLiterals`),Zg(),Tk(655,` conforme exemplo abaixo:`),Zg(),Jc(656,`pre`)(657,`code`),Tk(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),Zg()(),Jc(659,`p`),Tk(660,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(661,`pre`)(662,`code`),Tk(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),Zg()(),Jc(664,`blockquote`)(665,`p`),Tk(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(667,`a`,32)(668,`code`),Tk(669,`PoI18nService`),Zg()(),Tk(670,` ou do browser.`),Zg()()()(),Jc(671,`tr`,14)(672,`td`,15)(673,`div`,16)(674,`span`,17),Tk(675,` p-menus`),_u(676,`br`),Zg()()(),Jc(677,`td`,18)(678,`code`,33),Tk(679,`Array<PoMenuItem>`),Zg()(),Jc(680,`td`,20),Tk(681,`-`),Zg(),Jc(682,`td`,21)(683,`em`)(684,`strong`),Tk(685,`(opcional)`),Zg()(),Jc(686,`p`),Tk(687,`Lista dos itens do menu. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Zg(),Jc(688,`blockquote`)(689,`p`),Tk(690,`O menu poderá ser aberto via botão hamburguer quando a tela tiver menos que 960px`),Zg()()()(),Jc(691,`tr`,14)(692,`td`,15)(693,`div`,16)(694,`span`,17),Tk(695,` p-menu-items`),_u(696,`br`),Zg()()(),Jc(697,`td`,18)(698,`code`,34),Tk(699,`Array<PoHeaderActions>`),Zg()(),Jc(700,`td`,20),Tk(701,`-`),Zg(),Jc(702,`td`,21)(703,`em`)(704,`strong`),Tk(705,`(opcional)`),Zg()(),Jc(706,`p`),Tk(707,`Propriedade para configurar a seção de menu do `),Jc(708,`code`),Tk(709,`po-header`),Zg(),Tk(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),Zg(),Jc(711,`blockquote`)(712,`p`),Tk(713,`Os itens irão ficar visíveis em uma tela de até 960px`),Zg()()()(),Jc(714,`tr`,14)(715,`td`,15)(716,`div`,16)(717,`span`,17),Tk(718,` p-size`),_u(719,`br`),Zg()()(),Jc(720,`td`,18)(721,`code`,24),Tk(722,`string`),Zg()(),Jc(723,`td`,20)(724,`p`)(725,`code`),Tk(726,`medium`),Zg()()(),Jc(727,`td`,21)(728,`em`)(729,`strong`),Tk(730,`(opcional)`),Zg()(),Jc(731,`p`),Tk(732,`Define o tamanho do componente:`),Zg(),Jc(733,`ul`)(734,`li`)(735,`code`),Tk(736,`small`),Zg(),Tk(737,`: altura de 44px (disponível apenas para acessibilidade AA).`),Zg(),Jc(738,`li`)(739,`code`),Tk(740,`medium`),Zg(),Tk(741,`: altura de 56px.`),Zg()(),Jc(742,`blockquote`)(743,`p`),Tk(744,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(745,`code`),Tk(746,`medium`),Zg(),Tk(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(748,`a`,35),Tk(749,`po-theme`),Zg(),Tk(750,`.`),Zg()()()()(),Jc(751,`h3`),Tk(752,`Interfaces`),Zg(),Jc(753,`h4`,36)(754,`code`,5),Tk(755,`PoHeaderActionTool`),Zg()(),Jc(756,`div`,2)(757,`p`)(758,`em`),Tk(759,`Interface`),Zg(),Tk(760,` que define a seção de Actions do header.`),Zg(),Jc(761,`p`),Tk(762,`Indicação de uso:`),Zg(),Jc(763,`ul`)(764,`li`),Tk(765,`Primeira ação destinada à app launcher.`),Zg(),Jc(766,`li`),Tk(767,`Segunda ação (terceiro ícone) destinada à notificações.`),Zg(),Jc(768,`li`),Tk(769,`Terceira ação (segundo ícone) destinada para agrupamento de ações.`),Zg()(),Jc(770,`blockquote`)(771,`p`),Tk(772,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados.`),Zg()()(),Jc(773,`h4`,10),Tk(774,`Propriedades`),Zg(),Jc(775,`table`,11)(776,`tr`,12)(777,`th`,13),Tk(778,`Nome`),Zg(),Jc(779,`th`,13),Tk(780,`Tipo`),Zg(),Jc(781,`th`,13),Tk(782,`Descrição`),Zg()(),Jc(783,`tr`,14)(784,`td`,15)(785,`div`,16)(786,`span`,17),Tk(787,` action`),_u(788,`br`),Zg()()(),Jc(789,`td`,18)(790,`code`,37),Tk(791,`Function`),Zg()(),Jc(792,`td`,21)(793,`em`)(794,`strong`),Tk(795,`(opcional)`),Zg()(),Jc(796,`p`),Tk(797,`Evento emitido ao clicar em uma ação`),Zg(),Jc(798,`p`),Tk(799,`Exemplo: `),Jc(800,`code`),Tk(801,`action: this.myFunction.bind(this)`),Zg()()()(),Jc(802,`tr`,14)(803,`td`,15)(804,`div`,16)(805,`span`,17),Tk(806,` badge`),_u(807,`br`),Zg()()(),Jc(808,`td`,18)(809,`code`,22),Tk(810,`number`),Zg()(),Jc(811,`td`,21)(812,`em`)(813,`strong`),Tk(814,`(opcional)`),Zg()(),Jc(815,`p`),Tk(816,`Valor númerico com a repsentação de notificações`),Zg()()(),Jc(817,`tr`,14)(818,`td`,15)(819,`div`,16)(820,`span`,17),Tk(821,` icon`),_u(822,`br`),Zg()()(),Jc(823,`td`,18)(824,`code`,24),Tk(825,`string`),Zg()(),Jc(826,`td`,21)(827,`em`)(828,`strong`),Tk(829,`(opcional)`),Zg()(),Jc(830,`p`),Tk(831,`Ícone do botão de ação`),Zg()()(),Jc(832,`tr`,14)(833,`td`,15)(834,`div`,16)(835,`span`,17),Tk(836,` items`),_u(837,`br`),Zg()()(),Jc(838,`td`,18)(839,`code`,38),Tk(840,`Array<PoHeaderActionToolItem>`),Zg()(),Jc(841,`td`,21)(842,`em`)(843,`strong`),Tk(844,`(opcional)`),Zg()(),Jc(845,`p`),Tk(846,`Itens de ações`),Zg()()(),Jc(847,`tr`,14)(848,`td`,15)(849,`div`,16)(850,`span`,17),Tk(851,` label`),_u(852,`br`),Zg()()(),Jc(853,`td`,18)(854,`code`,24),Tk(855,`string`),Zg()(),Jc(856,`td`,21)(857,`em`)(858,`strong`),Tk(859,`(opcional)`),Zg()(),Jc(860,`p`),Tk(861,`Título da ação`),Zg()()(),Jc(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),Tk(866,` link`),_u(867,`br`),Zg()()(),Jc(868,`td`,18)(869,`code`,24),Tk(870,`string`),Zg()(),Jc(871,`td`,21)(872,`em`)(873,`strong`),Tk(874,`(opcional)`),Zg()(),Jc(875,`p`),Tk(876,`link utilizado no redirecionamento das páginas.`),Zg()()(),Jc(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),Tk(881,` onClose`),_u(882,`br`),Zg()()(),Jc(883,`td`,18)(884,`code`,39),Tk(885,`(label?: string) => void`),Zg()(),Jc(886,`td`,21)(887,`em`)(888,`strong`),Tk(889,`(opcional)`),Zg()(),Jc(890,`p`),Tk(891,`Função executada quando o popup ou popover da ação é fechado.`),Zg(),Jc(892,`p`),Tk(893,`Esse evento é disparado toda vez que o popup (quando há `),Jc(894,`code`),Tk(895,`items`),Zg(),Tk(896,`) ou o popover (quando há `),Jc(897,`code`),Tk(898,`popover`),Zg(),Tk(899,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Zg(),Jc(900,`p`),Tk(901,`O callback recebe como parâmetro o `),Jc(902,`code`),Tk(903,`label`),Zg(),Tk(904,` da ação que disparou o evento.`),Zg(),Jc(905,`p`),Tk(906,`Exemplo: `),Jc(907,`code`),Tk(908,`onClose: (label) => console.log('Fechado:', label)`),Zg()()()(),Jc(909,`tr`,14)(910,`td`,15)(911,`div`,16)(912,`span`,17),Tk(913,` onOpen`),_u(914,`br`),Zg()()(),Jc(915,`td`,18)(916,`code`,39),Tk(917,`(label?: string) => void`),Zg()(),Jc(918,`td`,21)(919,`em`)(920,`strong`),Tk(921,`(opcional)`),Zg()(),Jc(922,`p`),Tk(923,`Função executada quando o popup ou popover da ação é aberto.`),Zg(),Jc(924,`p`),Tk(925,`Esse evento é disparado toda vez que o usuário clica no botão da ação e o popup (quando há `),Jc(926,`code`),Tk(927,`items`),Zg(),Tk(928,`)
ou o popover (quando h\xE1 `),Jc(929,`code`),Tk(930,`popover`),Zg(),Tk(931,`) é exibido.`),Zg(),Jc(932,`p`),Tk(933,`O callback recebe como parâmetro o `),Jc(934,`code`),Tk(935,`label`),Zg(),Tk(936,` da ação que disparou o evento.`),Zg(),Jc(937,`p`),Tk(938,`Exemplo: `),Jc(939,`code`),Tk(940,`onOpen: (label) => console.log('Aberto:', label)`),Zg()()()(),Jc(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),Tk(945,` popover`),_u(946,`br`),Zg()()(),Jc(947,`td`,18)(948,`code`,40),Tk(949,`PoHeaderActionPopoverAction`),Zg()(),Jc(950,`td`,21)(951,`em`)(952,`strong`),Tk(953,`(opcional)`),Zg()(),Jc(954,`p`),Tk(955,`Template que será utilizado na ação`),Zg()()(),Jc(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),Tk(960,` tooltip`),_u(961,`br`),Zg()()(),Jc(962,`td`,18)(963,`code`,24),Tk(964,`string`),Zg()(),Jc(965,`td`,21)(966,`em`)(967,`strong`),Tk(968,`(opcional)`),Zg()(),Jc(969,`p`),Tk(970,`Texto que será apresentado na tooltip`),Zg()()()(),Jc(971,`h4`,36)(972,`code`,5),Tk(973,`PoHeaderActionPopoverAction`),Zg()(),Jc(974,`div`,2)(975,`p`)(976,`em`),Tk(977,`Interface`),Zg(),Tk(978,` que define um template para uma ação.`),Zg()(),Jc(979,`h4`,10),Tk(980,`Propriedades`),Zg(),Jc(981,`table`,11)(982,`tr`,12)(983,`th`,13),Tk(984,`Nome`),Zg(),Jc(985,`th`,13),Tk(986,`Tipo`),Zg(),Jc(987,`th`,13),Tk(988,`Descrição`),Zg()(),Jc(989,`tr`,14)(990,`td`,15)(991,`div`,16)(992,`span`,17),Tk(993,` content`),_u(994,`br`),Zg()()(),Jc(995,`td`,18)(996,`code`,29),Tk(997,`TemplateRef<any>`),Zg()(),Jc(998,`td`,21)(999,`p`),Tk(1e3,`Template que será renderizado dentro do popover.`),Zg()()(),Jc(1001,`tr`,14)(1002,`td`,15)(1003,`div`,16)(1004,`span`,17),Tk(1005,` width`),_u(1006,`br`),Zg()()(),Jc(1007,`td`,18)(1008,`code`,22),Tk(1009,`number`),Zg()(),Jc(1010,`td`,21)(1011,`em`)(1012,`strong`),Tk(1013,`(opcional)`),Zg()(),Jc(1014,`p`),Tk(1015,`Largura, em pixels, do template renderizado dentro do popover.`),Zg(),Jc(1016,`p`),Tk(1017,`Valores permitidos: de 240 a 800.`),Zg()()()(),Jc(1018,`h4`,36)(1019,`code`,5),Tk(1020,`PoHeaderActionToolItem`),Zg()(),Jc(1021,`div`,2)(1022,`p`)(1023,`em`),Tk(1024,`Interface`),Zg(),Tk(1025,` que define uma lista de ações.`),Zg()(),Jc(1026,`h4`,10),Tk(1027,`Propriedades`),Zg(),Jc(1028,`table`,11)(1029,`tr`,12)(1030,`th`,13),Tk(1031,`Nome`),Zg(),Jc(1032,`th`,13),Tk(1033,`Tipo`),Zg(),Jc(1034,`th`,13),Tk(1035,`Descrição`),Zg()(),Jc(1036,`tr`,14)(1037,`td`,15)(1038,`div`,16)(1039,`span`,17),Tk(1040,` action`),_u(1041,`br`),Zg()()(),Jc(1042,`td`,18)(1043,`code`,37),Tk(1044,`Function`),Zg()(),Jc(1045,`td`,21)(1046,`p`),Tk(1047,`Evento emitido ao clicar em uma ação`),Zg(),Jc(1048,`p`),Tk(1049,`Exemplo: `),Jc(1050,`code`),Tk(1051,`action: this.myFunction.bind(this)`),Zg()()()(),Jc(1052,`tr`,14)(1053,`td`,15)(1054,`div`,16)(1055,`span`,17),Tk(1056,` label`),_u(1057,`br`),Zg()()(),Jc(1058,`td`,18)(1059,`code`,24),Tk(1060,`string`),Zg()(),Jc(1061,`td`,21)(1062,`p`),Tk(1063,`Label da ação`),Zg()()()(),Jc(1064,`h4`,36)(1065,`code`,5),Tk(1066,`PoHeaderActions`),Zg()(),Jc(1067,`div`,2)(1068,`p`)(1069,`em`),Tk(1070,`Interface`),Zg(),Tk(1071,` que define uma lista de ações no sub-menu.`),Zg()(),Jc(1072,`h4`,10),Tk(1073,`Propriedades`),Zg(),Jc(1074,`table`,11)(1075,`tr`,12)(1076,`th`,13),Tk(1077,`Nome`),Zg(),Jc(1078,`th`,13),Tk(1079,`Tipo`),Zg(),Jc(1080,`th`,13),Tk(1081,`Descrição`),Zg()(),Jc(1082,`tr`,14)(1083,`td`,15)(1084,`div`,16)(1085,`span`,17),Tk(1086,` action`),_u(1087,`br`),Zg()()(),Jc(1088,`td`,18)(1089,`code`,37),Tk(1090,`Function`),Zg()(),Jc(1091,`td`,21)(1092,`em`)(1093,`strong`),Tk(1094,`(opcional)`),Zg()(),Jc(1095,`p`),Tk(1096,`Evento da ação`),Zg(),Jc(1097,`p`),Tk(1098,` Exemplo: `),Jc(1099,`code`),Tk(1100,`action: this.myFunction.bind(this)`),Zg()()()(),Jc(1101,`tr`,14)(1102,`td`,15)(1103,`div`,16)(1104,`span`,17),Tk(1105,` id`),_u(1106,`br`),Zg()()(),Jc(1107,`td`,18)(1108,`code`,24),Tk(1109,`string`),Zg()(),Jc(1110,`td`,21)(1111,`em`)(1112,`strong`),Tk(1113,`(opcional)`),Zg()(),Jc(1114,`p`),Tk(1115,`Identificador da ação`),Zg()()(),Jc(1116,`tr`,14)(1117,`td`,15)(1118,`div`,16)(1119,`span`,17),Tk(1120,` label`),_u(1121,`br`),Zg()()(),Jc(1122,`td`,18)(1123,`code`,24),Tk(1124,`string`),Zg()(),Jc(1125,`td`,21)(1126,`p`),Tk(1127,`Label da ação`),Zg()()(),Jc(1128,`tr`,14)(1129,`td`,15)(1130,`div`,16)(1131,`span`,17),Tk(1132,` link`),_u(1133,`br`),Zg()()(),Jc(1134,`td`,18)(1135,`code`,24),Tk(1136,`string`),Zg()(),Jc(1137,`td`,21)(1138,`em`)(1139,`strong`),Tk(1140,`(opcional)`),Zg()(),Jc(1141,`p`),Tk(1142,`link utilizado no redirecionamento das páginas.`),Zg()()()(),Jc(1143,`h4`,36)(1144,`code`,5),Tk(1145,`PoHeaderBrand`),Zg()(),Jc(1146,`div`,2)(1147,`p`)(1148,`em`),Tk(1149,`Interface`),Zg(),Tk(1150,` que define a seção de brand.`),Zg()(),Jc(1151,`h4`,10),Tk(1152,`Propriedades`),Zg(),Jc(1153,`table`,11)(1154,`tr`,12)(1155,`th`,13),Tk(1156,`Nome`),Zg(),Jc(1157,`th`,13),Tk(1158,`Tipo`),Zg(),Jc(1159,`th`,13),Tk(1160,`Descrição`),Zg()(),Jc(1161,`tr`,14)(1162,`td`,15)(1163,`div`,16)(1164,`span`,17),Tk(1165,` action`),_u(1166,`br`),Zg()()(),Jc(1167,`td`,18)(1168,`code`,37),Tk(1169,`Function`),Zg()(),Jc(1170,`td`,21)(1171,`em`)(1172,`strong`),Tk(1173,`(opcional)`),Zg()(),Jc(1174,`p`),Tk(1175,`Evento da ação`),Zg(),Jc(1176,`p`),Tk(1177,` Exemplo: `),Jc(1178,`code`),Tk(1179,`action: this.myFunction.bind(this)`),Zg()()()(),Jc(1180,`tr`,14)(1181,`td`,15)(1182,`div`,16)(1183,`span`,17),Tk(1184,` link`),_u(1185,`br`),Zg()()(),Jc(1186,`td`,18)(1187,`code`,24),Tk(1188,`string`),Zg()(),Jc(1189,`td`,21)(1190,`em`)(1191,`strong`),Tk(1192,`(opcional)`),Zg()(),Jc(1193,`p`),Tk(1194,`link utilizado no redirecionamento das páginas.`),Zg()()(),Jc(1195,`tr`,14)(1196,`td`,15)(1197,`div`,16)(1198,`span`,17),Tk(1199,` logo`),_u(1200,`br`),Zg()()(),Jc(1201,`td`,18)(1202,`code`,24),Tk(1203,`string`),Zg()(),Jc(1204,`td`,21)(1205,`em`)(1206,`strong`),Tk(1207,`(opcional)`),Zg()(),Jc(1208,`p`),Tk(1209,`Imagem da marca`),Zg()()(),Jc(1210,`tr`,14)(1211,`td`,15)(1212,`div`,16)(1213,`span`,17),Tk(1214,` smallLogo`),_u(1215,`br`),Zg()()(),Jc(1216,`td`,18)(1217,`code`,24),Tk(1218,`string`),Zg()(),Jc(1219,`td`,21)(1220,`em`)(1221,`strong`),Tk(1222,`(opcional)`),Zg()(),Jc(1223,`p`),Tk(1224,`Imagem da marca quando a tela é menor que 960px`),Zg()()(),Jc(1225,`tr`,14)(1226,`td`,15)(1227,`div`,16)(1228,`span`,17),Tk(1229,` title`),_u(1230,`br`),Zg()()(),Jc(1231,`td`,18)(1232,`code`,24),Tk(1233,`string`),Zg()(),Jc(1234,`td`,21)(1235,`em`)(1236,`strong`),Tk(1237,`(opcional)`),Zg()(),Jc(1238,`p`),Tk(1239,`Título da marca`),Zg()()()(),Jc(1240,`h4`,36)(1241,`code`,5),Tk(1242,`PoHeaderLiterals`),Zg()(),Jc(1243,`div`,2)(1244,`p`),Tk(1245,`Interface para definição das literais usadas no `),Jc(1246,`code`),Tk(1247,`po-header`),Zg(),Tk(1248,`.`),Zg()(),Jc(1249,`h4`,10),Tk(1250,`Propriedades`),Zg(),Jc(1251,`table`,11)(1252,`tr`,12)(1253,`th`,13),Tk(1254,`Nome`),Zg(),Jc(1255,`th`,13),Tk(1256,`Tipo`),Zg(),Jc(1257,`th`,13),Tk(1258,`Descrição`),Zg()(),Jc(1259,`tr`,14)(1260,`td`,15)(1261,`div`,16)(1262,`span`,17),Tk(1263,` headerLinks`),_u(1264,`br`),Zg()()(),Jc(1265,`td`,18)(1266,`code`,24),Tk(1267,`string`),Zg()(),Jc(1268,`td`,21)(1269,`em`)(1270,`strong`),Tk(1271,`(opcional)`),Zg()(),Jc(1272,`p`),Tk(1273,`Texto exibido no item de menu no qual os itens do header são agrupados quando está no modo responsivo.`),Zg()()(),Jc(1274,`tr`,14)(1275,`td`,15)(1276,`div`,16)(1277,`span`,17),Tk(1278,` notifications`),_u(1279,`br`),Zg()()(),Jc(1280,`td`,18)(1281,`code`,24),Tk(1282,`string`),Zg()(),Jc(1283,`td`,21)(1284,`em`)(1285,`strong`),Tk(1286,`(opcional)`),Zg()(),Jc(1287,`p`),Tk(1288,`Texto para indicação de notificação, caso seja passado um valor válido na propriedade `),Jc(1289,`code`),Tk(1290,`badge`),Zg()()()()(),Jc(1291,`h4`,36)(1292,`code`,5),Tk(1293,`PoHeaderUser`),Zg()(),Jc(1294,`div`,2)(1295,`p`)(1296,`em`),Tk(1297,`Interface`),Zg(),Tk(1298,` que define a seção de Customer do header.`),Zg()(),Jc(1299,`h4`,10),Tk(1300,`Propriedades`),Zg(),Jc(1301,`table`,11)(1302,`tr`,12)(1303,`th`,13),Tk(1304,`Nome`),Zg(),Jc(1305,`th`,13),Tk(1306,`Tipo`),Zg(),Jc(1307,`th`,13),Tk(1308,`Descrição`),Zg()(),Jc(1309,`tr`,14)(1310,`td`,15)(1311,`div`,16)(1312,`span`,17),Tk(1313,` action`),_u(1314,`br`),Zg()()(),Jc(1315,`td`,18)(1316,`code`,37),Tk(1317,`Function`),Zg()(),Jc(1318,`td`,21)(1319,`em`)(1320,`strong`),Tk(1321,`(opcional)`),Zg()(),Jc(1322,`p`),Tk(1323,`Evento emitido ao clicar na seção`),Zg(),Jc(1324,`p`),Tk(1325,`Exemplo: `),Jc(1326,`code`),Tk(1327,`action: this.myFunction.bind(this)`),Zg()()()(),Jc(1328,`tr`,14)(1329,`td`,15)(1330,`div`,16)(1331,`span`,17),Tk(1332,` avatar`),_u(1333,`br`),Zg()()(),Jc(1334,`td`,18)(1335,`code`,24),Tk(1336,`string`),Zg()(),Jc(1337,`td`,21)(1338,`p`),Tk(1339,`Logo representando o perfil`),Zg()()(),Jc(1340,`tr`,14)(1341,`td`,15)(1342,`div`,16)(1343,`span`,17),Tk(1344,` customerBrand`),_u(1345,`br`),Zg()()(),Jc(1346,`td`,18)(1347,`code`,24),Tk(1348,`string`),Zg()(),Jc(1349,`td`,21)(1350,`p`),Tk(1351,`Imagem da marca`),Zg()()(),Jc(1352,`tr`,14)(1353,`td`,15)(1354,`div`,16)(1355,`span`,17),Tk(1356,` items`),_u(1357,`br`),Zg()()(),Jc(1358,`td`,18)(1359,`code`,38),Tk(1360,`Array<PoHeaderActionToolItem>`),Zg()(),Jc(1361,`td`,21)(1362,`em`)(1363,`strong`),Tk(1364,`(opcional)`),Zg()(),Jc(1365,`p`),Tk(1366,`Itens de ações`),Zg(),Jc(1367,`blockquote`)(1368,`p`),Tk(1369,`Caso seja passado items e popover, o componente irá renderizar o popover e os itens serão ignorados`),Zg()()()(),Jc(1370,`tr`,14)(1371,`td`,15)(1372,`div`,16)(1373,`span`,17),Tk(1374,` onClose`),_u(1375,`br`),Zg()()(),Jc(1376,`td`,18)(1377,`code`,37),Tk(1378,`Function`),Zg()(),Jc(1379,`td`,21)(1380,`em`)(1381,`strong`),Tk(1382,`(opcional)`),Zg()(),Jc(1383,`p`),Tk(1384,`Função executada quando o popup ou popover da seção de Customer é fechado.`),Zg(),Jc(1385,`p`),Tk(1386,`Esse evento é disparado toda vez que o popup (quando há `),Jc(1387,`code`),Tk(1388,`items`),Zg(),Tk(1389,`) ou o popover (quando há `),Jc(1390,`code`),Tk(1391,`popover`),Zg(),Tk(1392,`)
\xE9 ocultado, seja por clique fora do elemento ou por a\xE7\xE3o program\xE1tica.`),Zg(),Jc(1393,`p`),Tk(1394,`Exemplo: `),Jc(1395,`code`),Tk(1396,`onClose: this.onCloseNotifications.bind(this)`),Zg()()()(),Jc(1397,`tr`,14)(1398,`td`,15)(1399,`div`,16)(1400,`span`,17),Tk(1401,` onOpen`),_u(1402,`br`),Zg()()(),Jc(1403,`td`,18)(1404,`code`,37),Tk(1405,`Function`),Zg()(),Jc(1406,`td`,21)(1407,`em`)(1408,`strong`),Tk(1409,`(opcional)`),Zg()(),Jc(1410,`p`),Tk(1411,`Função executada quando o popup ou popover da seção de Customer é aberto.`),Zg(),Jc(1412,`p`),Tk(1413,`Esse evento \xE9 disparado toda vez que o usu\xE1rio clica no bot\xE3o da se\xE7\xE3o de Customer e o popup
(quando h\xE1 `),Jc(1414,`code`),Tk(1415,`items`),Zg(),Tk(1416,`) ou o popover (quando há `),Jc(1417,`code`),Tk(1418,`popover`),Zg(),Tk(1419,`) é exibido.`),Zg(),Jc(1420,`p`),Tk(1421,`Exemplo: `),Jc(1422,`code`),Tk(1423,`onOpen: this.onOpenNotifications.bind(this)`),Zg()()()(),Jc(1424,`tr`,14)(1425,`td`,15)(1426,`div`,16)(1427,`span`,17),Tk(1428,` popover`),_u(1429,`br`),Zg()()(),Jc(1430,`td`,18)(1431,`code`,40),Tk(1432,`PoHeaderActionPopoverAction`),Zg()(),Jc(1433,`td`,21)(1434,`em`)(1435,`strong`),Tk(1436,`(opcional)`),Zg()(),Jc(1437,`p`),Tk(1438,`Template que será utilizado na ação`),Zg()()(),Jc(1439,`tr`,14)(1440,`td`,15)(1441,`div`,16)(1442,`span`,17),Tk(1443,` status`),_u(1444,`br`),Zg()()(),Jc(1445,`td`,18)(1446,`code`,41),Tk(1447,`'positive' `),Zg(),Jc(1448,`code`,42),Tk(1449,` 'negative' `),Zg(),Jc(1450,`code`,43),Tk(1451,` 'warning' `),Zg(),Jc(1452,`code`,44),Tk(1453,` 'disabled'`),Zg()(),Jc(1454,`td`,21)(1455,`em`)(1456,`strong`),Tk(1457,`(opcional)`),Zg()(),Jc(1458,`p`),Tk(1459,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),Zg(),Jc(1460,`ul`)(1461,`li`)(1462,`code`),Tk(1463,`positive`),Zg(),Tk(1464,`: Define a cor do `),Jc(1465,`code`),Tk(1466,`status`),Zg(),Tk(1467,` com a cor de feedback positivo.`),Zg(),Jc(1468,`li`)(1469,`code`),Tk(1470,`negative`),Zg(),Tk(1471,`: Define a cor do `),Jc(1472,`code`),Tk(1473,`status`),Zg(),Tk(1474,` com a cor de feedback negative.`),Zg(),Jc(1475,`li`)(1476,`code`),Tk(1477,`warning`),Zg(),Tk(1478,`: Define a cor do `),Jc(1479,`code`),Tk(1480,`status`),Zg(),Tk(1481,` com a cor de feedback warning.`),Zg(),Jc(1482,`li`)(1483,`code`),Tk(1484,`disabled`),Zg(),Tk(1485,`: Define a cor do `),Jc(1486,`code`),Tk(1487,`status`),Zg(),Tk(1488,` com a cor de feedback disabled`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function $e(r,C){if(r&1){let i=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(i);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-header-basic-view`)(2,`sample-po-header-labs-view`)(3,`sample-po-header-apps-view`),Zg()}if(r&2){let i=nk();Rb(`p-active`,i.activeTab===`web`)}}var et=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Header`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,$e,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-header-doc`),Zg()()()),l&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ve,ye,Ae,we],encapsulation:2,changeDetection:1})}return r})()}];var _e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[WV.forChild(et),WV]})}return r})();var _t=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,_e]})}return r})();export{_t as DocPoHeaderModule};
import{$i as h,B as L4,Bt as bP,Ca as oI,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,Ja as we,La as uO,Ln as w4,Mr as I1,Na as r0,P as Ize,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Wa as vo,Xt as ere,Ya as wg,Yt as ea,Za as xF,aa as iu,ai as Sn,at as R4,b as Fu,cn as iie,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,si as T,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Se=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&nu(0,`po-page-list`,0)},dependencies:[Ize],encapsulation:2,changeDetection:1})}return s})();var Ae=s=>({"docs-sample-code-tabs":s});var Pe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page List Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-list-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ae,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return s})();var xe=(()=>{class s{poNotification=h(Fu);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=Ax();jc(0,`po-page-list`,6),nu(1,`po-divider`)(2,`po-info`,7),wg(),nu(3,`po-divider`),jc(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action.action,a)||(n.action.action=a),__(a)}),wg(),jc(8,`po-input`,10),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action.label,a)||(n.action.label=a),__(a)}),wg(),jc(9,`po-input`,11),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action.url,a)||(n.action.url=a),__(a)}),wg(),jc(10,`po-select`,12),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action.type,a)||(n.action.type=a),__(a)}),wg(),jc(11,`po-select`,13),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action.icon,a)||(n.action.icon=a),__(a)}),wg(),jc(12,`po-checkbox-group`,14),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.action,a)||(n.action=a),__(a)}),wg()(),jc(13,`div`,8)(14,`po-button`,15),mt(`p-click`,function(){return n.addAction(n.action)}),wg()()(),nu(15,`po-divider`),jc(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),__(a)}),wg()()(),jc(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),__(a)}),wg(),jc(24,`po-input`,18),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),__(a)}),wg()(),jc(25,`div`,8)(26,`po-button`,19),mt(`p-click`,function(){return n.addBreadcrumbItem()}),wg()()(),nu(27,`po-divider`),jc(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),__(a)}),wg(),jc(32,`po-input`,21),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),__(a)}),wg()(),jc(33,`div`,8)(34,`po-button`,22),mt(`p-click`,function(){return n.addBreadcrumbParam()}),wg()()(),nu(35,`po-divider`),jc(36,`div`,8)(37,`po-input`,23),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),__(a)}),mt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),wg(),jc(38,`po-switch`,24),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),__(a)}),mt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),wg()(),jc(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerLabel,a)||(n.disclaimerLabel=a),__(a)}),wg(),jc(43,`po-input`,26),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerProperty,a)||(n.disclaimerProperty=a),__(a)}),wg()(),jc(44,`div`,8)(45,`po-input`,27),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerValue,a)||(n.disclaimerValue=a),__(a)}),wg(),jc(46,`po-switch`,28),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),__(a)}),wg()(),jc(47,`div`,8)(48,`po-button`,29),mt(`p-click`,function(){return n.addDisclaimer()}),wg()()(),nu(49,`po-divider`),jc(50,`form`,null,5)(52,`po-input`,30),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.title,a)||(n.title=a),__(a)}),wg(),jc(53,`po-input`,31),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.subtitle,a)||(n.subtitle=a),__(a)}),wg(),jc(54,`po-input`,32),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.filter.placeholder,a)||(n.filter.placeholder=a),__(a)}),wg(),jc(55,`po-input`,33),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.filter.width,a)||(n.filter.width=a),__(a)}),wg(),jc(56,`po-input`,34),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.literals,a)||(n.literals=a),__(a)}),mt(`p-change`,function(){return n.changeLiterals()}),wg(),jc(57,`po-radio-group`,35),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.componentsSize,a)||(n.componentsSize=a),__(a)}),wg(),jc(58,`div`,8)(59,`po-button`,36),mt(`p-click`,function(){return n.restore()}),wg()()()}if(r&2){let d=Bx(5),p=Bx(21),a=Bx(29),De=Bx(40);UE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),rg(2),UE(`p-value`,n.filterModel),rg(5),sb(`ngModel`,n.action.action),o0(),rg(),sb(`ngModel`,n.action.label),o0(),rg(),sb(`ngModel`,n.action.url),o0(),rg(),sb(`ngModel`,n.action.type),UE(`p-options`,n.typeOptions),o0(),rg(),sb(`ngModel`,n.action.icon),UE(`p-options`,n.iconOptions),o0(),rg(),sb(`ngModel`,n.action),UE(`p-options`,n.actionOptions),o0(),rg(2),UE(`p-disabled`,d.form.invalid),rg(5),sb(`ngModel`,n.breadcrumb.favorite),o0(),rg(4),sb(`ngModel`,n.breadcrumbItem.label),o0(),rg(),sb(`ngModel`,n.breadcrumbItem.link),o0(),rg(2),UE(`p-disabled`,p.invalid),rg(5),sb(`ngModel`,n.breadcrumbParams.property),o0(),rg(),sb(`ngModel`,n.breadcrumbParams.value),o0(),rg(2),UE(`p-disabled`,a.invalid),rg(3),sb(`ngModel`,n.disclaimerGroupTitle),o0(),rg(),sb(`ngModel`,n.disclaimerGroupHideRemoveAll),o0(),rg(4),sb(`ngModel`,n.disclaimerLabel),o0(),rg(),sb(`ngModel`,n.disclaimerProperty),o0(),rg(2),sb(`ngModel`,n.disclaimerValue),o0(),rg(),sb(`ngModel`,n.disclaimerHideClose),o0(),rg(2),UE(`p-disabled`,De.invalid),rg(4),sb(`ngModel`,n.title),o0(),rg(),sb(`ngModel`,n.subtitle),o0(),rg(),sb(`ngModel`,n.filter.placeholder),o0(),rg(),sb(`ngModel`,n.filter.width),o0(),rg(),sb(`ngModel`,n.literals),o0(),rg(),sb(`ngModel`,n.componentsSize),UE(`p-options`,n.componentsSizeOptions),o0()}},dependencies:[RK,oI,SK,MK,xF,SF,oi,Lf,w4,U4,Gte,Woe,L4,Yoe,Ize],encapsulation:2,changeDetection:1})}return s})();var Be=s=>({"docs-sample-code-tabs":s});var ve=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page List Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-list-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return s})();var X=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=T({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var Ve=[`advancedFilterModal`];var qe=[`poPageList`];var Ce=(()=>{class s{sampleHiringProcessesService=h(X);poNotification=h(Fu);poDialog=h(iie);router=h(Sn);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&iu(Ve,7)(qe,7),r&2){let d;yo(d=vo())&&(n.advancedFilterModal=d.first),yo(d=vo())&&(n.poPageList=d.first)}},standalone:!1,features:[we([X])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=Ax();jc(0,`po-page-list`,3,0),nu(2,`po-table`,4),wg(),jc(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.jobDescription,a)||(n.jobDescription=a),__(a)}),wg(),jc(8,`po-checkbox-group`,7),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(n.status,a)||(n.status=a),__(a)}),wg()()()}r&2&&(UE(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),rg(2),UE(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),rg(),UE(`p-primary-action`,n.advancedFilterPrimaryAction),rg(4),sb(`ngModel`,n.jobDescription),UE(`p-options`,n.jobDescriptionOptions),o0(),rg(),sb(`ngModel`,n.status),UE(`p-options`,n.statusOptions),o0())},dependencies:[RK,SK,MK,xF,SF,w4,bP,ea,Ize,R4],encapsulation:2,changeDetection:1})}return s})();var Ie=s=>({"docs-sample-code-tabs":s});var ye=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page List - Hiring Processes`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),wg(),jc(21,`label`,6),lO(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-page-list-hiring-processes`),wg(),nu(27,`hr`)),r&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return s})();var Le=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Zn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1355,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),lO(8,`po-page-default`),wg(),lO(9,`, `),jc(10,`code`),lO(11,`po-page-detail`),wg(),lO(12,`,
`),jc(13,`code`),lO(14,`po-page-edit`),wg(),lO(15,`, `),jc(16,`code`),lO(17,`po-page-list`),wg(),lO(18,` e `),jc(19,`code`),lO(20,`po-page-slide`),wg(),lO(21,`.`),wg()(),jc(22,`h3`,3),lO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),lO(26,`PoPageListComponent`),wg()(),jc(27,`div`,2)(28,`p`),lO(29,`O componente `),jc(30,`code`),lO(31,`po-page-list`),wg(),lO(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),wg(),jc(33,`p`),lO(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),jc(35,`em`),lO(36,`click`),wg(),lO(37,` do ícone `),jc(38,`a`,6),lO(39,`an-magnifying-glass`),wg(),lO(40,`
quanto ao pressionar da tecla `),jc(41,`em`),lO(42,`ENTER`),wg(),lO(43,` quando o foco estiver no campo de pesquisa.`),wg(),jc(44,`p`),lO(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),jc(46,`a`,7)(47,`code`),lO(48,`po-disclaimer-group`),wg()(),lO(49,`.`),wg(),jc(50,`h4`),lO(51,`Tokens customizáveis`),wg(),jc(52,`blockquote`)(53,`p`),lO(54,`Para maiores informações, acesse o guia `),jc(55,`a`,8),lO(56,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(57,`.`),wg()(),jc(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),lO(62,`Propriedade`),wg(),jc(63,`th`),lO(64,`Descrição`),wg(),jc(65,`th`),lO(66,`Valor Padrão`),wg()()(),jc(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),lO(71,`Header`),wg()(),nu(72,`td`)(73,`td`),wg(),jc(74,`tr`)(75,`td`)(76,`code`),lO(77,`--padding`),wg()(),jc(78,`td`),lO(79,`Espaçamento do header`),wg(),jc(80,`td`)(81,`code`),lO(82,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),lO(86,`--gap`),wg()(),jc(87,`td`),lO(88,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(89,`td`)(90,`code`),lO(91,`var(--spacing-md)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),lO(95,`--gap-actions`),wg()(),jc(96,`td`),lO(97,`Espaçamento entre as ações`),wg(),jc(98,`td`)(99,`code`),lO(100,`var(--spacing-xs)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),lO(104,`--font-family`),wg()(),jc(105,`td`),lO(106,`Família tipográfica do título`),wg(),jc(107,`td`)(108,`code`),lO(109,`var(--font-family-theme)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`strong`),lO(113,`Content`),wg()(),nu(114,`td`)(115,`td`),wg(),jc(116,`tr`)(117,`td`)(118,`code`),lO(119,`--padding-content`),wg()(),jc(120,`td`),lO(121,`Espaçamento do conteúdo`),wg(),jc(122,`td`)(123,`code`),lO(124,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(125,`div`,9)(126,`h4`,10),lO(127,`Seletor`),wg(),jc(128,`pre`,11),lO(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),wg()(),jc(130,`h4`,12),lO(131,`Propriedades`),wg(),jc(132,`table`,13)(133,`tr`,14)(134,`th`,15),lO(135,`Nome`),wg(),jc(136,`th`,15),lO(137,`Tipo`),wg(),jc(138,`th`,15),lO(139,`Padrão`),wg(),jc(140,`th`,15),lO(141,`Descrição`),wg()(),jc(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),lO(146,` p-actions`),nu(147,`br`),wg()()(),jc(148,`td`,20)(149,`code`,21),lO(150,`Array<PoPageAction>`),wg()(),jc(151,`td`,22),lO(152,`-`),wg(),jc(153,`td`,23)(154,`em`)(155,`strong`),lO(156,`(opcional)`),wg()(),jc(157,`p`),lO(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),jc(159,`code`),lO(160,`PoPageAction`),wg(),lO(161,`.`),wg()()(),jc(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),lO(166,` p-breadcrumb`),nu(167,`br`),wg()()(),jc(168,`td`,20)(169,`code`,24),lO(170,`PoBreadcrumb`),wg()(),jc(171,`td`,22),lO(172,`-`),wg(),jc(173,`td`,23)(174,`em`)(175,`strong`),lO(176,`(opcional)`),wg()(),jc(177,`p`),lO(178,`Objeto que implementa as propriedades da interface `),jc(179,`code`),lO(180,`PoBreadcrumb`),wg(),lO(181,`.`),wg()()(),jc(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),lO(186,` p-components-size`),nu(187,`br`),wg()()(),jc(188,`td`,20)(189,`code`,25),lO(190,`string`),wg()(),jc(191,`td`,22)(192,`p`)(193,`code`),lO(194,`medium`),wg()()(),jc(195,`td`,23)(196,`em`)(197,`strong`),lO(198,`(opcional)`),wg()(),jc(199,`p`),lO(200,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(201,`ul`)(202,`li`)(203,`code`),lO(204,`small`),wg(),lO(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(206,`li`)(207,`code`),lO(208,`medium`),wg(),lO(209,`: aplica a medida medium de cada componente.`),wg()(),jc(210,`blockquote`)(211,`p`),lO(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(213,`code`),lO(214,`medium`),wg(),lO(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(216,`a`,26),lO(217,`po-theme`),wg(),lO(218,`.`),wg()()()(),jc(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),lO(223,` p-disclaimer-group`),nu(224,`br`),wg()()(),jc(225,`td`,20)(226,`code`,27),lO(227,`PoDisclaimerGroup`),wg()(),jc(228,`td`,22),lO(229,`-`),wg(),jc(230,`td`,23)(231,`em`)(232,`strong`),lO(233,`(opcional)`),wg()(),jc(234,`p`),lO(235,`Objeto que implementa as propriedades da interface `),jc(236,`code`),lO(237,`PoDisclaimerGroup`),wg(),lO(238,`.`),wg()()(),jc(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),lO(243,` p-filter`),nu(244,`br`),wg()()(),jc(245,`td`,20)(246,`code`,28),lO(247,`PoPageFilter`),wg()(),jc(248,`td`,22),lO(249,`-`),wg(),jc(250,`td`,23)(251,`p`),lO(252,`Objeto que implementa as propriedades da interface `),jc(253,`code`),lO(254,`PoPageFilter`),wg(),lO(255,`.`),wg()()(),jc(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),lO(260,` p-literals`),nu(261,`br`),wg()()(),jc(262,`td`,20)(263,`code`,29),lO(264,`PoPageListLiterals`),wg()(),jc(265,`td`,22),lO(266,`-`),wg(),jc(267,`td`,23)(268,`em`)(269,`strong`),lO(270,`(opcional)`),wg()(),jc(271,`p`),lO(272,`Objeto com as literais usadas no `),jc(273,`code`),lO(274,`po-page-list`),wg(),lO(275,`.`),wg(),jc(276,`p`),lO(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(278,`pre`)(279,`code`),lO(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),wg()(),jc(281,`p`),lO(282,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(283,`pre`)(284,`code`),lO(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),wg()(),jc(286,`p`),lO(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(288,`pre`)(289,`code`),lO(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),wg()(),jc(291,`blockquote`)(292,`p`),lO(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(294,`a`,30)(295,`code`),lO(296,`PoI18nService`),wg()(),lO(297,` ou `),jc(298,`em`),lO(299,`browser`),wg(),lO(300,`.`),wg()()()(),jc(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),lO(305,` p-quick-search-value`),nu(306,`br`),wg()()(),jc(307,`td`,20)(308,`code`,25),lO(309,`string`),wg()(),jc(310,`td`,22),lO(311,`-`),wg(),jc(312,`td`,23)(313,`em`)(314,`strong`),lO(315,`(opcional)`),wg()(),jc(316,`p`),lO(317,`Valor padrão na busca rápida ao inicializar o componente`),wg()()(),jc(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),lO(322,` p-subtitle`),nu(323,`br`),wg()()(),jc(324,`td`,20)(325,`code`,25),lO(326,`string`),wg()(),jc(327,`td`,22),lO(328,`-`),wg(),jc(329,`td`,23)(330,`em`)(331,`strong`),lO(332,`(opcional)`),wg()(),jc(333,`p`),lO(334,`Subtitulo do Header da página.`),wg(),jc(335,`p`),lO(336,`Suporta formatação básica com as tags `),jc(337,`code`),lO(338,`<b>`),wg(),lO(339,` (negrito), `),jc(340,`code`),lO(341,`<strong>`),wg(),lO(342,` (negrito), `),jc(343,`code`),lO(344,`<i>`),wg(),lO(345,` (itálico), `),jc(346,`code`),lO(347,`<em>`),wg(),lO(348,` (it\xE1lico) e
`),jc(349,`code`),lO(350,`<u>`),wg(),lO(351,` (sublinhado).`),wg(),jc(352,`p`),lO(353,`Exemplo:`),wg(),jc(354,`pre`)(355,`code`,31),lO(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),wg()(),jc(357,`blockquote`)(358,`p`),lO(359,`Requer que `),jc(360,`code`),lO(361,`p-title`),wg(),lO(362,` esteja definido.`),wg()()()(),jc(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),lO(367,` p-title`),nu(368,`br`),wg()()(),jc(369,`td`,20)(370,`code`,25),lO(371,`string`),wg()(),jc(372,`td`,22),lO(373,`-`),wg(),jc(374,`td`,23)(375,`p`),lO(376,`Título da página.`),wg()()()(),jc(377,`h3`,12),lO(378,`Métodos`),wg(),jc(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),lO(385,` clearInputSearch `),wg()()()()(),jc(386,`tr`,23)(387,`td`,23)(388,`p`),lO(389,`Limpa o campo de pesquisa.`),wg()()()(),nu(390,`br`),jc(391,`h3`),lO(392,`Interfaces`),wg(),jc(393,`h4`,34)(394,`code`,5),lO(395,`PoBreadcrumbItem`),wg()(),jc(396,`div`,2)(397,`p`),lO(398,`Interface que define cada item do componente `),jc(399,`strong`),lO(400,`po-breadcrumb`),wg(),lO(401,`.`),wg()(),jc(402,`h4`,12),lO(403,`Propriedades`),wg(),jc(404,`table`,13)(405,`tr`,14)(406,`th`,15),lO(407,`Nome`),wg(),jc(408,`th`,15),lO(409,`Tipo`),wg(),jc(410,`th`,15),lO(411,`Descrição`),wg()(),jc(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),lO(416,` action`),nu(417,`br`),wg()()(),jc(418,`td`,20)(419,`code`,35),lO(420,`Function`),wg()(),jc(421,`td`,23)(422,`em`)(423,`strong`),lO(424,`(opcional)`),wg()(),jc(425,`p`),lO(426,`Ação executada ao clicar no item.`),wg(),jc(427,`blockquote`)(428,`p`),lO(429,`A função atribuída a esta propriedade receberá o `),jc(430,`em`),lO(431,`label`),wg(),lO(432,` do item como parâmetro para execução.`),wg()()()(),jc(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),lO(437,` label`),nu(438,`br`),wg()()(),jc(439,`td`,20)(440,`code`,25),lO(441,`string`),wg()(),jc(442,`td`,23)(443,`p`),lO(444,`Rótulo do item.`),wg()()(),jc(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),lO(449,` link`),nu(450,`br`),wg()()(),jc(451,`td`,20)(452,`code`,25),lO(453,`string`),wg()(),jc(454,`td`,23)(455,`em`)(456,`strong`),lO(457,`(opcional)`),wg()(),jc(458,`p`),lO(459,`Url do item.`),wg(),jc(460,`blockquote`)(461,`p`),lO(462,`Caso o item também contenha uma `),jc(463,`em`),lO(464,`action`),wg(),lO(465,` definida, a preferência de execução será do `),jc(466,`em`),lO(467,`link`),wg(),lO(468,`.`),wg()(),jc(469,`blockquote`)(470,`p`),lO(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(472,`strong`)(473,`a`,36),lO(474,`Veja um exemplo de como criar rotas aqui`),wg()(),lO(475,`.`),wg()(),jc(476,`blockquote`)(477,`p`),lO(478,`Esta propriedade é necessária para que a propriedade `),jc(479,`code`),lO(480,`p-favorite-service`),wg(),lO(481,` consiga favoritar ou desfavoritar.`),wg()()()()(),jc(482,`h4`,34)(483,`code`,5),lO(484,`PoBreadcrumb`),wg()(),jc(485,`div`,2)(486,`p`),lO(487,`Interface que define o `),jc(488,`code`),lO(489,`po-breadcrumb`),wg(),lO(490,`.`),wg()(),jc(491,`h4`,12),lO(492,`Propriedades`),wg(),jc(493,`table`,13)(494,`tr`,14)(495,`th`,15),lO(496,`Nome`),wg(),jc(497,`th`,15),lO(498,`Tipo`),wg(),jc(499,`th`,15),lO(500,`Descrição`),wg()(),jc(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),lO(505,` favorite`),nu(506,`br`),wg()()(),jc(507,`td`,20)(508,`code`,25),lO(509,`string`),wg()(),jc(510,`td`,23)(511,`em`)(512,`strong`),lO(513,`(opcional)`),wg()(),jc(514,`p`),lO(515,`Permite definir uma URL para favoritar ou desfavoritar.`),wg(),jc(516,`blockquote`)(517,`p`),lO(518,`Para maiores informações verificar a propriedade `),jc(519,`code`),lO(520,`p-favorite-service`),wg(),lO(521,` do componente `),jc(522,`code`),lO(523,`po-breadcrumb`),wg(),lO(524,`.`),wg()()()(),jc(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),lO(529,` items`),nu(530,`br`),wg()()(),jc(531,`td`,20)(532,`code`,37),lO(533,`Array<PoBreadcrumbItem>`),wg()(),jc(534,`td`,23)(535,`p`),lO(536,`Lista de itens do `),jc(537,`em`),lO(538,`breadcrumb`),wg(),lO(539,`.`),wg(),jc(540,`p`)(541,`strong`),lO(542,`Exemplo:`),wg()(),jc(543,`pre`)(544,`code`),lO(545,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),lO(550,` params`),nu(551,`br`),wg()()(),jc(552,`td`,20)(553,`code`,38),lO(554,`object`),wg()(),jc(555,`td`,23)(556,`em`)(557,`strong`),lO(558,`(opcional)`),wg()(),jc(559,`p`),lO(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()()(),jc(561,`h4`,34)(562,`code`,5),lO(563,`PoDisclaimer`),wg()(),jc(564,`div`,2)(565,`p`),lO(566,`Interface que representa o objeto `),jc(567,`code`),lO(568,`po-disclaimer`),wg(),lO(569,`.`),wg()(),jc(570,`h4`,12),lO(571,`Propriedades`),wg(),jc(572,`table`,13)(573,`tr`,14)(574,`th`,15),lO(575,`Nome`),wg(),jc(576,`th`,15),lO(577,`Tipo`),wg(),jc(578,`th`,15),lO(579,`Descrição`),wg()(),jc(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),lO(584,` hideClose`),nu(585,`br`),wg()()(),jc(586,`td`,20)(587,`code`,39),lO(588,`boolean`),wg()(),jc(589,`td`,23)(590,`em`)(591,`strong`),lO(592,`(opcional)`),wg()(),jc(593,`p`),lO(594,`Se verdadeiro, oculta o botão para fechar o `),jc(595,`em`),lO(596,`disclaimer`),wg(),lO(597,`.`),wg()()(),jc(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),lO(602,` label`),nu(603,`br`),wg()()(),jc(604,`td`,20)(605,`code`,25),lO(606,`string`),wg()(),jc(607,`td`,23)(608,`em`)(609,`strong`),lO(610,`(opcional)`),wg()(),jc(611,`p`),lO(612,`Texto de exibição do objeto.`),wg()()(),jc(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),lO(617,` property`),nu(618,`br`),wg()()(),jc(619,`td`,20)(620,`code`,25),lO(621,`string`),wg()(),jc(622,`td`,23)(623,`em`)(624,`strong`),lO(625,`(opcional)`),wg()(),jc(626,`p`),lO(627,`Nome da propriedade vinculada ao objeto `),jc(628,`em`),lO(629,`disclaimer`),wg(),lO(630,`.`),wg()()(),jc(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),lO(635,` value`),nu(636,`br`),wg()()(),jc(637,`td`,20)(638,`code`,40),lO(639,`any`),wg()(),jc(640,`td`,23)(641,`p`),lO(642,`Valor do objeto.`),wg()()()(),jc(643,`h4`,34)(644,`code`,5),lO(645,`PoDisclaimerGroupRemoveAction`),wg()(),jc(646,`div`,2)(647,`p`),lO(648,`Estrutura do objeto representando o estado dos `),jc(649,`em`),lO(650,`disclaimers`),wg(),lO(651,` após a remoção.`),wg()(),jc(652,`h4`,12),lO(653,`Propriedades`),wg(),jc(654,`table`,13)(655,`tr`,14)(656,`th`,15),lO(657,`Nome`),wg(),jc(658,`th`,15),lO(659,`Tipo`),wg(),jc(660,`th`,15),lO(661,`Descrição`),wg()(),jc(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),lO(666,` currentDisclaimers`),nu(667,`br`),wg()()(),jc(668,`td`,20)(669,`code`,41),lO(670,`Array<PoDisclaimer>`),wg()(),jc(671,`td`,23)(672,`p`),lO(673,`Lista com os `),jc(674,`em`),lO(675,`disclaimers`),wg(),lO(676,` atuais (restantes).`),wg()()(),jc(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),lO(681,` removedDisclaimer`),nu(682,`br`),wg()()(),jc(683,`td`,20)(684,`code`,42),lO(685,`PoDisclaimer`),wg()(),jc(686,`td`,23)(687,`p`)(688,`em`),lO(689,`Disclaimer`),wg(),lO(690,` que foi removido.`),wg()()()(),jc(691,`h4`,34)(692,`code`,5),lO(693,`PoDisclaimerGroup`),wg()(),jc(694,`div`,2)(695,`p`),lO(696,`Interface que representa o objeto `),jc(697,`code`),lO(698,`po-disclaimer-group`),wg(),lO(699,`.`),wg()(),jc(700,`h4`,12),lO(701,`Propriedades`),wg(),jc(702,`table`,13)(703,`tr`,14)(704,`th`,15),lO(705,`Nome`),wg(),jc(706,`th`,15),lO(707,`Tipo`),wg(),jc(708,`th`,15),lO(709,`Descrição`),wg()(),jc(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),lO(714,` change`),nu(715,`br`),wg()()(),jc(716,`td`,20)(717,`code`,35),lO(718,`Function`),wg()(),jc(719,`td`,23)(720,`em`)(721,`strong`),lO(722,`(opcional)`),wg()(),jc(723,`p`),lO(724,`Função que será disparada quando a lista de `),jc(725,`em`),lO(726,`disclaimers`),wg(),lO(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),jc(728,`em`),lO(729,`disclaimers`),wg(),lO(730,`.`),wg()()(),jc(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),lO(735,` disclaimers`),nu(736,`br`),wg()()(),jc(737,`td`,20)(738,`code`,41),lO(739,`Array<PoDisclaimer>`),wg()(),jc(740,`td`,23)(741,`p`),lO(742,`Lista de `),jc(743,`em`),lO(744,`disclaimers`),wg(),lO(745,`.`),wg(),jc(746,`p`),lO(747,`Exemplo:`),wg(),jc(748,`pre`)(749,`code`),lO(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),wg()(),jc(751,`p`),lO(752,`Para que a lista de `),jc(753,`em`),lO(754,`disclaimers`),wg(),lO(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),jc(756,`code`),lO(757,`PoDisclaimer`),wg(),lO(758,`.`),wg(),jc(759,`p`),lO(760,`Exemplo:`),wg(),jc(761,`pre`)(762,`code`),lO(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),wg()()()(),jc(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),lO(768,` hideRemoveAll`),nu(769,`br`),wg()()(),jc(770,`td`,20)(771,`code`,39),lO(772,`boolean`),wg()(),jc(773,`td`,23)(774,`em`)(775,`strong`),lO(776,`(opcional)`),wg()(),jc(777,`p`),lO(778,`Oculta o botão para remover todos os `),jc(779,`em`),lO(780,`disclaimers`),wg(),lO(781,` do grupo.`),wg(),jc(782,`blockquote`)(783,`p`),lO(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),jc(785,`em`),lO(786,`disclaimers`),wg(),lO(787,` com a opção `),jc(788,`code`),lO(789,`hideClose`),wg(),lO(790,` habilitada.`),wg()()()(),jc(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),lO(795,` remove`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,35),lO(799,`Function`),wg()(),jc(800,`td`,23)(801,`em`)(802,`strong`),lO(803,`(opcional)`),wg()(),jc(804,`p`),lO(805,`Função que será disparada quando um `),jc(806,`em`),lO(807,`disclaimer`),wg(),lO(808,` for removido da lista de
`),jc(809,`em`),lO(810,`disclaimers`),wg(),lO(811,` pelo usuário.`),wg(),jc(812,`p`),lO(813,`Recebe como parâmetro um objeto conforme a interface `),jc(814,`code`),lO(815,`PoDisclaimerGroupRemoveAction`),wg(),lO(816,`.`),wg()()(),jc(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),lO(821,` removeAll`),nu(822,`br`),wg()()(),jc(823,`td`,20)(824,`code`,35),lO(825,`Function`),wg()(),jc(826,`td`,23)(827,`em`)(828,`strong`),lO(829,`(opcional)`),wg()(),jc(830,`p`),lO(831,`Função que será disparada quando todos os `),jc(832,`em`),lO(833,`disclaimers`),wg(),lO(834,` forem removidos da lista de `),jc(835,`em`),lO(836,`disclaimers`),wg(),lO(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),wg(),jc(838,`p`),lO(839,`Recebe como parâmetro uma lista contendo todos os `),jc(840,`code`),lO(841,`disclaimers`),wg(),lO(842,` removidos.`),wg()()(),jc(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),lO(847,` title`),nu(848,`br`),wg()()(),jc(849,`td`,20)(850,`code`,25),lO(851,`string`),wg()(),jc(852,`td`,23)(853,`em`)(854,`strong`),lO(855,`(opcional)`),wg()(),jc(856,`p`),lO(857,`Título do grupo de `),jc(858,`em`),lO(859,`disclaimers`),wg(),lO(860,`.`),wg()()()(),jc(861,`h4`,34)(862,`code`,5),lO(863,`PoPageAction`),wg()(),jc(864,`div`,2)(865,`p`),lO(866,`Interface para as ações dos componentes `),jc(867,`code`),lO(868,`po-page-default`),wg(),lO(869,` e `),jc(870,`code`),lO(871,`po-page-list`),wg(),lO(872,`.`),wg(),jc(873,`p`),lO(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),jc(875,`em`),lO(876,`dropdown`),wg(),lO(877,`,
conforme o `),jc(878,`code`),lO(879,`PoPageActionsLayout`),wg(),lO(880,` e o tamanho da tela.`),wg(),jc(881,`blockquote`)(882,`p`),lO(883,`As propriedades `),jc(884,`code`),lO(885,`separator`),wg(),lO(886,`, `),jc(887,`code`),lO(888,`selected`),wg(),lO(889,` e `),jc(890,`code`),lO(891,`subItems`),wg(),lO(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),jc(893,`em`),lO(894,`dropdown`),wg(),lO(895,`.`),wg()()(),jc(896,`h4`,12),lO(897,`Propriedades`),wg(),jc(898,`table`,13)(899,`tr`,14)(900,`th`,15),lO(901,`Nome`),wg(),jc(902,`th`,15),lO(903,`Tipo`),wg(),jc(904,`th`,15),lO(905,`Descrição`),wg()(),jc(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),lO(910,` action`),nu(911,`br`),wg()()(),jc(912,`td`,20)(913,`code`,35),lO(914,`Function`),wg()(),jc(915,`td`,23)(916,`em`)(917,`strong`),lO(918,`(opcional)`),wg()(),jc(919,`p`),lO(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(921,`p`),lO(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(923,`code`),lO(924,`subItems`),wg(),lO(925,`.`),wg(),jc(926,`blockquote`)(927,`p`),lO(928,`Para que a função seja executada no contexto do componente, utilize `),jc(929,`em`),lO(930,`bind`),wg(),lO(931,`:
`),jc(932,`code`),lO(933,`action: this.myFunction.bind(this)`),wg()()()()(),jc(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),lO(938,` disabled`),nu(939,`br`),wg()()(),jc(940,`td`,20)(941,`code`,39),lO(942,`boolean `),wg(),jc(943,`code`,35),lO(944,` Function`),wg()(),jc(945,`td`,23)(946,`em`)(947,`strong`),lO(948,`(opcional)`),wg()(),jc(949,`p`),lO(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),lO(955,` icon`),nu(956,`br`),wg()()(),jc(957,`td`,20)(958,`code`,25),lO(959,`string `),wg(),jc(960,`code`,43),lO(961,` TemplateRef<void>`),wg()(),jc(962,`td`,23)(963,`em`)(964,`strong`),lO(965,`(opcional)`),wg()(),jc(966,`p`),lO(967,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(968,`p`),lO(969,`Aceita ícones da `),jc(970,`a`,6),lO(971,`Biblioteca de ícones`),wg(),lO(972,`, fontes externas (ex: Font Awesome)
ou um `),jc(973,`code`),lO(974,`TemplateRef`),wg(),lO(975,` para ícones customizados.`),wg(),jc(976,`pre`)(977,`code`),lO(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),lO(983,` kind`),nu(984,`br`),wg()()(),jc(985,`td`,20)(986,`code`,25),lO(987,`string`),wg()(),jc(988,`td`,23)(989,`em`)(990,`strong`),lO(991,`(opcional)`),wg()(),jc(992,`p`),lO(993,`Define o estilo visual da ação quando exibida como botão fora do `),jc(994,`em`),lO(995,`dropdown`),wg(),lO(996,`.`),wg(),jc(997,`p`),lO(998,`Valores permitidos:`),wg(),jc(999,`ul`)(1e3,`li`)(1001,`code`),lO(1002,`primary`),wg(),lO(1003,`: botão com maior destaque visual.`),wg(),jc(1004,`li`)(1005,`code`),lO(1006,`secondary`),wg(),lO(1007,`: estilo padrão.`),wg()(),jc(1008,`blockquote`)(1009,`p`),lO(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),wg()(),jc(1011,`blockquote`)(1012,`p`),lO(1013,`Somente uma ação pode ter `),jc(1014,`code`),lO(1015,`kind`),wg(),lO(1016,` igual a `),jc(1017,`code`),lO(1018,`primary`),wg(),lO(1019,`. Caso mais de uma defina `),jc(1020,`code`),lO(1021,`primary`),wg(),lO(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),jc(1023,`code`),lO(1024,`secondary`),wg(),lO(1025,`.`),wg()(),jc(1026,`blockquote`)(1027,`p`),lO(1028,`Quando não definido, o estilo é determinado pelo `),jc(1029,`code`),lO(1030,`PoPageActionsLayout`),wg(),lO(1031,`.`),wg()()()(),jc(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),lO(1036,` label`),nu(1037,`br`),wg()()(),jc(1038,`td`,20)(1039,`code`,25),lO(1040,`string`),wg()(),jc(1041,`td`,23)(1042,`p`),lO(1043,`Rótulo da ação.`),wg(),jc(1044,`p`),lO(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(1046,`code`),lO(1047,`subItems`),wg(),lO(1048,`.`),wg()()(),jc(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),lO(1053,` selected`),nu(1054,`br`),wg()()(),jc(1055,`td`,20)(1056,`code`,39),lO(1057,`boolean`),wg()(),jc(1058,`td`,23)(1059,`em`)(1060,`strong`),lO(1061,`(opcional)`),wg()(),jc(1062,`p`),lO(1063,`Define se a ação está selecionada.`),wg()()(),jc(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),lO(1068,` separator`),nu(1069,`br`),wg()()(),jc(1070,`td`,20)(1071,`code`,39),lO(1072,`boolean`),wg()(),jc(1073,`td`,23)(1074,`em`)(1075,`strong`),lO(1076,`(opcional)`),wg()(),jc(1077,`p`),lO(1078,`Atribui uma linha separadora acima do item.`),wg()()(),jc(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),lO(1083,` subItems`),nu(1084,`br`),wg()()(),jc(1085,`td`,20)(1086,`code`,44),lO(1087,`Array<PoPopupAction>`),wg()(),jc(1088,`td`,23)(1089,`em`)(1090,`strong`),lO(1091,`(opcional)`),wg()(),jc(1092,`p`),lO(1093,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(1094,`pre`)(1095,`code`),lO(1096,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(1097,`p`),lO(1098,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(1099,`blockquote`)(1100,`p`),lO(1101,`As propriedades `),jc(1102,`code`),lO(1103,`disabled`),wg(),lO(1104,`, `),jc(1105,`code`),lO(1106,`type`),wg(),lO(1107,` e `),jc(1108,`code`),lO(1109,`visible`),wg(),lO(1110,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(1111,`blockquote`)(1112,`p`),lO(1113,`Quando `),jc(1114,`code`),lO(1115,`url`),wg(),lO(1116,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(1117,`blockquote`)(1118,`p`),lO(1119,`Em subníveis aninhados, o `),jc(1120,`code`),lO(1121,`icon`),wg(),lO(1122,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(1123,`tr`,16)(1124,`td`,17)(1125,`div`,18)(1126,`span`,19),lO(1127,` subItemsLazy`),nu(1128,`br`),wg()()(),jc(1129,`td`,20)(1130,`code`,45),lO(1131,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(1132,`td`,23)(1133,`em`)(1134,`strong`),lO(1135,`(opcional)`),wg()(),jc(1136,`p`),lO(1137,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(1138,`p`),lO(1139,`Recebe o item agrupador e retorna um `),jc(1140,`code`),lO(1141,`Observable<Array<PoPopupAction>>`),wg(),lO(1142,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(1143,`strong`),lO(1144,`apenas`),wg(),lO(1145,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(1146,`code`),lO(1147,`po-skeleton`),wg(),lO(1148,`
enquanto os dados s\xE3o carregados:`),wg(),jc(1149,`pre`)(1150,`code`),lO(1151,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(1152,`blockquote`)(1153,`p`),lO(1154,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(1155,`p`),lO(1156,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(1157,`tr`,16)(1158,`td`,17)(1159,`div`,18)(1160,`span`,19),lO(1161,` type`),nu(1162,`br`),wg()()(),jc(1163,`td`,20)(1164,`code`,25),lO(1165,`string`),wg()(),jc(1166,`td`,23)(1167,`em`)(1168,`strong`),lO(1169,`(opcional)`),wg()(),jc(1170,`p`),lO(1171,`Define a cor do item.`),wg(),jc(1172,`p`),lO(1173,`Valores válidos:`),wg(),jc(1174,`ul`)(1175,`li`)(1176,`code`),lO(1177,`default`),wg()(),jc(1178,`li`)(1179,`code`),lO(1180,`danger`),wg()()()()(),jc(1181,`tr`,16)(1182,`td`,17)(1183,`div`,18)(1184,`span`,19),lO(1185,` url`),nu(1186,`br`),wg()()(),jc(1187,`td`,20)(1188,`code`,25),lO(1189,`string`),wg()(),jc(1190,`td`,23)(1191,`em`)(1192,`strong`),lO(1193,`(opcional)`),wg()(),jc(1194,`p`),lO(1195,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(1196,`p`),lO(1197,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(1198,`code`),lO(1199,`url`),wg(),lO(1200,` é informada em um agrupador, o clique `),jc(1201,`strong`),lO(1202,`não abrirá os subitens`),wg(),lO(1203,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(1204,`blockquote`)(1205,`p`),lO(1206,`Quando informada, tem prioridade sobre a propriedade `),jc(1207,`code`),lO(1208,`action`),wg(),lO(1209,`.`),wg()()()(),jc(1210,`tr`,16)(1211,`td`,17)(1212,`div`,18)(1213,`span`,19),lO(1214,` visible`),nu(1215,`br`),wg()()(),jc(1216,`td`,20)(1217,`code`,39),lO(1218,`boolean `),wg(),jc(1219,`code`,35),lO(1220,` Function`),wg()(),jc(1221,`td`,23)(1222,`em`)(1223,`strong`),lO(1224,`(opcional)`),wg()(),jc(1225,`p`),lO(1226,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(1227,`h4`,34)(1228,`code`,5),lO(1229,`PoPageFilter`),wg()(),jc(1230,`div`,2)(1231,`p`),lO(1232,`Interface para o atributo `),jc(1233,`code`),lO(1234,`filter`),wg(),lO(1235,` do componente `),jc(1236,`code`),lO(1237,`po-page-list`),wg(),lO(1238,`.`),wg()(),jc(1239,`h4`,12),lO(1240,`Propriedades`),wg(),jc(1241,`table`,13)(1242,`tr`,14)(1243,`th`,15),lO(1244,`Nome`),wg(),jc(1245,`th`,15),lO(1246,`Tipo`),wg(),jc(1247,`th`,15),lO(1248,`Descrição`),wg()(),jc(1249,`tr`,16)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),lO(1253,` action`),nu(1254,`br`),wg()()(),jc(1255,`td`,20)(1256,`code`,35),lO(1257,`Function`),wg()(),jc(1258,`td`,23)(1259,`em`)(1260,`strong`),lO(1261,`(opcional)`),wg()(),jc(1262,`p`),lO(1263,`Ação a ser executada.`),wg()()(),jc(1264,`tr`,16)(1265,`td`,17)(1266,`div`,18)(1267,`span`,19),lO(1268,` advancedAction`),nu(1269,`br`),wg()()(),jc(1270,`td`,20)(1271,`code`,35),lO(1272,`Function`),wg()(),jc(1273,`td`,23)(1274,`em`)(1275,`strong`),lO(1276,`(opcional)`),wg()(),jc(1277,`p`),lO(1278,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),jc(1279,`em`),lO(1280,`click`),wg(),lO(1281,` através do rótulo `),jc(1282,`strong`),lO(1283,`Busca Avançada`),wg(),lO(1284,`.`),wg()()(),jc(1285,`tr`,16)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),lO(1289,` placeholder`),nu(1290,`br`),wg()()(),jc(1291,`td`,20)(1292,`code`,25),lO(1293,`string`),wg()(),jc(1294,`td`,23)(1295,`em`)(1296,`strong`),lO(1297,`(opcional)`),wg()(),jc(1298,`p`),lO(1299,`Texto de instrução exibido dentro do campo de filtro.`),wg()()(),jc(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),lO(1304,` width`),nu(1305,`br`),wg()()(),jc(1306,`td`,20)(1307,`code`,46),lO(1308,`number`),wg()(),jc(1309,`td`,23)(1310,`em`)(1311,`strong`),lO(1312,`(opcional)`),wg()(),jc(1313,`p`),lO(1314,`Tamanho do filtro em tela, utilizando o `),jc(1315,`em`),lO(1316,`Grid System`),wg(),lO(1317,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),wg()()()(),jc(1318,`h4`,34)(1319,`code`,5),lO(1320,`PoPageListLiterals`),wg()(),jc(1321,`div`,2)(1322,`p`),lO(1323,`Interface para definição das literais usadas no `),jc(1324,`code`),lO(1325,`po-page-list`),wg(),lO(1326,`.`),wg()(),jc(1327,`h4`,12),lO(1328,`Propriedades`),wg(),jc(1329,`table`,13)(1330,`tr`,14)(1331,`th`,15),lO(1332,`Nome`),wg(),jc(1333,`th`,15),lO(1334,`Tipo`),wg(),jc(1335,`th`,15),lO(1336,`Descrição`),wg()(),jc(1337,`tr`,16)(1338,`td`,17)(1339,`div`,18)(1340,`span`,19),lO(1341,` otherActions`),nu(1342,`br`),wg()()(),jc(1343,`td`,20)(1344,`code`,25),lO(1345,`string`),wg()(),jc(1346,`td`,23)(1347,`em`)(1348,`strong`),lO(1349,`(opcional)`),wg()(),jc(1350,`p`),lO(1351,`Legenda do `),jc(1352,`code`),lO(1353,`po-dropdown`),wg(),lO(1354,` de ações.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return s})();function We(s,Ne){if(s&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-page-list-basic-view`)(2,`sample-po-page-list-labs-view`)(3,`sample-po-page-list-hiring-processes-view`),wg()}if(s&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(b(ir),b(Sn))};static ɵcmp=Zn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,We,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-page-list-doc`),wg()()()),r&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Pe,ve,ye,Le],encapsulation:2,changeDetection:1})}return s})()}];var _e=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=pe({type:s});static ɵinj=ue({imports:[I1.forChild(Re),I1]})}return s})();var _t=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=pe({type:s});static ɵinj=ue({imports:[M,_e]})}return s})();export{_t as DocPoPageListModule};
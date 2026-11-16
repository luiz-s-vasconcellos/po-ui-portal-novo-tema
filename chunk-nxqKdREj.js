import{m as P,p as M}from"./main-5ZHUK4IE.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Ga as qI,H as Lze,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,p as DP,pi as R,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,va as ik,vi as Sk,wn as q4,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var Se=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&vu(0,`po-page-list`,0)},dependencies:[Lze],encapsulation:2,changeDetection:1})}return s})();var Ae=s=>({"docs-sample-code-tabs":s});var Pe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-list-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page List Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-list-basic`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return s})();var xe=(()=>{class s{poNotification=p(Ru);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let m=YO();Qc(0,`po-page-list`,6),vu(1,`po-divider`)(2,`po-info`,7),Kg(),vu(3,`po-divider`),Qc(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.action,a)||(n.action.action=a),U_(a)}),Kg(),Qc(8,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.label,a)||(n.action.label=a),U_(a)}),Kg(),Qc(9,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.url,a)||(n.action.url=a),U_(a)}),Kg(),Qc(10,`po-select`,12),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.type,a)||(n.action.type=a),U_(a)}),Kg(),Qc(11,`po-select`,13),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action.icon,a)||(n.action.icon=a),U_(a)}),Kg(),Qc(12,`po-checkbox-group`,14),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.action,a)||(n.action=a),U_(a)}),Kg()(),Qc(13,`div`,8)(14,`po-button`,15),vt(`p-click`,function(){return n.addAction(n.action)}),Kg()()(),vu(15,`po-divider`),Qc(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),U_(a)}),Kg()()(),Qc(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),U_(a)}),Kg(),Qc(24,`po-input`,18),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),U_(a)}),Kg()(),Qc(25,`div`,8)(26,`po-button`,19),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),vu(27,`po-divider`),Qc(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),U_(a)}),Kg(),Qc(32,`po-input`,21),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),U_(a)}),Kg()(),Qc(33,`div`,8)(34,`po-button`,22),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),vu(35,`po-divider`),Qc(36,`div`,8)(37,`po-input`,23),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),U_(a)}),vt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),Kg(),Qc(38,`po-switch`,24),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),U_(a)}),vt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),Kg()(),Qc(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerLabel,a)||(n.disclaimerLabel=a),U_(a)}),Kg(),Qc(43,`po-input`,26),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerProperty,a)||(n.disclaimerProperty=a),U_(a)}),Kg()(),Qc(44,`div`,8)(45,`po-input`,27),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerValue,a)||(n.disclaimerValue=a),U_(a)}),Kg(),Qc(46,`po-switch`,28),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),U_(a)}),Kg()(),Qc(47,`div`,8)(48,`po-button`,29),vt(`p-click`,function(){return n.addDisclaimer()}),Kg()()(),vu(49,`po-divider`),Qc(50,`form`,null,5)(52,`po-input`,30),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.title,a)||(n.title=a),U_(a)}),Kg(),Qc(53,`po-input`,31),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.subtitle,a)||(n.subtitle=a),U_(a)}),Kg(),Qc(54,`po-input`,32),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.filter.placeholder,a)||(n.filter.placeholder=a),U_(a)}),Kg(),Qc(55,`po-input`,33),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.filter.width,a)||(n.filter.width=a),U_(a)}),Kg(),Qc(56,`po-input`,34),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.literals,a)||(n.literals=a),U_(a)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg(),Qc(57,`po-radio-group`,35),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.componentsSize,a)||(n.componentsSize=a),U_(a)}),Kg(),Qc(58,`div`,8)(59,`po-button`,36),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(r&2){let m=ik(5),p=ik(21),a=ik(29),De=ik(40);Rb(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Rb(`p-value`,n.filterModel),wg(5),Yb(`ngModel`,n.action.action),W0(),wg(),Yb(`ngModel`,n.action.label),W0(),wg(),Yb(`ngModel`,n.action.url),W0(),wg(),Yb(`ngModel`,n.action.type),Rb(`p-options`,n.typeOptions),W0(),wg(),Yb(`ngModel`,n.action.icon),Rb(`p-options`,n.iconOptions),W0(),wg(),Yb(`ngModel`,n.action),Rb(`p-options`,n.actionOptions),W0(),wg(2),Rb(`p-disabled`,m.form.invalid),wg(5),Yb(`ngModel`,n.breadcrumb.favorite),W0(),wg(4),Yb(`ngModel`,n.breadcrumbItem.label),W0(),wg(),Yb(`ngModel`,n.breadcrumbItem.link),W0(),wg(2),Rb(`p-disabled`,p.invalid),wg(5),Yb(`ngModel`,n.breadcrumbParams.property),W0(),wg(),Yb(`ngModel`,n.breadcrumbParams.value),W0(),wg(2),Rb(`p-disabled`,a.invalid),wg(3),Yb(`ngModel`,n.disclaimerGroupTitle),W0(),wg(),Yb(`ngModel`,n.disclaimerGroupHideRemoveAll),W0(),wg(4),Yb(`ngModel`,n.disclaimerLabel),W0(),wg(),Yb(`ngModel`,n.disclaimerProperty),W0(),wg(2),Yb(`ngModel`,n.disclaimerValue),W0(),wg(),Yb(`ngModel`,n.disclaimerHideClose),W0(),wg(2),Rb(`p-disabled`,De.invalid),wg(4),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.subtitle),W0(),wg(),Yb(`ngModel`,n.filter.placeholder),W0(),wg(),Yb(`ngModel`,n.filter.width),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0()}},dependencies:[AZ,qI,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,R4,Joe,Lze],encapsulation:2,changeDetection:1})}return s})();var Be=s=>({"docs-sample-code-tabs":s});var ve=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-list-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page List Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-list
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-list-labs`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,xe],encapsulation:2,changeDetection:1})}return s})();var X=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=R({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var qe=[`advancedFilterModal`];var Ve=[`poPageList`];var Ce=(()=>{class s{sampleHiringProcessesService=p(X);poNotification=p(Ru);poDialog=p(sie);router=p(An);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Du(qe,7)(Ve,7),r&2){let m;No(m=xo())&&(n.advancedFilterModal=m.first),No(m=xo())&&(n.poPageList=m.first)}},standalone:!1,features:[we$1([X])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let m=YO();Qc(0,`po-page-list`,3,0),vu(2,`po-table`,4),Kg(),Qc(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.jobDescription,a)||(n.jobDescription=a),U_(a)}),Kg(),Qc(8,`po-checkbox-group`,7),z0(),Kb(`ngModelChange`,function(a){return B_(m),Tk(n.status,a)||(n.status=a),U_(a)}),Kg()()()}r&2&&(Rb(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),wg(2),Rb(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),wg(),Rb(`p-primary-action`,n.advancedFilterPrimaryAction),wg(4),Yb(`ngModel`,n.jobDescription),Rb(`p-options`,n.jobDescriptionOptions),W0(),wg(),Yb(`ngModel`,n.status),Rb(`p-options`,n.statusOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,I4,DP,ia,Lze,q4],encapsulation:2,changeDetection:1})}return s})();var Ie=s=>({"docs-sample-code-tabs":s});var ye=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-page-list-hiring-processes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page List - Hiring Processes`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-list
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-page-list-hiring-processes`),Kg(),vu(27,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return s})();var we=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1355,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-list-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-disclaimer-group`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`id`,`prop-p-filter`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-quick-search-value`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-clearInputSearch`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-disclaimer`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-hide-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-disclaimer-label`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-property`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-disclaimer-group-remove-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-remove-action-current-disclaimers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`id`,`interface-po-disclaimer-group-remove-action-removed-disclaimer`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`id`,`interface-po-disclaimer-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-change`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-disclaimers`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-hide-remove-all`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-remove`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-remove-all`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-group-title`,1,`docs-api-properties-row`],[`id`,`interface-po-page-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`id`,`interface-po-page-action-kind`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-filter-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-advanced-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-page-filter-width`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-page-list-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-list-literals-other-actions`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoPageListComponent`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,`O componente `),Qc(30,`code`),Sk(31,`po-page-list`),Kg(),Sk(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),Kg(),Qc(33,`p`),Sk(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Qc(35,`em`),Sk(36,`click`),Kg(),Sk(37,` do ícone `),Qc(38,`a`,6),Sk(39,`an-magnifying-glass`),Kg(),Sk(40,`
quanto ao pressionar da tecla `),Qc(41,`em`),Sk(42,`ENTER`),Kg(),Sk(43,` quando o foco estiver no campo de pesquisa.`),Kg(),Qc(44,`p`),Sk(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Qc(46,`a`,7)(47,`code`),Sk(48,`po-disclaimer-group`),Kg()(),Sk(49,`.`),Kg(),Qc(50,`h4`),Sk(51,`Tokens customizáveis`),Kg(),Qc(52,`blockquote`)(53,`p`),Sk(54,`Para maiores informações, acesse o guia `),Qc(55,`a`,8),Sk(56,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(57,`.`),Kg()(),Qc(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),Sk(62,`Propriedade`),Kg(),Qc(63,`th`),Sk(64,`Descrição`),Kg(),Qc(65,`th`),Sk(66,`Valor Padrão`),Kg()()(),Qc(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),Sk(71,`Header`),Kg()(),vu(72,`td`)(73,`td`),Kg(),Qc(74,`tr`)(75,`td`)(76,`code`),Sk(77,`--padding`),Kg()(),Qc(78,`td`),Sk(79,`Espaçamento do header`),Kg(),Qc(80,`td`)(81,`code`),Sk(82,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--gap`),Kg()(),Qc(87,`td`),Sk(88,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--spacing-md)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--gap-actions`),Kg()(),Qc(96,`td`),Sk(97,`Espaçamento entre as ações`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--spacing-xs)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--font-family`),Kg()(),Qc(105,`td`),Sk(106,`Família tipográfica do título`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--font-family-theme)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`strong`),Sk(113,`Content`),Kg()(),vu(114,`td`)(115,`td`),Kg(),Qc(116,`tr`)(117,`td`)(118,`code`),Sk(119,`--padding-content`),Kg()(),Qc(120,`td`),Sk(121,`Espaçamento do conteúdo`),Kg(),Qc(122,`td`)(123,`code`),Sk(124,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(125,`div`,9)(126,`h4`,10),Sk(127,`Seletor`),Kg(),Qc(128,`pre`,11),Sk(129,`<po-page-list
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
`),Kg()(),Qc(130,`h4`,12),Sk(131,`Propriedades`),Kg(),Qc(132,`table`,13)(133,`tr`,14)(134,`th`,15),Sk(135,`Nome`),Kg(),Qc(136,`th`,15),Sk(137,`Tipo`),Kg(),Qc(138,`th`,15),Sk(139,`Padrão`),Kg(),Qc(140,`th`,15),Sk(141,`Descrição`),Kg()(),Qc(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),Sk(146,` p-actions`),vu(147,`br`),Kg()()(),Qc(148,`td`,20)(149,`code`,21),Sk(150,`Array<PoPageAction>`),Kg()(),Qc(151,`td`,22),Sk(152,`-`),Kg(),Qc(153,`td`,23)(154,`em`)(155,`strong`),Sk(156,`(opcional)`),Kg()(),Qc(157,`p`),Sk(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Qc(159,`code`),Sk(160,`PoPageAction`),Kg(),Sk(161,`.`),Kg()()(),Qc(162,`tr`,24)(163,`td`,17)(164,`div`,18)(165,`span`,19),Sk(166,` p-breadcrumb`),vu(167,`br`),Kg()()(),Qc(168,`td`,20)(169,`code`,25),Sk(170,`PoBreadcrumb`),Kg()(),Qc(171,`td`,22),Sk(172,`-`),Kg(),Qc(173,`td`,23)(174,`em`)(175,`strong`),Sk(176,`(opcional)`),Kg()(),Qc(177,`p`),Sk(178,`Objeto que implementa as propriedades da interface `),Qc(179,`code`),Sk(180,`PoBreadcrumb`),Kg(),Sk(181,`.`),Kg()()(),Qc(182,`tr`,26)(183,`td`,17)(184,`div`,18)(185,`span`,19),Sk(186,` p-components-size`),vu(187,`br`),Kg()()(),Qc(188,`td`,20)(189,`code`,27),Sk(190,`string`),Kg()(),Qc(191,`td`,22)(192,`p`)(193,`code`),Sk(194,`medium`),Kg()()(),Qc(195,`td`,23)(196,`em`)(197,`strong`),Sk(198,`(opcional)`),Kg()(),Qc(199,`p`),Sk(200,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(201,`ul`)(202,`li`)(203,`code`),Sk(204,`small`),Kg(),Sk(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(206,`li`)(207,`code`),Sk(208,`medium`),Kg(),Sk(209,`: aplica a medida medium de cada componente.`),Kg()(),Qc(210,`blockquote`)(211,`p`),Sk(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(213,`code`),Sk(214,`medium`),Kg(),Sk(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(216,`a`,28),Sk(217,`po-theme`),Kg(),Sk(218,`.`),Kg()()()(),Qc(219,`tr`,29)(220,`td`,17)(221,`div`,18)(222,`span`,19),Sk(223,` p-disclaimer-group`),vu(224,`br`),Kg()()(),Qc(225,`td`,20)(226,`code`,30),Sk(227,`PoDisclaimerGroup`),Kg()(),Qc(228,`td`,22),Sk(229,`-`),Kg(),Qc(230,`td`,23)(231,`em`)(232,`strong`),Sk(233,`(opcional)`),Kg()(),Qc(234,`p`),Sk(235,`Objeto que implementa as propriedades da interface `),Qc(236,`code`),Sk(237,`PoDisclaimerGroup`),Kg(),Sk(238,`.`),Kg()()(),Qc(239,`tr`,31)(240,`td`,17)(241,`div`,18)(242,`span`,19),Sk(243,` p-filter`),vu(244,`br`),Kg()()(),Qc(245,`td`,20)(246,`code`,32),Sk(247,`PoPageFilter`),Kg()(),Qc(248,`td`,22),Sk(249,`-`),Kg(),Qc(250,`td`,23)(251,`p`),Sk(252,`Objeto que implementa as propriedades da interface `),Qc(253,`code`),Sk(254,`PoPageFilter`),Kg(),Sk(255,`.`),Kg()()(),Qc(256,`tr`,33)(257,`td`,17)(258,`div`,18)(259,`span`,19),Sk(260,` p-literals`),vu(261,`br`),Kg()()(),Qc(262,`td`,20)(263,`code`,34),Sk(264,`PoPageListLiterals`),Kg()(),Qc(265,`td`,22),Sk(266,`-`),Kg(),Qc(267,`td`,23)(268,`em`)(269,`strong`),Sk(270,`(opcional)`),Kg()(),Qc(271,`p`),Sk(272,`Objeto com as literais usadas no `),Qc(273,`code`),Sk(274,`po-page-list`),Kg(),Sk(275,`.`),Kg(),Qc(276,`p`),Sk(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(278,`pre`)(279,`code`),Sk(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),Kg()(),Qc(281,`p`),Sk(282,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(283,`pre`)(284,`code`),Sk(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),Kg()(),Qc(286,`p`),Sk(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(288,`pre`)(289,`code`),Sk(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),Kg()(),Qc(291,`blockquote`)(292,`p`),Sk(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Qc(294,`a`,35)(295,`code`),Sk(296,`PoI18nService`),Kg()(),Sk(297,` ou `),Qc(298,`em`),Sk(299,`browser`),Kg(),Sk(300,`.`),Kg()()()(),Qc(301,`tr`,36)(302,`td`,17)(303,`div`,18)(304,`span`,19),Sk(305,` p-quick-search-value`),vu(306,`br`),Kg()()(),Qc(307,`td`,20)(308,`code`,27),Sk(309,`string`),Kg()(),Qc(310,`td`,22),Sk(311,`-`),Kg(),Qc(312,`td`,23)(313,`em`)(314,`strong`),Sk(315,`(opcional)`),Kg()(),Qc(316,`p`),Sk(317,`Valor padrão na busca rápida ao inicializar o componente`),Kg()()(),Qc(318,`tr`,37)(319,`td`,17)(320,`div`,18)(321,`span`,19),Sk(322,` p-subtitle`),vu(323,`br`),Kg()()(),Qc(324,`td`,20)(325,`code`,27),Sk(326,`string`),Kg()(),Qc(327,`td`,22),Sk(328,`-`),Kg(),Qc(329,`td`,23)(330,`em`)(331,`strong`),Sk(332,`(opcional)`),Kg()(),Qc(333,`p`),Sk(334,`Subtitulo do Header da página.`),Kg(),Qc(335,`p`),Sk(336,`Suporta formatação básica com as tags `),Qc(337,`code`),Sk(338,`<b>`),Kg(),Sk(339,` (negrito), `),Qc(340,`code`),Sk(341,`<strong>`),Kg(),Sk(342,` (negrito), `),Qc(343,`code`),Sk(344,`<i>`),Kg(),Sk(345,` (itálico), `),Qc(346,`code`),Sk(347,`<em>`),Kg(),Sk(348,` (it\xE1lico) e
`),Qc(349,`code`),Sk(350,`<u>`),Kg(),Sk(351,` (sublinhado).`),Kg(),Qc(352,`p`),Sk(353,`Exemplo:`),Kg(),Qc(354,`pre`)(355,`code`,38),Sk(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),Kg()(),Qc(357,`blockquote`)(358,`p`),Sk(359,`Requer que `),Qc(360,`code`),Sk(361,`p-title`),Kg(),Sk(362,` esteja definido.`),Kg()()()(),Qc(363,`tr`,39)(364,`td`,17)(365,`div`,18)(366,`span`,19),Sk(367,` p-title`),vu(368,`br`),Kg()()(),Qc(369,`td`,20)(370,`code`,27),Sk(371,`string`),Kg()(),Qc(372,`td`,22),Sk(373,`-`),Kg(),Qc(374,`td`,23)(375,`p`),Sk(376,`Título da página.`),Kg()()()(),Qc(377,`h3`,12),Sk(378,`Métodos`),Kg(),Qc(379,`table`,40)(380,`tr`,41)(381,`th`,42)(382,`div`,18)(383,`h4`)(384,`span`,19),Sk(385,` clearInputSearch `),Kg()()()()(),Qc(386,`tr`,23)(387,`td`,23)(388,`p`),Sk(389,`Limpa o campo de pesquisa.`),Kg()()()(),vu(390,`br`),Qc(391,`h3`),Sk(392,`Interfaces`),Kg(),Qc(393,`h4`,43)(394,`code`,5),Sk(395,`PoBreadcrumbItem`),Kg()(),Qc(396,`div`,2)(397,`p`),Sk(398,`Interface que define cada item do componente `),Qc(399,`strong`),Sk(400,`po-breadcrumb`),Kg(),Sk(401,`.`),Kg()(),Qc(402,`h4`,12),Sk(403,`Propriedades`),Kg(),Qc(404,`table`,13)(405,`tr`,14)(406,`th`,15),Sk(407,`Nome`),Kg(),Qc(408,`th`,15),Sk(409,`Tipo`),Kg(),Qc(410,`th`,15),Sk(411,`Descrição`),Kg()(),Qc(412,`tr`,44)(413,`td`,17)(414,`div`,18)(415,`span`,19),Sk(416,` action`),vu(417,`br`),Kg()()(),Qc(418,`td`,20)(419,`code`,45),Sk(420,`Function`),Kg()(),Qc(421,`td`,23)(422,`em`)(423,`strong`),Sk(424,`(opcional)`),Kg()(),Qc(425,`p`),Sk(426,`Ação executada ao clicar no item.`),Kg(),Qc(427,`blockquote`)(428,`p`),Sk(429,`A função atribuída a esta propriedade receberá o `),Qc(430,`em`),Sk(431,`label`),Kg(),Sk(432,` do item como parâmetro para execução.`),Kg()()()(),Qc(433,`tr`,46)(434,`td`,17)(435,`div`,18)(436,`span`,19),Sk(437,` label`),vu(438,`br`),Kg()()(),Qc(439,`td`,20)(440,`code`,27),Sk(441,`string`),Kg()(),Qc(442,`td`,23)(443,`p`),Sk(444,`Rótulo do item.`),Kg()()(),Qc(445,`tr`,47)(446,`td`,17)(447,`div`,18)(448,`span`,19),Sk(449,` link`),vu(450,`br`),Kg()()(),Qc(451,`td`,20)(452,`code`,27),Sk(453,`string`),Kg()(),Qc(454,`td`,23)(455,`em`)(456,`strong`),Sk(457,`(opcional)`),Kg()(),Qc(458,`p`),Sk(459,`Url do item.`),Kg(),Qc(460,`blockquote`)(461,`p`),Sk(462,`Caso o item também contenha uma `),Qc(463,`em`),Sk(464,`action`),Kg(),Sk(465,` definida, a preferência de execução será do `),Qc(466,`em`),Sk(467,`link`),Kg(),Sk(468,`.`),Kg()(),Qc(469,`blockquote`)(470,`p`),Sk(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Qc(472,`strong`)(473,`a`,48),Sk(474,`Veja um exemplo de como criar rotas aqui`),Kg()(),Sk(475,`.`),Kg()(),Qc(476,`blockquote`)(477,`p`),Sk(478,`Esta propriedade é necessária para que a propriedade `),Qc(479,`code`),Sk(480,`p-favorite-service`),Kg(),Sk(481,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Qc(482,`h4`,49)(483,`code`,5),Sk(484,`PoBreadcrumb`),Kg()(),Qc(485,`div`,2)(486,`p`),Sk(487,`Interface que define o `),Qc(488,`code`),Sk(489,`po-breadcrumb`),Kg(),Sk(490,`.`),Kg()(),Qc(491,`h4`,12),Sk(492,`Propriedades`),Kg(),Qc(493,`table`,13)(494,`tr`,14)(495,`th`,15),Sk(496,`Nome`),Kg(),Qc(497,`th`,15),Sk(498,`Tipo`),Kg(),Qc(499,`th`,15),Sk(500,`Descrição`),Kg()(),Qc(501,`tr`,50)(502,`td`,17)(503,`div`,18)(504,`span`,19),Sk(505,` favorite`),vu(506,`br`),Kg()()(),Qc(507,`td`,20)(508,`code`,27),Sk(509,`string`),Kg()(),Qc(510,`td`,23)(511,`em`)(512,`strong`),Sk(513,`(opcional)`),Kg()(),Qc(514,`p`),Sk(515,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Qc(516,`blockquote`)(517,`p`),Sk(518,`Para maiores informações verificar a propriedade `),Qc(519,`code`),Sk(520,`p-favorite-service`),Kg(),Sk(521,` do componente `),Qc(522,`code`),Sk(523,`po-breadcrumb`),Kg(),Sk(524,`.`),Kg()()()(),Qc(525,`tr`,51)(526,`td`,17)(527,`div`,18)(528,`span`,19),Sk(529,` items`),vu(530,`br`),Kg()()(),Qc(531,`td`,20)(532,`code`,52),Sk(533,`Array<PoBreadcrumbItem>`),Kg()(),Qc(534,`td`,23)(535,`p`),Sk(536,`Lista de itens do `),Qc(537,`em`),Sk(538,`breadcrumb`),Kg(),Sk(539,`.`),Kg(),Qc(540,`p`)(541,`strong`),Sk(542,`Exemplo:`),Kg()(),Qc(543,`pre`)(544,`code`),Sk(545,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Qc(546,`tr`,53)(547,`td`,17)(548,`div`,18)(549,`span`,19),Sk(550,` params`),vu(551,`br`),Kg()()(),Qc(552,`td`,20)(553,`code`,54),Sk(554,`object`),Kg()(),Qc(555,`td`,23)(556,`em`)(557,`strong`),Sk(558,`(opcional)`),Kg()(),Qc(559,`p`),Sk(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Qc(561,`h4`,55)(562,`code`,5),Sk(563,`PoDisclaimer`),Kg()(),Qc(564,`div`,2)(565,`p`),Sk(566,`Interface que representa o objeto `),Qc(567,`code`),Sk(568,`po-disclaimer`),Kg(),Sk(569,`.`),Kg()(),Qc(570,`h4`,12),Sk(571,`Propriedades`),Kg(),Qc(572,`table`,13)(573,`tr`,14)(574,`th`,15),Sk(575,`Nome`),Kg(),Qc(576,`th`,15),Sk(577,`Tipo`),Kg(),Qc(578,`th`,15),Sk(579,`Descrição`),Kg()(),Qc(580,`tr`,56)(581,`td`,17)(582,`div`,18)(583,`span`,19),Sk(584,` hideClose`),vu(585,`br`),Kg()()(),Qc(586,`td`,20)(587,`code`,57),Sk(588,`boolean`),Kg()(),Qc(589,`td`,23)(590,`em`)(591,`strong`),Sk(592,`(opcional)`),Kg()(),Qc(593,`p`),Sk(594,`Se verdadeiro, oculta o botão para fechar o `),Qc(595,`em`),Sk(596,`disclaimer`),Kg(),Sk(597,`.`),Kg()()(),Qc(598,`tr`,58)(599,`td`,17)(600,`div`,18)(601,`span`,19),Sk(602,` label`),vu(603,`br`),Kg()()(),Qc(604,`td`,20)(605,`code`,27),Sk(606,`string`),Kg()(),Qc(607,`td`,23)(608,`em`)(609,`strong`),Sk(610,`(opcional)`),Kg()(),Qc(611,`p`),Sk(612,`Texto de exibição do objeto.`),Kg()()(),Qc(613,`tr`,59)(614,`td`,17)(615,`div`,18)(616,`span`,19),Sk(617,` property`),vu(618,`br`),Kg()()(),Qc(619,`td`,20)(620,`code`,27),Sk(621,`string`),Kg()(),Qc(622,`td`,23)(623,`em`)(624,`strong`),Sk(625,`(opcional)`),Kg()(),Qc(626,`p`),Sk(627,`Nome da propriedade vinculada ao objeto `),Qc(628,`em`),Sk(629,`disclaimer`),Kg(),Sk(630,`.`),Kg()()(),Qc(631,`tr`,60)(632,`td`,17)(633,`div`,18)(634,`span`,19),Sk(635,` value`),vu(636,`br`),Kg()()(),Qc(637,`td`,20)(638,`code`,61),Sk(639,`any`),Kg()(),Qc(640,`td`,23)(641,`p`),Sk(642,`Valor do objeto.`),Kg()()()(),Qc(643,`h4`,62)(644,`code`,5),Sk(645,`PoDisclaimerGroupRemoveAction`),Kg()(),Qc(646,`div`,2)(647,`p`),Sk(648,`Estrutura do objeto representando o estado dos `),Qc(649,`em`),Sk(650,`disclaimers`),Kg(),Sk(651,` após a remoção.`),Kg()(),Qc(652,`h4`,12),Sk(653,`Propriedades`),Kg(),Qc(654,`table`,13)(655,`tr`,14)(656,`th`,15),Sk(657,`Nome`),Kg(),Qc(658,`th`,15),Sk(659,`Tipo`),Kg(),Qc(660,`th`,15),Sk(661,`Descrição`),Kg()(),Qc(662,`tr`,63)(663,`td`,17)(664,`div`,18)(665,`span`,19),Sk(666,` currentDisclaimers`),vu(667,`br`),Kg()()(),Qc(668,`td`,20)(669,`code`,64),Sk(670,`Array<PoDisclaimer>`),Kg()(),Qc(671,`td`,23)(672,`p`),Sk(673,`Lista com os `),Qc(674,`em`),Sk(675,`disclaimers`),Kg(),Sk(676,` atuais (restantes).`),Kg()()(),Qc(677,`tr`,65)(678,`td`,17)(679,`div`,18)(680,`span`,19),Sk(681,` removedDisclaimer`),vu(682,`br`),Kg()()(),Qc(683,`td`,20)(684,`code`,66),Sk(685,`PoDisclaimer`),Kg()(),Qc(686,`td`,23)(687,`p`)(688,`em`),Sk(689,`Disclaimer`),Kg(),Sk(690,` que foi removido.`),Kg()()()(),Qc(691,`h4`,67)(692,`code`,5),Sk(693,`PoDisclaimerGroup`),Kg()(),Qc(694,`div`,2)(695,`p`),Sk(696,`Interface que representa o objeto `),Qc(697,`code`),Sk(698,`po-disclaimer-group`),Kg(),Sk(699,`.`),Kg()(),Qc(700,`h4`,12),Sk(701,`Propriedades`),Kg(),Qc(702,`table`,13)(703,`tr`,14)(704,`th`,15),Sk(705,`Nome`),Kg(),Qc(706,`th`,15),Sk(707,`Tipo`),Kg(),Qc(708,`th`,15),Sk(709,`Descrição`),Kg()(),Qc(710,`tr`,68)(711,`td`,17)(712,`div`,18)(713,`span`,19),Sk(714,` change`),vu(715,`br`),Kg()()(),Qc(716,`td`,20)(717,`code`,45),Sk(718,`Function`),Kg()(),Qc(719,`td`,23)(720,`em`)(721,`strong`),Sk(722,`(opcional)`),Kg()(),Qc(723,`p`),Sk(724,`Função que será disparada quando a lista de `),Qc(725,`em`),Sk(726,`disclaimers`),Kg(),Sk(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Qc(728,`em`),Sk(729,`disclaimers`),Kg(),Sk(730,`.`),Kg()()(),Qc(731,`tr`,69)(732,`td`,17)(733,`div`,18)(734,`span`,19),Sk(735,` disclaimers`),vu(736,`br`),Kg()()(),Qc(737,`td`,20)(738,`code`,64),Sk(739,`Array<PoDisclaimer>`),Kg()(),Qc(740,`td`,23)(741,`p`),Sk(742,`Lista de `),Qc(743,`em`),Sk(744,`disclaimers`),Kg(),Sk(745,`.`),Kg(),Qc(746,`p`),Sk(747,`Exemplo:`),Kg(),Qc(748,`pre`)(749,`code`),Sk(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),Kg()(),Qc(751,`p`),Sk(752,`Para que a lista de `),Qc(753,`em`),Sk(754,`disclaimers`),Kg(),Sk(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Qc(756,`code`),Sk(757,`PoDisclaimer`),Kg(),Sk(758,`.`),Kg(),Qc(759,`p`),Sk(760,`Exemplo:`),Kg(),Qc(761,`pre`)(762,`code`),Sk(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),Kg()()()(),Qc(764,`tr`,70)(765,`td`,17)(766,`div`,18)(767,`span`,19),Sk(768,` hideRemoveAll`),vu(769,`br`),Kg()()(),Qc(770,`td`,20)(771,`code`,57),Sk(772,`boolean`),Kg()(),Qc(773,`td`,23)(774,`em`)(775,`strong`),Sk(776,`(opcional)`),Kg()(),Qc(777,`p`),Sk(778,`Oculta o botão para remover todos os `),Qc(779,`em`),Sk(780,`disclaimers`),Kg(),Sk(781,` do grupo.`),Kg(),Qc(782,`blockquote`)(783,`p`),Sk(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Qc(785,`em`),Sk(786,`disclaimers`),Kg(),Sk(787,` com a opção `),Qc(788,`code`),Sk(789,`hideClose`),Kg(),Sk(790,` habilitada.`),Kg()()()(),Qc(791,`tr`,71)(792,`td`,17)(793,`div`,18)(794,`span`,19),Sk(795,` remove`),vu(796,`br`),Kg()()(),Qc(797,`td`,20)(798,`code`,45),Sk(799,`Function`),Kg()(),Qc(800,`td`,23)(801,`em`)(802,`strong`),Sk(803,`(opcional)`),Kg()(),Qc(804,`p`),Sk(805,`Função que será disparada quando um `),Qc(806,`em`),Sk(807,`disclaimer`),Kg(),Sk(808,` for removido da lista de
`),Qc(809,`em`),Sk(810,`disclaimers`),Kg(),Sk(811,` pelo usuário.`),Kg(),Qc(812,`p`),Sk(813,`Recebe como parâmetro um objeto conforme a interface `),Qc(814,`code`),Sk(815,`PoDisclaimerGroupRemoveAction`),Kg(),Sk(816,`.`),Kg()()(),Qc(817,`tr`,72)(818,`td`,17)(819,`div`,18)(820,`span`,19),Sk(821,` removeAll`),vu(822,`br`),Kg()()(),Qc(823,`td`,20)(824,`code`,45),Sk(825,`Function`),Kg()(),Qc(826,`td`,23)(827,`em`)(828,`strong`),Sk(829,`(opcional)`),Kg()(),Qc(830,`p`),Sk(831,`Função que será disparada quando todos os `),Qc(832,`em`),Sk(833,`disclaimers`),Kg(),Sk(834,` forem removidos da lista de `),Qc(835,`em`),Sk(836,`disclaimers`),Kg(),Sk(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Kg(),Qc(838,`p`),Sk(839,`Recebe como parâmetro uma lista contendo todos os `),Qc(840,`code`),Sk(841,`disclaimers`),Kg(),Sk(842,` removidos.`),Kg()()(),Qc(843,`tr`,73)(844,`td`,17)(845,`div`,18)(846,`span`,19),Sk(847,` title`),vu(848,`br`),Kg()()(),Qc(849,`td`,20)(850,`code`,27),Sk(851,`string`),Kg()(),Qc(852,`td`,23)(853,`em`)(854,`strong`),Sk(855,`(opcional)`),Kg()(),Qc(856,`p`),Sk(857,`Título do grupo de `),Qc(858,`em`),Sk(859,`disclaimers`),Kg(),Sk(860,`.`),Kg()()()(),Qc(861,`h4`,74)(862,`code`,5),Sk(863,`PoPageAction`),Kg()(),Qc(864,`div`,2)(865,`p`),Sk(866,`Interface para as ações dos componentes `),Qc(867,`code`),Sk(868,`po-page-default`),Kg(),Sk(869,` e `),Qc(870,`code`),Sk(871,`po-page-list`),Kg(),Sk(872,`.`),Kg(),Qc(873,`p`),Sk(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Qc(875,`em`),Sk(876,`dropdown`),Kg(),Sk(877,`,
conforme o `),Qc(878,`code`),Sk(879,`PoPageActionsLayout`),Kg(),Sk(880,` e o tamanho da tela.`),Kg(),Qc(881,`blockquote`)(882,`p`),Sk(883,`As propriedades `),Qc(884,`code`),Sk(885,`separator`),Kg(),Sk(886,`, `),Qc(887,`code`),Sk(888,`selected`),Kg(),Sk(889,` e `),Qc(890,`code`),Sk(891,`subItems`),Kg(),Sk(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Qc(893,`em`),Sk(894,`dropdown`),Kg(),Sk(895,`.`),Kg()()(),Qc(896,`h4`,12),Sk(897,`Propriedades`),Kg(),Qc(898,`table`,13)(899,`tr`,14)(900,`th`,15),Sk(901,`Nome`),Kg(),Qc(902,`th`,15),Sk(903,`Tipo`),Kg(),Qc(904,`th`,15),Sk(905,`Descrição`),Kg()(),Qc(906,`tr`,75)(907,`td`,17)(908,`div`,18)(909,`span`,19),Sk(910,` action`),vu(911,`br`),Kg()()(),Qc(912,`td`,20)(913,`code`,45),Sk(914,`Function`),Kg()(),Qc(915,`td`,23)(916,`em`)(917,`strong`),Sk(918,`(opcional)`),Kg()(),Qc(919,`p`),Sk(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(921,`p`),Sk(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(923,`code`),Sk(924,`subItems`),Kg(),Sk(925,`.`),Kg(),Qc(926,`blockquote`)(927,`p`),Sk(928,`Para que a função seja executada no contexto do componente, utilize `),Qc(929,`em`),Sk(930,`bind`),Kg(),Sk(931,`:
`),Qc(932,`code`),Sk(933,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(934,`tr`,76)(935,`td`,17)(936,`div`,18)(937,`span`,19),Sk(938,` disabled`),vu(939,`br`),Kg()()(),Qc(940,`td`,20)(941,`code`,57),Sk(942,`boolean `),Kg(),Qc(943,`code`,45),Sk(944,` Function`),Kg()(),Qc(945,`td`,23)(946,`em`)(947,`strong`),Sk(948,`(opcional)`),Kg()(),Qc(949,`p`),Sk(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(951,`tr`,77)(952,`td`,17)(953,`div`,18)(954,`span`,19),Sk(955,` icon`),vu(956,`br`),Kg()()(),Qc(957,`td`,20)(958,`code`,27),Sk(959,`string `),Kg(),Qc(960,`code`,78),Sk(961,` TemplateRef<void>`),Kg()(),Qc(962,`td`,23)(963,`em`)(964,`strong`),Sk(965,`(opcional)`),Kg()(),Qc(966,`p`),Sk(967,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(968,`p`),Sk(969,`Aceita ícones da `),Qc(970,`a`,6),Sk(971,`Biblioteca de ícones`),Kg(),Sk(972,`, fontes externas (ex: Font Awesome)
ou um `),Qc(973,`code`),Sk(974,`TemplateRef`),Kg(),Sk(975,` para ícones customizados.`),Kg(),Qc(976,`pre`)(977,`code`),Sk(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(979,`tr`,79)(980,`td`,17)(981,`div`,18)(982,`span`,19),Sk(983,` kind`),vu(984,`br`),Kg()()(),Qc(985,`td`,20)(986,`code`,27),Sk(987,`string`),Kg()(),Qc(988,`td`,23)(989,`em`)(990,`strong`),Sk(991,`(opcional)`),Kg()(),Qc(992,`p`),Sk(993,`Define o estilo visual da ação quando exibida como botão fora do `),Qc(994,`em`),Sk(995,`dropdown`),Kg(),Sk(996,`.`),Kg(),Qc(997,`p`),Sk(998,`Valores permitidos:`),Kg(),Qc(999,`ul`)(1e3,`li`)(1001,`code`),Sk(1002,`primary`),Kg(),Sk(1003,`: botão com maior destaque visual.`),Kg(),Qc(1004,`li`)(1005,`code`),Sk(1006,`secondary`),Kg(),Sk(1007,`: estilo padrão.`),Kg()(),Qc(1008,`blockquote`)(1009,`p`),Sk(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Kg()(),Qc(1011,`blockquote`)(1012,`p`),Sk(1013,`Somente uma ação pode ter `),Qc(1014,`code`),Sk(1015,`kind`),Kg(),Sk(1016,` igual a `),Qc(1017,`code`),Sk(1018,`primary`),Kg(),Sk(1019,`. Caso mais de uma defina `),Qc(1020,`code`),Sk(1021,`primary`),Kg(),Sk(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Qc(1023,`code`),Sk(1024,`secondary`),Kg(),Sk(1025,`.`),Kg()(),Qc(1026,`blockquote`)(1027,`p`),Sk(1028,`Quando não definido, o estilo é determinado pelo `),Qc(1029,`code`),Sk(1030,`PoPageActionsLayout`),Kg(),Sk(1031,`.`),Kg()()()(),Qc(1032,`tr`,80)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),Sk(1036,` label`),vu(1037,`br`),Kg()()(),Qc(1038,`td`,20)(1039,`code`,27),Sk(1040,`string`),Kg()(),Qc(1041,`td`,23)(1042,`p`),Sk(1043,`Rótulo da ação.`),Kg(),Qc(1044,`p`),Sk(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(1046,`code`),Sk(1047,`subItems`),Kg(),Sk(1048,`.`),Kg()()(),Qc(1049,`tr`,81)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),Sk(1053,` selected`),vu(1054,`br`),Kg()()(),Qc(1055,`td`,20)(1056,`code`,57),Sk(1057,`boolean`),Kg()(),Qc(1058,`td`,23)(1059,`em`)(1060,`strong`),Sk(1061,`(opcional)`),Kg()(),Qc(1062,`p`),Sk(1063,`Define se a ação está selecionada.`),Kg()()(),Qc(1064,`tr`,82)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),Sk(1068,` separator`),vu(1069,`br`),Kg()()(),Qc(1070,`td`,20)(1071,`code`,57),Sk(1072,`boolean`),Kg()(),Qc(1073,`td`,23)(1074,`em`)(1075,`strong`),Sk(1076,`(opcional)`),Kg()(),Qc(1077,`p`),Sk(1078,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(1079,`tr`,83)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),Sk(1083,` subItems`),vu(1084,`br`),Kg()()(),Qc(1085,`td`,20)(1086,`code`,84),Sk(1087,`Array<PoPopupAction>`),Kg()(),Qc(1088,`td`,23)(1089,`em`)(1090,`strong`),Sk(1091,`(opcional)`),Kg()(),Qc(1092,`p`),Sk(1093,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(1094,`pre`)(1095,`code`),Sk(1096,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(1097,`p`),Sk(1098,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(1099,`blockquote`)(1100,`p`),Sk(1101,`As propriedades `),Qc(1102,`code`),Sk(1103,`disabled`),Kg(),Sk(1104,`, `),Qc(1105,`code`),Sk(1106,`type`),Kg(),Sk(1107,` e `),Qc(1108,`code`),Sk(1109,`visible`),Kg(),Sk(1110,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(1111,`blockquote`)(1112,`p`),Sk(1113,`Quando `),Qc(1114,`code`),Sk(1115,`url`),Kg(),Sk(1116,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(1117,`blockquote`)(1118,`p`),Sk(1119,`Em subníveis aninhados, o `),Qc(1120,`code`),Sk(1121,`icon`),Kg(),Sk(1122,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(1123,`tr`,85)(1124,`td`,17)(1125,`div`,18)(1126,`span`,19),Sk(1127,` subItemsLazy`),vu(1128,`br`),Kg()()(),Qc(1129,`td`,20)(1130,`code`,86),Sk(1131,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(1132,`td`,23)(1133,`em`)(1134,`strong`),Sk(1135,`(opcional)`),Kg()(),Qc(1136,`p`),Sk(1137,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(1138,`p`),Sk(1139,`Recebe o item agrupador e retorna um `),Qc(1140,`code`),Sk(1141,`Observable<Array<PoPopupAction>>`),Kg(),Sk(1142,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(1143,`strong`),Sk(1144,`apenas`),Kg(),Sk(1145,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(1146,`code`),Sk(1147,`po-skeleton`),Kg(),Sk(1148,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(1149,`pre`)(1150,`code`),Sk(1151,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(1152,`blockquote`)(1153,`p`),Sk(1154,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(1155,`p`),Sk(1156,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(1157,`tr`,87)(1158,`td`,17)(1159,`div`,18)(1160,`span`,19),Sk(1161,` type`),vu(1162,`br`),Kg()()(),Qc(1163,`td`,20)(1164,`code`,27),Sk(1165,`string`),Kg()(),Qc(1166,`td`,23)(1167,`em`)(1168,`strong`),Sk(1169,`(opcional)`),Kg()(),Qc(1170,`p`),Sk(1171,`Define a cor do item.`),Kg(),Qc(1172,`p`),Sk(1173,`Valores válidos:`),Kg(),Qc(1174,`ul`)(1175,`li`)(1176,`code`),Sk(1177,`default`),Kg()(),Qc(1178,`li`)(1179,`code`),Sk(1180,`danger`),Kg()()()()(),Qc(1181,`tr`,88)(1182,`td`,17)(1183,`div`,18)(1184,`span`,19),Sk(1185,` url`),vu(1186,`br`),Kg()()(),Qc(1187,`td`,20)(1188,`code`,27),Sk(1189,`string`),Kg()(),Qc(1190,`td`,23)(1191,`em`)(1192,`strong`),Sk(1193,`(opcional)`),Kg()(),Qc(1194,`p`),Sk(1195,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(1196,`p`),Sk(1197,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(1198,`code`),Sk(1199,`url`),Kg(),Sk(1200,` é informada em um agrupador, o clique `),Qc(1201,`strong`),Sk(1202,`não abrirá os subitens`),Kg(),Sk(1203,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(1204,`blockquote`)(1205,`p`),Sk(1206,`Quando informada, tem prioridade sobre a propriedade `),Qc(1207,`code`),Sk(1208,`action`),Kg(),Sk(1209,`.`),Kg()()()(),Qc(1210,`tr`,89)(1211,`td`,17)(1212,`div`,18)(1213,`span`,19),Sk(1214,` visible`),vu(1215,`br`),Kg()()(),Qc(1216,`td`,20)(1217,`code`,57),Sk(1218,`boolean `),Kg(),Qc(1219,`code`,45),Sk(1220,` Function`),Kg()(),Qc(1221,`td`,23)(1222,`em`)(1223,`strong`),Sk(1224,`(opcional)`),Kg()(),Qc(1225,`p`),Sk(1226,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(1227,`h4`,90)(1228,`code`,5),Sk(1229,`PoPageFilter`),Kg()(),Qc(1230,`div`,2)(1231,`p`),Sk(1232,`Interface para o atributo `),Qc(1233,`code`),Sk(1234,`filter`),Kg(),Sk(1235,` do componente `),Qc(1236,`code`),Sk(1237,`po-page-list`),Kg(),Sk(1238,`.`),Kg()(),Qc(1239,`h4`,12),Sk(1240,`Propriedades`),Kg(),Qc(1241,`table`,13)(1242,`tr`,14)(1243,`th`,15),Sk(1244,`Nome`),Kg(),Qc(1245,`th`,15),Sk(1246,`Tipo`),Kg(),Qc(1247,`th`,15),Sk(1248,`Descrição`),Kg()(),Qc(1249,`tr`,91)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),Sk(1253,` action`),vu(1254,`br`),Kg()()(),Qc(1255,`td`,20)(1256,`code`,45),Sk(1257,`Function`),Kg()(),Qc(1258,`td`,23)(1259,`em`)(1260,`strong`),Sk(1261,`(opcional)`),Kg()(),Qc(1262,`p`),Sk(1263,`Ação a ser executada.`),Kg()()(),Qc(1264,`tr`,92)(1265,`td`,17)(1266,`div`,18)(1267,`span`,19),Sk(1268,` advancedAction`),vu(1269,`br`),Kg()()(),Qc(1270,`td`,20)(1271,`code`,45),Sk(1272,`Function`),Kg()(),Qc(1273,`td`,23)(1274,`em`)(1275,`strong`),Sk(1276,`(opcional)`),Kg()(),Qc(1277,`p`),Sk(1278,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Qc(1279,`em`),Sk(1280,`click`),Kg(),Sk(1281,` através do rótulo `),Qc(1282,`strong`),Sk(1283,`Busca Avançada`),Kg(),Sk(1284,`.`),Kg()()(),Qc(1285,`tr`,93)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),Sk(1289,` placeholder`),vu(1290,`br`),Kg()()(),Qc(1291,`td`,20)(1292,`code`,27),Sk(1293,`string`),Kg()(),Qc(1294,`td`,23)(1295,`em`)(1296,`strong`),Sk(1297,`(opcional)`),Kg()(),Qc(1298,`p`),Sk(1299,`Texto de instrução exibido dentro do campo de filtro.`),Kg()()(),Qc(1300,`tr`,94)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),Sk(1304,` width`),vu(1305,`br`),Kg()()(),Qc(1306,`td`,20)(1307,`code`,95),Sk(1308,`number`),Kg()(),Qc(1309,`td`,23)(1310,`em`)(1311,`strong`),Sk(1312,`(opcional)`),Kg()(),Qc(1313,`p`),Sk(1314,`Tamanho do filtro em tela, utilizando o `),Qc(1315,`em`),Sk(1316,`Grid System`),Kg(),Sk(1317,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),Kg()()()(),Qc(1318,`h4`,96)(1319,`code`,5),Sk(1320,`PoPageListLiterals`),Kg()(),Qc(1321,`div`,2)(1322,`p`),Sk(1323,`Interface para definição das literais usadas no `),Qc(1324,`code`),Sk(1325,`po-page-list`),Kg(),Sk(1326,`.`),Kg()(),Qc(1327,`h4`,12),Sk(1328,`Propriedades`),Kg(),Qc(1329,`table`,13)(1330,`tr`,14)(1331,`th`,15),Sk(1332,`Nome`),Kg(),Qc(1333,`th`,15),Sk(1334,`Tipo`),Kg(),Qc(1335,`th`,15),Sk(1336,`Descrição`),Kg()(),Qc(1337,`tr`,97)(1338,`td`,17)(1339,`div`,18)(1340,`span`,19),Sk(1341,` otherActions`),vu(1342,`br`),Kg()()(),Qc(1343,`td`,20)(1344,`code`,27),Sk(1345,`string`),Kg()(),Qc(1346,`td`,23)(1347,`em`)(1348,`strong`),Sk(1349,`(opcional)`),Kg()(),Qc(1350,`p`),Sk(1351,`Legenda do `),Qc(1352,`code`),Sk(1353,`po-dropdown`),Kg(),Sk(1354,` de ações.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return s})();function We(s,Ne){if(s&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-page-list-basic-view`)(2,`sample-po-page-list-labs-view`)(3,`sample-po-page-list-hiring-processes-view`),Kg()}if(s&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(I(ar),I(An))};static ɵcmp=Jn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,We,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-page-list-doc`),Kg()()()),r&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,Pe,ve,ye,we],encapsulation:2,changeDetection:1})}return s})()}];var _e=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=ge({type:s});static ɵinj=de({imports:[GV.forChild(Re),GV]})}return s})();var _t=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=ge({type:s});static ɵinj=de({imports:[M,_e]})}return s})();export{_t as DocPoPageListModule};
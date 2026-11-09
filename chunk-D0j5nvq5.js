import{$ as R4,$n as Ak,Ar as Ig,B as Lze,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Hr as Me,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Oa as qI,On as sie,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Sn as q4,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,p as DP,qi as de,qr as NZ,rn as ia,tt as Ru,ui as R,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var Se=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page List`]],template:function(r,n){r&1&&_u(0,`po-page-list`,0)},dependencies:[Lze],encapsulation:2,changeDetection:1})}return s})();var Ae=s=>({"docs-sample-code-tabs":s});var Pe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page List Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-list-basic/sample-po-page-list-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-list-basic/sample-po-page-list-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-list-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ae,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return s})();var xe=(()=>{class s{poNotification=p(Ru);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals=``,this.title=`PO Page List`,this.subtitle=``,this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs`]],standalone:!1,decls:60,vars:40,consts:[[`formAction`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[`formDisclaimers`,`ngForm`],[`form`,`ngForm`],[3,`p-actions`,`p-breadcrumb`,`p-components-size`,`p-disclaimer-group`,`p-filter`,`p-literals`,`p-title`,`p-subtitle`],[`p-label`,`Model`,3,`p-value`],[1,`po-row`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-3`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`disclaimerGroupTitle`,`p-clean`,``,`p-label`,`Disclaimer group title`,1,`po-md-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`disclaimerGroupHideRemoveAll`,`p-label`,`Disclaimer group hide remove all`,`ngDefaultControl`,``,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`disclaimerLabel`,`p-clean`,``,`p-label`,`Disclaimer label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-clean`,``,`p-label`,`Disclaimer property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-clean`,``,`p-label`,`Disclaimer value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer hide close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add disclaimer`,1,`po-lg-3`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterPlaceholder`,`p-label`,`Filter placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterWidth`,`p-label`,`Filter width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"otherActions": "Mais ações"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=ZO();Jc(0,`po-page-list`,6),_u(1,`po-divider`)(2,`po-info`,7),Zg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`div`,8)(7,`po-input`,9),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action.action,a)||(n.action.action=a),H_(a)}),Zg(),Jc(8,`po-input`,10),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action.label,a)||(n.action.label=a),H_(a)}),Zg(),Jc(9,`po-input`,11),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action.url,a)||(n.action.url=a),H_(a)}),Zg(),Jc(10,`po-select`,12),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action.type,a)||(n.action.type=a),H_(a)}),Zg(),Jc(11,`po-select`,13),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action.icon,a)||(n.action.icon=a),H_(a)}),Zg(),Jc(12,`po-checkbox-group`,14),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.action,a)||(n.action=a),H_(a)}),Zg()(),Jc(13,`div`,8)(14,`po-button`,15),vt(`p-click`,function(){return n.addAction(n.action)}),Zg()()(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,8)(19,`po-input`,16),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),H_(a)}),Zg()()(),Jc(20,`form`,null,2)(22,`div`,8)(23,`po-input`,17),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),H_(a)}),Zg(),Jc(24,`po-input`,18),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),H_(a)}),Zg()(),Jc(25,`div`,8)(26,`po-button`,19),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Zg()()(),_u(27,`po-divider`),Jc(28,`form`,null,3)(30,`div`,8)(31,`po-input`,20),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),H_(a)}),Zg(),Jc(32,`po-input`,21),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),H_(a)}),Zg()(),Jc(33,`div`,8)(34,`po-button`,22),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Zg()()(),_u(35,`po-divider`),Jc(36,`div`,8)(37,`po-input`,23),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),H_(a)}),vt(`p-change-model`,function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),Zg(),Jc(38,`po-switch`,24),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),H_(a)}),vt(`p-change`,function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),Zg()(),Jc(39,`form`,null,4)(41,`div`,8)(42,`po-input`,25),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerLabel,a)||(n.disclaimerLabel=a),H_(a)}),Zg(),Jc(43,`po-input`,26),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerProperty,a)||(n.disclaimerProperty=a),H_(a)}),Zg()(),Jc(44,`div`,8)(45,`po-input`,27),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerValue,a)||(n.disclaimerValue=a),H_(a)}),Zg(),Jc(46,`po-switch`,28),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),H_(a)}),Zg()(),Jc(47,`div`,8)(48,`po-button`,29),vt(`p-click`,function(){return n.addDisclaimer()}),Zg()()(),_u(49,`po-divider`),Jc(50,`form`,null,5)(52,`po-input`,30),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.title,a)||(n.title=a),H_(a)}),Zg(),Jc(53,`po-input`,31),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.subtitle,a)||(n.subtitle=a),H_(a)}),Zg(),Jc(54,`po-input`,32),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.filter.placeholder,a)||(n.filter.placeholder=a),H_(a)}),Zg(),Jc(55,`po-input`,33),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.filter.width,a)||(n.filter.width=a),H_(a)}),Zg(),Jc(56,`po-input`,34),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.literals,a)||(n.literals=a),H_(a)}),vt(`p-change`,function(){return n.changeLiterals()}),Zg(),Jc(57,`po-radio-group`,35),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.componentsSize,a)||(n.componentsSize=a),H_(a)}),Zg(),Jc(58,`div`,8)(59,`po-button`,36),vt(`p-click`,function(){return n.restore()}),Zg()()()}if(r&2){let d=sk(5),p=sk(21),a=sk(29),De=sk(40);Rb(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filter)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Ig(2),Rb(`p-value`,n.filterModel),Ig(5),Yb(`ngModel`,n.action.action),Y0(),Ig(),Yb(`ngModel`,n.action.label),Y0(),Ig(),Yb(`ngModel`,n.action.url),Y0(),Ig(),Yb(`ngModel`,n.action.type),Rb(`p-options`,n.typeOptions),Y0(),Ig(),Yb(`ngModel`,n.action.icon),Rb(`p-options`,n.iconOptions),Y0(),Ig(),Yb(`ngModel`,n.action),Rb(`p-options`,n.actionOptions),Y0(),Ig(2),Rb(`p-disabled`,d.form.invalid),Ig(5),Yb(`ngModel`,n.breadcrumb.favorite),Y0(),Ig(4),Yb(`ngModel`,n.breadcrumbItem.label),Y0(),Ig(),Yb(`ngModel`,n.breadcrumbItem.link),Y0(),Ig(2),Rb(`p-disabled`,p.invalid),Ig(5),Yb(`ngModel`,n.breadcrumbParams.property),Y0(),Ig(),Yb(`ngModel`,n.breadcrumbParams.value),Y0(),Ig(2),Rb(`p-disabled`,a.invalid),Ig(3),Yb(`ngModel`,n.disclaimerGroupTitle),Y0(),Ig(),Yb(`ngModel`,n.disclaimerGroupHideRemoveAll),Y0(),Ig(4),Yb(`ngModel`,n.disclaimerLabel),Y0(),Ig(),Yb(`ngModel`,n.disclaimerProperty),Y0(),Ig(2),Yb(`ngModel`,n.disclaimerValue),Y0(),Ig(),Yb(`ngModel`,n.disclaimerHideClose),Y0(),Ig(2),Rb(`p-disabled`,De.invalid),Ig(4),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.subtitle),Y0(),Ig(),Yb(`ngModel`,n.filter.placeholder),Y0(),Ig(),Yb(`ngModel`,n.filter.width),Y0(),Ig(),Yb(`ngModel`,n.literals),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),Y0()}},dependencies:[NZ,qI,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Koe,R4,Joe,Lze],encapsulation:2,changeDetection:1})}return s})();var Be=s=>({"docs-sample-code-tabs":s});var ve=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page List Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-list-labs/sample-po-page-list-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-list
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-list-labs/sample-po-page-list-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-list-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return s})();var X=(()=>{class s{getColumns(){return[{property:`hireStatus`,label:`Status`,type:`subtitle`,subtitles:[{value:`hired`,color:`success`,label:`Hired`,content:`1`},{value:`progress`,color:`warning`,label:`Progress`,content:`2`},{value:`canceled`,color:`danger`,label:`Canceled`,content:`3`}]},{property:`idCard`,label:`Identity card`,type:`string`},{property:`name`,label:`Name`},{property:`age`,label:`Age`},{property:`city`,label:`City`},{property:`jobDescription`,label:`Job description`,type:`string`}]}getHireStatus(){return[{value:`hired`,label:`Hired`},{value:`progress`,label:`Progress`},{value:`canceled`,label:`Canceled`}]}getItems(){return[{hireStatus:`hired`,name:`James Johnson`,city:`Ontario`,age:24,idCard:`AB34lxi90`,jobDescription:`Systems Analyst`},{hireStatus:`progress`,name:`Brian Brown`,city:`Buffalo`,age:23,idCard:`HG56lds54`,jobDescription:`Trainee`},{hireStatus:`canceled`,name:`Mary Davis`,city:`Albany`,age:31,idCard:`DF23cfr65`,jobDescription:`Programmer`},{hireStatus:`hired`,name:`Margaret Garcia`,city:`New York`,age:29,idCard:`GF45fgh34`,jobDescription:`Web developer`},{hireStatus:`hired`,name:`Emma Hall`,city:`Ontario`,age:34,idCard:`RF76jut21`,jobDescription:`Recruiter`},{hireStatus:`progress`,name:`Lucas Clark`,city:`Utica`,age:32,idCard:`HY21kgu65`,jobDescription:`Consultant`},{hireStatus:`hired`,name:`Ella Scott`,city:`Ontario`,age:24,idCard:`UL78flg68`,jobDescription:`DBA`},{hireStatus:`progress`,name:`Chloe Walker`,city:`Albany`,age:29,idCard:`JH12oli98`,jobDescription:`Programmer`}]}getJobs(){return[{value:`Systems Analyst`,label:`Systems Analyst`},{value:`Trainee`,label:`Trainee`},{value:`Programmer`,label:`Programmer`},{value:`Web Developer`,label:`Web developer`},{value:`Recruiter`,label:`Recruiter`},{value:`Consultant`,label:`Consultant`},{value:`DBA`,label:`DBA`}]}static ɵfac=function(r){return new(r||s)};static ɵprov=R({token:s,factory:s.ɵfac,providedIn:`root`})}return s})();var Ve=[`advancedFilterModal`];var qe=[`poPageList`];var Ce=(()=>{class s{sampleHiringProcessesService=p(X);poNotification=p(Ru);poDialog=p(sie);router=p(An);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter=``;status=[];statusOptions;actions=[{label:`Hire`,action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:`Legislation`,url:`https://www.usa.gov/labor-laws`}];breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`Hiring processes`}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:`Apply filters`};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:`Search`};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:`Filters`,disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l==`string`?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case`progress`:l.hireStatus=`hired`,this.poNotification.success(`Hired candidate!`);break;case`hired`:this.poNotification.warning(`This candidate has already been hired.`);break;case`canceled`:this.poNotification.error(`This candidate has already been disqualified.`)}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property===`search`&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?`advanced`:`search`;this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:`There is data selected. Are you sure you want to quit?`,confirm:()=>this.router.navigate([`/`])}):this.router.navigate([`/`])}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes`]],viewQuery:function(r,n){if(r&1&&Cu(Ve,7)(qe,7),r&2){let d;No(d=xo())&&(n.advancedFilterModal=d.first),No(d=xo())&&(n.poPageList=d.first)}},standalone:!1,features:[Me([X])],decls:9,vars:15,consts:[[`poPageList`,``],[`advancedFilterModal`,``],[`f`,`ngForm`],[`p-title`,`Hiring processes`,`p-subtitle`,`Manage <b>active</b> and <i>pending</i> processes`,3,`p-actions`,`p-breadcrumb`,`p-disclaimer-group`,`p-filter`],[3,`p-selectable`,`p-single-select`,`p-sort`,`p-striped`,`p-columns`,`p-items`],[`p-title`,`Advanced filter`,3,`p-primary-action`],[`name`,`jobDescription`,`p-label`,`Job description`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`status`,`p-label`,`Status`,3,`ngModelChange`,`ngModel`,`p-options`]],template:function(r,n){if(r&1){let d=ZO();Jc(0,`po-page-list`,3,0),_u(2,`po-table`,4),Zg(),Jc(3,`po-modal`,5,1)(5,`form`,null,2)(7,`po-multiselect`,6),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.jobDescription,a)||(n.jobDescription=a),H_(a)}),Zg(),Jc(8,`po-checkbox-group`,7),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(n.status,a)||(n.status=a),H_(a)}),Zg()()()}r&2&&(Rb(`p-actions`,n.actions)(`p-breadcrumb`,n.breadcrumb)(`p-disclaimer-group`,n.disclaimerGroup)(`p-filter`,n.filterSettings),Ig(2),Rb(`p-selectable`,!0)(`p-single-select`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-columns`,n.hiringProcessesColumns)(`p-items`,n.hiringProcessesFiltered),Ig(),Rb(`p-primary-action`,n.advancedFilterPrimaryAction),Ig(4),Yb(`ngModel`,n.jobDescription),Rb(`p-options`,n.jobDescriptionOptions),Y0(),Ig(),Yb(`ngModel`,n.status),Rb(`p-options`,n.statusOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,I4,DP,ia,Lze,q4],encapsulation:2,changeDetection:1})}return s})();var Ie=s=>({"docs-sample-code-tabs":s});var ye=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-hiring-processes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page List - Hiring Processes`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-list
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-page-list-hiring-processes`),Zg(),_u(27,`hr`)),r&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ie,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return s})();var Le=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵcmp=Jn({type:s,selectors:[[`sample-po-page-list-doc`]],standalone:!1,decls:1355,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/icons`],[`href`,`/documentation/po-disclaimer-group`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimerGroup`],[`pan`,``,1,`docs-api-property-type`,`PoPageFilter`],[`pan`,``,1,`docs-api-property-type`,`PoPageListLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Tk(8,`po-page-default`),Zg(),Tk(9,`, `),Jc(10,`code`),Tk(11,`po-page-detail`),Zg(),Tk(12,`,
`),Jc(13,`code`),Tk(14,`po-page-edit`),Zg(),Tk(15,`, `),Jc(16,`code`),Tk(17,`po-page-list`),Zg(),Tk(18,` e `),Jc(19,`code`),Tk(20,`po-page-slide`),Zg(),Tk(21,`.`),Zg()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoPageListComponent`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,`O componente `),Jc(30,`code`),Tk(31,`po-page-list`),Zg(),Tk(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),Zg(),Jc(33,`p`),Tk(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Jc(35,`em`),Tk(36,`click`),Zg(),Tk(37,` do ícone `),Jc(38,`a`,6),Tk(39,`an-magnifying-glass`),Zg(),Tk(40,`
quanto ao pressionar da tecla `),Jc(41,`em`),Tk(42,`ENTER`),Zg(),Tk(43,` quando o foco estiver no campo de pesquisa.`),Zg(),Jc(44,`p`),Tk(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Jc(46,`a`,7)(47,`code`),Tk(48,`po-disclaimer-group`),Zg()(),Tk(49,`.`),Zg(),Jc(50,`h4`),Tk(51,`Tokens customizáveis`),Zg(),Jc(52,`blockquote`)(53,`p`),Tk(54,`Para maiores informações, acesse o guia `),Jc(55,`a`,8),Tk(56,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(57,`.`),Zg()(),Jc(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),Tk(62,`Propriedade`),Zg(),Jc(63,`th`),Tk(64,`Descrição`),Zg(),Jc(65,`th`),Tk(66,`Valor Padrão`),Zg()()(),Jc(67,`tbody`)(68,`tr`)(69,`td`)(70,`strong`),Tk(71,`Header`),Zg()(),_u(72,`td`)(73,`td`),Zg(),Jc(74,`tr`)(75,`td`)(76,`code`),Tk(77,`--padding`),Zg()(),Jc(78,`td`),Tk(79,`Espaçamento do header`),Zg(),Jc(80,`td`)(81,`code`),Tk(82,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--gap`),Zg()(),Jc(87,`td`),Tk(88,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--spacing-md)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--gap-actions`),Zg()(),Jc(96,`td`),Tk(97,`Espaçamento entre as ações`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--spacing-xs)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--font-family`),Zg()(),Jc(105,`td`),Tk(106,`Família tipográfica do título`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--font-family-theme)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`strong`),Tk(113,`Content`),Zg()(),_u(114,`td`)(115,`td`),Zg(),Jc(116,`tr`)(117,`td`)(118,`code`),Tk(119,`--padding-content`),Zg()(),Jc(120,`td`),Tk(121,`Espaçamento do conteúdo`),Zg(),Jc(122,`td`)(123,`code`),Tk(124,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(125,`div`,9)(126,`h4`,10),Tk(127,`Seletor`),Zg(),Jc(128,`pre`,11),Tk(129,`<po-page-list
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
`),Zg()(),Jc(130,`h4`,12),Tk(131,`Propriedades`),Zg(),Jc(132,`table`,13)(133,`tr`,14)(134,`th`,15),Tk(135,`Nome`),Zg(),Jc(136,`th`,15),Tk(137,`Tipo`),Zg(),Jc(138,`th`,15),Tk(139,`Padrão`),Zg(),Jc(140,`th`,15),Tk(141,`Descrição`),Zg()(),Jc(142,`tr`,16)(143,`td`,17)(144,`div`,18)(145,`span`,19),Tk(146,` p-actions`),_u(147,`br`),Zg()()(),Jc(148,`td`,20)(149,`code`,21),Tk(150,`Array<PoPageAction>`),Zg()(),Jc(151,`td`,22),Tk(152,`-`),Zg(),Jc(153,`td`,23)(154,`em`)(155,`strong`),Tk(156,`(opcional)`),Zg()(),Jc(157,`p`),Tk(158,`Nesta propriedade deve ser definido um array de objetos que implementam a interface `),Jc(159,`code`),Tk(160,`PoPageAction`),Zg(),Tk(161,`.`),Zg()()(),Jc(162,`tr`,16)(163,`td`,17)(164,`div`,18)(165,`span`,19),Tk(166,` p-breadcrumb`),_u(167,`br`),Zg()()(),Jc(168,`td`,20)(169,`code`,24),Tk(170,`PoBreadcrumb`),Zg()(),Jc(171,`td`,22),Tk(172,`-`),Zg(),Jc(173,`td`,23)(174,`em`)(175,`strong`),Tk(176,`(opcional)`),Zg()(),Jc(177,`p`),Tk(178,`Objeto que implementa as propriedades da interface `),Jc(179,`code`),Tk(180,`PoBreadcrumb`),Zg(),Tk(181,`.`),Zg()()(),Jc(182,`tr`,16)(183,`td`,17)(184,`div`,18)(185,`span`,19),Tk(186,` p-components-size`),_u(187,`br`),Zg()()(),Jc(188,`td`,20)(189,`code`,25),Tk(190,`string`),Zg()(),Jc(191,`td`,22)(192,`p`)(193,`code`),Tk(194,`medium`),Zg()()(),Jc(195,`td`,23)(196,`em`)(197,`strong`),Tk(198,`(opcional)`),Zg()(),Jc(199,`p`),Tk(200,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(201,`ul`)(202,`li`)(203,`code`),Tk(204,`small`),Zg(),Tk(205,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(206,`li`)(207,`code`),Tk(208,`medium`),Zg(),Tk(209,`: aplica a medida medium de cada componente.`),Zg()(),Jc(210,`blockquote`)(211,`p`),Tk(212,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(213,`code`),Tk(214,`medium`),Zg(),Tk(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(216,`a`,26),Tk(217,`po-theme`),Zg(),Tk(218,`.`),Zg()()()(),Jc(219,`tr`,16)(220,`td`,17)(221,`div`,18)(222,`span`,19),Tk(223,` p-disclaimer-group`),_u(224,`br`),Zg()()(),Jc(225,`td`,20)(226,`code`,27),Tk(227,`PoDisclaimerGroup`),Zg()(),Jc(228,`td`,22),Tk(229,`-`),Zg(),Jc(230,`td`,23)(231,`em`)(232,`strong`),Tk(233,`(opcional)`),Zg()(),Jc(234,`p`),Tk(235,`Objeto que implementa as propriedades da interface `),Jc(236,`code`),Tk(237,`PoDisclaimerGroup`),Zg(),Tk(238,`.`),Zg()()(),Jc(239,`tr`,16)(240,`td`,17)(241,`div`,18)(242,`span`,19),Tk(243,` p-filter`),_u(244,`br`),Zg()()(),Jc(245,`td`,20)(246,`code`,28),Tk(247,`PoPageFilter`),Zg()(),Jc(248,`td`,22),Tk(249,`-`),Zg(),Jc(250,`td`,23)(251,`p`),Tk(252,`Objeto que implementa as propriedades da interface `),Jc(253,`code`),Tk(254,`PoPageFilter`),Zg(),Tk(255,`.`),Zg()()(),Jc(256,`tr`,16)(257,`td`,17)(258,`div`,18)(259,`span`,19),Tk(260,` p-literals`),_u(261,`br`),Zg()()(),Jc(262,`td`,20)(263,`code`,29),Tk(264,`PoPageListLiterals`),Zg()(),Jc(265,`td`,22),Tk(266,`-`),Zg(),Jc(267,`td`,23)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Objeto com as literais usadas no `),Jc(273,`code`),Tk(274,`po-page-list`),Zg(),Tk(275,`.`),Zg(),Jc(276,`p`),Tk(277,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(278,`pre`)(279,`code`),Tk(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),Zg()(),Jc(281,`p`),Tk(282,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(283,`pre`)(284,`code`),Tk(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),Zg()(),Jc(286,`p`),Tk(287,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(288,`pre`)(289,`code`),Tk(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),Zg()(),Jc(291,`blockquote`)(292,`p`),Tk(293,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(294,`a`,30)(295,`code`),Tk(296,`PoI18nService`),Zg()(),Tk(297,` ou `),Jc(298,`em`),Tk(299,`browser`),Zg(),Tk(300,`.`),Zg()()()(),Jc(301,`tr`,16)(302,`td`,17)(303,`div`,18)(304,`span`,19),Tk(305,` p-quick-search-value`),_u(306,`br`),Zg()()(),Jc(307,`td`,20)(308,`code`,25),Tk(309,`string`),Zg()(),Jc(310,`td`,22),Tk(311,`-`),Zg(),Jc(312,`td`,23)(313,`em`)(314,`strong`),Tk(315,`(opcional)`),Zg()(),Jc(316,`p`),Tk(317,`Valor padrão na busca rápida ao inicializar o componente`),Zg()()(),Jc(318,`tr`,16)(319,`td`,17)(320,`div`,18)(321,`span`,19),Tk(322,` p-subtitle`),_u(323,`br`),Zg()()(),Jc(324,`td`,20)(325,`code`,25),Tk(326,`string`),Zg()(),Jc(327,`td`,22),Tk(328,`-`),Zg(),Jc(329,`td`,23)(330,`em`)(331,`strong`),Tk(332,`(opcional)`),Zg()(),Jc(333,`p`),Tk(334,`Subtitulo do Header da página.`),Zg(),Jc(335,`p`),Tk(336,`Suporta formatação básica com as tags `),Jc(337,`code`),Tk(338,`<b>`),Zg(),Tk(339,` (negrito), `),Jc(340,`code`),Tk(341,`<strong>`),Zg(),Tk(342,` (negrito), `),Jc(343,`code`),Tk(344,`<i>`),Zg(),Tk(345,` (itálico), `),Jc(346,`code`),Tk(347,`<em>`),Zg(),Tk(348,` (it\xE1lico) e
`),Jc(349,`code`),Tk(350,`<u>`),Zg(),Tk(351,` (sublinhado).`),Zg(),Jc(352,`p`),Tk(353,`Exemplo:`),Zg(),Jc(354,`pre`)(355,`code`,31),Tk(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),Zg()(),Jc(357,`blockquote`)(358,`p`),Tk(359,`Requer que `),Jc(360,`code`),Tk(361,`p-title`),Zg(),Tk(362,` esteja definido.`),Zg()()()(),Jc(363,`tr`,16)(364,`td`,17)(365,`div`,18)(366,`span`,19),Tk(367,` p-title`),_u(368,`br`),Zg()()(),Jc(369,`td`,20)(370,`code`,25),Tk(371,`string`),Zg()(),Jc(372,`td`,22),Tk(373,`-`),Zg(),Jc(374,`td`,23)(375,`p`),Tk(376,`Título da página.`),Zg()()()(),Jc(377,`h3`,12),Tk(378,`Métodos`),Zg(),Jc(379,`table`,32)(380,`tr`,16)(381,`th`,33)(382,`div`,18)(383,`h4`)(384,`span`,19),Tk(385,` clearInputSearch `),Zg()()()()(),Jc(386,`tr`,23)(387,`td`,23)(388,`p`),Tk(389,`Limpa o campo de pesquisa.`),Zg()()()(),_u(390,`br`),Jc(391,`h3`),Tk(392,`Interfaces`),Zg(),Jc(393,`h4`,34)(394,`code`,5),Tk(395,`PoBreadcrumbItem`),Zg()(),Jc(396,`div`,2)(397,`p`),Tk(398,`Interface que define cada item do componente `),Jc(399,`strong`),Tk(400,`po-breadcrumb`),Zg(),Tk(401,`.`),Zg()(),Jc(402,`h4`,12),Tk(403,`Propriedades`),Zg(),Jc(404,`table`,13)(405,`tr`,14)(406,`th`,15),Tk(407,`Nome`),Zg(),Jc(408,`th`,15),Tk(409,`Tipo`),Zg(),Jc(410,`th`,15),Tk(411,`Descrição`),Zg()(),Jc(412,`tr`,16)(413,`td`,17)(414,`div`,18)(415,`span`,19),Tk(416,` action`),_u(417,`br`),Zg()()(),Jc(418,`td`,20)(419,`code`,35),Tk(420,`Function`),Zg()(),Jc(421,`td`,23)(422,`em`)(423,`strong`),Tk(424,`(opcional)`),Zg()(),Jc(425,`p`),Tk(426,`Ação executada ao clicar no item.`),Zg(),Jc(427,`blockquote`)(428,`p`),Tk(429,`A função atribuída a esta propriedade receberá o `),Jc(430,`em`),Tk(431,`label`),Zg(),Tk(432,` do item como parâmetro para execução.`),Zg()()()(),Jc(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),Tk(437,` label`),_u(438,`br`),Zg()()(),Jc(439,`td`,20)(440,`code`,25),Tk(441,`string`),Zg()(),Jc(442,`td`,23)(443,`p`),Tk(444,`Rótulo do item.`),Zg()()(),Jc(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),Tk(449,` link`),_u(450,`br`),Zg()()(),Jc(451,`td`,20)(452,`code`,25),Tk(453,`string`),Zg()(),Jc(454,`td`,23)(455,`em`)(456,`strong`),Tk(457,`(opcional)`),Zg()(),Jc(458,`p`),Tk(459,`Url do item.`),Zg(),Jc(460,`blockquote`)(461,`p`),Tk(462,`Caso o item também contenha uma `),Jc(463,`em`),Tk(464,`action`),Zg(),Tk(465,` definida, a preferência de execução será do `),Jc(466,`em`),Tk(467,`link`),Zg(),Tk(468,`.`),Zg()(),Jc(469,`blockquote`)(470,`p`),Tk(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(472,`strong`)(473,`a`,36),Tk(474,`Veja um exemplo de como criar rotas aqui`),Zg()(),Tk(475,`.`),Zg()(),Jc(476,`blockquote`)(477,`p`),Tk(478,`Esta propriedade é necessária para que a propriedade `),Jc(479,`code`),Tk(480,`p-favorite-service`),Zg(),Tk(481,` consiga favoritar ou desfavoritar.`),Zg()()()()(),Jc(482,`h4`,34)(483,`code`,5),Tk(484,`PoBreadcrumb`),Zg()(),Jc(485,`div`,2)(486,`p`),Tk(487,`Interface que define o `),Jc(488,`code`),Tk(489,`po-breadcrumb`),Zg(),Tk(490,`.`),Zg()(),Jc(491,`h4`,12),Tk(492,`Propriedades`),Zg(),Jc(493,`table`,13)(494,`tr`,14)(495,`th`,15),Tk(496,`Nome`),Zg(),Jc(497,`th`,15),Tk(498,`Tipo`),Zg(),Jc(499,`th`,15),Tk(500,`Descrição`),Zg()(),Jc(501,`tr`,16)(502,`td`,17)(503,`div`,18)(504,`span`,19),Tk(505,` favorite`),_u(506,`br`),Zg()()(),Jc(507,`td`,20)(508,`code`,25),Tk(509,`string`),Zg()(),Jc(510,`td`,23)(511,`em`)(512,`strong`),Tk(513,`(opcional)`),Zg()(),Jc(514,`p`),Tk(515,`Permite definir uma URL para favoritar ou desfavoritar.`),Zg(),Jc(516,`blockquote`)(517,`p`),Tk(518,`Para maiores informações verificar a propriedade `),Jc(519,`code`),Tk(520,`p-favorite-service`),Zg(),Tk(521,` do componente `),Jc(522,`code`),Tk(523,`po-breadcrumb`),Zg(),Tk(524,`.`),Zg()()()(),Jc(525,`tr`,16)(526,`td`,17)(527,`div`,18)(528,`span`,19),Tk(529,` items`),_u(530,`br`),Zg()()(),Jc(531,`td`,20)(532,`code`,37),Tk(533,`Array<PoBreadcrumbItem>`),Zg()(),Jc(534,`td`,23)(535,`p`),Tk(536,`Lista de itens do `),Jc(537,`em`),Tk(538,`breadcrumb`),Zg(),Tk(539,`.`),Zg(),Jc(540,`p`)(541,`strong`),Tk(542,`Exemplo:`),Zg()(),Jc(543,`pre`)(544,`code`),Tk(545,`{ label: 'Po Portal', link: 'portal' }
`),Zg()()()(),Jc(546,`tr`,16)(547,`td`,17)(548,`div`,18)(549,`span`,19),Tk(550,` params`),_u(551,`br`),Zg()()(),Jc(552,`td`,20)(553,`code`,38),Tk(554,`object`),Zg()(),Jc(555,`td`,23)(556,`em`)(557,`strong`),Tk(558,`(opcional)`),Zg()(),Jc(559,`p`),Tk(560,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Zg()()()(),Jc(561,`h4`,34)(562,`code`,5),Tk(563,`PoDisclaimer`),Zg()(),Jc(564,`div`,2)(565,`p`),Tk(566,`Interface que representa o objeto `),Jc(567,`code`),Tk(568,`po-disclaimer`),Zg(),Tk(569,`.`),Zg()(),Jc(570,`h4`,12),Tk(571,`Propriedades`),Zg(),Jc(572,`table`,13)(573,`tr`,14)(574,`th`,15),Tk(575,`Nome`),Zg(),Jc(576,`th`,15),Tk(577,`Tipo`),Zg(),Jc(578,`th`,15),Tk(579,`Descrição`),Zg()(),Jc(580,`tr`,16)(581,`td`,17)(582,`div`,18)(583,`span`,19),Tk(584,` hideClose`),_u(585,`br`),Zg()()(),Jc(586,`td`,20)(587,`code`,39),Tk(588,`boolean`),Zg()(),Jc(589,`td`,23)(590,`em`)(591,`strong`),Tk(592,`(opcional)`),Zg()(),Jc(593,`p`),Tk(594,`Se verdadeiro, oculta o botão para fechar o `),Jc(595,`em`),Tk(596,`disclaimer`),Zg(),Tk(597,`.`),Zg()()(),Jc(598,`tr`,16)(599,`td`,17)(600,`div`,18)(601,`span`,19),Tk(602,` label`),_u(603,`br`),Zg()()(),Jc(604,`td`,20)(605,`code`,25),Tk(606,`string`),Zg()(),Jc(607,`td`,23)(608,`em`)(609,`strong`),Tk(610,`(opcional)`),Zg()(),Jc(611,`p`),Tk(612,`Texto de exibição do objeto.`),Zg()()(),Jc(613,`tr`,16)(614,`td`,17)(615,`div`,18)(616,`span`,19),Tk(617,` property`),_u(618,`br`),Zg()()(),Jc(619,`td`,20)(620,`code`,25),Tk(621,`string`),Zg()(),Jc(622,`td`,23)(623,`em`)(624,`strong`),Tk(625,`(opcional)`),Zg()(),Jc(626,`p`),Tk(627,`Nome da propriedade vinculada ao objeto `),Jc(628,`em`),Tk(629,`disclaimer`),Zg(),Tk(630,`.`),Zg()()(),Jc(631,`tr`,16)(632,`td`,17)(633,`div`,18)(634,`span`,19),Tk(635,` value`),_u(636,`br`),Zg()()(),Jc(637,`td`,20)(638,`code`,40),Tk(639,`any`),Zg()(),Jc(640,`td`,23)(641,`p`),Tk(642,`Valor do objeto.`),Zg()()()(),Jc(643,`h4`,34)(644,`code`,5),Tk(645,`PoDisclaimerGroupRemoveAction`),Zg()(),Jc(646,`div`,2)(647,`p`),Tk(648,`Estrutura do objeto representando o estado dos `),Jc(649,`em`),Tk(650,`disclaimers`),Zg(),Tk(651,` após a remoção.`),Zg()(),Jc(652,`h4`,12),Tk(653,`Propriedades`),Zg(),Jc(654,`table`,13)(655,`tr`,14)(656,`th`,15),Tk(657,`Nome`),Zg(),Jc(658,`th`,15),Tk(659,`Tipo`),Zg(),Jc(660,`th`,15),Tk(661,`Descrição`),Zg()(),Jc(662,`tr`,16)(663,`td`,17)(664,`div`,18)(665,`span`,19),Tk(666,` currentDisclaimers`),_u(667,`br`),Zg()()(),Jc(668,`td`,20)(669,`code`,41),Tk(670,`Array<PoDisclaimer>`),Zg()(),Jc(671,`td`,23)(672,`p`),Tk(673,`Lista com os `),Jc(674,`em`),Tk(675,`disclaimers`),Zg(),Tk(676,` atuais (restantes).`),Zg()()(),Jc(677,`tr`,16)(678,`td`,17)(679,`div`,18)(680,`span`,19),Tk(681,` removedDisclaimer`),_u(682,`br`),Zg()()(),Jc(683,`td`,20)(684,`code`,42),Tk(685,`PoDisclaimer`),Zg()(),Jc(686,`td`,23)(687,`p`)(688,`em`),Tk(689,`Disclaimer`),Zg(),Tk(690,` que foi removido.`),Zg()()()(),Jc(691,`h4`,34)(692,`code`,5),Tk(693,`PoDisclaimerGroup`),Zg()(),Jc(694,`div`,2)(695,`p`),Tk(696,`Interface que representa o objeto `),Jc(697,`code`),Tk(698,`po-disclaimer-group`),Zg(),Tk(699,`.`),Zg()(),Jc(700,`h4`,12),Tk(701,`Propriedades`),Zg(),Jc(702,`table`,13)(703,`tr`,14)(704,`th`,15),Tk(705,`Nome`),Zg(),Jc(706,`th`,15),Tk(707,`Tipo`),Zg(),Jc(708,`th`,15),Tk(709,`Descrição`),Zg()(),Jc(710,`tr`,16)(711,`td`,17)(712,`div`,18)(713,`span`,19),Tk(714,` change`),_u(715,`br`),Zg()()(),Jc(716,`td`,20)(717,`code`,35),Tk(718,`Function`),Zg()(),Jc(719,`td`,23)(720,`em`)(721,`strong`),Tk(722,`(opcional)`),Zg()(),Jc(723,`p`),Tk(724,`Função que será disparada quando a lista de `),Jc(725,`em`),Tk(726,`disclaimers`),Zg(),Tk(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Jc(728,`em`),Tk(729,`disclaimers`),Zg(),Tk(730,`.`),Zg()()(),Jc(731,`tr`,16)(732,`td`,17)(733,`div`,18)(734,`span`,19),Tk(735,` disclaimers`),_u(736,`br`),Zg()()(),Jc(737,`td`,20)(738,`code`,41),Tk(739,`Array<PoDisclaimer>`),Zg()(),Jc(740,`td`,23)(741,`p`),Tk(742,`Lista de `),Jc(743,`em`),Tk(744,`disclaimers`),Zg(),Tk(745,`.`),Zg(),Jc(746,`p`),Tk(747,`Exemplo:`),Zg(),Jc(748,`pre`)(749,`code`),Tk(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),Zg()(),Jc(751,`p`),Tk(752,`Para que a lista de `),Jc(753,`em`),Tk(754,`disclaimers`),Zg(),Tk(755,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Jc(756,`code`),Tk(757,`PoDisclaimer`),Zg(),Tk(758,`.`),Zg(),Jc(759,`p`),Tk(760,`Exemplo:`),Zg(),Jc(761,`pre`)(762,`code`),Tk(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),Zg()()()(),Jc(764,`tr`,16)(765,`td`,17)(766,`div`,18)(767,`span`,19),Tk(768,` hideRemoveAll`),_u(769,`br`),Zg()()(),Jc(770,`td`,20)(771,`code`,39),Tk(772,`boolean`),Zg()(),Jc(773,`td`,23)(774,`em`)(775,`strong`),Tk(776,`(opcional)`),Zg()(),Jc(777,`p`),Tk(778,`Oculta o botão para remover todos os `),Jc(779,`em`),Tk(780,`disclaimers`),Zg(),Tk(781,` do grupo.`),Zg(),Jc(782,`blockquote`)(783,`p`),Tk(784,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Jc(785,`em`),Tk(786,`disclaimers`),Zg(),Tk(787,` com a opção `),Jc(788,`code`),Tk(789,`hideClose`),Zg(),Tk(790,` habilitada.`),Zg()()()(),Jc(791,`tr`,16)(792,`td`,17)(793,`div`,18)(794,`span`,19),Tk(795,` remove`),_u(796,`br`),Zg()()(),Jc(797,`td`,20)(798,`code`,35),Tk(799,`Function`),Zg()(),Jc(800,`td`,23)(801,`em`)(802,`strong`),Tk(803,`(opcional)`),Zg()(),Jc(804,`p`),Tk(805,`Função que será disparada quando um `),Jc(806,`em`),Tk(807,`disclaimer`),Zg(),Tk(808,` for removido da lista de
`),Jc(809,`em`),Tk(810,`disclaimers`),Zg(),Tk(811,` pelo usuário.`),Zg(),Jc(812,`p`),Tk(813,`Recebe como parâmetro um objeto conforme a interface `),Jc(814,`code`),Tk(815,`PoDisclaimerGroupRemoveAction`),Zg(),Tk(816,`.`),Zg()()(),Jc(817,`tr`,16)(818,`td`,17)(819,`div`,18)(820,`span`,19),Tk(821,` removeAll`),_u(822,`br`),Zg()()(),Jc(823,`td`,20)(824,`code`,35),Tk(825,`Function`),Zg()(),Jc(826,`td`,23)(827,`em`)(828,`strong`),Tk(829,`(opcional)`),Zg()(),Jc(830,`p`),Tk(831,`Função que será disparada quando todos os `),Jc(832,`em`),Tk(833,`disclaimers`),Zg(),Tk(834,` forem removidos da lista de `),Jc(835,`em`),Tk(836,`disclaimers`),Zg(),Tk(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Zg(),Jc(838,`p`),Tk(839,`Recebe como parâmetro uma lista contendo todos os `),Jc(840,`code`),Tk(841,`disclaimers`),Zg(),Tk(842,` removidos.`),Zg()()(),Jc(843,`tr`,16)(844,`td`,17)(845,`div`,18)(846,`span`,19),Tk(847,` title`),_u(848,`br`),Zg()()(),Jc(849,`td`,20)(850,`code`,25),Tk(851,`string`),Zg()(),Jc(852,`td`,23)(853,`em`)(854,`strong`),Tk(855,`(opcional)`),Zg()(),Jc(856,`p`),Tk(857,`Título do grupo de `),Jc(858,`em`),Tk(859,`disclaimers`),Zg(),Tk(860,`.`),Zg()()()(),Jc(861,`h4`,34)(862,`code`,5),Tk(863,`PoPageAction`),Zg()(),Jc(864,`div`,2)(865,`p`),Tk(866,`Interface para as ações dos componentes `),Jc(867,`code`),Tk(868,`po-page-default`),Zg(),Tk(869,` e `),Jc(870,`code`),Tk(871,`po-page-list`),Zg(),Tk(872,`.`),Zg(),Jc(873,`p`),Tk(874,`As ações podem ser exibidas como botões no cabeçalho ou agrupadas em um `),Jc(875,`em`),Tk(876,`dropdown`),Zg(),Tk(877,`,
conforme o `),Jc(878,`code`),Tk(879,`PoPageActionsLayout`),Zg(),Tk(880,` e o tamanho da tela.`),Zg(),Jc(881,`blockquote`)(882,`p`),Tk(883,`As propriedades `),Jc(884,`code`),Tk(885,`separator`),Zg(),Tk(886,`, `),Jc(887,`code`),Tk(888,`selected`),Zg(),Tk(889,` e `),Jc(890,`code`),Tk(891,`subItems`),Zg(),Tk(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Jc(893,`em`),Tk(894,`dropdown`),Zg(),Tk(895,`.`),Zg()()(),Jc(896,`h4`,12),Tk(897,`Propriedades`),Zg(),Jc(898,`table`,13)(899,`tr`,14)(900,`th`,15),Tk(901,`Nome`),Zg(),Jc(902,`th`,15),Tk(903,`Tipo`),Zg(),Jc(904,`th`,15),Tk(905,`Descrição`),Zg()(),Jc(906,`tr`,16)(907,`td`,17)(908,`div`,18)(909,`span`,19),Tk(910,` action`),_u(911,`br`),Zg()()(),Jc(912,`td`,20)(913,`code`,35),Tk(914,`Function`),Zg()(),Jc(915,`td`,23)(916,`em`)(917,`strong`),Tk(918,`(opcional)`),Zg()(),Jc(919,`p`),Tk(920,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(921,`p`),Tk(922,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(923,`code`),Tk(924,`subItems`),Zg(),Tk(925,`.`),Zg(),Jc(926,`blockquote`)(927,`p`),Tk(928,`Para que a função seja executada no contexto do componente, utilize `),Jc(929,`em`),Tk(930,`bind`),Zg(),Tk(931,`:
`),Jc(932,`code`),Tk(933,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(934,`tr`,16)(935,`td`,17)(936,`div`,18)(937,`span`,19),Tk(938,` disabled`),_u(939,`br`),Zg()()(),Jc(940,`td`,20)(941,`code`,39),Tk(942,`boolean `),Zg(),Jc(943,`code`,35),Tk(944,` Function`),Zg()(),Jc(945,`td`,23)(946,`em`)(947,`strong`),Tk(948,`(opcional)`),Zg()(),Jc(949,`p`),Tk(950,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(951,`tr`,16)(952,`td`,17)(953,`div`,18)(954,`span`,19),Tk(955,` icon`),_u(956,`br`),Zg()()(),Jc(957,`td`,20)(958,`code`,25),Tk(959,`string `),Zg(),Jc(960,`code`,43),Tk(961,` TemplateRef<void>`),Zg()(),Jc(962,`td`,23)(963,`em`)(964,`strong`),Tk(965,`(opcional)`),Zg()(),Jc(966,`p`),Tk(967,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(968,`p`),Tk(969,`Aceita ícones da `),Jc(970,`a`,6),Tk(971,`Biblioteca de ícones`),Zg(),Tk(972,`, fontes externas (ex: Font Awesome)
ou um `),Jc(973,`code`),Tk(974,`TemplateRef`),Zg(),Tk(975,` para ícones customizados.`),Zg(),Jc(976,`pre`)(977,`code`),Tk(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),Tk(983,` kind`),_u(984,`br`),Zg()()(),Jc(985,`td`,20)(986,`code`,25),Tk(987,`string`),Zg()(),Jc(988,`td`,23)(989,`em`)(990,`strong`),Tk(991,`(opcional)`),Zg()(),Jc(992,`p`),Tk(993,`Define o estilo visual da ação quando exibida como botão fora do `),Jc(994,`em`),Tk(995,`dropdown`),Zg(),Tk(996,`.`),Zg(),Jc(997,`p`),Tk(998,`Valores permitidos:`),Zg(),Jc(999,`ul`)(1e3,`li`)(1001,`code`),Tk(1002,`primary`),Zg(),Tk(1003,`: botão com maior destaque visual.`),Zg(),Jc(1004,`li`)(1005,`code`),Tk(1006,`secondary`),Zg(),Tk(1007,`: estilo padrão.`),Zg()(),Jc(1008,`blockquote`)(1009,`p`),Tk(1010,`Valores inválidos são ignorados e o componente aplica o estilo padrão da posição.`),Zg()(),Jc(1011,`blockquote`)(1012,`p`),Tk(1013,`Somente uma ação pode ter `),Jc(1014,`code`),Tk(1015,`kind`),Zg(),Tk(1016,` igual a `),Jc(1017,`code`),Tk(1018,`primary`),Zg(),Tk(1019,`. Caso mais de uma defina `),Jc(1020,`code`),Tk(1021,`primary`),Zg(),Tk(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Jc(1023,`code`),Tk(1024,`secondary`),Zg(),Tk(1025,`.`),Zg()(),Jc(1026,`blockquote`)(1027,`p`),Tk(1028,`Quando não definido, o estilo é determinado pelo `),Jc(1029,`code`),Tk(1030,`PoPageActionsLayout`),Zg(),Tk(1031,`.`),Zg()()()(),Jc(1032,`tr`,16)(1033,`td`,17)(1034,`div`,18)(1035,`span`,19),Tk(1036,` label`),_u(1037,`br`),Zg()()(),Jc(1038,`td`,20)(1039,`code`,25),Tk(1040,`string`),Zg()(),Jc(1041,`td`,23)(1042,`p`),Tk(1043,`Rótulo da ação.`),Zg(),Jc(1044,`p`),Tk(1045,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(1046,`code`),Tk(1047,`subItems`),Zg(),Tk(1048,`.`),Zg()()(),Jc(1049,`tr`,16)(1050,`td`,17)(1051,`div`,18)(1052,`span`,19),Tk(1053,` selected`),_u(1054,`br`),Zg()()(),Jc(1055,`td`,20)(1056,`code`,39),Tk(1057,`boolean`),Zg()(),Jc(1058,`td`,23)(1059,`em`)(1060,`strong`),Tk(1061,`(opcional)`),Zg()(),Jc(1062,`p`),Tk(1063,`Define se a ação está selecionada.`),Zg()()(),Jc(1064,`tr`,16)(1065,`td`,17)(1066,`div`,18)(1067,`span`,19),Tk(1068,` separator`),_u(1069,`br`),Zg()()(),Jc(1070,`td`,20)(1071,`code`,39),Tk(1072,`boolean`),Zg()(),Jc(1073,`td`,23)(1074,`em`)(1075,`strong`),Tk(1076,`(opcional)`),Zg()(),Jc(1077,`p`),Tk(1078,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(1079,`tr`,16)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),Tk(1083,` subItems`),_u(1084,`br`),Zg()()(),Jc(1085,`td`,20)(1086,`code`,44),Tk(1087,`Array<PoPopupAction>`),Zg()(),Jc(1088,`td`,23)(1089,`em`)(1090,`strong`),Tk(1091,`(opcional)`),Zg()(),Jc(1092,`p`),Tk(1093,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(1094,`pre`)(1095,`code`),Tk(1096,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(1097,`p`),Tk(1098,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(1099,`blockquote`)(1100,`p`),Tk(1101,`As propriedades `),Jc(1102,`code`),Tk(1103,`disabled`),Zg(),Tk(1104,`, `),Jc(1105,`code`),Tk(1106,`type`),Zg(),Tk(1107,` e `),Jc(1108,`code`),Tk(1109,`visible`),Zg(),Tk(1110,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(1111,`blockquote`)(1112,`p`),Tk(1113,`Quando `),Jc(1114,`code`),Tk(1115,`url`),Zg(),Tk(1116,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(1117,`blockquote`)(1118,`p`),Tk(1119,`Em subníveis aninhados, o `),Jc(1120,`code`),Tk(1121,`icon`),Zg(),Tk(1122,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(1123,`tr`,16)(1124,`td`,17)(1125,`div`,18)(1126,`span`,19),Tk(1127,` subItemsLazy`),_u(1128,`br`),Zg()()(),Jc(1129,`td`,20)(1130,`code`,45),Tk(1131,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(1132,`td`,23)(1133,`em`)(1134,`strong`),Tk(1135,`(opcional)`),Zg()(),Jc(1136,`p`),Tk(1137,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(1138,`p`),Tk(1139,`Recebe o item agrupador e retorna um `),Jc(1140,`code`),Tk(1141,`Observable<Array<PoPopupAction>>`),Zg(),Tk(1142,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(1143,`strong`),Tk(1144,`apenas`),Zg(),Tk(1145,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(1146,`code`),Tk(1147,`po-skeleton`),Zg(),Tk(1148,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(1149,`pre`)(1150,`code`),Tk(1151,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(1152,`blockquote`)(1153,`p`),Tk(1154,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(1155,`p`),Tk(1156,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(1157,`tr`,16)(1158,`td`,17)(1159,`div`,18)(1160,`span`,19),Tk(1161,` type`),_u(1162,`br`),Zg()()(),Jc(1163,`td`,20)(1164,`code`,25),Tk(1165,`string`),Zg()(),Jc(1166,`td`,23)(1167,`em`)(1168,`strong`),Tk(1169,`(opcional)`),Zg()(),Jc(1170,`p`),Tk(1171,`Define a cor do item.`),Zg(),Jc(1172,`p`),Tk(1173,`Valores válidos:`),Zg(),Jc(1174,`ul`)(1175,`li`)(1176,`code`),Tk(1177,`default`),Zg()(),Jc(1178,`li`)(1179,`code`),Tk(1180,`danger`),Zg()()()()(),Jc(1181,`tr`,16)(1182,`td`,17)(1183,`div`,18)(1184,`span`,19),Tk(1185,` url`),_u(1186,`br`),Zg()()(),Jc(1187,`td`,20)(1188,`code`,25),Tk(1189,`string`),Zg()(),Jc(1190,`td`,23)(1191,`em`)(1192,`strong`),Tk(1193,`(opcional)`),Zg()(),Jc(1194,`p`),Tk(1195,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(1196,`p`),Tk(1197,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(1198,`code`),Tk(1199,`url`),Zg(),Tk(1200,` é informada em um agrupador, o clique `),Jc(1201,`strong`),Tk(1202,`não abrirá os subitens`),Zg(),Tk(1203,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(1204,`blockquote`)(1205,`p`),Tk(1206,`Quando informada, tem prioridade sobre a propriedade `),Jc(1207,`code`),Tk(1208,`action`),Zg(),Tk(1209,`.`),Zg()()()(),Jc(1210,`tr`,16)(1211,`td`,17)(1212,`div`,18)(1213,`span`,19),Tk(1214,` visible`),_u(1215,`br`),Zg()()(),Jc(1216,`td`,20)(1217,`code`,39),Tk(1218,`boolean `),Zg(),Jc(1219,`code`,35),Tk(1220,` Function`),Zg()(),Jc(1221,`td`,23)(1222,`em`)(1223,`strong`),Tk(1224,`(opcional)`),Zg()(),Jc(1225,`p`),Tk(1226,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(1227,`h4`,34)(1228,`code`,5),Tk(1229,`PoPageFilter`),Zg()(),Jc(1230,`div`,2)(1231,`p`),Tk(1232,`Interface para o atributo `),Jc(1233,`code`),Tk(1234,`filter`),Zg(),Tk(1235,` do componente `),Jc(1236,`code`),Tk(1237,`po-page-list`),Zg(),Tk(1238,`.`),Zg()(),Jc(1239,`h4`,12),Tk(1240,`Propriedades`),Zg(),Jc(1241,`table`,13)(1242,`tr`,14)(1243,`th`,15),Tk(1244,`Nome`),Zg(),Jc(1245,`th`,15),Tk(1246,`Tipo`),Zg(),Jc(1247,`th`,15),Tk(1248,`Descrição`),Zg()(),Jc(1249,`tr`,16)(1250,`td`,17)(1251,`div`,18)(1252,`span`,19),Tk(1253,` action`),_u(1254,`br`),Zg()()(),Jc(1255,`td`,20)(1256,`code`,35),Tk(1257,`Function`),Zg()(),Jc(1258,`td`,23)(1259,`em`)(1260,`strong`),Tk(1261,`(opcional)`),Zg()(),Jc(1262,`p`),Tk(1263,`Ação a ser executada.`),Zg()()(),Jc(1264,`tr`,16)(1265,`td`,17)(1266,`div`,18)(1267,`span`,19),Tk(1268,` advancedAction`),_u(1269,`br`),Zg()()(),Jc(1270,`td`,20)(1271,`code`,35),Tk(1272,`Function`),Zg()(),Jc(1273,`td`,23)(1274,`em`)(1275,`strong`),Tk(1276,`(opcional)`),Zg()(),Jc(1277,`p`),Tk(1278,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Jc(1279,`em`),Tk(1280,`click`),Zg(),Tk(1281,` através do rótulo `),Jc(1282,`strong`),Tk(1283,`Busca Avançada`),Zg(),Tk(1284,`.`),Zg()()(),Jc(1285,`tr`,16)(1286,`td`,17)(1287,`div`,18)(1288,`span`,19),Tk(1289,` placeholder`),_u(1290,`br`),Zg()()(),Jc(1291,`td`,20)(1292,`code`,25),Tk(1293,`string`),Zg()(),Jc(1294,`td`,23)(1295,`em`)(1296,`strong`),Tk(1297,`(opcional)`),Zg()(),Jc(1298,`p`),Tk(1299,`Texto de instrução exibido dentro do campo de filtro.`),Zg()()(),Jc(1300,`tr`,16)(1301,`td`,17)(1302,`div`,18)(1303,`span`,19),Tk(1304,` width`),_u(1305,`br`),Zg()()(),Jc(1306,`td`,20)(1307,`code`,46),Tk(1308,`number`),Zg()(),Jc(1309,`td`,23)(1310,`em`)(1311,`strong`),Tk(1312,`(opcional)`),Zg()(),Jc(1313,`p`),Tk(1314,`Tamanho do filtro em tela, utilizando o `),Jc(1315,`em`),Tk(1316,`Grid System`),Zg(),Tk(1317,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),Zg()()()(),Jc(1318,`h4`,34)(1319,`code`,5),Tk(1320,`PoPageListLiterals`),Zg()(),Jc(1321,`div`,2)(1322,`p`),Tk(1323,`Interface para definição das literais usadas no `),Jc(1324,`code`),Tk(1325,`po-page-list`),Zg(),Tk(1326,`.`),Zg()(),Jc(1327,`h4`,12),Tk(1328,`Propriedades`),Zg(),Jc(1329,`table`,13)(1330,`tr`,14)(1331,`th`,15),Tk(1332,`Nome`),Zg(),Jc(1333,`th`,15),Tk(1334,`Tipo`),Zg(),Jc(1335,`th`,15),Tk(1336,`Descrição`),Zg()(),Jc(1337,`tr`,16)(1338,`td`,17)(1339,`div`,18)(1340,`span`,19),Tk(1341,` otherActions`),_u(1342,`br`),Zg()()(),Jc(1343,`td`,20)(1344,`code`,25),Tk(1345,`string`),Zg()(),Jc(1346,`td`,23)(1347,`em`)(1348,`strong`),Tk(1349,`(opcional)`),Zg()(),Jc(1350,`p`),Tk(1351,`Legenda do `),Jc(1352,`code`),Tk(1353,`po-dropdown`),Zg(),Tk(1354,` de ações.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return s})();function We(s,Ne){if(s&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-page-list-basic-view`)(2,`sample-po-page-list-labs-view`)(3,`sample-po-page-list-hiring-processes-view`),Zg()}if(s&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||s)(I(ar),I(An))};static ɵcmp=Jn({type:s,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page List`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,We,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-page-list-doc`),Zg()()()),r&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,Pe,ve,ye,Le],encapsulation:2,changeDetection:1})}return s})()}];var _e=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=ge({type:s});static ɵinj=de({imports:[WV.forChild(Re),WV]})}return s})();var _t=(()=>{class s{static ɵfac=function(r){return new(r||s)};static ɵmod=ge({type:s});static ɵinj=de({imports:[M,_e]})}return s})();export{_t as DocPoPageListModule};
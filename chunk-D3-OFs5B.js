import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,rt as Qae,v as Dze,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var ne=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(l,n){l&1&&_u(0,`po-page-detail`,0)},dependencies:[Dze],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Detail Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-detail-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,be,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ne],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let u=ZO();Jc(0,`po-page-detail`,4),vt(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Jc(1,`div`,5),_u(2,`po-info`,6),Zg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`po-input`,7),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.title,m)||(n.title=m),H_(m)}),Zg(),Jc(7,`po-input`,8),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.subtitle,m)||(n.subtitle=m),H_(m)}),Zg(),Jc(8,`po-radio-group`,9),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.componentsSize,m)||(n.componentsSize=m),H_(m)}),Zg(),_u(9,`po-divider`),Jc(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),H_(m)}),Zg()()(),Jc(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),H_(m)}),Zg(),Jc(18,`po-input`,12),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),H_(m)}),Zg()(),Jc(19,`div`,5)(20,`po-button`,13),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Zg()()(),_u(21,`po-divider`),Jc(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),H_(m)}),Zg(),Jc(26,`po-input`,15),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),H_(m)}),Zg()(),Jc(27,`div`,5)(28,`po-button`,16),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Zg()()(),Jc(29,`div`,5)(30,`po-input`,17),W0(),Kb(`ngModelChange`,function(m){return U_(u),Ak(n.literals,m)||(n.literals=m),H_(m)}),vt(`p-change`,function(){return n.changeLiterals()}),Zg()(),Jc(31,`div`,5)(32,`po-button`,18),vt(`p-click`,function(){return n.restore()}),Zg()()()()}if(l&2){let u=sk(15),s=sk(23);Rb(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Ig(2),Rb(`p-value`,n.action),Ig(4),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.subtitle),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),Y0(),Ig(5),Yb(`ngModel`,n.breadcrumb.favorite),Y0(),Ig(4),Yb(`ngModel`,n.breadcrumbItem.label),Y0(),Ig(),Yb(`ngModel`,n.breadcrumbItem.link),Y0(),Ig(2),Rb(`p-disabled`,u.invalid),Ig(5),Yb(`ngModel`,n.breadcrumbParams.property),Y0(),Ig(),Yb(`ngModel`,n.breadcrumbParams.value),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(2),Yb(`ngModel`,n.literals),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,Gte,Yoe,Dze],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Detail Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-detail-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Se,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{router=p(An);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(l,n){l&1&&(Jc(0,`po-page-detail`,0),vt(`p-edit`,function(){return n.edit()}),Jc(1,`div`,1),_u(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`div`,1),_u(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),Zg(),_u(10,`po-divider`),Jc(11,`div`,1),_u(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),Zg(),_u(15,`po-divider`),Jc(16,`div`,1),_u(17,`po-info`,11)(18,`po-info`,12),Zg()()),l&2&&(Rb(`p-breadcrumb`,n.breadcrumb),Ig(2),Rb(`p-value`,n.userId),Ig(),Rb(`p-value`,n.email),Ig(),Rb(`p-value`,n.name),Ig(3),Rb(`p-value`,n.nickname),Ig(),Rb(`p-value`,n.birthDate),Ig(),Rb(`p-value`,n.genre),Ig(3),Rb(`p-value`,n.nationality),Ig(),Rb(`p-value`,n.placeOfBirth),Ig(),Rb(`p-value`,n.graduation),Ig(3),Rb(`p-value`,n.fathersName),Ig(),Rb(`p-value`,n.mothersName))},dependencies:[Lf,Yoe,Dze],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Detail - User`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-detail-user`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Tk(8,`po-page-default`),Zg(),Tk(9,`, `),Jc(10,`code`),Tk(11,`po-page-detail`),Zg(),Tk(12,`,
`),Jc(13,`code`),Tk(14,`po-page-edit`),Zg(),Tk(15,`, `),Jc(16,`code`),Tk(17,`po-page-list`),Zg(),Tk(18,` e `),Jc(19,`code`),Tk(20,`po-page-slide`),Zg(),Tk(21,`.`),Zg()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoPageDetailComponent`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,`O componente `),Jc(30,`strong`),Tk(31,`po-page-detail`),Zg(),Tk(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),Zg(),Jc(33,`h4`),Tk(34,`Tokens customizáveis`),Zg(),Jc(35,`blockquote`)(36,`p`),Tk(37,`Para maiores informações, acesse o guia `),Jc(38,`a`,6),Tk(39,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(40,`.`),Zg()(),Jc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),Tk(45,`Propriedade`),Zg(),Jc(46,`th`),Tk(47,`Descrição`),Zg(),Jc(48,`th`),Tk(49,`Valor Padrão`),Zg()()(),Jc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),Tk(54,`Header`),Zg()(),_u(55,`td`)(56,`td`),Zg(),Jc(57,`tr`)(58,`td`)(59,`code`),Tk(60,`--padding`),Zg()(),Jc(61,`td`),Tk(62,`Espaçamento do header`),Zg(),Jc(63,`td`)(64,`code`),Tk(65,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Tk(69,`--gap`),Zg()(),Jc(70,`td`),Tk(71,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(72,`td`)(73,`code`),Tk(74,`var(--spacing-md)`),Zg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Tk(78,`--gap-actions`),Zg()(),Jc(79,`td`),Tk(80,`Espaçamento entre as ações`),Zg(),Jc(81,`td`)(82,`code`),Tk(83,`var(--spacing-xs)`),Zg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Tk(87,`--font-family`),Zg()(),Jc(88,`td`),Tk(89,`Família tipográfica do título`),Zg(),Jc(90,`td`)(91,`code`),Tk(92,`var(--font-family-theme)`),Zg()()(),Jc(93,`tr`)(94,`td`)(95,`strong`),Tk(96,`Content`),Zg()(),_u(97,`td`)(98,`td`),Zg(),Jc(99,`tr`)(100,`td`)(101,`code`),Tk(102,`--padding-content`),Zg()(),Jc(103,`td`),Tk(104,`Espaçamento do conteúdo`),Zg(),Jc(105,`td`)(106,`code`),Tk(107,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(108,`div`,7)(109,`h4`,8),Tk(110,`Seletor`),Zg(),Jc(111,`pre`,9),Tk(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),Zg()(),Jc(113,`h4`,10),Tk(114,`Propriedades`),Zg(),Jc(115,`table`,11)(116,`tr`,12)(117,`th`,13),Tk(118,`Nome`),Zg(),Jc(119,`th`,13),Tk(120,`Tipo`),Zg(),Jc(121,`th`,13),Tk(122,`Padrão`),Zg(),Jc(123,`th`,13),Tk(124,`Descrição`),Zg()(),Jc(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),Tk(129,` (p-back)`),_u(130,`br`),Zg()()(),Jc(131,`td`,18)(132,`code`,19),Tk(133,`EventEmitter`),Zg()(),Jc(134,`td`,20),Tk(135,`-`),Zg(),Jc(136,`td`,21)(137,`p`),Tk(138,`Evento que será disparado ao clicar no botão de "Voltar".`),Zg(),Jc(139,`pre`)(140,`code`),Tk(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),Zg()(),Jc(142,`blockquote`)(143,`p`),Tk(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),Zg()()()(),Jc(145,`tr`,14)(146,`td`,15)(147,`div`,22)(148,`span`,23),Tk(149,` p-breadcrumb`),_u(150,`br`),Zg()()(),Jc(151,`td`,18)(152,`code`,24),Tk(153,`PoBreadcrumb`),Zg()(),Jc(154,`td`,20),Tk(155,`-`),Zg(),Jc(156,`td`,21)(157,`p`),Tk(158,`Objeto com propriedades do breadcrumb.`),Zg()()(),Jc(159,`tr`,14)(160,`td`,15)(161,`div`,22)(162,`span`,23),Tk(163,` p-components-size`),_u(164,`br`),Zg()()(),Jc(165,`td`,18)(166,`code`,25),Tk(167,`string`),Zg()(),Jc(168,`td`,20)(169,`p`)(170,`code`),Tk(171,`medium`),Zg()()(),Jc(172,`td`,21)(173,`em`)(174,`strong`),Tk(175,`(opcional)`),Zg()(),Jc(176,`p`),Tk(177,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(178,`ul`)(179,`li`)(180,`code`),Tk(181,`small`),Zg(),Tk(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(183,`li`)(184,`code`),Tk(185,`medium`),Zg(),Tk(186,`: aplica a medida medium de cada componente.`),Zg()(),Jc(187,`blockquote`)(188,`p`),Tk(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(190,`code`),Tk(191,`medium`),Zg(),Tk(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(193,`a`,26),Tk(194,`po-theme`),Zg(),Tk(195,`.`),Zg()()()(),Jc(196,`tr`,14)(197,`td`,15)(198,`div`,16)(199,`span`,17),Tk(200,` (p-edit)`),_u(201,`br`),Zg()()(),Jc(202,`td`,18)(203,`code`,19),Tk(204,`EventEmitter`),Zg()(),Jc(205,`td`,20),Tk(206,`-`),Zg(),Jc(207,`td`,21)(208,`p`),Tk(209,`Evento que será disparado ao clicar no botão de "Editar".`),Zg(),Jc(210,`pre`)(211,`code`),Tk(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),Zg()(),Jc(213,`blockquote`)(214,`p`),Tk(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),Zg()()()(),Jc(216,`tr`,14)(217,`td`,15)(218,`div`,22)(219,`span`,23),Tk(220,` p-literals`),_u(221,`br`),Zg()()(),Jc(222,`td`,18)(223,`code`,27),Tk(224,`PoPageDetailLiterals`),Zg()(),Jc(225,`td`,20),Tk(226,`-`),Zg(),Jc(227,`td`,21)(228,`em`)(229,`strong`),Tk(230,`(opcional)`),Zg()(),Jc(231,`p`),Tk(232,`Objeto com as literais usadas no `),Jc(233,`code`),Tk(234,`po-page-detail`),Zg(),Tk(235,`.`),Zg(),Jc(236,`p`),Tk(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(238,`pre`)(239,`code`),Tk(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),Zg()(),Jc(241,`p`),Tk(242,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(243,`pre`)(244,`code`),Tk(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),Zg()(),Jc(246,`p`),Tk(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(248,`pre`)(249,`code`),Tk(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),Zg()(),Jc(251,`blockquote`)(252,`p`),Tk(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(254,`a`,28)(255,`code`),Tk(256,`PoI18nService`),Zg()(),Tk(257,` ou do browser.`),Zg()()()(),Jc(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),Tk(262,` (p-remove)`),_u(263,`br`),Zg()()(),Jc(264,`td`,18)(265,`code`,19),Tk(266,`EventEmitter`),Zg()(),Jc(267,`td`,20),Tk(268,`-`),Zg(),Jc(269,`td`,21)(270,`p`),Tk(271,`Evento que será disparado ao clicar no botão de "Remover".`),Zg(),Jc(272,`pre`)(273,`code`),Tk(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),Zg()(),Jc(275,`blockquote`)(276,`p`),Tk(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),Zg()()()(),Jc(278,`tr`,14)(279,`td`,15)(280,`div`,22)(281,`span`,23),Tk(282,` p-subtitle`),_u(283,`br`),Zg()()(),Jc(284,`td`,18)(285,`code`,25),Tk(286,`string`),Zg()(),Jc(287,`td`,20),Tk(288,`-`),Zg(),Jc(289,`td`,21)(290,`em`)(291,`strong`),Tk(292,`(opcional)`),Zg()(),Jc(293,`p`),Tk(294,`Subtitulo do Header da página.`),Zg(),Jc(295,`p`),Tk(296,`Suporta formatação básica com as tags `),Jc(297,`code`),Tk(298,`<b>`),Zg(),Tk(299,` (negrito), `),Jc(300,`code`),Tk(301,`<strong>`),Zg(),Tk(302,` (negrito), `),Jc(303,`code`),Tk(304,`<i>`),Zg(),Tk(305,` (itálico), `),Jc(306,`code`),Tk(307,`<em>`),Zg(),Tk(308,` (it\xE1lico) e
`),Jc(309,`code`),Tk(310,`<u>`),Zg(),Tk(311,` (sublinhado).`),Zg(),Jc(312,`p`),Tk(313,`Exemplo:`),Zg(),Jc(314,`pre`)(315,`code`,29),Tk(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),Zg()(),Jc(317,`blockquote`)(318,`p`),Tk(319,`Requer que `),Jc(320,`code`),Tk(321,`p-title`),Zg(),Tk(322,` esteja definido.`),Zg()()()(),Jc(323,`tr`,14)(324,`td`,15)(325,`div`,22)(326,`span`,23),Tk(327,` p-title`),_u(328,`br`),Zg()()(),Jc(329,`td`,18)(330,`code`,25),Tk(331,`string`),Zg()(),Jc(332,`td`,20),Tk(333,`-`),Zg(),Jc(334,`td`,21)(335,`p`),Tk(336,`Título da página.`),Zg()()()(),Jc(337,`h3`),Tk(338,`Interfaces`),Zg(),Jc(339,`h4`,30)(340,`code`,5),Tk(341,`PoBreadcrumbItem`),Zg()(),Jc(342,`div`,2)(343,`p`),Tk(344,`Interface que define cada item do componente `),Jc(345,`strong`),Tk(346,`po-breadcrumb`),Zg(),Tk(347,`.`),Zg()(),Jc(348,`h4`,10),Tk(349,`Propriedades`),Zg(),Jc(350,`table`,11)(351,`tr`,12)(352,`th`,13),Tk(353,`Nome`),Zg(),Jc(354,`th`,13),Tk(355,`Tipo`),Zg(),Jc(356,`th`,13),Tk(357,`Descrição`),Zg()(),Jc(358,`tr`,14)(359,`td`,15)(360,`div`,22)(361,`span`,23),Tk(362,` action`),_u(363,`br`),Zg()()(),Jc(364,`td`,18)(365,`code`,31),Tk(366,`Function`),Zg()(),Jc(367,`td`,21)(368,`em`)(369,`strong`),Tk(370,`(opcional)`),Zg()(),Jc(371,`p`),Tk(372,`Ação executada ao clicar no item.`),Zg(),Jc(373,`blockquote`)(374,`p`),Tk(375,`A função atribuída a esta propriedade receberá o `),Jc(376,`em`),Tk(377,`label`),Zg(),Tk(378,` do item como parâmetro para execução.`),Zg()()()(),Jc(379,`tr`,14)(380,`td`,15)(381,`div`,22)(382,`span`,23),Tk(383,` label`),_u(384,`br`),Zg()()(),Jc(385,`td`,18)(386,`code`,25),Tk(387,`string`),Zg()(),Jc(388,`td`,21)(389,`p`),Tk(390,`Rótulo do item.`),Zg()()(),Jc(391,`tr`,14)(392,`td`,15)(393,`div`,22)(394,`span`,23),Tk(395,` link`),_u(396,`br`),Zg()()(),Jc(397,`td`,18)(398,`code`,25),Tk(399,`string`),Zg()(),Jc(400,`td`,21)(401,`em`)(402,`strong`),Tk(403,`(opcional)`),Zg()(),Jc(404,`p`),Tk(405,`Url do item.`),Zg(),Jc(406,`blockquote`)(407,`p`),Tk(408,`Caso o item também contenha uma `),Jc(409,`em`),Tk(410,`action`),Zg(),Tk(411,` definida, a preferência de execução será do `),Jc(412,`em`),Tk(413,`link`),Zg(),Tk(414,`.`),Zg()(),Jc(415,`blockquote`)(416,`p`),Tk(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(418,`strong`)(419,`a`,32),Tk(420,`Veja um exemplo de como criar rotas aqui`),Zg()(),Tk(421,`.`),Zg()(),Jc(422,`blockquote`)(423,`p`),Tk(424,`Esta propriedade é necessária para que a propriedade `),Jc(425,`code`),Tk(426,`p-favorite-service`),Zg(),Tk(427,` consiga favoritar ou desfavoritar.`),Zg()()()()(),Jc(428,`h4`,30)(429,`code`,5),Tk(430,`PoBreadcrumb`),Zg()(),Jc(431,`div`,2)(432,`p`),Tk(433,`Interface que define o `),Jc(434,`code`),Tk(435,`po-breadcrumb`),Zg(),Tk(436,`.`),Zg()(),Jc(437,`h4`,10),Tk(438,`Propriedades`),Zg(),Jc(439,`table`,11)(440,`tr`,12)(441,`th`,13),Tk(442,`Nome`),Zg(),Jc(443,`th`,13),Tk(444,`Tipo`),Zg(),Jc(445,`th`,13),Tk(446,`Descrição`),Zg()(),Jc(447,`tr`,14)(448,`td`,15)(449,`div`,22)(450,`span`,23),Tk(451,` favorite`),_u(452,`br`),Zg()()(),Jc(453,`td`,18)(454,`code`,25),Tk(455,`string`),Zg()(),Jc(456,`td`,21)(457,`em`)(458,`strong`),Tk(459,`(opcional)`),Zg()(),Jc(460,`p`),Tk(461,`Permite definir uma URL para favoritar ou desfavoritar.`),Zg(),Jc(462,`blockquote`)(463,`p`),Tk(464,`Para maiores informações verificar a propriedade `),Jc(465,`code`),Tk(466,`p-favorite-service`),Zg(),Tk(467,` do componente `),Jc(468,`code`),Tk(469,`po-breadcrumb`),Zg(),Tk(470,`.`),Zg()()()(),Jc(471,`tr`,14)(472,`td`,15)(473,`div`,22)(474,`span`,23),Tk(475,` items`),_u(476,`br`),Zg()()(),Jc(477,`td`,18)(478,`code`,33),Tk(479,`Array<PoBreadcrumbItem>`),Zg()(),Jc(480,`td`,21)(481,`p`),Tk(482,`Lista de itens do `),Jc(483,`em`),Tk(484,`breadcrumb`),Zg(),Tk(485,`.`),Zg(),Jc(486,`p`)(487,`strong`),Tk(488,`Exemplo:`),Zg()(),Jc(489,`pre`)(490,`code`),Tk(491,`{ label: 'Po Portal', link: 'portal' }
`),Zg()()()(),Jc(492,`tr`,14)(493,`td`,15)(494,`div`,22)(495,`span`,23),Tk(496,` params`),_u(497,`br`),Zg()()(),Jc(498,`td`,18)(499,`code`,34),Tk(500,`object`),Zg()(),Jc(501,`td`,21)(502,`em`)(503,`strong`),Tk(504,`(opcional)`),Zg()(),Jc(505,`p`),Tk(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Zg()()()(),Jc(507,`h4`,30)(508,`code`,5),Tk(509,`PoPageDetailLiterals`),Zg()(),Jc(510,`div`,2)(511,`p`),Tk(512,`Interface para definição das literais usadas no `),Jc(513,`code`),Tk(514,`po-page-detail`),Zg(),Tk(515,`.`),Zg()(),Jc(516,`h4`,10),Tk(517,`Propriedades`),Zg(),Jc(518,`table`,11)(519,`tr`,12)(520,`th`,13),Tk(521,`Nome`),Zg(),Jc(522,`th`,13),Tk(523,`Tipo`),Zg(),Jc(524,`th`,13),Tk(525,`Descrição`),Zg()(),Jc(526,`tr`,14)(527,`td`,15)(528,`div`,22)(529,`span`,23),Tk(530,` back`),_u(531,`br`),Zg()()(),Jc(532,`td`,18)(533,`code`,25),Tk(534,`string`),Zg()(),Jc(535,`td`,21)(536,`em`)(537,`strong`),Tk(538,`(opcional)`),Zg()(),Jc(539,`p`),Tk(540,`Label da ação `),Jc(541,`code`),Tk(542,`back`),Zg(),Tk(543,`.`),Zg()()(),Jc(544,`tr`,14)(545,`td`,15)(546,`div`,22)(547,`span`,23),Tk(548,` edit`),_u(549,`br`),Zg()()(),Jc(550,`td`,18)(551,`code`,25),Tk(552,`string`),Zg()(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Tk(556,`(opcional)`),Zg()(),Jc(557,`p`),Tk(558,`Label da ação `),Jc(559,`code`),Tk(560,`edit`),Zg(),Tk(561,`.`),Zg()()(),Jc(562,`tr`,14)(563,`td`,15)(564,`div`,22)(565,`span`,23),Tk(566,` remove`),_u(567,`br`),Zg()()(),Jc(568,`td`,18)(569,`code`,25),Tk(570,`string`),Zg()(),Jc(571,`td`,21)(572,`em`)(573,`strong`),Tk(574,`(opcional)`),Zg()(),Jc(575,`p`),Tk(576,`Label da ação `),Jc(577,`code`),Tk(578,`remove`),Zg(),Tk(579,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function xe(a,ye){if(a&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-page-detail-basic-view`)(2,`sample-po-page-detail-labs-view`)(3,`sample-po-page-detail-user-view`),Zg()}if(a&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var De=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Detail`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,xe,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-page-detail-doc`),Zg()()()),l&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,oe,re,pe,de],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[WV.forChild(De),WV]})}return a})();var et=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[M,ce]})}return a})();export{et as DocPoPageDetailModule};
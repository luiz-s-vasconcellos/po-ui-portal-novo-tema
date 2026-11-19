import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,F as Joe,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,S as Eze,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,lt as Ss,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-basic`]],standalone:!1,decls:1,vars:0,template:function(a,n){a&1&&vu(0,`po-divider`)},dependencies:[Nf],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-divider-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-divider-basic/sample-po-divider-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-divider-basic/sample-po-divider-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Divider Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-divider-basic/sample-po-divider-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-divider></po-divider>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-divider-basic/sample-po-divider-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-divider-basic',
  templateUrl: './sample-po-divider-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-divider-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,be,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,oe],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{borderWidth;label;borderWidthList=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}restore(){this.label=void 0,this.borderWidth=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-labs`]],standalone:!1,decls:8,vars:5,consts:[[`f`,`ngForm`],[3,`p-label`,`p-border-width`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderWidth`,`p-label`,`Border width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let f=YO();vu(0,`po-divider`,1),Qc(1,`form`,null,0)(3,`div`,2)(4,`po-input`,3),z0(),Kb(`ngModelChange`,function(h){return B_(f),Tk(n.label,h)||(n.label=h),U_(h)}),Kg(),Qc(5,`po-select`,4),z0(),Kb(`ngModelChange`,function(h){return B_(f),Tk(n.borderWidth,h)||(n.borderWidth=h),U_(h)}),Kg()(),Qc(6,`div`,2)(7,`po-button`,5),vt(`p-click`,function(){return n.restore()}),Kg()()()}a&2&&(Rb(`p-label`,n.label)(`p-border-width`,n.borderWidth),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.borderWidth),Rb(`p-options`,n.borderWidthList),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Koe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-divider-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-divider-labs/sample-po-divider-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-divider-labs/sample-po-divider-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Divider Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-divider-labs/sample-po-divider-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-divider [p-label]="label" [p-border-width]="borderWidth"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
    <po-select
      class="po-md-6"
      name="borderWidth"
      [(ngModel)]="borderWidth"
      p-label="Border width"
      [p-options]="borderWidthList"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-divider-labs/sample-po-divider-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-labs',
  templateUrl: './sample-po-divider-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerLabsComponent implements OnInit {
  borderWidth: string;
  label: string;

  public readonly borderWidthList: Array<PoSelectOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = undefined;
    this.borderWidth = undefined;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-divider-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,fe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,le],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{router=p(An);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`Big John`;placeOfBirth=`Colorado`;statusValue=`Success`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-user-detail`]],standalone:!1,decls:19,vars:13,consts:[[`p-title`,`User Detail`,3,`p-breadcrumb`],[1,`po-row`,`po-mb-4`],[`p-label`,`Status`,1,`po-md-12`],[`p-icon`,``,`p-label`,`Status`,`p-type`,`success`,1,`po-md-4`,3,`p-value`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`Personal data`,1,`po-md-12`],[`p-label`,`Name`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Birthday`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Place of birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Gratuation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Relationship`,1,`po-md-12`],[`p-label`,`Father's name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mother's name`,1,`po-md-4`,3,`p-value`]],template:function(a,n){a&1&&(Qc(0,`po-page-detail`,0)(1,`div`,1),vu(2,`po-divider`,2)(3,`po-tag`,3)(4,`po-info`,4),Kg(),Qc(5,`div`,1),vu(6,`po-divider`,5)(7,`po-info`,6)(8,`po-info`,7)(9,`po-info`,8)(10,`po-info`,9)(11,`po-info`,10)(12,`po-info`,11)(13,`po-info`,12)(14,`po-info`,13),Kg(),Qc(15,`div`,1),vu(16,`po-divider`,14)(17,`po-info`,15)(18,`po-info`,16),Kg()()),a&2&&(Rb(`p-breadcrumb`,n.breadcrumb),wg(3),Rb(`p-value`,n.statusValue),wg(),Rb(`p-value`,n.userId),wg(3),Rb(`p-value`,n.name),wg(),Rb(`p-value`,n.nickname),wg(),Rb(`p-value`,n.email),wg(),Rb(`p-value`,n.birthDate),wg(),Rb(`p-value`,n.genre),wg(),Rb(`p-value`,n.nationality),wg(),Rb(`p-value`,n.placeOfBirth),wg(),Rb(`p-value`,n.graduation),wg(3),Rb(`p-value`,n.fathersName),wg(),Rb(`p-value`,n.mothersName))},dependencies:[Nf,Ss,Joe,Eze],encapsulation:2,changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-user-detail-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-divider-user-detail`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Divider - User Detail`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb">
  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Status"></po-divider>

    <po-tag class="po-md-4" p-icon p-label="Status" p-type="success" [p-value]="statusValue"> </po-tag>

    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Personal data"></po-divider>

    <po-info class="po-md-4 po-mb-md-2" p-label="Name" [p-value]="name"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Birthday" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Genre" [p-value]="genre"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place of birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Gratuation" [p-value]="graduation"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Relationship"></po-divider>

    <po-info class="po-md-4" p-label="Father's name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mother's name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-user-detail',
  templateUrl: './sample-po-divider-user-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerUserDetailComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'Big John';
  placeOfBirth: string = 'Colorado';
  statusValue: string = 'Success';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-divider-user-detail`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ce,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-divider-doc`]],standalone:!1,decls:170,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-divider-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-border-width`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`enum-po-divider-size`,1,`docs-api-class-name`],[`id`,`enum-po-divider-size-small`,1,`docs-api-properties-row`],[`id`,`enum-po-divider-size-medium`,1,`docs-api-properties-row`],[`id`,`enum-po-divider-size-large`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoDividerModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-divider.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoDividerComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este componente apresenta uma linha demarcadora de blocos e pode conter um `),Qc(15,`em`),Sk(16,`label`),Kg(),Sk(17,`. Seu uso \xE9 indicado para defini\xE7\xE3o
e organiza\xE7\xE3o de informa\xE7\xF5es em uma tela e sua caracter\xEDstica \xE9 semelhante \xE0 tag `),Qc(18,`code`),Sk(19,`<hr>`),Kg(),Sk(20,`.`),Kg(),Qc(21,`h4`),Sk(22,`Tokens customizáveis`),Kg(),Qc(23,`p`),Sk(24,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(25,`blockquote`)(26,`p`),Sk(27,`Para maiores informações, acesse o guia `),Qc(28,`a`,6),Sk(29,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(30,`.`),Kg()(),Qc(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),Sk(35,`Propriedade`),Kg(),Qc(36,`th`),Sk(37,`Descrição`),Kg(),Qc(38,`th`),Sk(39,`Valor Padrão`),Kg()()(),Qc(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),Sk(44,`Default Values`),Kg()(),vu(45,`td`)(46,`td`),Kg(),Qc(47,`tr`)(48,`td`)(49,`code`),Sk(50,`--color`),Kg()(),Qc(51,`td`),Sk(52,`Cor principla do divider\xA0`),Kg(),Qc(53,`td`)(54,`code`),Sk(55,`var(--color-neutral-mid-40)`),Kg()()(),Qc(56,`tr`)(57,`td`)(58,`code`),Sk(59,`--stroke-linecap`),Kg()(),Qc(60,`td`),Sk(61,`Extremidade da linha\xA0`),Kg(),Qc(62,`td`)(63,`code`),Sk(64,`round`),Kg()()()()()(),Qc(65,`div`,7)(66,`h4`,8),Sk(67,`Seletor`),Kg(),Qc(68,`pre`,9),Sk(69,`<po-divider
    p-border-width="string"
    p-label="string" >
</po-divider>
`),Kg()(),Qc(70,`h4`,10),Sk(71,`Propriedades`),Kg(),Qc(72,`table`,11)(73,`tr`,12)(74,`th`,13),Sk(75,`Nome`),Kg(),Qc(76,`th`,13),Sk(77,`Tipo`),Kg(),Qc(78,`th`,13),Sk(79,`Padrão`),Kg(),Qc(80,`th`,13),Sk(81,`Descrição`),Kg()(),Qc(82,`tr`,14)(83,`td`,15)(84,`div`,16)(85,`span`,17),Sk(86,` p-border-width`),vu(87,`br`),Kg()()(),Qc(88,`td`,18)(89,`code`,19),Sk(90,`string`),Kg()(),Qc(91,`td`,20)(92,`p`)(93,`code`),Sk(94,`small`),Kg()()(),Qc(95,`td`,21)(96,`em`)(97,`strong`),Sk(98,`(opcional)`),Kg()(),Qc(99,`p`),Sk(100,`Define a espessura da linha.`),Kg(),Qc(101,`p`),Sk(102,`Valores válidos:`),Kg(),Qc(103,`ul`)(104,`li`),Sk(105,`small`),Kg(),Qc(106,`li`),Sk(107,`medium`),Kg(),Qc(108,`li`),Sk(109,`large`),Kg()()()(),Qc(110,`tr`,22)(111,`td`,15)(112,`div`,16)(113,`span`,17),Sk(114,` p-label`),vu(115,`br`),Kg()()(),Qc(116,`td`,18)(117,`code`,19),Sk(118,`string`),Kg()(),Qc(119,`td`,20),Sk(120,`-`),Kg(),Qc(121,`td`,21)(122,`em`)(123,`strong`),Sk(124,`(opcional)`),Kg()(),Qc(125,`p`),Sk(126,`Valor do rótulo a ser exibido.`),Kg()()()(),Qc(127,`h3`),Sk(128,`Enums`),Kg(),Qc(129,`h4`,23)(130,`code`,5),Sk(131,`PoDividerSize`),Kg()(),Qc(132,`div`,2)(133,`p`),Sk(134,`Enum para definição da espessura da linha.`),Kg()(),Qc(135,`h4`,10),Sk(136,`Propriedades`),Kg(),Qc(137,`table`,11)(138,`tr`,12)(139,`th`,13),Sk(140,`Nome`),Kg(),Qc(141,`th`,13),Sk(142,`Descrição`),Kg()(),Qc(143,`tr`,24)(144,`td`,15)(145,`div`,16)(146,`span`,17),Sk(147,` small`),vu(148,`br`),Kg()()(),Qc(149,`td`,21)(150,`p`),Sk(151,`A espessura da linha fica com 1px.`),Kg()()(),Qc(152,`tr`,25)(153,`td`,15)(154,`div`,16)(155,`span`,17),Sk(156,` medium`),vu(157,`br`),Kg()()(),Qc(158,`td`,21)(159,`p`),Sk(160,`A espessura da linha fica com 2px.`),Kg()()(),Qc(161,`tr`,26)(162,`td`,15)(163,`div`,16)(164,`span`,17),Sk(165,` large`),vu(166,`br`),Kg()()(),Qc(167,`td`,21)(168,`p`),Sk(169,`A espessura da linha fica com 4px.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function ye(o,we){if(o&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-divider-basic-view`)(2,`sample-po-divider-labs-view`)(3,`sample-po-divider-user-detail-view`),Kg()}if(o&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Pe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Divider`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ye,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-divider-doc`),Kg()()()),a&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ae,pe,de,me],encapsulation:2,changeDetection:1})}return o})()}];var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(Pe),GV]})}return o})();var nt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,ce]})}return o})();export{nt as DocPoDividerModule};
import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,It as bae,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&vu(0,`po-avatar`,0)},dependencies:[c4],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-avatar-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Avatar Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-avatar-basic`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ge,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,oe],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let g=YO();vu(0,`po-avatar`,1)(1,`po-divider`,2),Qc(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),z0(),Kb(`ngModelChange`,function(u){return B_(g),Tk(i.size,u)||(i.size=u),U_(u)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(u){return B_(g),Tk(i.src,u)||(i.src=u),U_(u)}),Kg()(),Qc(7,`div`,3)(8,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Kg()()()}o&2&&(Rb(`p-size`,i.size)(`p-src`,i.src),wg(5),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0(),wg(),Yb(`ngModel`,i.src),W0())},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,Nf,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-avatar-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Avatar Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="sizes"
      [(ngModel)]="size"
      p-help="Select a size for the avatar"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="src"
      [(ngModel)]="src"
      p-clear
      p-help="Enter a url or path of the image that will be displayed"
      p-label="Source"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-avatar-labs',
  templateUrl: './sample-po-avatar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarLabsComponent implements OnInit {
  src: string;
  size: string;

  sizeOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Extra Large (144x144)', value: 'xl' },
    { label: 'Large (96x96)', value: 'lg' },
    { label: 'Medium (64x64)', value: 'md' },
    { label: 'Small (32x32)', value: 'sm' },
    { label: 'Extra small (24x24)', value: 'xs' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.src = 'http://lorempixel.com/144/144/cats';
    this.size = undefined;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-avatar-labs`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ce,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(r){window.open(`tel:${r}`,`_self`)}sendContact(r){window.open(`mailto:${r}`,`_self`)}formatPhoneNumber(r){return`(${r.substring(0,2)}) ${r.substring(2,7)}-${r.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let g=YO();Qc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),Qc(2,`po-avatar`,3),vt(`p-click`,function(){B_(g);let u=ik(17);return U_(u.open())}),Kg(),Qc(3,`div`,4)(4,`p`)(5,`strong`),Sk(6,`Name:`),Kg(),Sk(7),Kg(),Qc(8,`p`)(9,`strong`),Sk(10,`Phone:`),Kg(),Sk(11),Kg(),Qc(12,`p`)(13,`strong`),Sk(14,`E-mail:`),Kg(),Sk(15),Kg()()()(),Qc(16,`po-modal`,5,0),vu(18,`img`,6),Kg()}o&2&&(wg(2),Rb(`p-src`,i.avatar),wg(5),tm(` `,i.contact.name),wg(4),tm(` `,i.formatPhoneNumber(i.contact.phone)),wg(4),tm(` `,i.contact.email),wg(3),Rb(`src`,i.avatar))},dependencies:[c4,ia,bae],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-avatar-business-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Avatar - Business Card`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget
    class="po-sm-12 po-md-8 po-lg-6"
    p-height="250"
    p-title="Business Card"
    p-primary-label="Call"
    p-secondary-label="Send e-mail"
    (p-primary-action)="callContact(contact.phone)"
    (p-secondary-action)="sendContact(contact.email)"
  >
    <po-avatar class="po-md-4" p-size="lg" [p-src]="avatar" (p-click)="modal.open()"> </po-avatar>

    <div class="po-md-8">
      <p><strong>Name:</strong> { { contact.name }}</p>
      <p><strong>Phone:</strong> { { formatPhoneNumber(contact.phone) }}</p>
      <p><strong>E-mail:</strong> { { contact.email }}</p>
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Profile Image">
  <img [src]="avatar" class="sample-center-image" />
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-business-card',
  styleUrls: ['./sample-po-avatar-business-card.component.css'],
  templateUrl: './sample-po-avatar-business-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBusinessCardComponent {
  avatar = 'http://lorempixel.com/300/300/cats/';

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(\`tel:\${phone}\`, '_self');
  }

  sendContact(email) {
    window.open(\`mailto:\${email}\`, '_self');
  }

  formatPhoneNumber(phone) {
    return \`(\${phone.substring(0, 2)}) \${phone.substring(2, 7)}-\${phone.substring(7)}\`;
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-avatar-business-card`),Kg(),vu(29,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-avatar-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-src`,1,`docs-api-properties-row`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-avatar.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoAvatarComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-avatar`),Kg(),Sk(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),Kg(),Qc(18,`p`),Sk(19,`Além de poder ser utilizado separadamente, é possível usar o `),Qc(20,`code`),Sk(21,`po-avatar`),Kg(),Sk(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),Kg()(),Qc(23,`div`,6)(24,`h4`,7),Sk(25,`Seletor`),Kg(),Qc(26,`pre`,8),Sk(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),Kg()(),Qc(28,`h4`,9),Sk(29,`Propriedades`),Kg(),Qc(30,`table`,10)(31,`tr`,11)(32,`th`,12),Sk(33,`Nome`),Kg(),Qc(34,`th`,12),Sk(35,`Tipo`),Kg(),Qc(36,`th`,12),Sk(37,`Padrão`),Kg(),Qc(38,`th`,12),Sk(39,`Descrição`),Kg()(),Qc(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),Sk(44,` (p-click)`),vu(45,`br`),Kg()()(),Qc(46,`td`,17)(47,`code`,18),Sk(48,`EventEmitter`),Kg()(),Qc(49,`td`,19),Sk(50,`-`),Kg(),Qc(51,`td`,20)(52,`p`),Sk(53,`Evento disparado ao clicar na imagem do `),Qc(54,`em`),Sk(55,`avatar`),Kg(),Sk(56,`.`),Kg()()(),Qc(57,`tr`,21)(58,`td`,14)(59,`div`,22)(60,`span`,23),Sk(61,` p-loading`),vu(62,`br`),Kg()()(),Qc(63,`td`,17)(64,`code`,24),Sk(65,`'eager' `),Kg(),Qc(66,`code`,25),Sk(67,` 'lazy'`),Kg()(),Qc(68,`td`,19)(69,`p`)(70,`code`),Sk(71,`eager`),Kg()()(),Qc(72,`td`,20)(73,`em`)(74,`strong`),Sk(75,`(opcional)`),Kg()(),Qc(76,`p`),Sk(77,`Indica como o navegador deve carregar a imagem.`),Kg(),Qc(78,`p`),Sk(79,`Valores válidos:`),Kg(),Qc(80,`ul`)(81,`li`)(82,`code`),Sk(83,`eager`),Kg(),Sk(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),Kg(),Qc(85,`li`)(86,`code`),Sk(87,`lazy`),Kg(),Sk(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),Kg()()()(),Qc(89,`tr`,26)(90,`td`,14)(91,`div`,22)(92,`span`,23),Sk(93,` p-size`),vu(94,`br`),Kg()()(),Qc(95,`td`,17)(96,`code`,27),Sk(97,`string`),Kg()(),Qc(98,`td`,19)(99,`p`)(100,`code`),Sk(101,`md`),Kg()()(),Qc(102,`td`,20)(103,`em`)(104,`strong`),Sk(105,`(opcional)`),Kg()(),Qc(106,`p`),Sk(107,`Tamanho de exibição do componente.`),Kg(),Qc(108,`p`),Sk(109,`Valores válidos:`),Kg(),Qc(110,`ul`)(111,`li`)(112,`code`),Sk(113,`xs`),Kg(),Sk(114,` (24x24)`),Kg(),Qc(115,`li`)(116,`code`),Sk(117,`sm`),Kg(),Sk(118,` (32x32)`),Kg(),Qc(119,`li`)(120,`code`),Sk(121,`md`),Kg(),Sk(122,` (64x64)`),Kg(),Qc(123,`li`)(124,`code`),Sk(125,`lg`),Kg(),Sk(126,` (96x96)`),Kg(),Qc(127,`li`)(128,`code`),Sk(129,`xl`),Kg(),Sk(130,` (144x144)`),Kg()()()(),Qc(131,`tr`,28)(132,`td`,14)(133,`div`,22)(134,`span`,23),Sk(135,` p-src`),vu(136,`br`),Kg()()(),Qc(137,`td`,17)(138,`code`,27),Sk(139,`string`),Kg()(),Qc(140,`td`,19),Sk(141,`-`),Kg(),Qc(142,`td`,20)(143,`p`),Sk(144,`Fonte da imagem que pode ser um caminho local (`),Qc(145,`code`),Sk(146,`./assets/images/logo-black-small.png`),Kg(),Sk(147,`)
ou um servidor externo (`),Qc(148,`code`),Sk(149,`https://po-ui.io/assets/images/logo-black-small.png`),Kg(),Sk(150,`).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Pe(n,_e){if(n&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-avatar-basic-view`)(2,`sample-po-avatar-labs-view`)(3,`sample-po-avatar-business-card-view`),Kg()}if(n&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var we=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Pe,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-avatar-doc`),Kg()()()),o&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,re,le,me,ce],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(we),GV]})}return n})();var tt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,ue]})}return n})();export{tt as DocPoAvatarModule};
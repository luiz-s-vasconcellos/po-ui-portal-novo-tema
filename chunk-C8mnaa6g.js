import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,an as j4,cr as Bk,ea as ge,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,jr as I,no as yk,nr as An,qa as vt,qi as de$1,rn as ia,tr as Ak,va as nk,vn as oi,xi as VO,ya as nm,zt as c4}from"./chunk-BJubg121.js";var ne=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&_u(0,`po-avatar`,0)},dependencies:[c4],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Avatar Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-avatar-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ve,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ne],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let g=ZO();_u(0,`po-avatar`,1)(1,`po-divider`,2),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),W0(),Zb(`ngModelChange`,function(u){return H_(g),Ak(i.size,u)||(i.size=u),$_(u)}),Zg(),Jc(6,`po-input`,5),W0(),Zb(`ngModelChange`,function(u){return H_(g),Ak(i.src,u)||(i.src=u),$_(u)}),Zg()(),Jc(7,`div`,3)(8,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Zg()()()}o&2&&(Ab(`p-size`,i.size)(`p-src`,i.src),Ig(5),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),Y0(),Ig(),Kb(`ngModel`,i.src),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,c4,oi,Nf,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Avatar Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-avatar-labs`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,be,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(r){window.open(`tel:${r}`,`_self`)}sendContact(r){window.open(`mailto:${r}`,`_self`)}formatPhoneNumber(r){return`(${r.substring(0,2)}) ${r.substring(2,7)}-${r.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let g=ZO();Jc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),Jc(2,`po-avatar`,3),vt(`p-click`,function(){H_(g);let u=sk(17);return $_(u.open())}),Zg(),Jc(3,`div`,4)(4,`p`)(5,`strong`),Tk(6,`Name:`),Zg(),Tk(7),Zg(),Jc(8,`p`)(9,`strong`),Tk(10,`Phone:`),Zg(),Tk(11),Zg(),Jc(12,`p`)(13,`strong`),Tk(14,`E-mail:`),Zg(),Tk(15),Zg()()()(),Jc(16,`po-modal`,5,0),_u(18,`img`,6),Zg()}o&2&&(Ig(2),Ab(`p-src`,i.avatar),Ig(5),nm(` `,i.contact.name),Ig(4),nm(` `,i.formatPhoneNumber(i.contact.phone)),Ig(4),nm(` `,i.contact.email),Ig(3),Ab(`src`,i.avatar))},dependencies:[c4,ia,bae],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Avatar - Business Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-avatar-business-card`),Zg(),_u(29,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-avatar.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoAvatarComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-avatar`),Zg(),Tk(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),Zg(),Jc(18,`p`),Tk(19,`Além de poder ser utilizado separadamente, é possível usar o `),Jc(20,`code`),Tk(21,`po-avatar`),Zg(),Tk(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),Zg()(),Jc(23,`div`,6)(24,`h4`,7),Tk(25,`Seletor`),Zg(),Jc(26,`pre`,8),Tk(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),Zg()(),Jc(28,`h4`,9),Tk(29,`Propriedades`),Zg(),Jc(30,`table`,10)(31,`tr`,11)(32,`th`,12),Tk(33,`Nome`),Zg(),Jc(34,`th`,12),Tk(35,`Tipo`),Zg(),Jc(36,`th`,12),Tk(37,`Padrão`),Zg(),Jc(38,`th`,12),Tk(39,`Descrição`),Zg()(),Jc(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),Tk(44,` (p-click)`),_u(45,`br`),Zg()()(),Jc(46,`td`,17)(47,`code`,18),Tk(48,`EventEmitter`),Zg()(),Jc(49,`td`,19),Tk(50,`-`),Zg(),Jc(51,`td`,20)(52,`p`),Tk(53,`Evento disparado ao clicar na imagem do `),Jc(54,`em`),Tk(55,`avatar`),Zg(),Tk(56,`.`),Zg()()(),Jc(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),Tk(61,` p-loading`),_u(62,`br`),Zg()()(),Jc(63,`td`,17)(64,`code`,23),Tk(65,`'eager' `),Zg(),Jc(66,`code`,24),Tk(67,` 'lazy'`),Zg()(),Jc(68,`td`,19)(69,`p`)(70,`code`),Tk(71,`eager`),Zg()()(),Jc(72,`td`,20)(73,`em`)(74,`strong`),Tk(75,`(opcional)`),Zg()(),Jc(76,`p`),Tk(77,`Indica como o navegador deve carregar a imagem.`),Zg(),Jc(78,`p`),Tk(79,`Valores válidos:`),Zg(),Jc(80,`ul`)(81,`li`)(82,`code`),Tk(83,`eager`),Zg(),Tk(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),Zg(),Jc(85,`li`)(86,`code`),Tk(87,`lazy`),Zg(),Tk(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),Zg()()()(),Jc(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),Tk(93,` p-size`),_u(94,`br`),Zg()()(),Jc(95,`td`,17)(96,`code`,25),Tk(97,`string`),Zg()(),Jc(98,`td`,19)(99,`p`)(100,`code`),Tk(101,`md`),Zg()()(),Jc(102,`td`,20)(103,`em`)(104,`strong`),Tk(105,`(opcional)`),Zg()(),Jc(106,`p`),Tk(107,`Tamanho de exibição do componente.`),Zg(),Jc(108,`p`),Tk(109,`Valores válidos:`),Zg(),Jc(110,`ul`)(111,`li`)(112,`code`),Tk(113,`xs`),Zg(),Tk(114,` (24x24)`),Zg(),Jc(115,`li`)(116,`code`),Tk(117,`sm`),Zg(),Tk(118,` (32x32)`),Zg(),Jc(119,`li`)(120,`code`),Tk(121,`md`),Zg(),Tk(122,` (64x64)`),Zg(),Jc(123,`li`)(124,`code`),Tk(125,`lg`),Zg(),Tk(126,` (96x96)`),Zg(),Jc(127,`li`)(128,`code`),Tk(129,`xl`),Zg(),Tk(130,` (144x144)`),Zg()()()(),Jc(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),Tk(135,` p-src`),_u(136,`br`),Zg()()(),Jc(137,`td`,17)(138,`code`,25),Tk(139,`string`),Zg()(),Jc(140,`td`,19),Tk(141,`-`),Zg(),Jc(142,`td`,20)(143,`p`),Tk(144,`Fonte da imagem que pode ser um caminho local (`),Jc(145,`code`),Tk(146,`./assets/images/logo-black-small.png`),Zg(),Tk(147,`)
ou um servidor externo (`),Jc(148,`code`),Tk(149,`https://po-ui.io/assets/images/logo-black-small.png`),Zg(),Tk(150,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function ye(n,_e){if(n&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(r);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-avatar-basic-view`)(2,`sample-po-avatar-labs-view`)(3,`sample-po-avatar-business-card-view`),Zg()}if(n&2){let r=nk();Ab(`p-active`,r.activeTab===`web`)}}var Pe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ye,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-avatar-doc`),Zg()()()),o&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ie,le,se,me],encapsulation:2,changeDetection:1})}return n})()}];var de=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[WV.forChild(Pe),WV]})}return n})();var Qe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,de]})}return n})();export{Qe as DocPoAvatarModule};
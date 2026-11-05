import{Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Pt as a4,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Yt as ea,Za as xF,Zt as fae,ai as Sn,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var ne=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&nu(0,`po-avatar`,0)},dependencies:[a4],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Avatar Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-avatar-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ve,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ne],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let g=Ax();nu(0,`po-avatar`,1)(1,`po-divider`,2),jc(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),r0(),ab(`ngModelChange`,function(u){return v_(g),uO(i.size,u)||(i.size=u),__(u)}),wg(),jc(6,`po-input`,5),r0(),ab(`ngModelChange`,function(u){return v_(g),uO(i.src,u)||(i.src=u),__(u)}),wg()(),jc(7,`div`,3)(8,`po-button`,6),mt(`p-click`,function(){return i.restore()}),wg()()()}o&2&&(UE(`p-size`,i.size)(`p-src`,i.src),rg(5),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0(),rg(),sb(`ngModel`,i.src),o0())},dependencies:[RK,SK,MK,xF,SF,a4,oi,Lf,U4,Gte],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Avatar Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-avatar-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,be,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,re],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(r){window.open(`tel:${r}`,`_self`)}sendContact(r){window.open(`mailto:${r}`,`_self`)}formatPhoneNumber(r){return`(${r.substring(0,2)}) ${r.substring(2,7)}-${r.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let g=Ax();jc(0,`div`,1)(1,`po-widget`,2),mt(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),jc(2,`po-avatar`,3),mt(`p-click`,function(){v_(g);let u=Bx(17);return __(u.open())}),wg(),jc(3,`div`,4)(4,`p`)(5,`strong`),lO(6,`Name:`),wg(),lO(7),wg(),jc(8,`p`)(9,`strong`),lO(10,`Phone:`),wg(),lO(11),wg(),jc(12,`p`)(13,`strong`),lO(14,`E-mail:`),wg(),lO(15),wg()()()(),jc(16,`po-modal`,5,0),nu(18,`img`,6),wg()}o&2&&(rg(2),UE(`p-src`,i.avatar),rg(5),Ag(` `,i.contact.name),rg(4),Ag(` `,i.formatPhoneNumber(i.contact.phone)),rg(4),Ag(` `,i.contact.email),rg(3),UE(`src`,i.avatar))},dependencies:[a4,ea,fae],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Avatar - Business Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-avatar-business-card`),wg(),nu(29,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,pe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-avatar.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoAvatarComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-avatar`),wg(),lO(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),wg(),jc(18,`p`),lO(19,`Além de poder ser utilizado separadamente, é possível usar o `),jc(20,`code`),lO(21,`po-avatar`),wg(),lO(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),wg()(),jc(23,`div`,6)(24,`h4`,7),lO(25,`Seletor`),wg(),jc(26,`pre`,8),lO(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),wg()(),jc(28,`h4`,9),lO(29,`Propriedades`),wg(),jc(30,`table`,10)(31,`tr`,11)(32,`th`,12),lO(33,`Nome`),wg(),jc(34,`th`,12),lO(35,`Tipo`),wg(),jc(36,`th`,12),lO(37,`Padrão`),wg(),jc(38,`th`,12),lO(39,`Descrição`),wg()(),jc(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),lO(44,` (p-click)`),nu(45,`br`),wg()()(),jc(46,`td`,17)(47,`code`,18),lO(48,`EventEmitter`),wg()(),jc(49,`td`,19),lO(50,`-`),wg(),jc(51,`td`,20)(52,`p`),lO(53,`Evento disparado ao clicar na imagem do `),jc(54,`em`),lO(55,`avatar`),wg(),lO(56,`.`),wg()()(),jc(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),lO(61,` p-loading`),nu(62,`br`),wg()()(),jc(63,`td`,17)(64,`code`,23),lO(65,`'eager' `),wg(),jc(66,`code`,24),lO(67,` 'lazy'`),wg()(),jc(68,`td`,19)(69,`p`)(70,`code`),lO(71,`eager`),wg()()(),jc(72,`td`,20)(73,`em`)(74,`strong`),lO(75,`(opcional)`),wg()(),jc(76,`p`),lO(77,`Indica como o navegador deve carregar a imagem.`),wg(),jc(78,`p`),lO(79,`Valores válidos:`),wg(),jc(80,`ul`)(81,`li`)(82,`code`),lO(83,`eager`),wg(),lO(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),wg(),jc(85,`li`)(86,`code`),lO(87,`lazy`),wg(),lO(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),wg()()()(),jc(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),lO(93,` p-size`),nu(94,`br`),wg()()(),jc(95,`td`,17)(96,`code`,25),lO(97,`string`),wg()(),jc(98,`td`,19)(99,`p`)(100,`code`),lO(101,`md`),wg()()(),jc(102,`td`,20)(103,`em`)(104,`strong`),lO(105,`(opcional)`),wg()(),jc(106,`p`),lO(107,`Tamanho de exibição do componente.`),wg(),jc(108,`p`),lO(109,`Valores válidos:`),wg(),jc(110,`ul`)(111,`li`)(112,`code`),lO(113,`xs`),wg(),lO(114,` (24x24)`),wg(),jc(115,`li`)(116,`code`),lO(117,`sm`),wg(),lO(118,` (32x32)`),wg(),jc(119,`li`)(120,`code`),lO(121,`md`),wg(),lO(122,` (64x64)`),wg(),jc(123,`li`)(124,`code`),lO(125,`lg`),wg(),lO(126,` (96x96)`),wg(),jc(127,`li`)(128,`code`),lO(129,`xl`),wg(),lO(130,` (144x144)`),wg()()()(),jc(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),lO(135,` p-src`),nu(136,`br`),wg()()(),jc(137,`td`,17)(138,`code`,25),lO(139,`string`),wg()(),jc(140,`td`,19),lO(141,`-`),wg(),jc(142,`td`,20)(143,`p`),lO(144,`Fonte da imagem que pode ser um caminho local (`),jc(145,`code`),lO(146,`./assets/images/logo-black-small.png`),wg(),lO(147,`)
ou um servidor externo (`),jc(148,`code`),lO(149,`https://po-ui.io/assets/images/logo-black-small.png`),wg(),lO(150,`).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function ye(n,_e){if(n&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-avatar-basic-view`)(2,`sample-po-avatar-labs-view`)(3,`sample-po-avatar-business-card-view`),wg()}if(n&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Pe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,ye,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-avatar-doc`),wg()()()),o&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ie,le,se,me],encapsulation:2,changeDetection:1})}return n})()}];var de=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[I1.forChild(Pe),I1]})}return n})();var Qe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[M,de]})}return n})();export{Qe as DocPoAvatarModule};
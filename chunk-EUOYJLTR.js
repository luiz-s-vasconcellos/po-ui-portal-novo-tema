import{m as P,p as M}from"./main-6GCKJMTQ.js";import{Ar as G0,Ba as p,Br as Jn,Ct as Wae,Fa as nm,Fr as H_,G as Nf,Hr as KO,Ka as qb,Ki as Zb,La as ok,Li as WL,Lr as I,Ni as Vk,Pn as tre,Pt as are,Ri as Wb,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,X as Oze,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,an as ia,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,ho as xo,jr as GV,ki as U_,lr as B_,lt as Ss,mr as Cb,oi as Oo,oo as vt,or as An,pi as QL,qr as LO,ra as de,ri as No,rt as Ru,sn as j4,ti as NZ,xa as j_,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(o,a){o&1&&_u(0,`po-slide`,0),o&2&&Ab(`p-slides`,Vk(1,_e))},dependencies:[Oze],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-basic/sample-po-slide-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-basic/sample-po-slide-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Slide Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-slide-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=p(Ru);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,a){if(o&1){let p=KO();_u(0,`po-slide`,2)(1,`po-divider`,3),Jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.slideItem.action,d)||(a.slideItem.action=d),H_(d)}),Kg(),Jc(6,`po-input`,6),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.slideItem.alt,d)||(a.slideItem.alt=d),H_(d)}),Kg(),Jc(7,`po-input`,7),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.slideItem.image,d)||(a.slideItem.image=d),H_(d)}),Kg(),Jc(8,`po-input`,8),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.slideItem.link,d)||(a.slideItem.link=d),H_(d)}),Kg()(),Jc(9,`div`,4)(10,`po-button`,9),vt(`p-click`,function(){return a.addSlide()}),Kg()()(),_u(11,`po-divider`,10),Jc(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.interval,d)||(a.interval=d),H_(d)}),Kg(),Jc(16,`po-input`,12),G0(),Zb(`ngModelChange`,function(d){return U_(p),Rk(a.height,d)||(a.height=d),H_(d)}),Kg()(),Jc(17,`div`,4)(18,`po-button`,13),vt(`p-click`,function(){U_(p);let d=ok(3),ke=ok(13);return d.reset(),ke.reset(),H_(a.restore())}),Kg()()()}if(o&2){let p=ok(3);Ab(`p-height`,a.height)(`p-interval`,a.interval)(`p-slides`,a.slideItems),wg(5),Kb(`ngModel`,a.slideItem.action),q0(),wg(),Kb(`ngModel`,a.slideItem.alt),q0(),wg(),Kb(`ngModel`,a.slideItem.image),q0(),wg(),Kb(`ngModel`,a.slideItem.link),q0(),wg(2),Ab(`p-disabled`,p.invalid),wg(5),Kb(`ngModel`,a.interval),q0(),wg(),Kb(`ngModel`,a.height),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,j4,Oze],encapsulation:2,changeDetection:1})}return n})();var Se=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-labs/sample-po-slide-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-labs/sample-po-slide-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Slide Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-slide-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

<po-divider p-label="Slide Item"></po-divider>

<form #slideItemForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="slideAction" [(ngModel)]="slideItem.action" p-clean p-label="Slide action">
    </po-input>

    <po-input class="po-md-6" name="slideAlt" [(ngModel)]="slideItem.alt" p-clean p-label="Slide alt"> </po-input>

    <po-input
      class="po-md-6"
      name="slideImage"
      [(ngModel)]="slideItem.image"
      p-clean
      p-help="Ex.: https://lorempixel.com/1024/768/"
      p-label="Slide image"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="slideLink"
      [(ngModel)]="slideItem.link"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="Slide link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Add slide" [p-disabled]="slideItemForm.invalid" (p-click)="addSlide()">
    </po-button>
  </div>
</form>

<po-divider p-label="Properties"></po-divider>

<form #slidePropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="interval" [(ngModel)]="interval" p-clean p-help="Ex.: 7000" p-label="Interval">
    </po-input>

    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-help="Ex.: 300" p-label="Height"> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="slideItemForm.reset(); slidePropertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-labs',
  templateUrl: './sample-po-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;

  ngOnInit() {
    this.restore();
  }

  addSlide() {
    const item: PoSlideItem = Object.assign({}, this.slideItem);
    item.action = item.action ? this.showAction.bind(this, item.action) : undefined;
    this.slideItems = [...this.slideItems, item];
    this.restoreSlideItemForm();
  }

  restore() {
    this.interval = undefined;
    this.height = undefined;
    this.slideItems = [];
    this.restoreSlideItemForm();
  }

  restoreSlideItemForm() {
    this.slideItem = { action: undefined, alt: undefined, image: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Slide clicked: \${action}\`);
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,z){if(n&1){let l=KO();Jc(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),Mk(4),Kg(),Jc(5,`div`,6),Mk(6),Kg(),_u(7,`po-divider`),Jc(8,`div`,7),Mk(9),Kg(),Jc(10,`po-button`,8),vt(`p-click`,function(){let a=U_(l).$implicit,p=tk();return H_(p.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=z.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),qb(``,l.date,` by `,l.author),wg(2),Wb(l.title),wg(3),Wb(l.description)}}var be=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){o&1&&(Jc(0,`po-slide`,0),Cb(1,Be,11,12,`ng-template`,1),Kg()),o&2&&Ab(`p-slides`,a.sampleItems)},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-slide-useful-articles`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Slide - Useful articles`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-slide-useful-articles`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-slide p-height="450" [p-slides]="sampleItems">
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` item.date `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,` by `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` item.author `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
          <div class="po-font-display">`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` item.title `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">`),Jc(34,`span`),B_(),Mk(35,`{{`),j_(),Kg(),Mk(36,` item.description `),Jc(37,`span`),B_(),Mk(38,`}}`),j_(),Kg(),Mk(39,`</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),Kg()()()(),Jc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Mk(43,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),Kg(),Jc(44,`div`,10)(45,`pre`,11),Mk(46,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-useful-articles',
  templateUrl: './sample-po-slide-useful-articles.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideUsefulArticlesComponent {
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
}
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return n})();var ve=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(o,a){if(o&1&&Cu(ia,7),o&2){let p;No(p=xo())&&(a.modal=p.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(o,a){o&1&&(_u(0,`po-slide`,0),Jc(1,`po-modal`,1),Mk(2),Kg()),o&2&&(Ab(`p-slides`,a.landscapes),wg(2),nm(` `,a.modalText,`
`))},dependencies:[ia,Oze],encapsulation:2,changeDetection:1})}return n})();var Ce=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-slide-landscapes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Slide - Landscapes`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-slide-landscapes`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` modalText `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
</po-modal>
`),Kg()()()(),Jc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Mk(25,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),Kg(),Jc(26,`div`,10)(27,`pre`,11),Mk(28,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-landscapes',
  templateUrl: './sample-po-slide-landscapes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLandscapesComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

  landscapes: Array<PoSlideItem> = [
    { image: '/assets/graphics/landscape-01.jpeg', alt: 'On the road', action: this.aboutLandscape.bind(this) },
    {
      image: '/assets/graphics/landscape-02.jpeg',
      alt: 'Birds flying over trees',
      action: this.aboutLandscape.bind(this)
    },
    { image: '/assets/graphics/landscape-03.jpeg', alt: 'That\`s a great sea', action: this.aboutLandscape.bind(this) }
  ];

  modalText: string;

  aboutLandscape(item: PoSlideItem) {
    this.modalText = item.alt;
    this.modal.open();
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return n})();var Ae=[`slideComponent`];function ze(n,z){if(n&1){let l=KO();Jc(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),Mk(4),Kg(),Jc(5,`div`,9),Mk(6),Kg(),_u(7,`po-divider`),Jc(8,`div`,10),Mk(9),Kg(),Jc(10,`po-button`,11),vt(`p-click`,function(){let a=U_(l).$implicit,p=tk();return H_(p.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=z.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),qb(``,l.date,` by `,l.author),wg(2),Wb(l.title),wg(3),Wb(l.description)}}var xe=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(o,a){if(o&1&&Cu(Ae,7),o&2){let p;No(p=xo())&&(a.slideComponent=p.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){if(o&1&&(Jc(0,`po-slide`,1,0),Cb(2,ze,11,12,`ng-template`,2),Kg(),Jc(3,`div`,3)(4,`po-button`,4),vt(`p-click`,function(){return a.previousBtn()}),Kg(),Jc(5,`po-button`,5),vt(`p-click`,function(){return a.nextBtn()}),Kg()()),o&2){let p=ok(1);Ab(`p-slides`,a.sampleItems),wg(4),Ab(`p-disabled`,p.getCurrentSlideIndex()===0),wg(),Ab(`p-disabled`,p.getCurrentSlideIndex()===a.sampleItems.length-1)}},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var Ee=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-slide-external-controls`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Slide - External Controls`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-slide-external-controls`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` item.date `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,` by `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` item.author `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
          <div class="po-font-display">`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` item.title `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">`),Jc(34,`span`),B_(),Mk(35,`{{`),j_(),Kg(),Mk(36,` item.description `),Jc(37,`span`),B_(),Mk(38,`}}`),j_(),Kg(),Mk(39,`</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>

<div class="po-row">
  <po-button
    class="po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Previous"
    (p-click)="previousBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === 0"
  >
  </po-button>
  <po-button
    class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Next"
    (p-click)="nextBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === sampleItems.length - 1"
  >
  </po-button>
</div>
`),Kg()()()(),Jc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Mk(43,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),Kg(),Jc(44,`div`,10)(45,`pre`,11),Mk(46,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-external-controls',
  templateUrl: './sample-po-slide-external-controls.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideExternalControlsComponent {
  @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

  nextLabel: string = 'Next';
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  nextBtn() {
    this.slideComponent.next();
  }

  previousBtn() {
    this.slideComponent.previous();
  }
}
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,xe],encapsulation:2,changeDetection:1})}return n})();var ye=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:283,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Slide Content Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-hide-arrows`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-slides`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`method-getCurrentSlideIndex`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-slide-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-slide-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-slide-item-alt`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-image`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-link`,1,`docs-api-properties-row`]],template:function(o,a){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-slide`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`blockquote`,3)(11,`strong`),Mk(12,`Subcomponentes:`),Kg(),Jc(13,`po-tag`,4),vt(`p-click`,function(){return a.openDoc(`po-slide-content-template`)}),Kg()(),Jc(14,`h3`,5),Mk(15,`Componente`),Kg(),Jc(16,`h4`,6)(17,`code`,7),Mk(18,`PoSlideComponent`),Kg()(),Jc(19,`div`,2)(20,`p`),Mk(21,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Jc(22,`strong`)(23,`a`,8),Mk(24,`p-slide-content-template`),Kg()(),Mk(25,`.`),Kg(),Jc(26,`h4`),Mk(27,`Boas práticas:`),Kg(),Jc(28,`ul`)(29,`li`),Mk(30,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),Kg(),Jc(31,`li`),Mk(32,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),Kg(),Jc(33,`li`),Mk(34,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),Kg()()(),Jc(35,`div`,9)(36,`h4`,10),Mk(37,`Seletor`),Kg(),Jc(38,`pre`,11),Mk(39,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),Kg()(),Jc(40,`h4`,12),Mk(41,`Propriedades`),Kg(),Jc(42,`table`,13)(43,`tr`,14)(44,`th`,15),Mk(45,`Nome`),Kg(),Jc(46,`th`,15),Mk(47,`Tipo`),Kg(),Jc(48,`th`,15),Mk(49,`Padrão`),Kg(),Jc(50,`th`,15),Mk(51,`Descrição`),Kg()(),Jc(52,`tr`,16)(53,`td`,17)(54,`div`,18)(55,`span`,19),Mk(56,` p-height`),_u(57,`br`),Kg()()(),Jc(58,`td`,20)(59,`code`,21),Mk(60,`number`),Kg()(),Jc(61,`td`,22)(62,`p`)(63,`code`),Mk(64,`336`),Kg()()(),Jc(65,`td`,23)(66,`em`)(67,`strong`),Mk(68,`(opcional)`),Kg()(),Jc(69,`p`),Mk(70,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Jc(71,`code`),Mk(72,`default`),Kg(),Mk(73,`.`),Kg()()(),Jc(74,`tr`,24)(75,`td`,17)(76,`div`,18)(77,`span`,19),Mk(78,` p-hide-arrows`),_u(79,`br`),Kg()()(),Jc(80,`td`,20)(81,`code`,25),Mk(82,`boolean`),Kg()(),Jc(83,`td`,22)(84,`p`)(85,`code`),Mk(86,`false`),Kg()()(),Jc(87,`td`,23)(88,`em`)(89,`strong`),Mk(90,`(opcional)`),Kg()(),Jc(91,`p`),Mk(92,`Define a exibição das setas de navegação.`),Kg()()(),Jc(93,`tr`,26)(94,`td`,17)(95,`div`,18)(96,`span`,19),Mk(97,` p-interval`),_u(98,`br`),Kg()()(),Jc(99,`td`,20)(100,`code`,21),Mk(101,`number`),Kg()(),Jc(102,`td`,22)(103,`p`)(104,`code`),Mk(105,`4000`),Kg()()(),Jc(106,`td`,23)(107,`em`)(108,`strong`),Mk(109,`(opcional)`),Kg()(),Jc(110,`p`),Mk(111,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Jc(112,`code`),Mk(113,`1000`),Kg(),Mk(114,` os slides não trocam automaticamente.`),Kg()()(),Jc(115,`tr`,27)(116,`td`,17)(117,`div`,18)(118,`span`,19),Mk(119,` p-slides`),_u(120,`br`),Kg()()(),Jc(121,`td`,20)(122,`code`,28),Mk(123,`Array<PoSlideItem `),Kg(),Jc(124,`code`,29),Mk(125,` string `),Kg(),Jc(126,`code`,30),Mk(127,` any>`),Kg()(),Jc(128,`td`,22),Mk(129,`-`),Kg(),Jc(130,`td`,23)(131,`p`),Mk(132,`Array de imagens ou dados para o slide, pode ser de três formas:`),Kg(),Jc(133,`ul`)(134,`li`),Mk(135,`Array implementando objetos da interface `),Jc(136,`code`),Mk(137,`PoSlideItem`),Kg(),Mk(138,`:`),Jc(139,`pre`)(140,`code`),Mk(141,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),Kg()()(),Jc(142,`li`),Mk(143,`Array de `),Jc(144,`code`),Mk(145,`strings`),Kg(),Mk(146,` com os caminhos das imagens:`),Jc(147,`pre`)(148,`code`),Mk(149,`['/assets/image-1', '/assets/image-2' ]
`),Kg()()(),Jc(150,`li`),Mk(151,`Array com lista de itens (para utilizar template):`),Jc(152,`pre`)(153,`code`),Mk(154,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),Kg()()()(),Jc(155,`blockquote`)(156,`p`),Mk(157,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),Kg()()()()(),Jc(158,`h3`,12),Mk(159,`Métodos`),Kg(),Jc(160,`table`,31)(161,`tr`,32)(162,`th`,33)(163,`div`,18)(164,`h4`)(165,`span`,19),Mk(166,` getCurrentSlideIndex `),Kg()()()()(),Jc(167,`tr`,23)(168,`td`,23)(169,`p`),Mk(170,`Método que retorna o index do slide atual`),Kg(),Jc(171,`pre`)(172,`code`),Mk(173,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),Kg()()()()(),_u(174,`br`),Jc(175,`table`,34)(176,`tr`,32)(177,`th`,33)(178,`div`,18)(179,`h4`)(180,`span`,19),Mk(181,` next `),Kg()()()()(),Jc(182,`tr`,23)(183,`td`,23)(184,`p`),Mk(185,`Método para chamar o próximo slide.`),Kg(),Jc(186,`pre`)(187,`code`),Mk(188,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),Kg()()()()(),_u(189,`br`),Jc(190,`table`,35)(191,`tr`,32)(192,`th`,33)(193,`div`,18)(194,`h4`)(195,`span`,19),Mk(196,` previous `),Kg()()()()(),Jc(197,`tr`,23)(198,`td`,23)(199,`p`),Mk(200,`Método para chamar o slide anterior.`),Kg(),Jc(201,`pre`)(202,`code`),Mk(203,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),Kg()()()()(),_u(204,`br`),Jc(205,`h3`),Mk(206,`Interfaces`),Kg(),Jc(207,`h4`,36)(208,`code`,7),Mk(209,`PoSlideItem`),Kg()(),Jc(210,`div`,2)(211,`p`),Mk(212,`Interface que define cada objeto do `),Jc(213,`code`),Mk(214,`PoSlideItem`),Kg(),Mk(215,`.`),Kg()(),Jc(216,`h4`,12),Mk(217,`Propriedades`),Kg(),Jc(218,`table`,13)(219,`tr`,14)(220,`th`,15),Mk(221,`Nome`),Kg(),Jc(222,`th`,15),Mk(223,`Tipo`),Kg(),Jc(224,`th`,15),Mk(225,`Descrição`),Kg()(),Jc(226,`tr`,37)(227,`td`,17)(228,`div`,18)(229,`span`,19),Mk(230,` action`),_u(231,`br`),Kg()()(),Jc(232,`td`,20)(233,`code`,38),Mk(234,`Function`),Kg()(),Jc(235,`td`,23)(236,`em`)(237,`strong`),Mk(238,`(opcional)`),Kg()(),Jc(239,`p`),Mk(240,`Ação executada ao clicar no slide caso não tenha link definido.`),Kg()()(),Jc(241,`tr`,39)(242,`td`,17)(243,`div`,18)(244,`span`,19),Mk(245,` alt`),_u(246,`br`),Kg()()(),Jc(247,`td`,20)(248,`code`,29),Mk(249,`string`),Kg()(),Jc(250,`td`,23)(251,`em`)(252,`strong`),Mk(253,`(opcional)`),Kg()(),Jc(254,`p`),Mk(255,`Texto que aparece quando a imagem não é encontrada.`),Kg()()(),Jc(256,`tr`,40)(257,`td`,17)(258,`div`,18)(259,`span`,19),Mk(260,` image`),_u(261,`br`),Kg()()(),Jc(262,`td`,20)(263,`code`,29),Mk(264,`string`),Kg()(),Jc(265,`td`,23)(266,`p`),Mk(267,`Define o caminho da imagem.`),Kg()()(),Jc(268,`tr`,41)(269,`td`,17)(270,`div`,18)(271,`span`,19),Mk(272,` link`),_u(273,`br`),Kg()()(),Jc(274,`td`,20)(275,`code`,29),Mk(276,`string`),Kg()(),Jc(277,`td`,23)(278,`em`)(279,`strong`),Mk(280,`(opcional)`),Kg()(),Jc(281,`p`),Mk(282,`Link interno ou externo que será aberto ao clicar no slide.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function Ne(n,z){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-slide-basic-view`)(2,`sample-po-slide-labs-view`)(3,`sample-po-slide-useful-articles-view`)(4,`sample-po-slide-landscapes-view`)(5,`sample-po-slide-external-controls-view`),Kg()),n&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var Ue=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Slide`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Slide · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(o,a){o&1&&(Jc(0,`po-page-default`,0),LO(1,Ne,6,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-slide-doc`),Kg()()),o&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,ge,Se,fe,Ce,Ee,ye],encapsulation:2,changeDetection:1})}return n})()}];var we=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(Ue),GV]})}return n})();var Tt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,we]})}return n})();export{Tt as DocPoSlideModule};
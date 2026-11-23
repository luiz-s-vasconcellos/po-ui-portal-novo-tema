import{m as P,p as M}from"./main-RBGX2DMP.js";import{$a as tm,Ar as I,Ca as j_,Ct as Wae,G as Nf,Gi as Yb,Ha as p,Hr as Lk,Ii as WL,Ir as Kb,Li as Wb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,Tr as Gb,W as Mze,Wi as YO,Wr as MZ,X as Oze,Zr as No,_o as z0,an as ia,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,hr as Db,io as vt,ki as V_,li as Qc,lt as Ss,ni as Oo,ra as de,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var _e=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(o,a){o&1&&vu(0,`po-slide`,0),o&2&&Rb(`p-slides`,Lk(1,_e))},dependencies:[Oze],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-basic/sample-po-slide-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-basic/sample-po-slide-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-slide-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{poNotification=p(Ru);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,a){if(o&1){let p=YO();vu(0,`po-slide`,2)(1,`po-divider`,3),Qc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.slideItem.action,d)||(a.slideItem.action=d),U_(d)}),Kg(),Qc(6,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.slideItem.alt,d)||(a.slideItem.alt=d),U_(d)}),Kg(),Qc(7,`po-input`,7),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.slideItem.image,d)||(a.slideItem.image=d),U_(d)}),Kg(),Qc(8,`po-input`,8),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.slideItem.link,d)||(a.slideItem.link=d),U_(d)}),Kg()(),Qc(9,`div`,4)(10,`po-button`,9),vt(`p-click`,function(){return a.addSlide()}),Kg()()(),vu(11,`po-divider`,10),Qc(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.interval,d)||(a.interval=d),U_(d)}),Kg(),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(a.height,d)||(a.height=d),U_(d)}),Kg()(),Qc(17,`div`,4)(18,`po-button`,13),vt(`p-click`,function(){B_(p);let d=ik(3),ke=ik(13);return d.reset(),ke.reset(),U_(a.restore())}),Kg()()()}if(o&2){let p=ik(3);Rb(`p-height`,a.height)(`p-interval`,a.interval)(`p-slides`,a.slideItems),wg(5),Yb(`ngModel`,a.slideItem.action),W0(),wg(),Yb(`ngModel`,a.slideItem.alt),W0(),wg(),Yb(`ngModel`,a.slideItem.image),W0(),wg(),Yb(`ngModel`,a.slideItem.link),W0(),wg(2),Rb(`p-disabled`,p.invalid),wg(5),Yb(`ngModel`,a.interval),W0(),wg(),Yb(`ngModel`,a.height),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Oze],encapsulation:2,changeDetection:1})}return n})();var Se=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-labs/sample-po-slide-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-labs/sample-po-slide-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-slide-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return n})();function Be(n,z){if(n&1){let l=YO();Qc(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),Sk(4),Kg(),Qc(5,`div`,6),Sk(6),Kg(),vu(7,`po-divider`),Qc(8,`div`,7),Sk(9),Kg(),Qc(10,`po-button`,8),vt(`p-click`,function(){let a=B_(l).$implicit,p=ek();return U_(p.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=z.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),Wb(``,l.date,` by `,l.author),wg(2),Gb(l.title),wg(3),Gb(l.description)}}var be=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){o&1&&(Qc(0,`po-slide`,0),Db(1,Be,11,12,`ng-template`,1),Kg()),o&2&&Rb(`p-slides`,a.sampleItems)},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-slide-useful-articles`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - Useful articles`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-slide-useful-articles`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-slide p-height="450" [p-slides]="sampleItems">
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
          <div class="po-font-text">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` item.date `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,` by `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` item.author `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
          <div class="po-font-display">`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` item.title `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">`),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,` item.description `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),Kg()()()(),Qc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Sk(43,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),Kg(),Qc(44,`div`,10)(45,`pre`,11),Sk(46,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return n})();var ve=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(o,a){if(o&1&&Du(ia,7),o&2){let p;No(p=xo())&&(a.modal=p.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(o,a){o&1&&(vu(0,`po-slide`,0),Qc(1,`po-modal`,1),Sk(2),Kg()),o&2&&(Rb(`p-slides`,a.landscapes),wg(2),tm(` `,a.modalText,`
`))},dependencies:[ia,Oze],encapsulation:2,changeDetection:1})}return n})();var Ce=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-slide-landscapes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - Landscapes`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-slide-landscapes`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` modalText `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
</po-modal>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(29,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return n})();var Ae=[`slideComponent`];function ze(n,z){if(n&1){let l=YO();Qc(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),Sk(4),Kg(),Qc(5,`div`,9),Sk(6),Kg(),vu(7,`po-divider`),Qc(8,`div`,10),Sk(9),Kg(),Qc(10,`po-button`,11),vt(`p-click`,function(){let a=B_(l).$implicit,p=ek();return U_(p.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=z.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),Wb(``,l.date,` by `,l.author),wg(2),Gb(l.title),wg(3),Gb(l.description)}}var xe=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(o,a){if(o&1&&Du(Ae,7),o&2){let p;No(p=xo())&&(a.slideComponent=p.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){if(o&1&&(Qc(0,`po-slide`,1,0),Db(2,ze,11,12,`ng-template`,2),Kg(),Qc(3,`div`,3)(4,`po-button`,4),vt(`p-click`,function(){return a.previousBtn()}),Kg(),Qc(5,`po-button`,5),vt(`p-click`,function(){return a.nextBtn()}),Kg()()),o&2){let p=ik(1);Rb(`p-slides`,a.sampleItems),wg(4),Rb(`p-disabled`,p.getCurrentSlideIndex()===0),wg(),Rb(`p-disabled`,p.getCurrentSlideIndex()===a.sampleItems.length-1)}},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var Ee=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-slide-external-controls`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - External Controls`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-slide-external-controls`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
          <div class="po-font-text">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` item.date `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,` by `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` item.author `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
          <div class="po-font-display">`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` item.title `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">`),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,` item.description `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`</div>
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
`),Kg()()()(),Qc(40,`po-tab`,9)(41,`div`)(42,`label`,6),Sk(43,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),Kg(),Qc(44,`div`,10)(45,`pre`,11),Sk(46,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,xe],encapsulation:2,changeDetection:1})}return n})();var ye=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:283,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Slide Content Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-hide-arrows`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-slides`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`method-getCurrentSlideIndex`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-slide-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-slide-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-slide-item-alt`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-image`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-link`,1,`docs-api-properties-row`]],template:function(o,a){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-slide`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`blockquote`,3)(11,`strong`),Sk(12,`Subcomponentes:`),Kg(),Qc(13,`po-tag`,4),vt(`p-click`,function(){return a.openDoc(`po-slide-content-template`)}),Kg()(),Qc(14,`h3`,5),Sk(15,`Componente`),Kg(),Qc(16,`h4`,6)(17,`code`,7),Sk(18,`PoSlideComponent`),Kg()(),Qc(19,`div`,2)(20,`p`),Sk(21,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Qc(22,`strong`)(23,`a`,8),Sk(24,`p-slide-content-template`),Kg()(),Sk(25,`.`),Kg(),Qc(26,`h4`),Sk(27,`Boas práticas:`),Kg(),Qc(28,`ul`)(29,`li`),Sk(30,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),Kg(),Qc(31,`li`),Sk(32,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),Kg(),Qc(33,`li`),Sk(34,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),Kg()()(),Qc(35,`div`,9)(36,`h4`,10),Sk(37,`Seletor`),Kg(),Qc(38,`pre`,11),Sk(39,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),Kg()(),Qc(40,`h4`,12),Sk(41,`Propriedades`),Kg(),Qc(42,`table`,13)(43,`tr`,14)(44,`th`,15),Sk(45,`Nome`),Kg(),Qc(46,`th`,15),Sk(47,`Tipo`),Kg(),Qc(48,`th`,15),Sk(49,`Padrão`),Kg(),Qc(50,`th`,15),Sk(51,`Descrição`),Kg()(),Qc(52,`tr`,16)(53,`td`,17)(54,`div`,18)(55,`span`,19),Sk(56,` p-height`),vu(57,`br`),Kg()()(),Qc(58,`td`,20)(59,`code`,21),Sk(60,`number`),Kg()(),Qc(61,`td`,22)(62,`p`)(63,`code`),Sk(64,`336`),Kg()()(),Qc(65,`td`,23)(66,`em`)(67,`strong`),Sk(68,`(opcional)`),Kg()(),Qc(69,`p`),Sk(70,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Qc(71,`code`),Sk(72,`default`),Kg(),Sk(73,`.`),Kg()()(),Qc(74,`tr`,24)(75,`td`,17)(76,`div`,18)(77,`span`,19),Sk(78,` p-hide-arrows`),vu(79,`br`),Kg()()(),Qc(80,`td`,20)(81,`code`,25),Sk(82,`boolean`),Kg()(),Qc(83,`td`,22)(84,`p`)(85,`code`),Sk(86,`false`),Kg()()(),Qc(87,`td`,23)(88,`em`)(89,`strong`),Sk(90,`(opcional)`),Kg()(),Qc(91,`p`),Sk(92,`Define a exibição das setas de navegação.`),Kg()()(),Qc(93,`tr`,26)(94,`td`,17)(95,`div`,18)(96,`span`,19),Sk(97,` p-interval`),vu(98,`br`),Kg()()(),Qc(99,`td`,20)(100,`code`,21),Sk(101,`number`),Kg()(),Qc(102,`td`,22)(103,`p`)(104,`code`),Sk(105,`4000`),Kg()()(),Qc(106,`td`,23)(107,`em`)(108,`strong`),Sk(109,`(opcional)`),Kg()(),Qc(110,`p`),Sk(111,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Qc(112,`code`),Sk(113,`1000`),Kg(),Sk(114,` os slides não trocam automaticamente.`),Kg()()(),Qc(115,`tr`,27)(116,`td`,17)(117,`div`,18)(118,`span`,19),Sk(119,` p-slides`),vu(120,`br`),Kg()()(),Qc(121,`td`,20)(122,`code`,28),Sk(123,`Array<PoSlideItem `),Kg(),Qc(124,`code`,29),Sk(125,` string `),Kg(),Qc(126,`code`,30),Sk(127,` any>`),Kg()(),Qc(128,`td`,22),Sk(129,`-`),Kg(),Qc(130,`td`,23)(131,`p`),Sk(132,`Array de imagens ou dados para o slide, pode ser de três formas:`),Kg(),Qc(133,`ul`)(134,`li`),Sk(135,`Array implementando objetos da interface `),Qc(136,`code`),Sk(137,`PoSlideItem`),Kg(),Sk(138,`:`),Qc(139,`pre`)(140,`code`),Sk(141,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),Kg()()(),Qc(142,`li`),Sk(143,`Array de `),Qc(144,`code`),Sk(145,`strings`),Kg(),Sk(146,` com os caminhos das imagens:`),Qc(147,`pre`)(148,`code`),Sk(149,`['/assets/image-1', '/assets/image-2' ]
`),Kg()()(),Qc(150,`li`),Sk(151,`Array com lista de itens (para utilizar template):`),Qc(152,`pre`)(153,`code`),Sk(154,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),Kg()()()(),Qc(155,`blockquote`)(156,`p`),Sk(157,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),Kg()()()()(),Qc(158,`h3`,12),Sk(159,`Métodos`),Kg(),Qc(160,`table`,31)(161,`tr`,32)(162,`th`,33)(163,`div`,18)(164,`h4`)(165,`span`,19),Sk(166,` getCurrentSlideIndex `),Kg()()()()(),Qc(167,`tr`,23)(168,`td`,23)(169,`p`),Sk(170,`Método que retorna o index do slide atual`),Kg(),Qc(171,`pre`)(172,`code`),Sk(173,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),Kg()()()()(),vu(174,`br`),Qc(175,`table`,34)(176,`tr`,32)(177,`th`,33)(178,`div`,18)(179,`h4`)(180,`span`,19),Sk(181,` next `),Kg()()()()(),Qc(182,`tr`,23)(183,`td`,23)(184,`p`),Sk(185,`Método para chamar o próximo slide.`),Kg(),Qc(186,`pre`)(187,`code`),Sk(188,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),Kg()()()()(),vu(189,`br`),Qc(190,`table`,35)(191,`tr`,32)(192,`th`,33)(193,`div`,18)(194,`h4`)(195,`span`,19),Sk(196,` previous `),Kg()()()()(),Qc(197,`tr`,23)(198,`td`,23)(199,`p`),Sk(200,`Método para chamar o slide anterior.`),Kg(),Qc(201,`pre`)(202,`code`),Sk(203,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),Kg()()()()(),vu(204,`br`),Qc(205,`h3`),Sk(206,`Interfaces`),Kg(),Qc(207,`h4`,36)(208,`code`,7),Sk(209,`PoSlideItem`),Kg()(),Qc(210,`div`,2)(211,`p`),Sk(212,`Interface que define cada objeto do `),Qc(213,`code`),Sk(214,`PoSlideItem`),Kg(),Sk(215,`.`),Kg()(),Qc(216,`h4`,12),Sk(217,`Propriedades`),Kg(),Qc(218,`table`,13)(219,`tr`,14)(220,`th`,15),Sk(221,`Nome`),Kg(),Qc(222,`th`,15),Sk(223,`Tipo`),Kg(),Qc(224,`th`,15),Sk(225,`Descrição`),Kg()(),Qc(226,`tr`,37)(227,`td`,17)(228,`div`,18)(229,`span`,19),Sk(230,` action`),vu(231,`br`),Kg()()(),Qc(232,`td`,20)(233,`code`,38),Sk(234,`Function`),Kg()(),Qc(235,`td`,23)(236,`em`)(237,`strong`),Sk(238,`(opcional)`),Kg()(),Qc(239,`p`),Sk(240,`Ação executada ao clicar no slide caso não tenha link definido.`),Kg()()(),Qc(241,`tr`,39)(242,`td`,17)(243,`div`,18)(244,`span`,19),Sk(245,` alt`),vu(246,`br`),Kg()()(),Qc(247,`td`,20)(248,`code`,29),Sk(249,`string`),Kg()(),Qc(250,`td`,23)(251,`em`)(252,`strong`),Sk(253,`(opcional)`),Kg()(),Qc(254,`p`),Sk(255,`Texto que aparece quando a imagem não é encontrada.`),Kg()()(),Qc(256,`tr`,40)(257,`td`,17)(258,`div`,18)(259,`span`,19),Sk(260,` image`),vu(261,`br`),Kg()()(),Qc(262,`td`,20)(263,`code`,29),Sk(264,`string`),Kg()(),Qc(265,`td`,23)(266,`p`),Sk(267,`Define o caminho da imagem.`),Kg()()(),Qc(268,`tr`,41)(269,`td`,17)(270,`div`,18)(271,`span`,19),Sk(272,` link`),vu(273,`br`),Kg()()(),Qc(274,`td`,20)(275,`code`,29),Sk(276,`string`),Kg()(),Qc(277,`td`,23)(278,`em`)(279,`strong`),Sk(280,`(opcional)`),Kg()(),Qc(281,`p`),Sk(282,`Link interno ou externo que será aberto ao clicar no slide.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function Ne(n,z){if(n&1&&(Qc(0,`div`,1),vu(1,`sample-po-slide-basic-view`)(2,`sample-po-slide-labs-view`)(3,`sample-po-slide-useful-articles-view`)(4,`sample-po-slide-landscapes-view`)(5,`sample-po-slide-external-controls-view`),Kg()),n&2){let l=ek();Rb(`hidden`,l.activeTab!==`web`)}}var Ue=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Slide`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Slide · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(o,a){o&1&&(Qc(0,`po-page-default`,0),FO(1,Ne,6,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-slide-doc`),Kg()()),o&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,ge,Se,fe,Ce,Ee,ye],encapsulation:2,changeDetection:1})}return n})()}];var we=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(Ue),GV]})}return n})();var Tt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,we]})}return n})();export{Tt as DocPoSlideModule};
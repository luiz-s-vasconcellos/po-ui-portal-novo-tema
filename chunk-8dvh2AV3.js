import{$n as Ak,Ar as Ig,Di as Wb,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ia as sk,J as Oze,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,ca as jk,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,fr as Db,gi as Tk,hi as TZ,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rn as ia,ti as Oo,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,xr as Gb,xt as Wae,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var Te=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(o,a){o&1&&_u(0,`po-slide`,0),o&2&&Rb(`p-slides`,jk(1,Te))},dependencies:[Oze],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Slide Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-slide-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return n})();var Se=(()=>{class n{poNotification=p(Ru);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,a){if(o&1){let d=ZO();_u(0,`po-slide`,2)(1,`po-divider`,3),Jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.slideItem.action,r)||(a.slideItem.action=r),H_(r)}),Zg(),Jc(6,`po-input`,6),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.slideItem.alt,r)||(a.slideItem.alt=r),H_(r)}),Zg(),Jc(7,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.slideItem.image,r)||(a.slideItem.image=r),H_(r)}),Zg(),Jc(8,`po-input`,8),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.slideItem.link,r)||(a.slideItem.link=r),H_(r)}),Zg()(),Jc(9,`div`,4)(10,`po-button`,9),vt(`p-click`,function(){return a.addSlide()}),Zg()()(),_u(11,`po-divider`,10),Jc(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.interval,r)||(a.interval=r),H_(r)}),Zg(),Jc(16,`po-input`,12),W0(),Kb(`ngModelChange`,function(r){return U_(d),Ak(a.height,r)||(a.height=r),H_(r)}),Zg()(),Jc(17,`div`,4)(18,`po-button`,13),vt(`p-click`,function(){U_(d);let r=sk(3),ke=sk(13);return r.reset(),ke.reset(),H_(a.restore())}),Zg()()()}if(o&2){let d=sk(3);Rb(`p-height`,a.height)(`p-interval`,a.interval)(`p-slides`,a.slideItems),Ig(5),Yb(`ngModel`,a.slideItem.action),Y0(),Ig(),Yb(`ngModel`,a.slideItem.alt),Y0(),Ig(),Yb(`ngModel`,a.slideItem.image),Y0(),Ig(),Yb(`ngModel`,a.slideItem.link),Y0(),Ig(2),Rb(`p-disabled`,d.invalid),Ig(5),Yb(`ngModel`,a.interval),Y0(),Ig(),Yb(`ngModel`,a.height),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Oze],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Slide Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-slide-labs`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return n})();function Fe(n,H){if(n&1){let l=ZO();Jc(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),Tk(4),Zg(),Jc(5,`div`,6),Tk(6),Zg(),_u(7,`po-divider`),Jc(8,`div`,7),Tk(9),Zg(),Jc(10,`po-button`,8),vt(`p-click`,function(){let a=U_(l).$implicit,d=nk();return H_(d.redirectLink(a.link))}),Zg()()()()}if(n&2){let l=H.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Ig(2),Oo(`background`,`white`),Ig(2),Wb(``,l.date,` by `,l.author),Ig(2),Gb(l.title),Ig(3),Gb(l.description)}}var Ce=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){o&1&&(Jc(0,`po-slide`,0),Db(1,Fe,11,12,`ng-template`,1),Zg()),o&2&&Rb(`p-slides`,a.sampleItems)},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var je=n=>({"docs-sample-code-tabs":n});var fe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Slide - Useful articles`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-slide-useful-articles`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,je,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return n})();var ve=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(o,a){if(o&1&&Cu(ia,7),o&2){let d;No(d=xo())&&(a.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(o,a){o&1&&(_u(0,`po-slide`,0),Jc(1,`po-modal`,1),Tk(2),Zg()),o&2&&(Rb(`p-slides`,a.landscapes),Ig(2),nm(` `,a.modalText,`
`))},dependencies:[ia,Oze],encapsulation:2,changeDetection:1})}return n})();var He=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Slide - Landscapes`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-slide-landscapes`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,He,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ve],encapsulation:2,changeDetection:1})}return n})();var qe=[`slideComponent`];function Oe(n,H){if(n&1){let l=ZO();Jc(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),Tk(4),Zg(),Jc(5,`div`,9),Tk(6),Zg(),_u(7,`po-divider`),Jc(8,`div`,10),Tk(9),Zg(),Jc(10,`po-button`,11),vt(`p-click`,function(){let a=U_(l).$implicit,d=nk();return H_(d.redirectLink(a.link))}),Zg()()()()}if(n&2){let l=H.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),Ig(2),Oo(`background`,`white`),Ig(2),Wb(``,l.date,` by `,l.author),Ig(2),Gb(l.title),Ig(3),Gb(l.description)}}var xe=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(o,a){if(o&1&&Cu(qe,7),o&2){let d;No(d=xo())&&(a.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){if(o&1&&(Jc(0,`po-slide`,1,0),Db(2,Oe,11,12,`ng-template`,2),Zg(),Jc(3,`div`,3)(4,`po-button`,4),vt(`p-click`,function(){return a.previousBtn()}),Zg(),Jc(5,`po-button`,5),vt(`p-click`,function(){return a.nextBtn()}),Zg()()),o&2){let d=sk(1);Rb(`p-slides`,a.sampleItems),Ig(4),Rb(`p-disabled`,d.getCurrentSlideIndex()===0),Ig(),Rb(`p-disabled`,d.getCurrentSlideIndex()===a.sampleItems.length-1)}},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var Re=n=>({"docs-sample-code-tabs":n});var Ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Slide - External Controls`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-slide-external-controls`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return n})();var we=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:279,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(o,a){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-slide`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoSlideComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Jc(18,`strong`)(19,`a`,6),Tk(20,`p-slide-content-template`),Zg()(),Tk(21,`.`),Zg(),Jc(22,`h4`),Tk(23,`Boas práticas:`),Zg(),Jc(24,`ul`)(25,`li`),Tk(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),Zg(),Jc(27,`li`),Tk(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),Zg(),Jc(29,`li`),Tk(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),Zg()()(),Jc(31,`div`,7)(32,`h4`,8),Tk(33,`Seletor`),Zg(),Jc(34,`pre`,9),Tk(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),Zg()(),Jc(36,`h4`,10),Tk(37,`Propriedades`),Zg(),Jc(38,`table`,11)(39,`tr`,12)(40,`th`,13),Tk(41,`Nome`),Zg(),Jc(42,`th`,13),Tk(43,`Tipo`),Zg(),Jc(44,`th`,13),Tk(45,`Padrão`),Zg(),Jc(46,`th`,13),Tk(47,`Descrição`),Zg()(),Jc(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),Tk(52,` p-height`),_u(53,`br`),Zg()()(),Jc(54,`td`,18)(55,`code`,19),Tk(56,`number`),Zg()(),Jc(57,`td`,20)(58,`p`)(59,`code`),Tk(60,`336`),Zg()()(),Jc(61,`td`,21)(62,`em`)(63,`strong`),Tk(64,`(opcional)`),Zg()(),Jc(65,`p`),Tk(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Jc(67,`code`),Tk(68,`default`),Zg(),Tk(69,`.`),Zg()()(),Jc(70,`tr`,14)(71,`td`,15)(72,`div`,16)(73,`span`,17),Tk(74,` p-hide-arrows`),_u(75,`br`),Zg()()(),Jc(76,`td`,18)(77,`code`,22),Tk(78,`boolean`),Zg()(),Jc(79,`td`,20)(80,`p`)(81,`code`),Tk(82,`false`),Zg()()(),Jc(83,`td`,21)(84,`em`)(85,`strong`),Tk(86,`(opcional)`),Zg()(),Jc(87,`p`),Tk(88,`Define a exibição das setas de navegação.`),Zg()()(),Jc(89,`tr`,14)(90,`td`,15)(91,`div`,16)(92,`span`,17),Tk(93,` p-interval`),_u(94,`br`),Zg()()(),Jc(95,`td`,18)(96,`code`,19),Tk(97,`number`),Zg()(),Jc(98,`td`,20)(99,`p`)(100,`code`),Tk(101,`4000`),Zg()()(),Jc(102,`td`,21)(103,`em`)(104,`strong`),Tk(105,`(opcional)`),Zg()(),Jc(106,`p`),Tk(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Jc(108,`code`),Tk(109,`1000`),Zg(),Tk(110,` os slides não trocam automaticamente.`),Zg()()(),Jc(111,`tr`,14)(112,`td`,15)(113,`div`,16)(114,`span`,17),Tk(115,` p-slides`),_u(116,`br`),Zg()()(),Jc(117,`td`,18)(118,`code`,23),Tk(119,`Array<PoSlideItem `),Zg(),Jc(120,`code`,24),Tk(121,` string `),Zg(),Jc(122,`code`,25),Tk(123,` any>`),Zg()(),Jc(124,`td`,20),Tk(125,`-`),Zg(),Jc(126,`td`,21)(127,`p`),Tk(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),Zg(),Jc(129,`ul`)(130,`li`),Tk(131,`Array implementando objetos da interface `),Jc(132,`code`),Tk(133,`PoSlideItem`),Zg(),Tk(134,`:`),Jc(135,`pre`)(136,`code`),Tk(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),Zg()()(),Jc(138,`li`),Tk(139,`Array de `),Jc(140,`code`),Tk(141,`strings`),Zg(),Tk(142,` com os caminhos das imagens:`),Jc(143,`pre`)(144,`code`),Tk(145,`['/assets/image-1', '/assets/image-2' ]
`),Zg()()(),Jc(146,`li`),Tk(147,`Array com lista de itens (para utilizar template):`),Jc(148,`pre`)(149,`code`),Tk(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),Zg()()()(),Jc(151,`blockquote`)(152,`p`),Tk(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),Zg()()()()(),Jc(154,`h3`,10),Tk(155,`Métodos`),Zg(),Jc(156,`table`,26)(157,`tr`,14)(158,`th`,27)(159,`div`,16)(160,`h4`)(161,`span`,17),Tk(162,` getCurrentSlideIndex `),Zg()()()()(),Jc(163,`tr`,21)(164,`td`,21)(165,`p`),Tk(166,`Método que retorna o index do slide atual`),Zg(),Jc(167,`pre`)(168,`code`),Tk(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),Zg()()()()(),_u(170,`br`),Jc(171,`table`,26)(172,`tr`,14)(173,`th`,27)(174,`div`,16)(175,`h4`)(176,`span`,17),Tk(177,` next `),Zg()()()()(),Jc(178,`tr`,21)(179,`td`,21)(180,`p`),Tk(181,`Método para chamar o próximo slide.`),Zg(),Jc(182,`pre`)(183,`code`),Tk(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),Zg()()()()(),_u(185,`br`),Jc(186,`table`,26)(187,`tr`,14)(188,`th`,27)(189,`div`,16)(190,`h4`)(191,`span`,17),Tk(192,` previous `),Zg()()()()(),Jc(193,`tr`,21)(194,`td`,21)(195,`p`),Tk(196,`Método para chamar o slide anterior.`),Zg(),Jc(197,`pre`)(198,`code`),Tk(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),Zg()()()()(),_u(200,`br`),Jc(201,`h3`),Tk(202,`Interfaces`),Zg(),Jc(203,`h4`,28)(204,`code`,5),Tk(205,`PoSlideItem`),Zg()(),Jc(206,`div`,2)(207,`p`),Tk(208,`Interface que define cada objeto do `),Jc(209,`code`),Tk(210,`PoSlideItem`),Zg(),Tk(211,`.`),Zg()(),Jc(212,`h4`,10),Tk(213,`Propriedades`),Zg(),Jc(214,`table`,11)(215,`tr`,12)(216,`th`,13),Tk(217,`Nome`),Zg(),Jc(218,`th`,13),Tk(219,`Tipo`),Zg(),Jc(220,`th`,13),Tk(221,`Descrição`),Zg()(),Jc(222,`tr`,14)(223,`td`,15)(224,`div`,16)(225,`span`,17),Tk(226,` action`),_u(227,`br`),Zg()()(),Jc(228,`td`,18)(229,`code`,29),Tk(230,`Function`),Zg()(),Jc(231,`td`,21)(232,`em`)(233,`strong`),Tk(234,`(opcional)`),Zg()(),Jc(235,`p`),Tk(236,`Ação executada ao clicar no slide caso não tenha link definido.`),Zg()()(),Jc(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),Tk(241,` alt`),_u(242,`br`),Zg()()(),Jc(243,`td`,18)(244,`code`,24),Tk(245,`string`),Zg()(),Jc(246,`td`,21)(247,`em`)(248,`strong`),Tk(249,`(opcional)`),Zg()(),Jc(250,`p`),Tk(251,`Texto que aparece quando a imagem não é encontrada.`),Zg()()(),Jc(252,`tr`,14)(253,`td`,15)(254,`div`,16)(255,`span`,17),Tk(256,` image`),_u(257,`br`),Zg()()(),Jc(258,`td`,18)(259,`code`,24),Tk(260,`string`),Zg()(),Jc(261,`td`,21)(262,`p`),Tk(263,`Define o caminho da imagem.`),Zg()()(),Jc(264,`tr`,14)(265,`td`,15)(266,`div`,16)(267,`span`,17),Tk(268,` link`),_u(269,`br`),Zg()()(),Jc(270,`td`,18)(271,`code`,24),Tk(272,`string`),Zg()(),Jc(273,`td`,21)(274,`em`)(275,`strong`),Tk(276,`(opcional)`),Zg()(),Jc(277,`p`),Tk(278,`Link interno ou externo que será aberto ao clicar no slide.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Ye(n,H){if(n&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-slide-basic-view`)(2,`sample-po-slide-labs-view`)(3,`sample-po-slide-useful-articles-view`)(4,`sample-po-slide-landscapes-view`)(5,`sample-po-slide-external-controls-view`),Zg()}if(n&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Je=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,a){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ye,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-slide-doc`),Zg()()()),o&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,be,fe,ye,Ee,we],encapsulation:2,changeDetection:1})}return n})()}];var _e=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[WV.forChild(Je),WV]})}return n})();var Bt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,_e]})}return n})();export{Bt as DocPoSlideModule};
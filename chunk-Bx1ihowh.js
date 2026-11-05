import{Ai as Zn,Ia as rg,Ka as vx,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Sa as nu,Tr as Fx,Ua as v_,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ha as lO,ir as Ax,ln as lre,oi as Sn,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var _=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoListViewModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-list-view`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoListViewContentTemplateDirective`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),wg(),jc(18,`p`),lO(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),wg(),jc(20,`ul`)(21,`li`),lO(22,`Item: `),jc(23,`code`),lO(24,`item`),wg(),lO(25,` determina o item da linha corrente.`),wg(),jc(26,`li`),lO(27,`Índice: `),jc(28,`code`),lO(29,`index`),wg(),lO(30,` determina o índice da linha corrente.`),wg()(),jc(31,`p`),lO(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),jc(33,`em`),lO(34,`syntax sugar`),wg(),lO(35,`. Veja a seguir ambos, respectivamente:`),wg(),jc(36,`pre`)(37,`code`),lO(38,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),wg()(),jc(39,`pre`)(40,`code`),lO(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),wg()(),jc(42,`p`),lO(43,`A diretiva `),jc(44,`strong`),lO(45,`p-list-view-content-template`),wg(),lO(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),jc(47,`code`),lO(48,`p-title`),wg(),lO(49,`,
a mesma deve retornar um valor do tipo `),jc(50,`em`),lO(51,`string`),wg(),lO(52,`. Veja o exemplo a seguir:`),wg(),jc(53,`pre`)(54,`code`),lO(55,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),wg()()(),jc(56,`div`,6)(57,`h4`,7),lO(58,`Seletor`),wg(),jc(59,`pre`,8),lO(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),wg()(),jc(61,`h4`,9),lO(62,`Propriedades`),wg(),jc(63,`table`,10)(64,`tr`,11)(65,`th`,12),lO(66,`Nome`),wg(),jc(67,`th`,12),lO(68,`Tipo`),wg(),jc(69,`th`,12),lO(70,`Padrão`),wg(),jc(71,`th`,12),lO(72,`Descrição`),wg()(),jc(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),lO(77,` p-title`),nu(78,`br`),wg()()(),jc(79,`td`,17)(80,`code`,18),lO(81,`(item) => string`),wg()(),jc(82,`td`,19),lO(83,`-`),wg(),jc(84,`td`,20)(85,`em`)(86,`strong`),lO(87,`(opcional)`),wg()(),jc(88,`p`),lO(89,`Função que deve retornar um valor do tipo `),jc(90,`code`),lO(91,`string`),wg(),lO(92,`, que será utilizado como o título de cada item da lista.`),wg(),jc(93,`blockquote`)(94,`p`),lO(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function R(n,F){if(n&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let r=Fx();return __(r.changeTab(`web`))}),wg()}if(n&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,r){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,R,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(4,`sample-po-list-view-content-template-doc`),wg()()()),o&2&&(UE(`p-actions`,r.actions),rg(2),Dx(r.hidePoWebSample?-1:2),rg(),UE(`p-active`,r.activeTab===`doc`))},dependencies:[Vze,lre,ure,_],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[I1.forChild(q),I1]})}return n})();var X=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[M,k]})}return n})();export{X as DocPoListViewContentTemplateModule};
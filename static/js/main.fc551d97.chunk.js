(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{136:function(e,n,t){},137:function(e,n,t){},157:function(e,n,t){},165:function(e,n,t){},173:function(e,n,t){},177:function(e,n,t){},178:function(e,n,t){},179:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(31),o=t.n(i),s=(t(136),t(55)),c=t(15),r=t.p+"static/media/lines.765de791.svg",d=t.p+"static/media/networking.3850ba05.png",l=(t(137),t(1));function A(e){var n=e.id,t=void 0===n?"sobre":n;return Object(l.jsx)("div",{id:t,children:Object(l.jsxs)("div",{className:"container_about",children:[Object(l.jsx)("h3",{children:"Sobre mim"}),Object(l.jsxs)("div",{className:"aboutMe",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Meu nome \xe9 Gabriel Freitas, tenho 20 anos e sou apaixonado pela programa\xe7\xe3o. Atualmente estou fazendo faculdade na UNIP, atuando",Object(l.jsx)("br",{}),"como desenvolvedorfullstack na FlipBox e freeLancer com ReactJS, React-native, nodeJs (typescript).",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"A cada dia que passa consigo aprender e evoluir ainda mais para chegar nos meus objetivos como programador, tanto nas tarefas di\xe1rias",Object(l.jsx)("br",{}),"da empresa, quanto nos estudos que realizo todos os dias.",Object(l.jsx)("br",{})]})}),Object(l.jsx)("img",{src:d,className:"networking_img",width:"393px",height:"400px"})]})]})})}var b=t(69),j=t.n(b),m=t(91),h=t(12),x=t(222),p=t(226),g=t(216),v=t(219),u=t(94),f=t.n(u).a.create({baseURL:"http://localhost:3333/"}),O={sendEmail:function(e){return f.post("/sendEmail",e)}};t(157);function C(e){var n=e.id,t=void 0===n?"contact":n,i=Object(a.useState)(""),o=Object(h.a)(i,2),s=o[0],c=o[1],r=Object(a.useState)(""),d=Object(h.a)(r,2),A=d[0],b=d[1],u=Object(a.useState)(""),f=Object(h.a)(u,2),C=f[0],F=f[1];function E(){return(E=Object(m.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O.sendEmail({name:s,email:A,messageTxt:C});case 4:e.sent&&(alert("E-mail enviado com sucesso"),console.log("Sucesso padrin")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(l.jsx)("div",{id:t,children:Object(l.jsxs)("div",{className:"container_contact",children:[Object(l.jsx)("h3",{children:"Contato"}),Object(l.jsx)("form",{children:Object(l.jsxs)("fieldset",{children:[Object(l.jsx)(x.a,{id:"outlined-basic",label:"Name",variant:"standard",onChange:function(e){return c(e.target.value)}}),Object(l.jsx)(x.a,{id:"outlined-basic",label:"E-mail",variant:"standard",onChange:function(e){return b(e.target.value)}}),Object(l.jsx)(g.a,{onChange:function(e){return F(e.target.value)},"aria-label":"empty textarea",placeholder:"Deixe sua mensagem",style:{height:100}}),Object(l.jsx)(p.a,{variant:"contained",onClick:function(e){return function(e){return E.apply(this,arguments)}(e)},endIcon:Object(l.jsx)(v.a,{}),children:"Enviar"})]})})]})})}var F,E=t(25),z=t(34),D=z.a.div(F||(F=Object(E.a)(["\n   border-top: 1px solid #333;\n   bottom: 0;\n   left: 0;\n   width: 100%;\n   border-top: 1px solid #eee;\n   height: 50px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"])));t(165);function B(){return Object(l.jsx)("div",{children:Object(l.jsx)(D,{children:Object(l.jsx)("p",{children:"Criado por Gabriel Freitas - @2022"})})})}var w,L,N,y=t(47),P=t(102),S=z.a.div(w||(w=Object(E.a)(["\n    display: flex;\n    width: 100%;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #1C1C1C;\n    position: fixed;\n    top: 0;\n    left: 0;\n    color: #fff;\n    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);\n\n    .hamburguer {\n      display: none;\n    }\n\n    @media(max-width: 890px){\n        .hamburguer {\n          display: block;\n        }\n    }\n"]))),I=z.a.div(L||(L=Object(E.a)(["\n    margin-left: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n\n    .avatar {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        display: inline;\n        outline: inherit;\n        color: aliceblue;\n        font-weight: 600;\n        border: 2px solid #91B2FB;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        font-size: 28px;\n    }\n"]))),Q=z.a.div(N||(N=Object(E.a)(["\n    margin-right: 100px;\n    display: flex;\n    \n    .link{\n        text-decoration: none;\n        padding-left:50px;\n        font-size: 25px;\n        font-style: normal;\n        cursor: pointer;\n        font-family: Arial, Helvetica, sans-serif;\n\n        &:hover{\n            color: #91B2FB;\n        }\n    }\n\n    @media(max-width: 890px){\n        display: flex;\n        flex-direction: column;\n\n        .link{\n            padding-bottom: 10px;\n        }\n        margin-right: 20px;\n        \n        .link{\n            font-size: 20px;\n            padding-left:20px;\n        }\n        display: ",";\n    }\n"])),(function(e){return e.isOpen?"flex":"none"}));t(173);function G(){var e=Object(a.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return Object(l.jsxs)(S,{children:[Object(l.jsx)(I,{children:Object(l.jsx)("div",{className:"avatar",children:"G"})}),Object(l.jsxs)(Q,{isOpen:t,children:[Object(l.jsxs)(y.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:t?-100:-160,duration:500,children:["Home",Object(l.jsx)("div",{className:"linelink"})]}),Object(l.jsxs)(y.Link,{className:"link",activeClass:"active",to:"sobre",spy:!0,smooth:!0,offset:t?-150:-125,duration:500,children:["Sobre",Object(l.jsx)("div",{className:"linelink"})]}),Object(l.jsxs)(y.Link,{className:"link",activeClass:"active",to:"tecnologia",spy:!0,smooth:!0,offset:t?-150:-125,duration:500,children:["Tecnologias",Object(l.jsx)("div",{className:"linelink"})]}),Object(l.jsxs)(y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:t?-150:-125,duration:500,children:["Contato",Object(l.jsx)("div",{className:"linelink"})]})]}),Object(l.jsx)("div",{className:"hamburguer",children:Object(l.jsx)(P.a,{toggled:t,toggle:i})})]})}var U,k,V=t.p+"static/media/eu2.51e7d8f1.png",W=z.a.div(U||(U=Object(E.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n    height: 550px;\n    margin-top: 50px;\n\n    .myPicture {\n      border-radius: 35%;\n      margin-top: 50px;\n    }\n\n    .downloadCv {\n      margin-top: 20px;\n      background-color: #eee;\n      color: #000;\n      border: 2px solid #91B2FB;\n      padding: 10px 20px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n\n      :hover, :active{\n        background-color: #91B2FB;\n        color: #eee;\n      }\n    }\n\n    @media(max-width: 890px){\n        flex-direction: column;\n        text-align: center;\n\n        .myPicture {\n          width: 350px;\n          height: 350px;\n        }\n    }\n\n    @media(max-width: 460px){\n        flex-direction: column;\n        text-align: center;\n\n        .myPicture {\n          width: 250px;\n          height: 250px;\n        }\n    }\n"]))),H=z.a.div(k||(k=Object(E.a)(["\n    .chargeJobText{\n        color: #696969;\n        font-size: 18px;\n    }\n"]))),J=t.p+"static/media/CV_Gabriel_28-03-22.c5648911.pdf";function R(e){var n=e.id,t=void 0===n?"home":n;return Object(l.jsx)("div",{id:t,children:Object(l.jsxs)(W,{children:[Object(l.jsx)("img",{className:"myPicture",src:V}),Object(l.jsx)(H,{children:Object(l.jsxs)("div",{className:"aboutMe",children:[Object(l.jsx)("h1",{children:"I'M GABRIEL FREITAS"}),Object(l.jsx)("h4",{className:"chargeJobText",children:"SOFTWARE DEVELOPER"}),Object(l.jsx)(s.b,{className:"downloadCv",to:J,target:"_blank",download:!0,children:Object(l.jsx)("h4",{children:"Baixar CV"})})]})})]})})}var T=t(230),K=t(233),q=t(232),M=t(229),X=t(231),Z=t(234),Y=t(221),_=t(228),$=t(223),ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4,maxWidth:400,minWidth:200};function ne(e){var n=e.title,t=e.description,a=e.handleClose,i=e.open;return Object(l.jsx)("div",{children:Object(l.jsx)($.a,{open:i,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(l.jsxs)(_.a,{sx:ee,children:[Object(l.jsx)(M.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:n}),t.map((function(e,n){return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)(M.a,{id:"modal-modal-description",sx:{mt:2},children:e})]},n)}))]})})})}function te(e){var n=e.image,t=e.title,i=e.description,o=Object(a.useState)(!1),s=Object(h.a)(o,2),c=s[0],r=s[1];return Object(l.jsxs)(T.a,{sx:{maxWidth:345},children:[Object(l.jsxs)(X.a,{children:[Object(l.jsx)(q.a,{component:"img",height:"170",image:n,alt:"green iguana"}),Object(l.jsx)(K.a,{children:Object(l.jsx)(M.a,{gutterBottom:!0,variant:"h5",component:"div",children:t})})]}),Object(l.jsx)(Z.a,{children:Object(l.jsxs)(p.a,{size:"small",style:{color:"#91B2FB"},onClick:function(){return r(!0)},children:["Mais informa\xe7\xf5es ",Object(l.jsx)(Y.a,{})]})}),Object(l.jsx)(ne,{handleClose:function(){return r(!1)},open:c,title:t,description:i})]})}var ae=t.p+"static/media/icon-node.f7fc2f16.png",ie=t.p+"static/media/icon-react.93a4bdf1.png",oe=t.p+"static/media/icon-laravel.7a1058a3.png",se=t.p+"static/media/aws.7cfb1f5c.png",ce=(t(177),[{name:"Node Js",pathImage:ae,description:["* Desenvolvimento backend (NodeJS) com typescript","- Gerenciamento de gateway e sockets.","- Servi\xe7os para verificar determinadas tarefas nas plataformas."]},{name:"React Js",pathImage:ie,description:["* Desenvolvimento frontend (React) com javascript","- Sistema de n\xedvel cliente e administrativo.","- Portif\xf3lio."]},{name:"React Native",pathImage:ie,description:["* Desenvolvimento mobile (React Native) com javascript","- Aplicativo mobile de rastreamento de ve\xedculos (apenas para consulta da localiza\xe7\xe3o).","- Aplicativo para solicita\xe7\xf5es de viagens em tempo real. (Ideia parecida com a Uber/99)","- Aplicativo de rede social (Projeto pessoal em desenvolvimento)."]},{name:"AWS",pathImage:se,description:["* DevOps","- Configura\xe7\xf5es de inst\xe2ncias, grupos de seguran\xe7a, IP'S el\xe1sticos","- Configura\xe7\xf5es do servidor linux","- Realizando instala\xe7\xe3o de servi\xe7os para o deploy de projetos"]},{name:"PHP (Laravel)",pathImage:oe,description:["* Desenvolvimento backend (PHP Laravel)","- Projeto para cl\xednica odontologica. Cadastro/atuali\xe7\xe3o/exclus\xe3o de documentos e anamneses. Gera\xe7\xe3o de documento pdf."]},{name:"HTML",pathImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX////lVjjyazrq6ur+/v7lUzTra1LoWzjrXznlTCrq8fLw8PDyaTbp1tPyYSfxYiv86OHze1Hnppv4uKXlTizmcVvkUTHlSibuZTn99PLyZjLtYznlRyH++fj87uvoxL7me2joubH5xLT0hmHoXUHtaE342NPxkoH1p5n1wbjytKnp0MvyraH5zsb1mHvnnZDmgG7q4d/otKvxWx72oon0jWzwjnz5ysLumIjqb1jykoH74NvzdUnxhG/noZXotq33rpjznY71k3T5vq3tSR36r6Fqd+a8AAAKsklEQVR4nO2dfV/iOBeGg0NhyirgWFpxAd8QX5nR0VFZdNZ5+/5f6WnBaktyl4SeU7rPL9ffu9VrGpO7JyetEBaLxWKxWCwWi8VisVgsFovFYrFYLP8pzk5q5aNLaug6ZcMfkhpeuJWy4dT6lIYP5TP0nykFxaiEhvekhlNv3UIS3iOp4cBZt5CEd0Zq2B2uW0jCvSA1rJ6U7ia6D6SGYlI+wxGt4YG/bqNFvCmt4X3pDJ0BreEZ2XLxMQf1xHVoQxthbKtv5ODj+3WcE1pB8RCUwTBxD50JseGoVzJD4lgaxrbSGZ4SGw5KMUoT1yEObWGoKZshcWgLoVoPqQwD4tAmBFUwzWO4m7hOjzi0CdEpmyFxaKOLbVSGAXFoo4tteQz/ThpWqQ2pYlsew0RoqzjUguKcaLkgMiSPpUKMS2DIGdrC2FYyw3/IDaliWx7DxGXIQ5sQ3RKsFonL0Ic20R+iJd9zjWgZsQkMg3Nywyqstl1uGdE2YfAtoZha8MfkhuIZDFPvpvHBgL/MfuoxMiQPbUKcAkP30kQwNKwaIJ6QIXloE+IHiG3uPp+hqG4kDJOhzSGutEVcgdjm/ms4Sk0Mu8mZJhlphqTbo3POgaH3idGw3QKGE/LgHcY2ZPiF0XCaNOQNbTi2+feMhuMmMKSutEW0wUzjHzAaHiXvYXLg0Ie2MJiqBStOx0TQ0HAHGLpXDIZdUItyThgN7/aAIX1oy4htwxs+w8/IkCG0CdEBocbZ4jOEsZQhtAlxjWIbm6GobgNDr81h+Agm08AothkZ9p9AaKswxFJcTwwOTZYLI8Nu4q8wXYdiiKW4nuhesBkO9oAhR2jD1Taz2Gb0fDhFkeaAQxB27/mPsiHRM/4RiqW0XXsxbWR4LRk2Hn8HiKYBScFUaKPt2osZoPVQjm2NT3APYPVaW9LwD4thv67+nRWxrXEIq6skhiyhLQTWE+X5ZJ/XkKPSFoGCqSsH0y3YurGyYSq0kW8Az0H1xECObTe8hi5LaMP1RFVsox+lqUobS2jLim3yVAN3OVY2TG6PVhgqbREotgVf5QURtm5QGDpDHkHYved9lw1h68bKhpxdezGoe08R2xroYZLEkKWWGAHriXK1rYEeJkkMPY5aYgTaBnZqsiGMbSsbJq7BFNqEqKLfeigb/ouWCwpDrtCGY5srPz7toyWfwpC+ay+mBgwDObZdUt9D3q69GBTbeorYxmkYMIW2MLaBCbInbwPfeODoZ31Tn6RhqqeNpQ4VAWObIphO0OndbX02gaHHUoeKgNU2ObZ9aCC0a22im6xDFRHacPeeIrZB/hLaN6B9mzAsIrTheqKq2pZhqHsPR8CQLbRlxDa52kZhiDaAmSptEQPwd+h0WAx/FbkBPKerFlQFUwrDF7QBTN+1F9NHz7VDbUETQ7Q9ytC1F4O79/S3gQ0MvyFDttCGY5uvv0lqYFhk114MQfeegSHq2vOYKm0RBN172oaii7r2KmyxNKN7TxHbchsOUNfeCVMtMQJ177n63Xv6hrBrr8MWvDO2gfVjm75hoV17MVO0SarfvadvOEaGXJW2CILuPX3DNYS2jO69ia6ggeEaQhuObc4JfOCVn4DVyIaFdu29gaptle+fNLnaUTKWFHEsZQxtGWdltQ/OeMqjMbcvsiHq2qN+qUkauOGijbqa2DpaNBR91LXns9USI+CGS07DpjRKcdfekDGWCvGHybA1lQzhUQvO0IZjW27DtmQ4QLVEvkpbRP6zsmrDza5kWHDXXkz+l7goDTc3qpIhPGrB07UX04b3ULFFYWD4JC8WR0nDxAW8H6yGXTjTdCTU6UBteCwboqMWHsdRiwTIcCjHM3X3ntJw76ds+FJ8pW0G2gb25Yyt3gZWG95lhzbu87FJUD1RsQ2s7t5TGrZ2ZENUaaN/qUkak21gfcOmFNqqAoU2vg3gOSi29RTVNmU6UBvKoQ2ej/UYK20RV/qHLhrK/1BpeCuHtj6INBWfVxBukioOXTSUy4XacKAf2vg2gOfA7j350EXjQNuw2ZdDW/EbwHNGaJP0VDZU7gGoVwt5ooGhjbOWGIFim6Po3vui+ptVGS4NbckNYN7QFsa2vN17SsMShTbRR4UaRfeeMrapDMsU2vArkx15PVQeulAaLgltRRy1eAdV2zxF954q1KgMmwahjbeWGGFy6GLiBd7iP4hkuNdsPimqpesKbWZnZRs3h6fDXpD6N0kZbrZu937+aksP+KEhCm18XXsxqHvPVZ6VDR8Tty4OnMStfDPc3Gu2tnems71AWbAPTo+yHbV4x6R7L7b8cPmlE1vW3+zuxl2l3cxwgLZHTxi3R+fAl7hknpVtNG72H2tBOGDr0dB8+nzUriK7mWEbxdIOtyCObcu2gcNbufX12v/dPN6ZzkYa1IsMR+uptEWg2KbVvRf9WS61mxk+rCu0ZZ2V1dsG1tshLfalJmnQly6cmpagriEKbawbwHPgNrDmK040DWFoYztq8UYVbpKSGq6jay8mZ/eepiGKpVznY5Pk7N7TMsQbwFznY5Pg7j2tyVTPEHXtOdRftVCB6olhbNNR1DAMfwjs2qP9FJkaFNuc4enhzXLJZYbhT+iOXo6Boc8f2nBsqzhe4E++XDayLbMMo8u3f33baKZfzJoMbdcFGKLuvVfLnnvw9SbDEhlGl+6O7zZum3spvQVDvqMW76DuvfffIghqj/towCoNw8v2pzvH4fPwot3CcsjatReDDl0sDNjKwact1a2UDKNrDo4+PzVbewq74kNbGGrgK04WbqUbDO/luSdlOLve6GW7JQ9NYMgf2kRG957Csterfb/8kLR8N4zswnmlddvKsNtYiDQFhDbTL104bm94/XXrzXJuGF1nML7bbjbR0ASGzBvAc8y79/zAC+eeueTr+cNpuORlDk21oV9AaMOxLftWeoHbmc090bzyc3PZ0EyQ6torILThQxfLLcMBe3r4sn2rMTQTFFtpi8jzpYvwVurfPIVhrQhBMc7V22Z+Hr+4rr2YfB8oy2fIX0uMyPelC3PDxP9cSGgLE+T6DAsJbQJ377EY7ia3Zdg3gF/RDKYEhn8vvMiQ76UmaXJ9OVfbMHXzYsNCQhuuJ9IZ7n5Uv4WS46sWKlaKbfqGi0MzaVhAHSpi5di23BDdvFe4u/Zicn2gDBsusauwfIpMTa4v5wLD3WV2M8MiaokRsJ64ouHym/dKQaFNiPbvYPXZdMFwN2NeWcBxfxcT2iLFi2evJ/UCmRtq37yK4/eCydWooKl0Rn90VvMC39zyzVD/5kVVu38eCnm6X2DwcH/iuoYDtq49r8wIH5nrzxcFRRkV/enVs6J5LctQf2jOqudn43XcvDTd8Y96L8fco8Zxe97z+aCQuowO7fPnYeBRWc52sf4U9ByhT3d01gkHbG4933Vrjw8FRWxjBuen9Z67+sOVEy5C4bxS5KJgTnV6MXFXWSydcF45ORuX2y4mnHtqntEyMtuoOi/r0FRSbV/cVwKtARvOK95zsXmFiij39JbkHj/oVX6sJa9QEeaeYQAG7DyvFNDkxE6YeypS7gmH5uRs9F++eWkG4dwTvOWe2SbU+f/DzUtRDXNPtIx4vd7kquRLXg5GZ5PTEkRpi8VisVgsFovFYrFYLBaLxWKxWCyWdfA/Eg1r3eUkmXcAAAAASUVORK5CYII=",description:["* Desenvolvimento frontend (HTML)"]},{name:"CSS3",pathImage:"data:image/png;base64,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",description:["* Estiliza\xe7\xe3o CSS3"]},{name:"Git",pathImage:"data:image/png;base64,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",description:["* Controle e vercionamento utilizando o GIT.","- GitLab.","- Github.","- BitBucket."]}]);function re(e){var n=e.id,t=void 0===n?"tecnologia":n;return Object(l.jsx)("div",{id:t,children:Object(l.jsxs)("div",{className:"container_tec",children:[Object(l.jsx)("h3",{children:"Principias tecnologias"}),Object(l.jsx)("div",{className:"tec_content",children:Object(l.jsx)("div",{className:"tec_grid3",children:ce.map((function(e,n){return Object(l.jsx)("div",{className:"info_tecs",children:Object(l.jsx)(te,{title:e.name,image:e.pathImage,description:e.description})},n)}))})})]})})}t(178);function de(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(R,{})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:r}),Object(l.jsx)(A,{}),Object(l.jsx)(re,{}),Object(l.jsx)(C,{}),Object(l.jsx)(B,{}),Object(l.jsx)(G,{})]})]})}function le(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"P\xe1gina n\xe3o existe"})})}function Ae(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",component:de}),Object(l.jsx)(c.a,{path:"*",component:le})]})})}var be=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(Ae,{})})};o.a.render(Object(l.jsx)(be,{}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.fc551d97.chunk.js.map
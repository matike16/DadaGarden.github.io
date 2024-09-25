import{_ as e,o as t,c as i,e as l}from"./app-CkQGFoUE.js";const r={},a=l('<h2 id="spring-mvc整合" tabindex="-1"><a class="header-anchor" href="#spring-mvc整合"><span>Spring MVC整合</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>参考书籍整合MVC方式使用的是模板引擎的方式，个人目前倾向于使用客户端渲染的Vue模式，关于整合MVC部分不做过多详细的描述。</p></div><h3 id="spring-mvc介绍" tabindex="-1"><a class="header-anchor" href="#spring-mvc介绍"><span>Spring MVC介绍</span></a></h3><p>Spring MVC 是Spring框架的一部分，实现了经典的MVC设计模式，用于构建Web应用。</p><h4 id="mvc模式" tabindex="-1"><a class="header-anchor" href="#mvc模式"><span>MVC模式</span></a></h4><p><strong>Model（模型）</strong></p><ul><li>应用程序中用于<mark>处理数据</mark>的部分，通常代表应用程序的状态</li><li>Spring MVC中，模型通常是JavaBean或者POJOs（Plain Old Java Objects），它们包含了应用程序的业务逻辑和数据。</li></ul><div class="hint-container tip"><p class="hint-container-title">概括</p><p>后端，包含所有的数据逻辑，通过服务处与数据库进行交互。</p></div><p><strong>View（视图）</strong></p><ul><li>应用程序中负责<mark>展示数据</mark>的部分。</li><li>Spring MVC中，视图通常由JSP、HTML页面和模板引擎生成。</li></ul><div class="hint-container tip"><p class="hint-container-title">概括</p><p>前端界面或GUI。</p></div><p><strong>Controller（控制器）</strong></p><ul><li>应用程序中<mark>处理用户交互</mark>的部分。</li><li>Spring MVC中，控制器通过注解标记的类和方法来定义。控制器接收用户的输入，通常是通过HTTP请求，然后调用模型来处理这些输入，并选择一个视图来展示处理结果。</li></ul><div class="hint-container tip"><p class="hint-container-title">概括</p><p>应用的大脑，控制数据如何展示。</p></div><h4 id="mvc工作流程" tabindex="-1"><a class="header-anchor" href="#mvc工作流程"><span>MVC工作流程</span></a></h4><ol><li>用户发送请求到服务器</li><li>服务器端的中央控制器接收到请求</li><li>中央控制器根据请求URL将请求分配给对应的控制器</li><li>控制器接收请求，并调用模型处理业务逻辑和数据操作</li><li>模型处理完数据后，返回处理结果</li><li>控制器根据返回结果选择合适的视图</li><li>视图渲染完成后，将结果返回给用户</li></ol><h3 id="使用vue作为视图" tabindex="-1"><a class="header-anchor" href="#使用vue作为视图"><span>使用Vue作为视图</span></a></h3><p><strong>Controller（控制器）</strong></p><ul><li>控制器接收到前端的请求，处理完毕后，通常返回JSON格式的数据，而不是完整的HTML页面。Vue应用会在客户端接收到这些数据，进行响应式更新。</li></ul><p><strong>具体步骤</strong></p><ol><li>创建Vue组件</li><li>后端提供API</li><li>前端调用API</li><li>进行数据绑定</li><li>事件处理</li><li>响应式更新</li></ol><h2 id="spring-boot整合servlet三大件" tabindex="-1"><a class="header-anchor" href="#spring-boot整合servlet三大件"><span>Spring Boot整合Servlet三大件</span></a></h2><p>进行Servlet开发时，通常需要先定义Servlet、Filter、Listener三大组件，然后再在web.xml中进行配置。Spring Boot由于内置Servlet容器，不提供web.xml，因此提供了<mark>组件注册</mark>和<mark>路径扫描</mark>两种方式来整合Servlet三大件。</p><div class="hint-container important"><p class="hint-container-title">关于Servlet</p><p>在现代化的Java Web开发中，尤其是在使用Spring Boot框架时，直接使用Servlet的情况已经不多见了。Spring Boot和Spring MVC提供了更为高级和便捷的抽象，使得开发者通常不需要直接与Servlet API打交道。</p></div><h3 id="什么是servlet" tabindex="-1"><a class="header-anchor" href="#什么是servlet"><span>什么是Servlet</span></a></h3><ul><li>Servlet 是一种Java类，用于响应网络请求。通常运行在Servlet容器内，如Tomcat、Jetty等</li></ul><h4 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h4><ul><li>处理HTTP请求：如GET、POST、PUT、DELETE等</li><li>生成响应：基于请求，生成HTML、XML和JSON等格式的响应。</li><li>管理会话：Servlet可以管理用户会话，跟踪用户状态。</li><li>资源共享：Servlet可以通过HTTP协议共享资源，如图片、视频等。</li></ul><h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h4><p>Servlet生命周期包括以下几个阶段：</p><ol><li>加载</li><li>初始化</li><li>请求处理</li><li>销毁</li></ol><h3 id="什么是filter" tabindex="-1"><a class="header-anchor" href="#什么是filter"><span>什么是Filter</span></a></h3><ul><li>Filter用户拦截请求和响应。以便它们到达Servlet之前或发送到客户端之前进行一些操作。</li></ul><h3 id="什么是listener" tabindex="-1"><a class="header-anchor" href="#什么是listener"><span>什么是Listener</span></a></h3><ul><li>Listener用于监听Web应用程序中的事件，并执行相应的操作。</li></ul><h3 id="组件注册方式整合" tabindex="-1"><a class="header-anchor" href="#组件注册方式整合"><span>组件注册方式整合</span></a></h3><h4 id="整合servlet" tabindex="-1"><a class="header-anchor" href="#整合servlet"><span>整合Servlet</span></a></h4><ul><li>创建一个继承自HttpServlet的类</li><li>使用@Component注解将自定义Servlet类作为组件注入Spring容器中</li><li>接着在Config包下创建一个Servlet组件配置类</li><li>使用@Configuration注解将该类标注为配置类</li><li>使用@Bean注册Servlet组件</li></ul><h4 id="整合filter" tabindex="-1"><a class="header-anchor" href="#整合filter"><span>整合Filter</span></a></h4><ul><li>创建一个继承自Filter接口的类</li><li>使用@Component注解将该类注入容器中</li><li>并重写init()、doFile()、destroy()方法</li><li>在刚刚的配置类中使用@Bean注册这个自定义Filter类</li></ul><h4 id="整合listerner" tabindex="-1"><a class="header-anchor" href="#整合listerner"><span>整合Listerner</span></a></h4><ul><li>整合Listerner的方式与上两种方式类似</li></ul><h3 id="路径扫描方式整合" tabindex="-1"><a class="header-anchor" href="#路径扫描方式整合"><span>路径扫描方式整合</span></a></h3><ul><li>对于自定义的Servlet、Filter、Listener组件分别使用@WebServlet、@WebFilter和@WebListener注解进行声明并配置相应的属性。</li><li>根据注解注解映射好对应的类后，在主程序启动类上添加@ServletComponentScan注解，开启基于注解方式的Servlet组件扫描支持。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在实际的开发中，我们可以根据需求来确定是否需要定制Servlet三大件组件来进行使用。</p></div>',45),n=[a];function o(s,p){return t(),i("div",null,n)}const h=e(r,[["render",o],["__file","Spring-Boot实现Web常用功能.html.vue"]]),d=JSON.parse('{"path":"/technology/backend-dev/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/Spring-Boot%E5%AE%9E%E7%8E%B0Web%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD.html","title":"SpringBoot实现Web常用功能","lang":"zh-CN","frontmatter":{"title":"SpringBoot实现Web常用功能","icon":"code","date":"2024-09-25T00:00:00.000Z","category":"后端框架","tags":["SpringBoot","Web开发","MVC","Servlet"],"cover":"/assets/images/Spring-Boot原理分析.jpg","excerpt":"Spring Boot框架支持整合一些常用的Web框架，从而实现Web开发，并默认支持Web开发中的一些调用功能。","order":"5","description":"Spring MVC整合 提示 参考书籍整合MVC方式使用的是模板引擎的方式，个人目前倾向于使用客户端渲染的Vue模式，关于整合MVC部分不做过多详细的描述。 Spring MVC介绍 Spring MVC 是Spring框架的一部分，实现了经典的MVC设计模式，用于构建Web应用。 MVC模式 Model（模型） 应用程序中用于处理数据的部分，通常代...","head":[["meta",{"property":"og:url","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/technology/backend-dev/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/Spring-Boot%E5%AE%9E%E7%8E%B0Web%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD.html"}],["meta",{"property":"og:site_name","content":"哒哒的花园"}],["meta",{"property":"og:title","content":"SpringBoot实现Web常用功能"}],["meta",{"property":"og:description","content":"Spring MVC整合 提示 参考书籍整合MVC方式使用的是模板引擎的方式，个人目前倾向于使用客户端渲染的Vue模式，关于整合MVC部分不做过多详细的描述。 Spring MVC介绍 Spring MVC 是Spring框架的一部分，实现了经典的MVC设计模式，用于构建Web应用。 MVC模式 Model（模型） 应用程序中用于处理数据的部分，通常代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Spring-Boot原理分析.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T09:00:12.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Spring-Boot原理分析.jpg"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot实现Web常用功能"}],["meta",{"property":"article:author","content":"哒哒溜"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"Web开发"}],["meta",{"property":"article:tag","content":"MVC"}],["meta",{"property":"article:tag","content":"Servlet"}],["meta",{"property":"article:published_time","content":"2024-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T09:00:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot实现Web常用功能\\",\\"image\\":[\\"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Spring-Boot原理分析.jpg\\"],\\"datePublished\\":\\"2024-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-25T09:00:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哒哒溜\\",\\"url\\":\\"https://github.com/matike16\\"}]}"]]},"headers":[{"level":2,"title":"Spring MVC整合","slug":"spring-mvc整合","link":"#spring-mvc整合","children":[{"level":3,"title":"Spring MVC介绍","slug":"spring-mvc介绍","link":"#spring-mvc介绍","children":[]},{"level":3,"title":"使用Vue作为视图","slug":"使用vue作为视图","link":"#使用vue作为视图","children":[]}]},{"level":2,"title":"Spring Boot整合Servlet三大件","slug":"spring-boot整合servlet三大件","link":"#spring-boot整合servlet三大件","children":[{"level":3,"title":"什么是Servlet","slug":"什么是servlet","link":"#什么是servlet","children":[]},{"level":3,"title":"什么是Filter","slug":"什么是filter","link":"#什么是filter","children":[]},{"level":3,"title":"什么是Listener","slug":"什么是listener","link":"#什么是listener","children":[]},{"level":3,"title":"组件注册方式整合","slug":"组件注册方式整合","link":"#组件注册方式整合","children":[]},{"level":3,"title":"路径扫描方式整合","slug":"路径扫描方式整合","link":"#路径扫描方式整合","children":[]}]}],"git":{"createdTime":1727235006000,"updatedTime":1727254812000,"contributors":[{"name":"matike16","email":"lda240820@gmail.com","commits":2}]},"readingTime":{"minutes":4.22,"words":1265},"filePathRelative":"technology/backend-dev/后端框架/Spring-Boot实现Web常用功能.md","localizedDate":"2024年9月25日","autoDesc":true}');export{h as comp,d as data};

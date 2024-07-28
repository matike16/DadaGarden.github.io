import{_ as i,o as a,c as e,e as n}from"./app-DcQ8fZ0b.js";const s="/dadagarden.github.io/assets/1-DMLP4r7O.jpg",l="/dadagarden.github.io/assets/2-BGAnMLn4.jpg",t="/dadagarden.github.io/assets/3-Bbgjmc4R.jpg",p="/dadagarden.github.io/assets/4-D9LjOkb0.jpg",d="/dadagarden.github.io/assets/5-qnkjdOTg.jpg",r="/dadagarden.github.io/assets/6-Bu1xWNF-.jpg",c="/dadagarden.github.io/assets/7-B_2Lcnkp.jpg",o={},h=n('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>本篇文章学习自B站狂神说Git. 在了解git之前我们要先了解版本控制</p></div><h1 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制"><span>版本控制</span></a></h1><div class="hint-container important"><p class="hint-container-title">重要</p><p>什么是版本控制？</p></div><p>版本控制是一种管理代码或文件变更的系统，用于跟踪文件和文档的修改、恢复以及管理分支和合并等操作。它可以追踪文件的修改、创建和删除，并记录每一次变更的详细信息，包括谁做出了修改、何时做出的修改以及具体修改了什么内容。</p><p><mark>版本控制系统的主要目标是提供一个可靠的记录文件改变历史的机制</mark>，使得团队成员可以在共享文件的情况下进行协作开发，并能方便地回滚到任意历史版本。版本控制还可以帮助<mark>解决多人协作时可能出现的冲突问题</mark>，通过合并不同人修改的版本，保证所有人的工作得以整合。</p><p>常见的版本控制系统有集中式版本控制系统（如CVS、Subversion等）和分布式版本控制系统（如Git、Mercurial等）。集中式版本控制系统将所有文件的历史记录存储在一个中央服务器上，而<mark>分布式版本控制系统则允许每个开发者在本地独立地修改和提交版本，并可以方便地与其他开发者进行同步</mark>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>简单来说就是多人协作开发项目的技术。</p></div><h2 id="常见的版本控制工具" tabindex="-1"><a class="header-anchor" href="#常见的版本控制工具"><span>常见的版本控制工具</span></a></h2><ul><li>Git</li><li>SVN（Subversion）</li><li>CVS （Concurrent Versions System）</li><li>VSS （Micorosoft Visual SourceSafe）</li><li>TFS （Team Foundation Server）</li><li>Visual Studio Online</li></ul><h2 id="版本控制分类" tabindex="-1"><a class="header-anchor" href="#版本控制分类"><span>版本控制分类</span></a></h2><h3 id="_1-本地版本控制" tabindex="-1"><a class="header-anchor" href="#_1-本地版本控制"><span>1. 本地版本控制</span></a></h3><p>记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。</p><figure><img src="'+s+'" alt="本地版本控制" tabindex="0" loading="lazy"><figcaption>本地版本控制</figcaption></figure><h4 id="👍优点" tabindex="-1"><a class="header-anchor" href="#👍优点"><span>👍优点：</span></a></h4><ol><li><p>速度快：由于版本历史和变更记录保存在本地，读写操作都在本地执行，因此操作速度通常比较快。</p></li><li><p>简单易用：相比于集中式或分布式系统，本地版本控制通常具有更简单的配置和使用方式，适合刚开始使用版本控制系统的开发者。</p></li><li><p>安全性：本地版本控制系统通常具有更好的安全性，因为版本历史和变更记录不需要通过网络传输或存储在外部服务器上，避免了潜在的数据泄露风险。</p></li></ol><h4 id="👎缺点" tabindex="-1"><a class="header-anchor" href="#👎缺点"><span>👎缺点：</span></a></h4><ol><li><p>缺乏多人协作功能：本地版本控制系统无法用于多人同步和协作开发，每个开发者的本地版本库是相互独立的，不支持分支和合并操作。</p></li><li><p>备份和恢复困难：由于版本历史和变更记录只保存在本地，一旦本地计算机出现故障或数据丢失，可能很难恢复文件的历史版本。</p></li><li><p>更新和分发困难：如果多个开发者通过复制和粘贴方式进行文件的更新和分发，可能导致文件的不一致和冲突。</p></li></ol><h3 id="_2-集中版本控制" tabindex="-1"><a class="header-anchor" href="#_2-集中版本控制"><span>2. 集中版本控制</span></a></h3><p>所有的版本数据保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改。</p><blockquote><p>SVN可以学一学</p></blockquote><figure><img src="'+l+'" alt="集中版本控制" tabindex="0" loading="lazy"><figcaption>集中版本控制</figcaption></figure><h4 id="👍优点-1" tabindex="-1"><a class="header-anchor" href="#👍优点-1"><span>👍优点：</span></a></h4><ol><li><p>多人协作：集中式版本控制系统支持多个开发者同时使用，并可有效地协调和管理他们的工作。开发者可以从中央服务器获取最新版本的文件并将自己的更改提交到服务器上，从而实现多人协作。</p></li><li><p>管理和控制：由于所有文件的版本历史和变更记录都存储在中央服务器上，集中式版本控制系统可以提供更好的管理和控制。例如，可以查看和比较不同版本之间的差异，回滚到以前的版本等。</p></li><li><p>访问控制：集中式版本控制系统通常提供访问控制机制，允许管理员设置不同用户或团队对文件的读写权限，提高了安全性和权限管理。</p></li></ol><h4 id="👎缺点-1" tabindex="-1"><a class="header-anchor" href="#👎缺点-1"><span>👎缺点：</span></a></h4><ol><li><p>单点故障：由于所有文件的版本历史和变更记录保存在中央服务器上，如果该服务器出现故障或无法访问，可能会导致开发者无法提交或获取最新版本的文件。</p></li><li><p>依赖网络：使用集中式版本控制系统需要连接到中央服务器，如果网络连接不稳定或中断，开发者可能无法进行文件的提交或获取。</p></li><li><p>性能瓶颈：由于所有开发者都需要与中央服务器进行通信，当项目规模变得非常大或有大量开发者同时操作时，可能会出现性能瓶颈和网络延迟的问题。</p></li></ol><h3 id="_3-分布式版本控制" tabindex="-1"><a class="header-anchor" href="#_3-分布式版本控制"><span>3. 分布式版本控制</span></a></h3><p>所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。</p><blockquote><p>有些公司考虑使用SVN而不是git的很大一个原因是代码泄露！</p></blockquote><figure><img src="'+t+'" alt="分布式版本控制" tabindex="0" loading="lazy"><figcaption>分布式版本控制</figcaption></figure><h4 id="👍优点-2" tabindex="-1"><a class="header-anchor" href="#👍优点-2"><span>👍优点：</span></a></h4><ol><li><p>分布协作：分布式版本控制系统支持分布式开发和协作。每个开发者都可以在本地工作，无需依赖中央服务器或网络连接，从而提高了灵活性和效率。</p></li><li><p>强大的分支和合并：分布式版本控制系统具有优秀的分支和合并能力，可以轻松地创建、管理和合并分支。这使得团队可以并行开发不同的功能或修补不同的 bug，而不会影响彼此的工作。</p></li><li><p>离线工作：每个开发者都有完整的文件副本，可以在没有网络连接的情况下继续工作。开发者可以修改文件、提交版本，等到网络恢复后再与其他开发者同步。</p></li><li><p>数据备份和恢复：由于每个开发者都有完整的文件版本历史和变更记录，意外数据丢失的风险较低。一旦本地计算机出现故障，可以使用其他开发者的副本或远程存储库来恢复数据。</p></li></ol><h4 id="👎缺点-2" tabindex="-1"><a class="header-anchor" href="#👎缺点-2"><span>👎缺点：</span></a></h4><ol><li><p>复杂性：相对于集中式版本控制系统，分布式版本控制系统可能更复杂，需要更多的学习和配置。有些开发者可能需要时间适应分布式工作流程和概念。</p></li><li><p>存储空间：由于每个开发者都具有完整的文件版本历史和变更记录的副本，在大型项目和多个开发者团队中，需要更多的存储空间来存储副本和版本信息。</p></li><li><p>同步和冲突处理：在分布式团队中，开发者需要在合并分支时进行显式同步操作，以确保在合并冲突时进行适当的解决和冲突处理。</p></li></ol><hr><div class="hint-container important"><p class="hint-container-title">重要</p><p>Git与SVN最主要区别？</p></div><p>SVN是集中式版本控制系统，版本库是集中放在中央服务器的，而工作的时候，用的都是自己的电脑，所以首先要从中央服务器得到最新的版本，然后工作，完成工作后，需要拍自己做完的活推送到中央服务器，集中式版本控制系统是必须联网才能工作，对网终带宽要求较高。</p><p>Git是分布式版本控制系统，没有中央服务器，每个人的电脑就是一个完整的版本库，工作的时候不需要联网了，因为版本都在自己电脑上。协同的方法是这样的：比如说自己在电脑上改了文件A，其他人也在电脑上改了文件A,这时，你们两之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。 <mark>Git是目前世界上最先进的分布式版本控制系统</mark>。</p><hr><h1 id="聊一聊git历史" tabindex="-1"><a class="header-anchor" href="#聊一聊git历史"><span>聊一聊Git历史</span></a></h1><p>同生活中的许多伟大事物一样，Git诞生于一个极富纷争大举创新的年代。</p><p>Linux内核开源项目有着为数众广的参与者。绝大多数的Linux内核维护工作都花在了提交补丁和保存归档的繁琐事务上(1991- 2002年间)。到2002年，整个项目组开始启用一个专有的分布式版本控制系统BitKeeper来管理和维护代码。</p><p>到了2005年，开发BitKeeper的商业公司同Linux内核开源社区的合作关系结束，他们收回了Linux内核社区免费使用 BitKeeper的权力。这就迫使Linux开源社区（特别是Linux的缔造者Linus Torvalds)基于使用BitKeeper时的经验教训，开发出自己的版本系统。也就是后来的Git!</p><p>Git是目前世界上最先进的分布式版本控制系统。</p><p>Git是免费、开源的，最初Git是为辅助Linux内核开发的，来替代BitKeeper!</p><figure><img src="'+p+'" alt="Linux和Git之父李纳斯托沃兹(Linus Benedic Torvalds)1969、芬兰" tabindex="0" loading="lazy"><figcaption>Linux和Git之父李纳斯托沃兹(Linus Benedic Torvalds)1969、芬兰</figcaption></figure><hr><h1 id="git环境配置" tabindex="-1"><a class="header-anchor" href="#git环境配置"><span>Git环境配置</span></a></h1><h2 id="软件下载" tabindex="-1"><a class="header-anchor" href="#软件下载"><span>软件下载</span></a></h2><p>打开<a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git" target="_blank" rel="noopener noreferrer">Git</a>官网，下载Git对应的操作系统版本。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>下载缓慢可以找镜像，安装步骤本文章省略。 环境变量只是为了全局使用而已，Git安装时会自动配置</p></div><h2 id="启动git" tabindex="-1"><a class="header-anchor" href="#启动git"><span>启动Git</span></a></h2><p>安装成功后在开始菜单中会有Git项，菜单下有3个程序：任意文件夹下右键也可以看到对应的程序！</p><ul><li>Git Bash：Unix与Linux风格的命令行，使用最多，推荐最多</li><li>Git CMD：Windows风格的命令行</li><li>Git GUI：图形界面的Git,不建议初学者使用，尽量先熟悉常用命令</li></ul><h2 id="基本的linux命令" tabindex="-1"><a class="header-anchor" href="#基本的linux命令"><span>基本的Linux命令</span></a></h2><ul><li><code>cd 目录</code>：改变目录。通过cd..可以回退到上一个目录。</li><li><code>pwd</code>：显示当前所在的目录路径。</li><li><code>ls</code> 或 <code>ll</code>：列出当前目录中的所有文件和目录。ll 在显示内容时更为详细。</li><li><code>touch 文件</code>：创建一个新的文件。例如：touch index.js 在当前目录下创建一个名为 index.js 的文件。</li><li><code>rm 文件</code>：删除一个文件。例如：rm index.js 删除名为 index.js 的文件。</li><li><code>mkdir 目录</code>：创建一个新的目录，即新建一个文件夹。</li><li><code>rm -r 目录</code>：删除一个目录（文件夹）。例如：rm -r src 删除名为 src 的目录。</li><li><code>mv 源文件/目录 目标文件/目录</code>：移动文件或目录。也可用于重命名文件。</li><li><code>reset</code>：重新初始化终端/清屏。</li><li><code>clear</code>：清屏。</li><li><code>history</code>：查看命令历史。</li><li><code>help</code>：获取帮助。</li><li><code>exit</code>：退出终端。</li></ul><div class="hint-container caution"><p class="hint-container-title">警告</p><p>切勿在Linux中尝试 <code>rm -rf /</code> 这表示递归删除根目录，会将电脑中一切文件删除！</p></div><h2 id="git-基本配置操作" tabindex="-1"><a class="header-anchor" href="#git-基本配置操作"><span>Git 基本配置操作</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Git所有的配置文件，都保存在本地！</p></div><p>Git相关的配置文件：</p><ol><li>Git\\etc\\gitconfig：Git安装目录下的gitconfig --system系统级</li><li>C:\\sers\\Administrator\\gitconfig只适用于当前登录用户的配置 --global全局</li></ol><ul><li><code>git config -l</code> ：查看配置命令。</li><li><mark><code>git config --global user.name [name]</code>：用于设置全局的用户名。</mark></li><li><mark><code>git config --global user.email [email]</code>：用于设置全局的用户邮箱。</mark></li><li><code>git config --global core.editor [editor]</code>：用于设置默认的文本编辑器。</li><li><code>git config --list</code>：用于列出当前仓库的所有配置项。</li><li><code>git config [config_name]</code>：用于查询指定配置项的值。</li><li><code>git config --global alias.[alias_name] &#39;[command]&#39;</code>：用于创建全局的命令别名。</li><li><code>git config --local ....</code>：用于在当前仓库范围内进行配置。</li><li><code>git remote add [remote_name] [remote_url]</code>：用于添加一个远程仓库。</li><li><code>git remote -v</code>：用于查看当前仓库的所有远程仓库。</li><li><code>git branch --set-upstream-to=[remote_name]/[branch_name]</code>：用于设置当前分支与远程分支的跟踪关系。</li><li><code>git push --set-upstream origin [branch_name]</code>：用于推送当前分支到远程仓库并设置跟踪关系。</li><li><code>git checkout -- [file]</code>：用于撤销对文件的修改。</li></ul><div class="hint-container important"><p class="hint-container-title">重要</p><p>设置用户名和邮箱（用户标识，必须）</p></div><h1 id="git基本理论-核心" tabindex="-1"><a class="header-anchor" href="#git基本理论-核心"><span>Git基本理论(核心)</span></a></h1><h2 id="工作区域" tabindex="-1"><a class="header-anchor" href="#工作区域"><span>工作区域</span></a></h2><p>Git本地有三个工作区域：<mark>工作区间(Working Directory)</mark>、<mark>缓存区(Stage/Index)</mark>、<mark>资源库(Repository或Git Directory)</mark>。如果在加上远程的==git仓库(Remote Directory)==就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：</p><figure><img src="'+d+'" alt="工作区域" tabindex="0" loading="lazy"><figcaption>工作区域</figcaption></figure><ul><li>Workspace：工作区，就是你平时存放项目代码的地方</li><li>Index/Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息</li><li>Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本</li><li>Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换本地的三个区域确切的说应该是git仓库中HEAD指向的版本</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>工作区下面一般会有一个.git文件夹，默认是隐藏的，可以直接在资源管理器中，勾选隐藏的项目看到。</p></div><ul><li>Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。</li><li>WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。</li><li>.git：存放Gt管理信息的目录，初始化仓库的时候自动创建。</li><li>Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。</li><li>Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支(branch)。</li><li>Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的l临时状态</li></ul><h2 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程"><span>基本流程</span></a></h2><p>git的工作流程一般是这样的：</p><ol><li>在工作目录中添加、修改文件；</li><li>将需要进行版本管理的文件放入暂存区域；</li><li>将暂存区域的文件提交到gt仓库。</li></ol><blockquote><p>因此，git管理的文件有三种状态：已修改(modified)，已暂存(staged)，已提交(committed)</p></blockquote><figure><img src="'+r+'" alt="基本流程" tabindex="0" loading="lazy"><figcaption>基本流程</figcaption></figure><h1 id="git项目搭建" tabindex="-1"><a class="header-anchor" href="#git项目搭建"><span>Git项目搭建</span></a></h1><h2 id="创建工作目录与常用指令" tabindex="-1"><a class="header-anchor" href="#创建工作目录与常用指令"><span>创建工作目录与常用指令</span></a></h2><p>工作目录（WorkSpace)一般就是你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。 日常使用只要记住下图6个命令：</p><figure><img src="'+c+`" alt="常用指令" tabindex="0" loading="lazy"><figcaption>常用指令</figcaption></figure><h3 id="_1-本地仓库搭建" tabindex="-1"><a class="header-anchor" href="#_1-本地仓库搭建"><span>1. 本地仓库搭建</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。</p></div><ol><li>创建全新的仓库，需要用Git管理的项目的根目录执行：</li></ol><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span>$ git init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。</li></ol><h3 id="_2-克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-克隆远程仓库"><span>2. 克隆远程仓库</span></a></h3><ol><li>另一种方式是克隆远程目录，就是将远程服务器上的仓库完全镜像一份至本地</li></ol><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 克隆一个项目和它的整个代码历史（版本信息）</span></span>
<span class="line"><span>$ git clone [url]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="git文件操作" tabindex="-1"><a class="header-anchor" href="#git文件操作"><span>Git文件操作</span></a></h1><h2 id="文件4种状态" tabindex="-1"><a class="header-anchor" href="#文件4种状态"><span>文件4种状态</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。</p></div><ul><li><p><code>Untracked</code>：未跟踪，此文件在文件夹中，但并没有加入到git库，不参与版本控制。通过<mark>git add</mark>状态变为<mark>Staged</mark>。</p></li><li><p><code>Unmodify</code>：文件已经入库，未修改，即版本库中的文件快照内容与文件夹中完全一致。这种类型的文件有两种去处，如果它被修改，而变为<mark>Modified</mark>，如果使用<mark>git rm</mark>移出版本库，则成为<mark>Untracked</mark>文件。</p></li><li><p><code>Modified</code>：文件已修改，仅仅是修改，并没有进行其他的操作。这个文件也有两个去处，通过<mark>git add</mark>可进入暂存<mark>staged</mark>状态，使用<mark>git checkout</mark>则丢弃修改过，返回到<mark>unmodify</mark>状态，这个<mark>git checkout</mark>即从库中取出文件，覆盖当前修改。</p></li><li><p><code>Staged</code>：暂存状态.执行<mark>git commit</mark>则将修改同步到库中，这时库中的文件和本地文件又变为一致，文件为<mark>Unmodify</mark>状态执行<mark>git reset HEAD filename</mark>取消暂存，文件状态为<mark>Modified</mark>。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>git add .</code> 添加所有文件到暂存区； <code>git commit -m &quot;信息&quot;</code> 提交暂存区的内容到本地仓库。</p></div><h2 id="查看文件状态" tabindex="-1"><a class="header-anchor" href="#查看文件状态"><span>查看文件状态</span></a></h2><p>上面说文件有4种状态，通过如下命令可以查看到文件的状态：</p><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 查看指定文件状态</span></span>
<span class="line"><span>git status [filename]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有文件状态</span></span>
<span class="line"><span>git status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件"><span>忽略文件</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>前端项目中 node_modules 不需要提交，会被自动忽略！</p></div><p>有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等 在主目录下建立&quot;.gitignore&#39;&quot;文件，此文件有如下规则：</p><ol><li><p>忽略文件中的空行或以井号<code>#</code>开始的行将会被忽略。</p></li><li><p>可以使用Linux通配符。例如:</p><ul><li><code>*</code>代表任意多个字符</li><li>问号<code>?</code>代表一个字符</li><li>方括号<code>[ ]</code>代表可选字符范围</li><li>大括号<code>{string1,string2,}</code>代表可选的字符串等。</li></ul></li><li><p>如果名称的<mark>最前面</mark>有一个感叹号<code>!</code>，表示例外规则，将不被忽略。</p></li><li><p>如果名称的<mark>最前面</mark>是一个路径分隔符<code>/</code>，表示要忍略的文件在此目录下，而子目录中的文件不忽略。</p></li><li><p>如果名称的<mark>最后面</mark>是一个路径分隔符<code>/</code>，表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。</p></li></ol><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#为注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#忽略所有.tXt结尾的文件,这样的话上传就不会被选中！</span></span>
<span class="line"><span>*txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#但1b.txt除外</span></span>
<span class="line"><span>!lib.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#仅忽略项目根目录下的ToDo文件，不包括其它目录temp</span></span>
<span class="line"><span>/temp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#忽略bui1d/目录下的所有文件</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#会忽略doc/notes.txt但不包括doc/server/arch.txt</span></span>
<span class="line"><span>doc/*.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用码云" tabindex="-1"><a class="header-anchor" href="#使用码云"><span>使用码云</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>GitHub有墙，国内一般用Gitee，公司中有时候会搭建自己的gitlab服务器。 GitHub和Gitee上面的个人信息和项目可以作为自己的面试门面。</p></div><ol><li>注册登录码云，完善个人信息</li><li>设置本机绑定SSH公钥，实现免密码登录！（免去每次push时都要输入密码）</li></ol><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#进入C:\\Users\\Administrator\\.ssh目录</span></span>
<span class="line"><span>#生成公钥</span></span>
<span class="line"><span>ssh-keygen -t rsa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>如果找不到目录，直接右键git push 输入ssh-keygen 一直回车即可 会自动创建.ssh目录。</li><li>.ssh目录下有两个文件，分别是：id_rsa 、id_rsa.pub。以pub结尾表示公共的。</li></ul></div><ol start="3"><li><p>将公钥信息public key添加到码云账户中即可！</p><ul><li>在gitee中点击个人头像，进入主页。</li><li>再点击头像下方点击个人设置，选择SSH公钥。</li><li>通过编译器打开<code>id_rsa.pub</code>，复制其中的密钥，粘贴到网页右侧的公钥处。</li><li>最后确定。</li></ul></li><li><p>使用码云创建一个自己的仓库！</p></li></ol><ul><li>头像右侧加号点击添加仓库。</li></ul><div class="hint-container important"><p class="hint-container-title">重要</p><p>关于开源许可证可以了解一下，这是对自己权益的一份维护和对自己成果的保护。gitee对每一类许可证都有详细说明。</p></div><h1 id="idea中集成git" tabindex="-1"><a class="header-anchor" href="#idea中集成git"><span>IDEA中集成Git</span></a></h1><ol><li><p>新建项目，绑定git</p><ul><li>将我们的远程平台文件拷贝到IDEA创建的目录下就行。</li></ul></li><li><p>修改文件，使用IDEA操作git</p></li><li><p>提交测试</p></li></ol><h1 id="git分支说明" tabindex="-1"><a class="header-anchor" href="#git分支说明"><span>Git分支说明</span></a></h1><div class="hint-container important"><p class="hint-container-title">重要</p><p>分支在Git中相对较难，分支就是科幻电影里面的平行宇宙，如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，我们就需要处理一些问题了！</p></div><p>git分支中常用指令：</p><div class="language-git line-numbers-mode" data-highlighter="shiki" data-ext="git" data-title="git" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 列出所有本地分支</span></span>
<span class="line"><span>git branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 列出所有远程分支</span></span>
<span class="line"><span>git branch -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span>git branch [branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span>git checkout -b [branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并指定分支到当前分支</span></span>
<span class="line"><span>$ git merge [branch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除分支</span></span>
<span class="line"><span>$ git branch -d[branch-name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除远程分支</span></span>
<span class="line"><span>$ git push origin --delete [branch-name]</span></span>
<span class="line"><span>$ git branch -dr [remote/branch]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>多个分支如果并行执行，我们代码不会冲突，也就是同时存在多个版本！</p><ul><li>web-api A</li><li>web-admin B</li><li>web-app C</li></ul></div><ul><li><p>如果同一个文件在合并分支时都被修改了则会引起冲突：解决的办法是我们可以修改冲突文件后重新提交！</p></li><li><p>master主分支应该非常稳定，用来发布新版本，一般情况下不允许在上面工作，工作一般情况下在新建的dev分支上工作，工作完后，比如要发布，或者说dev分支代码稳定后可以合并到主分支master上来。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在GitHub上，使用main分支和master分支是常见的实践，但受BLM运动影响，一些人认为使用master分支可能存在种族主义的隐喻。 <strong>为了避免任何可能的歧义</strong>，GitHub决定将默认分支名称从master改为main。</p></div>`,116),g=[h];function m(u,b){return a(),e("div",null,g)}const k=i(o,[["render",m],["__file","Git快速了解.html.vue"]]),f=JSON.parse('{"path":"/quick-learn/Git%E5%BF%AB%E9%80%9F%E4%BA%86%E8%A7%A3.html","title":"Git快速了解","lang":"zh-CN","frontmatter":{"title":"Git快速了解","icon":"code-branch","date":"2024-07-27T00:00:00.000Z","category":"知识快学","tags":["Git"],"cover":"/assets/images/Git快速了解.jpg","excerpt":"本篇文章是一份关于Git版本控制系统的快速入门指南，涵盖了Git的基本概念、工作流程、常用命令和配置，以及如何使用Git进行版本控制和多人协作开发。","description":"提示 本篇文章学习自B站狂神说Git. 在了解git之前我们要先了解版本控制 版本控制 重要 什么是版本控制？ 版本控制是一种管理代码或文件变更的系统，用于跟踪文件和文档的修改、恢复以及管理分支和合并等操作。它可以追踪文件的修改、创建和删除，并记录每一次变更的详细信息，包括谁做出了修改、何时做出的修改以及具体修改了什么内容。 版本控制系统的主要目标是提...","head":[["meta",{"property":"og:url","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/quick-learn/Git%E5%BF%AB%E9%80%9F%E4%BA%86%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"哒哒的花园"}],["meta",{"property":"og:title","content":"Git快速了解"}],["meta",{"property":"og:description","content":"提示 本篇文章学习自B站狂神说Git. 在了解git之前我们要先了解版本控制 版本控制 重要 什么是版本控制？ 版本控制是一种管理代码或文件变更的系统，用于跟踪文件和文档的修改、恢复以及管理分支和合并等操作。它可以追踪文件的修改、创建和删除，并记录每一次变更的详细信息，包括谁做出了修改、何时做出的修改以及具体修改了什么内容。 版本控制系统的主要目标是提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Git快速了解.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-28T06:28:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Git快速了解.jpg"}],["meta",{"name":"twitter:image:alt","content":"Git快速了解"}],["meta",{"property":"article:author","content":"哒哒溜"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:published_time","content":"2024-07-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-28T06:28:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git快速了解\\",\\"image\\":[\\"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Git快速了解.jpg\\"],\\"datePublished\\":\\"2024-07-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-28T06:28:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哒哒溜\\",\\"url\\":\\"https://github.com/matike16\\"}]}"]]},"headers":[{"level":2,"title":"常见的版本控制工具","slug":"常见的版本控制工具","link":"#常见的版本控制工具","children":[]},{"level":2,"title":"版本控制分类","slug":"版本控制分类","link":"#版本控制分类","children":[{"level":3,"title":"1. 本地版本控制","slug":"_1-本地版本控制","link":"#_1-本地版本控制","children":[]},{"level":3,"title":"2. 集中版本控制","slug":"_2-集中版本控制","link":"#_2-集中版本控制","children":[]},{"level":3,"title":"3. 分布式版本控制","slug":"_3-分布式版本控制","link":"#_3-分布式版本控制","children":[]}]},{"level":2,"title":"软件下载","slug":"软件下载","link":"#软件下载","children":[]},{"level":2,"title":"启动Git","slug":"启动git","link":"#启动git","children":[]},{"level":2,"title":"基本的Linux命令","slug":"基本的linux命令","link":"#基本的linux命令","children":[]},{"level":2,"title":"Git 基本配置操作","slug":"git-基本配置操作","link":"#git-基本配置操作","children":[]},{"level":2,"title":"工作区域","slug":"工作区域","link":"#工作区域","children":[]},{"level":2,"title":"基本流程","slug":"基本流程","link":"#基本流程","children":[]},{"level":2,"title":"创建工作目录与常用指令","slug":"创建工作目录与常用指令","link":"#创建工作目录与常用指令","children":[{"level":3,"title":"1. 本地仓库搭建","slug":"_1-本地仓库搭建","link":"#_1-本地仓库搭建","children":[]},{"level":3,"title":"2. 克隆远程仓库","slug":"_2-克隆远程仓库","link":"#_2-克隆远程仓库","children":[]}]},{"level":2,"title":"文件4种状态","slug":"文件4种状态","link":"#文件4种状态","children":[]},{"level":2,"title":"查看文件状态","slug":"查看文件状态","link":"#查看文件状态","children":[]},{"level":2,"title":"忽略文件","slug":"忽略文件","link":"#忽略文件","children":[]}],"git":{"createdTime":1722139515000,"updatedTime":1722148114000,"contributors":[{"name":"matike16","email":"lda240820@gmail.com","commits":2}]},"readingTime":{"minutes":18.96,"words":5689},"filePathRelative":"quick-learn/Git快速了解.md","localizedDate":"2024年7月27日","autoDesc":true}');export{k as comp,f as data};

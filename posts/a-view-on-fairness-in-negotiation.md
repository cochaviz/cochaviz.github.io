---
title: Fairness by Discussion
metaTitle: Fairness by Discussion
metaDescription: 
  A non-computational approach to Fairness in the context of
  negotiations. My Bachelor's thesis.

abstract: The field of automated negotiation promises to improve negotiations,
  thus, a fair outcome and process should also be considered when building these systems.
  However, issues exist with computational approaches to fairness
  with which the field of computer science is mainly concerned. To this end, we
  propose a new approach to fairness based on that of essentially contested
  concepts to see if argumentation-based negotiation could be used as an
  extension to the Stacked Alternating Offers Protocol to improve fairness.
  Looking at fairness as an essentially contested concept shows that discussion between
  people somehow influenced by the negotiation system is necessary to maintain its
  fairness. This in turn means that systems that provide accessible context are
  fairer than systems that would not do so. Thus arguments, if implemented
  in an accessible manner, add more context to the negotiation, in turn
  making an SAOP negotiation fairer.


author: Zohar Cochavi
date: '2022-07-02'
tags:
  - thesis (bsc)
---

## Introduction

Fairness in computation, especially machine learning is a topic that has
gotten increasing attention, and with good reason. COMPAS was a
statistical tool that aided some U.S. states in determining how likely
an individual was to recommit a crime. The tool, however, could display
significant racial bias towards black individuals further reinforcing
bias in human decision-making (“Fairness in Machine Learning” 2020).

Another field trying to augment human decision-making using computation
is that of automated negotiation. It promises to improve the outcome,
and process of negotiations by assisting humans or replacing them
altogether (Baarslag et al. 2017). To be clear, there have not been such
drastic fairness-related harms in automated negotiation, but that does
not mean there never will be. Especially since machine learning tools
are also being used to improve the performance of these negotiating
agents (the computer program negotiating on behalf of a party) in, for
example, opponent modeling[^1] (He et al. 2016).

This raises the question: Would there be a way in which we could improve
the fairness of automated negotiations? The question in and of itself is
too broad and has to be scoped down in order to be meaningfully
answered. Starting with fairness and the eternal discussion regarding
the subject.

### Fairness is Hard

Giving a single good definition of fairness is in no way trivial.
Something Gallie (1955) also observed. In his research, he coined the
term of an _essentially contested concept_, which tries to answer the
questions of why some concepts are to hard to define in a general
context.

Fairness being an essentially contested concept could imply that on some
topics there cannot be a single agreed definition. If that is the case,
perhaps creating a system in which definitions are more easily
investigated and adapted could be considered fairer.

The relevance of an essentially contested concept is further emphasized
by the history of fairness in philosophy. Simply look at the number of
opinions on fairness, or most any topic, all taking vastly different
angles in an attempt to define the concept (Rawls 1973; Wolff 1998).

Even though there is discussion around fairness in computer science, the
discussion does not seem to be as diverse as in philosophy. In a lot of
research, similar approaches are taken and mostly based on computational
or statistical approaches to fairness (Cerbone 2021; Jacobs and Wallach
2021).

Although using computational approaches to the topic makes sense in the
context of computer science, some researchers have raised concerns about
computational approaches to fairness (Jacobs and Wallach 2021). This
further motivates the need for a different approach to fairness in
computation and thus automated negotiations.

### On Negotiation

One way in which we could influence the fairness of negotiations is by
establishing certain rules one has to follow during the negotiation. The
set of rules followed during a negotiation is called a _negotiation
protocol_.

One example of such a protocol is _SAOP_ or the _Stacked Alternating
Offers Protocol_ (Aydoğan et al. 2017). In this protocol parties present
proposals in an alternating fashion, with one party initiating the
process. At each proposal, the other party (or parties) can choose to
accept the offer, or propose a counter-offer , to which the other party
can respond again by accepting or proposing a counter-offer, etc. This
protocol is one of the most basic ones, pay attention next time you
haggle for a new car at the dealer, most probably you will follow the
rules of SAOP.

If you decide to rely on a seller's empathy by arguing that you really
cannot afford that price, you are employing an _Argumentation Based
Negotiation_ protocol or _ABN_ protocol. While not technically a
complete protocol, allowing the usage of arguments is part of a
protocol[^2]. In these types of negotiations, a party is allowed to
provide reasoning behind their proposal in order to inform, or possibly
manipulate, an adversary (Rahwan et al. 2004).

These kinds of negotiations are interesting because they contain more
information about the motivations of a party than SAOP. Especially in
the context of automated negotiations as we will be able to see why an
agent makes certain decisions (Rahwan et al. 2004). Furthermore, they
can be mathematically proven to be able to allow parties to reach a more
satisfying agreement more quickly (Jennings et al. (2001), p.205).

Of course, more properties of negotiations exist. Another elementary
example is direct negotiation between two individuals, called a
_bilateral negotiation_. This differs from, for example, the negotiation
method used when buying a house where a real estate agent acts as a
_mediator_ through which the parties bid. In addition to these two,
there is a more 'general' type of negotiation, namely a _multilateral_
negotiation. Simply said, this type of negotiation is one in which more
than two parties are involved.

### Outline

Given that the usage of arguments provides a great advantage, it is
interesting to investigate if it could be considered as an extension to
SAOP to improve fairness. The simplicity of SAOP makes it a good
candidate for determining how much fairer a negotiation would be _with_
arguments instead of _without_ since we will be able to focus solely on
the impact arguments have on the fairness of a negotiation.

To this end, we consider the fairness of SAOP and that of ABN in the
context of fairness as an essentially contested concept. In short, with
this definition, we will be able to consider fairness for automated
negotiations without having to solely rely on computations. We thus take
a different angle at the problem than other approaches in computer
science (Pessach and Shmueli 2020; Cerbone 2021; Dwork et al. 2011),
allowing us to resolve concerns some researchers have raised about such
approaches (Jacobs and Wallach 2021; DeBrusk 2018).

Because of its importance, we will start with a larger discussion on
fairness in <span class="spurious-link"
target="Fairness by Discussion">_Fairness by Discussion_</span> in which
we will cover how we define fairness and why. After that we consider the
impact arguments would have on the fairness of SAOP in
<span class="spurious-link"
target="Accessible Argumentation Drives Discussion">_Accessible
Argumentation Drives Discussion_</span>. We discuss some topics for
future study or discussion in <span class="spurious-link"
target="Other Remarks">_Other Remarks_</span> and conclude the argument
in <span class="spurious-link" target="A Promising Argument">_A
Promising Argument_</span>.

## Fairness by Discussion

To assess the protocols in terms of _fairness_, the term has to be
properly defined. In this section, we will briefly explore current ideas
on fairness in computer science and philosophy in
<span class="spurious-link" target="A Brief History of Fairness">_A
Brief History of Fairness_</span>. Following that, we will further
explain what an essentially contested concept is and why \[\[Fairness is
Essentially Contested\]\[Fairness is Essentially Contested\]\]. We then
argue why discussion is necessary for an essentially contested concept
in <span class="spurious-link"
target="The Necessity of Open Discussion">_The Necessity of Open
Discussion_</span>, reflect back on what that means for fairness in
<span class="spurious-link" target="Back to Computation">_Back to
Computation_</span>, and summarize our findings in
<span class="spurious-link" target="Putting it Together">_Putting it
Together_</span>.

### A Brief History of Fairness

Plenty of work exists on fairness in philosophy. One example is that of
Wolff, who considers fairness as follows:

> Fairness is the demand that no one should be advantaged or
> disadvantaged by arbitrary factors. (Wolff (1998), p.106)

The question then becomes, what is an _arbitrary factor_? and what does
it mean to gain an advantage (or disadvantage) over someone else? While
these questions have been answered in numerous ways within the realm of
philosophy (Wolff 1998; Cerbone 2021; Rawls 1973), computer science is
rather homogeneous in its opinion of fairness. Most popular answers fall
somewhere in between a _Rawlsian_ and _egalitarian_ view of the
distribution of goods or services (Pessach and Shmueli 2020; Cerbone
2021).

There has been a growing amount of research into resolving these issues
related to computational fairness, mainly through the awareness of bias,
both in systems and culture (DeBrusk 2018; Pessach and Shmueli 2020).
This gives researchers and policymakers great tools to determine where
'unfairness' could originate from but does not solve the question of
what explicitly would be unfair.

Good reasons do exist for computer science to use the definitions of
fairness it does now. As an example, in Dwork et al. (2011) the
definition of fairness is a statistical model of 'similar individuals
should be treated similarly'; similar distributions should have similar
mappings. Maximizing fairness is then a matter of minimizing the
distance between the distributions after the mapping. These models are
relatively easy to implement, quantifiable, and therefore easier to
analyze than more 'typical' philosophical descriptions of fairness (the
theories that take 20 pages to explain, and 20 years to understand).

Problems, however, exist with 'computable' approaches to fairness. There
is a potential for some significant fairness-related harms that come
with computational systems, as mentioned by Jacobs and Wallach (2021).
They argue that fairness cannot be computed without essentially
simplifying some parts of it. In turn, leading to possibly unfair
scenarios because of simplifications that might be justifiable in all
scenarios in which the model is used.

Of course, this does not imply that no good definition of fairness
exists in certain contexts, but it does go to show how contested the
topic is. Current computational approaches to fairness seem to do
exactly as described; they somehow try to compute fairness. Which is the
cause of the problems mentioned by Jacobs and Wallach (2021) and Kuhn
(1996).

Having a definition that is independent of computation could therefore
be a good contributor to the discussion. This brings us back to the
essentially contested nature of fairness and how it relates to
discussions.

### Fairness is Essentially Contested

We have previously given an informal definition of an essentially
contested concept, but the definition is more exact and has important
implications for our discussion. Formally, Gallie (1955) states four
conditions a concept should satisfy to be considered essentially
contested:

1. It must be appraisive in the sense that it signifies or accredits
   some kind of valued achievement (Gallie (1955), p.171).
2. This achievement must be of an internally complex character, for all
   that its worth attributed to it as a whole (Gallie (1955), p.171).
3. Any explanation of its worth must therefore include reference to the
   respective contributions of its various parts or feature (Gallie
   (1955), p.172).
4. The accredited achievement must be of a kind that admits of
   considerable modification in the light of changing circumstances;
   and such modification cannot be prescribed or predicted in advance
   (Gallie (1955), p.172).

In short, it is a concept that should (1) signify value, (2) be
multidimensional, i.e. there are multiple factors that all contribute to
something being regarded as the concept, (3) it can only be _properly_
defined in context (the definition must therefore refer to its
contributions), and (4) be time-dependent. It is a concept that is
considered valuable/important, but its definition is volatile concerning
context.

\(1\) Fairness is a valuable feature, there has been a lot of research
in _trying_ to improve fairness in systems (computational as well as
organizational), as covered in the previous section. You will rarely
hear someone talk about trying to minimize the fairness of a system
unless they are in a particularly sadistic mood.

\(2\) Often, fairness does depend on more than one factor at once. Take
again the definition of fairness in terms of 'arbitrary factors' which,
quite literally, depends on (the lack of) multiple factors. A less
obvious example would be that of _Rawlsian_ fairness which depends on an
individual being able to be ignorant of his position in society (Rawls 1973) to form a fair judgment. This depends on an individual being able
to be ignorant to extend that one is not able to 'see' their position in
society, but not to such so far such that they are not aware of any
other's position in said society, and it depends on those individuals
being 'rational' and 'free persons' (Rawls (1973), p.11), etc.

\(3\) Furthermore, fairness is only well-defined within context. It is
not hard to think of counterexamples of any type of fairness if the
context in which it does hold is not part of the definition. Take for
example _egalitarianism_, which is the belief that resources should be
shared equally[^3] (Wolff 1998). But what if the individuals do not put
in the same amount of work to collect those resources? The definition
should therefore be: Resources will be shared equally among those who
put in a similar amount of work[^4]. If the context is not well-defined,
the definition will be incomplete.

\(4\) Furthermore, it is hard to predict what people will find fair in
the future. Take, for example, capital punishment. While prevalent
throughout European history, most countries have now abolished the
practice and no longer consider it a fair form of punishment (Neumayer
2008).

Naturally, the theories presented here are slightly cherrypicked to
prove my point. These are, however, definitely not the only ones and
plenty more examples can be given.

### The Necessity of Open Discussion

Assuming that fairness is an essentially contested concept, we can
explore the relation between essentially contested concepts[^5] and
discussions. This relation will show how arguments could contribute to a
more fair system.

The lack of a discussion about any concept could indicate a couple of
things: (I) either an agreement, (II) an 'agreement on disagreeing', or
simply (III) not realizing that there is a disagreement. We will go
through each scenario, arguing why it would imply that discussion is
eventually necessary if that concept is essentially contested.

\(I\) If there is an actual agreement, it means some definition is
accepted. Considering that points (3) and (4) infer exactly that there
is no single definition (since it is so sensitive to context) for an
essentially contested concept, this implies that a discussion is
necessary for an essentially contested concept[^6]. Both because of the
simple passage of time that implies that the definition changes (4), and
because different people have different backgrounds, i.e. different
contexts in which they think about fairness.

\(II\) Secondly, the moment two parties decide not to discuss the topic,
it does not mean that the discussion will never arise. We can argue that
because of the valuable nature of an essentially contested concept (1),
people will have to argue about it at some point. This will, however,
only be the case if the subject is valuable enough.

Fairness could be considered valuable enough to eventually give rise to
discussions. If one feels like they are being treated in unfairly, and
the situation is _open_, most anyone will say that they do not agree.
Here, open, refers to a situation in which if an individual were to
voice their opinion on fairness they know that their context will be
'added' to the definition of fairness. This means that more open
discussions contain more context, and therefore fairer, definition of
fairness.

\(III\) In the last case, since the concept is regarded as valued (1),
we can again assume that, even if parties have not yet voiced their
opinions, they will at some point do so. Thus concluding that discussion
is indeed necessary for fairness as an essentially contested concept.

On the other hand, what happens if an individual cannot take part in the
discussion? If individuals that are influenced by the given definition
of a concept cannot contribute to the definition, i.e. their context is
not part of the definition of fairness, they are essentially subject to
an incomplete definition of fairness (3). Having to 'use' an incomplete
definition of fairness is considered unfair from the perspective of the
individual whose context is missing.

Inhibiting discussion, or somehow inhibiting stakeholders from actively
participating in that discussion (by for example not having an open
situation), would therefore be unfair. Making a discussion more open
would improve the fairness of a system or situation.

### Back to Computation

We can extend this idea to computer science and its definition on
fairness. Considering the premise that computer science has a rather
homogeneous opinion on fairness, the field could indeed be better off
having more people that can contribute to the definitions of fairness in
computational systems. We will avoid a larger topic on the other end of
the discussion (having individuals not be part of the discussion might
sometimes be a good thing)[^7] since it does not apply to the current
scenario.

This does depend on the openness of a system. Indeed, plenty of sources
talk about the necessity of 'open systems' of computation and the
different risks that a lack of transparency brings to complex systems
such as automated negotiation, especially when machine learning is
involved (Hagras (2018), p.29).

Furthermore, if fairness is regarded as something that can only be
well-defined in one context, how can we justifiably implement one
definition in a system? Even if, hypothetically, that definition would
fit in the context of that particular system and all of its
stakeholders, the aforementioned definition would change over time (4).
This means that as the implementation ages, the context necessary for
the definition to be considered fair is missing.

Mitigating the issues with this scenario would require constant
maintenance on behalf of the developers, and be sure that the system
will _never_ be used outside of its intended context. Humans are
notoriously bad at _not doing_ certain things when they are told to.

### Putting it Together

Having reached the end of our philosophical rabbit hole, we can start
putting things together.

The usage of fairness in computer science is rather homogeneous, which
is not a problem per sé, but these definitions all rely on computational
approaches to fairness. Multiple sources mention a problem with
approaching certain problems, including fairness, in a computational
matter, suggesting that there could be a better way of defining
fairness.

To this end, we consider fairness as an essentially contested concept.
It tells us that fairness is a valuable attribute that is so
context-sensitive that a general definition is practically impossible to
establish, and that any definition will only hold within the given
context.

Looking at fairness from this perspective implies that discussion is
necessary to call a system fair. Inhibiting discussion about, or
excluding individuals that are somehow affected by the system is
therefore considered unfair, and the more open the discussion regarding
a given definition of fairness, the fairer the definition.

## Accessible Argumentation Drives Discussion

Choosing to extend SAOP with ABN essentially means that, besides just
proposals, arguments will are included in the negotiation. This can be
done in a variety of ways: at every counter-offer, only when a party
'feels like it', etc. While the concrete usage of arguments could
definitely have an effect on the fairness, we will not concern ourselves
with this matter in depth.

Before being able to discuss the advantages and disadvantages of
different implementations, we first have to assess if arguments even
contribute to fairness at all. Therefore, we will now limit ourselves to
the general case of how arguments contribute to fairness. In the last
section, we will briefly return to the point of implementation.

### A Machine's Motivations

Having arguments included in a negotiation has numerous advantages.
Certain advantages, however, are certainly more 'absolute' than others,
which might depend on context if they could be considered advantages.

Furthermore, this information provides insight into the machine's
motivations. It gives people the opportunity to reason _with_ the
machine, instead of about it. Reasoning about the machine requires
knowledge of its inner workings, in turn requiring background knowledge.
This limits the number of stakeholders being able to participate in a
discussion regarding the system.

Reasoning _with_ the machine, however, is possible because the agent
shows the reasoning behind its actions. If the machine can explain
themselves about the current issue (e.g. their opinion on the state of
the negotiation, and their wishes regarding its outcome), this allows a
stakeholder _regardless of their background_ to have an opinion on the
_fairness of the process_[^8]. Thereby increasing the 'openness' of the
discussion regarding the system.

The process of how a computational system arrives at a conclusion
contributes a lot more to the discussion since it provides more context.
As previously discussed, this context is at the heart of an essentially
contested concept and therefore necessary for healthy discussion. This
allows stakeholders to have a more contextualized opinion (i.e. an
opinion that contains contributions relevant to their definition of
fairness (3)) on the fairness of the system.

Therefore the inclusion of arguments would provide a certain
contextualization of the given arguments which would, given the
importance of context for fairness, improve the fairness of SAOP.

### The Necessity of Accessible Arguments

An important assumption was the 'layman' being able to understand the
arguments of the machine. While this seems natural, it is definitely not
a given.

It should not be necessary to have a computer science degree to
understand that an agent took advantage of an adversary's poor position
in a negotiation. Whether the action of the agent is fair or not is
unimportant. It is about a non-expert having the ability to have an
opinion on the matter that is relevant within the context of the
negotiation.

This accessibility is a requirement because most stakeholders will not
be experts[^9]. Accessibility here refers to a non-expert being able to
understand and access the arguments that are given. A person simply
using the negotiating agent should be able to access the argumentation
history of the negotiation and understand it as if two humans were
conversing with each other.

Therefore, if non-experts cannot understand or access the arguments
given by the agents, the inclusion of arguments does not improve
fairness from the perspective of essentially contested concepts. They do
not provide the context which would otherwise improve a person's opinion
on the fairness of the system, and neither improve the 'openness' of the
discussion as it is would be about as useful as looking through the
source code.

### A Different Perspective

While non-accessible arguments might not improve fairness from the
perspective of essentially contested concepts, there are other
advantages to using arguments. Jennings et al. (2001) mention that it
can be mathematically proven that negotiations containing arguments
converge to a more satisfactory agreement in less time. This does not
directly impact the _fairness_ of the system, but it does seem more
respectful towards its stakeholders to consider a system that saves them
both time and 'wasted' utility[^10].

Furthermore, Wolff (1998) considers fairness to, in some cases, be
inferior to respect. He proposes a solution to the issue raised before
about egalitarianism and people who do not contribute as much to the
gathering of certain resources compared to others (i.e. lazy people) by
saying that this is 'disrespectful'.

In that case, even if the arguments are not accessible, ABN could be
considered to be 'fairer' than their non-argumentation-based
counterparts.

### There is no such Thing as Free Lunch

These advantages, however, are not without cost. There is an argument to
be made that having a more complex system makes it _less accessible_ to
the layman. Considering this, would a simpler system not be fairer if
more people can be more easily informed?

The costs of creating such a system are significant. Not only is the
human required to understand it, but, if we want a truly
argumentation-_based_ negotiation, the opposing agent also has to be
able to parse and use these arguments. Doing this will require the
adversary agent to use natural language processing to parse the passed
arguments.

Even if the negotiation is not truly negotiation-based and the arguments
are only provided to improve fairness (as an essentially contested
concept), these arguments still have to be created which is nowhere near
trivial (as alluded to before[^11]).

While we will not discuss the feasibility, it is worth noting that it
adds significant complexity over standard SAOP. Although not directly
impacting the fairness of the decisions and process of the system, it
does limit the number of individuals that will be able to implement such
a system which in turn could raise several ethical considerations.

## Other Remarks

While I have tried to make this discussion as complete as possible, some
topics have been left undiscussed. Here, we will briefly touch upon
these topics before moving to the conclusion. This is definitely not an
exhaustive list, but they are among the most important ones to consider
for future study.

The primary focus has been on _if_ arguments could improve fairness in
SAOP, not by how much. In the last section we have briefly touched upon
this, but the practical potential of this kind of application of
arguments heavily depends on how the feasibility compares to the actual
improvement of fairness. This would, however, require quantifying
fairness which would depend on a computational approach to fairness. As
mentioned before, computational approaches to fairness have great
advantages. Combining the two might prove especially effective.

Furthermore, while we have tried to argue that discussion is necessary
for all essentially contested concepts, we were only successful in doing
so for fairness. The assumption was that fairness is valuable enough
that people will voice their opinion if the situation allows it (which
is a big if in some environments), but this is hard to say for all
essentially contested concepts.

Another undiscussed topic is that of liars, specifically, an agent lying
in an argument. Lying in this case could either refer to making up
arguments to manipulate and gain a 'crafted' advantage over an adversary
or by manipulating the individual reading the arguments to construct an
opinion on the fairness of the negotiation. This could have an impact on
the fairness of the negotiation, but, if a deceptive agent is caught the
backlash would be great if the discussion is open enough (assuming most
stakeholders do not like being deceived).

## A Promising Argument

Systems are going to get more complex, which is unavoidable as our
hunger for technological advancement is insatiable. Machine learning and
other AI techniques are already being used in automated negotiation in
for example opponent modeling[^12] (He et al. 2016). These computational
models can and have caused significant fairness-related harms (DeBrusk
2018; Jacobs and Wallach 2021; “Fairness in Machine Learning” 2020). It
is therefore important we avoid similar situations arising in automated
negotiations.

If implemented in an accessible way (that is, in a way that non-experts
can access and understand), the inclusion of arguments could provide a
way to make these systems more understandable. This would mean that
stakeholders can create a definition of fairness for themselves with
more context, and it would make it easier to participate in the
discussions regarding the system.

This improves fairness because we have considered open discussion
necessary for a fair system; the more open a discussion and the more
information available about a system (since this provides more context),
the fairer it is. The necessity of an open discussion follows from the
fact that we consider fairness to be an essentially contested concept.
Being essentially contested means that the definition of a valued
concept only makes sense within the context in which it is defined.
Failing to include the context in its definition will lead to an
incomplete (and in our case unfair) definition.

Especially where some suggest that computational approaches to fairness
seem to cause problems (Tang and Ito 2018; Jacobs and Wallach 2021),
this approach to fairness could provide a promising argument for the use
of arguments in SAOP.

## Responsible Research

Having written this argument for a more accessible and open type of
negotiation protocol, my hope is that this document can have a positive
effect on the fairness and trustworthiness of these systems and the
people influenced by it.

Since this document is specifically an analysis about fairness and how
to improve it, I will not cover the ethical implications of defining
fairness as such, seeing as it has been extensively covered throughout.

It is also appropriate to mention that most assumptions have been based
on prior research which has been properly referenced and mentioned where
appropriate. Equally, factual statements all refer to their respective
sources. Wherever this is not the case, it has been indicated that this
is my own opinion, assumption, or intuition.

## References

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-aydoganAlternatingOffersProtocols2017" class="csl-entry">

Aydoğan, Reyhan, David Festen, Koen V. Hindriks, and Catholijn M.
Jonker. 2017. “Alternating Offers Protocols for Multilateral
Negotiation.” In _Modern Approaches to <span class="nocase">Agent-based
Complex Automated Negotiation</span>_, edited by Katsuhide Fujita, Quan
Bai, Takayuki Ito, Minjie Zhang, Fenghui Ren, Reyhan Aydoğan, and Rafik
Hadfi, 153–67. Studies in Computational Intelligence. Cham: Springer
International Publishing.
<https://doi.org/10.1007/978-3-319-51563-2_10>.

</div>

<div id="ref-baarslagWhenWillNegotiation2017" class="csl-entry">

Baarslag, Tim, Michael Kaisers, Enrico H. Gerding, Catholijn M. Jonker,
and Jonathan Gratch. 2017. “When Will Negotiation Agents Be Able to
Represent Us? The Challenges and Opportunities for Autonomous
Negotiators.” _2017_, 4684–90.
<https://doi.org/10.24963/ijcai.2017/653>.

</div>

<div id="ref-carmelOpponentModelingMultiagent1996" class="csl-entry">

Carmel, David, and Shaul Markovitch. 1996. “Opponent Modeling in
Multi-Agent Systems.” In _Adaption and Learning in Multi-Agent Systems_,
edited by Gerhard Weiß and Sandip Sen, 40–52. Lecture Notes in Computer
Science. Berlin, Heidelberg: Springer.
<https://doi.org/10.1007/3-540-60923-7_18>.

</div>

<div id="ref-cerboneProvidingPhilosophicalCritique2021"
class="csl-entry">

Cerbone, Henry. 2021. “Providing a Philosophical Critique and Guidance
of Fairness Metrics.” _arXiv:2111.04417 \[Cs\]_, October.
<https://doi.org/10.48550/arXiv.2111.04417>.

</div>

<div id="ref-debruskRiskMachineLearningBias2018" class="csl-entry">

DeBrusk, Chris. 2018. “The Risk of Machine-Learning Bias (and How to
Prevent It).” _MIT Sloan Management Review_, March.
<https://sloanreview.mit.edu/article/the-risk-of-machine-learning-bias-and-how-to-prevent-it/>.

</div>

<div id="ref-dworkFairnessAwareness2011" class="csl-entry">

Dwork, Cynthia, Moritz Hardt, Toniann Pitassi, Omer Reingold, and Rich
Zemel. 2011. “Fairness Through Awareness.” _arXiv:1104.3913 \[Cs\]_,
November. <http://arxiv.org/abs/1104.3913>.

</div>

<div id="ref-FairnessMachineLearning2020" class="csl-entry">

“Fairness in Machine Learning.” 2020. _Science in the News_.
<https://sitn.hms.harvard.edu/uncategorized/2020/fairness-machine-learning/>.

</div>

<div id="ref-gallieEssentiallyContestedConcepts1955" class="csl-entry">

Gallie, W. B. 1955. “Essentially Contested Concepts.” _Proceedings of
the Aristotelian Society_ 56: 167–98.
<http://www.jstor.org/stable/4544562>.

</div>

<div id="ref-hagrasHumanUnderstandableExplainableAI2018"
class="csl-entry">

Hagras, Hani. 2018. “Toward Human-Understandable, Explainable AI.”
_Computer_ 51 (9): 28–36. <https://doi.org/10.1109/MC.2018.3620965>.

</div>

<div id="ref-heOpponentModelingDeep2016" class="csl-entry">

He, He, Jordan Boyd-Graber, Kevin Kwok, and I. I. I. Hal Daumé. 2016.
“Opponent Modeling in Deep Reinforcement Learning.” In _Proceedings of
The 33rd International Conference on Machine Learning_, 1804–13. PMLR.
<https://proceedings.mlr.press/v48/he16.html>.

</div>

<div id="ref-jacobsMeasurementFairness2021a" class="csl-entry">

Jacobs, Abigail Z., and Hanna Wallach. 2021. “Measurement and Fairness.”
In _Proceedings of the 2021 ACM Conference on Fairness, Accountability,
and Transparency_, 375–85. FAccT ’21. New York, NY, USA: Association for
Computing Machinery. <https://doi.org/10.1145/3442188.3445901>.

</div>

<div id="ref-jenningsAutomatedNegotiationProspects2001"
class="csl-entry">

Jennings, N. R., P. Faratin, A. R. Lomuscio, S. Parsons, M. J.
Wooldridge, and C. Sierra. 2001. “Automated Negotiation: Prospects,
Methods and Challenges.” _Group Decision and Negotiation_ 10 (2):
199–215. <https://doi.org/10.1023/A:1008746126376>.

</div>

<div id="ref-kuhnStructureScientificRevolutions1996" class="csl-entry">

Kuhn, Thomas S. 1996. _The Structure of Scientific Revolutions_. 3rd ed.
Chicago: University of Chicago Press.
<http://catdir.loc.gov/catdir/toc/uchi051/96013195.html>.

</div>

<div id="ref-neumayerDeathPenaltyAbolition2008" class="csl-entry">

Neumayer, Eric. 2008. “Death Penalty Abolition and the Ratification of
the Second Optional Protocol.” _The International Journal of Human
Rights_ 12 (1): 3–21. <https://doi.org/10.1080/13642980701725160>.

</div>

<div id="ref-pessachAlgorithmicFairness2020" class="csl-entry">

Pessach, Dana, and Erez Shmueli. 2020. “Algorithmic Fairness.”
_arXiv:2001.09784 \[Cs, Stat\]_, January.
<https://doi.org/10.48550/arXiv.2001.09784>.

</div>

<div id="ref-rahwanArgumentationBasedNegotiation2004" class="csl-entry">

Rahwan, Iyad, Sarvapali Ramchurn, Nicholas Jennings, Peter Mcburney, and
Simon Parsons. 2004. “Argumentation-Based Negotiation.” _The Knowledge
Engineering Review_ 18 (January).
<https://doi.org/10.1017/S0269888904000098>.

</div>

<div id="ref-rawlsTheoryJustice1973" class="csl-entry">

Rawls, John. 1973. _A Theory of Justice_. New ed. Oxford Paperbacks ; 301. Oxford: Oxford University Press.

</div>

<div id="ref-tangMetricEvaluatingNegotiation2018" class="csl-entry">

Tang, Xun, and Takayuki Ito. 2018. “Metric for Evaluating Negotiation
Process in Automated Negotiation.” In _2018 IEEE International
Conference on Agents (ICA)_, 26–29.
<https://doi.org/10.1109/AGENTS.2018.8460127>.

</div>

<div id="ref-wolffFairnessRespectEgalitarian1998" class="csl-entry">

Wolff, Jonathan. 1998. “Fairness, Respect, and the Egalitarian Ethos.”
_Philosophy & Public Affairs_ 27 (2): 97–122.
<https://doi.org/10.1111/j.1088-4963.1998.tb00063.x>.

</div>

</div>

[^1]:
    _Opponent modeling_ is when one tries to estimate the preference
    profile of their adversary. This allows for more selective
    consideration of bids and, by extension, a quicker resolution of the
    negotiation process (Carmel and Markovitch 1996).

[^2]:
    For brevity, I will often refer to SAOP and ABN as "the
    protocols". Even though, as mentioned before, this is not
    technically correct.

[^3]:
    I'm oversimplifying here, but that is exactly the point. There are
    nuances to the term depending on your stance. Even including them,
    counterarguments are rarely in short supply.

[^4]:
    I'm oversimplifying here, but that is exactly the point. There are
    nuances to the term depending on your stance. Even including them,
    counterarguments are rarely in short supply.

[^5]:
    In this discussion, I will use the term essentially contested
    concept and fairness interchangeably for the purposes of
    readability. Anything said in this section applies to all
    essentially contested concepts, unless explicitly mentioned that it
    is not.

[^6]:
    Importantly, it does not mean that a discussion is _sufficient_
    for something to be a essentially contested (i.e. discussion implies
    essentially contestedness).

[^7]:
    There are, of course, scenarios in which one would be better of
    excluding certain people from the discussion. Especially if people
    are uninformed, or worse, _think they are informed_ about a certain
    context of fairness. But this is out of scope of the discussion and
    not applicable to the current scenario of complex systems, since
    problem is that there are not enough people that can have an opinion
    on the matter.

[^8]:
    This does require a computer to express its motivations and
    reasoning in natural language. Recent advancements in the field of
    _eXplainable Artificial Intelligence_, _XAI_, have shown some
    progress towards this goal (Hagras 2018).

[^9]:
    Here, we refer to an expert as someone with the knowledge required
    to create such an agent (i.e. a computer scientist).

[^10]:
    _Utility_ refers to the amount personal value, or reward, of
    something. In this case, it refers to the value of the outcome of a
    negotiation. Each party will have their own value attributed to the
    outcome, so they will attribute different _utility_ to it.

[^11]:
    This does require a computer to express its motivations and
    reasoning in natural language. Recent advancements in the field of
    _eXplainable Artificial Intelligence_, _XAI_, have shown some
    progress towards this goal (Hagras 2018).

[^12]:
    _Opponent modeling_ is when one tries to estimate the preference
    profile of their adversary. This allows for more selective
    consideration of bids and, by extension, a quicker resolution of the
    negotiation process (Carmel and Markovitch 1996).

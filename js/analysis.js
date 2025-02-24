// Text data for each section
const textData = {
    socialIssues: {
        title: "Relevance of Noli Me Tángere Today",
        content: [
            "Jose Rizal’s Noli Me Tangere remains relevant as it explores various social issues that are still happening in modern societies. The novel's exploration of social injustice, political corruption, and the struggle for true freedom resonates with ongoing challenges faced by Filipinos and people worldwide.",
            "One of the most pressing issues reflected in the novel is <b>social injustice</b>, especially in the Philippines, in the form of extrajudicial killings and human rights violations. This was evident in the \"war on drugs\" that began in 2016 and reportedly continued into the second year of President Ferdinand Marcos Jr.’s administration, despite his public pronouncements that the campaign would focus on treatment, rehabilitation, and reintegration (Amnesty International, n.d.). Moreover, the report also mentioned a media monitoring by the university-based research group Dahas, who reported that at least 329 people were killed in 2023 during the police-led anti-drug operations. This modern-day reality mirrors the novel's depiction of the abuse of power by the friars, particularly in how vulnerable individuals like Crispín and Basilio suffer under an oppressive system.",
            "<b>Political corruption</b> is another social issue highlighted by the novel that is still relevant today. Rizal's portrayal of the friars using religion for personal gain is related in contemporary government scandals. Barbo (2001) discusses the role of government agencies in money-related transactions. According to the report, certain government institutions such as the Department of Education where officials who are meant to instill values are involved in questionable activities including misuse of education funds, ghost projects, and procurement fraud. This reflects the novel's portrayal of the friars, who abuse their religious authority to maintain control over the people. Just as the friars in the novel manipulate faith to control society, modern government officials misuse public trust for personal benefit, continuing the cycle of corruption and inequality.",
            "Lastly, the novel also portrays the <b>struggle for freedom</b> of our fellowmen during the Spanish colonial period, which remains relevant today. In recent years, the practice of red-tagging has become increasingly common in the Philippines. Red-tagging refers to the act of accusing individuals or organizations of having ties to the communist insurgency (Philippines | The Global State of Democracy, n.d.). This practice often serves as a form of harassment against political activists, journalists, and human rights defenders, and has been linked to a rise in human rights violations, including threats, unlawful arrests, and even extrajudicial killings. This practice, which restricts freedom, reflects Rizal's message that true freedom extends beyond political independence to address freedom from fear and repression.",
            "As we can see, the struggles of Filipinos that Rizal wrote about in Noli Me Tangere are still happening today. While we no longer have Spanish friars controlling society, there are modern-day Padre Damasos and Padre Salvis who commit the same abuses—those who misuse their power, prioritize their personal interests, and would not hesitate to sacrifice the vulnerable for their own gain. To put an end to this, we must not be like María Clara—the ones who remain passive, turn a blind eye, and tolerate the wrongdoings of others. Instead, we should be courageous and vigilant, speaking out against injustice and working toward a society where truth and freedom prevail."
        ]
    },
    politicalCorruption: {
        title: "The Enduring Message of Education, Social Reform,<br>and True Freedom",
        content: [
            "Jose Rizal’s Noli Me Tangere delivers a powerful message about the role of education, social reform, and true freedom in creating a just society. Through emphasis on the injustices that the characters faced, it is clear that Rizal wanted to inform the readers that ignorance allows oppression to thrive and nothing is going to stop that but knowledge and reform.",
            "In the novel, Crisóstomo Ibarra’s desire to build a school reflects José Rizal’s belief that education is a powerful tool that empowers people to challenge unjust systems. This theme is further emphasized through the tragic experiences of Crispín and Basilio, whose lack of education leaves them vulnerable to abuse. Crispín, for instance, is falsely accused of stealing from the church. Without education, he lacks the knowledge and skills to defend himself or understand his rights. Through these characters, Rizal conveys a vital message: education is our weapon against those who abuse their power. It opens our eyes to recognize injustice, evaluate the need for reform, and ensure that the most vulnerable in society are protected. ",
            "Aside from education, Rizal also wanted his readers to understand the importance of social reform. Initially, Crisostomo Ibarra believed in peaceful reform, trusting that positive change can be achieved by working within the system. He gives the people in power the benefit of the doubt, hoping that his mere cooperation will improve the lives of Filipinos. This belief is reflected in his plan to build a school, symbolizing his faith that education can gradually bring social transformation. However, as the story progresses, Ibarra realizes that the friars are unwilling to embrace reform and will go to extreme lengths to protect their power. Through Ibarra’s journey, Rizal suggests that while peaceful change is ideal, genuine social reform requires courage, persistence, and, at times, direct action when the system refuses to change.",
            "Lastly, the novel argues that true freedom is not just the absence of colonial rule, but also the freedom from ignorance, fear, and corruption. Rizal suggests that without these forms of freedom, genuine social progress cannot be achieved. Maria Clara, for example, symbolizes powerlessness despite her social status. She is controlled by her biological father, Padre Damaso, by using his authority and manipulation to shape her decisions. She was expected to be obedient and compliant, denied to make informed decisions. Her lack of freedom is most evident when she is forced to marry someone she doesn't love and when she refuses, her only option is to enter the convent which clearly shows how limited options are, especially to women in an oppressive society. Through Maria Clara’s struggles, Rizal emphasizes that a society is not truly free if the marginalized people, regardless of their gender or status, remain oppressed and voiceless."
        ]
    },
    struggleForFreedom: {
        title: "Inspiring Critical Thinking and Social Action",
        content: [
             "Noli Me Tangere not only reflects social issues of Rizal’s time but also encourages readers to engage in critical thinking and take social action. The novel invites readers to question systems of power and understand how these structures affect our society. By highlighting the abuses committed by the friars in the novel, Rizal prompts us to ask: Who holds power today? Is it being misused? If so, how can we stop it? These series of questions help us readers gain a deep understanding of social inequalities and challenges us to seek solutions.",
             "Moreover, the novel illustrates how silence and inaction enable oppression. Characters such as Maria Clara represent passivity, while Ibarra’s character development shows the importance of challenging unjust systems. Not only does this enable readers to recognize injustice but also encourage them to participate in addressing societal problems.",
             "Therefore, Noli Me Tangere serves as a reminder that true change begins when people are willing to correct social injustices. It urges readers to remain vigilant and proactive, inspiring them to resist injustice and advocate for a society where truth and equity prevail. Rizal's message still applies today, urging us to think critically and take action against social injustice."
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.readMore');
    const modal = document.getElementById('modalAnalysis');
    const dynamicContent = document.getElementById('dynamicContent');
    const closeModalButton = document.getElementById('closeAnalysis');
    const modalTitle = document.getElementById('modalTitle');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        document.getElementById("banner").style.display = 'none';
        document.body.classList.add('modal-open');

        setTimeout(() => {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '8px';
        }, 10);
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '';

        setTimeout(() => {
            modal.style.display = 'none';
            document.getElementById("banner").style.display = 'block';
            document.body.classList.remove('modal-open');
        }, 300);
    }

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            const sectionData = textData[section];

            dynamicContent.innerHTML = '';
            modalTitle.innerHTML = sectionData.title;

            // Add new content
            sectionData.content.forEach(text => {
                const p = document.createElement('p');
                p.innerHTML = text;
                dynamicContent.appendChild(p);
            });

            openModal('modalAnalysis');
        });
    });

    closeModalButton.addEventListener('click', () => {
        closeModal('modalAnalysis');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal('modalAnalysis');
        }
    });
});
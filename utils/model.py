import nlpcloud
import sys
import json
import os
# client = nlpcloud.Client(
#     "fast-gpt-j", "f701781ebfa97612580d11eae11ac9c2157e2db9", gpu=True)
generation = client.generation("""[Original]: America has changed dramatically during recent years. Not only has the number of graduates in traditional engineering disciplines such as mechanical, civil, electrical, chemical, and aeronautical engineering declined, but in most of the premier American universities engineering curricula now concentrate on and encourage largely the study of engineering science.  As a result, there are declining offerings in engineering subjects dealing with infrastructure, the environment, and related issues, and greater concentration on high technology subjects, largely supporting increasingly complex scientific developments. While the latter is important, it should not be at the expense of more traditional engineering.
        Rapidly developing economies such as China and India, as well as other industrial countries in Europe and Asia, continue to encourage and advance the teaching of engineering. Both China and India, respectively, graduate six and eight times as many traditional engineers as does the United States. Other industrial countries at minimum maintain their output, while America suffers an increasingly serious decline in the number of engineering graduates and a lack of well-educated engineers. 
        (Source:  Excerpted from Frankel, E.G. (2008, May/June) Change in education: The cost of sacrificing fundamentals. MIT Faculty 
        [Summary]: MIT Professor Emeritus Ernst G. Frankel (2008) has called for a return to a course of study that emphasizes the traditional skills of engineering, noting that the number of American engineering graduates with these skills has fallen sharply when compared to the number coming from other countries. 
        ###
        [Original]: So how do you go about identifying your strengths and weaknesses, and analyzing the opportunities and threats that flow from them? SWOT Analysis is a useful technique that helps you to do this.
        What makes SWOT especially powerful is that, with a little thought, it can help you to uncover opportunities that you would not otherwise have spotted. And by understanding your weaknesses, you can manage and eliminate threats that might otherwise hurt your ability to move forward in your role.
        If you look at yourself using the SWOT framework, you can start to separate yourself from your peers, and further develop the specialized talents and abilities that you need in order to advance your career and to help you achieve your personal goals.
        [Summary]: SWOT Analysis is a technique that helps you identify strengths, weakness, opportunities, and threats. Understanding and managing these factors helps you to develop the abilities you need to achieve your goals and progress in your career.
        ###
        [Original]: Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
        Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements,[21] but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator).
        [Summary]: Jupiter is the largest planet in the solar system. It is a gas giant, and is the fifth planet from the sun.
        ###
        [Original]: The popularity of Binance Coin has changed by 1.24%/in the last 24hrs indicating a high social media engagement. The overall social score for the coin is 377 thousand. The average sentiment for the coin as a whole has changed by -2.63%. The twitter engagement includes 383 tweets and 376.8 thousand twitter followers. The average tweet sentiment is 76.6.
        [Paraphrase]:""",
    length_no_input=True,
    end_sequence="\n###",
    remove_end_sequence=True,
    remove_input=True,
    min_length=20,
    temperature=0.3,
    max_length=512)

print(generation["generated_text"])
# print("Hello from model.py", sys.argv[1])
# print("Hello from model.py")
# simple argument echo script
# for v in sys.argv[1:]:
#   print(v)

# for line in sys.stdin:
#     line = line.replace('$', os.linesep)
#     print(line[:-1], end='')
sys.stdout.flush()

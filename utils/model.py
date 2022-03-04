from parrot import Parrot
import torch
import warnings
import re
import sys
warnings.filterwarnings("ignore")

def preprocess_data(data):
    return data.replace("%", "per").replace(" -", " ").split(". ")


def run_model(phrases):
    out_data = ""
    for phrase in phrases:
        para_phrases = parrot.augment(
            input_phrase=phrase, use_gpu=False, diversity_ranker="levenshtein", do_diverse=True)
        try:
            for para_phrase in para_phrases:
                out_data += para_phrase[0].replace("per", "%").capitalize() + ". "
                break
        except:
            phrase = phrase.replace(".", "dot")
            para_phrases = parrot.augment(
                input_phrase=phrase, use_gpu=False, diversity_ranker="levenshtein", do_diverse=True)
            for para_phrase in para_phrases:
                out_data += para_phrase[0].replace("per",
                                                   "%").replace("dot", ".").capitalize() + ". "
                break

    out_data = re.sub('\ 0', ' 0.', out_data)

    return out_data

# uncomment to get reproducable paraphrase generations
# def random_state(seed):
#   torch.manual_seed(seed)
#   if torch.cuda.is_available():
#     torch.cuda.manual_seed_all(seed)

# random_state(1234)
# sys.argv[1]
# Init models (make sure you init ONLY once if you integrate this to your code)
parrot = Parrot(model_tag="prithivida/parrot_paraphraser_on_T5")
coin_summary = run_model(preprocess_data(sys.argv[1]))
coin_sentiment = run_model(preprocess_data(sys.argv[2]))
coin_technical = run_model(preprocess_data(sys.argv[3]))
coin_recommendation = run_model(preprocess_data(sys.argv[4]))

data = {
    "summary": coin_summary,
    "sentiment": coin_sentiment,
    "technical": coin_technical,
    "recommendation": coin_recommendation
}

print(data)


# print(out_data)
# print('Hello from python')

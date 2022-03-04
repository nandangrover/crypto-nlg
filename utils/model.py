from parrot import Parrot
import torch
import warnings
import re
warnings.filterwarnings("ignore")

# uncomment to get reproducable paraphrase generations
# def random_state(seed):
#   torch.manual_seed(seed)
#   if torch.cuda.is_available():
#     torch.cuda.manual_seed_all(seed)

# random_state(1234)
sys.argv[1]
#Init models (make sure you init ONLY once if you integrate this to your code)
parrot = Parrot(model_tag="prithivida/parrot_paraphraser_on_T5")
coin_summary = "The live XRP price today is 0.81 USD with a 24-hour trading volume of 2,270,743,870.08 US Dollars. The XRP price had a loss of -0.76% in the last 24 hours. But it only went down -2.14% over the week. The Market cap of the XRP is 38,736,473,905 USD with a maximum supply of 100 billion XRP coins."
coin_summary = coin_summary.replace("%","per").replace(" -"," ").split(". ")
phrases = coin_summary

out_data = ""
for phrase in phrases:
  print("-"*100)
  print("Input_phrase: ", phrase)
  print("-"*100)
  para_phrases = parrot.augment(input_phrase=phrase,use_gpu=False,diversity_ranker="levenshtein",do_diverse=True)
  try:
    for para_phrase in para_phrases:
      out_data += para_phrase[0].replace("per","%") + ". "
      break
  except:
    phrase = phrase.replace(".","dot")
    para_phrases = parrot.augment(input_phrase=phrase,use_gpu=False,diversity_ranker="levenshtein",do_diverse=True)
    for para_phrase in para_phrases:
      out_data += para_phrase[0].replace("per","%").replace("dot",".") + ". "
      break

out_data = re.sub('\ 0', ' 0.', out_data)

print(out_data)

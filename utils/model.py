from parrot import Parrot
import torch
import warnings
warnings.filterwarnings("ignore")

# uncomment to get reproducable paraphrase generations
# def random_state(seed):
#   torch.manual_seed(seed)
#   if torch.cuda.is_available():
#     torch.cuda.manual_seed_all(seed)

# random_state(1234)

#Init models (make sure you init ONLY once if you integrate this to your code)
parrot = Parrot(model_tag="prithivida/parrot_paraphraser_on_T5", use_gpu=True)

phrases = ["The live ADA price today is 0.88 USD with a 24-hour trading volume of 1,302,118,339.57 USD. The Cardano price went down by -1.21% in the last 24 hours. It gained 2.97% in the last 7 days. The Market cap of the Cardano is 28,354,543,219 USD with a maximum supply of 45 billion ADA coins.",
           "What are the famous places we should not miss in Russia?"
]

for phrase in phrases:
  print("-"*100)
  print("Input_phrase: ", phrase)
  print("-"*100)
  para_phrases = parrot.augment(input_phrase=phrase, use_gpu=False,
                               diversity_ranker="levenshtein",
                               do_diverse=True, 
                               max_return_phrases = 10, 
                               max_length=512, 
                               adequacy_threshold = 0.99, 
                               fluency_threshold = 0.90)
  for para_phrase in para_phrases:
   print(para_phrase)
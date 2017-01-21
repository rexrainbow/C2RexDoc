import os, glob, json
import os.path as op

myPath = op.dirname(op.realpath(__file__))
repoJson = []
for f in glob.glob(op.join(myPath, "*.json")):
  if op.split(f)[1] == "repo.json":
    continue
  repoJson.append( json.load(open(f, "r")) )

json.dump(repoJson, open(op.join(myPath , "repo.json"), 'w'), sort_keys=True, indent=4, separators=(',', ': ')  )
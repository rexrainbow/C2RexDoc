import os, glob, json
import os.path as op

myPath = op.dirname(op.realpath(__file__))
repoJson = []
mdF = open(op.join(myPath, "index.md"), "w")
serverRoot = "https://rexrainbow.github.io/C2RexDoc/repo/"

for f in glob.glob(op.join(myPath, "*.json")):
  if op.split(f)[1] == "repo.json":
    continue
  
  pluginJson = json.load(open(f, "r"))
  repoJson.append( pluginJson )
  mdF.write("- [{name}]({server}/{name}.7z)  \n".format(name=pluginJson.get("name"), server=serverRoot))

json.dump(repoJson, open(op.join(myPath , "repo.json"), 'w'), sort_keys=True, indent=4, separators=(',', ': ')  )
mdF.close()
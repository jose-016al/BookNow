import clr

clr.AddReference('RebitServices')
import RebitServices
from RebitServices.Persistence import DocumentManager

clr.AddReference('RevitAPI')
import Autodesk
from Autodesk.Revit.DB import *

doc = DocumentManager.Instance.CurrentDBDocument

def uwlist(input):
    result = input if isinstance(input, list) else [input]
    return UnwrapElement(result)

sheets = uwlist(IN[0])

revSecs = FilteredElementCollector(doc).OfClass(RevisionNumberingSequence).toElements()
revIds = Revision.GetAllRevisionIds(doc)
revs = [doc.getElement(i) for i in revIds]

[revs]

for i in revIds:
    revs.append(doc.GetElement(i))

OUAT = revs
package com.ebiznext.comet.utils

import com.ebiznext.comet.model.CometModel.{ Node, TagValue }
import com.ebiznext.comet.utils.SerDeUtils.{ deserialize, serialize }
import org.scalatest.FlatSpec

/**
 * Created by Mourad on 23/07/2018.
 */
class SerDeUtilsSpec extends FlatSpec {

  "SerDeUtils" should "work on any Type" in {
    import SerDeUtils._
    val id: Int = 12345
    val key: String = "KEY1"
    val caseClass: TagValue = TagValue(name = "tagId", value = "tag1")

    assert(id == deserialize[Integer](serialize(Integer.valueOf(id))).get)
    assert(key == deserialize[String](serialize(key)).get)
    assert(caseClass == deserialize[TagValue](serialize(caseClass)).get)

  }

  it should "work with multi level nested objects" in {
    val document: Node = Node("Server1", Set(TagValue("SSS", "SSM")))

    assert(document == deserialize[Node](serialize(document)).getOrElse(Node.empty))

  }
}

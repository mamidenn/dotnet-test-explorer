using NUnit.Framework;

namespace NUnitTests;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        Assert.Fail();
    }

    [TestCase("1")]
    [TestCase("2")]
    [TestCase(3)]
    public void Test2()
    {
        Assert.Pass();
    }
}
